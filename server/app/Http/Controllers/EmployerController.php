<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\employer;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

class EmployerController extends Controller
{
    //

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'employerRegistration']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function login(Request $req)
    {
        auth()->shouldUse('apiemployer');
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['type' => 'jwt-auth', 'message' => 'Incorrect email or password'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function employerRegistration(Request $req) {
        try{

            employer::create([
                'name' => $req->fullName,
                'companyName' => $req->companyName,
                'mobile' => $req->number,
                'email' => $req->email,
                'password' => Hash::make($req->password),
            ]);
            return response(['message' => "Account Created Successfully"]);
        } catch(Exception $e) {
            return response(['message' => $e->getMessage()], 409);
        }
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60, 
            'user' => auth()->user()
        ]);
    }
}