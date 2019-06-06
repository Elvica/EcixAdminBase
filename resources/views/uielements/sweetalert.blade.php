@extends('layouts.page')
@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
@endsection
@section('title', 'ECIX - Sweet Alert 2')

@section('content_header')
    <h1>Sweet Alert 2
    <small>Previsualización Sweet Alert 2</small>
    </h1>
@stop

@section('content')
    <div class="callout callout-info">
        <h4>Eyy!</h4>
        Instrucciones de como usar sweet alert 2 en
        <a href="https://sweetalert2.github.io/">Sweet Alert 2</a>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title">Sweet Examples</h3>
                </div>
                <div class="box-body">
                    <button type="button" id="default" class="btn btn-lg btn-default fa fa-bars" >
                        Default Sweet
                    </button>
                    <button type="button" id="info" class="btn btn-lg btn-info fa fa-info-circle" >
                        Info Sweet
                    </button>
                    <button type="button" id="danger" class="btn btn-lg btn-danger fa fa-close" >
                        Danger Sweet
                    </button>
                    <button type="button" id="warning" class="btn btn-lg btn-warning fa fa-warning">
                        Warning Sweet
                    </button>
                    <button type="button" id="success" class="btn btn-lg btn-success  fa fa-check-circle-o" >
                        Success Sweet
                    </button>
                    <button type="button" id="question" class="btn btn-lg btn-default fa fa-question" >
                        Question Sweet
                    </button>
                    <button type="button" id="position" class="btn btn-lg btn-default fa fa-toggle-right" >
                        Position Sweet
                    </button>
                    <button type="button" id="animate" class="btn btn-lg btn-default fa fa-bolt" >
                        Animation Sweet
                    </button>
                    <button type="button" id="ajax" class="btn btn-lg btn-default fa fa-language" >
                        Ajax Sweet
                    </button>
                    <button type="button" id="cadena" class="btn btn-lg btn-default fa fa-gamepad" >
                        Cadena Sweet
                    </button>
                    <button type="button" id="dynamic" class="btn btn-lg btn-default fa fa-cogs" >
                        Dynamic Sweet
                    </button>
                    <button type="button" id="timer" class="btn btn-lg btn-default fa fa-hourglass" >
                        Timer Sweet
                    </button>
                </div>
            </div>
        </div>
    </div>




@stop
@section('js')
    <script>
    $('#default').on('click', function(){
            Swal.fire('Mensaje simple sweetalert')
    });
    $('#info').on('click', function(){
        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            type: 'info',
            html:
                'Puedes usar <b>texto en negrita</b>, ' +
                '<a href="//github.com">links</a> ' +
                'y mas tags HTML',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Yuju!!',
            confirmButtonAriaLabel: 'Confirmando, Bien!!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Cancelando',
        })
    });
    $('#danger').on('click', function(){
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Algo ha ido mal!',
            footer: '<a href>Enlace</a>'
        })
    });
    $('#warning').on('click', function(){
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras revertirlo!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Borrado!',
                    'Ha sido borrado.',
                    'success'
                )
            }
        })
    });
    $('#success').on('click', function(){
        Swal.fire(
            'Ouhh Mama!',
            'Has clickado el botón!',
            'success'
        )
    });

    $('#question').on('click', function(){
        Swal.fire(
            'Internet?',
            'Eso que es lo que es?',
            'question'
        )
    });
    $('#position').on('click', function(){
        Swal.fire({
            position: 'top-end',
            title: 'Nos vamos arriba a la derecha',
            showConfirmButton: false,
            timer: 1500,
            width:'400px',
            height:'100px'
        })
    });
    $('#animate').on('click', function(){
        Swal.fire({
            title: 'Animación',
            animation: false,
            customClass: {
                popup: 'animated tada'
            }
        })
    });
    $('#ajax').on('click', function(){
    Swal.fire({
        title: 'Escribe usuario github',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Mira',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
            })
        }
    })
    });
    $('#cadena').on('click', function(){
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Siguiente &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Pregunta 1',
                text: 'Facilito'
            },
            'Pregunta 2',
            'Pregunta 3'
        ]).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'All done!',
                    html:
                        'Respuestas: <pre><code>' +
                        JSON.stringify(result.value) +
                        '</code></pre>',
                    confirmButtonText: 'Lovely!'
                })
            }
        })
    });
    $('#dynamic').on('click', function(){
        const ipAPI = 'https://api.ipify.org?format=json'

        Swal.queue([{
            title: 'Tu IP publica',
            confirmButtonText: 'Muestra IP publica',
            text:
                'Reciviendo IP ' +
                'via AJAX ',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return fetch(ipAPI)
                    .then(response => response.json())
                    .then(data => Swal.insertQueueStep(data.ip))
                    .catch(() => {
                        Swal.insertQueueStep({
                            type: 'error',
                            title: 'Unable to get your public IP'
                        })
                    })
            }
        }])
    });
    $('#timer').on('click', function(){
        let timerInterval
        Swal.fire({
            title: 'Auto close alert!',
            html:
                'Me cierro en <strong></strong> segundos.<br/><br/>' +
                '<button id="increase" class="btn btn-warning">' +
                'Necesito 5 segundos mas!' +
                '</button><br/>' +
                '<button id="stop" class="btn btn-danger">' +
                'Porfa par ael tiempo!!' +
                '</button><br/>' +
                '<button id="resume" class="btn btn-success" disabled>' +
                'Phew... reincia!' +
                '</button><br/>' +
                '<button id="toggle" class="btn btn-primary">' +
                'Toggle' +
                '</button>',
            timer: 10000,
            onBeforeOpen: () => {
                const content = Swal.getContent()
                const $ = content.querySelector.bind(content)

                const stop = $('#stop')
                const resume = $('#resume')
                const toggle = $('#toggle')
                const increase = $('#increase')

                Swal.showLoading()

                function toggleButtons () {
                    stop.disabled = !Swal.isTimerRunning()
                    resume.disabled = Swal.isTimerRunning()
                }

                stop.addEventListener('click', () => {
                    Swal.stopTimer()
                    toggleButtons()
                })

                resume.addEventListener('click', () => {
                    Swal.resumeTimer()
                    toggleButtons()
                })

                toggle.addEventListener('click', () => {
                    Swal.toggleTimer()
                    toggleButtons()
                })

                increase.addEventListener('click', () => {
                    Swal.increaseTimer(5000)
                })

                timerInterval = setInterval(() => {
                    Swal.getContent().querySelector('strong')
                        .textContent = (Swal.getTimerLeft() / 1000)
                        .toFixed(0)
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        })
    });
    </script>
@endsection