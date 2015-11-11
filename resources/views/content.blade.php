@extends("index")
@section("content")

<section id="session">
	<h2>Content</h2>
	<p class="flash">{{{ $message }}}</p>
	<ng-view></ng-view>
</section>

@endsection
