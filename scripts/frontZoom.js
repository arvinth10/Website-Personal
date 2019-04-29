var blurRange = 400;

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //https://codepen.io/michaeldoyle/pen/Bhsif
    var height = $(".bgimg-1").outerHeight(),
        offset = height / 2,
        calc = 1 - (scroll - offset + blurRange) / blurRange;

        console.log(scroll);
    if (calc > '1' || scroll == 0 )
        calc = 1; 
    else if (calc < '0')
        calc = 0;

    //http://webdesignerwall.com/tutorials/zoom-hero-images-scroll
      $(".frontCanyon ").css({
          transform: 'translate3d(-50%, -'+(scroll/500)+'%, 0) scale('+(500 + scroll/5)/500+')',
          opacity: (calc * 1.5)
          
      });

      $(".bgimg-1").css({
        transform: 'translate3d(-50%, -'+(scroll/500)+'%, 0) scale('+(500 + scroll/50)/500+')',
        opacity: (calc)
    });

    height = $(".frontClear").outerHeight(),
    offset = height / 2,
    calc = 1 - (scroll - offset + blurRange) / blurRange;
    if (calc > '1') calc = 1; 
    else if (calc < '0') calc = 0;

      $(".frontClear ").css({

        opacity: (calc/0.5),
        'padding-top': $(this).height()*1.3
        
    });


  });

  