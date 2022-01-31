<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
	public function index(){
		Log::info(auth()->user()->name." list users");

		return User::paginate();
	}
    public function getUserById(User $user){

		return response()->json([
			'name' => $user->name,
			'permissions' => $user->getAllPermissions(),
			'roles' => $user->roles()->get()
		]);

    }

    public function getLoggedUser(){
        $user = Auth::user();
        return response()->json([
			'name' => $user->name,
            'permissions' => $user->getAllPermissions()->pluck('name')
        ],200);
    }

}
