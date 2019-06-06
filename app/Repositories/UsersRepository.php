<?php

namespace App\Repositories;


use App\Role;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class UsersRepository implements UsersRepositoryInterface {

    protected $model;

    /**
     * UsersRepository constructor.
     * @param User $user
     * @param null $numRegPags Entero numero de registro para el paginador, null si no tiene paginador
     */
    public function __construct(User $user)
    {
        $this->model = $user;

    }
    public function all()
    {
        return $this->model::with('roles')->where('active', "=",'1')->get();
    }
    public function allExceptAuth()
    {
        return $this->model::with("roles")->where('active', "=",'1')->where('id', "!=",auth()->id())->get();
    }
    public function allPaginate($paginate)
    {
        $users = $this->model::with('roles')->where('active', "=",'1');
        if($paginate){
            return $users->paginate($paginate);
        }
        return $users->get();
    }
    public function allWithNotActive()
    {
        return $this->model::with('roles')->where('active', "=",'0')->get();
    }
    public function count()
    {
        return $this->model::where('active', "=",'1')->count();
    }

    public function create($request){
       $request->all();
        //dd($request);
        //creamos usuario*/
        $user = new User($request->all());

        $user->save();
        if($request->imageBase64){
            $image = $request->imageBase64;

            list($type, $image) = explode(';', $image);
            list(, $image)      = explode(',', $image);
            $image = base64_decode($image);
            $image_path_name= "avatars/". $user->id  .'.jpeg';
            /*$path = $request->file('src_picture')
                            ->storeAs( 'avatars', $image_name,'public');*/
            //$path = Storage::putFileAs('avatars',$image, $image_name,'public');
            Storage::disk('public')->put($image_path_name,$image,['visibility'=>'public']);

            $user->src_picture = $image_path_name;
            $user->save();

        }


        $user->syncRoles(Role::find($request->roles));
        return $user;
    }
    public function update($request, $id){
        $request->all();
        $user = $this->findById(decrypt($id));
        /*if($request->src_picture){
            $path = $request->file('src_picture')
                            ->storeAs( 'avatars', $user->id . "." . $request->file('src_picture')
                                                                            ->clientExtension(),'public');
            $user->src_picture = $path;
        }*/
        if($request->imageBase64){
            $image = $request->imageBase64;
            list($type, $image) = explode(';', $image);
            list(, $image)      = explode(',', $image);
            $image = base64_decode($image);
            $image_path_name= "avatars/". $user->id  .'.jpeg';
            Storage::disk('public')->put($image_path_name,$image,['visibility'=>'public']);

            $user->src_picture = $image_path_name;
        }
        $user->last_name = $request->last_name;
        $user->name = $request->name;
        $user->email= $request->email;
        $user->syncRoles(Role::find($request->roles));
        $user->save();
        return $user;
    }

    public function delete($id){

    }

    public function findById($id){
        return  $this->model::with('roles')->findOrFail($id);
    }

}

?>