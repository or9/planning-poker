(function (module, undefined) {
	"use strict";

	module.directive("sessionSummary", directive);

	function directive () {
		return {
			scope: {
				session: "=session"
			},
			templateUrl: "/js/components/session-summary.html",
			replace: true,
			restrict: "E"
		};
	}

})(angular.module("or9.directives.sessionSummary", []));
