<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('title_prefix', config('adminlte.title_prefix', ''))
        @yield('title', config('adminlte.title', 'AdminLTE 2'))
        @yield('title_postfix', config('adminlte.title_postfix', ''))</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">


    <link rel="icon" href="{{ asset('img/favicon.ico') }}">

    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
    <link rel="stylesheet" href="{{ asset('css/general.css') }}">

    <script src="{{ asset('js/app.js') }}"  ></script>

    <script type="text/javascript">
        function onDeviceReady() {
            document.body.style.position = "absolute";
            document.body.style.top = "50px";
        }

        /* Login */
        $(document).ready(function(){
            if(window.navigator.standalone == true) {
                onDeviceReady();
                // make all link remain in web app mode.
                $('a').click(function() {
                    window.location = $(this).attr('href');
                    return false;
                });
            }});
    </script>
</head>
<body>
<!-- CAJA DE LOGIN -->
<div class="loginBox">

    {{--  <img src="img/elixLogoLogin.svg" alt="Elix Logo en vertical" class="loginLogo">--}}
    {!! config('adminlte.logo_login', '<b>A</b>LT') !!}

    <form action="{{ url(config('adminlte.login_url', 'login')) }}" method="post">
    {!! csrf_field() !!}
    <!-- USUARIO -->
        <div class="form-group has-feedback {{ $errors->has('email') ? 'has-error' : '' }}">
            <div class="loginUserBox">
                <div></div>
                <input type="email" required name="email" placeholder="Email" autofocus>
            </div>
            @if ($errors->has('email'))
                <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
            @endif
        </div>
        <!-- USUARIO -->
        <div class="form-group has-feedback {{ $errors->has('password') ? 'has-error' : '' }}">


        <div class="loginPassBox">
            <div></div>
            <input type="password" required name="password" placeholder="Contraseña">
        </div>
            @if ($errors->has('password'))
                <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
            @endif
        </div>

        <div class="finalBox">

            <div class="checkbox-Box">

                <label>
                    <input type="checkbox" name="remember">
                    <span> @lang('remember_me')</span>
                </label>
                <!--   <a href="#"> ¿Olvidaste tu contraseña?</a> -->
            </div>

            {{--<input type="submit" value="@lang('sign_in')" id="submit" class="pull-right">--}}
            <button type="submit" id="submit"
                    class="pull-right">@lang('sign_in')</button>
        </div>

    </form>

</div>

<!-- FIN PORTADA MOBILE -->

<!-- FOOTER -->
<footer>
    {!! config('adminlte.logo_mini', '<b>A</b>LT') !!}
</footer>
<!-- particles.js container -->
<div id="particles-js"></div>

<script src="js/main.js"></script>

<script src="js/particles.js"></script>
<script src="js/app-ecix.js"></script>
</body>
</html>