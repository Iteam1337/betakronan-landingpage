// Top section animation
$(window).scroll(function() {
  $('.top-section').addClass('moved')
  if($('.top-section').offset().top === 0) {
    $('.top-section').removeClass('moved')
  }
});

//Navigation animations
$('.navigation .icon').on('click', function() {
  $('.icon').toggleClass('open')
  $('.links').toggleClass('show')
  $('.close-text').toggleClass('show')
})

$('.links-grid a').on('click', function() {
  $('.icon').removeClass('open')
  $('.links').removeClass('show')
  $('.close-text').removeClass('show')
})

// Init GA
window.dataLayer = window.dataLayer || []
window.gtag = function () { dataLayer.push(arguments) }
gtag('js', new Date())

gtag('config', 'UA-2430046-8')
