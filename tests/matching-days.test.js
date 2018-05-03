describe('Filter registration numbers', function() {
  it('Should return registrations from Cape Town only ', function() {
    var callFunction = RegFunction();

    callFunction.addRegistration('CA 1234')
    callFunction.addRegistration('CA 4321')
    callFunction.addRegistration('CAW 4321')
    callFunction.addRegistration('CD 4321')

    assert.deepEqual(callFunction.filterReg('CA '), ['CA 1234', 'CA 4321'])

  });
});
