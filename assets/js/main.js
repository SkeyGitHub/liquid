$(function () {

  "use strict"
  $(window).on('load', function (event) {
      $('.preloader').delay(700).fadeOut(700);
  });
  $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 2) {
          $(".navbar-area").removeClass("sticky");
          $(".navbar-area").addClass("pt-36");
      }
      else {
          $(".navbar-area").addClass("sticky");
          $(".navbar-area").removeClass("pt-36");
      }
  });

  //Navbar
  $('.nav-link').on('click', function(){
    $('#navbarContent').removeClass('show');
    $('#navbarContent').addClass('hide');
    $('.navbar-toggler').addClass('collapsed');
});

  //Venobox video
  $(document).ready(function () {
      $('.venobox').venobox();
  });

  // wow js
  new WOW().init();

  //Owl Carousel Product
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items:1
      },
      600: {
        items:1
      },
      1000: {
        items:1
      },
    }
  });

  $('.owl-next').click(function() {
    owl.trigger('next.owl.carousel', [300]),
    owl.trigger('stop.owl.autoplay');
  });

  $('.owl-next').mouseout(function() {
    owl.trigger('play.owl.autoplay');
  });

  $('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]),
    owl.trigger('stop.owl.autoplay');
  });

  $('.owl-prev').mouseout(function() {
    owl.trigger('play.owl.autoplay');
  });

  $('.item').mouseup(function() {
    owl.trigger('stop.owl.autoplay');
  });

  $('.item').mouseout(function() {
    owl.trigger('play.owl.autoplay');
  });

  //ScrollIt
	$.scrollIt();

  //Input fields
  const inputs = document.querySelectorAll('input');

  inputs.forEach(el => {
    el.addEventListener('blur', e => {
      if(e.target.value) {
        e.target.classList.add('dirty');
      } else {
        e.target.classList.remove('dirty');
      }
    });
  });


});


let videoID = "K4TOrB7at0Y";
document.getElementById('player').src = `https://www.youtube.com/embed/${videoID}?controls=0&start=7&autoplay=1&loop=1&mute=1&cc_load_policy=0&disablekb=0&end=180&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0&playlist=${videoID}`

