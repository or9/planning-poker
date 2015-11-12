(function (module, undefined) {
	"use strict";

	module.directive("planningCards", directive);

	function directive () {
		return {
			scope: "isolate",
			templateUrl: "/js/components/cards.html",
			replace: true,
			restrict: "E"
		};
	}

})(angular.module("or9.directives.cards", ["or9.directives.card"]));
