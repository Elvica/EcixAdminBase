<?php
/**
 * Created by PhpStorm.
 * User: vicar
 * Date: 07/03/2019
 * Time: 16:03
 */

namespace App\Repositories;


interface MessagesRepositoryInterface extends RepositoryInterface {

    public function allWithNotActive();
    public function all();
    public function allPaginate($paginate);
}
?>