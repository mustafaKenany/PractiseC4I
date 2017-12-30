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

  //Statup mixitup plugin
  var mixer = mixitup('#gallery');

  var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 5000
    }
});

});