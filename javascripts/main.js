app.controller ("ContactCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
	$scope.showContactView = true;
	$scope.contacts = [];
	



	let getContactList = () => {
		let info = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
			.then((fbItems) => {
				var contactCollection = fbItems.data;
				Object.keys(contactCollection).forEach((key) => {
					contactCollection[key].id=key;
					console.log("id", contactCollection[key].id);
					info.push(contactCollection[key]);
				});
				resolve(info);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let getContacts = () => {
		getContactList().then((info) => {
			$scope.contacts = info;
			console.log("scope contacts", $scope.contacts);
		}).catch((error) => {
			console.log("get error", error);
		});
	};

	getContacts();


});

