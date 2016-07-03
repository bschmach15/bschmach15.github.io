var tday, tmonth;
tday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock() {
    "use strict";
    var d = new Date();
    var nday = d.getDay(), nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getYear();
    if (nyear < 1000) {nyear += 1900; }
    var nhour = d.getUTCHours(), nmin = d.getMinutes(), nsec = d.getSeconds(), nyap, dap, sdap;
    
    var nyhour = nhour - 4, dhour = nhour - 6, sdhour = nhour - 7;
    
    if (nyhour === 0) {nyap = " AM"; nyhour = 12; }
        else if (nyhour < 0) { nyhour = nyhour + 12, nyap = " PM";
        }
        else if (nyhour > 0 && nyhour < 12) {nyap = " AM"; }
        else if (nyhour === 12) {nyap = " PM"; }
        else if (nyhour > 12) {nyap = " PM"; nyhour -= 12; }
    
    if (dhour === 0) {dap = " AM"; dhour = 12; }
        else if (dhour < 0) { dhour = dhour + 12, dap = " PM";
        }
        else if (dhour > 0 && dhour < 12) {dap = " AM"; }
        else if (dhour === 12) {dap = " PM"; }
        else if (dhour > 12) {dap = " PM"; dhour -= 12; }

    if (sdhour === 0) {sdap = " AM"; sdhour = 12; }
        else if (sdhour < 0) { sdhour = sdhour + 12, sdap = " PM";
        }
        else if (sdhour > 0 && sdhour < 12) {sdap = " AM"; }
        else if (sdhour === 12) {sdap = " PM"; }
        else if (sdhour > 12) {sdap = " PM"; sdhour -= 12; }

    if (nmin <= 9) {
        nmin = "0" + nmin;
    }
    if (nsec <= 9) {
        nsec = "0" + nsec;
    }
    
    var nyhourst = nyhour.toString();
    var denverhourst = dhour.toString();
    var sdhourst = sdhour.toString();
    
    var nsecstring = nsec.toString(), nhourstring = nhour.toString(), nminstring = nmin.toString();
    
    document.getElementById('clockbox').innerHTML = " " + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + ", " + nyear;
    
    document.getElementById('nytime').innerHTML = " " + nyhourst.big() + ":" + nminstring.big() + nyap;
    
    document.getElementById('dtime').innerHTML = " " + denverhourst.big() + ":" + nminstring.big() + ":" + nsecstring.small() + dap;

    document.getElementById('sdtime').innerHTML = " " + sdhourst.big() + ":" + nminstring.big() + sdap;
}