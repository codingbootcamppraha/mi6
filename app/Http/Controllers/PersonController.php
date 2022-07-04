<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::get();
        // dd($people[0]->occupation);
        return view('people-of-interest.index',compact('people'));
    }
}
