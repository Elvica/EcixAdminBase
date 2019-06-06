<?php

namespace App\Listeners;

use App\Events\MessageEvent;
use App\Notifications\MessageSent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class MessageListener implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(MessageEvent $event)
    {
        $userTo = $event->message->userTo;
        $userTo->notify(new MessageSent($event->message));
    }
}
