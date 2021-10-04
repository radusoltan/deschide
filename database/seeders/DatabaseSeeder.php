<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         User::factory(10)->create();
         $user = User::create([
             'name' => 'admin',
             'email' => 'admin@admin.com',
             'email_verified_at' => now(),
             'password' => Hash::make('11111111'),
             'remember_token' => Str::random(10),
         ]);
      $permissions = [
        'role-list',
        'role-create',
        'role-edit',
        'role-delete',
        'permission-list',
        'permission-create',
        'permission-edit',
        'permission-delete',
        'user-list',
        'user-create',
        'user-edit',
        'user-delete',
        'category-list',
        'category-create',
        'category-edit',
        'category-delete',
        'article-list',
        'article-create',
        'article-edit',
        'article-delete',
      ];
      foreach ($permissions as $permission){
        Permission::create(['name'=>$permission]);
      }
     $role = Role::create(['name'=>'Admin']);
     $permissions = Permission::pluck('id','id')->all();
     $role->syncPermissions($permissions);
     $user->assignRole($role);



     //sections import
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
          if(!$category->hasTranslation($locale)) {
            $category->name = $item['title'];
            $category->slug = Str::slug($item['title']);
            $category->save();
          }
        }
      }


    }
}
