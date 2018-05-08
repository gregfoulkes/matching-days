function MatchDays() {

  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var firstDate = '';
  var secondDate = '';

  function getDay1(date1) {
    firstDate = new Date(date1);
    firstDate = weekDays[firstDate.getDay()];
    return firstDate;
  }

  function getDay2(date2) {
    secondDate = new Date(date2);
    secondDate = weekDays[secondDate.getDay()];
    return secondDate;
  }

  function sameDay(firstDate, secondDate) {

    if (firstDate !== undefined && secondDate !== undefined) {
      return firstDate == secondDate;
    }
  }

  function compareDays() {
    var weekDayMap = {};

    for (var i = 0; i < weekDays.length; i++) {
      var dayMapIndex = weekDays[i];

      weekDayMap[dayMapIndex] = {
        dayValue: dayMapIndex,
        dayName: dayMapIndex
      };

      if (dayMapIndex == firstDate) {

        weekDayMap[dayMapIndex] = Object.assign({
          'firstDate': 'red'
        }, weekDayMap[dayMapIndex]);

        if (sameDay(firstDate, secondDate)) {
          delete weekDayMap[dayMapIndex].firstDate;

          weekDayMap[dayMapIndex] = Object.assign({
            'sameDay': 'green'
          }, weekDayMap[dayMapIndex]);
        }

      }

      if (dayMapIndex == secondDate) {

        weekDayMap[dayMapIndex] = Object.assign({
          'secondDate': 'blue'
        }, weekDayMap[dayMapIndex]);

        if (sameDay(firstDate, secondDate)) {
          delete weekDayMap[dayMapIndex].secondDate;

          weekDayMap[dayMapIndex] = Object.assign({
            'sameDay': 'green'
          }, weekDayMap[dayMapIndex]);
        }

      }

    }
    return weekDayMap;
  }

  return {
    getDayOne: getDay1,
    getDayTwo: getDay2,
    compare: compareDays,
    same:sameDay,
    list: weekDays
  };

}
