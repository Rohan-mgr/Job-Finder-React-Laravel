<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\employer;
use App\Models\job;
use App\Models\seeker;
use App\Models\applicants;
use App\Models\testimonials;

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
    public function SeekerList()
    {
        $user = seeker::all();
        return response()->json($user);
    }
    public function deleteEmployer(Request $req)
    {
        $employers = employer::find($req->id);
        $employers->delete();
        return response()->json(['message'=> "employer deleted successfully"]);
    }
    public function deleteSeeker(Request $req)
    {
        $seekers = seeker::find($req->id);
        $seekers->delete();
        return response()->json(['message'=> "seekers deleted successfully"]);
    }
    
    public function dashboardDetails() {
        $totalJobs = count(job::all());
        $totalSeekers = count(seeker::all());
        $totalEmployers = count(employer::all());
        $totalApplicants = count(applicants::all());
        return response()->json(['jobCount' => $totalJobs, 'seekerCount' => $totalSeekers, 'employerCount'=>$totalEmployers, 'applicantCount'=> $totalApplicants]);
    }
    public function handleTestimonialPost(Request $req) {
        $testimonialObj = new testimonials();
        if($req->clientProfile !== "null"){
            $logo = $req->clientProfile;
            $logoName = time().'_'.$req->clientProfile->getClientOriginalName();
            $logo->move('testimonials/', $logoName);
            $path = "testimonials/$logoName";

            $testimonialObj->profile = $path;
        }
        
        $testimonialObj->clientName = $req->clientName;
        $testimonialObj->companyName = $req->companyName;
        $testimonialObj->designation = $req->designation;
        $testimonialObj->description = $req->description;
        $testimonialObj->save();
        return response()->json(['message' => "Testimonials Added Successfully"]);
    }

    public function fetchTestimonials() {
        $testimonials = testimonials::all();
        return response()->json($testimonials);
    }

    public function deleteTestimonial(Request $req) {
        $testimonial = testimonials::find($req->id);
        $testimonial->delete();
        return response()->json(["message"=> "Testimonial deleted successfully"]);
    }
    public function EditTestimonial(Request $req) {
        $testimonialObj = testimonials::find($req->id);
        $testimonialObj->clientName = $req->clientName;
        $testimonialObj->companyName = $req->companyName;
        $testimonialObj->designation = $req->designation;
        $testimonialObj->description = $req->description;
        $testimonialObj->save();
        return response()->json(["message" => "Testimonial Updated Successfully"]);
    }
}