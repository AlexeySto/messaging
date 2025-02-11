<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', \App\Http\Controllers\User\RegisterController::class);
Route::post('/login', \App\Http\Controllers\User\LoginController::class);
Route::get('/users', \App\Http\Controllers\User\GetAllUsersJsonController::class);
Route::get('/user/{id}', \App\Http\Controllers\User\GetUserByIdController::class);

Route::post('/chat', \App\Http\Controllers\Chat\CreateController::class);
Route::get('/chats/{id}', \App\Http\Controllers\Chat\GetChatsByUserIdController::class);

Route::post('/message', \App\Http\Controllers\Message\SendController::class);
Route::get('/messages/{id}', \App\Http\Controllers\Message\GetMessagesByChatIdController::class);
