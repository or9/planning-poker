@extends("index")
@section("content")

<section id="session">

	<h2>Join Existing Session</h2>
	<p>You want to join this session, {{{ $message }}}</p>

	<nav>
		<fieldset>

			<legend>Scoring Type</legend>
			<label for="scoring_points">Points</label>
			<input id="scoring_points" type="radio" name="scoringType" value="points" />

			<label for="scoring_relative">Relative</label>
			<input id="scoring_relative" type="radio" name="scoringType" value="relative" />

		</fieldset>

	</nav>

	<ng-view></ng-view>

</section>

@stop
