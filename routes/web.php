<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('import',[\App\Http\Controllers\ImportController::class,'getArticlesByLangAndSection']);

//Auth::routes();
Route::get('login',function(){
    return view('login');
})->name('login');
Route::get('auth/facebook',[\App\Http\Controllers\SocialController::class, 'facebookRedirect']);
Route::get('auth/facebook/callback',[\App\Http\Controllers\SocialController::class,'loginWithFacebook']);
// Admin route
Route::get('/admin/{path?}', function () {
    return view('admin');
})->where('path', '.*');
// Website route
Route::get('/{path?}', function () {
    return view('site');
})->where('path', '^(?!admin$|login$).*');
