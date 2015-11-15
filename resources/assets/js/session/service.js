(function (module, undefined) {
	"use strict";

	module.factory("sessionFactory", Factory);

	function Factory ($http) {
		console.log("servicing session");

		return {
			users: users
		};

		function users () {
		}
	}

})(angular.module("planning-poker.service.session", []));
