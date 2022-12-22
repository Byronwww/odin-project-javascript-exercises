const convertToCelsius = function(tempFahrenheit) {

  var convertedTempCelsius;
  convertedTempCelsius = (tempFahrenheit - 32) * 0.55555555555;  
  console.log(convertedTempCelsius);
  return Math.round(convertedTempCelsius * 10) / 10 ;
};


const convertToFahrenheit = function(tempCelsius) {

  var convertedTempFahrenheit;
  convertedTempFahrenheit = (tempCelsius / 0.55555555555) + 32;
  console.log(convertedTempFahrenheit);
  return Math.round(convertedTempFahrenheit * 10) / 10 ;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
}
