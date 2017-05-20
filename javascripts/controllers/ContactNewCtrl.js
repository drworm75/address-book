app.controller("ContactNewCtrl", function($location, $scope, ContactFactory)  {
		$scope.title = "New Contact";
		$scope.addNewContact = () => {
			console.log("NewCtrl");
	    ContactFactory.postNewContact($scope.newContact).then(() => {
			$scope.newContact = {};
			$location.url("/contacts/list");
			// getContacts();
	    }).catch((error) => {
			console.log("Add error", error);
	    });
	  };
});
