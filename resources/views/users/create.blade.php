
@extends('layouts.page')
@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.min.css">
@endsection
@section('title', 'ECIX - Crear Usuarios')

@section('content_header')
    <h1>@lang("Create User")
        <small>@lang("Create")</small>
    </h1>
@stop

@section('content')

    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">@lang("User")</h3>
        </div>

    <!-- /.box-header -->
        <form role="form" method="POST" action="{{route('users.store')}}" enctype="multipart/form-data">
            @include('users.form',['user'=>new App\User])
        </form>

    </div>
    <!-- /.box -->
@stop
@section('js')

    <script src="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.js"></script>
    <script>
        $(function () {
            //Initialize Select2 Elements
            $('.select2').select2()

        })
        var resize = $('#upload-demo').croppie({
            enableExif: true,
            enableOrientation: true,
            viewport: { // Default { width: 100, height: 100, type: 'square' }
                width: 150,
                height: 150,
                type: 'square' //square | circle
            },
            boundary: {
                width: 200,
                height: 200
            }
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
                $("#imageBase64").val(img);
            });
        });

    </script>
    @yield('js')
@endsection