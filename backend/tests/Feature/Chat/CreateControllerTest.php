<?php

namespace Tests\Feature\Controllers\Chat;

use Tests\TestCase;
use App\Models\Chat;

class CreateControllerTest extends TestCase
{
    protected function tearDown(): void
    {
        Chat::where('chat_name',  'Test Chat')->delete();

        parent::tearDown();
    }

    public function test_create_chat_success()
    {

        $response = $this->postJson('/api/chat', [
            'user_id' => 1,
            'users_id' => '2,3',
            'chat_name' => 'Test Chat'
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('chats', ['chat_name' => 'Test Chat', 'user_id' => 1, 'users_id' => '2,3']);
    }

    public function test_create_chat_validation_user_id_failed()
    {
        $response = $this->postJson('/api/chat', [
            'user_id' => '',
            'users_id' => '2,3',
            'chat_name' => 'Test Chat'
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['user_id']);
    }

    public function test_create_chat_validation_users_id_failed()
    {
        $response = $this->postJson('/api/chat', [
            'user_id' => 1,
            'users_id' => '',
            'chat_name' => 'Test Chat'
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['users_id']);
    }

    public function test_create_chat_validation_chat_name_failed()
    {
        $response = $this->postJson('/api/chat', [
            'user_id' => 1,
            'users_id' => '2,3',
            'chat_name' => ''
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['chat_name']);
    }
}
