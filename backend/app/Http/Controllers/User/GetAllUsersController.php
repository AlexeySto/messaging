<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class GetAllUsersController extends Controller
{
    public function __invoke()
    {
        $this->authorize('view-any', User::class);

        // Получаем всех пользователей, кроме авторизованного
        $users = User::where('id', '!=', Auth::id())->paginate(10);

        return view('usersTable', ['users' => $users]);
    }
}