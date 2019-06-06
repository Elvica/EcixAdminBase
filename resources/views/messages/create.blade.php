
@extends('layouts.page')
@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.min.css">
@endsection
@section('title', 'ECIX - Enviar Mensaje')

@section('content_header')
    <h1>@lang("Create Message")
        <small>@lang("Message")</small>
    </h1>
@stop

@section('content')

    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">@lang("Message")</h3>
        </div>

    <!-- /.box-header -->
        <form role="form" method="POST" action="{{route('messages.store')}}" >
            @include('messages.form',['message'=>new App\Message])
        </form>

    </div>
    <!-- /.box -->
@stop
@section('js')


    @yield('js')
@endsection