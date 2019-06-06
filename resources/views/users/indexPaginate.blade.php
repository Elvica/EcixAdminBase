@extends('layouts.page')
@section('css')

@endsection
@section('title', 'ECIX - Listado Usuarios')

@section('content_header')
    <h1>@lang("List Users")
    <small>@lang("Aplication Users")</small>
    </h1>
@stop

@section('content')
    @if(session()->has('info'))
        <div class="alert alert-success" role="alert">
            {{session('info')}}
        </div>
    @endif
    <div class="row">
        <div class="pull-right col-xs-2">
            <a href="{{route('users.create')}}" type="button" class="btn btn-block btn-success">@lang("Crear Usuario")</a>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Usuarios</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th></th>
                            <th>@lang("Name")</th>
                            <th>@lang("Last Name")</th>
                            <th>@lang("Email")</th>
                            <th>@lang("Roles")</th>

                        </tr>
                        </thead>
                         <tfoot>
                        <tr>
                            <th></th>
                            <th>@lang("Name")</th>
                            <th>@lang("Last Name")</th>
                            <th>@lang("Email")</th>
                            <th>@lang("Roles")</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        @foreach ($users as $user)
                            <tr>
                                <td scope="row">
                                    <a href="{{route('users.show', encrypt($user->id))}}">
                                        <a href="/users/{{$user->idEncrypt}}/edit"><img width="30px" src=" {{$user->src_picture}} " class="img-circle" alt="User Image"></a>
                                    </a>
                                </td>
                                <td>{{$user->name}}</td>
                                <td>{{$user->last_name}}</td>
                                <td>{{$user->email}}</td>
                                <td>
                                    {{$user->rolesString}}
                                </td>

                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                    {{ $users->links() }}
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->

        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
@stop
@section('js')

@endsection