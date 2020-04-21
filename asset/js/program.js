/* cookie */
function getCookie(name) {
    var cookies = document.cookie.split(";");
    var cookie;
    for (var iLoop = 0; iLoop < cookies.length; iLoop++) {
        cookie = cookies[iLoop].split("=");
        if ($.trim(name) == $.trim(cookie[0])) {
            return unescape(cookie[1]);
        }
    }
}

function setCookie(name, value) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 1);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exdate.toGMTString() + ";";
}

/*popup view*/
function fnPopupLayerOpen(url) {
    layerPopup_onStart("layerPopup", 0, 0);
    $("#layerPopup").attr("src", url);
    $("#layerPopup").css("display", "block");
}

/* popup close*/
function fnPopupLayerClose() {
    parent.layerPopup_onStop("layerPopup");
}

function fnPopupLayerCloseRefresh() {
    parent.layerPopup_onStop('layerPopup');
    parent.document.location.reload()
}

function fnPopupLayerCloseMove(url) {
    parent.layerPopup_onStop('layerPopup');
    parent.document.location = url;
}

/* email check */
function fnEmailChk(email1, email2, email3) {
    var vEmail = "";
    if ($("#" + email1).val() == "") {
        alert("이메일을 입력해주세요.");
        $("#" + email1).focus();
        return false;
    } else {
        vEmail = $("#" + email1).val();
    }

    if (email2 != "" && email3 != "") {
        if ($("#" + email2).val() == "" && $("#" + email3).val() == "") {
            alert("이메일을 입력해주세요.");
            $("#" + email2).focus();
            return false;
        } else {
            if ($("#" + email2).val() == "") {
                vEmail += "@" + $("#" + email3).val();
            } else {
                vEmail += "@" + $("#" + email2).val();
            }
        }
    }

    var vPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!vEmail.match(vPattern)) {
        alert("이메일 형식이 올바르지 않습니다.\n다시 한번 더 확인 부탁드립니다.");
        $("#" + email1).focus();
        return false;
    } else {
        return true;
    }
}

function fnEmailValChk(email2, email3) {

    if ($("#" + email3).val() == "") {
        $("#" + email2).attr("readonly", false);
    } else {
        $("#" + email2).val("");
        $("#" + email2).attr("readonly", true);
    }
}

/*only number */
function fnKeyNumber() {
    if (event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46) {
        return true;
    } else if (event.keyCode > 34 && event.keyCode < 40) {
        return true;
    } else if (event.keyCode > 95 && event.keyCode < 106) {
        return true;
    } else if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
    }
    return true;
}

function chkpassword(pwd) {
    var pwdval = $("#" + pwd).val();
    var pwdobj = $("#" + pwd);

    var result = pwdval;
    var LenCount = 0;
    var schrMatch = result.match(/[a-z]{1,}/g);
    var lchrMatch = result.match(/[A-Z]{1,}/g);
    var numMatch = result.match(/[0-9]{1,}/g);
    var spcMatch = result.match(/[~!@\#$%<>^&*\()\-=+_\']/gi);
    if (schrMatch != null) {
        LenCount += 1;
    }
    if (lchrMatch != null) {
        LenCount += 1;
    }
    if (numMatch != null) {
        LenCount += 1;
    }
    if (spcMatch != null) {
        LenCount += 1;
    }

    if (pwdval.length < 10 || pwdval.length > 20 || LenCount < 2) {
        alert("비밀번호는 영문 대소문자, 숫자, 특수문자 중 2종류 이상 조합하여 10자 이상 입력해주시기 바랍니다.");
        pwdval = "";
        pwdobj.focus();
        return false;
    } else {
        return true;
    }
}
