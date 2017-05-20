app.controller("ContactListCtrl", function($scope, ContactFactory)  { 
	$scope.contacts = [];  
		let getContacts = () => {	
		ContactFactory.getContactList().then((itemz) => {
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
		console.log("contactChange & contact", contact);
		ContactFactory.editContact(contact).then(() => {
		}).catch((errror) => {
			console.log("contactChange", error);
		});
	};
});