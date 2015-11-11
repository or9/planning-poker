(function (undefined) {
	"use strict";

	angular.module("planning-poker", ["ngRoute"])
		.config(config)
		.run(run);

	function config ($routeProvider, $interpolateProvider) {
		console.log("config'ing");

		$interpolateProvider.startSymbol("[[");
		$interpolateProvider.endSymbol("]]");

		$routeProvider
			.when("/", {
				controller: "indexCtrl",
				controllerAs: "INDEX",
				templateUrl: "js/views/index.html"
			})
			.when("/:SESSION_ID", {
				controller: "sessionCtrl",
				controllerAs: "SESSION",
				templateUrl: "js/views/session.html"
			})
			.when("/active", {
				controller: "activeSessionsCtrl",
				controllerAs: "ACTIVE",
				templateUrl: "js/views/active.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	}

	function run () {
		console.log("running");
	}

})();
