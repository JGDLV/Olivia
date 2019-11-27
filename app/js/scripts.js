// let headerHeight = $('.main-header').innerHeight()

function footerFix() {
  // headerHeight = $('.main-header').innerHeight()
  let footerHeight = $('.main-footer').innerHeight()
  $('body').css('padding-bottom', footerHeight + 'px')
}

$(window).on('load resize', footerFix)

$(document).ready(function () {

  $('input[name="phone"]').inputmask("+7 (999) 999-99-99")

  $(window).scroll(function () {
    $(this).scrollTop() > 600 ? $('#top').show(200) : $('#top').hide(200)
  })

  $('#top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500)
  })

  $('.menu-toggle .icon-toggle').click(function () {
    $(this).toggleClass('active')
    $('.main-menu').slideToggle()
    return false
  })

  $('.screenshots-items').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true
      }
    })
  })

  $(document).on('click', '.main-menu__link, .goto', function (event) {
    event.preventDefault()
    let id = $(this).attr('href')
    let top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 500)
  })

  $('.screenshots-items').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } }
    ]
  })

  $('.reviews-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  })

  if ($(window).width() <= 880) {
    $('.main-menu__link').on('click', function() {
      $('.main-menu').slideUp()
      $('.menu-toggle .icon-toggle').removeClass('active')
    })
  }

  // $('.blog-inner').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   dots: true,
  //   arrows: false
  // })

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > headerHeight) {
  //     $('.main-header').addClass('stickytop')
  //     $('body').css('padding-top', headerHeight + 'px')
  //   } else {
  //     $('.main-header').removeClass('stickytop')
  //     $('body').css('padding-top', '0')
  //   }
  // })

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  )
  wow.init();

})
