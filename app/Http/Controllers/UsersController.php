<?php


namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{

    public function index(){
        return User::paginate(10);
    }

    public function store(Request $request){
        dump($request);
    }

    public function update(User $user){

    }
}
