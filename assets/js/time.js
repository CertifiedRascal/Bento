window.onload = displayClock();
function displayClock() {
  const monthNames = [
    '１月',
    '２月',
    '３月',
    '４月',
    '５月',
    '６月',
    '７月',
    '８月',
    '９月',
    '１０月',
    '１１月',
    '１２月',
  ];
  
  const daysOfWeek = [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
    ];

  // Set to true to use a 12 hour date format
  var format_12hour = false;

  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var dow = daysOfWeek[d.getDay()];
  var min = (mins = ('0' + d.getMinutes()).slice(-2));
  var hh = d.getHours();
  var ampm = '';

  if (format_12hour) {
    ampm = hh >= 12 ? ' pm' : ' am';
    hh = hh % 12;
    hh = hh ? hh : 12; //show mod 0 as 12
  }

  document.getElementById('hour').innerText = hh;
  document.getElementById('separator').innerHTML = ' : ';
  document.getElementById('minutes').innerText = min + ampm;

  document.getElementById('month').innerText = mm;
  document.getElementById('day').innerText = dd + "日";
  document.getElementById('dayOfWeek').innerText = dow;

  setTimeout(displayClock, 1000);
}
