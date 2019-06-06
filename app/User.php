<?php

namespace App;

use App\Presenters\UserPresenter;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Storage;
use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable
{
    use LaratrustUserTrait;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','last_name','src_picture','telephone','movil','apì_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    protected $appends = array('idEncrypt','rolesString');

    //ENCRIPTAR LA CONTRASEÑA CUANDO SE GUARDE
    public function setPasswordAttribute($password){
        $this->attributes['password'] = bcrypt($password);
    }

    public function present(){
        return new UserPresenter($this);
    }
    public function getSrcPictureAttribute(){
        if($this->attributes['src_picture'] == null || $this->attributes['src_picture'] == "")
            return "https://www.gravatar.com/avatar/" . md5($this->attributes['email']) . "?s=200";
        else return  Storage::url($this->attributes['src_picture']);
    }
    public function getIdEncryptAttribute(){
        return encrypt($this->attributes['id']);
    }

    public function getRolesStringAttribute(){
        return $this->roles->pluck('name')->implode(", ");
    }

}
