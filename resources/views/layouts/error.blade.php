@extends('layouts.master')
<div id="app">
@section('adminlte_css')
    <link rel="stylesheet"
          href="{{ asset('css/skins/skin-' . config('adminlte.skin', 'blue') . '.css')}} ">
    @stack('css')
    @yield('css')
@stop

@section('body_class', 'skin-' . config('adminlte.skin', 'blue') . ' sidebar-mini ' . (config('adminlte.layout') ? [
    'boxed' => 'layout-boxed',
    'fixed' => 'fixed',
    'top-nav' => 'layout-top-nav'
][config('adminlte.layout')] : '') . (config('adminlte.collapse_sidebar') ? ' sidebar-collapse ' : ''))

@section('body')
    <div class="wrapper">

        <!-- Main Header -->
        <header class="main-header">
            @if(config('adminlte.layout') == 'top-nav')
            <nav class="navbar navbar-static-top">
                <div class="container">
                    <div class="navbar-header">
                        <a href="{{ url(config('adminlte.dashboard_url', 'home')) }}" class="navbar-brand">
                            {!! config('adminlte.logo', '<b>Ecix </b>Group') !!}
                        </a>

                    </div>


            @else
            <!-- Logo -->
            <a href="{{ url(config('adminlte.dashboard_url', 'home')) }}" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini">{!! config('adminlte.logo_mini', '<b>A</b>LT') !!}</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg">{!! config('adminlte.logo', '<b>Admin</b>LTE') !!}</span>
            </a>

            <!-- Header Navbar -->
            <nav class="navbar navbar-static-top" role="navigation">

            @endif
                <!-- Navbar Right Menu -->

                @if(config('adminlte.layout') == 'top-nav')
                </div>
                @endif
            </nav>
        </header>



        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper" style="margin-left: 0px!important;">


            <!-- Content Header (Page header) -->
            <section class="content-header">
                @yield('content_header')

            </section>

            <!-- Main content -->
            <section class="content">

                @yield('content')

            </section>
            <!-- /.content -->


        </div>
        <!-- /.content-wrapper -->
        <!-- footer -->
        <footer class="main-footer" style="margin-left: 0px!important;">
            <div class="pull-right hidden-xs">
                <b>@lang("Version")</b> {{config('app.version')}}
            </div>
            <strong>Copyright &copy; 2019 <a href="https://www.ecixgroup.com/">Ecix Group</a>.</strong> @lang("All rights reserved").
        </footer>
        <!-- /.footer -->


    </div>
    <!-- ./wrapper -->
@stop

@section('adminlte_js')
       {{-- <script src="{{ asset('js/adminlte.min.js') }}" ></script>--}}
    @stack('js')
    @yield('js')
@stop
</div>