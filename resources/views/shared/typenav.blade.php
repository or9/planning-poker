@section("type")

<nav ng-controller="indexCtrl as INDEX">
	<fieldset>
		<legend>Scoring Type</legend>

		<label for="scoring_points">Points</label>
		<input id="scoring_points" 
			type="radio" 
			ng-model="scoringType"
			value="points" />

		<label for="scoring_relative">Relative</label>
		<input id="scoring_relative" 
			type="radio" 
			ng-model="scoringType"
			value="relative" />

	</fieldset>

</nav>

@endsection
