@extends('layouts.error')
@section('title', 'ECIX - Error' )


@section('content')
    <div class="error-page">
        <h2 class="headline text-yellow"> {{$errorCode}}</h2>

        <div class="error-content">
            <h3><i class="fa fa-warning text-yellow"></i> @lang("Whoops!") @lang($error['messageError']).</h3>

            <p>
                @lang($error['descMessageError'])
            </p>
            <p>
                <a class="btn btn-block btn-warning btn-lg" href="/">@lang("Go Home")</a>
            </p>


        </div>
        <!-- /.error-content -->
    </div>
    <!-- /.error-page -->
@stop