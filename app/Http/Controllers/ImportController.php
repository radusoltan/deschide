<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class ImportController extends Controller
{
  private $url = 'https://deschide.md/api';

  public function getArticlesFromRss(){
    $response = Http::get('https://deschide.md/api/sections/1/ro/articles.json');
    $category = Category::find(3);

    dump($response->json('items'));
  }

  public function getArticlesByLangAndSection(){

    $categories = Category::all();
    $languages = config('app.locales');
    app()->setLocale('ro');
    dump(app()->getLocale());
    foreach ($categories as $category){

      if ($category->number > 0){

        $articles = Http::get('https://deschide.md/api/sections/'.$category->number.'/'.app()->getLocale().'/articles?page=1660&items_per_page=10');
        foreach ($articles->json() as $key=>$value){
          dump($key);
          dump($value);
        }
      }

    }

//    foreach ($languages as $langName => $locale){
//      dump($langName);
//      app()->setLocale($locale);
//      dump(app()->getLocale());
//
//
//
//    }
//    app()->setLocale('ro');
//    foreach ($categories as $category){
//      if ($category->number > 0){
//        $response = Http::get('https://deschide.md/api/articles?page=1&items_per_page=100&section='.$category->number.'&language=ro');
//
//        if (!empty($response->json()['items'])){
////          foreach ($response->json()['items'] as $item){
//////              dump($item);
////            $category = Category::where('number',$item['section']['number'])->first();
////            $article = Article::where('number',$item['number'])->first();
////            dump($category->name);
////            if(!$article){
////              $newArticle = $category->articles()->create([
////                'title' => $item['title'],
////                'slug' => Str::slug($item['title']),
////                'lead' => $item['fields']['lead'] ?? null,
////                'content' => $item['fields']['Continut']??' ',
////                'status' => $item['status'],
////                'number' => $item['number']
////              ]);
////              dump($newArticle);
////            } else {
////              $locales = ['ru','en'];
////              foreach ($locales as $locale){
////                if(!$article->hasTranslation($locale)) {
////                  $response = Http::get('https://deschide.md/api/articles/'.$article->number.'/'.$locale.'json');
////                  dump($response->json());
////
////
////
////                }
////
////              }
////
//////              dump($response->json()['number']);
//////              dump($article->number);
////            }
////
////          }
//        }
//      }
//    }




  }

  public function importArticleTranslation(){

  }

  public function getSectionsFromApi(){
    $response = Http::get('https://deschide.md/api/sections?items_per_page=16&language=en');
    app()->setLocale('en');
    dump(app()->getLocale());
    foreach ($response->json()['items'] as $section){
      dump($section['title']);
      $category = Category::where('number',$section['number'])->first();
//      $category = Category::create([
//        'name' => $section['title'],
//        'number' => $section['number'],
//        'slug' => Str::slug($section['title']),
//        'in_menu' => true
//      ]);
//
      $category->name = $section['title'];
      $category->slug = Str::slug($section['title']);
      $category->save();
    }
  }
}
