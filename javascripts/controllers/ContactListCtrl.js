app.controller("ContactListCtrl", function($location, $rootScope, $scope, ContactFactory)  { 
	$scope.contacts = [];  
	$scope.newContact = {};

		let getContacts = () => {	
		console.log("Calling getItems");
		console.log("rootScope", $rootScope);
		ContactFactory.getContactList($rootScope.user.uid).then((itemz) => {
			$scope.contacts = itemz;
			console.log($scope.contacts);
		}).catch((error) => {
			console.log("Add error", error);
		});
	};

	getContacts();

	$scope.deleteContact = (id) => {
		console.log("Delete Button Pressed");
		console.log("id", id);
		ContactFactory.remove(id).then(() => {
			getContacts();
		})
		.catch((error) => {
			console.log("deleteContact error", error);
		});
	};

	$scope.contactChange = (contact) => {
		ContactFactory.getSingleContact(contact).then((results) => {
			$scope.newContact = results.data;
			console.log("results.data", $scope.newContact);
		}).catch((error) => {
			console.log("getSingleItem", error);
		});
	};

  $scope.addNewContact = () => {
  	console.log($scope.newContact);
  	ContactFactory.editContact($scope.newContact).then(() => {
  		$location.url('/items/list');
  	}).catch((error) => {
  		console.log("editItem", error);
  	});
  };
});