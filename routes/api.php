<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PermissionController;
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
Route::get('test',function (){
   dump(request());
});
Route::post('login',[LoginController::class,'login']);
Route::group(['middleware'=> ['auth:api']], function (){
    Route::post('logout',[LoginController::class,'logout']);
    Route::get('loggedUser',[UserController::class,'getLoggedUser']);
    Route::group(['prefix'=>'user','as'=>'user.'], function (){
        Route::get('',[UserController::class,'index']);
		Route::get('{user}',[UserController::class,'getUserById']);
    });

	Route::group(['prefix'=>'permission','as'=>'permission.'], function(){
		Route::get('',[PermissionController::class,'index']);
	});

	Route::group(['prefix'=>'role','as'=>'role.'], function(){
		Route::get('',[\App\Http\Controllers\RoleController::class, 'index']);
	});

    Route::group(['prefix'=>'/category', 'as'=>'category.'],function(){
        Route::get('', [CategoryController::class,'index']);
        Route::get('{category}/articles',[CategoryController::class,'getArticles']);
        Route::get('{category}',[CategoryController::class,'show']);

        Route::post('add',[CategoryController::class,'store']);
        Route::post('{category}/add-article',[CategoryController::class,'addArticle']);
        Route::patch('{category}/update', [CategoryController::class,'update']);
        Route::delete('{category}/delete',[CategoryController::class,'destroy']);
    });
    Route::group(['prefix'=>'{locale}/article', 'as'=>'article.'], function (){
        Route::get('', [ArticleController::class,'index']);
        Route::get('{article}',[ArticleController::class,'show']);
        Route::patch('{article}/update',[ArticleController::class,'update']);
    });
});
