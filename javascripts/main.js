app.controller ("ContactCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
	$scope.showContactView = true;
	$scope.contacts = [];
	$scope.newContact = (linkName) => {
		console.log("linkName =", linkName);
		if (linkName === "New Contact") {
			$scope.showContactView =  false;
		}
		else if (linkName === "Show All Contacts") {
			$scope.showContactView =  true;

		}
	};



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

	$scope.addNewContact = () => {
	    postNewContact($scope.newContact).then(() => {
			$scope.newContact = {};
			$scope.showContactView =true;
			getContacts();
	    }).catch((error) => {
			console.log("Add error", error);
	    });
	  };
});

