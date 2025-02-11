<?php

namespace Tests\Feature\Controllers\User;

use Tests\TestCase;
use App\Models\User;

class GetUserByIdControllerTest extends TestCase
{
    public function test_get_user_by_id_success()
    {
        $user = User::factory()->create();

        $response = $this->getJson('/api/user/' . $user->id);

        $response->assertStatus(200);
    }
}