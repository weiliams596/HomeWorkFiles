const openweatherIconApi = "http://openweathermap.org/img/w/";
const weathersApi = "https://api.openweathermap.org/data/2.5/weather?";
const lang = "&lang=ru"
const apiKey = "&appid=e3ad77404dc88bee59f4a50942c3dbc6";

const mainDoc = document.getElementById("show-list");
const localWeather = document.getElementById("local-weather");


const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click",async () => {
    cleanAllInfo();
    const city = document.getElementById("search-input");
    await showOnceWeather( await getWeather(city.value));
});


const localWeatherBtn = document.getElementById("choose-almaty");
const allcitiesBtn = document.getElementById("choose-all-city");

localWeatherBtn.addEventListener("click", async () => {
    cleanAllInfo();
    await showOnceWeather(await getWeather("Almaty"));
});

allcitiesBtn.addEventListener("click", async () => {
    cleanAllInfo();
    await initArrayOfCities();
});

let allInfo = [];
const Kazakhstan = [];

function cleanAllInfo() {
    allInfo = [];
    mainDoc.innerHTML = "";
};

const initArrayOfCities = async () => {
    try {
        const response = await fetch("Assets/JSON/Kazakhstan.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        Kazakhstan.push(...data.cities);
        for (let i = 0; i < Kazakhstan.length; i++) {
            await getWeather(Kazakhstan[i]);
        }
        showWeathers();
    }
    catch (error) {
        console.error(error);
    }
};

async function showOnceWeather(info) {
    cleanAllInfo();
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.innerHTML = `
                <p class="city-name">${info.city}</p>
                <img src="${info.iconUrl}" alt="${info.description}">
                <p class="temp">${info.temp}°C</p>
                <p class="weather-description">${info.description}</p>
                <div class="other-info">
                    <p class="time">Күншығу: ${new Date(info.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p class="time">Күнбату: ${new Date(info.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>`;
    mainDoc.appendChild(newDiv);
}

function showWeathers() {
    allInfo.forEach(info => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("card");
        newDiv.innerHTML = `
                <p class="city-name">${info.city}</p>
                <img src="${info.iconUrl}" alt="${info.description}">
                <p class="temp">${info.temp}°C</p>
                <p class="weather-description">${info.description}</p>
                <div class="other-info">
                    <p class="time">Күншығу: ${new Date(info.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p class="time">Күнбату: ${new Date(info.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>`;
        mainDoc.appendChild(newDiv);
    });

}


async function getWeather(city) {
    const url = weathersApi + "q=" + city + apiKey + "&units=metric" + lang;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const iconUrl = openweatherIconApi + data.weather[0].icon + ".png";
        const temptInfo = {};
        temptInfo.iconUrl = iconUrl;
        temptInfo.city = data.name;
        temptInfo.temp = data.main.temp;
        temptInfo.description = data.weather[0].description;
        temptInfo.sys = data.sys;
        console.log(temptInfo);
        allInfo.push(temptInfo);
        return temptInfo;
    }
    catch (error) {
        console.error(error);
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

async function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = weathersApi + "lon=" + lon + "&lat=" + lat + apiKey + "&units=metric" + lang;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const iconUrl = openweatherIconApi + data.weather[0].icon + ".png";
        localWeather.innerHTML = `<img class="local-icons" src="${iconUrl}" alt="${data.weather[0].description}"> <p>${data.weather[0].description}</p>
        <p class="local-temp">${data.main.temp}°C</p>`;
    }
    catch (error) {
        console.error(error);
    }
}

getLocation();
