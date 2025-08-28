let cl= console.log;

function addZero(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}

function showTime() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    ampm = "PM";
  }

  if (h > 12) {
    h = h - 12;
  } else if (h === 0) {
    h = 12;
  }

  h = addZero(h);
  m = addZero(m);
  s = addZero(s);

  document.getElementById("clock").textContent = `${h}:${m}:${s} ${ampm}`;
}

setInterval(showTime, 1000);
showTime();
