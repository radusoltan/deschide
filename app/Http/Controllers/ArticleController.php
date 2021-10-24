<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Psy\Util\Str;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Article[]|Collection
     */
    public function index()
    {
        return Article::all()->paginate();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param Article $article
     * @return Article
     */
    public function show($locale,Article $article)
    {
//        $article->vzt()->increment();
        app()->setLocale($locale);
        return $article;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Article $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param Article $article
     * @return bool
     */
    public function update($locale,Request $request, Article $article)
    {
        app()->setLocale($locale);
//        dump($request->all());
        return $article->update([
          'title' => $request->get('title'),
          'slug' => \Illuminate\Support\Str::slug($request->get('title')),
          'lead' => $request->get('lead'),
          'content' => $request->get('content'),
          'is_breaking' => $request->get('is_breaking'),
          'is_flash' => $request->get('is_flash'),
          'is_alert' => $request->get('is_alert'),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Article $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }

    public function getPaginated(){
      return Article::paginate();
    }
}
