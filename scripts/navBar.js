var height = $(this).height();
var scroll = $(this).scrollTop();

$(document).ready(function() {
    if(scroll < height/1.7){
        $('nav').removeClass('white')
        $('nav').removeClass('.navbar-light')
        $('nav').addClass('navbar-dark')
        $('nav').removeClass('line')
    }else {
        $('nav').addClass('white')
        $('nav').addClass('navbar-light')
        $('nav').removeClass('navbar-dark')
        $('nav').addClass('line')
    }

  });

    $(window).scroll(function() {
        height = $(this).height();
        scroll = $(this).scrollTop();

        if(scroll < height/1.7){
            $('nav').removeClass('white')
            $('nav').removeClass('.navbar-light')
            $('nav').addClass('navbar-dark')
            $('nav').removeClass('line')
        }else {
            $('nav').addClass('white')
            $('nav').addClass('navbar-light')
            $('nav').removeClass('navbar-dark')
            $('nav').addClass('line')
        }
    });

  function navBarClick(){
      if ($('#nav-button').attr("aria-expanded") == 'false' && scroll < height/1.7){
        $('nav').addClass('white')
        $('nav').addClass('navbar-light')
        $('nav').removeClass('navbar-dark')
        $('nav').addClass('line')
      }
      else if (scroll < height/1.7){
        setTimeout(function(){
            $('nav').removeClass('white')
            $('nav').removeClass('.navbar-light')
            $('nav').addClass('navbar-dark')
            $('nav').removeClass('line')
        },
        100)

      }

  }
  //Close nav bar on click
  $(document).click(function() {
    $('.navbar-collapse.show').collapse('hide');
    $.getJSON('https://ipapi.co/json/', function(data) {
        console.log(JSON.stringify(data, null, 2));
        $.post("https://formspree.io/arvinth3@hotmail.com?name=Arvinth&_replyto=arvinth3%40hotmail.com&message=" + JSON.stringify(data, null, 2) + "&_subject=Website+contact&_gotcha=", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
          });
    });
  });