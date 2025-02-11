<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UpdateController extends Controller

{
    public function __invoke(Request $request, $id)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
        ]);

        $user = User::findOrFail($id);
        $user->update($request->only('username', 'email'));

        return redirect()->route('users.getAllUsers')->with('success', 'Пользователь успешно обновлён');
    }
}