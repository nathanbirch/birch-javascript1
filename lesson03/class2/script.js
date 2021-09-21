function createTime() {
  var d = new Date();
  let minutes = d.getMinutes();
  let hours = d.getHours();
  let isPM = false;
  if (hours > 12) {
    hours -= 12;
    isPM = true;
  }

  let time = hours + ':' + minutes;
  if (isPM) {
    time += ' PM';
  } else {
    time += ' AM';
  }
  return time;
}

function getTime() {
  document.getElementById('demo').innerHTML = createTime();
}

function displayMilitaryTime() {
  let time = createTime();
  let ampm = time.slice(-2);
  let militaryTime = '';
  if (ampm === 'PM') {
    let hours = parseInt(time.substring(0, time.indexOf(':'))) + 12;
    time = time.substring(time.indexOf(':') + 1);
    militaryTime = hours + ':' + time;
  }
  militaryTime = militaryTime.slice(0, -3);
  document.getElementById('demo').innerHTML = militaryTime;
}
