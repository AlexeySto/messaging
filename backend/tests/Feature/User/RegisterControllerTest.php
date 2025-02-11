<?php

namespace Tests\Feature\Controllers\User;

use Tests\TestCase;
use App\Models\User;

class RegisterControllerTest extends TestCase
{
    protected function tearDown(): void
    {
        // Удаляем пользователя после каждого теста
        User::where('email', 'test@test.ru')->delete();

        parent::tearDown();
    }

    public function test_register_controller_success()
    {
        $response = $this->postJson('/api/register', [
            'username' => 'test_name',
            'email' => 'test@test.ru',
            'password' => 'test_password'
        ]);

        $response->assertStatus(201);
    }

    public function test_register_controller_validation_username_failed()
    {
        $response = $this->postJson('/api/register', [
            'username' => '',
            'email' => 'test@test.ru',
            'password' => 'test_password']);

        $response->assertStatus(422);
    }

    public function test_register_controller_validation_email_failed()
    {
        $response = $this->postJson('/api/register', [
            'username' => 'test_name',
            'email' => '',
            'password' => 'test_password']);

        $response->assertStatus(422);
    }

    public function test_register_controller_validation_password_failed()
    {
        $response = $this->postJson('/api/register', [
            'username' => 'test_name',
            'email' => 'test@test.ru',
            'password' => 'test']);

        $response->assertStatus(422);
    }

}