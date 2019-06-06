<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = "e_messages";
    protected $fillable = ['user_to_id', 'user_from_id', 'subject', 'body'];

    public function userTo()
    {
        return $this->belongsTo(User::class,'user_to_id');
    }
    public function userFrom()
    {
        return $this->belongsTo(User::class,'user_from_id');
    }


    public function getCreatedAtAttribute(){

        return Carbon::parse($this->attributes['created_at'])->diffForHumans(null,true);
    }
}
