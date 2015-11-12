(function (module, doc, undefined) {
	"use strict";

	module.controller("indexCtrl", Controller);

	function Controller ($scope, indexFactory) {

		this.sessionId = "";
		this.navigate = navigate.bind(this);


		function navigate (thing) {
			console.log("what's thing? ", thing);
			//this.location.path = location;
		}

	}

})(angular.module("planning-poker.ctrl.index", [
	"or9.directives.cards"
]));
