(function (doc, undefined) {
	"use strict";

	angular.module("planning-poker", [
		"ngRoute",
		"planning-poker.ctrl.index",
		"planning-poker.ctrl.session",
		"planning-poker.ctrl.active"
		])

		.config([ "$routeProvider",
			"$interpolateProvider",
			config ])

		.run([ "$rootScope", 
		     run ]);

	function config ($routeProvider, $interpolateProvider) {

		$interpolateProvider.startSymbol("[[");
		$interpolateProvider.endSymbol("]]");

		$routeProvider
			.when("/", {
				controller: "indexCtrl",
				controllerAs: "INDEX",
				templateUrl: "/js/views/index.html"
			})

			.when("/join", {
				controller: "sessionCtrl",
				controllerAs: "SESSION",
				templateUrl: "/js/views/session.html"
			})

			.when("/active", {
				controller: "activeSessionsCtrl",
				controllerAs: "ACTIVE",
				templateUrl: "/js/views/active.html"
			})
			
			.otherwise({ redirectTo: "/" });
	}

	function run ($rootScope) {
		var sessionIdContainer = doc.querySelector("#flash");
		$rootScope.sessionId = sessionIdContainer.innerHTML;
		sessionIdContainer.innerHTML = "";
	}

})(document);

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

})(angular.module("planning-poker.ctrl.session", [
	"planning-poker.service.session"
]));

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

})(angular.module("planning-poker.service.session", []));

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

	module.directive("planningCards", directive);

	function directive () {
		return {
			scope: {},
			templateUrl: "/js/components/cards.html",
			replace: true,
			restrict: "E"
		};
	}

})(angular.module("or9.directives.cards", [
	"or9.directives.card"
]));

(function (module, undefined) {
	"use strict";

	module.directive("planningCard", directive);

	function directive () {
		return {
			scope: {
				number: "=number"
			},
			templateUrl: "/js/components/card.html",
			replace: true,
			restrict: "E"
		};
	}

})(angular.module("or9.directives.card", []));

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

//# sourceMappingURL=app.js.map
