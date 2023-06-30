
const temperatureInput = document.getElementById('temperature-input');
const unitSelect = document.getElementById('unit-select');
const convertButton = document.getElementById('convert-button');
const convertedTemperature = document.getElementById('converted-temperature');

// Conversion functions
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convertCelsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function convertKelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function convertFahrenheitToKelvin(fahrenheit) {
  const celsius = convertFahrenheitToCelsius(fahrenheit);
  return convertCelsiusToKelvin(celsius);
}

function convertKelvinToFahrenheit(kelvin) {
  const celsius = convertKelvinToCelsius(kelvin);
  return convertCelsiusToFahrenheit(celsius);
}

// Event listener for the convert button
convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);

  if (isNaN(temperature)) {
    convertedTemperature.textContent = 'Invalid input';
    return;
  }

  const selectedUnit = unitSelect.value;

  let convertedTemp;
  let convertedUnit;

  if (selectedUnit === 'celsius') {
    convertedTemp = temperature;
    convertedUnit = '°C';
  } else if (selectedUnit === 'fahrenheit') {
    convertedTemp = convertFahrenheitToCelsius(temperature);
    convertedUnit = 'F';
  } else if (selectedUnit === 'kelvin') {
    convertedTemp = convertKelvinToCelsius(temperature);
    convertedUnit = 'K';
  }

  convertedTemperature.textContent = `${convertedTemp.toFixed(2)} ${convertedUnit}`;
});