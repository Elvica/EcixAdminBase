<?php

namespace App\Repositories;


class UsersCacheRepository  extends CacheRepository implements UsersRepositoryInterface {
    protected $users;
    protected $key = "users";

    public function __construct(UsersRepository $users)
    {
        $this->users = $users;
        parent::__construct($this->users ,$this->key);

    }


    public function allWithNotActive()
    {
        return $this->users->allWithNotActive();
    }
    public function allExceptAuth()
    {
        return $this->users->allExceptAuth();

    }

}


?>