@extends('layouts.page')

@section('title', 'ECIX')

@section('content_header')
    <h1>ChartJS
    <small>Ejemplos</small>
    </h1>
@stop

@section('content')
    <div class="row">
        <div class="col-md-6">
            <!-- AREA CHART -->
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Area Chart</h3>

                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="areaChart" style="height:250px"></canvas>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->

            <!-- DONUT CHART -->
            <div class="box box-danger">
                <div class="box-header with-border">
                    <h3 class="box-title">Donut Chart</h3>

                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <canvas id="pieChart" style="height:250px"></canvas>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->

        </div>
        <!-- /.col (LEFT) -->
        <div class="col-md-6">
            <!-- LINE CHART -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Line Chart</h3>

                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="lineChart" style="height:250px"></canvas>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->

            <!-- BAR CHART -->
            <div class="box box-success">
                <div class="box-header with-border">
                    <h3 class="box-title">Bar Chart</h3>

                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="barChart" style="height:230px"></canvas>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->

        </div>
        <!-- /.col (RIGHT) -->
    </div>
    <!-- /.row -->

@stop
@section('js')
    <!-- page script -->
    <script>
        $(function () {
            function menu(element) {
                elementPadre = element.parent().closest('li[class^="active"] ').last() ;
                dev = elementPadre.clone();
                dev = dev.get(0).children[0];
                dev.removeChild($(dev).find('.pull-right-container').get(0));
                elementReturn = "<li>" + dev.outerHTML +"</li>";
               if(element.parent().closest('li[class^="active"] a').last().get(0)) {
                   return  elementReturn+ menu(element.parent().closest('li[class^="active"]').last());
               }else{
                   return elementReturn;
               }
            }
            element = $(".sidebar-menu li .active") ;
            element = $(".sidebar-menu li .active").last();
            console.log(element.get(0));
            $(".breadcrumb").html(menu(element)+element.get(0).outerHTML );

            /* ChartJS
             * -------
             * Here we will create a few charts using ChartJS
             */

            //--------------
            //- AREA CHART -
            //--------------

            // Get context with jQuery - using jQuery's .get() method.
            var areaChartCanvas = $('#areaChart').get(0).getContext('2d')
            // This will get the first returned node in the jQuery collection.
            //var areaChart       = new Chart(areaChartCanvas)

            var areaChartData = {
                labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label               : 'Digital Goods',
                        backgroundColor           : 'rgba(60,141,188,0.8)',
                        borderColor           : 'rgba(60,141,188,0.8)',

                        data                : [28, 48, 40, 19, 86, 27, 90],
                        fill:true
                    },
                    {
                        label               : 'Electronics',
                        backgroundColor           : 'rgba(210, 214, 222, 0.7)',
                        borderColor           : 'rgba(210, 214, 222,0.8)',

                        data                : [65, 59, 80, 81, 56, 55, 40],
                        fill:true
                    },
                ]
            }

            var areaChartOptions = {
                //Boolean - If we should show the scale at all
                showScale               : true,
                //Boolean - Whether grid lines are shown across the chart
                //scaleShowGridLines      : false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        }
                    }]
                },

                elements: {
                    point:{
                        radius: 0
                    }
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },

                responsive              : true
    }

    //Create the line chart
            var areaChart = new Chart(areaChartCanvas , {
                type: "line",
                data: areaChartData,
                options:areaChartOptions
            });
   // areaChart.Line(areaChartData, areaChartOptions)

    //-------------
    //- LINE CHART -
    //--------------
    var lineChartCanvas          = $('#lineChart').get(0).getContext('2d')
    //var lineChart                = new Chart(lineChartCanvas)
    var lineChartOptions         = areaChartOptions;
    areaChartData.datasets[0].fill = false;
    areaChartData.datasets[1].fill = false;
     var lineChart = new Chart(lineChartCanvas , {
                type: "line",
                data: areaChartData,
                options:lineChartOptions
            });
    //lineChart.Line(areaChartData, lineChartOptions)

    //-------------
    //- PIE CHART -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    //var pieChart       = new Chart(pieChartCanvas)
    var PieData        =
        {
        datasets :[{

            data:[700,500,400,600,300,100],
            backgroundColor:["#f56954","#00a65a","#f39c12","#00c0ef","#3c8dbc","#d2d6de"]
        }],
            labels:['Chorme','IE','Firefox','Safari','Opera','Navigator']
        };
    var pieOptions     =  {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Donut chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
     var pieChart = new Chart(pieChartCanvas , {
                type: "doughnut",
                data: PieData,
                options:pieOptions
            });
    //pieChart.Doughnut(PieData, pieOptions)

    //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas                   = $('#barChart').get(0).getContext('2d')
    //var barChart                         = new Chart(barChartCanvas)
    var barChartData                     = areaChartData
    barChartData.datasets[1].backgroundColor   = '#00a65a';
    barChartData.datasets[1].backgroundColor = '#00a65a';
    barChartData.datasets[1].backgroundColor  = '#00a65a';
    var barChartOptions                  = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value

      responsive              : true,
      maintainAspectRatio     : true
    }

    barChartOptions.datasetFill = false
    var pieChart = new Chart(barChartCanvas , {
                type: "bar",
                data: barChartData,
                options:barChartOptions
            });
    //barChart.Bar(barChartData, barChartOptions)
  })
</script>
@endsection