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
    app()->setLocale('ro');
    $categories = Category::all();

    foreach ($categories as $category){
//      dump($category->number);
      $response = Http::get('https://deschide.md/api/sections/'.$category->number.'/ro/articles?items_per_page=20&page=5');
      $section = $response->json();
      if (isset($section['items']) && $section['id']===$category->number){
        $articles = $section['items'];

        foreach ($articles as $item){
          if($item['type'] === 'stiri') {
            $article = Article::where('number',$item['number'])->first();
            if(!$article){
//              dump();
              $article = $category->articles()->create([
                'title' => $item['title'],
                'slug' => Str::slug($item['title']),
                'lead' => $item['fields']['lead'] ?? '',
                'content' => $item['fields']['Continut'] ?? '',
                'status' => $item['status'],
                'number' => $item['number']
              ]);
            }
            dump($article);
          }

        }

      }
    }


//      app()->setLocale('ro');
//      dump(app()->getLocale());
//      foreach ($categories as $category){
//        $response = Http::get('https://deschide.md/api/sections/'.$category->number.'/ro/articles?items_per_page=20');
//
//        $articles = $response->json();
//
//        if(isset($articles['items'], $articles['pagination']['itemsCount'])){
//          foreach ($articles['items'] as $item){
//            $article = Article::where('number',$item['number'])->first();
//            dump($article);
//          }
//        }
//      }

  }

  public function importArticleTranslation(){

  }

  public function getSectionsFromApi(){
    $languages = config('app.locales');
    foreach ($languages as $langName=>$locale){
      dump($langName.' => '.$locale);
      app()->setLocale($locale);
      $response = Http::get('https://deschide.md/api/sections?items_per_page=16&language='.$locale);
      $apiSections = $response->json();
      foreach ($apiSections['items'] as $item){
        $category = Category::where('number',$item['number'])->first();
        if (!$category){
          $category = Category::create([
            'name' => $item['title'],
            'slug' => Str::slug($item['title']),
            'number' => $item['number'],
            'in_menu' => true
          ]);
        }
//        dump($category);
        if(!$category->hasTranslation($locale)) {
          $category->name = $item['title'];
          $category->slug = Str::slug($item['title']);
          $category->save();
        }
      }
    }
  }
}
