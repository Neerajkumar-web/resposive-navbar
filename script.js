$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
    if ($(".search-input").hasClass("search-active")) {
        $(".search-input").focus();
    }
  });
  
  $(document).click(function(event) {
    if (!$(event.target).closest('.nav').length) {
        if ($('.search-input').hasClass('search-active')) {
            $(".nav").removeClass("search");
            $(".nav").addClass("no-search");
            $(".search-input").removeClass("search-active");
        }
    }
});

  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });


  //scrolls behaviour
  $(document).ready(function() {
    let mybutton = $("#myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    $(window).scroll(function() {
        scrollFunction();
    });

    function scrollFunction() {
        if ($(document).scrollTop() > 20) {
            mybutton.css("display", "block");
        } else {
            mybutton.css("display", "none");
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800); // You can adjust the animation speed if needed
    });
});