<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\employer;
use App\Models\job;
use App\Models\seeker;
use App\Models\applicants;

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
    public function deleteEmployer(Request $req)
    {
        $employers = employer::find($req->id);
        $employers->delete();
        return response()->json(['message'=> "employer deleted successfully"]);
    }
    
    public function dashboardDetails() {
        $totalJobs = count(job::all());
        $totalSeekers = count(seeker::all());
        $totalEmployers = count(employer::all());
        $totalApplicants = count(applicants::all());
        return response()->json(['jobCount' => $totalJobs, 'seekerCount' => $totalSeekers, 'employerCount'=>$totalEmployers, 'applicantCount'=> $totalApplicants]);
    }
}