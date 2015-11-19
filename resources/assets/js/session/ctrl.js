(function (module, undefined) {
	"use strict";

	module.controller("sessionCtrl", ["$scope", "$rootScope", "sessionFactory", Controller]);

	Controller.prototype = Object.create(Controller.prototype, {
		user: { writable: true, enumerable: true, value: userModel() },
		users: { writable: true, enumerable: true, value: [] },

		id: { writable: true, enumerable: true, value: 0 },

		type: { writable: true, enumerable: true, value: "" }
	});	

	function Controller ($scope, $rootScope, sessionFactory) {
		console.log("controlling session");

		this.users.push(this.user);
		this.type = $rootScope.scoringType;

		this.test = function (thing) {console.log("wtf", thing);};
		this.cardSelect = cardSelect;

		function cardSelect (card) {
			console.log("selected ", card);
		}
	}

	function userModel () {
		return {
			id: 0,
			name: "anonymous"
		};
	}

})(angular.module("planning-poker.ctrl.session", [
	"planning-poker.service.session",
	"or9.directives.numbercard"
]));

