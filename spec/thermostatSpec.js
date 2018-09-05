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
    thermostat.increaseTemp();
    expect(thermostat.temp).toEqual(21);
  });

  it('decreases by 1 degree', function(){
    thermostat.decreaseTemp();
    expect(thermostat.temp).toEqual(19);
  });

  it('has a minimum temp of 10 degrees', function() {
    thermostat.temp = 10;
    expect(function(){ thermostat.decreaseTemp(); }).toThrowError('this is already the min temp');
  });

  it('has a max temp of 25 if power saving mode is on', function(){
    thermostat.temp = 25;
    spyOn(thermostat,'isPowerSaving').and.returnValue(true);
    expect(function(){ thermostat.increaseTemp(); }).toThrowError('power saving on 25 degrees is the max temp');
  });

  it('has a max temp of 32 degrees if power saving mode is off', function(){
    thermostat.temp = 32;
  //  spyOn(thermostat,'isPowerSaving').and.returnValue(false);
    expect(function(){ thermostat.increaseTemp(); }).toThrowError('this is the max temp') ;
  });

  it('has a temp of 20 degrees if reset option chosen', function(){
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  });

  describe('energy usage', function(){
    it('has current energy usage of low-usage', function(){
      thermostat.temp = 15
      expect(thermostat.energyUsage(thermostat.temp)).toEqual('low-usage');
    });

    it('has current energy usage of medium-usage', function(){
      thermostat.temp = 21
      expect(thermostat.energyUsage(thermostat.temp)).toEqual('medium-usage');
    });

    it('has current energy usage of high-usage', function(){
      thermostat.temp = 31
      expect(thermostat.energyUsage(thermostat.temp)).toEqual('high-usage');
    });
  });


});
