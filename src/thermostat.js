function Thermostat(){
  this.temp = DEFAULT_TEMP;

}

const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;

Thermostat.prototype.increaseTemp = function () {
  return this.temp += 1;
};

Thermostat.prototype.decreaseTemp = function () {
  if(this.temp === MIN_TEMP) {
    throw new Error('this is already the min temp');
  }
  return this.temp -= 1;
};
