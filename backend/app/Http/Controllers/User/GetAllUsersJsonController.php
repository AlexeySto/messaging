<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Http\Controllers\Controller;

class GetAllUsersJsonController extends Controller

{
    public function __invoke()
    {
        // Получаем всех пользователей
        $users = User::all();
        
        // Возвращаем пользователей в формате JSON
        return response()->json($users);
    }

}
