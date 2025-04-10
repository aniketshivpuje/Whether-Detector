async function getWeather() {
    const city = document.getElementById("city-input").value;
    const apiKey = "8cc74872a6ef4c5f804131348250904"; // Make sure this is your correct key
  
    if (!city) {
      alert("Please enter a city name!");
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      console.log("Status:", response.status); // ✅ Debug
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      console.log(data); // ✅ Debug
  
      document.getElementById("weather-result").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
    } catch (error) {
      document.getElementById("weather-result").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  }
  