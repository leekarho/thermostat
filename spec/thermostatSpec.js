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
    expect(thermostat.temp).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('has a max temp of 25 if power saving mode is on', function(){
    thermostat.temp = 25;
    thermostat.switchPowerSavingModeOn();
    thermostat.increaseTemp();
    expect(thermostat.temp).toEqual(25);
  });

  it('has a max temp of 32 degrees if power saving mode is off', function(){
    thermostat.temp = 32;
    thermostat.switchPowerSavingModeOff();
    thermostat.increaseTemp();
    expect(thermostat.temp).toEqual(32);
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
