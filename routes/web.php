<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;



//Auth::routes();
Route::get('login',function(){
    return view('login');
})->name('login');

// Admin route
Route::get('/admin/{path?}', function () {
    return view('admin');
})->where('path', '.*');
// Website route
Route::get('/{path?}', function () {
    return view('site');
})->where('path', '^(?!admin$|login$).*');
