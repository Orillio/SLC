$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveWidth: true,
        draggable: false,
        dots: true,
        appendDots: $('.dots'),
        responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: false,
                speed: 500,
                fade: true,
                cssEase: 'ease',
                dots: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                draggable: true,
                speed: 500,
                fade: true,
                cssEase: 'ease',
                dots: true,
              }
            },
          ]
    });
});