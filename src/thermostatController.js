$( document ).ready(function(){

  var thermostat = new Thermostat();
  document.getElementById("display").innerHTML = thermostat.temp

  $( "#up" ).click(function( event ) {
    console.log(thermostat)
    document.getElementById("display").innerHTML = thermostat.increaseTemp();
  });

  $( "#down" ).click(function( event ) {
    document.getElementById("display").innerHTML = thermostat.decreaseTemp();
  });

  $( "#reset" ).click(function( event ) {
    document.getElementById("display").innerHTML = thermostat.reset();
  });

  $( "input[type=radio]" ).click(function( event ) {
    if (this.id === "psm_on") {
      thermostat.switchPowerSavingModeOn();
      console.log(thermostat.powerSavingMode);
    } else if (this.id === "psm_off") {
      thermostat.switchPowerSavingModeOff();
      console.log(thermostat.powerSavingMode);
    }
  });


});
