<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminControllerController extends Controller
{
    public function adminLogin(Request $req) {
        $students = $req->email;
        return response()->json($students);
    }
}