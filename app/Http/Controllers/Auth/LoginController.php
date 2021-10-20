<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

            return response()->json([
                'user'=>$user->id,
                'token' => $user->createToken('deschide')->accessToken
            ],200);

        }
        return $this->sendFailedLoginResponse($request);
    }

    public function logout(Request $request){
//        dd($request);
        $user = Auth::guard('api')->user();
        if($user) {
            $user->token()->revoke();
            return response()->json([
                'data' => 'User logged out.'
            ],200);
        }
        return response()->json(['state' => 0, 'message' => 'Unauthenticated'],401);
    }
}
