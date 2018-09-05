function Thermostat(){}

const DEFAULT_TEMP = 20

Thermostat.prototype.temp = function(num = DEFAULT_TEMP){
  return num;
};
