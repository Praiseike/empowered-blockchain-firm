<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Models\User;
use Auth;

class LoginController extends Controller
{
    public function login(Request $request){

        $validated = $request->validate([
            'email' => 'required | email | string',
            'password' => 'required',
        ]);


        if(Auth::attempt($validated)){
            $token = Auth::user()->createToken('authToken')->plainTextToken;
            return response()->json([
                'status'    => 'success',
                'token'     => $token,
                'message'   => 'Successfully logged in ',
                'data'      => Auth::user()
            ],200);
        }
    }
}
