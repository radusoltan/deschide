<?php


use Illuminate\Support\Facades\Route;

// Website route
Route::get('/{path?}', function () {
	return view('site');
})->where('path', '[^admin]*');
// Admin route
Route::get('/admin/{path?}', function () {
	return view('admin');
})->where('path', '.*');


