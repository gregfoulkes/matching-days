// DOM References
var dayOne = document.querySelector('.date1')

var dayTwo = document.querySelector('.date2')

var theDay = document.querySelector('.day')


var matchDaysFactory = MatchDays()

// Template References

var matchingDaysTemplateSource = document.querySelector(".matchingDaysTemplate").innerHTML;

var matchingDaysTemplate = Handlebars.compile(matchingDaysTemplateSource);

var insertMatchingDaysDataElem = document.querySelector(".weekDays");

//Dom Code

window.addEventListener('load', function() {

  insertMatchingDaysDataElem.innerHTML = matchingDaysTemplate({
    weekDays: matchDaysFactory.compare(matchDaysFactory.getDayOne(dayOne.value), matchDaysFactory.getDayTwo(dayTwo.value))
  })


});

dayOne.addEventListener('change', function() {

  insertMatchingDaysDataElem.innerHTML = matchingDaysTemplate({
    weekDays: matchDaysFactory.compare(matchDaysFactory.getDayOne(dayOne.value), matchDaysFactory.getDayTwo(dayTwo.value))
  })
});

dayTwo.addEventListener('change', function() {

  insertMatchingDaysDataElem.innerHTML = matchingDaysTemplate({
    weekDays: matchDaysFactory.compare(matchDaysFactory.getDayOne(dayOne.value), matchDaysFactory.getDayTwo(dayTwo.value))
  })

});
