<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\seeker;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class SeekerController extends Controller
{
    //

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'seekerRegistration', 'handleSeekerProfileUpload', 'getSeekerProfilePic']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function login(Request $req)
    {
        auth()->shouldUse('apiseeker');
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['type' => 'jwt-auth', 'message' => 'Incorrect email or password'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function seekerRegistration(Request $req) {
        try{

            seeker::create([
                'name' => $req->fullName,
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

    public function handleSeekerProfileUpload(Request $req){
        if($req->image !== "null"){
            $user = seeker::find($req->userId);

            $image = $req->image;
            $imgName = time().'_'.$req->image->getClientOriginalName();
            $image->move('images/', $imgName);
            $path = "images/$imgName";

            $user->img_path = $path;
            $user->save();
            return response()->json(['message' => 'profile picture uploaded successfully']);
        } else {
            return response()->json(['message' => "profile picture upload failed"]);
        }
    }

    public function getSeekerProfilePic($id) {
        $user = seeker::find($id);
        return response()->json(['imgPath' => $user->img_path]);
    }
}