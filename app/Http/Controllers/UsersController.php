<?php


namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{

    public function index(){
        return User::paginate(10);
    }

    public function show(User $user){
      return $user;
    }

    public function store(Request $request){
        $request->validate([
          'name' => 'required',
          'email'=>'required|email|unique:users,email',
          'password'=>'required'
        ]);

        $user = User::create([
          'name'=>$request->get('name'),
          'email'=>$request->get('email'),
          'password'=>Hash::make($request->get('password'))
        ]);
        return response()->json([
          'status'=>1,
          'user'=>$user
        ],200);
    }

    public function update(User $user){

    }

    public function destroy(User $user){
      return $user->delete();
    }
}
