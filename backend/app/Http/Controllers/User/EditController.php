<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Http\Controllers\Controller;

class EditController extends Controller

{
    public function __invoke($id)
    {
        $this->authorize('view-any', User::class);
        $user = User::findOrFail($id);
        return view('userEditForm', ['user' => $user]);
    }
}