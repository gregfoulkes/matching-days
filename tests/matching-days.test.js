describe('Filter registration numbers', function() {
  it('Should return the day Thursday ', function() {
    var callFunction = MatchDays();

    assert.equal(callFunction.getDayOne('05-03-2018'), 'Thursday')

  });

  it('Should return the day Tuesday ', function() {
    var callFunction = MatchDays();

    assert.equal(callFunction.getDayTwo('06-05-2018'), 'Tuesday')

  });
});

describe('Same dates function', function() {
  it('Should return false if days are not the same ', function() {
    var callFunction = MatchDays();


    assert.equal(callFunction.same('Thursday', 'Friday'), false);

  });

  it('Should return true if days are the same ', function() {
    var callFunction = MatchDays();


    assert.equal(callFunction.same('Thursday', 'Thursday'), true);

  });

});

describe('compare dates function', function() {

  it('Should add class {{sameDay}} to corresponding day name of key in object if days are the same ', function() {
    var matchDays = MatchDays();


    var one = matchDays.getDayOne('05/08/2018');
    var two = matchDays.getDayTwo('05/22/2018');

    assert.deepEqual(matchDays.compare(one, two), {

      Sunday: {
        dayValue: "Sunday",
        dayName: "Sunday"
      },
      Monday: {
        dayValue: "Monday",
        dayName: "Monday"
      },
      Tuesday: {
        sameDay: "green",
        dayValue: "Tuesday",
        dayName: "Tuesday"
      },
      Wednesday: {
        dayValue: "Wednesday",
        dayName: "Wednesday"
      },
      Thursday: {
        dayValue: "Thursday",
        dayName: "Thursday"
      },
      Friday: {
        dayValue: "Friday",
        dayName: "Friday"
      },
      Saturday: {
        dayValue: "Saturday",
        dayName: "Saturday"
      }


    });
  });

  it('Should add class {{firstDate}} to corresponding day name of key in object if days are the same ("Wednesday") ', function() {
    var matchDays = MatchDays();


    var one = matchDays.getDayOne('05/09/2018');
    var two = matchDays.getDayTwo(undefined);


    //var formattedWeekDays = matchDays.compare(one, two);


    assert.deepEqual(matchDays.compare(one, two), {

      Sunday: {
        dayValue: "Sunday",
        dayName: "Sunday"
      },
      Monday: {
        dayValue: "Monday",
        dayName: "Monday"
      },
      Tuesday: {
        dayValue: "Tuesday",
        dayName: "Tuesday"
      },
      Wednesday: {
        firstDate: "red",
        dayValue: "Wednesday",
        dayName: "Wednesday"
      },
      Thursday: {
        dayValue: "Thursday",
        dayName: "Thursday"
      },
      Friday: {
        dayValue: "Friday",
        dayName: "Friday"
      },
      Saturday: {
        dayValue: "Saturday",
        dayName: "Saturday"
      }

    });

  });

  it('Should add class {{secondDate}} to corresponding day name of key in the object ("Thursday") ', function() {
    var matchDays = MatchDays();


    var one = matchDays.getDayOne(undefined);
    var two = matchDays.getDayTwo('05/010/2018');


    //var formattedWeekDays = matchDays.compare(one, two);


    assert.deepEqual(matchDays.compare(one, two), {

      Sunday: {
        dayValue: "Sunday",
        dayName: "Sunday"
      },
      Monday: {
        dayValue: "Monday",
        dayName: "Monday"
      },
      Tuesday: {
        dayValue: "Tuesday",
        dayName: "Tuesday"
      },
      Wednesday: {

        dayValue: "Wednesday",
        dayName: "Wednesday"
      },
      Thursday: {
        secondDate: "blue",
        dayValue: "Thursday",
        dayName: "Thursday"
      },
      Friday: {
        dayValue: "Friday",
        dayName: "Friday"
      },
      Saturday: {
        dayValue: "Saturday",
        dayName: "Saturday"
      }

    });

  });

  it('Should add classes {{firstDate}} and {{secondDate}} to corresponding day name of keys in the object ("Wednesday, "Thursday") ', function() {
    var matchDays = MatchDays();


    var one = matchDays.getDayOne('05/09/2018');
    var two = matchDays.getDayTwo('05/10/2018');


    //var formattedWeekDays = matchDays.compare(one, two);


    assert.deepEqual(matchDays.compare(one, two), {

      Sunday: {
        dayValue: "Sunday",
        dayName: "Sunday"
      },
      Monday: {
        dayValue: "Monday",
        dayName: "Monday"
      },
      Tuesday: {
        dayValue: "Tuesday",
        dayName: "Tuesday"
      },
      Wednesday: {
        firstDate: "red",
        dayValue: "Wednesday",
        dayName: "Wednesday"
      },
      Thursday: {
        secondDate: "blue",
        dayValue: "Thursday",
        dayName: "Thursday"
      },
      Friday: {
        dayValue: "Friday",
        dayName: "Friday"
      },
      Saturday: {
        dayValue: "Saturday",
        dayName: "Saturday"
      }

    });

  });
});
