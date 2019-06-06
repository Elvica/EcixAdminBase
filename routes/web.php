<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//LOGIN
/*DB::listen(function ($query){
   echo "<pre>{{$query->sql}}</pre>";
});*/
Auth::routes();
Route::get('/', function () {
    return redirect("/dashboard/dash1");
})->middleware('auth');
Route::get('/dashboard/dash1', function () {
    return view('dashboard.dashboard');
})->middleware('auth');


//USUARIOS
Route::resource('/users','UserController')->names('users')->middleware('auth');
Route::get('/usersPaginate','UserController@indexPaginate')->name('usersPaginate')->middleware('auth');

//MENSAJES
Route::resource('/messages','MessageController')->names('messages')->middleware('auth');

//NOTIFICACIONES
Route::get("/notifications",'NotificationController@index')->name('notifications.index')->middleware('auth');

//EJEMPLOS
Route::get('/ejemplos/chartjs', function () {
    return view('charts.chartjs');
})->middleware('auth');
Route::get('/ejemplos/morris', function () {
    return view('charts.morris');
})->middleware('auth');
Route::get('/ejemplos/flot', function () {
    return view('charts.flot');
})->middleware('auth');
Route::get('/ejemplos/inlinecharts', function () {
    return view('charts.inlinecharts');
})->middleware('auth');

//FORMULARIOS
Route::get('/forms/elemgenerales', function () {
    return view('forms.elemgenerales');
})->middleware('auth');
Route::get('/forms/elemespeciales', function () {
    return view('forms.elemespeciales');
})->middleware('auth');
Route::get('/forms/editores', function () {
    return view('forms.editores');
})->middleware('auth');

//TABLAS
Route::get('/tables/simple', function () {
    return view('tables.simple');
})->middleware('auth');
Route::get('/tables/datatable', function () {
    return view('tables.datatable');
})->middleware('auth');

//WIDGETS
Route::get('/widgets/widgets', function () {
    return view('widgets.widget');
})->middleware('auth');

//ELEMENTOS UI
Route::get('/uielements/generals', function () {
    return view('uielements.generals');
})->middleware('auth');
Route::get('/uielements/icons', function () {
    return view('uielements.icons');
})->middleware('auth');
Route::get('/uielements/buttons', function () {
    return view('uielements.buttons');
})->middleware('auth');
Route::get('/uielements/sliders', function () {
    return view('uielements.sliders');
})->middleware('auth');
Route::get('/uielements/timeline', function () {
    return view('uielements.timeline');
})->middleware('auth');
Route::get('/uielements/modals', function () {
    return view('uielements.modals');
})->middleware('auth');

Route::get('/uielements/sweetalert', function () {
    return view('uielements.sweetalert');
})->middleware('auth');


//CALENDAR
Route::get('/calendar/calendar', function () {
    return view('calendar.calendar');
})->middleware('auth');

//MAILBOX
Route::get('/mailbox/inbox', function () {
    return view('mailbox.inbox');
})->middleware('auth');
Route::get('/mailbox/compose', function () {
    return view('mailbox.compose');
})->middleware('auth');
Route::get('/mailbox/read', function () {
    return view('mailbox.read');
})->middleware('auth');


//USER ROUTES

Route::get('/user/profile', function () {
    return view('users.profile');
})->middleware('auth');


Route::get('/user/passChange', function () {
    return view('user.passchange');
})->middleware('auth');