@extends("index")
@section("content")

<section id="session">
	<nav>
		<fieldset>
			<legend>Scoring Type</legend>
			<label for="scoring_points">Points</label>
			<input id="scoring_points" type="radio" name="scoringType" value="points" ng-check="" />
			<label for="scoring_relative">Relative</label>
			<input id="scoring_relative" type="radio" name="scoringType" value="relative" ng-check="" />
		</ul>
	</nav>

	<h2>Blade Content</h2>

	<ng-view></ng-view>

</section>

@stop
