<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function getUserById(User $user){
        dump(Auth::user());
    }

    public function getLoggedUser(){
        $user = Auth::user();
        return response()->json([
            'user' => $user,
            'permissions' => $user->getAllPermissions()->pluck('name')
        ],200);
    }

}
