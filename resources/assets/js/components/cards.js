(function (undefined) {
	"use strict";

	angular.module("directive.cards", ["directive.planning-card"], directive);

	function directive () {
		return {
			scope: "isolate",
			templateUrl: "/js/components/cards.html",
			replace: true,
			restrict: "E"
		};
	}

})();
