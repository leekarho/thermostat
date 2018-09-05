function Thermostat(){
  this.temp = DEFAULT_TEMP;
  this.isPowerSaving = true;
}

const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;
const MAX_TEMP = 32;
const MAX_POWER_SAVING_TEMP = 25;


Thermostat.prototype.increaseTemp = function () {
  if((this.isPowerSaving) && (this.temp === MAX_POWER_SAVING_TEMP)) {
    throw new Error('power saving on 25 degrees is the max temp');
  }
  else if(this.temp === MAX_TEMP) {
    throw new Error('this is the max temp');
  }
  return this.temp += 1;
};

Thermostat.prototype.decreaseTemp = function () {
  if(this.temp === MIN_TEMP) {
    throw new Error('this is already the min temp');
  }
  return this.temp -= 1;
};

// Thermostat.prototype.powerSavingOff = function (){
//   return this.isPowerSaving = false
// };

Thermostat.prototype.reset = function() {
  return this.temp = DEFAULT_TEMP;
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
