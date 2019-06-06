@extends('layouts.page')
@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.min.css">
    @yield('css')
@endsection
@section('title', 'ECIX - Modifiación Usuarios')

@section('content_header')
    <h1>@lang("Edit User")
    <small>@lang("Edit")</small>
    </h1>
@stop

@section('content')
    @if(session()->has('info'))
        <div class="alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4><i class="icon fa fa-check"></i>@lang("User")</h4>
            {{session('info')}}
        </div>
    @endif
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">@lang("User")</h3>


        </div>

        <!-- /.box-header -->
        <form role="form" method="POST" action="{{route('users.update', encrypt($user->id))}}" enctype="multipart/form-data">
            @method('PUT')
            @include('users.form')
        </form>

    </div>
    <!-- /.box -->
@stop
@section('js')
    {{--<script src="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.js"></script>
    <script>
        $(function () {
            //Initialize Select2 Elements
            $('.select2').select2()

        })

        var resize = $('#upload-demo').croppie({
            enableExif: true,
            enableOrientation: true,
            viewport: { // Default { width: 100, height: 100, type: 'square' }
                width: 200,
                height: 200,
                type: 'circle' //square
            },
            boundary: {
                width: 200,
                height: 200
            }
        });
        resize.croppie('bind', {
            url: '{{asset($user->src_picture)}}'
        });



        $('#src_picture').on('change', function () {
            var reader = new FileReader();
            reader.onload = function (e) {
                resize.croppie('bind',{
                    url: e.target.result
                }).then(function(){
                    console.log('jQuery bind complete');
                });
            }
           $("#upload-demo").show();
            //$html = "<img src='" + this.files[0]+ "' />";
           // $("#imagecropi").html($html);
            reader.readAsDataURL(this.files[0]);
        });
        $('#upload-demo').on('update.croppie', function(ev, cropData) {
            resize.croppie('result', {
                type: 'canvas',
                size: 'viewport'
            }).then(function (img) {
                console.log("bla");
                document.getElementById('user-img').src = img;
                $("#user-img").val(img);
            });
        });

        $('#up-image').on('click', function (ev) {

            resize.croppie('result', {
                type: 'canvas',
                size: 'viewport'
            }).then(function (img) {


                $html = "<img src='" + img+ "' />";
               $("#src_picture").val(file);
                return false;
            });
        });


    </script>--}}


@endsection