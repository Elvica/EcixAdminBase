$(document).ready(function() {

    // LOGIN

    $('#loginUser, #loginPass').keyup(function() {

        var user = $('#loginUser').val();
        var pass = $('#loginPass').val();

        if ((user === '') && (pass === '')) {
            $('#submit').removeClass('submitActive');
            // $('.loginUserBox').removeClass('loginUser_Done');
            // $('.loginPassBox').removeClass('loginPass_Done');
            // $('.loginUserBox, .loginPassBox').css('border-bottom', '2px solid #efefef');
        } else if ((user === '')) {
            $('#submit').removeClass('submitActive');
            // $('.loginPassBox').addClass('loginPass_Done');
            // $('.loginUserBox').removeClass('loginUser_Done');

            // $('.loginUserBox').css('border-bottom', '2px solid #efefef');
            // $('.loginPassBox').css('border-bottom', '2px solid #1A93D1');
        } else if ((pass === '')) {
            $('#submit').removeClass('submitActive');
            // $('.loginUserBox').addClass('loginUser_Done');
            // $('.loginPassBox').removeClass('loginPass_Done');

            // $('.loginUserBox').css('border-bottom', '2px solid #efefef');
            // $('.loginUserBox').css('border-bottom', '2px solid #1A93D1');
        } else if ((user === '') || (pass === '')) {
            $('#submit').removeClass('submitActive');
        } else {
            $('#submit').addClass('submitActive');
            // $('.loginUserBox').addClass('loginUser_Done');
            // $('.loginPassBox').addClass('loginPass_Done');

            // $('.loginUserBox, .loginPassBox').css('border-bottom', '2px solid #1A93D1');

        }

    });


    // LANZADERA

    var wh = $(window).height();
    var cirH = wh - 170


    $('#referenceBox').css('height', cirH);

    var imgH = $('#referenceBox .reference').height();

    $('#lanzMob').css('height', cirH);


    $(".outLook").hover(function() {
        $('.c1').attr({'r': 115});
    }, function() {
        $('.c1').attr({'r':  110.3});
    });


    $(".ePrivacy").hover(function() {
        $('.c2').attr('r', 130);
    }, function() {
        $('.c2').attr('r',  123.2);
    });

    $(".eTime").hover(function() {
        $('.c3').attr('r', 100);
    }, function() {
        $('.c3').attr('r', 94.3);
    });

    $(".gira").hover(function() {
        $('.c4').attr('r', 82);
    }, function() {
        $('.c4').attr('r', 76.9);
    });

    $(".cc").hover(function() {
        $('.c5').attr('r', 90);
    }, function() {
        $('.c5').attr('r', 84.4);
    });

    $(".obsNor").hover(function() {
        $('.c6').attr('r', 85);
    }, function() {
        $('.c6').attr('r', 79.9);
    });

    $(".complyLaw").hover(function() {
        $('.c7').attr('r', 115);
    }, function() {
        $('.c7').attr('r',  109.4);
    });

    $(".eRocket").hover(function() {
        $('.c8').attr('r', 70);
    }, function() {
        $('.c8').attr('r', 62.8);
    });

    $(".sharePoint").hover(function() {
        $('.c9').attr('r', 70);
    }, function() {
        $('.c9').attr('r', 62.8);
    });

    $(".web").hover(function() {
        $('.c10').attr('r', 60);
    }, function() {
        $('.c10').attr('r', 55.3);
    });



    setTimeout(function() {
        $('.cn1, .cn3, .eTime').fadeIn('1000')
    }, 200);

    setTimeout(function() {
        $('.cn2, .cn6, .cc').fadeIn('1000')
    }, 300);

    setTimeout(function() {
        $('.cn4, .eRocket, .cn9').fadeIn('1000')
    }, 400);

    setTimeout(function() {
        $('.cn5, .cn7, .complyLaw, .outLook').fadeIn('1000')
    }, 500);

    setTimeout(function() {
        $('.gira, .cn13, .cn14, .ePrivacy').fadeIn('1000')
    }, 600);

    setTimeout(function() {
        $('.cn8, .obsNor, .cn12, .sharePoint').fadeIn('slow')
    }, 700);

    setTimeout(function() {
        $('.cn11, .cn10, .web').fadeIn('1000')
    }, 800);



    setTimeout(function() {
        $('.st2').fadeIn('slow')
        $('.cn1, .cn2, .cn3, .cn4, cn5, .cn6, .cn7, .cn8, .cn9, .cn10, .cn11, .cn12, .cn13, .cn14').addClass('cirNone');
    }, 1200);


});













