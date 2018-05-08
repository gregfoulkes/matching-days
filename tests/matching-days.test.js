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


    assert.equal(callFunction.same('Thursday', 'Friday'),false);

  });

  it('Should return true if days are the same ', function() {
    var callFunction = MatchDays();


    assert.equal(callFunction.same('Thursday', 'Thursday'),true);

  });

  it('Should return true if days are the same ', function() {
    var matchDays = MatchDays();

    matchDays.getDay1('08/05/2018');
    matchDays.getDay2('22/05/2018');

    var formattedWeekDays = matchDays.compare();

    /*
    [{
      day : "",
      style : ""
    }, {
      day : "",
      style : ""
    }, {
      day : "",
      style : ""
    }]
    */
    
    var wednesday = formattedWeekDays[2];
    wednesday.day === "Wednesday";
    wednesday.style  === "green";


    //assert.equal(matchDays.same('Thursday', 'Thursday'),true);

  });
});
