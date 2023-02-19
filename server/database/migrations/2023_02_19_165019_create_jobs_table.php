<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('employer_id');
            $table->foreign("employer_id")->references('id')->on('employers')->onDelete('cascade');
            $table->string('jobTitle');
            $table->string('companyLogo')->nullable();
            $table->string('jobCategory');
            $table->string('jobType');
            $table->string('jobLevel');
            $table->string('vacancy');
            $table->string('jobLocation');
            $table->string('skills');
            $table->string('education');
            $table->string('experience');
            $table->string('salary');
            $table->string('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
};