<?php
/**
 * Created by PhpStorm.
 * User: vicar
 * Date: 21/05/2019
 * Time: 18:23
 */


/**
 * @return cadena con la imagen del usuario, si el usuario no tiene imagen en base de patos, se establece imagen de gravatar.
 */
function getPicUser()
{

    if(auth()->user()->src_picture == null || auth()->user()->src_picture == "")
        return "https://www.gravatar.com/avatar/" . md5(auth()->user()->email) . "?s=200";
    else return auth()->user()->src_picture;

}
