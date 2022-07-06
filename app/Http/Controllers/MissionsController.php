<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MissionsController extends Controller
{
    /**
     * render the react app for missions
     */
    public function app()
    {
        return view('missions/app');
    }
}
