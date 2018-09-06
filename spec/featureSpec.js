'use strict';

describe('feature test', function(){
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });

  it('increases by 1 degree', function(){
    thermostat.increaseTemp();
    expect(thermostat.temp).toEqual(21)
  });

  it('decreases by 1 degree', function(){
    thermostat.decreaseTemp();
    expect(thermostat.temp).toEqual(19);
  });

});
