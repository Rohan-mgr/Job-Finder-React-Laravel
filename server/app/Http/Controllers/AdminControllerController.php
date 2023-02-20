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

    public function index()
    {
        $user = employer::all();
        return response()->json($user);
    }
}