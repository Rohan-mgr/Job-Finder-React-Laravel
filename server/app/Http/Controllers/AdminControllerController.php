<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\employer;

class AdminControllerController extends Controller
{
    public function adminLogin(Request $req) {
        $students = $req->email;
        return response()->json($students);
    }
    public function EmployerList()
    {
        $employers = employer::all();
        return response()->json($employers);
    }
}