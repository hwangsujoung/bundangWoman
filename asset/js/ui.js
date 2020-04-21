

/*allMenu */
function openAllMenu(){
    $('.btn_allMenu a').on('click' , function(e){
        e.preventDefault();
        $(".headAllMenu").css("display","block");
        TweenMax.to($(".headAllMenu .bg_dim"),0.5, {css:{height:"100%"}});
        setTimeout(function(){
            TweenMax.to($(".headAllMenu .allMenu_top > dl"),0.4, {css:{height:"688px"}});
            TweenMax.to($(".headAllMenu .allMenu_top .last dl:first-child"),0.2, {css:{height:"377px"}});
            TweenMax.to($(".headAllMenu .allMenuArea"),0.4, {css:{height:"925px",opacity:1}});
        },200); 
        setTimeout(function(){
            TweenMax.to($(".headAllMenu .allMenu_top .last dl + dl"),0.4, {css:{height:"311px"}});
            TweenMax.to($(".headAllMenu .allMenu_btm"),0.6, {css:{height:"236px"}});
            TweenMax.to($(".headAllMenu .allMenu_btm > div"),0.6, {css:{height:"236px"}});
        },400);        
        
    });
}
/*allMenu close*/
function closeAllMenu(){
    $('.btnLyClose').on('click' , function(e){
        e.preventDefault();        
        $(".headAllMenu").css("display","none");
        $(".headAllMenu .bg_dim").css("height","0");
        $(".headAllMenu .allMenu_top > dl").css("height","0");
        $(".headAllMenu .allMenu_top .last dl:first-child").css("height","0");
        $(".headAllMenu .allMenu_top .last dl + dl").css("height","0");
        $(".headAllMenu .allMenu_btm").css("height","0");    
        $(".headAllMenu .allMenu_btm > div").css("height","0");    
        $(".headAllMenu .allMenuArea").css({height:"0",opacity:0});        
        // $(".headAllMenu").stop().fadeOut();
    });
}

/* lnb drop menu */
function language(){
    $(".header .select_box h3").click(function(){
        $(".select_language").slideDown();
    });
    $(".header .select_box").bind('focusout mouseleave', function () {
        $(".select_language").slideUp();
    });
}

/* path_area */
function pathWrap(){
    $('.path > a').on('click', function () {
        $(this).next().stop().slideToggle();
        $(this).toggleClass("on");
    });
    $('.path ul li a').on('click', function () {
        var tgTxt = $(this).text();
        $(this).parents(".path").find("span").text(tgTxt);
        $(this).parent().parent().hide();
        $(this).parents(".path").find("a").removeClass("on");
    });
    $('.path_share > a').on('click', function () {
        $(this).next().stop().slideToggle();
        $(this).toggleClass("on");
    });
    $('.path_share div a').on('click', function () {
        $(this).parent().hide();
        $(this).parents(".path_share").find("a").removeClass("on");
    });

    $(document).mousedown(function( e ){
        if( $(".path ul").is(":visible") ) {
            $(".path ul").each(function(){
                var l_position = $(this).offset();
                l_position.right = parseInt(l_position.left) + ($(this).width());
                l_position.bottom = parseInt(l_position.top) + parseInt($(this).height());
                $(this).parents(".path").find("a").removeClass("on");

                if( ( l_position.left <= e.pageX && e.pageX <= l_position.right )
                    && ( l_position.top <= e.pageY && e.pageY <= l_position.bottom ) ) {
                } else {
                    $(this).hide();
                }
            });
        }
    });
}

/* path_wrap fixed */
function path_fix(){    
    var scrolled = document.documentElement.scrollTop;
    var barThis = $(".path_wrap");
    // if( scrolled > 100 ) {
    //     barThis.addClass("fixed");
    // }else{
    //     barThis.removeClass("fixed");
    // }
    // if (scrolled > 1) {
    //     $(".header").addClass('fixed');
    // } else {
    //     $(".header").removeClass('fixed');
    // }
    // console.log(scrolled);
    if ( scrolled > 110 ) {
        // $(".header").stop().animate({
        //     marginTop:"-110px"
        // },400);
        // $(".header").addClass('fixed');
        
        $(".path_wrap").addClass('fixed');
        // $(".contents_menu_wrap").stop().animate({
        //     marginTop:"52px"
        // },300);
        // $(".contents_wrap").stop().animate({
        //     marginTop:"142px"
        // },400);
        // $(".path_wrap").stop().animate({
        //     marginTop:"-110px"
        // },400);
        // TweenMax.to($(".header"), 0.5, {marginTop:-110, ease:Power0.ease});
        // TweenMax.to($(".path_wrap"), 0.5, {marginTop:-110, ease:Power0.ease});
        // $(".header_wrap").stop().animate({
        //     "top":"-110px"
        // },50);
    } else {        
        // $(".header").stop().animate({
        //     marginTop:"0px"
        // },400);        
        // $(".contents_menu_wrap").stop().animate({
        //     marginTop:"0"
        // },200);
        // $(".contents_wrap").stop().animate({
        //     marginTop:"0"
        // },400);
        $(".path_wrap").removeClass('fixed');
        // $(".path_wrap").stop().animate({
        //     marginTop:"0"
        // },400);
        // TweenMax.to($(".header"), 0.5, {marginTop:0, ease:Power0.ease});
        // TweenMax.to($(".path_wrap"), 0.5, {marginTop:0, ease:Power0.ease});
    }
    
}


// $(function() {
//     $(window).on('load scroll', function(){
//         var scrolled = document.documentElement.scrollTop;
//         var barThis = $(".path_wrap");
//         // var $top = barThis.offset().top;
        
//         if( $(".path_wrap").is(":visible")){
//             if ( scrolled > 1 ) {
//                 $(".header").addClass('fixed');
//                 $(".header").stop().animate({
//                     marginTop:"-110px"
//                 },400);
//                 $(".path_wrap").stop().animate({
//                     marginTop:"-110px"
//                 },400);
//                 // $(".contents_menu_wrap ").stop().animate({
//                 //     marginTop:"152px"
//                 // },800)
//                 // TweenMax.to($(".header"), 0.5, {marginTop:-110, ease:Power0.ease});
//                 // TweenMax.to($(".path_wrap"), 0.5, {marginTop:-110, ease:Power0.ease});
//                 // $(".header_wrap").stop().animate({
//                 //     "top":"-110px"
//                 // },50);
//             } else {        
//                 $(".header").stop().animate({
//                     marginTop:"0px"
//                 },400);        
//                 $(".header").removeClass('fixed');
//                 $(".path_wrap").stop().animate({
//                     marginTop:"0"
//                 },400);
//                             // $(".contents_menu_wrap ").stop().animate({
//                             //     marginTop:"52px"
//                             // },800);
//                 // TweenMax.to($(".header"), 0.5, {marginTop:0, ease:Power0.ease});
//                 // TweenMax.to($(".path_wrap"), 0.5, {marginTop:0, ease:Power0.ease});
//             }  
//         } 
//     });
// });

    /* var navbar = $(".path_wrap");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    window.onscroll = function() {myFunction()}; */



function lnb_drop_menu(){
    /* $(".header.main").bind("focusin mouseenter mousemove", function(){
        $(".header .bg").fadeIn(300);
        $(".header_wrap.none").hide();
        $(".header_wrap.black").show();
    });

    $(".header.main").bind("focusout mouseleave", function(){
        if( $(".lnb_drop_wrap").css("display") == "none" ){
            if( $(".bg").css("display") == "block") {
                $(".header .bg").fadeOut(200);
                $(".header_wrap.black").hide();
                $(".header_wrap.none").show();
            }
        }
    }); */

    var lnb_time;
    $(".lnb_wrap .lnb_area .lnb_list li a").bind('focusin mouseenter', function(){
        $(".lnb_wrap .lnb_area .lnb_list li").removeClass("on")
        $(this).parent().addClass("on");
        var idx = $(this).parent().index();
        clearTimeout(lnb_time);
        $(".lnb_drop_wrap .lnb_drop_area .lnb_drop_list_wrap .lnb_drop_list_area").hide();
        $(".lnb_drop_wrap .lnb_drop_area .lnb_drop_list_wrap .lnb_drop_list_area").eq(idx).show();
        if ($(".lnb_drop_wrap").css("display") == "none"){
            $(".lnb_drop_wrap").slideDown();
        }
    });
    $(".lnb_drop_wrap").bind('focusin mouseenter', function(){
        clearTimeout(lnb_time);
    });
    $(".lnb_drop_wrap").bind('focusout mouseleave', function(){
        /* if( $(this).parent().hasClass("main") ){
            $(".lnb_drop_wrap").slideUp({complete:function(){
                $(".lnb_drop_wrap .lnb_drop_area .lnb_drop_list_wrap .lnb_drop_list_area").hide();
                $(".lnb_wrap .lnb_area .lnb_list li").removeClass("on")
                $(".header .bg").fadeOut(200);
                $(".header_wrap.black").hide();
                $(".header_wrap.none").show();
            }});
        } else { */
            lnb_time = setTimeout(function(){
                $(".lnb_drop_wrap").slideUp({complete:function(){
                    $(".lnb_drop_wrap .lnb_drop_area .lnb_drop_list_wrap .lnb_drop_list_area").hide();
                    $(".lnb_wrap .lnb_area .lnb_list li").removeClass("on")
                }});
            },200)
        /* } */
    });
};


/* footer toggle */
function footer_toggle(){
	$(".footer_area .group_site_toggle").on('click' , function(e){
		if($(".group_site_wrap").css("display") == "block"){
			$(this).removeClass("on")
			$(".group_site_wrap").slideUp();
		}else{
			$(this).addClass("on")
			$(".group_site_wrap").slideDown();
		}
	});

	$(".footer_area .agencies_toggle").on('click' , function(e){
		if($(".agencies_wrap").css("display") == "block"){
			$(this).removeClass("on")
			$(".agencies_wrap").slideUp();
		}else{
			$(this).addClass("on")
			$(".agencies_wrap").slideDown();
		}
	});
};


/* faq */
function faq_fn(){
	$(".faq_list > li > a").click(function(){
		if($(this).next(".faq_con").css("display") == "block"){
			$(this).parent("li").removeClass("on");
			$(this).next(".faq_con").slideUp();
		}else{
		    $(this).parent("li").addClass("on");

		    if ($(".faq_list").hasClass("pop")) {
		        $(".faq_con").slideUp();
		    }

			$(this).next(".faq_con").slideDown();
		}
	});
};


/* medical schedule */
function medical_schedule() {
    $(".schedule_btn_tab .schedule_tab a").click(function () {
        var idx = $(this).index();

        if ($(this).hasClass("btn_arr")) {
            if ($(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").css("display") == "block") {
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").removeClass("on");
                $(this).parents(".schedule_tab").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").slideUp({
                    complete: function () {
                        $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                    }
                });
            } else {
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").removeClass("on");
                $(this).addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").eq(0).addClass("on");
                $(this).parents(".schedule_tab").addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").eq(0).addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").slideDown();
            }
        } else {
            if ($(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").css("display") == "block" && $(this).hasClass("on")) {
                $(this).removeClass("on");
                $(this).parents(".schedule_tab").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").slideUp({
                    complete: function () {
                        $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                    }
                });
            } else if ($(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").css("display") == "block" && !$(this).hasClass("on")) {
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").removeClass("on");
                $(this).addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").eq(idx).addClass("on");
            } else {
                $(this).parents(".medical_schedule_con_area").find(".schedule_btn_tab .schedule_tab a").removeClass("on");
                $(this).addClass("on");
                $(this).parents(".schedule_tab").addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").removeClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area .schedule_tab_con").eq(idx).addClass("on");
                $(this).parents(".medical_schedule_con_area").find(".schedule_tab_con_area").slideDown();
            }
        }
    });
};

/* popup */
function popup_fn(){
	$(".popup_wrap").each(function(){
		var popX_pos = $(this).find(".popup_area").outerWidth()/2;
		var popY_pos = $(this).find(".popup_area").outerHeight()/2;
		$(this).find(".popup_area").css({"margin-top":-popY_pos,"margin-left":-popX_pos});
	});
	//$(".popup_wrap").hide();
};


/* help box */
function help_box(){
	$(".popup_line_box .popup_line_box_title .btn_help").click(function(){
		$(this).next(".btn_help_con").show();
	});
	$(".popup_line_box .popup_line_box_title .btn_help_con .btn_close").click(function(){
		$(this).parents(".btn_help_con").hide();
	});
};

/* step
function step_fn(){
	$(".step_wrap .step_btn_area a").click(function(){
		var idx = $(this).index();

		$(".step_wrap .step_btn_area a").removeClass("on");
		$(".step_con_area .step_con").removeClass("on");

		$(this).addClass("on");
		$(".step_con_area .step_con").eq(idx).addClass("on");

		popup_fn();
	});
};
*/

/* motion scroll */
function motion_scr() {
	var winH = $(window).height();
	var scrT = $(window).scrollTop();
	var view_pos = winH + scrT

	$(".animation_element").each(function () {
		var elementH = $(this).outerHeight();
		var elementT = $(this).offset().top;
		var elementP = (elementT + elementH - 350);

		if ((elementP <= view_pos)) {
			$(this).addClass("animation_set");
		}
	});
};


/* bg motion */
function bg_motion(){
	var scrT = $(window).scrollTop();
    var scroll = document.documentElement.scrollTop;
	var view_pos = scroll / 100;

    // TweenMax.to($(".background_motion.bg_motion01"), 1.5, {opacity:1, marginTop:-view_pos*50, ease:Power0.easeNone});
    // TweenMax.to($(".background_motion.bg_motion02"), 1.5, {opacity:1, marginTop:-view_pos*50, ease:Power0.easeNone});
    // TweenMax.to($(".background_motion.bg_motion03"), 1.5, {opacity:1, marginTop:-view_pos*50, ease:Power0.easeNone});
    // TweenMax.to($(".background_motion.bg_motion04"), 1.5, {opacity:1, marginTop:-view_pos*50, ease:Power0.easeNone});
    // TweenMax.to($(".background_motion.bg_motion05"), 1.5, {opacity:1, marginTop:-view_pos*50, ease:Power0.easeNone});
    // TweenMax.to($(".background_motion.bg_motion06"), 1.5, {opacity:1, marginTop:-view_pos*50, ease:Power0.easeNone});
    // TweenMax.to($(".background_motion.bg_motion07"), 1.5, {opacity:1, marginTop:-view_pos*50, ease:Power0.easeNone});
    // TweenMax.to($(".background_motion.bg_motion08"), 1.5, {opacity:1, marginTop:-view_pos*50, ease:Power0.easeNone});
    // TweenMax.to($(".background_motion.bg_motion05"), 3, {rotation:"360", ease:Linear.easeNone, repeat:-1});

    $(".background_motion.bg_motion01").stop().animate({
        "margin-top":-view_pos*50
    },200,'easeOutQuint');
    $(".background_motion.bg_motion02").stop().animate({
        "margin-top":-view_pos*50
    },200,'easeOutQuint');
    $(".background_motion.bg_motion03").stop().animate({
        "margin-top":-view_pos*50
    },200,'easeOutQuint');
    $(".background_motion.bg_motion04").stop().animate({
        "margin-top":-view_pos*50
    },200,'easeOutQuint');
    $(".background_motion.bg_motion05").stop().animate({
        "margin-top":-view_pos*50
    },200,'easeOutQuint');
    $(".background_motion.bg_motion06").stop().animate({
        "margin-top":-view_pos*50
    },200,'easeOutQuint');
    $(".background_motion.bg_motion07").stop().animate({
        "margin-top":-view_pos*50
    },200,'easeOutQuint');
    $(".background_motion.bg_motion08").stop().animate({
        "margin-top":-view_pos*50
    },200,'easeOutQuint');

    $(".fullpage .background_motion").remove();
	/*$(".background_motion.bg_motion01").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*50});
	$(".background_motion.bg_motion02").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*50});
	$(".background_motion.bg_motion03").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*50});
	$(".background_motion.bg_motion04").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*50});
    $(".background_motion.bg_motion05").stop().css({"margin-top":-view_pos*50});
    $(".background_motion.bg_motion06").stop().css({"margin-top":-view_pos*50});
    $(".background_motion.bg_motion07").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*50});
    $(".background_motion.bg_motion08").stop().css({"transform":"rotate("+view_pos*10+"deg)","margin-top":-view_pos*50});*/
};

function svisualWp(){
    TweenMax.from(".svisual_wp ul li.on1 img",2.5,{y:-300, rotation:60});
    TweenMax.from(".svisual_wp ul li.on2 img",2.5,{y:-300, rotation:60});
    TweenMax.from(".svisual_wp ul li.on3 img",3,{y:-400, rotation:60});
    TweenMax.from(".svisual_wp ul li.on4 img",2.5,{y:-300, rotation:-60});
    TweenMax.from(".svisual_wp ul li.on5 img",3,{y:-300, rotation:-60});
    /*TweenMax.from(".svisual_wp ul li.on6 img",2.5,{y:-300, rotation:-60});
    TweenMax.fromTo(".svisual_wp ul li.on1 img",1.5,{y:-300, rotation:60}, {y:0, rotation:0});
    TweenMax.fromTo(".svisual_wp ul li.on2 img",2,{y:-300, rotation:60}, {y:0, rotation:0});
    TweenMax.fromTo(".svisual_wp ul li.on3 img",2,{y:-500, rotation:60}, {y:0, rotation:0});
    TweenMax.fromTo(".svisual_wp ul li.on4 img",1.5,{y:-400, rotation:-60}, {y:0, rotation:0});
    TweenMax.fromTo(".svisual_wp ul li.on5 img",1.5,{y:-300, rotation:-60}, {y:0, rotation:0});
    TweenMax.fromTo(".svisual_wp ul li.on6 img",2,{y:-400, rotation:-60}, {y:0, rotation:0});*/
}


/* step_posi */
function step_posi(){

	var step_w;

	$(".popup_con .dot span").each(function () {
		step_w = $(this).width();
		step_w = step_w / 2 - 6;

		$(this).css("margin-left", "-" + step_w + "px");

	});
};

/* tab_width */
function tab_width() {


    $(".popup_tab_list li").each(function () {

        var tab_idx = $(this).index()+1;


        $(this).addClass("num0" + tab_idx);

    });

    $(".top_tab_list li").each(function () {

        var tab_idx = $(this).index() + 1;


        $(this).addClass("num0" + tab_idx);

    });
};

function btnTop() {

    var winH = $(window).height();
    var scrT = $(window).scrollTop();
    if ($(window).width() > 640) {
        // if ($(document).height() - (winH + scrT) < 91) {
        //     $('.btnTop').css({
        //         bottom: '90px', "position": "absolute"
        //     });
        // } else {
            $('.btnTop').css({
                bottom: '57px', "position": "fixed"
            });
        // }
    }
    else {
        if ($(document).height() - (winH + scrT) < 159) {
            $('.btnTop').css({
                bottom: '14px', "position": "absolute"
            });
        } else {
            $('.btnTop').css({
                bottom: '30px', "position": "fixed"
            });
        }
    }

    $('.btnTop').on("click", function(){
        $('html, body').animate({scrollTop: '0'}, 300);
    });   
}

/* medical_list */
function medical_schedule_list() {
    $('.medical_schedule_list').each(function () {

        var tab_idx = $(this).index();

        if (tab_idx == 0) {
            $(this).addClass("first");
        }
    });
}


/* scroll motion */
function scr_motion(){
   // var winH =$ (window).scrollTop();
   // var bodyH =$("body").outerHeight();
   // var winInh = $(window).innerHeight();
   // $(".sum_board_wrap .cms > p, .sum_board_wrap .cms > div").addClass("scroll-motion");
   if( $(".scroll-motion").size() != 0 ) {
        $(".scroll-motion").each(function(q){
            if( $(window).scrollTop() > $(".scroll-motion").eq(q).offset().top - 900) {
                // if( winInh + 300 > bodyH ){
                //     TweenMax.to($(".delay150"),1, {opacity:1, top:0, ease:Power3.ease});
                //     TweenMax.to($(".delay300"),1,{opacity:1, top:0, ease:Power3.ease, delay:0.5});
                //     TweenMax.to($(".delay450"),1,{opacity:1, top:0, ease:Power3.ease, delay:1});
                //     TweenMax.to($(".delay600"),1,{opacity:1, top:0, ease:Power3.ease, delay:1.5});
                // }
                // console.log(bodyH + "   ,  " + winInh + "   ,  " + (0.5*q));
                if ( q < 4 ){
                    TweenMax.to($(".scroll-motion").eq(q), 1, {opacity:1, top:0, delay:(q/2)*0.5});
                } else{
                    TweenMax.to($(".scroll-motion").eq(q), 1, {opacity:1, top:0, delay:0.5});
                }
            }
        });
    }

};


function onScroll(){
    var $window = $(window);
    // $window.on('scroll', onScroll);


    // function onScroll() {
    var scrolled = document.documentElement.scrollTop,
        win_height_padded = $window.height() *1.1,
        scrolled2 = document.documentElement.scrollHeight,
        win_heignt = $(window).innerHeight();

    if( $(".onScroll").length != 0 ) {
        $(".onScroll:not(.animated)").each(function(q) {
            var $this     = $(this),
                offsetTop = $this.offset().top,
                // $offset= $this.eq(q).offset(),
                $first = $this.eq(0).offset().top;
            // console.log( $(window).scrollTop() + ", " + win_heignt + "," + $first);

            if( $first < win_heignt ) {
                $this.addClass('animated');
                TweenMax.to($(".onScroll.inLeft.animated").eq(0),1, {opacity:1,left:0, delay:0.5});
                TweenMax.to($(".onScroll.inRight.animated").eq(0),1, {opacity:1,right:0, delay:0.5});
            }
            // if ( $(window).scrollTop() + win_height_padded < offsetTop ) {
            if (  $(window).scrollTop() + $(".onScroll").eq(q).offset().top - 100 > $(".onScroll").eq(q).offset().top ) {
                // window.setTimeout(function(){
                    /*if( q < 2 ){
                        TweenMax.to($(".onScroll.inRight.animated").eq(q-1),1, {opacity:1,right:0, delay:(q-1)*0.5});
                    } else {
                    }*/
                        $this.addClass('animated');
                        if( q < 2 ){
                            TweenMax.to($(".onScroll.inLeft.animated").eq(q),1, {opacity:1,left:0, delay:q*0.5});
                            TweenMax.to($(".onScroll.inRight.animated").eq(q),1, {opacity:1,right:0, delay:(q-1)*0.5});
                        } else {
                            TweenMax.to($(".onScroll.inLeft.animated").eq(q),1, {opacity:1,left:0, delay:q*(0.2)});
                            TweenMax.to($(".onScroll.inRight.animated").eq(q),1, {opacity:1,right:0, delay:q*(0.2)});
                        }
                    // if( q < 2  ) {
                    //     TweenMax.to($(".onScroll.inLeft").eq(q),1, {opacity:1,left:0, delay:q*0.5});
                    //     TweenMax.to($(".onScroll.inRight").eq(q-1),1, {opacity:1,right:0, delay:q*0.5});
                    // } else {
                    // }
                // },10);
            }
        })
        $(".onScroll.animated").each(function(q) {
            var $this     = $(this),
                offsetTop = $this.offset().top,
                $first = $this.eq(0).offset().top;
                // $offset= $this.eq(q).offset(),
                // $first = $this.eq(0).offset().top;

            if (  $(window).scrollTop() + win_height_padded - 170 < offsetTop ) {
                // alert("얍");
                // window.setTimeout(function(){

                    $this.removeClass('animated');
                    if( q < 2 ){
                        TweenMax.to($(".onScroll.inLeft").eq(q),0.5, {opacity:0,left:-100, delay:q*0.5});
                        TweenMax.to($(".onScroll.inRight").eq(q),0.5, {opacity:0,right:-100, delay:(q-1)*0.5});
                    } else {
                        TweenMax.to($(".onScroll.inLeft").eq(q),0.5, {opacity:0,left:-100, delay:q*(0.2)});
                        TweenMax.to($(".onScroll.inRight").eq(q),0.5, {opacity:0,right:-100, delay:q*(0.2)});
                    }
                    // TweenMax.to($(".onScroll.inLeft").eq(q),1, {opacity:0,left:-100, delay:q*0.5});
                    // TweenMax.to($(".onScroll.inRight").eq(q),1, {opacity:0,right:-100, delay:q*0.5});
                    // if( q < 2  ) {
                    //     TweenMax.to($(".onScroll.inLeft").eq(q),1, {opacity:0,left:-100});
                    //     TweenMax.to($(".onScroll.inRight").eq(q-1),1, {opacity:1,right:-100});
                    // } else {
                    // }
                // },10);
            }

        });
    }
    // }
}

/* doctor_list */
/*function doctor_list_area() {
    $('.doctor_list').each(function () {

        var tab_idx = $(this).index();

        if (tab_idx == 0 || tab_idx == 1) {
            $(this).addClass("first");
        }

    });
}*/



/* placeholder */
function placeholder(){
    $("input, textarea").placeholder();
}

/* ieCheck */
function ieCheck() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : ((navigator.appName == 'Netscape' && myNav.indexOf('trident') != -1) ? '11' : false);
}
function ie8font(){
    var checkIE = ieCheck();
    if (checkIE && (ieCheck() < 9)) {
        $("a*,span*,b*,strong*,div*,p*,em*,label*,input*, td*, th*").each(function(){
            if ( $(this).css("font-weight") == "300") {
                $(this).css("font-weight","normal");
            } else if ( $(this).css("font-weight") == "400") {
                $(this).css("font-weight","normal");
            } else if ( $(this).css("font-weight") == "500") {
                $(this).css("font-weight","bold");
            } else if ( $(this).css("font-weight") == "700") {
                $(this).css("font-weight","bolder");
            }
        });
        $("h2*,h3*,h4*,h5*,h6*").each(function(){
            if ( $(this).css("font-weight") == "400") {
                $(this).css("font-weight","normal");
            } else if ( $(this).css("font-weight") == "500") {
                $(this).css("font-weight","bold");
            } else if ( $(this).css("font-weight") == "700") {
                $(this).css("font-weight","bolder");
            }
        });
    }
}


/* lab hover*/
 function lnbHover() {
    $(".lnb_drop_list > li").hover(
       function() {
            /* $(this).find("a").stop().animate({
                "margin-left":"16px"
            },300,'easeOutSine'); */
            var wid = $(this).find("span").width();
            TweenMax.to($(this).find(".borderb"), 0.5, {css:{width:wid,left:0,opacity:1}});
            /* $(this).find(".hover").stop().animate({
                "left":wid
            },300,'easeOutSine')
            $(this).find("a").addClass("hover"); */
        }, function(){
            TweenMax.to($(this).find(".borderb"), 0.5, {css:{width:0,opacity:0}});
            /* $(this).find("a").removeClass("hover");
            $(this).find("a").stop().animate({
                "margin-left":"0"
            },300,'easeOutSine');
            $(this).find(".hover").stop().animate({
                "left":"-16px"
            },300,'easeOutSine'); */
        }
    );
}


function cntSlider(){
    $(".cnt_slider").each(function(index) {        
        var slickInduvidual = $(this);
        $(this).slick({
            autoplay: true,
            speed: 1000,
            autoplay:false,
            arrows: true,
            prevArrow: '<p class="cnt_slider_prev"></p>',
            nextArrow: '<p class="cnt_slider_next"></p>',
            pauseOnHover:false,
            dots: true,
            appendDots:slickInduvidual.siblings(".cnt_paging"),
            customPaging: function(slider, i) {
                return '<span class="dot"></span>';
            },
            fade: true
        });
    })
}


$(function(){
    /* path fixed */
    path_fix(); 

    /* All Menu Open */
    openAllMenu();

    /* All Menu Close */
    closeAllMenu();

    /* language */
    language();

    /* lnb drop menu */
    lnb_drop_menu();

	/* path_area */
    pathWrap();

	/* faq */
    faq_fn();
    
	/* medical schedule */
	medical_schedule();

	/* popup */
	popup_fn();

	/* help box */
	help_box();
	/* step
	step_fn();*/

	/* motion scroll */
	motion_scr();

	/* bg motion */
	bg_motion();

	/* step_posi */
	step_posi();

    /*svisualWp*/
    svisualWp();

    /* tab_width */
    tab_width()
    
    /* top_btn */
    btnTop();
    
    /* cnt_slider */
    cntSlider();

    /* medical_list */
	medical_schedule_list();

    /* doctor_list */
	// doctor_list_area();

    /* placeholder */
    placeholder();

    /* ie8 font  */
    ie8font();       
});
$(window).on({
    "load":function(){
        /* scroll motion */
        scr_motion();

         /* lab hover*/
        lnbHover();

        /* All Menu Open */
        openAllMenu();

        /* All Menu Close */
        closeAllMenu();

        /* language */
        language();

        /* lnb drop menu */
        lnb_drop_menu();

        /* footer toggle */
        footer_toggle();
    },
    "resize":function(){
        /* motion scroll */
        motion_scr();

        /* bg motion */
        bg_motion();
    },
    "scroll":function(){
        /* path fixed */
        path_fix(); 

        /* motion scroll */
        motion_scr();

        /* bg motion */
        bg_motion();

        /* scroll motion */
        scr_motion();

        if ($(this).scrollTop() > 100) {
            $('.btnTop').stop().animate({ 'opacity': "1" }, { "duration": "50" });
        } else {
            $('.btnTop').stop().animate({ 'opacity': "0" }, { "duration": "50" });
        }
    }
});

