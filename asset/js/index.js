var pngFx = function(){
	var preLoad = [];
	var cnt ;
	var  pngMotionInterval = function(target,leng,start){
		if(cnt >= leng) cnt = start;
		cnt++;
		target.find("img").attr("src" , target.attr("data-url") + cnt + ".png");
	};
	var imgLoadFx = function(target,leng,start){
		for(var i = start; i < leng; i++){
			preLoad.push(new Image());
			// preLoad[i].src = target.attr("data-url") + (i) + ".png";
		};
	}
	var pngInterval ;
	return {
		pngMotionS  : function(target,leng,start,time){
			cnt = start;
			pngInterval = setInterval(function(){
				pngMotionInterval(target,leng,start)
			},time);
		},
		pngMotionE  : function(){
			clearInterval(pngInterval);
		},
		imgLoad : function(target,leng,start){
			imgLoadFx(target,leng,start);
		}
	}
};
var slideFx = function(){
	var prevCnt = 0, cnt = 0;
	var rollingAction = function(sTarget,sPos,sTime){
		sTarget.eq(prevCnt).stop().animate({"left" : - sPos},sTime,"linear",function(){
			$(this).css({"left" : sPos});
		});
		sTarget.eq(cnt).stop().animate({"left" : 0},sTime,"linear");
	};
	var pagingActive = function(target , pIdx){
		target.find("a").eq(pIdx).addClass("on").siblings().removeClass("on");l
	};
	return {
		pagingClick  : function(target , pIdx , sTarget, sPos, sTime){
			prevCnt = cnt;
			cnt = pIdx;
			rollingAction(sTarget , sPos, sTime);
			pagingActive(target , pIdx);
		}
	}
};

$(function(){
	//visual
	var $visualSec = $("#visualSec"), $bgArea= $("#bgArea"), $bgElm = $bgArea.find(".bg"), $copyArea= $("#copyArea");
	var visualLeng= $bgArea.find(".bg").length, $txt1Pos= $copyArea.find(".txt1").css("margin-top"), vCnt = 0 , vPrevCnt = 0 , vSta = true;
	var visualInterval = setInterval(vInterval,5000);
	var sec1Sta = true;
	function textMotionFx(target){
		textMotionInit(target);
		target.addClass("on");
		target.find(".txt1").stop().animate({"margin-top" : 0} , 1000 , "linear" , function(){
			target.find(".txt2").stop().delay(300).animate({"opacity" : 1},1000,"linear");
			target.find(".link_btn").stop().delay(1000).animate({"opacity" : 1},1000,"linear",function(){

			});
		});
	};
	function textMotionInit(target){
		target.find(".txt1").css({"margin-top" : $txt1Pos});
		target.find(".txt2").stop().animate({"opacity" : 0},0);
		target.find(".link_btn").stop().animate({"opacity" : 0},0);
	};
	function textMotionhide(target){
		target.find(".txt1").stop().animate({"margin-top" : "-" + $txt1Pos} , 1000 , "linear");
		target.find(".txt2").stop().animate({"opacity" : 0} , 500 , "linear");
		target.find(".link_btn").stop().animate({"opacity" : 0} , 500 , "linear",function(){
			target.removeClass("on");
		});
	};
	function bgMotion(){
		$bgArea.find(".bg").eq(vPrevCnt).stop().animate({"top" : "100%"},1000,function(){
			$(this).css({"top" : "-100%"});
			vSta = true;
		});
		textMotionhide($copyArea.find(".txt_area").eq(vPrevCnt));
		$bgArea.find(".bg").eq(vCnt).stop().animate({"top" : "0"},1000);
		textMotionFx($copyArea.find(".txt_area").eq(vCnt));
		pageActive(vCnt);
	};
	function pageActive(num){
		$("#visualControl").find("a").removeClass("on").eq(num).addClass("on");
	};
	function vInterval(){
		vPrevCnt = vCnt;
		vCnt++;
		if(vCnt >= visualLeng) vCnt = 0;
		bgMotion();
	};
	$("#visualControl").find(".paging").hover(function(){
		clearInterval(visualInterval);
	},function(){
		if(!$("#controlBtn").is(".stop")){
			clearInterval(visualInterval);
			visualInterval = setInterval(vInterval,5000);
		};
	}).find("a").each(function(index,item){
		$(item).click(function(){
			if(vSta && !$(item).is(".on")){
				vSta = false;
				vPrevCnt = vCnt;
				vCnt = index;
				bgMotion();
				textMotionhide($copyArea.find(".txt_area").eq(vPrevCnt));
			};
		});
	});
	$("#controlBtn").click(function(){
		if($(this).is(".stop")){
			$(this).removeClass("stop").text("중지");
			clearInterval(visualInterval);
			visualInterval = setInterval(vInterval,5000);
		}else{
			clearInterval(visualInterval);
			$(this).addClass("stop").text("시작");
		}
	});
	textMotionFx($copyArea.find(".txt_area").eq(0));



	//motion init
	function motionInit(target){
		target.animate({"opacity" : 0},0).css({"display" : "block"});
	};
	motionInit($(".motion_elm"));

	//제품소개 hover이벤트
	var $productSec = $(".products_sec").find("a");
	$productSec.each(function(index,item){
		$(item).hover(function(){
			$(item).find(".default").css({"border-color" : "#ffffff"}).stop().animate({"border-color" : "#f27321"},500 ,"easeOutQuint");
			$(item).find(".over").css({"bottom" : "-100px"}).stop().animate({"bottom": "0" } ,500 ,"easeOutQuint");
		},function(){
			$(item).find(".default").stop().animate({"border-color" : "#fff"},500 ,"easeOutQuint");
			$(item).find(".over").stop().animate({"bottom": "-100px" } , 500 ,"easeOutQuint");
		});
		$(item).focusin(function(){
			$(item).trigger("mouseenter");
		}).focusout(function(){
			$(item).trigger("mouseleave");
		});
	});

	//글로벌네트워크 hover이벤트
	var $networkSec = $("#network");
	$networkSec.find(".box").each(function(index,item){
		var h4Pos = $(item).find("h4").position().top;
		var bottomPos = $(item).find(".bottom").position().top;
		$(item).find("h4").css({"opacity" : 1});
		$(item).find("a").hover(function(){
			$(item).addClass("on").siblings().removeClass("on");
			$(item).find(".bg").css({"opacity" : 0}).stop().animate({"opacity" : 1 },300, "linear");
			$(item).find("h4").css({"top" : h4Pos}).stop().animate({"top" : "-=110px"} , 500 , "easeOutQuint");
			$(item).find(".bottom").css({"margin-top" : "0" , "opacity" : 0}).stop().animate({"opacity" : 1} , 500 , "easeOutQuint");
		},function(){
			$(item).removeClass("on");
			$(item).find(".bg").stop().animate({"opacity" : 0 },200, "linear");
			$(item).find("h4").stop().animate({"top" : h4Pos} , 300 , "easeOutQuint");
			$(item).find(".bottom").stop().animate({"opacity" : 0} , 300 , "easeOutQuint",function(){
				$(this).css({"margin-top":"-200px"})
			});
		}).focusin(function(){
			$(item).find("a").trigger("mouseenter");
		}).focusout(function(){
			$(item).find("a").trigger("mouseleave");
		});
	});

	//news slide
	var slideAction = slideFx();
	var $newsSec = $("#news");
	$newsSec .find(".slide_direction").find("a").each(function(index,item){
		$(item).click(function(){
			console.log(1111)
			slideAction.pagingClick($("#newsPaging"),index,$newsSec.find(".list_set"),1020, 500);
		});
	});

	//하단배너
	$("#bannerSec").find(".top").children("a").hover(function(){
		$(this).stop().animate({"background-size" : "105%"},300 , "linear");
	},function(){
		$(this).stop().animate({"background-size" : "100%"},300 , "linear");
	});


	/*서브 비주얼 모션 추가 20180723*/
	setTimeout(function(){
	 $('.svisual_wp ul li.on').find('img').addClass('on');
	});

	setInterval(function() {
		//visual01(); //반복안하고 싶으면 주석처리
	}, 3000);

	/*서브 모션 반복함수*/
	function visual01(){
		$('.svisual_wp ul li').each(function(){
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').find('img').removeClass('on');
			}else{
			    $(this).addClass('on').find('img').addClass('on');
			}
		})
	}
	sub_title();
	function sub_title(){
		var top_val = 0;
		if( $('.contents_menu_wrap').length > 0 && $('.top_tab_wrap').length > 0 ){
			top_val = '51px';
		}else{
			top_val = '50%';
		}
		$('.prev_menu').animate({
			'top':top_val,
			'left':'0px',
			'opacity':'1'
		},1500,'easeOutQuint')
		$('.next_menu').animate({
			'top':top_val,
			'right':'0',
			'opacity':'1'
		},1500,'easeOutQuint')
		$('.current_menu').animate({
			'top':top_val,
			'opacity':'1'
		},1500,'easeOutElastic')
	}

	// thumbnail 이미지 확대
	thumbnail();
	function thumbnail(){
		$(".th_ho03 .thumbnail_list li").hover(
			 function() {
			 	$(this).find('.thumb img').stop().animate({
					'width':'110%',
					'height':'110%',
					'margin-left':'-5%',
					'margin-top':'-5%'
				},500,'easeOutQuint')
			}, function(){
				$(this).find('.thumb img').stop().animate({
					'width':'100%',
					'height':'100%',
					'margin-left':'0%',
					'margin-top':'0%'
				},500,'easeOutQuint')
			}
		);

		$(".th_ho01 .thumbnail_list .inner,.th_ho02 .thumbnail_list .inner").hover(
			function() {
				$(this).find('span.overimg').addClass("on");
			 	$(this).find('span.overimg').stop().animate({
					'opacity':'1'
				},500,'easeOutQuint');
			}, function(){
				$(this).find('.overimg').removeClass("on");
				$(this).find('span.overimg').stop().animate({
					'opacity':'0'
				},100);
			}
		);
		/*$(".th_ho02 .thumbnail_list .inner").hover(
			function() {
				$(this).find('span.overimg').addClass("on");
			 	$(this).find('span.overimg').animate({
					'opacity':'1'
				},500,'easeOutQuint');
			}, function(){
				$(this).find('span.overimg').removeClass("on");
				$(this).find('span.overimg').animate({
					'opacity':'0'
				},100);
			}
		);*/
	}

	//비주얼모션
	var pointPosArr = [];
	var earthSta = true;
	var ratioValW = 0.42708 , ratioValH = 2.34146;
	var pngAction = pngFx(), earthAction = pngFx();
	pngAction.imgLoad($("#particle"),99 , 0);
	earthAction.imgLoad($("#earth"),107 , 0);
	$(window).resize(function(){
		var windowW = $(window).width(), windowH = $(window).height();
		var defaultRatio = windowW * ratioValW, visualH = windowH - $("#header").height();
		//visualSec resize
		$visualSec.css({"height" : visualH});
		$bgArea.css({"height" : visualH});
		$bgElm.css({"height" : visualH});
		if(visualH > defaultRatio){
			$bgElm.find("img").css({"width" : "auto" , "height" : visualH});
			$bgArea.css({"width" : ratioValH * visualH , "margin-left" : -(ratioValH * visualH / 2)});
		}else{
			$bgElm.find("img").css({"width" : windowW , "height" : "auto"});
			$bgArea.css({"width" : windowW , "margin-left" : -(windowW / 2)});
		};

		//motion offset top
		$(".motion_sec").each(function(index,item){
			pointPosArr[index] = $(item).offset().top;
		});

	}).scroll(function(){
		var scrollTop = $(window).scrollTop();
		//비주얼영역
		if(scrollTop >= pointPosArr[1] && !sec1Sta){
			clearInterval(visualInterval);
			pngAction.pngMotionE();
			sec1Sta = true;

		}else if(scrollTop < pointPosArr[1] && sec1Sta){
			pngAction.pngMotionS($("#particle"),99 , 0 , 70);
			if(!$("#controlBtn").is(".stop")){
				clearInterval(visualInterval);
				visualInterval = setInterval(vInterval,5000);
			};
			sec1Sta = false;
		};

		//제품섹션 bg motion
		$(".products_sec").each(function(index,item){
			motionAction.bgMotion($(item),scrollTop,130, 500);
		});

		//글로벌네트워크 지구
		if(scrollTop >= pointPosArr[5] - ($(window).height()/2)){
			if(earthSta){
				earthAction.pngMotionS($("#earth"),107 , 0 , 40);
				earthSta = false;
			};
		}else if(scrollTop < pointPosArr[5] && !earthSta){
			earthSta = true;
			earthAction.pngMotionE();
		};

	}).trigger("resize").trigger("scroll");
});

//news 영역 텍스트 4줄이상이면, 말줄임표 추가
$(function(){
});





