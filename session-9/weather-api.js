const lon = getRandomLon();
const lat = getRandomLat();

const weatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,snow_depth,wind_direction_10m&timezone=GMT&forecast_days=1`;

const placeNameAPI = `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lon}`

const getWeatherAndPlaceName = async () => {
    try {
        const [weatherRes, placeRes] = await Promise.all([
            fetch(weatherAPI),
            fetch(placeNameAPI)
        ]);

        const weatherData = await weatherRes.json();
        const nameData = await placeRes.json();

        console.log("Weather:", JSON.stringify(weatherData, null, 2));
        console.log("Place name:", JSON.stringify(nameData, null, 2));

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

function getRandomLat() {
    const latitude = (Math.random() * 180 - 90).toFixed(4);
    console.log("Lat:", latitude);
    return latitude;
}

function getRandomLon() {
  const longitude = (Math.random() * 360 - 180).toFixed(4);
  console.log("Lon:", longitude);
  return longitude;
}

getWeatherAndPlaceName();