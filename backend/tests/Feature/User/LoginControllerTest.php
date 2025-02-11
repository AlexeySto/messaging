<?php

namespace Tests\Feature\Controllers\User;

use Tests\TestCase;
use App\Models\User;

class LoginControllerTest extends TestCase
{

    public function test_login_controller_success()
    {
        $user = User::factory()->create( [
            'email' => 'test@email.ru',
            'password' => 'test_password'
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'test@email.ru',
            'password' => 'test_password'
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('users', ['id' => $user->id, 'username' => $user->username]);
        $user->delete();
    }

    public function test_login_controller_email_failed()
    {
        $response = $this->postJson('/api/login', [
            'email' => 'failed@email.ru',
            'password' => 'test_password'
        ]);

        $response->assertStatus(401);
    }

    public function test_login_controller_password_failed()
    {
        $response = $this->postJson('/api/login', [
            'email' => 'test@email.ru',
            'password' => 'failed_password'
        ]);

        $response->assertStatus(401);
    }
}