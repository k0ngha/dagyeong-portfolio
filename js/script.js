$('.btn-gnb, .close').on('click', function(){
  $('nav').toggleClass('on');

  if ($('nav').hasClass("on")) {
    $('nav li').css({
      transform: "translateY(0)", 
      visibility: "visible"
    });
    $('.gnb-bg').css({animation: "open 1s linear forwards"});
  }else {
    $('nav li').css({
      transform: "translateY(25%)", 
      visibility: "hidden"
    });
    $('.gnb-bg').css({animation: "none"});
  }
});

$('nav li').on('click', function(){
  $('nav').removeClass('on');
  $('nav li').css({
    transform: "translateY(25%)", 
    visibility: "hidden"
  });
  $('.gnb-bg').css({animation: "none"});
});




setTimeout(function(){
  $('.row1 h2, .row1 h3, .row2 h2, .row2 h1, .row3 h1, .row3 p').css({
    transform: "translateY(0)",
    opacity: "1"
  });
},0)
setTimeout(function(){
  $('.circle').css({
    transform: "translate(-50%, -30%) rotate(-186deg) scale(1)",
    width: "400px" 
  });
  // $('.circle').css("transform", "translate(-50%, -30%) rotate(-186deg) scale(1)");
  $('.row1 h3').css("transform", " skewX(-10deg)");
},1300)



$('.carousel-item').eq(0).addClass('active');

let total = $('.carousel-item').length;
let current = 0;

$('#moveRight').on('click', function(){
  let next=current;
  current= current+1;
  setSlide(next, current);
});
$('#moveLeft').on('click', function(){
  let prev=current;
  current = current- 1;
  setSlide(prev, current);
});

function setSlide(prev, next){
  let slide= current;
  if(next>total-1){
    slide=0;
    current=0;
  }
  if(next<0){
    slide=total - 1;
    current=total - 1;
  }
    $('.carousel-item').eq(prev).removeClass('active');
    $('.carousel-item').eq(slide).addClass('active');
    setTimeout(function(){

    },800);
  

  
  console.log('current '+current);
  console.log('prev '+prev);
}




let skillsOffset = $('#skills').offset().top - 300;
let aboutOffset = $('#about').offset().top - 500;
let projectOffset = $('#project').offset().top - 500;
let excuted = false;
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(window).scroll(function(){
  let text = $('.text-wrap');
  let rolling = $(window).scrollTop();
  let z = 1 - rolling / 600 ;

  text.css({
    opacity: "1"-rolling / 400,
    transform: `translate(-50%,  -50%) scale( ${z} )`
  }); 
  if(z<=0) {
    z*0;
  }

  let move = $(document).scrollTop();

  if(!excuted){
    if(move >= skillsOffset){
  
      $({ val : 0 }).animate({ val : 90 }, {
        duration: 1500,
        step: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".ai .counter, .html .counter, .css .counter").text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".ai .counter, .html .counter, .css .counter").text(num);
        }
      });

      $({ val : 0 }).animate({ val : 80 }, {
        duration: 1500,
        step: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".ps .counter, .id .counter").text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".ps .counter, .id .counter").text(num);
        }
      });

      $({ val : 0 }).animate({ val : 75 }, {
        duration: 1500,
        step: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".xd .counter").text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".xd .counter").text(num);
        }
      });

      $({ val : 0 }).animate({ val : 70 }, {
        duration: 1500,
        step: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".js .counter").text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".js .counter").text(num);
        }
      });

      excuted = true;
    }

  };

  if(move >= aboutOffset){
    $('.about-inner').css({
      transform: "translateY(-8%)",
      transition: "0.6s"
    });
  }else{
    $('.about-inner').css({
      transform: "translateY(25%)",
      transition: "0.4s"
    });
  };

  if(move >= projectOffset){
    $('#project h5').css({opacity : "1"});
  }else{
    $('#project h5').css({opacity : "0"});
  };
});



$('.footer-btn-top').click(function(){
  $('html, body').stop().animate({scrollTop:0}, 1000);
});


