<?php

namespace Tests\Feature\Controllers\User;

use Tests\TestCase;
use App\Models\User;

class UpdateControllerTest extends TestCase
{
    protected $user;

    protected function setUp(): void
    {
        parent::setUp();
        // Создаем тестового пользователя
        $this->user = User::factory()->create();
    }

    public function test_update_user_success()
    {
        $response = $this->actingAs($this->user)->putJson(route('users.update', ['id' => $this->user->id]), [
            'username' => 'new_username',
            'email' => 'new_email@test.ru',
        ]);

        $response->assertRedirect(route('users.getAllUsers'));
        $response->assertSessionHas('success', 'Пользователь успешно обновлён');

        // Проверка обновленных данных
        $this->user->refresh();
        $this->assertEquals('new_username', $this->user->username);
        $this->assertEquals('new_email@test.ru', $this->user->email);
    }

    public function test_update_user_validation_failure()
    {
        $response = $this->actingAs($this->user)->putJson(route('users.update', ['id' => $this->user->id]), [
            'username' => '', // Ошибка: пустое имя пользователя
            'email' => 'invalid_email', // Ошибка: некорректный email
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['username', 'email']);
    }

    public function test_update_user_email_already_exists()
    {
        // Создаем другого пользователя с тем же email
        User::factory()->create(['email' => 'existing_email@test.ru']);

        $response = $this->actingAs($this->user)->putJson(route('users.update', ['id' => $this->user->id]), [
            'username' => 'another_username',
            'email' => 'existing_email@test.ru', // Ошибка: email уже существует
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['email']);
    }

    protected function tearDown(): void
    {
        // Удаляем тестового пользователя после тестов
        $this->user->delete();

        parent::tearDown();
    }
}
