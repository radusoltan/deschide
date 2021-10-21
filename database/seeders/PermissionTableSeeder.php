<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',
            'permission-list',
            'permission-create',
            'permission-edit',
            'permission-delete',
            'category-list',
            'category-crate',
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
    }
}
