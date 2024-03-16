async function getWeather() {
  const lat = document.getElementById("latInput").value;
  const lon = document.getElementById("lonInput").value;
  if (!lat || !lon) {
    alert("Please enter latitude and longitude");
    return;
  }

  const endpoint = `your-api-endpoint?lat=${lat}&lon=${lon}`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    // Assuming the Lambda function returns the temperature, description, etc.
    const result = `
            <h2>Timezone is ${data.timezone}</h2>
            <p>Temperature: ${data.current.temp} Kelvin</p>
            <p>Condition: ${data.current.weather[0].description}</p>
        `;

    document.getElementById("weatherResult").innerHTML = result;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weatherResult").innerHTML =
      "<p>Error fetching weather data. Please try again.</p>";
  }
}
