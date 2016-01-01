var oCounting = document.getElementById('counting');
var oStart = document.getElementById('start');
var oReset = document.getElementById('reset');
var oBody = document.getElementsByTagName('body')[0];
var oPause = document.getElementById('pause');
var timer1 = null;
var s = 0,
    m = 0,
    h = 0,
    ss = 0;

function startCounting(el) {
    timer1 && clearInterval(timer1);
    timer1 = setInterval(function() {
        // how many ms an hour ? 60 * 60 * 1000
        // how many ms a minute ? 60 * 1000
        // how many ms a second ? 1000
        ss++;

        if (ss > 9) {
            s++;
            ss = 0;
        }
        if (s > 59) {
            m++;
            s = 0;
        }
        if (m > 59) {
            h++;
            m = 0;
        }
        var ssStr = addZero(ss);
        var sStr = addZero(s);
        var mStr = addZero(m);
        var hStr = addZero(h);
        el.innerHTML = hStr + ':' + mStr + ':' + sStr + ' ' + ssStr;
    }, 100);
}

function init() {
    ss = s = m = h = 0;
    timer1 && clearInterval(timer1);
    oCounting.innerHTML = '00:00:00 00';
    oPause.style.display = 'none';
    oStart.style.display = '';
    // oCounting.style.backgroundColor = '#333';
    // oCounting.style.color = '#fff';

}

function addZero(t) {
    return t < 10 ? '0' + t : t;
}

oBody.onload = function() {
    init();
};
oReset.onclick = function() {
    init();
};

oStart.onclick = function() {
    startCounting(oCounting);
    this.style.display = 'none';
    oPause.style.display = '';
};
oPause.onclick = function() {
    clearInterval(timer1);
    this.style.display = 'none';
    oStart.style.display = '';
};
