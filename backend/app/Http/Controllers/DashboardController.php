<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Chat;
use App\Models\Message;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $userCount = User::count();
        $chatCount = Chat::count();
        $messageCount = Message::count();

        return view('dashboard', compact('userCount', 'chatCount', 'messageCount'));
    }
}
