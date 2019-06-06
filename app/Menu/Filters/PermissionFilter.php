<?php

namespace App\Menu\Filters;

use Illuminate\Contracts\Auth\Access\Gate;
use App\Menu\Builder;
use Laratrust;

class PermissionFilter implements FilterInterface
{
    protected $gate;


    public function transform($item, Builder $builder)
    {
        if (isset($item['permission']) && ! Laratrust::can($item['permission'])) {
            return false;
        }

        return $item;
    }


}
