<?php

namespace Tests\Feature\Controllers\Message;

use Tests\TestCase;
use App\Models\User;

class GetMessagesByUserIdControllerTest extends TestCase
{
    public function test_get_messages_by_user_id()
    {
        $user = User::factory()->create();

        $response = $this->getJson('/api/messages/' . $user->id);

        $response->assertStatus(200);
    }
}
