app.controller("ContactListCtrl", function($scope, ContactFactory)  { 
	$scope.contacts = [];  
		let getItems = () => {	
		ContactFactory.getContactList().then((itemz) => {
			$scope.contacts = itemz;
			console.log($scope.contacts);
		}).catch((error) => {
			console.log("Add error", error);
		});
	};

	getItems();
});