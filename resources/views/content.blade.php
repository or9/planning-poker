@extends("index")
@section("content")

<section id="session">
	<nav>
		<fieldset>
			<legend>Scoring Type</legend>
			<label for="scoring_points">Points</label>
			<input id="scoring_points" type="" value="points" selected />
			<label for="scoring_relative">Relative</label>
			<input id="scoring_relative" type="" value="relative" />
		</ul>
	</nav>

	<h2>Content</h2>


	<ng-view></ng-view>

</section>

@stop
