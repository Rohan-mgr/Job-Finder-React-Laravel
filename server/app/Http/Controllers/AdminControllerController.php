<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\employer;
use App\Models\User;


class AdminControllerController extends Controller
{
    public function adminLogin(Request $req) {
        $students = $req->email;
        return response()->json($students);
    }

    public function EmployerList()
    {
        $user = employer::all();
        return response()->json($user);
    }
    // public function UpdateEmployer(Request $req)
    // {   
    //     $employers = employer::all();
    //     $employers->id = $req->id;
    //     $employers->companyName = $req->companyName;
    //     $employers->Update();
    //     return response()->json([
    //         'message' => 'employer updated',
    //         'data' => $employers,
    //     ]);
    // }
    public function deleteEmployer(Request $req)
    {
        $employers = employer::find($req->id);
        $employers->delete();
        return response()->json(['message'=> "employer deleted successfully"]);
    }
    //helo
}