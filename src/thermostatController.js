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

  $( "input[name=powersaving]" ).click(function() {
    if (this.id === "psm_on") {
      thermostat.switchPowerSavingModeOn();
      $("#display").text(thermostat.temp);
    }
    else if (this.id === "psm_off") {
      thermostat.switchPowerSavingModeOff();
    }
  });

  $( "input[name=city]" ).click(function() {
    var urlPartOne = 'http://api.openweathermap.org/data/2.5/weather?id='
    var city = this.id
    var urlPartThree = '&units=metric&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
    $.get(`${urlPartOne}${city}${urlPartThree}`, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  });
});
