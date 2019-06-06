<?php
/**
 * Created by PhpStorm.
 * User: vicar
 * Date: 12/03/2019
 * Time: 18:37
 */

namespace App\Presenters;


use Illuminate\Database\Eloquent\Model;

abstract class Presenter
{
    protected $model;
    public function __construct(Model $model)
    {
        $this->model = $model;
    }
}