@extends("index")
@section("content")

<section id="session">

	<h2>Join or Create</h2>
	<p>You probably want to join a session. How about this one? 
		<ng-href="/{{{message}}}">{{{ $message }}}</ng-href>
	</p>

	<p>
		<ul>
		<li>// Considerations</li>
		<li>// Is `room` open?</li>
		<li>// Is `room` occupied?</li>
		<ul><li>// Occupied by your group?</li></ul>
		<li>// Do you want to create your own room?</li>
		<li>// Is it private? (invisible)</li>
		<li>// Topic?</li>
		<li>// Diagrams, drawings, chat?</li>
		</ul>
	</p>

	<ng-view></ng-view>

</section>

@stop
