(function (doc, undefined) {
	"use strict";

	angular.module("planning-poker", [
		"ngRoute",
		"planning-poker.ctrl.index",
		"planning-poker.ctrl.session",
		"planning-poker.ctrl.active"
		])

		.config([ "$routeProvider",
			"$interpolateProvider",
			config ])

		.run([ "$location", 
			run ]);

	function config ($routeProvider, $interpolateProvider) {
		console.log("config'ing");

		$interpolateProvider.startSymbol("[[");
		$interpolateProvider.endSymbol("]]");

		$routeProvider
			.when("/", {
				controller: "indexCtrl",
				controllerAs: "INDEX",
				templateUrl: "/js/views/index.html"
			})
			.when("/:SESSION_ID", {
				controller: "sessionCtrl",
				controllerAs: "SESSION",
				templateUrl: "/js/views/session.html"
			})
			.when("/active", {
				controller: "activeSessionsCtrl",
				controllerAs: "ACTIVE",
				templateUrl: "/js/views/active.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	}

	function run ($location) {
		var sessionId = doc.querySelector("#flash").innerHTML;

		doc.querySelector("#flash").innerHTML = "";
		$location.path(sessionId);

	}

})(document);
