
@csrf
<div class="box-body">
<div class="col-md-12">
    <div class="row">
        <div class=" col-md-12 form-group {{ $errors->has('src_picture') ? 'has-error' : '' }}">
           <label for="src_picture">

                @if ($errors->has('src_picture'))
                    <i class="fa fa-times-circle-o"></i>
                @endif
                @lang("Picture")
          </label>

                <div class="mb10 ">
                    <img src="{{($user->id? $user->src_picture : "https://www.gravatar.com/avatar/")}}" width="80px" id="user-img" class="img-circle" alt="User Image">
                    <button type="button" id="select_picture" class="ml20 btn btn-lg btn-default fa fa-camera">
                        @lang("Selecciona")
                    </button>
                </div>
                <input type="hidden" name="imageBase64" id="imageBase64">



            @if ($errors->has('src_picture'))
                <span class="help-block" >
                <strong>{{ $errors->first('src_picture') }}</strong>
            </span>
            @endif
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 form-group {{ $errors->has('name') ? 'has-error' : '' }}" >
            <label for="name">
                @if ($errors->has('name'))
                    <i class="fa fa-times-circle-o"></i>
                @endif
                @lang("Name")</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="@lang("Enter Name")" required value="{{$user->name ?? old('name')}}">
            @if ($errors->has('name'))
                <span class="help-block" >
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
            @endif
        </div>
        <div class="col-md-6 form-group {{ $errors->has('last_name') ? 'has-error' : '' }}">
        <label for="last_name">
            @if ($errors->has('last_name'))
                <i class="fa fa-times-circle-o"></i>
            @endif
            @lang("Last Name")
        </label>
        <input type="text" class="form-control" id="last_name" name="last_name" placeholder="@lang("Enter Last Name")" required value="{{$user->last_name ?? old('last_name')}}">
        @if ($errors->has('last_name'))
            <span class="help-block" >
                <strong>{{ $errors->first('last_name') }}</strong>
            </span>
        @endif
    </div>
    </div>
    <div class="row">
        <div class="col-md-6 form-group {{ $errors->has('email') ? 'has-error' : '' }}">
            <label for="email">
                @if ($errors->has('email'))
                    <i class="fa fa-times-circle-o"></i>
                @endif
                @lang("Email")
            </label>
            <input type="email" class="form-control" id="email" name="email" placeholder="@lang("Enter Email")" required value="{{$user->email ?? old('email')}}">
            @if ($errors->has('email'))
                <span class="help-block" >
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
        </div>
        <div class="col-md-6 form-group {{ $errors->has('roles') ? 'has-error' : '' }}">
        <label for="roles">
            @if ($errors->has('roles'))
                <i class="fa fa-times-circle-o"></i>
            @endif
            @lang("Roles")
        </label>
        <select class="form-control select2" name="roles[]" id="roles" multiple="multiple" style="height: 34px">
            @foreach(\App\Role::all() as $role)
                <option value = "{{$role->id}}" {{ ($user->roles->contains('id',$role->id) ?? in_array($role->id,old('roles')))?'selected':'' }}> {{$role->name}}</option>
            @endforeach
        </select>
        @if ($errors->has('roles'))
            <span class="help-block" >
                <strong>{{ $errors->first('roles') }}</strong>
            </span>
        @endif
    </div>
    </div>
    @unless($user->id)
        <div class="row">
            <div class="col-md-6 form-group {{ $errors->has('password') ? 'has-error' : '' }}">
                <label for="password">
                    @if ($errors->has('password'))
                        <i class="fa fa-times-circle-o"></i>
                    @endif
                    @lang("Password")
                </label>
                <input class="form-control" id="password" type="text" name="password" required placeholder="Password..." >
                @if ($errors->has('password'))
                    <span class="help-block" >
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>
            <div class="col-md-6 form-group {{ $errors->has('password_confirmation') ? 'has-error' : '' }}">
                <label for="password_confirmation">
                    @if ($errors->has('password_confirmation'))
                        <i class="fa fa-times-circle-o"></i>
                    @endif
                    @lang("Confirmar Password")
                </label>
                <input class="form-control" id="password_confirmation" type="password" required name="password_confirmation" placeholder="Password...">
                @if ($errors->has('password_confirmation'))
                    <span class="help-block" >
                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                    </span>
                @endif
            </div>
        </div>

    @endunless

</div>
</div>
<!-- /.box-body -->

<div class="box-footer">
<button type="submit" class="btn btn-primary">@lang("Enviar")</button>
</div>

@section('js')

    <script src="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.js"></script>
    <script>
        $('#select_picture').on('click', function(){
            Swal.fire({
                title:'Selecciona una foto',
                html:
                    '<div id="upload-demo"  ></div>\n' +
                    '<input type="file" name="src_picture" id="src_picture" style="display: none;">\n' +
                    '<label for="src_picture" class="ml20 btn btn-lg btn-default fa fa-camera">'+
                    '\nSelect file'+
                    '</label>',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Guardar',
                cancelButtonAriaLabel: 'Cancelando',
                reverseButtons: true
            }).then((result) => {
                //GUARDAMOS CAMBIOS EN INPUT HIDDEN
                //TAMBIEN SE PODRÍA HACER POR AJAX
                if (result.value) {
                    resize.croppie('result', {
                        type: 'canvas',
                        size: 'viewport'
                    }).then(function (img) {
                        console.log("bla");
                        document.getElementById('user-img').src = img;
                        $("#imageBase64").val(img);
                    });
                }else{
                //SI CANCELA LIMPIAMOS INPUT HIDDEN CON BASE 64
                    $("#imageBase64").val('');
                }
            });
            //INSTANCIAMOS CROPPIE PARA HACER IMAGEN DE USUARO
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
            //SELECCION DE NUEVA IMAGEN
            $('#src_picture').on('change', function () {
                var reader = new FileReader();
                reader.onload = function (e) {
                    resize.croppie('bind',{
                        url: e.target.result
                    }).then(function(){
                        console.log('jQuery bind complete');
                    });
                }
                reader.readAsDataURL(this.files[0]);
            });
        });
        $(function () {
            $('.select2').select2()

        })
    </script>

@endsection