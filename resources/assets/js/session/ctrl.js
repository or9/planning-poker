(function (module, undefined) {
	"use strict";

	module.controller("sessionCtrl", Controller);

	function Controller ($scope, sessionFactory) {
		console.log("controlling session");
	}

})(angular.module("planning-poker.ctrl.session", [
	"planning-poker.service.session"
]));
