(function (app, undefined) {
	"use strict";

	app.controller("indexCtrl", Controller);

	function Controller ($scope, indexFactory) {
		console.log("controlling index");
	}

})(angular.module("planning-poker"));
