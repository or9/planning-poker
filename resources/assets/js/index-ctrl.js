(function (module, doc, undefined) {
	"use strict";

	module.controller("indexCtrl", Controller);

	function Controller ($scope, indexFactory) {

		this.scoringType = "";
		this.sessionId = 0;

		this.sessions = [{
			id: 0,
			name: "default",
			users: [],
			type: this.scoringType,
			private: false
		}];

		this.typeChange = typeChange;

		function typeChange (element) {
			console.log("change");
		}


	}

})(angular.module("planning-poker.ctrl.index", [
	//"or9.directives.cards"
	"or9.directives.sessionSummary"
]));
