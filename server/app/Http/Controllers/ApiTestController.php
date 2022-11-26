<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\apiTest;

class ApiTestController extends Controller
{
    public function getStudents() {
        $students = apiTest::all();
        return response()->json($students);
    }
}