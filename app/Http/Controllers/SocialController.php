<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    public function facebookRedirect(){
      return Socialite::driver('facebook')->redirect();
    }

    public function loginWithFacebook(){

      try {

        $user = Socialite::driver('facebook')->user();
        $isUser = User::where('fb_id',$user->id)->first();

        if ($isUser){
          Auth::login($isUser);
          dump('here');
        } else {

          $createUser = User::create([
            'name' => $user->name,
            'email' => $user->email,
            'fb_id' => $user->id,
            'password' => encrypt('11111111')
          ]);

          Auth::login($createUser);
          dump('loggedIn');
        }


      } catch (Exception $e){
        dd($e->getMessage());
      }

    }
}
