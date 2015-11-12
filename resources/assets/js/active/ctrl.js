(function (module, undefined) {
	"use strict";

	module.controller("activeSessionsCtrl", Controller);

	function Controller ($scope, activeSessionsFactory) {
		console.log("controlling active");
	}

})(angular.module("planning-poker.ctrl.active", []));
