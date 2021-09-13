<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;

Route::post('login',[AccessTokenController::class,'issueToken'])
    ->middleware(['api-login','throttle'])
    ->name('login');

Route::get('languages',function (){
  return config('app.languages');
});

Route::group(['middleware'=>["auth:api"]], function (){
  Route::get('check-auth',[LoginController::class,'checkAuth']);

  Route::post('logout',[LoginController::class,'logout']);

  Route::group(['prefix'=>'user','as'=>'user.'], function (){
    Route::get('',[UsersController::class,'index'])->name('index');
    Route::get('{user}',[UsersController::class,'show'])->name('show');
    Route::post('add',[UsersController::class,'store'])->name('store');
    Route::patch('{user}',[UsersController::class,'update'])->name('update');
    Route::delete('{user}',[UsersController::class,'destroy'])->name('destroy');
  });

  Route::group(['prefix'=>'role','as'=>'role.'], function(){
    Route::get('',[RoleController::class,'index'])->name('index');
    Route::get('{role}',[RoleController::class,'show'])->name('show');
    Route::post('',[RoleController::class,'store'])->name('store');
    Route::patch('{role}',[RoleController::class,'update'])->name('update');
    Route::delete('{role}',[RoleController::class,'destroy'])->name('destroy');
  });

  Route::group(['prefix'=>'permission','as'=>'permission.'], function(){
    Route::get('',[PermissionController::class,'index'])->name('index');
    Route::get('all',[PermissionController::class,'getAll'])->name('all');
    Route::get('by-role/{role}',[PermissionController::class,'getAllByRole']);
    Route::get('{permission}',[PermissionController::class,'show'])->name('show');
    Route::post('',[PermissionController::class,'store'])->name('store');
    Route::patch('{role}',[PermissionController::class,'update'])->name('update');
    Route::delete('{role}',[PermissionController::class,'destroy'])->name('destroy');
  });

  Route::group(['prefix'=>'category','as'=>'category.'], function (){
    Route::get('',[CategoryController::class,'index'])->name('list');
    Route::get('{category}/articles',[CategoryController::class,'getCategoryArticles'])->name('articles.list');
  });
});
