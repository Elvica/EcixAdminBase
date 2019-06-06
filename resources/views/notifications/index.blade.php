@extends('layouts.page')
@section('css')

@endsection
@section('title', 'ECIX - Notificaciones')

@section('content_header')
    <h1>@lang("Notifications")
    <small>@lang("Total")</small>
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


            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">@lang("Notifications")</h3>
                </div>
                <div class="box-body">
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="box-title">@lang("Read")</h3>
                        <table id="tableLeidas" class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>@lang("Link")</th>
                                <th>@lang("Text")</th>

                            </tr>
                            </thead>

                        </table>
                    </div>
                    <div class="col-md-6">
                        <h3 class="box-title">@lang("UnRead")</h3>
                        <table id="tableNoLeidas" class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>@lang("Link")</th>
                                <th>@lang("Text")</th>

                            </tr>
                            </thead>

                        </table>
                    </div>

                </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="box-title">@lang("Read")</h3>
                            <ul class="list-group">
                                @foreach($readNotifications as $readNotificacion)
                                    <li class="list-group-item">
                                        <a href="{{$readNotificacion->data['link']}}">{{--{{$readNotificacion->data['text']}}--}}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h3 class="box-title">@lang("UnRead")</h3>
                            <ul class="list-group">
                                @foreach($unreadNotifications as $unreadNotificacion)
                                    <li class="list-group-item">
                                        <a href="{{$unreadNotificacion->data['link']}}">{{--{{$unreadNotificacion->data['text']}}--}}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>

                    </div>


            </div>

            </div>
            <!-- /.box -->

@stop
@section('js')
    <script type="application/javascript">
        $(function () {

            var unreadNotifications = @json($unreadNotifications);
            var table1 = $("#tableNoLeidas").DataTable({
                'data': unreadNotifications,
                'paging'      : true,
                'lengthChange': false,
                'pageLength'  : 8,
                'searching'   : true,
                'ordering'    : true,
                'info'        : true,
                "language"    : {
                    //"url": "Spanish.json"
                    "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                },
                columns: [

                    { data: "data.link" },
                    { data: "data" },
                ],
                "order": [[1, 'asc']]
            });
            var readNotifications = @json($readNotifications);
            var table2 = $("#tableLeidas").DataTable({
                'data': readNotifications,
                'paging'      : true,
                'lengthChange': false,
                'pageLength'  : 8,
                'searching'   : true,
                'ordering'    : true,
                'info'        : true,
                "language"    : {
                    //"url": "Spanish.json"
                    "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                },
                columns: [

                    { data: "data.link" },
                    { data: "data" },
                ],
                "order": [[1, 'asc']]
            });
            // Add event listener for opening and closing details

        })
    </script>
@endsection