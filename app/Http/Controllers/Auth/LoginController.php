<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request){
        $this->validateLogin($request);
        if ($this->attemptLogin($request)){
            $user = $this->guard()->user();

			Log::info('User ('.$user->name.') is logged in');
			$user->logged_in = true;
			$user->save();
            return response()->json([
                'token' => $user->createToken('deschide')->accessToken
            ],200);
        }
        return $this->sendFailedLoginResponse($request);
    }

    public function logout(Request $request){
        $user = Auth::guard('api')->user();
        if($user) {
            $user->token()->revoke();
	        $user->logged_in = false;
			$user->save();
	        Log::info('User ('.$user->name.') is logged out');

            return response()->json([
                'data' => 'User logged out.'
            ],200);
        }
        return response()->json(['state' => 0, 'message' => 'Unauthenticated'],401);
    }
}
