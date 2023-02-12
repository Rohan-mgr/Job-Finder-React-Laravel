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
// Route::post("/adminlogin", [adminController::class, "adminLogin"]); 