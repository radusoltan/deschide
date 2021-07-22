<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

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
         User::create([
             'name' => 'admin',
             'email' => 'admin@admin.com',
             'email_verified_at' => now(),
             'password' => Hash::make('11111111'),
             'remember_token' => Str::random(10),
         ]);
    }
}
