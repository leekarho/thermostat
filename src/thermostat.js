function Thermostat(){
  this.temp = 20;

}

Thermostat.prototype.increaseTemp = function () {
  return this.temp += 1;
};

Thermostat.prototype.decreaseTemp = function () {
  return this.temp -= 1;
};
