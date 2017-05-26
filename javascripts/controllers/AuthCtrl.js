app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory, UserFactory){
	console.log("AuthCtrl");
	// Create array to push alert messages to
	$scope.alerts = [];

	// Login fill
	$scope.auth = {
		email: "a@a.com",
		password: "aaaaaa"
	};

	// If the path is /logout, run logout function, clear user, return to /auth
	if($location.path() === '/logout'){
		AuthFactory.logout();
		$rootScope.user = {};
		$location.url('/auth');
	}

	// Login user 
	let logMeIn = () =>{
		AuthFactory.authenticate($scope.auth).then((userCreds) => {
			return UserFactory.getUser(userCreds.uid);
		}, (error) => {
		    $scope.alerts.push({msg: error.message});
			console.log("authenticate error", error);
		}).then((user) => {
			console.log("running logMeIn");
			$rootScope.user = user;
			$location.url('/contacts/list');
		}).catch((error) => {
			console.log("getUser error", error);
		});
	};

	// Registering a new user
	$scope.registerUser = () => {
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
			$scope.auth.uid = didRegister.uid;
			return UserFactory.addUser($scope.auth);
		}, (error) => {
			console.log("registerWithEmail error", error);
		}).then((registerComplete) => {
			logMeIn();
		}).catch((error) => {
			console.log("addUser error", error);
		});
	};

	$scope.loginUser = () => {
		logMeIn();
	};
});