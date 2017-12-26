$(function() {

    'use strict';

    $('.navbar-nav li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop: $('#'+$(this).data('value')).offset().top
        },1500);
    });
    var winH = $(window).height();
    var UpperNav = $('.navbar').innerHeight();
    
   $('.carousel-item').height(winH);   
   

   $(window).resize(function () {
    $('.carousel-item').height(winH);   
   });

   $('.navbar-brand').click(function () {

       $('html,body').animate({
           scrollTop: $('#'+$(this).data('value')).offset().top
       },1500);
   
   });
});