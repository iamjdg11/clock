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

function updateTime() {
  var now = new Date

  var lastHours = last.getHours().toString().padStart(2, ' ')
  var nowHours = now.getHours().toString().padStart(2, ' ')
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


  const nowYear = now.getFullYear().toString();
  const lastYear = last.getFullYear().toString();
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


setInterval(updateTime, 100)
setInterval(window.location.reload(), 1000)