<?php

use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;


Route::get('/test', function (){
    $categories = [
        'ro' => [
            'Politic',
            'Social',
            'Economic',
        ],
        'en' => [
            'Political',
            'Social',
            'Economix'
        ],
        'ru' => [
            'Политика',
            'Общество',
            'Экономика'
        ]
    ];

    $category = Category::find(3);
    app()->setLocale('ru');
    dump(app()->getLocale());
    $category->update([
        'name' => 'Экономика',
        'slug' => Str::slug('Экономика','-',app()->getLocale())
    ]);

//    $category->translate('en')->name = 'Political';
//    $category->translate('en')->slug = 'political';
//
//    $category->save();


});

//Route::get('/', function () {
//    return view('welcome');
//});
//
//Auth::routes();
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/{path?}',function (){
    return view('site');
})->where('path','.*');
