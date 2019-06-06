
@csrf
<div class="box-body">
<div class="col-md-12">

    <div class="row">
        <div class="form-group {{ $errors->has('user_to_id') ? 'has-error' : '' }}" >
            <label for="user_to_id">
                @if ($errors->has('user_to_id'))
                    <i class="fa fa-times-circle-o"></i>
                @endif
                @lang("Message To")</label>
            <input type="hidden" class="form-control" id="user_from_id" name="user_from_id" value ="{{encrypt(auth()->id())}}">
            <select class="form-control select2" name="user_to_id" id="user_to_id" required  style="height: 34px">

                <option></option>
                @foreach($usersTo as $user)
                    <option value = "{{encrypt($user->id)}}" {{ (encrypt($user->id) == old('user_to_id'))?'selected':'' }}> {{$user->present()->fullName()}}</option>
                @endforeach
            </select>
        </div>
    </div>
    <div class="row">
        <div class="form-group {{ $errors->has('subject') ? 'has-error' : '' }}">
            <label for="subject">
                @if ($errors->has('subject'))
                    <i class="fa fa-times-circle-o"></i>
                @endif
                @lang("Subject")
            </label>
            <input type="text" class="form-control" id="subject" name="subject" placeholder="@lang("Subject")" required value="{{old('subject')}}">
            @if ($errors->has('subject'))
                <span class="help-block" >
                    <strong>{{ $errors->first('subject') }}</strong>
                </span>
            @endif
        </div>

    </div>

    <div class="row">
        <div class="form-group {{ $errors->has('body') ? 'has-error' : '' }}">
            <label for="body">
                @if ($errors->has('body'))
                    <i class="fa fa-times-circle-o"></i>
                @endif
                @lang("Body")
            </label>
            <textarea class="form-control" rows="3" name="body" id="body" placeholder="@lang("Message...")">{{old('body')}}</textarea>
            @if ($errors->has('body'))
                <span class="help-block" >
                    <strong>{{ $errors->first('body') }}</strong>
                </span>
            @endif
        </div>

    </div>
</div>
</div>
<!-- /.box-body -->

<div class="box-footer">
<button type="submit" class="btn btn-primary">@lang("Enviar")</button>
</div>

@section('js')

    <script>
        $(function () {
            $('.select2').select2(
                {
                    placeholder: "Selecciona...",
                    allowClear: true
                }
            )

        })
    </script>


@endsection