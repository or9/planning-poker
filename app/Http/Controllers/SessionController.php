<?php

namespace App\Http\Controllers;

use Response;
use Redirect;

class SessionController extends Controller 
{

	public function create ( $id = false ) 
	{


		if ($id == false) {
			return $this->createRandomSession();
		}

		return Response::view("index");
	}

	public function joinSession ( $id = false ) 
	{

		if ($id == false) {
			return Redirect::route("createSession");
		}

		return Response::view("index");

	}

	public function viewAllSessions ()
	{
	}

	private function createRandomSession () 
	{
		$randomSessionId = substr(uniqid("", true), -5);
		return $this->joinSession($randomSessionId);
	}

}
