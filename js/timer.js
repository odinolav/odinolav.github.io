var h1, start, stop, clear,
    elapsedseconds = 0, elapsedminutes = 0, elapsedhours = 0,
    elapsed = '0', elapsedtime = "00:00:00",
    timing;

function initializeTimer() {

  h1 = document.getElementById('timestamp');
  start = document.getElementById('start');
  stop = document.getElementById('stop');
  clear = document.getElementById('clear');

  /* Start button */
  start.onclick = timer;

  /* Stop button */
  stop.onclick = function() {
      clearInterval(timing);
  }

  /* Clear button */
  clear.onclick = function() {
      elapsedseconds = 0; elapsedminutes = 0; elapsedhours = 0;
      elapsed = '0'; elapsedtime = "00:00:00";
      h1.textContent = elapsedtime;
  }
}

function timer() {
  var start = new Date().getTime();
  timing = window.setInterval(function() {

    var time = new Date().getTime() - start;
    elapsed = Math.floor(time / 1000);

    if (Math.round(elapsed) == elapsed) {
        elapsed += '.0';
    }
    elapsedhours = Math.floor(elapsed / 3600);
    elapsedminutes = Math.floor(elapsed / 60);
    elapsedseconds = elapsed - elapsedminutes * 60;
    if (elapsedseconds < 10) {
        clockseconds = "0" + elapsedseconds;
    } else {
        clockseconds = elapsedseconds;
    }
    if (elapsedminutes < 10) {
        clockminutes = "0" + elapsedminutes;
    } else {
        clockminutes = elapsedminutes;
    }
    if (elapsedhours < 10) {
        clockhours = "0" + elapsedhours;
    } else {
        clockhours = elapsedhours;
    }
    elapsedtime = clockhours + ":" + clockminutes + ":" + clockseconds;
    document.getElementById('timestamp').textContent = elapsedtime;
  }, 1000);
}
