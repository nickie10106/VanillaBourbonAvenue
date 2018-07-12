$(function() {

  "use strict";

    // navigation bar code 

    var section1 = $('#home').offset().top + 100;

    $(document).scroll(function(){

      if($(this).scrollTop() > section1)
      {
        $('.navbar-default').css({
          'background-color':'rgba(255,255,255,0.6)',
          'height':'80px'
        }).addClass('shadow');

        $('.no-dot').css({
          'margin-top':'30px'
        });

        $('.home2 .logo').css({
          'margin-top':'20px'
        });
      } 
      else
      {
        $('.navbar-default').css({
          'background-color':'transparent',
        }).removeClass('shadow');

        $('.no-dot').css({
          'margin-top':'44px'
        });

        $('.home2 .logo').css({
          'margin-top':'34px'
        });
      }

    });

    // mixit up plugin for portfolio section
   
    $('#Container').mixItUp();

    // swing effect of menu on click

    $(".scroll").on('click',function(event){
       event.preventDefault();
       //calculate destination place
       var dest=0;
       if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
       }else{
            dest=$(this.hash).offset().top - 200;
       }
       //go to destination
       $('html,body').animate({scrollTop:dest}, 1000,'swing');
    });

    // drop down navigation menu effect

    $('ul.navbar-right li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

});