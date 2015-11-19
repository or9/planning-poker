(function (module, doc, undefined) {
	"use strict";

	module.controller("indexCtrl", ["$scope", "$rootScope", "indexFactory", Controller]);

	function Controller ($scope, $rootScope, indexFactory) {
		console.log("controlling index");

		this.scoringType = "";
		this.sessionId = 0;

		this.sessions = [{
			id: 0,
			name: "default",
			users: [],
			type: this.scoringType,
			private: false
		}];

		this.scoringTypeChange = scoringTypeChange.bind(this);

		function scoringTypeChange (element) {
			console.log("change", element);
			$rootScope.scoringType = this.scoringType;
		}


	}

})(angular.module("planning-poker.ctrl.index", [
	//"or9.directives.cards"
	"or9.directives.sessionSummary"
]));
