<?php

namespace Tests\Feature\Controllers\Chat;

use Tests\TestCase;
use App\Models\User;

class GetChatsByUserIdControllerTest extends TestCase
{
    public function test_get_chats_by_user_id()
    {
        $user = User::factory()->create();

        $response = $this->getJson('/api/chats/' . $user->id);

        $response->assertStatus(200);
    }
}
