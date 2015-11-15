@extends("index")
@section("content")

<section id="session">

	<h2>Join Existing Session</h2>
	<p>You want to join this session, 
		<ng-href="/{{{ message }}}">{{{ $message }}}</ng-href>
	</p>

	<ng-view></ng-view>

</section>

@endsection
