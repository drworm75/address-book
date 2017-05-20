app.controller("ContactEditCtrl", function($scope, $routeParams, $location, ContactFactory)  {
$scope.title = "Edit Contact";
$scope.newContact = {};

  ContactFactory.getSingleContact($routeParams.id).then((results) => {
  	console.log("results", results);
  	$scope.newContact = results.data;
  }).catch((error) => {
  	console.log("getSingleItem", error);
  });

  $scope.addNewContact = () => {
  	ContactFactory.editContact($scope.newContact).then(() => {
  		$location.url('/items/list');
  	}).catch((error) => {
  		console.log("editItem", error);
  	});
  };
});