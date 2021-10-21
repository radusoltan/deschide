<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

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
    public function show(Article $article)
    {
        $article->vzt()->increment();
        app()->setLocale(request('lang'));
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
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
