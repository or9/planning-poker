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

	module.controller("sessionCtrl", ["$scope", "$rootScope", "sessionFactory", Controller]);

	Controller.prototype = Object.create(Controller.prototype, {
		user: { writable: true, enumerable: true, value: userModel() },
		users: { writable: true, enumerable: true, value: [] },

		id: { writable: true, enumerable: true, value: 0 },

		type: { writable: true, enumerable: true, value: "" }
	});	

	function Controller ($scope, $rootScope, sessionFactory) {
		console.log("controlling session");

		this.users.push(this.user);
		this.type = $rootScope.scoringType;

		this.test = function (thing) {console.log("wtf", thing);};
		this.cardSelect = cardSelect;

		function cardSelect (card) {
			console.log("selected ", card);
		}
	}

	function userModel () {
		return {
			id: 0,
			name: "anonymous"
		};
	}

})(angular.module("planning-poker.ctrl.session", [
	"planning-poker.service.session",
	"or9.directives.numbercard"
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
			scope: {
				select: "&onSelect",
				shit: "=bullShit"
			},
			templateUrl: "/js/components/cards.html",
			transclude: true,
			replace: true,
			restrict: "E"
		};
	}

})(angular.module("or9.directives.cards", []));

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
