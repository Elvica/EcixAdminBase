<?php
/**
 * Created by PhpStorm.
 * User: vicar
 * Date: 12/03/2019
 * Time: 18:34
 */

namespace App\Presenters;

class UserPresenter extends Presenter {

    //LOGICA DE VISTA PANTALLA PASOS


    public function fullName()
    {
        return $this->model->name . " " . $this->model->last_name;
    }
    function getPicUser()
    {

        if($this->model->src_picture == null || $this->model->src_picture == "")
            return "https://www.gravatar.com/avatar/" . md5($this->model->email) . "?s=200";
        else return $this->model->src_picture;

    }




}
?>