function convertTemp() {
    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;
    let convertedTemp;
    if (isNaN(temp)) {
      alert("Please enter a valid temperature");
      return;
    }
    if (unit === "celsius") {
      convertedTemp = (temp * 1.8) + 32;
      document.getElementById("converted").innerHTML = `${convertedTemp.toFixed(2)}&deg;F`;
    } else if (unit === "fahrenheit") {
      convertedTemp = (temp - 32) * 5/9;
      document.getElementById("converted").innerHTML = `${convertedTemp.toFixed(2)}&deg;C`;
    } else if (unit === "kelvin") {
      convertedTemp = parseFloat(temp) - 273.15;
      document.getElementById("converted").innerHTML = `${convertedTemp.toFixed(2)}&deg;C`;
    }
  }
  