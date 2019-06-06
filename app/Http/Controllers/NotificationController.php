<?php

namespace App\Http\Controllers;

use App\Notifications\MessageSent;
use App\Repositories\MessagesRepositoryInterface;
use App\Repositories\UsersRepositoryInterface;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    protected $users, $message;
    public function __construct(UsersRepositoryInterface $users, MessagesRepositoryInterface $message)
    {
        $this->users = $users;
        $this->message = $message;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $unreadNotifications =  auth()->user()->unreadNotifications->where('type', '=',MessageSent::class);
        $readNotifications =  auth()->user()->readNotifications->where('type', '=',MessageSent::class);
        $messages = collect();
        if(request()->ajax()){
            $messagesItem = collect();
            foreach ($unreadNotifications->take(3) as $readNot){
                $messagesItem->add($this->message->findById($readNot->data['objectId']));
            }
            $messages->put('messages',$messagesItem);
            $messages->put('unreadLength',$unreadNotifications->count());
            return $messages;
        }
        return view('notifications.index',compact(['readNotifications','unreadNotifications']));

    }

    /**
     * Show the form   for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

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
