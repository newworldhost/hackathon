document.addEventListener('DOMContentLoaded', function () {
    // Function to display an interactive map
    function showInteractiveMap(lat, lon) {
        const mapElement = document.getElementById('map');

        // Initialize Google Map
        const map = new google.maps.Map(mapElement, {
            center: {
                lat: lat,
                lng: lon
            },
            zoom: 13
        });

        // Place a marker on the map
        const marker = new google.maps.Marker({
            position: {
                lat: lat,
                lng: lon
            },
            map: map,
            title: 'Location'
        });
    }

    // Function to determine condition class based on weather main description
    function getConditionClass(weatherMain) {
        switch (weatherMain.toLowerCase()) {
            case 'clear':
                return 'sunny';
            case 'clouds':
                return 'cloudy';
            case 'rain':
                return 'rainy';
            case 'snow':
                return 'snowy';
            default:
                return ''; // Default to no specific class
        }
    }

    // Initially hide the map and weather output
    document.getElementById('weatherOutput').style.display = 'none';

    // Event listener for fetching weather data by city name
    document.getElementById('getWeather').addEventListener('click', async function () {
        const city = document.getElementById('cityInput').value.trim();
        const apiKey = '5a316685d647b85aa0f6c878e0ba40a6'; // OpenWeather API key
        const weatherOutput = document.getElementById('weatherOutput');

        if (!city) {
            weatherOutput.textContent = 'Please enter a city name.';
            return;
        }

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            // Check if the API call was successful
            if (data.cod !== 200) {
                weatherOutput.innerHTML = `<strong>Error:</strong> ${data.message}`;
            } else {
                const {
                    weather,
                    main,
                    wind,
                    clouds,
                    sys,
                    name,
                    coord
                } = data;

                // Display the interactive map with coordinates
                showInteractiveMap(coord.lat, coord.lon);

                // Determine the condition class
                const conditionClass = getConditionClass(weather[0].main);

                // Build the weather report
                weatherOutput.style.display = 'block'; // Show weather output
                weatherOutput.classList.add('show'); // Apply fade-in effect

                weatherOutput.innerHTML = ` 
                    <div class="weather-card ${conditionClass}">
                        <h3>Weather in ${name}, ${sys.country}</h3>
                        <div class="d-flex align-items-center">
                            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
                            <p><strong>Condition:</strong> ${weather[0].main} (${weather[0].description})</p>
                        </div>
                        <p class="temperature">${main.temp}°C</p>
                        <p><strong>Feels like:</strong> ${main.feels_like}°C</p>
                        <p><strong>Min/Max:</strong> ${main.temp_min}°C / ${main.temp_max}°C</p>
                        <p><strong>Humidity:</strong> ${main.humidity}%</p>
                        <p><strong>Pressure:</strong> ${main.pressure} hPa</p>
                        <p><strong>Visibility:</strong> ${data.visibility / 1000} km</p>
                        <p><strong>Wind:</strong> ${wind.speed} m/s at ${wind.deg}°</p>
                        <p><strong>Cloudiness:</strong> ${clouds.all}%</p>
                        <p><strong>Sunrise:</strong> ${new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
                        <p><strong>Sunset:</strong> ${new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
                    </div>
                `;
            }
        } catch (error) {
            weatherOutput.textContent = `An error occurred: ${error.message}`;
        }
    });

    // Event listener for fetching weather data by current location
    document.getElementById('getCurrentLocationWeather').addEventListener('click', function () {
        const apiKey = '5a316685d647b85aa0f6c878e0ba40a6'; // OpenWeather API key
        const weatherOutput = document.getElementById('weatherOutput');

        if (!navigator.geolocation) {
            weatherOutput.textContent = 'Geolocation is not supported by your browser.';
            return;
        }

        // Get the current location of the user
        navigator.geolocation.getCurrentPosition(async function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
                    const data = await response.json();

                    // Check if the API call was successful
                    if (data.cod !== 200) {
                        weatherOutput.innerHTML = `<strong>Error:</strong> ${data.message}`;
                    } else {
                        const {
                            weather,
                            main,
                            wind,
                            clouds,
                            sys,
                            name,
                            coord
                        } = data;

                        // Display the interactive map with coordinates
                        showInteractiveMap(coord.lat, coord.lon);

                        // Determine the condition class
                        const conditionClass = getConditionClass(weather[0].main);

                        // Build the weather report
                        weatherOutput.style.display = 'block'; // Show weather output
                        weatherOutput.classList.add('show'); // Apply fade-in effect

                        weatherOutput.innerHTML = ` 
                            <div class="weather-card ${conditionClass}">
                                <h3>Weather in ${name}, ${sys.country}</h3>
                                <div class="d-flex align-items-center">
                                    <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
                                    <p><strong>Condition:</strong> ${weather[0].main} (${weather[0].description})</p>
                                </div>
                                <p class="temperature">${main.temp}°C</p>
                                <p><strong>Feels like:</strong> ${main.feels_like}°C</p>
                                <p><strong>Min/Max:</strong> ${main.temp_min}°C / ${main.temp_max}°C</p>
                                <p><strong>Humidity:</strong> ${main.humidity}%</p>
                                <p><strong>Pressure:</strong> ${main.pressure} hPa</p>
                                <p><strong>Visibility:</strong> ${data.visibility / 1000} km</p>
                                <p><strong>Wind:</strong> ${wind.speed} m/s at ${wind.deg}°</p>
                                <p><strong>Cloudiness:</strong> ${clouds.all}%</p>
                                <p><strong>Sunrise:</strong> ${new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
                                <p><strong>Sunset:</strong> ${new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
                            </div>
                        `;
                    }
                } catch (error) {
                    weatherOutput.textContent = `An error occurred: ${error.message}`;
                }
            },
            function (error) {
                weatherOutput.textContent = `Error getting location: ${error.message}`;
            });
    });

    // Toggle weather app visibility
    document.getElementById('weatherAppButton').addEventListener('click', function () {
        const weatherApp = document.getElementById('weatherApp');
        weatherApp.style.display = weatherApp.style.display === 'none' ? 'block' : 'none';
    });
});

// Navbar Sticky Function
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});