//예약불가 일 설정
//var disabledDays = ["5-21-2013","5-24-2013","5-27-2013","5-29-2013","6-3-2013","6-17-2013","7-3-2013","7-4-2013","7-5-2013"];
var holiDays = ["1-1-" + new Date().getFullYear(), "3-1-" + new Date().getFullYear(), "5-5-" + new Date().getFullYear(), "6-6-" + new Date().getFullYear(), "7-17-" + new Date().getFullYear(), "8-15-" + new Date().getFullYear(), "10-3-" + new Date().getFullYear(), "12-25-" + new Date().getFullYear()];

var disabledDays = [];
var enabledDays = [];
var enabledAmpms = [];
var disabledCheck = true;

function enabledDaysSet(date) {
    if (disabledCheck) {
        return [false];
    }
    else {
        var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();

        var md = new Date(date);
        var dd = md.getDate();
        md.setDate(dd + 1);

        var nd = new Date((new Date().getMonth() + 1) + "-" + new Date().getDate() + "-" + new Date().getFullYear());

        if (nd >= md) {
            return [false];
        }

        /*for (i = 0; i < holiDays.length; i++) {
			if($.inArray((m+1) + "-" + d + "-" + y, holiDays) != -1) {
				return [false];
			}
		}*/

        for (i = 0; i < enabledDays.length; i++) {
            if ($.inArray((m + 1) + "-" + d + "-" + y, enabledDays) != -1) {
                return [true];
            }
        }

        return [false];
    }
}

function nationalDays(date) {
    if (disabledCheck) {
        return [false];
    }
    else {
        var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();

        var md = new Date(date);
        var dd = md.getDate();
        md.setDate(dd + 1);

        for (i = 0; i < disabledDays.length; i++) {
            if ($.inArray((m + 1) + "-" + d + "-" + y, disabledDays) != -1) {//  || new Date() > md  <-- if문에 추가시 오늘 이전 날짜들은 선택안됨
                return [false];
            }
        }

        var nd = new Date((new Date().getMonth() + 1) + "-" + new Date().getDate() + "-" + new Date().getFullYear());

        if (nd >= md) {
            return [false];
        }

        return [true];
    }
}

function noWeekendsOrHolidays(date) {
    var noWeekend = jQuery.datepicker.noWeekends(date);

    //return noWeekend[0] ? nationalDays(date) : noWeekend;	// 주말포함해서 날짜 disabled
    return nationalDays(date);																// 해당일만 disabled
}

function allNotDate(date) {
    return [false];
}

function datepickerSetting(disabled, firstDate, cnt) {
    disabledCheck = disabled;
    $("#datepicker").attr("disabled", disabled);

    if (disabled) {
        enabledDays = [];
        enabledAmpms = [];

        //reservation.dateInfo.yyyy = (new Date().getFullYear());
        //reservation.dateInfo.mm = (new Date().getMonth() + 1);

        $("#datepicker").datepicker("setDate", "");
    }
    else {
        if (cnt == 0) {
            enabledDays = [];
            enabledAmpms = [];
        }

        if (enabledDays.length == 0) {
            $("#datepicker").datepicker("setDate", reservation.dateInfo.yyyy + "-" + reservation.dateInfo.mm + "-01");
        }
        else {
            $("#datepicker").datepicker("setDate", firstDate);
        }

        $(".ui-datepicker-prev").css("cursor", "pointer");
        $(".ui-datepicker-next").css("cursor", "pointer");
    }
}

function selectDate(date) {
    if (date == new Date().getFullYear() + "-" + dateZero((new Date().getMonth() + 1)) + "-" + dateZero(new Date().getDate())) {
        alert("당일은 예약하실 수 없습니다.");
        return;
    }
    else {
        reservation.dateInfo.yyyy = date.split("-")[0];
        reservation.dateInfo.mm = date.split("-")[1];
        reservation.dateInfo.dd = date.split("-")[2];
        reservation.dateInfo.date = date;

        reservation.searchYear = date.split("-")[0];
        reservation.searchMonth = date.split("-")[1];

        for (i = 0; i < enabledDays.length; i++) {
            if (enabledDays[i] == (dateZeroReplace(date.split("-")[1]) + "-" + dateZeroReplace(date.split("-")[2]) + "-" + dateZeroReplace(date.split("-")[0]))) {
                reservation.dateInfo.ampm = enabledAmpms[i];
            }
        }

        reservation.loadReservationTime();
    }
}

function dateZero(date) {
    date += "";

    if (date.length == 1) {
        date = "0" + date
    }

    return date;
}

function dateZeroReplace(date) {
    date += "";

    if (date.substring(0, 1) == "0") {
        date = date.substring(1, 2);
    }

    return date;
}

function monthYearChange(year, month) {
    if (disabledCheck) {
        $("#datepicker").datepicker("setDate", "");
        return;
    }
    else {
        reservation.dateInfo.yyyy = year;
        reservation.dateInfo.mm = dateZero(month);
        reservation.searchYear = reservation.dateInfo.yyyy;
        reservation.searchMonth = reservation.dateInfo.mm;

        reservation.loadReservationDate(month);
        return;
    }
}

function enabledDaysPush(cnt, date, ampm) {
    if (cnt == 0) {
        enabledDays = [];
        enabledAmpms = [];
        enabledDays.push(date);
        enabledAmpms.push(ampm);
    }
    else {
        enabledDays.push(date);
        enabledAmpms.push(ampm);
    }
}

$(document).ready(function () {
    $("#datepicker").datepicker({
        inline: true,
        beforeShowDay: enabledDaysSet,
        dateFormat: "yy-mm-dd",
        dayNames: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        minDate: new Date().getFullYear() + "-" + dateZero((new Date().getMonth() + 1)) + "-" + dateZero(new Date().getDate()),
        onSelect: selectDate,
        onChangeMonthYear: monthYearChange,
        //firstDay: 1,
        numberOfMonths: [1, 3],
        showOtherMonths: true,
        stepMonths: 3,
    });
});
