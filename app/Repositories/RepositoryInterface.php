<?php
/**
 * Created by PhpStorm.
 * User: vicar
 * Date: 07/03/2019
 * Time: 15:56
 */
namespace App\Repositories;



interface RepositoryInterface
{
    public function all();

    public function create( $request);

    public function update($request, $id);

    public function delete($id);

    public function findById($id);
    public function count();
}
?>