<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiTestController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\EmployerController;
use App\Http\Controllers\SeekerController;
use App\Http\Controllers\AdminControllerController;


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
Route::get("/", [SeekerController::class, "getRecentJobs"]);
Route::get("/job_details/{id}", [SeekerController::class, "getJobDetails"]);
Route::post("/apply_for_job/{id}", [SeekerController::class, "handleJobApplication"]);

Route::post("/account/employer/upload_photo", [EmployerController::class, "handleEmployerProfileUpload"]);
Route::get("/account/employer/profile_pic/{id}", [EmployerController::class, "getEmployerProfilePic"]);
Route::get("/account/employer/delete_account/{id}", [EmployerController::class, "deleteEmployerAccount"]);
Route::post("/account/employer/change_password", [EmployerController::class, "ChangePassword"]);
Route::post("/account/employer/post_job", [EmployerController::class, "handlePostJob"]);
Route::get("/account/employer/job_lists/{id}", [EmployerController::class, "getEmployerPostedJob"]);

Route::get("/admin/EmployerList/{id}",[AdminControllerController::Class, "EmployerList"]);
Route::put("/admin/EmployerUpdate/{id}",[AdminControllerController::Class, "UpdateEmployer"]);
Route::delete("/admin/deleteEmployer/{id}", [AdminControllerController::class, "deleteEmployer"]);
Route::get("/account/employer/job_lists/applicant/{id}", [EmployerController::class, "getApplicantDetails"]);
Route::delete("/account/employer/delete_job/{id}", [EmployerController::class, "deletePostedJob"]);
Route::post("/search_jobs", [EmployerController::class, "searchJobs"]);

Route::get("/admin/dashboard", [AdminControllerController::class, "dashboardDetails"]);
Route::get("/admin/employer_details", [AdminControllerController::class, "EmployerList"]);
Route::get("/admin/seeker_details", [AdminControllerController::class, "SeekerList"]);
Route::delete("/admin/employer_delete/{id}", [AdminControllerController::class, "deleteEmployer"]);
Route::delete("/admin/seeker_delete/{id}", [AdminControllerController::class, "deleteSeeker"]);
Route::post("/admin/testimonials", [AdminControllerController::class, "handleTestimonialPost"]);
Route::get("/admin/fetch_testimonials", [AdminControllerController::class, "fetchTestimonials"]);
Route::delete("/admin/delete_testimonial/{id}", [AdminControllerController::class, "deleteTestimonial"]);
Route::put("/admin/edit_testimonial/{id}", [AdminControllerController::class, "EditTestimonial"]);