<?php

namespace App\Http\Controllers\Chat;

use App\Models\Chat;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CreateController extends Controller
{
    public function __invoke(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'users_id' => 'required|string|max:255',
            'chat_name' => 'required|string|max:255',
            // Дополнительные валидации могут потребоваться для пользователей
        ]);

        $chat = Chat::create($validatedData);

        return response()->json($chat, 201);
    }
}

