(function($) {
  "use strict"; // Start of use strict
  let lastClick = 0
  const scrollTime = 750

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    const now = Date.now()

    if (now - lastClick < scrollTime) {
      lastClick = now
      return false
    }
    lastClick = now
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, scrollTime, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  var navDelay
  function pageView (page) {
    try {
      gtag('event', 'page_view', {
        'event_label': page
      })
    } catch (err) {
      // whatevs
    }
  }
  $(window).on('activate.bs.scrollspy', function (evt, info) {
    clearTimeout(navDelay)
    navDelay = setTimeout(function () {
      pageView(info.relatedTarget)
    }, 300)
  })

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Init GA
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { dataLayer.push(arguments) }
  gtag('js', new Date())

  gtag('config', 'UA-2430046-8')

})(jQuery); // End of use strict
