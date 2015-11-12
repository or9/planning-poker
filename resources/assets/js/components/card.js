(function (module, undefined) {
	"use strict";

	module.directive("planningCard", directive);

	function directive () {
		return {
			scope: "isolate",
			templateUrl: "/js/components/card.html",
			replace: true,
			restrict: "E"
		};
	}

})(angular.module("or9.directives.card", []));
