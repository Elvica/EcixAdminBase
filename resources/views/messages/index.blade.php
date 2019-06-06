@extends('layouts.page')
@section('css')

@endsection
@section('title', 'ECIX - Listado Usuarios')

@section('content_header')
    <h1>@lang("List Users")
    <small>@lang("Aplication Users")</small>
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

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Usuarios</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <table id="example2" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>@lang("From")</th>
                            <th>@lang("To")</th>
                            <th>@lang("Subject")</th>
                            <th>@lang("Body")</th>

                        </tr>
                        </thead>
                         <tfoot>
                        <tr>
                            <th>@lang("From")</th>
                            <th>@lang("To")</th>
                            <th>@lang("Subject")</th>
                            <th>@lang("Body")</th>
                        </tr>
                        </tfoot>
                    </table>
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
    <script>
        $(function () {


            var messages = @json($messages);
            var table = $("#example2").DataTable({
                'data': messages,
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

                    { data: "user_from.name" },
                    { data: "user_to.name" },
                    { data: 'subject' },
                    {data: 'body'},
                ],
                "order": [[1, 'asc']]
            });
            // Add event listener for opening and closing details

        })
    </script>
@endsection