(function (undefined) {
	"use strict";

	angular.module("planning-poker", ["ngRoute"])
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
				templateUrl: "js/views/index.html"
			})
			.when("/:SESSION_ID", {
				controller: "sessionCtrl",
				controllerAs: "SESSION",
				templateUrl: "js/views/session.html"
			})
			.when("/active", {
				controller: "activeSessionsCtrl",
				controllerAs: "ACTIVE",
				templateUrl: "js/views/active.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	}

	function run () {
		console.log("running");
	}

})();

(function (app, undefined) {
	"use strict";

	app.controller("indexCtrl", Controller);

	function Controller ($scope, indexFactory) {
		console.log("controlling index");
	}

})(angular.module("planning-poker"));

(function (app, undefined) {
	"use strict";

	app.factory("indexFactory", Factory);

	function Factory ($http) {
		return {
		};
	}

})(angular.module("planning-poker"));

(function (app, undefined) {

	app.controller("sessionCtrl", Controller);

	function Controller ($scope, sessionFactory) {
		console.log("controlling session");
	}

})(angular.module("planning-poker"));

(function (app, undefined) {

	app.factory("sessionFactory", Factory);

	function Factory ($http) {

		return {
			users: users
		};

		function users () {
		}
	}

})(angular.module("planning-poker"));

(function (app, undefined) {
	"use strict";

	app.controller("activeSessionsCtrl", Controller);

	function Controller ($scope, activeSessionsFactory) {
	}

})(angular.module("planning-poker"));

(function (app, undefined) {
	"use strict";

	app.factory("activeSessionsService", Factory);

	function Factory ($http) {
		return {
		};
	}

})(angular.module("planning-poker"));

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

//# sourceMappingURL=app.js.map
