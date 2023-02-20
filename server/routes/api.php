<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiTestController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\EmployerController;
use App\Http\Controllers\SeekerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/adminlogin', [AuthController::class, 'login']);
Route::post('/login/employer', [EmployerController::class, 'login']);
Route::post('/login/seeker', [SeekerController::class, 'login']);

Route::group(['middleware'=>'api'], function(){
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

Route::get('/', function () {
    return view('welcome');
});

Route::get("/students", [ApiTestController::class, "getStudents"]);
Route::post("/register/employer", [EmployerController::class, "employerRegistration"]);
Route::post("/register/seeker", [SeekerController::class, "seekerRegistration"]);
Route::post("/account/seeker/upload_photo", [SeekerController::class, "handleSeekerProfileUpload"]);
Route::post("/account/seeker/cv_cover_letter", [SeekerController::class, "handleCVUpload"]);


Route::post("/account/seeker/change_password", [SeekerController::class, "ChangePassword"]);
Route::get("/account/seeker/profile_pic/{id}", [SeekerController::class, "getSeekerProfilePic"]);
Route::get("/account/seeker/my_resume/{id}", [SeekerController::class, "getSeekerResume"]);
Route::get("/account/seeker/delete_account/{id}", [SeekerController::class, "deleteSeekerAccount"]);

Route::post("/account/employer/upload_photo", [EmployerController::class, "handleEmployerProfileUpload"]);
Route::get("/account/employer/profile_pic/{id}", [EmployerController::class, "getEmployerProfilePic"]);
Route::get("/account/employer/delete_account/{id}", [EmployerController::class, "deleteEmployerAccount"]);
Route::post("/account/employer/change_password", [EmployerController::class, "ChangePassword"]);
Route::post("/account/employer/post_job", [EmployerController::class, "handlePostJob"]);
Route::get("/account/employer/job_lists/{id}", [EmployerController::class, "getEmployerPostedJob"]);