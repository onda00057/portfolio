// JavaScript Document

$('.button1').on('click', function () {
    $('.popup1').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup1').fadeOut();
});

$('.button2').on('click', function () {
    $('.popup2').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup2').fadeOut();
});

$('.button3').on('click', function () {
    $('.popup3').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup3').fadeOut();
});

$('.button4').on('click', function () {
    $('.popup4').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup4').fadeOut();
});

$('.button5').on('click', function () {
    $('.popup5').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup5').fadeOut();
});

$('.button6').on('click', function () {
    $('.popup6').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup6').fadeOut();
});

$('.button7').on('click', function () {
    $('.popup7').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup7').fadeOut();
});

$('.button8').on('click', function () {
    $('.popup8').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup8').fadeOut();
});

$('.button9').on('click', function () {
    $('.popup9').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup9').fadeOut();
});

$('.button10').on('click', function () {
    $('.popup10').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup10').fadeOut();
});

$('.button11').on('click', function () {
    $('.popup11').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup11').fadeOut();
});

$('.button12').on('click', function () {
    $('.popup12').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup12').fadeOut();
});

$('.button13').on('click', function () {
    $('.popup13').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup13').fadeOut();
});

$('.button14').on('click', function () {
    $('.popup14').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup14').fadeOut();
});

$('.button15').on('click', function () {
    $('.popup15').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup15').fadeOut();
});

$('.button16').on('click', function () {
    $('.popup16').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup16').fadeOut();
});

$('.button17').on('click', function () {
    $('.popup17').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup17').fadeOut();
});

$('.button18').on('click', function () {
    $('.popup18').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup18').fadeOut();
});

$('.button19').on('click', function () {
    $('.popup19').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup19').fadeOut();
});

$('.button20').on('click', function () {
    $('.popup20').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup20').fadeOut();
});

$('.button21').on('click', function () {
    $('.popup21').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup21').fadeOut();
});

$('.button22').on('click', function () {
    $('.popup22').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup22').fadeOut();
});

$('.button23').on('click', function () {
    $('.popup23').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup23').fadeOut();
});

$('.button24').on('click', function () {
    $('.popup24').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup24').fadeOut();
});

$('.button25').on('click', function () {
    $('.popup25').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup25').fadeOut();
});

$('.button26').on('click', function () {
    $('.popup26').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup26').fadeOut();
});

$('.button27').on('click', function () {
    $('.popup27').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup27').fadeOut();
});

$('.button28').on('click', function () {
    $('.popup28').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup28').fadeOut();
});

$('.button29').on('click', function () {
    $('.popup29').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup29').fadeOut();
});

$('.button30').on('click', function () {
    $('.popup30').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup30').fadeOut();
});

$('.button31').on('click', function () {
    $('.popup31').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup31').fadeOut();
});

$('.button32').on('click', function () {
    $('.popup32').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup32').fadeOut();
});



$(function () {
    $('.web1page').on('click', function () {
        $('.images1').toggleClass('show2').fadeIn(0);
        $('.images2').toggleClass('notshow').fadeOut(0);
    });
});

$(function () {
    $('.web2page').on('click', function () {
        $('.images2').toggleClass('notshow').fadeIn(0);
        $('.images1').toggleClass('show2').fadeOut(0);
    });
});

$(".gra1page").on('click', function () {
    var src = $('.gracontents').children('img').attr('src', 'images/graphic2-1.jpg');
});

$(".gra2page").on('click', function () {
    var src = $('.gracontents').children('img').attr('src', 'images/graphic2-2.jpg');
});

$(".gra3page").on('click', function () {
    var src = $('.gracontents').children('img').attr('src', 'images/graphic2-3.jpg');
});

$(".gra4page").on('click', function () {
    var src = $('.gracontents').children('img').attr('src', 'images/graphic2-4.jpg');
});


$('.fade-right').on('inview', function () {
    $(this).addClass('fade-in');
});

$('.fade-left').on('inview', function () {
    $(this).addClass('fade-in');
});

$('.fade').on('inview', function () {
    $(this).addClass('fade-in2');
});

/*
$(".tab li").click(function () {
    $(".tab li").removeClass("active");
    $(this).addClass("active");
    let index = $(this).index();

    $(".gracontent").removeClass("activep");
    $(".gracontent").eq(index).addClass("activep");
});
*/

/*

$(function () {
    $('.gra1page').on('click', function () {
        $('.graimages1').toggleClass('show2');
        $('.graimages2').toggleClass('notshow');
        $('.graimages3').toggleClass('notshow');
        $('.graimages4').toggleClass('notshow');
    });
});

$(function () {
    $('.gra2page').on('click', function () {
        $('.graimages2').toggleClass('show2');
        $('.graimages1').toggleClass('notshow');
        $('.graimages3').toggleClass('notshow');
        $('.graimages4').toggleClass('notshow');
    });
});

$(function () {
    $('.gra3page').on('click', function () {
        $('.graimages3').toggleClass('show2');
        $('.graimages1').toggleClass('notshow');
        $('.graimages2').toggleClass('notshow');
        $('.graimages4').toggleClass('notshow');
    });
});

$(function () {
    $('.gra4page').on('click', function () {
        $('.graimages4').toggleClass('show2');
        $('.graimages1').toggleClass('notshow');
        $('.graimages2').toggleClass('notshow');
        $('.graimages3').toggleClass('notshow');
    });
});
*/