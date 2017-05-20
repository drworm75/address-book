app.controller("NavCtrl", ($scope) => {
	$scope.navItems = [{navBarItem: "Logout"}, {navBarItem: "Show All Contacts"}, {navBarItem: "Search Contacts"}, {navBarItem: "New Contact"}];
	$scope.newContact = (linkName) => {
		console.log("Button Clicked-linkName =", linkName);
		if (linkName === "New Contact") {
			window.location = "#!/contacts/new";
		}
		else {
			document.location.href = "#!/partials/contact-new.html";
		}
	};
});