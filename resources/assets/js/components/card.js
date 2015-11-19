(function (module, undefined) {
	"use strict";

	module.directive("numberCard", directive);

	function directive () {
		return {
			scope: {
				number: "=number",
				select: "&onClick"
			},
			transclude: true,
			templateUrl: "/js/components/card.html",
			replace: true,
			restrict: "E"
		};
	}

})(angular.module("or9.directives.numbercard", []));
