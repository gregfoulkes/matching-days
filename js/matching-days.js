function MatchDays() {

  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var firstDate = ''
  var secondDate = ''

  function getDay1(date1) {

    var dates1 = new Date(date1);
    var firstDate = weekDays[dates1.getDay()];

    return firstDate
  }

  function getDay2(date2) {

    var dates2 = new Date(date2);
    var secondDate = weekDays[dates2.getDay()];

    return secondDate
  }


  return {
    dayInOne: getDay1,
    dayInTwo: getDay2
  }

}
