@extends('layouts.page')
@section('css')

@endsection
@section('title', 'ECIX - Mensaje')

@section('content_header')
    <h1>@lang("Message")
    </h1>
@stop

@section('content')


    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">@lang("Message")</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                     <P>{{$message->subject}}</P>
                    <P>{{$message->body}}</P>
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