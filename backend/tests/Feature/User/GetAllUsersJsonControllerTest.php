<?php

namespace Tests\Feature\Controllers\User;

use Tests\TestCase;

class GetAllUsersJsonControllerTest extends TestCase
{
    public function test_get_all_users_json_success()
    {
        $response = $this->getJson('/api/users/');

        $response->assertStatus(200);
    }
}