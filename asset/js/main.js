function mainVisual(){
    $(".main_visual_wrap .main_visual").on('init', function(slick){
        loadSlideEffect($(this).find('.slick-active'));        
    }).slick({
        autoplay: true,
        speed: 1000,
        autoplaySpeed:4000,
        arrows: false,
        pauseOnHover:false,
        dots: true,
        customPaging: function(slider, i) {
            return '<span class="dot"></span>';
        },
        fade: true
    });
    $('.main_visual_wrap .main_visual').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var $slide = $(slick.$slides[nextSlide]);
        loadSlideEffect($slide);
    });
    $('.main_visual_wrap .main_visual').on('afterChange', function(event, slick, currentSlide, nextSlide){
        pauseVid();
    });
    pauseVid();
    
    function loadSlideEffect(ele){
        TweenLite.fromTo($(".tit_01 span"), 1.5, {y:100,opacity:0},{y:0,opacity:1,ease: Power4.easeOut}).delay(0.4);
        TweenLite.fromTo($('.tit_02 span'), 1.5, {y:100,opacity:0},{y:0,opacity:1,ease: Power4.easeOut}).delay(0.6);
        TweenLite.fromTo($('.tit_03 span'), 1.5, {y:100,opacity:0},{y:0,opacity:1,ease: Power4.easeOut}).delay(0.8);
    }
    
    function pauseVid() {
        // var slideIndex = $('.main_visual .slick-slide').attr('data-slick-index');
        if( $(".visual_vid").hasClass('slick-active') ){
            $(".main_visual").slick('slickPause');
            setTimeout(function() {
                $(".main_visual").slick('slickPlay');
            }, 18000);
        }
    }
}

function newsBtn(){
   $(".news_btn").click(function (e) {
       var $parent = $(this).parents(".new_news");
       e.preventDefault();
       if ($parent.is(".active")) {
           $(".news_cont").stop().animate({
               "width": 0
           }, 500);
           $parent.removeClass("active");
       } else {
           $(".news_cont").stop().animate({
               "width": "274px"
           }, 500);
           $parent.addClass("active");
       };
   });
}

function mainBanner(){
   $(".visual_banner_wrap").bind("focusin mouseenter", function(){
       $(".vb_cont").stop().animate({
           "height": "95px"
       }, 500);
       $(".new_news_wrap").stop().animate({
           "bottom": "165px"
       }, 500);
   });
   $(".visual_banner_wrap").bind("focusout mouseleave", function(){
       $(".vb_cont").stop().animate({
           "height": "0"
       }, 500);
       $(".new_news_wrap").stop().animate({
           "bottom": "70px"
       }, 500);
   });
}

function serviceHover(){
   $(".section01_area li").each(function(){
       var thisImg = $(this).find("img");
       $(this).find("a").hover( function(){
            thisImg.attr("src", thisImg.attr("src").replace(".png", "_h.png"));
        },function(){
            thisImg.attr("src", thisImg.attr("src").replace("_h",""));
        });
   });
}

function facility(){
   $(".section02_wrap").on('init', function(slick){
       loadSlideEffect2($(this).find('.slick-active'))
       loadLeft($(this).find('.slick-active'))
   }).slick({
       autoplay: false,
       speed: 100,
       arrows: true,
       dots: false,
       fade:true,
       prevArrow: $('.s2_prev'),
       nextArrow: $('.s2_next'),
       draggable:false
   });
   $('.section02_wrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){
       var $slide = $(slick.$slides[nextSlide]);
       loadSlideEffect2($slide);
       loadLeft($slide);
   });
   function loadSlideEffect2(ele){
       TweenLite.fromTo($(".s2_01"), 1.5, {y:100,opacity:0},{y:0,opacity:1,ease: Power4.easeOut}).delay(0.4);
       TweenLite.fromTo($('.s2_02'), 1.5, {y:100,opacity:0},{y:0,opacity:1,ease: Power4.easeOut}).delay(0.6);
       TweenLite.fromTo($('.s2_03'), 1.5, {y:100,opacity:0},{y:0,opacity:1,ease: Power4.easeOut}).delay(0.8);
   }
   function loadLeft(ele){
       TweenLite.fromTo($(".s2_img .img"),1.4, {x:-250,opacity:0},{x:0,opacity:1,ease:Power3.easeInOut});
   }
}

function staffSlide(){
   
   $(".section03_wrap").on('init', function(slick){
        // loadLeft($(this).find('.slick-active'))
    }).slick({
      autoplay: false,
      speed: 800,
      infinite: true,
      arrows: true,
      dots: true,
      appendDots:$(".s3_dots"),
      customPaging: function(slider, i) {
       return '<span class="dot"></span>';
      },
      slidesToShow:4,
      slidesToScroll:4,
      prevArrow: $('.s3_prev'),
      nextArrow: $('.s3_next'),
      draggable:true
   });

/*    var fullLength = $(".slick-dots li").length
       length = $(".slick-dots li").length/2,
       $length = Math.round(length),
       $slice = $(".slick-dots li").slice($length, fullLength).detach();
       console.log($slice); 
   
       $slice.prependTo(".slick-dots");

   $('.section03_wrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){
       var $slide = $(slick.$slides[nextSlide]);
       loadLeft($slide);
   });
//    $('.section03_wrap').on('afterChange', function(event, slick, currentSlide, nextSlide){
//         var $slide = $(slick.$slides[nextSlide]);
//         loadLeft($slide);
//     });
   function loadLeft(ele){
        var fullLength = $(".slick-dots li").length
        length = $(".slick-dots li").length/2,
        $length = Math.round(length),
        $slice = $(".slick-dots li").slice($length, fullLength).detach();
        console.log($slice); 

        $slice.prependTo(".slick-dots");
    //    TweenMax.to($(".slick-dots"), 1.5, {x:-25});
    }


    $(".s3_next ").on("click", function(){        
       $slice.prependTo(".slick-dots");
    }); */

   $(".s3_img").hover( function(){
       TweenMax.to($(this).find(".center_img"), 0.1, {css:{width:"100%",height:"100%",left:0, top:0}});
       TweenMax.to($(this).find(".s3_mask"), 0.4, {css:{width:"250%",height:"250%",left:"-75%", top:"-50%"}});
       TweenMax.to($(this).find(".subject"),0.1,{opacity:0});
       TweenMax.to($(this).find(".doctor_name"),0.1,{opacity:0});
       TweenMax.to($(this).find(".s3_hover"),0.6, {opacity:1,y:-102});
   }, function(){
       TweenMax.to($(this).find(".center_img"), 0.4, {css:{width:"162px",height:"auto",left:37, top:39}});
       TweenMax.to($(this).find(".s3_mask"), 0.2, {css:{width:"100%",height:"100%",left:0, top:0}});
       TweenMax.to($(this).find(".subject"),0.1,{opacity:1});
       TweenMax.to($(this).find(".doctor_name"),0.1,{opacity:1});
       TweenMax.to($(this).find(".s3_hover"),0.6, {opacity:0,y:0});
   });
}

function articleTiles() {
    var options = {
        autoResize: true,
        container: $('.s4_tilles'),
        offset:24, // Optional, the distance between grid items
        itemWidth: 247 // Optional, the width of a grid item
    };
    var handler = $('.tiles li');
    handler.wookmark(options);

    $(".s4_tilles ul li a").hover(
        function(){
            TweenMax.to($(this).find(".over"), 0.3, {opacity:1});
            TweenMax.to($(this).find(".over .bg"), 0.3, {opacity:.8});
            TweenMax.to($(this).find(".over .sns_ico"), 0.3, {opacity:1});
            // if( $(this).hasClass("ico_p") ){
            //     TweenMax.to($(this).find(".over .sns_ico"), 0.3, {opacity:0});
            // }
        }, function(){
            TweenMax.to($(this).find(".over"), 0.3, {opacity:0});
            TweenMax.to($(this).find(".over .bg"), 0.3, {opacity:0});
            TweenMax.to($(this).find(".over .sns_ico"), 0.3, {opacity:0});
        }
    );
}

function submain(){
    var w_h = $(window).height();
    var w_h_in = $(window).height() -110;
    $(".wrap > .submain").css("height",w_h);
    $(".fullpage").css("height",w_h_in);    
}

function submainHover(){
    $(".submain_ul li").each(function(){
        var thisImg = $(this).find("img");
        $(this).hover( function(){
            // var currentImg = thisImg.attr('src');
            // thisImg.attr('src',thisImg.attr('name'));
            // thisImg.attr('name',currentImg);
            if( $(this).children().length > 1 ) {
            } else {
                thisImg.attr("src", thisImg.attr("src").replace(".png", "_h.png"));
            }
            TweenMax.to($(this).find(".bg"), 0.5, { backgroundColor:"#ff5d4e"});
        },function(){
            // var currentImg=thisImg.attr('src');
            // thisImg.attr('src',thisImg.attr('name'));
            // thisImg.attr('name',currentImg)            
            if( $(this).children().length > 1 ) {
            } else {
                thisImg.attr("src", thisImg.attr("src").replace("_h",""));
            }
            TweenMax.to($(this).find(".bg"), 0.5, {backgroundColor:"#fbf1e7"});
            if( $(this).hasClass("default") ){
                TweenMax.to($(this).find(".bg"), 0.5, {backgroundColor:"#00315b"});
            }
       });
   });
}




$(function(){
  mainVisual(); //메인베쥬얼
  newsBtn(); // 새소식
  mainBanner(); //메인배너호버
  serviceHover(); // 편의서비스 호버
  facility(); // 시설소개
  staffSlide(); //의료진
  submain(); //서브메인
  submainHover(); //서브메인 호버
//   videoLoad();
});

$(window).load(function(){
   articleTiles(); //메디컬,라이프,산후조리원
//    videoLoad();   
});

function videoLoad() {
    var $video  = $('.bg_video'),
        $window = $(window); 
    
    $(window).resize(function(){
        
        var height = 500;
        $video.css('height', height);
        
        var videoWidth = $video.width(),
            windowWidth = $window.width(),
        marginLeftAdjust =   (windowWidth - videoWidth) / 2;
        
        $video.css({
            'height': 500, 
            'marginLeft' : marginLeftAdjust
        });
    });
}

$( window ).resize( function() {
  submain(); //서브메인
});

