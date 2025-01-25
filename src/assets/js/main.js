// for responsive header Start ========

$(function() {
    $('.hamburger').click(function() {
        showHideMobile();
    });

    $(".dimmer").click(function() {
        showHideMobile();
    });

    $('li .icon-arrow').click(function() {
        $(this).parent().toggleClass('showSubmenu');
    });
});

function showHideMobile() {
    $(".hamburger").toggleClass('active');
    $(".hamburger").parent('.menu').toggleClass('active');
    $('.dimmer').toggleClass('active');
    $('body').toggleClass('no-scrolling');
}

// for responsive header End ===========

// for sticky header start ========

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
        $(".header").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
    }
});

// for sticky header end ========

// // top banner slider start ======
// var topbanner = new Swiper('.topbanner-slider', {
//     nextButton: '.topbanner-slider .swiper-button-next',
//     prevButton: '.topbanner-slider .swiper-button-prev',
//     autoHeight: true,
//     loop: false,
//     autoplay: 3000,
//     speed: 800,
// });
// top banner slider End ======

// For Active link in menu Start ===========

var locationpath = window.location.pathname.match(/[^\/]+$/);
if (locationpath == null) {
    $(".menu > ul > li:first-child > a").addClass('active');
} else {
    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
    $(".menu ul li a").each(function() {

        if ($(this).attr('href') === pathname) {
            $(this).addClass('active');
            $(this).parents('.dropdown ').addClass('active');
            $(this).parents('.dropdown ').addClass('active');
        }

    });
}

// For Active link in menu End ===========