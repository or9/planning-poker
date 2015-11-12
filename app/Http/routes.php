<?php

Route::get("/", "SessionController@joinSession")->name("index");

Route::post("/s/{REQUESTED_ID}", [ 
	"as" => "createSession", 
	"uses" => "SessionController@create" 
]);

Route::get("/s/{SESSION_ID?}", "SessionController@joinSession");
