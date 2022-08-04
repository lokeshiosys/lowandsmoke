$('.ppl-img-card').slick({
    dots: true,
    infinite: false,
    arrows:true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  
  /* REVIEW STARTS */
  $(window).on('load resize orientationchange', function() {
    var $carousel = $(".visitor-review");
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 767) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    }
    else{
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: false,
          arrows: false,
          dots: true,
        });
      }
    }
  });
 

  $('.visitor-review').slick({
    dots: true,
    infinite: false,
    arrows:true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /* REVIEW ENDS */

  /* FANCY BOX STARTS HERE */

  $('[data-fancybox]').fancybox({
    // Options will go here
    buttons : [
      'close'
    ],
    wheel : false,
    transitionEffect: "slide",
     // thumbs          : false,
    // hash            : false,
    loop            : true,
    // keyboard        : true,
    toolbar         : false,
    // animationEffect : false,
    // arrows          : true,
    clickContent    : false
  });
  $(window).on('load resize orientationchange', function() {
    var $carousel = $(".main-flex");
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 767) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    }
    else{
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: false,
          arrows: false,
          dots: true,
        });
      }
    }
  });
 

  $('.main-flex').slick({
    dots: true,
    infinite: false,
    arrows:true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

    /* FANCY BOX ENDS HERE */
