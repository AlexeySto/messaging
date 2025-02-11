<?php

namespace Tests\Feature\Controllers\Message;

use Tests\TestCase;
use App\Models\Message;

class SendControllerTest extends TestCase
{
    protected function tearDown(): void
    {
        Message::where('content',  'test content')->delete();

        parent::tearDown();
    }
    public function test_send_message_success()
    {
        
        $response = $this->postJson('/api/message', [
            'chat_id' => 1,
            'user_id' => 1,
            'content' => 'test content'
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('messages', ['content' => 'test content', 'chat_id' => 1, 'user_id' => 1]);
    }

    public function test_send_message_validation_chat_id_failed()
    {
        $response = $this->postJson('/api/message', [
            'chat_id' => '',
            'user_id' => 1,
            'content' => 'test content'
        ]);

        $response->assertStatus(422);
    }

    public function test_send_message_validation_user_id_failed()
    {
        $response = $this->postJson('/api/message', [
            'chat_id' => 1,
            'user_id' => '',
            'content' => 'test content'
        ]);

        $response->assertStatus(422);
    }

    public function test_send_message_validation_content_failed()
    {
        $response = $this->postJson('/api/message', [
            'chat_id' => 1,
            'user_id' => 1,
            'content' => ''
        ]);

        $response->assertStatus(422);
    }
}
