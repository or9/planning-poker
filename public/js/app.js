(function (undefined) {
	"use strict";

	angular.module("planning-poker", [
		"ngRoute",
		"planning-poker.ctrl.index",
		"planning-poker.ctrl.session",
		"planning-poker.ctrl.active",
		"or9.directives.cards"
		])
		.config(config)
		.run(run);

	function config ($routeProvider, $interpolateProvider) {
		console.log("config'ing");

		$interpolateProvider.startSymbol("[[");
		$interpolateProvider.endSymbol("]]");

		$routeProvider
			.when("/", {
				controller: "indexCtrl",
				controllerAs: "INDEX",
				templateUrl: "/js/views/index.html"
			})
			.when("/:SESSION_ID", {
				controller: "sessionCtrl",
				controllerAs: "SESSION",
				templateUrl: "/js/views/session.html"
			})
			.when("/active", {
				controller: "activeSessionsCtrl",
				controllerAs: "ACTIVE",
				templateUrl: "/js/views/active.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	}

	function run () {
		console.log("running");
	}

})();

(function (module, undefined) {
	"use strict";

	module.controller("indexCtrl", Controller);

	function Controller ($scope, indexFactory) {
		console.log("controlling index");
		this.greet = "Index >:";
	}

})(angular.module("planning-poker.ctrl.index", []));

(function (module, undefined) {
	"use strict";

	module.factory("indexFactory", Factory);

	function Factory ($http) {
		console.log("servicing index");

		return {
		};
	}

})(angular.module("planning-poker.ctrl.index"));

(function (module, undefined) {
	"use strict";

	module.controller("sessionCtrl", Controller);

	function Controller ($scope, sessionFactory) {
		console.log("controlling session");
	}

})(angular.module("planning-poker.ctrl.session", []));

(function (module, undefined) {
	"use strict";

	module.factory("sessionFactory", Factory);

	function Factory ($http) {
		console.log("servicing session");

		return {
			users: users
		};

		function users () {
		}
	}

})(angular.module("planning-poker.ctrl.session"));

(function (module, undefined) {
	"use strict";

	module.controller("activeSessionsCtrl", Controller);

	function Controller ($scope, activeSessionsFactory) {
		console.log("controlling active");
	}

})(angular.module("planning-poker.ctrl.active", []));

(function (module, undefined) {
	"use strict";

	module.factory("activeSessionsService", Factory);

	function Factory ($http) {
		console.log("servicing active");

		return {
		};
	}

})(angular.module("planning-poker.ctrl.active"));

(function (module, undefined) {
	"use strict";

	module.directive("planning-cards", directive);

	function directive () {
		return {
			scope: "isolate",
			templateUrl: "/js/components/cards.html",
			replace: true,
			restrict: "E"
		};
	}

})(angular.module("or9.directives.cards", ["or9.directives.card"]));

(function (module, undefined) {
	"use strict";

	module.directive("planning-card", directive);

	function directive () {
		return {
			scope: "isolate",
			templateUrl: "/js/components/card.html",
			replace: true,
			restrict: "E"
		};
	}

})(angular.module("or9.directives.card", []));

//# sourceMappingURL=app.js.map
