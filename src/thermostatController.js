$( document ).ready(function(){

  var thermostat = new Thermostat();
  document.getElementById("display").innerHTML = thermostat.temp

  $( "#up" ).click(function( event ) {
    $('#display').text(thermostat.increaseTemp());
  });

  $( "#down" ).click(function( event ) {
    $('#display').text(thermostat.decreaseTemp());
  });

  $( "#reset" ).click(function( event ) {
    $('#display').text(thermostat.reset());
  });

  $( "input[type=radio]" ).click(function( event ) {
    if (this.id === "psm_on") {
      thermostat.switchPowerSavingModeOn();
    } else if (this.id === "psm_off") {
      thermostat.switchPowerSavingModeOff();
    }
  });


});
