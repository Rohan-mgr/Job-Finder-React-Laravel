<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\seeker;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Models\job;
use App\Models\employer;

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
        $this->middleware('auth:api', ['except' => ['login', 'handleJobApplication', 'getJobDetails', 'getRecentJobs', 'deleteSeekerAccount', 'seekerRegistration', 'handleSeekerProfileUpload', 'getSeekerProfilePic','ChangePassword', 'handleCVUpload', 'getSeekerResume']]);
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

    public function handleCVUpload(Request $req) {
        if($req->upload_file !== "null" && $req->cover_letter !== null){
            $user = seeker::find($req->userId);

            $cv = $req->upload_file;
            $cv_name = time().'_'.$req->upload_file->getClientOriginalName();
            $cv->move('documents/', $cv_name);
            $path = "documents/$cv_name";

            $user->resume = $path;
            $user->cover_letter = $req->cover_letter;
            $user->save();

            // return response()->json(['resume'=>$req->upload_file->getClientOriginalName(), 'id' => $req->userId, "cover_letter"=>$req->cover_letter]);
            return response()->json(['message' => "Resume uploaded successfully"]);
        } else {
            return response()->json(['message' => "Failed to upload your cv"]);
        }
    }


    public function getSeekerProfilePic($id) {
        $user = seeker::find($id);
        return response()->json(['imgPath' => $user->img_path]);
    }
    public function deleteSeekerAccount($id) {
        $user = seeker::find($id);
        if(!$user) {
            return response()->json(['message' => "Account does not exists"]);
        }
        $user->delete();
        return response()->json(['message' => "Account Deleted Successfully"]);
    }

    public function getSeekerResume($id) {
        $user = seeker::find($id);
        // $pdfFilePath = $request->input(public_path('documents/1676550473_cv_resume.pdf'));
        return response()->json(['resume' => $user->resume])->header('Content-Type', 'application/pdf');
        // return response($user->resume, 200)->header('Content-Type', 'application/pdf');
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
          $user= seeker::find($req->id);
          
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

    public function getRecentJobs(Request $req) {
        $recentJobs = job::all();
        return response()->json(['jobs'=> $recentJobs]);
    }
    public function getJobDetails(Request $req) {
        $recentJobs = job::find($req->id);
        $companyName = employer::find($recentJobs->employer_id);
        return response()->json(['job'=> $recentJobs, "companyInfo"=>$companyName]);
    }

    public function handleJobApplication(Request $req){
        $appliedJob = job::find($req->id);
        $jobSeekerInfo = seeker::find($req->seekerId);
        
        $jobSeekerInfo->ApplyJobs()->attach($req->id);
        $appliedJob->vacancy = $appliedJob->vacancy - 1;
        $appliedJob->save();
        
        return response()->json(['message' => "Your Application was Successfully submitted" ]);
    }

}