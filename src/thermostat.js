'use strict';

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_PSM_OFF = 32;
  this.MAX_PSM_ON = 25;
  this.temp = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype.increaseTemp = function () {
  if (this.temp >= this.isMaximumTemperature()) {
    return this.temp = this.isMaximumTemperature();
  }
  return this.temp += 1;
};

Thermostat.prototype.decreaseTemp = function () {
  if(this.temp === this.MIN_TEMP) {
    return this.temp;
  }
  return this.temp -= 1;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.MAX_PSM_OFF;
  }
  return this.MAX_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
  if (this.temp >= this.isMaximumTemperature()) {
    this.temp = this.isMaximumTemperature();
  }
};

Thermostat.prototype.reset = function() {
  return this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function(temp) {
  if (temp < 18) {
    return 'low-usage';
  } else if (temp < 25){
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
