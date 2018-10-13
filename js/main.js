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

  $('[data-toggle]').on('click', function(e){
    var tgt = $(this).data('target');
    if (tgt && $(tgt).length > 0) {
      $(tgt).toggleClass('collapse');

      e.preventDefault();
      return false;
    }
  })
  showContent('flashcard.html')
  function showContent(link) {
        var cont = document.getElementById('content');
        var loading = document.getElementById('loading');
        cont.innerHTML = loading.innerHTML;  
        var http = createRequestObject();
        if( http ) 
        { http.open('get', link);
            http.onreadystatechange = function () 
            {   if(http.readyState == 4) 
                {   cont.innerHTML = http.responseText;  }    }
            http.send(null);  }
        else 
        {  document.location = link;   }   }
    // ajax объект
    function createRequestObject() 
    { try { return new XMLHttpRequest() }
      catch(e) 
      { try { return new ActiveXObject('Msxml2.XMLHTTP') }
          catch(e) 
          { try { return new ActiveXObject('Microsoft.XMLHTTP') }
            catch(e) { return null; }  
          } 
      }
    }


  $('.filter-link').on('click', function() {
    $(".checked").toggleClass("checked");
    $(this).toggleClass("checked");
    if($(this).hasClass("checked")) {
      location = 'https://huawei-mobile-service.ru/telefony_huawei&filter=' + $(this).attr("value");
    } else {
      location = 'https://huawei-mobile-service.ru/telefony_huawei';
    }
    return false;
  });
});