(function (module, undefined) {
	"use strict";

	module.controller("indexCtrl", Controller);

	function Controller ($scope, indexFactory) {
		console.log("controlling index");
		this.greet = "Index >:";
	}

})(angular.module("planning-poker.ctrl.index", [
	"or9.directives.cards",
	"or9.directives.card"
]));
