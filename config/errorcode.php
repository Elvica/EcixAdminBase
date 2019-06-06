<?php

return [
    401 => [
        'messageError' =>  'Unauthorized',
        'descMessageError' =>  'Sorry, you are not authorized to access this page.'
    ],
    403 => [
        'messageError' =>  'Forbidden',
        'descMessageError' =>  'Sorry, you are forbidden from accessing this page.'
    ],
    404 => [
        'messageError' =>  'Page Not Found',
        'descMessageError' =>  'Sorry, the page you are looking for could not be found.'
    ],

    419 => [
        'messageError' =>  'Page Expired',
        'descMessageError' =>  'Sorry, your session has expired. Please refresh and try again.'
    ],
    429 => [
        'messageError' =>  'Too Many Requests',
        'descMessageError' =>  'Sorry, you are making too many requests to our servers.'
    ],
    500 => [
        'messageError' =>  'Server Error',
        'descMessageError' =>  'Something went wrong on our servers.'
    ],
    503 => [
        'messageError' =>  'Service Unavailable',
        'descMessageError' =>  'Sorry, we are doing some maintenance. Please check back soon.'
    ],

];
