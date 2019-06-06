@extends('layouts.master')
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
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                            <i class="fa fa-bars"></i>
                        </button>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
                        <ul class="nav navbar-nav">
                            @each('partials.menu-item-top-nav', $adminlte->menu(), 'item')
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
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
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">@lang("Toggle navigation")</span>
                </a>
            @endif
                <!-- Navbar Right Menu -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- Messages: style can be found in dropdown.less-->
                        <notifications></notifications>
                       {{-- <li class="dropdown messages-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-envelope-o"></i>

                                @if($unreadNoti = auth()->user()->unreadNotifications->count())
                                    <span class="label label-success">{{$unreadNoti}}</span>
                                @endif
                            </a>
                            <ul class="dropdown-menu">
                                <li class="header">@lang("You have :attribute messages unread",['attribute' => $unreadNoti])<div class="pull-right">
                                        <a href="{{route("messages.create")}}" >@lang("Send Message")</a>
                                    </div></li>

                                <li>
                                    <!-- inner menu: contains the actual data -->
                                    <ul class="menu">
                                        <li><!-- start message -->
                                            <a href="#">
                                                <div class="pull-left">
                                                    <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                                                </div>
                                                <h4>
                                                    @lang("Support Team")
                                                    <small><i class="fa fa-clock-o"></i> @lang(":attribute mins",["attribute"=>5])</small>
                                                </h4>
                                                <p>@lang("Why not buy a new awesome theme?")</p>
                                            </a>
                                        </li>
                                        <!-- end message -->
                                    </ul>
                                </li>
                                <li class="footer"><a href="#">@lang("See All Messages")</a></li>
                            </ul>
                        </li>--}}
                        <!-- Notifications: style can be found in dropdown.less -->
                        <li class="dropdown notifications-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-bell-o"></i>
                                <span class="label label-warning">10</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="header">@lang("You have :attribute notifications",['attribute' => 10])</li>
                                <li>
                                    <!-- inner menu: contains the actual data -->
                                    <ul class="menu">
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-users text-aqua"></i> @lang(":attribute new members joined today",['attribute' => 5])
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="footer"><a href="#">@lang("View all")</a></li>
                            </ul>
                        </li>
                        <!-- Tasks: style can be found in dropdown.less -->
                        <li class="dropdown tasks-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-flag-o"></i>
                                <span class="label label-danger">9</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="header">@lang("You have :attribute tasks",["attribute"=>9]) </li>
                                <li>
                                    <!-- inner menu: contains the actual data -->
                                    <ul class="menu">
                                        <li><!-- Task item -->
                                            <a href="#">
                                                <h3>
                                                    @lang("Design some buttons")
                                                    <small class="pull-right">20%</small>
                                                </h3>
                                                <div class="progress xs">
                                                    <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span class="sr-only">20% @lang("Complete")</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <!-- end task item -->
                                    </ul>
                                </li>
                                <li class="footer">
                                    <a href="#">@lang("View all tasks")</a>
                                </li>
                            </ul>
                        </li>
                        <!-- User Account: style can be found in dropdown.less -->
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="{{auth()->user()->present()->getPicUser()}}" class="user-image" alt="User Image">
                                <span class="hidden-xs">{{auth()->user()->present()->fullName()}}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header">
                                    <img src="{{auth()->user()->src_picture}}" class="img-circle" alt="User Image">

                                    <p>
                                        {{auth()->user()->name}} - {{auth()->user()->roles->first()->name}}
                                        <small>@lang("Miember since") {{formatDate(auth()->user()->created_at)}}</small>
                                    </p>
                                </li>
                                <!-- Menu Body -->
                                <li class="user-body">
                                    <div class="row">
                                        <div class="col-xs-4 text-center">
                                            <a href="#">@lang("Followers")</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <a href="#">@lang("Sales")</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <a href="#">@lang("Friends")</a>
                                        </div>
                                    </div>
                                    <!-- /.row -->
                                </li>
                                <!-- Menu Footer-->
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="#" >@lang("Perfil")</a>
                                    </div>
                                    <div class="pull-right">
                                        @if(config('adminlte.logout_method') == 'GET' || !config('adminlte.logout_method') && version_compare(\Illuminate\Foundation\Application::VERSION, '5.3.0', '<'))
                                            <a href="{{ url(config('adminlte.logout_url', 'auth/logout')) }}">
                                                <i class="fa fa-fw fa-power-off"></i> @lang("Logout")
                                            </a>
                                        @else
                                            <a href="#"
                                               onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                                            >
                                                <i class="fa fa-fw fa-power-off"></i>  @lang("Logout")
                                            </a>
                                            <form id="logout-form" action="{{ url(config('adminlte.logout_url', 'auth/logout')) }}" method="POST" style="display: none;">
                                                @if(config('adminlte.logout_method'))
                                                    {{ method_field(config('adminlte.logout_method')) }}
                                                @endif
                                                {{ csrf_field() }}
                                            </form>
                                        @endif
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <!-- Control Sidebar Toggle Button -->
                       {{-- <li>
                            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                        </li>--}}
                    </ul>
                      </div>
                @if(config('adminlte.layout') == 'top-nav')
                </div>
                @endif
            </nav>
        </header>

        @if(config('adminlte.layout') != 'top-nav')
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">

            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="pull-left image">
                        {{--<img src="img/user2-160x160.jpg" class="img-circle" alt="User Image">--}}
                        <img src="{{auth()->user()->src_picture}}" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>{{auth()->user()->present()->fullName()}}</p>
                       {{-- <a href="#"><i class="fa fa-circle text-success"></i> Online</a>--}}
                    </div>
                </div>
                <!-- search form -->
               {{-- <form action="#" method="get" class="sidebar-form">
                    <div class="input-group">
                        <input type="text" name="q" class="form-control" placeholder="Search...">
                        <span class="input-group-btn">
                            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>--}}
                <!-- Sidebar Menu -->
                <ul class="sidebar-menu" data-widget="tree">
                    @each('partials.menu-item', $adminlte->menu(), 'item')
                </ul>
                <!-- /.sidebar-menu -->
            </section>
            <!-- /.sidebar -->
        </aside>
        @endif

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            @if(config('adminlte.layout') == 'top-nav')
            <div class="container">
            @endif

            <!-- Content Header (Page header) -->
            <section class="content-header">
                @yield('content_header')
                <ol id ="breadcrumb" class="breadcrumb">

                </ol>
            </section>
            </section>

            <!-- Main content -->
            <section class="content">

                @yield('content')

            </section>
            <!-- /.content -->
            @if(config('adminlte.layout') == 'top-nav')
            </div>
            <!-- /.container -->
            @endif

        </div>
        <!-- /.content-wrapper -->
        <!-- footer -->
        <footer class="main-footer">
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
      {{--  <script>
            $(function () {
                    function breadcrumRecursive($element) {
                        $elementPadre = $element.parent().closest('li[class^="active"]').last();
                        $dev = $elementPadre.clone();
                        $dev = $dev.get(0).children[0];
                        $dev.removeChild($($dev).find('.pull-right-container').get(0));
                        $elementReturn = "<li>" + $dev.outerHTML + "</li>";

                        if ($element.parent().closest('li[class^="active"] a').last().get(0)) {
                            return $elementReturn + menu($elementPadre);
                        } else {
                            return $elementReturn;
                        }
                    }
                    $element = $(".sidebar-menu li .active").last();
                    $home = "<li><a href='/'><i class='fa fa-dashboard'></i> Home</a></li>";
                    $(".breadcrumb").html($home + breadcrumRecursive($element) + $element.get(0).outerHTML);
                });
            </script>--}}
    @stack('js')
    @yield('js')
@stop