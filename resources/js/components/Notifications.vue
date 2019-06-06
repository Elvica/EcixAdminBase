<template><li class="dropdown messages-menu">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <i class="fa fa-envelope-o"></i>

        <span class="label label-success" v-text="unreadLength"></span>

    </a>
    <ul class="dropdown-menu">
        <li class="header">Tienes {{unreadLength}} sin leer <div class="pull-right">
            <a href="/messages/create" >Enviar mensaje</a>
        </div></li>

        <li>
            <!-- inner menu: contains the actual data -->
            <ul class="menu">
                <li v-for="notification in notifications"><!-- start message -->
                    <a href="#">
                        <div class="pull-left">
                            <img v-bind:src="notification.user_from.src_picture"  class="img-circle" alt="User Image">
                        </div>
                        <h4>
                            {{notification.user_from.name}}
                            <small ><i class="fa fa-clock-o"></i>  {{notification.created_at}}</small>
                        </h4>
                        <p>{{notification.subject}}</p>
                    </a>
                </li>
                <!-- end message -->
            </ul>
        </li>
        <li class="footer"><a href="/notifications">Ver todos mensajes</a></li>
    </ul>
</li>
</template>

<script>
    export default {
        data(){
            return {
                notifications:[],
                unreadLength:0
            }
        },
        mounted() {

            axios.get('/notifications').then(res=>{

                this.notifications = res.data.messages;
                this.unreadLength = res.data.unreadLength;
            })
            Echo.private(`App.User.${userId}`)
                .notification((notification) => {
                    this.notifications.unshift(notification.data.message);
                    this.unreadLength ++;
                    Swal.fire({
                        position: 'top-end',
                        title: 'Has recibido un mensaje de ' + notification.data.message.user_from.name,
                        showConfirmButton: false,
                        timer: 1500,
                        width:'400px',
                    })
                });
        },
    }
</script>
