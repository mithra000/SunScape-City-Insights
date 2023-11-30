//Header Functionality //
let latitude;
let longitude;
const menuButton = document.getElementById("menuBtn");
const hambargeButton = document.getElementById("hambargBtn");
const cancelButton = document.getElementById("cancelBtn");
const navMenuMobile = document.getElementById("navMenuMobile");
const findMyLocationBtn = document.getElementById("findMyLocationBtn");

menuButton.addEventListener("click", () => {
  hambargeButton.classList.toggle("hambar-btn");
  cancelButton.classList.toggle("cancel-btn");
  navMenuMobile.classList.toggle("nav-menu-mobile");
});

//Search The City //
const searchField = document.getElementById("searchField");
const searchButton = document.getElementById("searchButton");

// searchField.addEventListener("change", (event) => {});
const todayDateObj = new Date();
const tomorrowDateObj = new Date();
tomorrowDateObj.setDate(todayDateObj.getDate() + 1);
console.log(tomorrowDateObj.toLocaleString("en-US"));

//Add Result container//
const addResultsContainer = (todaysData, tomorrowsData, city_name) => {
    
  const contentContainer = document.getElementById("contentContainer");
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const todayFormateDate = todayDateObj.toLocaleDateString("en-US", options);
  const tomorrowFormatDate = tomorrowDateObj.toLocaleDateString(
    "en-US",
    options
  );
  let cityname=city_name
  const createElements = `<div class="explore-container">
          <div>
            <h3 class="sunrise-sunset-heading">
              What Time is Sunrise and Sunset in
              <span>${cityname}</span>
            </h3>
            <p class="sunrise-sunset-description">
              Here are today's sunrise and sunset times in
              <span>${cityname}</span>
            </p>
            <div>
              <div class="sunrise-and-sunset-btn-container">
                <button type="button" class="btn sunrise-btn" id="sunriseButton">
                  Sunrise
                </button>
                <button type="button" class="btn sunset-btn" id="sunsetButton">
                  Sunset
                </button>
              </div>
              <div id="sunriseContainer">
                <div class="sunrise-container">
                  <div class="sunrise-content-container sunrise-background">
                    <p class="timezone">TimeZone: ${todaysData.timezone}</p>
                    <h5 class="day-heading">Today</h5>
                    <p class="date">${todayFormateDate}</p>
                    <h5 class="day-type-heading">Sunrise</h5>
                    <img
                      src=${"./Images/sunrise-5.svg"}
                      alt="sunImage"
                      class="sun-image"
                    />
                    <p class="day-type-time">${todaysData.sunrise}</p>
                    <p class="first-day-type-time">dawn: ${todaysData.dawn}</p>
                    <p class="day-type-description">
                      Sunrise today in <span>${cityname}</span> was at
                      ${todaysData.sunrise} cdt
                    </p>
                    <div class="day-length-solar-container">
                      <p class="day-length">Day length: ${
                        todaysData.day_length
                      }</p>
                      <p class="solar-noon">Solar Noon: ${
                        todaysData.solar_noon
                      }</p>
                    </div>
                  </div>
                </div>
                <div class="sunrise-container">
                  <div class="sunrise-content-container sunrise-background">
                    <p class="timezone">TimeZone: ${tomorrowsData.timezone}</p>
                    <h5 class="day-heading">Tomorrow</h5>
                    <p class="date">${tomorrowFormatDate}</p>
                    <h5 class="day-type-heading">Sunrise</h5>
                    <img
                      src=${"./Images/sunrise-5.svg"}
                      alt="sunImage"
                      class="sun-image"
                    />
                    <p class="day-type-time">${tomorrowsData.sunrise}</p>
                    <p class="first-day-type-time">dawn: ${
                      tomorrowsData.dawn
                    }</p>
                    <p class="day-type-description">
                      Sunrise tomorrow in <span>${
                        cityname
                      }</span> will be at
                      ${tomorrowsData.sunrise} cdt
                    </p>
                    <div class="day-length-solar-container">
                      <p class="day-length">Day length: ${
                        tomorrowsData.day_length
                      }</p>
                      <p class="solar-noon">Solar Noon: ${
                        tomorrowsData.solar_noon
                      }</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="sunsetContainer" class="sunset-main-container">
                <div class="sunrise-container">
                  <div class="sunrise-content-container sunset-background">
                    <p class="timezone">TimeZone: ${todaysData.timezone}</p>
                    <h5 class="day-heading">Today</h5>
                    <p class="date">${todayFormateDate}</p>
                    <h5 class="day-type-heading">Sunset</h5>
                    <img
                      src=${"./Images/sunset-5.svg"}
                      alt="sunImage"
                      class="sun-image"
                    />
                    <p class="day-type-time">${todaysData.sunset}</p>
                    <p class="first-day-type-time">dusk: ${todaysData.dusk}</p>
                    <p class="day-type-description">
                      Sunset Today in <span>${
                        cityname
                      }</span> will be at ${todaysData.sunset}
                      cdt
                    </p>
                    <div class="day-length-solar-container">
                      <p class="day-length">Day length: ${
                        todaysData.day_length
                      }</p>
                      <p class="solar-noon">Solar Noon: ${
                        todaysData.solar_noon
                      }</p>
                    </div>
                  </div>
                </div>
                <div class="sunrise-container">
                  <div class="sunrise-content-container sunset-background">
                    <p class="timezone">TimeZone: ${tomorrowsData.timezone}</p>
                    <h5 class="day-heading">Tomorrow</h5>
                    <p class="date">${tomorrowFormatDate}</p>
                    <h5 class="day-type-heading">Sunset</h5>
                    <img
                      src=${"./Images/sunset-5.svg"}
                      alt="sunImage"
                      class="sun-image"
                    />
                    <p class="day-type-time">${tomorrowsData.sunset}</p>
                    <p class="first-day-type-time">dusk: ${
                      tomorrowsData.dusk
                    }</p>
                    <p class="day-type-description">
                      Sunset tomorrow in <span>${
                        cityname
                      }</span> will be at ${tomorrowsData.sunset}
                      cdt
                    </p>
                    <div class="day-length-solar-container">
                      <p class="day-length">Day length: ${
                        tomorrowsData.day_length
                      }</p>
                      <p class="solar-noon">Solar Noon: ${
                        tomorrowsData.solar_noon
                      }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  contentContainer.innerHTML = createElements;
  const sunriseContainer = document.getElementById("sunriseContainer");
  const sunsetContainer = document.getElementById("sunsetContainer");
  const sunriseButton = document.getElementById("sunriseButton");
  const sunsetButton = document.getElementById("sunsetButton");

  sunriseButton.addEventListener("click", () => {
    sunriseContainer.classList.remove("sunrise-main-container");
    sunsetContainer.classList.add("sunset-main-container");
  });

  sunsetButton.addEventListener("click", () => {
    sunriseContainer.classList.add("sunrise-main-container");
    sunsetContainer.classList.remove("sunset-main-container");
  });
};

const getTodaySunsetAndSunriseData = async () => {
  if (latitude === undefined && longitude === undefined) {
    alert("this is from sunrise sunset : Something went wrong");
  } else {
    try {
      const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;
      const option = {
        method: "GET",
      };
      const response = await fetch(url, option);
      const data = await response.json();
      const todaysDay = data.results;
      return todaysDay;
    } catch (error) {
      alert("Something went wrong");
    }
  }
};

const getTomorrowSunriseAndSunsetData = async () => {
  const formateDate = `${tomorrowDateObj.getFullYear()}-${tomorrowDateObj.getMonth()}-${tomorrowDateObj.getDate()}`;
  if (latitude === undefined && longitude === undefined) {
    alert("Someting Went wrong");
  } else {
    try {
      const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&timezone=cdt&date=${formateDate}`;
      const option = {
        method: "GET",
      };
      const response = await fetch(url, option);
      const data = await response.json();
      const tomorrowsData = data.results;
      return tomorrowsData;
    } catch (error) {
      alert("Something went wrong");
    }
  }
};

const gettingLatitudeAndLongitudeOfCity = async () => {
  try {
    const cityName = searchField.value;

    const url = `https://geocode.maps.co/search?q=${cityName}`;
    const option = {
      method: "GET",
    };
    const response = await fetch(url, option);
    const data = await response.json();
    if (data.length === 0) {
      console.log(data);
      alert("No city is found");
    } else {
      latitude = data[0].lat;
      longitude = data[0].lon;
      const todaysData = await getTodaySunsetAndSunriseData();
      const tomorrowsData = await getTomorrowSunriseAndSunsetData();
      addResultsContainer(todaysData, tomorrowsData, searchField.value);
    }
    // window.location.href = "/sample.html";
  } catch (error) {
    alert("This from geolocation : Something went wrong");
  }
};

searchButton.addEventListener("click", () => {
  if (searchField.value === "") {
    alert("Please enter cityname in search field");
  } else {
    gettingLatitudeAndLongitudeOfCity();
  }
});

searchField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    gettingLatitudeAndLongitudeOfCity();
  }
});
//Add Current Location Button

function getGeoLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      reverseGeocode(latitude, longitude);
    },
    (error) => {
      alert("Something went wrong");
    }
  );
}



findMyLocationBtn.addEventListener("click", () => {
  getGeoLocation();
});

async function handleGeolocationSuccess(city_name) {
  const todaysData = await getTodaySunsetAndSunriseData();
  const tomorrowsData = await getTomorrowSunriseAndSunsetData();
    
  addResultsContainer(todaysData, tomorrowsData, city_name);
}

const largeFindMyLocationLink = document.getElementById("largeFindMyLocation");
const mobileFindMyLocationLink = document.getElementById(
  "mobileFindMyLocation"
);

largeFindMyLocationLink.addEventListener("click", () => {
  getGeoLocation();
});

mobileFindMyLocationLink.addEventListener("click", () => {
  getGeoLocation();
});


function reverseGeocode(latitude, longitude) {
  const apiUrl = `https://geocode.maps.co/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

  // Make a request to the OpenStreetMap Nominatim API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract city name from the API response
      const cityName = data.address.city;

      // Now you can use the cityName as needed
      handleGeolocationSuccess(cityName);
    })
    .catch((error) => {
      console.error('Error fetching data from Nominatim API', error);
    });
}


