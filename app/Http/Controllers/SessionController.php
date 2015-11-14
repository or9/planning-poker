<?php

namespace App\Http\Controllers;

use Request;
use Response;
use Redirect;

class SessionController extends Controller 
{

	public function create ( $id = NULL ) 
	{

		if ( $id == NULL ) {
			return $this->createRandomSession();
		}

		return view("session", [ "message" => $id ]);
	}

	public function joinSession ( $id = NULL ) 
	{

		if ( $id == NULL ) {
			return $this->createRandomSession();
		}

		return view("session", [ "message" => $id ]);

	}

	public function viewAllSessions ()
	{
	}

	private function createRandomSession () 
	{
		$randomSessionId = substr(uniqid("", true), -5);

		return view("none", [ "message" => $randomSessionId ]);
	}

}
