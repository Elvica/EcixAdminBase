<?php

namespace App\Repositories;


use App\Message;
use App\User;

class MessagesRepository implements MessagesRepositoryInterface {

    protected $model;

    /**
     * UsersRepository constructor.
     * @param User $user
     * @param null $numRegPags Entero numero de registro para el paginador, null si no tiene paginador
     */
    public function __construct(Message $message)
    {
        $this->model = $message;

    }
    public function all()
    {
        return $this->model::with(['userFrom','userTo'])->where('active', "=",'1')->get();
    }
    public function allPaginate($paginate)
    {
        $users = $this->model::with(['userFrom','userTo'])->where('active', "=",'1');
        if($paginate){
            return $users->paginate($paginate);
        }
        return $users->get();
    }
    public function allWithNotActive()
    {
        return $this->model::with(['userFrom','userTo'])->where('active', "=",'0')->get();
    }
    public function count()
    {
        return $this->model::where('active', '=','1')->count();
    }

    public function create($request){
       $request->all();
        //dd($request);
        //creamos usuario*/
        $message = new Message($request->all());

        $message->save();

        return $message;
    }
    public function update($request, $id){
        $request->all();

    }

    public function delete($id){

    }

    public function findById($id){
        return  $this->model::with(['userFrom','userTo'])->findOrFail($id);
    }

}

?>