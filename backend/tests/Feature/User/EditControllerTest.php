<?php

namespace Tests\Feature\Controllers\User;

use Tests\TestCase;
use App\Models\User;

class EditControllerTest extends TestCase
{
    public function test_edit_user_form_success()
    {
        $this->actingAs(User::factory()->create(['is_admin' => true]));
        $userToEdit = User::factory()->create();

        $response = $this->get('/users/' . $userToEdit->id . '/edit');

        $response->assertStatus(200);
        $response->assertViewHas('user', $userToEdit);
    }
}
