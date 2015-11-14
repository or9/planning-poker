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

		.run([ "$rootScope", 
		     run ]);

	function config ($routeProvider, $interpolateProvider) {

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

			.when("/points", {
				controller: "",
				controllerAs: "",
				templateUrl: ""
			})

			.when("/relative", {
				controller: "",
				controllerAs: "",
				templateUrl: ""
			})
			
			.otherwise({ redirectTo: "/" });
	}

	function run ($rootScope) {
		var sessionIdContainer = doc.querySelector("#flash");
		$rootScope.sessionId = sessionIdContainer.innerHTML;
		sessionIdContainer.innerHTML = "";
	}

})(document);
