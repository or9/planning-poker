(function (undefined) {
	"use strict";

	angular.module("directives.planning-card", [], directive);

	function directive () {
		return {
			scope: "isolate",
			templateUrl: "/js/components/card.html",
			replace: true,
			restrict: "E"
		};
	}

})();
