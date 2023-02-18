<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\employer;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


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
        $this->middleware('auth:api', ['except' => ['login','ChangePassword', 'deleteEmployerAccount', 'getEmployerProfilePic', 'employerRegistration', 'handleEmployerProfileUpload']]);
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

    public function handleEmployerProfileUpload(Request $req){
        if($req->image !== "null"){
            $user = employer::find($req->userId);

            $image = $req->image;
            $imgName = time().'_'.$req->image->getClientOriginalName();
            $image->move('imagesEmployer/', $imgName);
            $path = "imagesEmployer/$imgName";

            $user->img_path = $path;
            $user->save();
            return response()->json(['message' => 'profile picture uploaded successfully']);
        } else {
            return response()->json(['message' => "profile picture upload failed"]);
        }
    }

    public function getEmployerProfilePic($id) {
        $user = employer::find($id);
        return response()->json(['imgPath' => $user->img_path]);
    }

    public function deleteEmployerAccount($id) {
        $user = employer::find($id);
        if(!$user) {
            return response()->json(['message' => "Account does not exists"]);
        }
        $user->delete();
        return response()->json(['message' => "Account Deleted Successfully"]);
    }

    public function ChangePassword(Request $req){
         $validator = Validator::make($req->all(), [
             'oldPassword'=>'required',
             'newPassword'=>'required|min:8|max:100',
             'confirmPassword'=>'required|same:newPassword'
         ]);
            
         if ($validator->fails()) {
             return response()->json([
                 'message'=>$validator->errors()
             ],422);
         }
          $user= employer::find($req->id);
          
        if(Hash::check($req->oldPassword,$user->password)){
           
           $user->update([
                 'password'=>Hash::make($req->newPassword)
             ]);
             return response()->json([
                 'message'=>'Password successfully updated',
                 'status'=>200,
                ]);
            }else{
                return response()->json([
                    'message'=>'Old password does not match',
                    'status'=>400,
             ]);
         }
    }
}