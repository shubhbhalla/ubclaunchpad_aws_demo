async function getWeather() {
  const lat = document.getElementById("latInput").value;
  const lon = document.getElementById("lonInput").value;
  if (!lat || !lon) {
    alert("Please enter latitude and longitude");
    return;
  }

  const endpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=714b20f5e9374f63810a501421cfe83c`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    // Assuming the Lambda function returns the temperature, description, etc.
    const result = `
            <h2>Timezone is ${data.timezone}</h2>
            <p>Temperature: ${data.current.temp}°C</p>
            <p>Condition: ${data.current.weather[0].description}</p>
        `;

    document.getElementById("weatherResult").innerHTML = result;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weatherResult").innerHTML =
      "<p>Error fetching weather data. Please try again.</p>";
  }
}
