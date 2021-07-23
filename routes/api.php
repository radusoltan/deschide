<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login',[\Laravel\Passport\Http\Controllers\AccessTokenController::class,'issueToken'])
    ->middleware(['api-login','throttle'])
    ->name('login');
//Route::post('login',[App\Http\Controllers\Auth\LoginController::class,'login'])->name('login');

Route::get('check-auth',[\App\Http\Controllers\Auth\LoginController::class,'checkAuth']);

Route::post('logout',[\App\Http\Controllers\Auth\LoginController::class,'logout']);

Route::group(['prefix'=>'user'], function (){
    Route::get('',[\App\Http\Controllers\UsersController::class,'index']);
});
