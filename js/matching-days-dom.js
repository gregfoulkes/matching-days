// DOM References
var dayOne = document.querySelector('.date1')

var dayTwo = document.querySelector('.date2')

var theDay = document.querySelector('.day')


var matchDaysFactory = MatchDays()

// Template References

var matchingDaysTemplateSource = document.querySelector(".matchingDaysTemplate").innerHTML;

var matchingDaysTemplate = Handlebars.compile(matchingDaysTemplateSource);

var insertMatchingDaysDataElem = document.querySelector(".weekDays");

//var storedRegTwo = localStorage.getItem('registrationsTwo') ? JSON.parse(localStorage.getItem('registrationsTwo')) : {};

//Dom Code

window.addEventListener('load', function() {

  var weekDayMap = {}

  var dayList = matchDaysFactory.list

  for (let i = 0; i < dayList.length; i++) {
    var dayListIndex = dayList[i]

    weekDayMap[dayListIndex] = {
      dayValue: dayListIndex,
      dayName: dayListIndex
    }

    insertMatchingDaysDataElem.innerHTML = matchingDaysTemplate({
      weekDays: weekDayMap
    })

  }
});

dayOne.addEventListener('change', function() {
  let days = document.querySelectorAll('.day')

  var weekDayMap = matchDaysFactory.compare(matchDaysFactory.getDayOne(dayOne.value), matchDaysFactory.getDayTwo(dayTwo.value) )

  insertMatchingDaysDataElem.innerHTML = matchingDaysTemplate({
    weekDays: weekDayMap,
  })
});

dayTwo.addEventListener('change', function() {

  let days = document.querySelectorAll('.day')

  var weekDayMap = matchDaysFactory.compare(matchDaysFactory.getDayOne(dayOne.value), matchDaysFactory.getDayTwo(dayTwo.value) )
  insertMatchingDaysDataElem.innerHTML = matchingDaysTemplate({
    weekDays: weekDayMap,
  })

});
