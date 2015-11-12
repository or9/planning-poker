(function (module, undefined) {
	"use strict";

	module.factory("indexFactory", Factory);

	function Factory ($http) {
		console.log("servicing index");

		return {
		};
	}

})(angular.module("planning-poker.ctrl.index"));
