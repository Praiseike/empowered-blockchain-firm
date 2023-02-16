<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        // return response()->json($request->all());
        $validated = $request->validate([
            'email' => 'required|string|email|',
            'password' => 'required|string|min:6'
        ]);
        
        if (!Auth::attempt($validated)) {
            return response()->json([
                'message' => 'Invalid login details'
                           ], 401);
        }
        $token = auth()->user()
              ->createToken('auth_token')->plainTextToken;
        $user = auth()->user();
  
        $response = [
                'status' => 'success',
                'msg' => 'Login successfully',
                'content' => [
                    'status_code' => 200,
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                    'user_name' => $user->name,
                    'user_email' => $user->email,
                    'user_id' => $user->id,
                ]
            ];
   
        return response()->json($response, 200);
    }
}
