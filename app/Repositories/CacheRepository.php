<?php

namespace App\Repositories;



use Illuminate\Support\Facades\Cache;

class CacheRepository{

    protected $repository;
    protected $all = "all";
    protected $page = "page";
    protected $count = "count";
    protected $key;

    /**
     * CacheRepository constructor.
     * @param $repository
     * @param $key Clave para cache general
     */
    public function __construct($repository, $key)
    {
        $this->repository = $repository;
        $this->key = $key;
    }

    public function getKeyAll(){

    }

    public function all(){
        $key = $this->key . $this->all;

        return Cache::tags($this->key)->rememberForever($key,function(){
            return $this->repository->all();
        });
    }

    /**
     * @param $paginate Número de registros por página
     * @return mixed
     */
    public function allPaginate($paginate){
        $key = $this->key . $this->page. "." . request('page',1);

        return Cache::tags($this->key)->rememberForever($key,function() use ($paginate){
            return $this->repository->allPaginate($paginate);
        });
    }

    public function count()
    {
        $key = $this->key . $this->count;

        return Cache::tags($this->key)->rememberForever($key,function(){
            return $this->repository->count();
        });
    }

    public function create($request){
        Cache::tags($this->key)->flush();
        return $this->repository->create($request);

    }
    public function update($request, $id){
        Cache::tags($this->key)->flush();
        return $this->repository->update($request,$id);

    }

    public function delete($id){
        Cache::tags($this->key)->flush();
        $this->repository->delete($id);
    }

    public function findById($id){
        $key = $this->key . $id;

        return Cache::tags($this->key)->rememberForever($key,function() use($id) {
            return $this->repository->findById($id);
        });
    }

}

?>