<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $table = 'chats';

    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id',
        'users_id',
        'chat_name',
    ];

    public $timestamps = true;

    public function messages()
    {
        return $this->hasMany(Message::class, 'id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'chat_user', 'id', 'user_id');
    }
}

