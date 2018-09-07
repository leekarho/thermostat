$( document ).ready(function(){

  var thermostat = new Thermostat();
  $("#display").text(thermostat.temp);

  $( "#up" ).click(function() {
    $('#display').text(thermostat.increaseTemp());
  });

  $( "#down" ).click(function() {
    $('#display').text(thermostat.decreaseTemp());
  });

  $( "#reset" ).click(function() {
    $('#display').text(thermostat.reset());
  });

  $( "input[type=radio]" ).click(function() {
    if (this.id === "psm_on") {
      thermostat.switchPowerSavingModeOn();
      $("#display").text(thermostat.temp);
    } else if (this.id === "psm_off") {
      thermostat.switchPowerSavingModeOff();
    }
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
});
