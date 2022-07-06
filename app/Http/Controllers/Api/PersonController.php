<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->input('status_id');

        if (empty($status)) {
            $people = Person::with('aliases')->with('missions')->get();
        }
        else {
            $people = Person::with('aliases')->with('missions')->where('status_id', $status)->get();
        }
        
        return $people;
    }
}
