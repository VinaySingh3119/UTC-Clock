
function abc() {
    var mydate = new Date();

    var hour = mydate.getUTCHours();
    var mint = mydate.getUTCMinutes();
    var secd = mydate.getUTCSeconds();
    var ampm = "";

    var timeZone = document.querySelector('input[name="timeZone"]:checked')?.value;

    if (timeZone == "12h") {
        if (hour >= 12) {
            ampm = "PM"

            if (hour > 12) hour = hour - 12;
        }
        else {
            ampm = "AM";
            if (hour == 0) hour = 12;
        }
    }
    else {
        ampm = "";
    }

    var jh1 = document.querySelectorAll("h1");

    jh1[0].innerHTML = `${hour}`;
    jh1[2].innerHTML = `${mint}`;
    jh1[4].innerHTML = secd;
    jh1[5].innerHTML = ampm;

    // var mytime = `${hour} : ${mint} : ${secd} ${ampm}`;

    // var jh = document.getElementsByTagName("h1");

    // jh[0].innerHTML = mytime;

    var hourDeg = hour * 5 * (6 + mint / 60) - 90;
    var mintDeg = mint * 6 - 90;
    var secdDeg = secd * 6 - 90;

    document.querySelector(".second").style.transform = `rotate(${secdDeg}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${mintDeg}deg)`;
    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
}

setInterval("abc()", 100);
