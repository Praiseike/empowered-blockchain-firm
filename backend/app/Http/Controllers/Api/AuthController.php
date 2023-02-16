<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;

use Auth;
use Hash;
class AuthController extends Controller
{

    public function index()
    {
        return Auth::user();
    }

    public function login(Request $request)
    {
        // return $request->all();
        $validated = $request->validate([
            'email' => 'email | required ',
            'password' => 'string | required'
        ]);

        if(Auth::attempt($validated))
        {
            return response()->json([
                'status'=>'success',
                'user'=>Auth::user(),
                'token'=>Auth::user()->createToken('api_token')->plainTextToken,
                'token_type'=>'Bearer'
            ]);
        }else{
            return response('Unauthorized request',401);
        }
    }

    public function register(Request $request){
        $request->validate([
            'username' => 'required | string | max:255',
            'email' => 'email | required | unique:users',
            'password' => 'required | confirmed',
        ]);

        $user = User::create([
            'name' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        return response()->json([
            'status'=>'success',
            'user'=>$user,
            'token'=>$user->createToken('api_token')->plainTextToken,
            'token_type'=>'Bearer'
        ]);
    }


    public function logout(Request $request){
        // return $request->all();
        $request->user()->tokens()->delete();
    }
}