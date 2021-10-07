<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Spatie\Feed\Feedable;
use Spatie\Feed\FeedItem;

class Article extends Model implements TranslatableContract//, Feedable
{
    use Translatable;

  public $translatedAttributes = ['title','slug','lead', 'content'];
  protected $fillable = ['status','number'];

    public function category(){
      return $this->belongsTo(Category::class);
    }

//  /**
//   * @return FeedItem
//   */
//  public function toFeedItem(): FeedItem
//  {
//    return FeedItem::create()
//      ->id($this->id)
//      ->title($this->title)
//      ->summary($this->lead)
//      ->updated($this->updated_at);
////      ->link($this->link)
////      ->authorName($this->author)
////      ->authorEmail($this->authorEmail);
//  }
//
//  public static function getFeedItems($lang)
//  {
//    app()->setLocale($lang);
//    return self::all();
//  }

  public function vzt()
  {
    return visits($this);
  }
}
