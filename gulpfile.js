var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
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

});
