<?php

namespace App\Http\Controllers\Chat;

use App\Models\Chat;
use App\Http\Controllers\Controller;

class GetChatsByUserIdController extends Controller
{
    public function __invoke($id)
    {
        // Получение всех чатов, где user_id = id или users_id содержит id
        $chats = Chat::where('user_id', $id)
        ->orWhere('users_id', 'LIKE', value: '%'.$id.'%')
        ->get();
    
        return response()->json($chats);
    }

}

