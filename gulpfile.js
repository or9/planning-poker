var elixir = require('laravel-elixir');
var gulp = require("gulp");
var exec = require("child_process").exec;
var sys = require("sys");

// elixir will override default gulp task and is useless
// workaround is to place useful gulp task after
elixir(elixirCrap);
gulp.task("watch", watchTask);

function watchTask () {
	gulp.watch([
		"resources/**/*",
		"app/**/*"
	], watchResult);
}

function watchResult (e) {

	return exec("gulp", callback);

	function callback (err, stdout) {
		sys.puts(stdout);
	}
}

function elixirCrap (mix) {
    mix.sass('app.scss');

    mix.scripts([
	    "../bower_components/angular/angular.min.js",
	    "../bower_components/angular-route/angular-route.min.js"
    ], "public/js/vendor.js");

    mix.scripts([
	    "../js/index.js",
	    "../js/index-ctrl.js",
	    "../js/index-service.js",

	    "../js/session/ctrl.js",
	    "../js/session/service.js",

	    "../js/active/ctrl.js",
	    "../js/active/service.js",

	    "../js/components/cards.js",
	    "../js/components/card.js"

    ], "public/js/app.js");

    // copy requires full path; cannot be relative as above -_-
    // copy cannot exclude files using "!" -_-
    mix.copy([
	    "resources/assets/js/active/active.html",
	    "resources/assets/js/session/session.html",
	    "resources/assets/js/*.html"

    	], "public/js/views");

}

