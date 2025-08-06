// Weather APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "3031ce2fe5d9b0eeb96c036dadc5d55c";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError("Please enter a City");
        return;
    }

});
async function getWeatherData(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiurl);
    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}
function displayWeatherInfo(data) {
    const { name: city,
            main: { temp, humidity }, 
            weather: [{ description, id }] } = data;
    card.textContent = ""; // Clear previous content
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("p");

    cityDisplay.textContent= city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);

    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");
    card.appendChild(descDisplay);

    emojiDisplay.textContent = getWeatherEmoji(id);
    emojiDisplay.classList.add("emojiDisplay");
    card.appendChild(emojiDisplay);

}
function getWeatherEmoji(weatherId) {
    switch(true){
        case(weatherId >= 200 && weatherId < 300):
        return "🌩️";
        case(weatherId >= 300 && weatherId < 400):
        return "🌧️";
        case(weatherId >= 500 && weatherId < 600):
        return "🌧️";
        case(weatherId >= 600 && weatherId < 700):
        return "❄️";
        case(weatherId >= 700 && weatherId < 800):
        return "🌫️";
        case(weatherId === 800):
        return "☀️";
        case(weatherId > 801 && weatherId < 810):
        return "🌤️";
        default:
            return "🌈";
    }

}
function displayError(message) {
    const errorDisplay = document.createElement("p");// Create a new paragraph element for the error message
    errorDisplay.textContent = message;// Set the error message
    errorDisplay.classList.add("errorDisplay");// Add a class for styling
    card.textContent = ""; // Clear previous content
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}