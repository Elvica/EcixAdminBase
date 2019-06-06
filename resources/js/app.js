/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.moment = require("moment");
require("bootstrap-daterangepicker");
require("bootstrap-datepicker");
require("bootstrap-colorpicker");
require("bootstrap-timepicker");
require("fullcalendar");
require("ionicons");
window.Swal = require('sweetalert2');


$('form').on('submit',function(){
    $(this).find('input[type=submit]').attr('disabled',true);
});


window.Vue = require('vue');



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('notifications', require('./components/Notifications.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
/*Echo.channel(`*`)
    .listen('*', (data)=>{
        console.log(data);
    });*/
/*
Echo.channel(`messages-channel.${userId}`)
    .listen('MessageEvent', (data)=>{
        console.log(data);
    });

/!*Echo.channel(`ecixadminbase_database_messages-channel.${userId}`)
.listen('MessageEvent', (data)=>{
    console.log(data);
});
*!/
Echo.private(`App.User.${userId}`)
    .notification((notification) => {
        console.log(notification);
    });
Echo.channel(`App.User.${userId}`)
    .listen(' Illuminate\\Notifications\\Events\\BroadcastNotificationCreated',(notification) => {
        console.log(notification.type);
    });
Echo.channel(`App.User.${userId}`)
    .listen('BroadcastNotificationCreated', (data)=>{
        console.log(data);
    });*/
