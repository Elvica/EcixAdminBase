<?php

namespace App\Http\Controllers;

use App\Events\MessageEvent;
use App\Http\Requests\MessageCreateRequest;
use App\Notifications\MessageSent;
use App\Repositories\MessagesRepositoryInterface;
use App\Repositories\UsersRepositoryInterface;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    protected $messages;
    protected $users;
    public function __construct(MessagesRepositoryInterface $messages, UsersRepositoryInterface $users)
    {
        $this->messages = $messages;
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
        $messages =  $this->messages->all();
        return view('messages.index',compact('messages'));

    }

    /**
     * Show the form   for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $usersTo = $this->users->allExceptAuth();
        return view("messages.create",compact("usersTo"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MessageCreateRequest $request)
    {
        //validamos request
        $message = $this->messages->create($request)->load(['userTo','userFrom']);


        /*$userTo = $this->users->findById($request->user_to_id);
        $userTo->notify(new MessageSent($message));*/
        //event(new MessageEvent($message));


        //VOLVEMOS A LISTADO
        return redirect()->route('messages.index')->with('info','Mensaje creado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->messages->findById(($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
   /*     $id = decrypt($id); ;

        $message = $this->messages->findById($id);
        //uso de politicas
        return view('messaje.edit', compact('messaje'));*/
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $message = $this->messages->update($request,$id);

        return back()->with('info','Mensaje actualizado')->with('message',"nessage");
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
