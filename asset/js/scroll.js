function onScroll() {
  var $animation_elements = $('.onScroll');
  var $window = $(window);

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function(q) {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('active');
      /*if( $element.hasClass("inLeft")){
        TweenMax.to($(this),1, {opacity:1,left:0, delay:(q/2)*0.2});
      }
      if( $element.hasClass("inRight")){
        TweenMax.to($(this),1, {opacity:1,right:0, delay:(q/2)*0.2});
      }
      if( $element.hasClass("inUp")){
        TweenMax.to($(this),1, {opacity:1,top:0, delay:(q/2)*0.2});
      }*/
    } else {
      $element.removeClass('active');
      /*if( $element.hasClass("inLeft")){
        TweenMax.to($(this),1, {opacity:0,left:-100, delay:(q/2)*0.2});
      }
      if( $element.hasClass("inRight")){
        TweenMax.to($(this),1, {opacity:0,right:-100, delay:(q/2)*0.2});
      }
      if( $element.hasClass("inUp")){
        TweenMax.to($(this),1, {opacity:0,top:-100, delay:(q/2)*0.2});
      }*/
    }
  });
}
$(window).on('scroll resize load', onScroll);
$(window).trigger('scroll');
