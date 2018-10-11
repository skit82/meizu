$(document).ready(function() {

    

    $('[data-toggle]').on('click', function(e){
      var tgt = $(this).data('target');
      if (tgt && $(tgt).length > 0) {
        $(tgt).toggleClass('collapse');

        e.preventDefault();
        return false;
      }
    })

    $("[data-href]").on("click", function() {
      href = $(this).data("href");
      window.location.href = href;
    });
	 
    if ($('[data-src]').length > 0) {
        !function(e) {
            function t(e, t) {
                var n = new Image
                  , r = e.getAttribute("data-src");
                n.onload = function() {
                    e.parent ? e.parent.replaceChild(n, e) : e.src = r,
                    t && t()
                }
                ,
                n.src = r
            }
            for (var n = new Array, r = function(e, t) {
                if (document.querySelectorAll)
                    t = document.querySelectorAll(e);
                else {
                    var n = document
                      , r = n.styleSheets[0] || n.createStyleSheet();
                    r.addRule(e, "f:b");
                    for (var l = n.all, o = 0, c = [], i = l.length; o < i; o++)
                        l[o].currentStyle.f && c.push(l[o]);
                    r.removeRule(0),
                    t = c
                }
                return t
            }("img.lazy"), l = function() {
                for (var r = 0; r < n.length; r++)
                    l = n[r],
                    void 0,
                    (o = l.getBoundingClientRect()).top >= 0 && o.left >= 0 && o.top <= (e.innerHeight || document.documentElement.clientHeight) && t(n[r], function() {
                        n.splice(r, r)
                    });
                var l, o
            }, o = 0; o < r.length; o++)
                n.push(r[o]);
            l(),
            function(t, n) {
                e.addEventListener ? this.addEventListener(t, n, !1) : e.attachEvent ? this.attachEvent("on" + t, n) : this["on" + t] = n
            }("scroll", l)
        }(this);
    }
    
    $('.official__btn').on('click', function() {
        $(this).hide();
        $('.official__more').fadeIn();
    });
    
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

  $('.about-us__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '<img class="left-arrow" src="img/left-arrow.png">',
    nextArrow: '<img class="right-arrow" src="img/right-arrow.png">',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 9999,
    settings: "unslick"
    },
    {
      breakpoint: 767,
      setting:{
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });
});