/**
 * Created by blue on 2020-04-21.
 */

var w = w = $(window).width();
function quickMenuPos(){
    if( w > 1242 ){
        var rightPos = w - 1242;
        $(".skyscraper_wrap").css({right: rightPos/2+80 + "px" });
    }else{
        $(".skyscraper_wrap").css({right: 0 + "px" });
    }
}

$(window).on("resize", function(){
    w = $(window).width();
    quickMenuPos();
})

function aa(){

}

$(document).ready(function(){
    $('.main_visual_slide').slick({
        autoplay: true, //자동슬라이드
        slidesToShow: 1, //큰이미지 몇개 보여줄것인지
        slidesToScroll: 1,
        fade: false,
        dots: true,
        speed : 1000,
        autoplaySpeed : 3000,
        customPaging: function(slide, i) {
            return  (i + 1) + ' / ' + slide.slideCount
        }
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide, nextSlide);
    });


    $('.media_img_rolling_slide').slick({
        autoplay: true, //자동슬라이드
        slidesToShow: 1, //큰이미지 몇개 보여줄것인지
        slidesToScroll: 1,
        fade: false,
        dots: true,
        speed : 1000,
        autoplaySpeed : 3000
    });

    $('.media_img_rolling_slide2').slick({
        autoplay: true, //자동슬라이드
        slidesToShow: 1, //큰이미지 몇개 보여줄것인지
        slidesToScroll: 1,
        fade: false,
        dots: true,
        speed : 1000,
        autoplaySpeed : 3000
    });

    $($('.media_img_title_wrap.media_000').find('.media_img_title_con')[0]).css('top', '0%');
    $($('.media_img_title_wrap.media_001').find('.media_img_title_con')[0]).css('top', '0%');

    $('.media_img_rolling_slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if( currentSlide != nextSlide ){
            TweenMax.to( $($('.media_img_title_wrap.media_000').find('.media_img_title_con')[currentSlide]), 0.5, {top:'100%', ease : Cubic.easeOut, onComplete : function(){
                TweenMax.to( $($('.media_img_title_wrap.media_000').find('.media_img_title_con')[nextSlide]), 0.5, {top:'0%', ease : Cubic.easeOut});
            }});
        }
    });

    $('.media_img_rolling_slide2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        TweenMax.to( $($('.media_img_title_wrap.media_001').find('.media_img_title_con')[currentSlide]), 0.5, {top:'100%', ease : Cubic.easeOut, onComplete : function(){
            TweenMax.to( $($('.media_img_title_wrap.media_001').find('.media_img_title_con')[nextSlide]), 0.5, {top:'0%', ease : Cubic.easeOut});
        }});
    });

});

$(function(){
    $('.pagination_btn.stop').on('click', function() {
        $('.main_visual_slide')
            .slick('slickPause')
    });

    $('.pagination_btn.play').on('click', function() {
        $('.main_visual_slide')
            .slick('slickPlay')
    });
})

function setViewport() {
    if( $(window).width() < 640 ) {
        var ww = ( document.documentElement.clientWidth < window.screen.width ) ? $(window).width() : window.screen.width;
        var mw = 640;
        var ratio = ww / mw;
        $('meta[name="viewport"]').attr( 'content', 'width=' + mw + ', initial-scale=' + ratio + ', user-scalable=no' );
    } else {
        $('meta[name="viewport"]').attr( 'content', 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' );
    }
}

setViewport();