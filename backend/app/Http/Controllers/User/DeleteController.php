<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class DeleteController extends Controller

{
    public function __invoke($id)
    {
        $this->authorize('view-any', User::class);
        $user = User::findOrFail($id);
        $user->delete();
        return Redirect::to('/users');
    }
}