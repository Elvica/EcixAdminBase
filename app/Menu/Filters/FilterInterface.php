<?php

namespace App\Menu\Filters;

use App\Menu\Builder;

interface FilterInterface
{
    public function transform($item, Builder $builder);
}
