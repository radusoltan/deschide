<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
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
Route::post('login',[LoginController::class,'login']);

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::group(['middleware'=> ['auth:api']], function (){
    Route::post('logout',[LoginController::class,'logout']);
    Route::get('loggedUser',[UserController::class,'getLoggedUser']);
    Route::group(['prefix'=>'user','as'=>'user.'], function (){
        Route::get('',[UserController::class,'getUserById']);
    });
    Route::group(['prefix'=>'{locale}/category', 'as'=>'category.'],function(){
        Route::get('', [CategoryController::class,'index']);
    });
});
