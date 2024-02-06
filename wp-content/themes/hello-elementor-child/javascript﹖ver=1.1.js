/*

$(window).scroll(function(){

    $(".fade-on-scroll").css("opacity", 1 - $(window).scrollTop() );

  });



var header = document.getElementById('#fade-on-scroll');



function fadeOutOnScroll(element) {

  if (!element) {

    return;

  }

  

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;

  var elementHeight = element.offsetHeight;

  var scrollTop = document.documentElement.scrollTop;

  

  var opacity = 1;

  

  if (scrollTop > distanceToTop) {

    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;

  }

  

  if (opacity >= 0) {

    element.style.opacity = opacity;

  }

}



function scrollHandler() {

  fadeOutOnScroll(header);



window.addEventListener('scroll', scrollHandler);

*/



jQuery(($) => {

// Sticky header on scroll



  const mywindow = $(window)

  let mypos = mywindow.scrollTop()

  mywindow.scroll(() => {

    if (mypos > 80) {

      if (mywindow.scrollTop() > mypos) {

        $('#stickyheader').addClass('headerup')
        $('#stickyheader-2').addClass('headerup')

      } else {

        $('#stickyheader').removeClass('headerup')
        $('#stickyheader-2').removeClass('headerup')

      }

    }

    if (mypos > 80) {

      if (mywindow.scrollTop() > mypos) {

        $('#stickyheader-mobile').addClass('headerup-mobile')
        $('#stickyheader-mobile-2').addClass('headerup-mobile')

      } else {

        $('#stickyheader-mobile').removeClass('headerup-mobile')
        $('#stickyheader-mobile-2').removeClass('headerup-mobile')

      }

    }

    mypos = mywindow.scrollTop()

  })

})





  //Close mobile menu on anchor click



  jQuery(function($) {

 $('.menu-item-object-custom').on('click touchstart', function () {

     $('.menu-toggle').click();

     //$('.menu-overlay').css("visibility", "hidden");

     $('.menu-toggle').prop("checked", false);

});

});



/*

document.addEventListener('DOMContentLoaded', function() {

jQuery(function($){

var mywindow = $(window);

var mypos = mywindow.scrollTop();

mywindow.scroll(function() {

if (mypos > 90) {

if(mywindow.scrollTop() > mypos) {

$('#stickyheader').addClass('headerup');

} else {

$('#stickyheader').removeClass('headerup');

}

}

mypos = mywindow.scrollTop();

}); }); });

*/

(function($){

  $('.elementor-video').attr('playsinline',''); 

})(jQuery);

(function($){

  $('.jet-video-player').attr('playsinline',''); 

})(jQuery);



  jQuery(function($) {
/* The first line waits until the page has finished to load and is ready to manipulate */
$(document).ready(function(){
    /* remove the 'title' attribute of all <img /> tags */
    $("img").removeAttr("title");
});
});

