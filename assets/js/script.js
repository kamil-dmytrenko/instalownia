// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$('.navbar-brand').on('click', function(e) {
  $('div .content-dark').toggleClass("content-light");
  // $('nav').toggleClass('navbar-transparent');
  e.preventDefault();
});

$(window).scroll(function() {
  // Remove Class "dark" after scrolling over the dark section
  if ($(window).scrollTop() >= $('div.page-header').offset().top + $('div.page-header').height() - $('nav').height()) {
    $('nav').removeClass('navbar-transparent');
  } else {
    $('nav').addClass('navbar-transparent');
  }
});

$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function() {

});
$('div.collapse ul.navbar-nav a').on('click', function () {
  $('html.nav-open').removeClass('nav-open');
});
