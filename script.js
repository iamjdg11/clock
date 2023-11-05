var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')

var yearContainer = document.querySelector('.year')
var monthContainer = document.querySelector('.month')
var dateContainer = document.querySelector('.date')
var dayContainer = document.querySelector('.day')

var tickElements = Array.from(document.querySelectorAll('.tick'))

var last = new Date(0)
last.setUTCHours(-1)

var tickState = true

function convert12hr(hoursIn24) {
  const hoursIn12 = ((hoursIn24 + 11) % 12 + 1).toString().padStart(2, ' ');
  const ampmTxt = hoursIn24 > 12 ? "PM" : "AM"
  return [hoursIn12, ampmTxt];
}

function updateTime() {
  var now = new Date

  var lastHours = convert12hr(last.getHours())[0]
  var nowHours = convert12hr(now.getHours())[0]
  if (lastHours !== nowHours) {
    updateContainer2(hoursContainer, nowHours)
  }

  var lastMinutes = last.getMinutes().toString().padStart(2, '0')
  var nowMinutes = now.getMinutes().toString().padStart(2, '0')
  if (lastMinutes !== nowMinutes) {
    updateContainer2(minutesContainer, nowMinutes)
  }

  var lastSeconds = last.getSeconds().toString().padStart(2, '0')
  var nowSeconds = now.getSeconds().toString().padStart(2, '0')
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer2(secondsContainer, nowSeconds)
  }


  const nowYear = now.getFullYear().toString().substring(2);
  const lastYear = last.getFullYear().toString().substring(2);
  if (lastYear !== nowYear) {
    //tick()
    updateContainer2(yearContainer, nowYear)
  }

  const nowMonth = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1 and format to two digits.
  const lastMonth = String(last.getMonth() + 1).padStart(2, '0')
  if (lastMonth !== nowMonth) {
    //tick()
    updateContainer2(monthContainer, nowMonth)
  }

  const nowDate = String(now.getDate()).padStart(2, '0'); // Format to two digits.
  const lastDate = String(last.getDate()).padStart(2, '0'); // Format to two digits.
  if (lastDate !== nowDate) {
    //tick()
    updateContainer2(dateContainer, nowDate)
  }


  day = ['일', '월', '화', '수', '목', '금', '토']
  const nowDay = day[now.getDay()];
  const lastDay = day[last.getDay()];
  if (lastDay !== nowDay) {
    //tick()
    updateContainer2(dayContainer, nowDay)
  }

  last = now

}

function tick() {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer2(container, newValue) {
  container.innerText = newValue;
}

// function updateContainer(container, newTime) {
//   var time = newTime.split('')

//   if (time.length === 1) {
//     time.unshift('0')
//   }


//   var first = container.firstElementChild
//   if (first.lastElementChild.textContent !== time[0]) {
//     updateNumber(first, time[0])
//   }

//   var last = container.lastElementChild
//   if (last.lastElementChild.textContent !== time[1]) {
//     updateNumber(last, time[1])
//   }
// }

// function updateNumber(element, number) {
//   //element.lastElementChild.textContent = number
//   var second = element.lastElementChild.cloneNode(true)
//   second.textContent = number

//   element.appendChild(second)
//   element.classList.add('move')

//   setTimeout(function () {
//     element.classList.remove('move')
//   }, 990)
//   setTimeout(function () {
//     element.removeChild(element.firstElementChild)
//   }, 990)
// }


setInterval(updateTime, 100);

function preventScreenSleep() {
  // Request a Wake Lock to keep the display active
  if ('wakeLock' in navigator && 'request' in navigator.wakeLock) {
    navigator.wakeLock.request('screen').then(function (wakeLock) {
      console.log('Screen Wake Lock is active');
      // You can release the lock when you no longer need it
      // wakeLock.release();
    }).catch(function (err) {
      console.error('Could not create Screen Wake Lock: ' + err);
    });
  }
}

// Call the preventScreenSleep function when your page loads or when you need to prevent sleep
preventScreenSleep();


function makeFullScreenMode() {
  try {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer
      document.documentElement.msRequestFullscreen();
    }
  } catch (e) {
    console.log("error in full screen mode", e)
  }

}

// makeFullScreenMode();

document.addEventListener('dblclick', () => {
  console.log("full screen mode");
  makeFullScreenMode();
})