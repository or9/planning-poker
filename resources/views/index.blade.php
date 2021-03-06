<!DOCTYPE html>
<html>
    <head>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Poker Planning</title>

	<link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
	<script src="{{ asset('/js/vendor.js') }}"></script>

	<script src="{{ asset('/js/app.js') }}"></script>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

    </head>

    <body ng-app="planning-poker">
	@section("header")

	<nav>
		<h1>Root</h1>
		<a href="/">Home</a>
	</nav>
	
	<p id="flash" class="flash">{{{ $message or "" }}}</p>
	@show

	@include("shared.errors")

	@include("shared.typenav")

	@yield("type")

	@yield("content")

	@section("footer")

	<footer>
		<?php echo "©" . date("Y") ?>
		<a href="https://github.com/or9/planning-poker">Source</a>
	</footer>

	@show
    </body>
</html>
