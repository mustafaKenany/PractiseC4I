$(function() {

    'use strict';

    $('.navbar-nav li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop: $('#'+$(this).data('value')).offset().top
        },1500);
    });

   $('.navbar-brand').click(function () {

       $('html,body').animate({
           scrollTop: $('#'+$(this).data('value')).offset().top
       },1500);
   
   });

   $('.carousel').carousel({
    interval: 100000
  })

  //Statup nicescroll plugin
  $("body").niceScroll({
    cursorcolor:"rgb(70,70,70)",
    cursorwidth:"5px"
  });

  

});