<?php


namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{

    public function index(){
        return User::paginate(10);
    }

    public function show(User $user){
      return $user;
    }

    public function store(Request $request){
        dump($request);
    }

    public function update(User $user){

    }

    public function destroy(User $user){
      return $user->delete();
    }
}
