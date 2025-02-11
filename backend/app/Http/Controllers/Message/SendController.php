<?php

namespace App\Http\Controllers\Message;

use App\Models\Message;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Events\MessageSent;
use Illuminate\Support\Facades\Validator;

class SendController extends Controller
{
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'chat_id' => 'required|integer|exists:chats,id',
            'user_id' => 'required|integer|exists:users,id',
            'content' => 'required|string',
            'media_type' => 'nullable|string',
            'file' => 'nullable|file'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Сохранение файла
        $filePath = null;
        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('uploads', 'public');
        }

        // Сохранение сообщения в БД
        $message = Message::create([
            'chat_id' => $request->chat_id,
            'user_id' => $request->user_id,
            'content' => $request->content,
            'media_type' => $request->media_type,
            'media_url' => 'http://127.0.0.1:8000/storage/' . $filePath,
        ]);

        // Отправка сообщения всем пользователям в чате
        broadcast(new MessageSent($message));

        return response()->json($message, 201);
    }
}

