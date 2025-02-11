<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Http\Controllers\Controller;

class GetUserByIdController extends Controller

{
    public function __invoke($id)
    {
        $user = User::where('id', $id)->get();

        return response()->json($user);
    }

}