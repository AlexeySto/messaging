<?php

namespace Tests\Feature\Controllers\User;

use Tests\TestCase;
use App\Models\User;

class GetAllUsersControllerTest extends TestCase
{
    public function test_get_all_users_success()
    {
        $this->actingAs(User::factory()->create(['is_admin' => true]));

        $response = $this->get('/users');

        $response->assertStatus(200);
    }
}
