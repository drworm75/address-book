app.controller("ContactNewCtrl", function($location, $rootScope, $scope, ContactFactory)  {
		$scope.title = "New Contact";
		$scope.addNewContact = () => {
			console.log("NewCtrl");
			$scope.newContact.uid = $rootScope.user.uid;
	    ContactFactory.postNewContact($scope.newContact).then(() => {
			$scope.newContact = {};
			$location.url("/contacts/list");
			// getContacts();
	    }).catch((error) => {
			console.log("Add error", error);
	    });
	  };
});
