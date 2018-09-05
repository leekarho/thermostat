'use strict'

describe('thermostat', function(){
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });

  it('increases by 1 degree', function(){
    thermostat.increaseTemp(20);
    expect(thermostat.temp).toEqual(21)
  });
});