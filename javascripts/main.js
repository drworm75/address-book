var app = angular.module("AddressBook", []);

app.controller ("ContactInfo", ($scope) => {

	$scope.contacts = [
		{
			name: "Terry Moore",
			phone: "615-555-7771",
			job: "Artist",
		},
		{
			name: "Jonathan Coulton",
			phone: "615-555-9292",
			job: "Singer",
		},
		{
			name: "Steve Womack",
			phone: "615-555-5872",
			job: "Writer",
		},
		{
			name: "Stephen Lackey",
			phone: "615-555-4444",
			job: "Director",
		},
	];
});

