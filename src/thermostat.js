function Thermostat(){
  this.temp = 20;

}

Thermostat.prototype.increaseTemp = function () {
  return this.temp += 1;
};
