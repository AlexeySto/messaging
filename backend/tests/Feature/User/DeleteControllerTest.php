<?php

namespace Tests\Feature\Controllers\User;

use Tests\TestCase;
use App\Models\User;

class DeleteControllerTest extends TestCase
{
    public function test_delete_user_success()
    {
        $this->actingAs(User::factory()->create(['is_admin' => true]));

        $userToDelete = User::factory()->create();

        $response = $this->delete('/users/' . $userToDelete->id);
        $response->assertStatus(302);
    }
}
