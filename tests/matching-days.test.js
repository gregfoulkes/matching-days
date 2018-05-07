describe('Filter registration numbers', function() {
  it('Should return Thursday ', function() {
    var callFunction = MatchDays();

    assert.equal(callFunction.getDayOne('05-03-2018'), 'Thursday')

  });

  it('Should return Tuesday ', function() {
    var callFunction = MatchDays();

    assert.equal(callFunction.getDayTwo('06-05-2018'), 'Tuesday')

  });
});

describe('compare dates function', function() {
  it('Should return Thursday ', function() {
    var callFunction = MatchDays();


    assert.equal(callFunction.compare('Thursday', 'Friday'),
      'Thursday'
    );

  });
});
