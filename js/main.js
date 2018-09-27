$(document).ready(function() {
	
  	$('.service__list').slick({
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '<img class="prev-left" src="img/prev-left.png">',
    nextArrow: '<img class="prev-right" src="img/prev-right.png">',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          adaptiveHeight: true,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.banner__list').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    adaptiveHeight: true,
    prevArrow: '<img class="left" src="img/banner-left.png">',
    nextArrow: '<img class="right" src="img/banner-right.png">',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }); 
});