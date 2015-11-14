(function (module, doc, undefined) {
	"use strict";

	module.controller("indexCtrl", Controller);

	function Controller ($scope, indexFactory) {

		console.log("controlling index");


	}

})(angular.module("planning-poker.ctrl.index", [
	"or9.directives.cards"
]));
