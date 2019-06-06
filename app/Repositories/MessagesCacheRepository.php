<?php

namespace App\Repositories;


class MessagesCacheRepository  extends CacheRepository implements MessagesRepositoryInterface {
    protected $messages;
    protected $key = "messages";

    public function __construct(MessagesRepository $messages)
    {
        $this->messages = $messages;
        parent::__construct($this->messages ,$this->key);

    }

    public function allWithNotActive()
    {
        return $this->messages->allWithNotActive();
    }


}


?>