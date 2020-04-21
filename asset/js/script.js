var keys = [37, 38, 39, 40];

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
    preventDefault(e);
}
function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}



//layer_popup (start)
function layerPopup_onStart(lp, w, h) {
    $(".nav_frame").attr("style", "z-index:-1");
    disable_scroll();
    //    alert(document.body.scrollHeight);
    var loadingScript = '';
    var bodyHeightSize = 0;

    loadingScript += "<div id='bg' style='position:absolute; top:0; left:0; width:100%; height:100%; background:url(/asset/img/popup_dim.png); display:none;z-index:999;'></div>";
    loadingScript += "<iframe cellspacing='0' frameborder='0' id='layerPopup' name='layerPopup' scrolling='no' src='about:blank' style='position:absolute;width:0;height:0;top:0px;left:0px;display:none;z-index:5000;background:#fff;padding:0px;border-radius:0px;' allowtransparency='true'></iframe>";
    $("body").append(loadingScript);

    $("#bg").show();
    var top = $(window).scrollTop() + ($(window).height() - $("#viewLoading").height()) / 2;
    var left = $(window).scrollLeft() + ($(window).width() - $("#viewLoading").width()) / 2;
    $('#viewLoading').css('position', 'absolute');
    $("#viewLoading").css("top", top);
    $("#viewLoading").css("left", left);
    $("#viewLoading").fadeIn(0);

    eval("window.scrollTo(0,0);"); // scroll 상단이동
    eval("$(\"#" + lp + "\").css(\"width\"," + w + ");");
    eval("$(\"#" + lp + "\").css(\"height\"," + h + ");");
    //eval("var top_point  = $(window).scrollTop() + ($(window).height() - $(\"#" + lp + "\").height()) / 2;");
    eval("var top_point  = 80;"); // 위치고정
    eval("var left_point  = $(window).scrollLeft() + ($(window).width() - $(\"#" + lp + "\").width()) / 2;");

    //레이어 팝업의 사이즈(h)가 윈도우 창보다 클경우 , body Size 조정(늘림)
    if (parseInt(top_point) < 0) {
        top_point = 150;
        //        bodyHeightSize = h + 200;
        //    } else {
        //        bodyHeightSize = document.body.scrollHeight;
    }

    bodyHeightSize = $(document).height()
    eval("$(\"#" + lp + "\").fadeIn(100);");
    //eval("$(\"#" + lp + "\").show();");
    eval("$(\"#" + lp + "\").css(\"top\",top_point);");
    eval("$(\"#" + lp + "\").css(\"left\",left_point);");

    //    alert(document.body.scrollHeight);

    $("#bg").css("height", bodyHeightSize);
    $("#viewLoading").fadeOut(1500);
}


//layer_popup (stop)
function layerPopup_onStop(lp) {
    $(".nav_frame").attr("style", "z-index:");
    //alert("Stop");
    $("#bg").hide();
    //eval("$(\"#" + lp + "\");");
    $('#' + lp).fadeOut(100, function () {
        $(this).attr({ 'src': '' });
		$("#bg").remove();
        $('#' + lp).remove();
    });
    enable_scroll();
}

//레이서 사이즈 변경
function layerPopup_onSizeChange(lp, w, h) {
    var currH = $("#" + lp).height();
    var changeH = h + $("#bg").height();
    //$("#bg").css("height", changeH);
    eval("$(\"#" + lp + "\").css(\"width\"," + w + ");");
    eval("$(\"#" + lp + "\").css(\"height\"," + h + ");");

    //eval("var top_point  = $(window).scrollTop() + ($(window).height() - $(\"#" + lp + "\").height()) / 2;");
    eval("var top_point  = 80;");
    eval("var left_point  = $(window).scrollLeft() + ($(window).width() - $(\"#" + lp + "\").width()) / 2;");

    //레이어 팝업의 사이즈(h)가 윈도우 창보다 클경우 , body Size 조정(늘림)
    if (parseInt(top_point) < 0) {
        top_point = 150;
        //        bodyHeightSize = h + 200;
        //    } else {
        //        bodyHeightSize = document.body.scrollHeight;
    }

    bodyHeightSize = $(document).height()
    eval("$(\"#" + lp + "\").fadeIn(100);");
    //eval("$(\"#" + lp + "\").show();");
    eval("$(\"#" + lp + "\").css(\"top\",top_point);");
    eval("$(\"#" + lp + "\").css(\"left\",left_point);");

    //    alert(document.body.scrollHeight);

    $("#bg").css("height", bodyHeightSize);
}




function shadowLoading_onStart() {

    disable_scroll();
    //    alert(document.body.scrollHeight);
    var loadingScript = '';
    var bodyHeightSize = 0;

    loadingScript += "<div id='viewLoading' style='width:100px;heigth:100px;top:0px;left:0px;display:none;'>";
    loadingScript += "    <img src='/common_img/ajax-loader1.gif' />";
    loadingScript += "</div>";
    loadingScript += "<div id='bg' style='position:absolute; top:0; left:0; width:100%; height:100%; background:#000; opacity:0.4; filter:alpha(opacity=40); display:none;' style='z-index:999;'></div>";
    $("body").append(loadingScript);

    $("#bg").show();
    $("#bg").css("height", $(document).height() - 1);

    var top = $(window).scrollTop() + ($(window).height() - $("#viewLoading").height()) / 2;
    var left = $(window).scrollLeft() + ($(window).width() - $("#viewLoading").width()) / 2;
    $('#viewLoading').css('position', 'absolute');
    $("#viewLoading").css("top", top);
    $("#viewLoading").css("left", left);
    $("#viewLoading").fadeIn(0);



    //    alert(document.body.scrollHeight);
    //    var loadingScript = '';
    //
    //        
    //    loadingScript +="<div id='viewLoading' style='width:100px;heigth:100px;top:0px;left:0px;display:none;'>";
    //    loadingScript +="    <img src='/common_img/ajax-loader1.gif' />";
    //    loadingScript +="</div>";
    //    loadingScript +="<div id='bg' style='position:absolute; top:0; left:0; width:100%; height:100%; background:#000; opacity:0.6; filter:alpha(opacity=60); display:none;' style='z-index:999;'></div>";        
    //    loadingScript +="<iframe cellspacing='0' frameborder='0' id='layerPopup' name='layerPopup' scrolling='no' src='about:blank' style='position:absolute;width:500px;height:500px;top:0px;left:0px;display:none;z-index:1000;background:#ffffff;padding:0px;border-radius:10px;'></iframe>";
    //    $("body").append(loadingScript);
    //    
    //    //$("#bg").show();
    //    //$("#bg").css("height", $(document).height() - 1);
    //
    //    var top = $(window).scrollTop() + ($(window).height() - $("#viewLoading").height()) /2 ;
    //    var left = $(window).scrollLeft() + ($(window).width() - $("#viewLoading").width()) / 2;
    //    $('#viewLoading').css('position', 'absolute');
    //    $("#viewLoading").css("top",top);
    //    $("#viewLoading").css("left",left);
    //    $("#viewLoading").fadeIn(0);
    //
    //
    //    $("#bg").css("height",document.body.scrollHeight);
    //    $("#viewLoading").fadeOut(1500);
    //    $("#bg").fadeOut(1500);
}

function shadowLoading_onStop() {
    $("#bg").fadeOut(500);
    $("#viewLoading").fadeIn(0);
}

function onlyLoading_onStart() {
    alert("onlyLoading_onStart();")
    var loadingScript = '';
    loadingScript += "<div id='viewLoading' style='width:100px;heigth:100px;top:0px;left:0px;display:none;'>";
    loadingScript += "    <img src='/common_img/ajax-loader1.gif' />";
    loadingScript += "</div>";
    loadingScript += "<div id='bg' style='position:absolute; top:0; left:0; width:100%; height:100%; background:#000; opacity:0.6; filter:alpha(opacity=60); display:none;' style='z-index:999;'></div>";
    loadingScript += "<iframe cellspacing='0' frameborder='0' id='layerPopup' name='layerPopup' scrolling='no' src='about:blank' style='position:absolute;width:500px;height:500px;top:0px;left:0px;display:none;z-index:1000;background:#ffffff;padding:0px;border-radius:10px;'></iframe>";
    $("body").append(loadingScript);

    var top = $(window).scrollTop() + ($(window).height() - $("#viewLoading").height()) / 2;
    var left = $(window).scrollLeft() + ($(window).width() - $("#viewLoading").width()) / 2;
    $('#viewLoading').css('position', 'absolute');
    $("#viewLoading").css("top", top);
    $("#viewLoading").css("left", left);
    $("#viewLoading").fadeIn(0);
}