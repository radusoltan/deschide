<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Category[]|Collection
     */
    public function index()
    {

//		Log::info(auth()->user()->name.' request all Categories');
		return Category::paginate();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function store($locale,Request $request)
    {
        app()->setLocale($locale);
        $request->validate([
          'name' => 'required'
        ]);
        return Category::create([
            'name' => $request->get('name'),
            'in_menu' => $request->get('in_menu'),
            'slug' => Str::slug($request->get('name'),'-',$locale)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Category $category
     * @return JsonResponse
     */
    public function show(Category $category): JsonResponse
    {
//        app()->setLocale(request()->get('lng'));
        return response()->json([
			'category' => $category,
	        'articles' => $category->articles()->get()
        ]);
    }

	public function getCategory(Category $category){
		dump($category);
	}

    /**
     * Show the form for editing the specified resource.
     *
     * @param Category $category
     * @return Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param Category $category
     * @return JsonResponse
     */
    public function update($locale,Request $request, Category $category)
    {
      app()->setLocale($locale);
      $request->validate([
        'name'=>'required',
      ]);
//        app()->setLocale($locale);
        try {
            $category->update([
                'name' => $request->get('name'),
                'slug' => Str::slug($request->get('name'), '-', $locale),
                'in_menu' => $request->get('in_menu')
            ]);
            return response()->json([
                'category' => $category,
                'message' => 'Category ('.$category->name.') updated successfuly'
            ],200);
        } catch (\Exception $e){
            return response()->json("Problem on update category (".$category->name.")",500);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $locale
     * @param Category $category
     * @return bool
     */
    public function destroy($locale,Category $category)
    {
        return $category->delete();
    }

    /**
     * Get articles with specific Category
     *
     * @param Category $category
     * @return LengthAwarePaginator
     */
    public function getArticles(Category $category){
        return $category->articles()->paginate();
    }

    public function addArticle($lang,Request $request,Category $category){
      app()->setLocale($lang);
      return Article::create([
        'category_id' => $category->id,
        'title' => $request->get('title'),
        'slug' => Str::slug($request->get('title')),
        'lead' => $request->get('lead'),
        'content' => $request->get('content')
      ]);
    }
}
