(function (module, undefined) {
	"use strict";

	module.factory("activeSessionsService", Factory);

	function Factory ($http) {
		console.log("servicing active");

		return {
		};
	}

})(angular.module("planning-poker.ctrl.active"));
