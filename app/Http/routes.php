<?php

Route::get("/", "SessionController@joinSession")->name("index");

Route::post("/{REQUESTED_ID}", [ 
	"as" => "createSession", 
	"uses" => "SessionController@create" 
]);

Route::get("/{SESSION_ID?}", "SessionController@joinSession");
