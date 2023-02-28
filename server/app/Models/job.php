<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\employer;
use App\Models\seeker;

class job extends Model
{
    use HasFactory;
    public function employer(){
        return $this->belongsTo(employer::class, "employer_id");
    }
    public function JobSeeker() {
        return $this->belongsToMany(seeker::class, 'applicants');
    }
}