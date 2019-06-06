<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\EditUserRequest;
use App\Http\Requests\UserEditRequest;
use App\Repositories\UsersRepositoryInterface;
use App\Role;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\UploadedFile;

class UserController extends Controller
{
    protected $users;
    public function __construct(UsersRepositoryInterface $users)
    {
        $this->users = $users;
        //$this->middleware('auth',['except'=>['show']]);
        //$this->middleware( 'role:Admin', ['except'=>['edit','update','show']] );
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users =  $this->users->all();
        return view('users.index',compact('users'));

    }

    public function indexPaginate()
    {
        $users =  $this->users->allPaginate(10);
        return view('users.indexPaginate',compact('users'));

    }

    /**
     * Show the form   for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("users.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserCreateRequest $request)
    {
        //validamos request
       $user = $this->users->create($request);

        //VOLVEMOS A LISTADO
        return redirect()->route('users.index')->with('info','Usuario creado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->users->findById(decrypt($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $id = decrypt($id); ;

        $user = $this->users->findById($id);
        //uso de politicas
        return view('users.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserEditRequest $request, $id)
    {

        $user = $this->users->update($request,$id);

        return back()->with('info','Usuario actualizado')->with('user',$user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
