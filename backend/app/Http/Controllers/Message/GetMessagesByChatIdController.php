<?php

namespace App\Http\Controllers\Message;

use App\Models\Message;
use App\Http\Controllers\Controller;

class GetMessagesByChatIdController extends Controller
{
    public function __invoke($id)
    {
        $messages = Message::where('chat_id', $id)->get();

        return response()->json($messages);
    }
}

