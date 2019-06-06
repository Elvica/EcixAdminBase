<?php

namespace App\Observers;


use App\Message;
use App\Notifications\MessageSent;
use Illuminate\Support\Facades\Log;

class MessageObserver
{
    public function created(Message $message)
    {
        $message->load(['userTo','userFrom']);
        $userTo = $message->userTo;
        $userTo->notify(new MessageSent($message));
    }
}
