const convertToCelsius = function(fahrenheit) {
  let FtoC = (fahrenheit-32)*(5/9)
  FtoC = parseFloat(FtoC.toFixed(1))
  console.log(FtoC)
  return FtoC

};

const convertToFahrenheit = function(Celsius) {
  let CtoF = (Celsius*(9/5))+32
  console.log(CtoF)
  return CtoF

};



convertToCelsius(32) // fahrenheit to celsius, should return 0
convertToCelsius(100) 

convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// Do not edit below this line

/* Number. prototype. toFixed()  */
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
