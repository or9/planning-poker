(function (app, undefined) {

	app.factory("sessionFactory", Factory);

	function Factory ($http) {

		return {
			users: users
		};

		function users () {
		}
	}

})(angular.module("planning-poker"));
