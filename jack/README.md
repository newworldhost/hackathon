# K&JJJ Weather App

![rmintro](https://github.com/user-attachments/assets/4bc5a16c-f96b-4069-a1c6-008bb0b66ec6)



This Weather App allows users to easily view current weather conditions based on either their **city** or **current location**. The app provides detailed weather information such as temperature, humidity, wind speed, and more. It also integrates an **interactive map** to visualize the selected location.

## User Stories

### **User Story 1: Search Weather by City**

**As a** user,  
**I want to** be able to search for weather by city name,  
**so that** I can see the current weather conditions for a specific location.

#### **Acceptance Criteria:**
- The user can enter a city name in a text input field.
- The user can click a "Get Weather" button to fetch the weather.
- After submitting, the current weather conditions (temperature, humidity, wind speed, etc.) should be displayed.
- An error message is shown if the city is invalid or not found.

#### **Tasks:**
- [x] Create an input field for the user to enter the city name.
- [x] Add a button to trigger the weather search.
- [x] Fetch weather data from the OpenWeather API using the city name.
- [x] Display the fetched weather information (temperature, conditions, humidity, etc.).
- [x] Handle error cases for invalid or non-existent cities (e.g., "City not found" message).

---

### **User Story 2: Display Current Location Weather**

**As a** user,  
**I want to** view the weather based on my current location,  
**so that** I don’t have to manually enter a city name.

#### **Acceptance Criteria:**
- The user can click a "Get Current Location Weather" button.
- The app fetches the current weather based on the user's geolocation.
- The weather report is displayed with the same details as the city search (temperature, conditions, humidity, etc.).
- An error message is shown if geolocation is not supported or the user denies location access.

#### **Tasks:**
- [x] Add a button to get the current location weather.
- [x] Use the browser's geolocation API to get the user's current latitude and longitude.
- [x] Fetch the weather data for the user's location from the OpenWeather API.
- [x] Display the weather data for the user's current location.
- [x] Handle errors related to geolocation permissions or unsupported browsers.

---

### **User Story 3: Display Interactive Map**

**As a** user,  
**I want to** see an interactive map showing the location of the weather report,  
**so that** I can visually locate where the weather is being reported.

#### **Acceptance Criteria:**
- The map should be shown after weather data is fetched.
- The map should be centered on the location for which the weather is reported.
- A marker should be placed on the map to indicate the location.

#### **Tasks:**
- [x] Integrate Google Maps or another mapping service into the page.
- [x] Center the map on the location (city or user's current location) after fetching weather data.
- [x] Add a marker to the map showing the location.
- [x] Ensure the map is responsive and fits within the layout.

---

### **User Story 4: Show Weather Details with a Visual Indicator**

**As a** user,  
**I want to** see the weather displayed with visual indicators (icons or background colors),  
**so that** I can quickly identify the weather conditions.

#### **Acceptance Criteria:**
- Weather conditions should be accompanied by an appropriate icon (e.g., sun for clear weather, clouds for cloudy weather, etc.).
- The background or card containing the weather should have a color theme based on the weather type (e.g., sunny = yellow, rainy = blue).
- The temperature should be prominently displayed.

#### **Tasks:**
- [x] Add weather icons to the report (e.g., sun, cloud, rain, snow).
- [x] Change the background color of the weather card depending on the weather condition (e.g., light yellow for sunny).
- [x] Style the temperature text to make it prominent.
- [x] Ensure that the icons and backgrounds are responsive and adjust to different screen sizes.

## Wireframe
Below displays the basic wireframe that justifies the content structure and implementation of my weather app.
![remwf1](https://github.com/user-attachments/assets/65c8a224-19f7-483f-b883-a9a867d96c57) ![rmwf2](https://github.com/user-attachments/assets/d87c433b-948f-45d7-ba60-570f40338a59)




## Features

### 1. **Weather Information by City or Current Location**
![app search bar](https://github.com/user-attachments/assets/87c583c1-f44b-4bf0-ba3c-14d0d8b272bf)


   - **City Weather**: Users can search for weather information by entering the name of a city.
   - **Current Location Weather**: Users can get weather data based on their current geographic location using the browser's geolocation API.

### 2. **Comprehensive Weather Data**
![weatherinfo](https://github.com/user-attachments/assets/5aa8b692-f579-48ad-881c-9b17bd621c83)

   Once the weather data is fetched, the app provides:
   - **Temperature** (in Celsius)
   - **Feels Like**: Shows how the temperature feels to the human body.
   - **Min/Max Temperature**: Minimum and maximum temperatures for the day.
   - **Humidity**: The percentage of humidity in the air.
   - **Pressure**: Atmospheric pressure in hPa (hectopascals).
   - **Visibility**: Distance (in kilometers) that can be seen, accounting for weather conditions.
   - **Wind Speed and Direction**: The speed of the wind (in meters per second) and the wind's direction (in degrees).
   - **Cloudiness**: Percentage of cloud coverage.
   - **Sunrise and Sunset Times**: Local time of sunrise and sunset based on the location.

### 3. **Weather Condition Icons**
![waethericons](https://github.com/user-attachments/assets/42bbad16-89ab-4707-a5f5-9a353f36ebf0)

 The app uses icons from the OpenWeather API to visually represent the current weather condition (e.g., clear skies, rain, snow, etc.).

### 4. **Weather Condition-Based Styling**
![conditionalstyling](https://github.com/user-attachments/assets/42691022-7ed0-4166-bded-b93c3f671dee)


   The app dynamically changes its background colors based on the weather conditions:
   - **Sunny**: A bright, sunny background.
   - **Cloudy**: A neutral, cloudy background.
   - **Rainy**: A blueish, rainy background.
   - **Snowy**: A cool, snowy background.

### 5. **Interactive Google Map**
![map](https://github.com/user-attachments/assets/bba703b0-9181-4af4-b7e8-4dba0e636390)

   - The app includes an interactive **Google Map** that pinpoints the exact location on the map based on the coordinates obtained from the weather data.
   - The map allows users to visually explore the location where the weather data was fetched.

### 6. **Responsive and User-Friendly Design**
![responsive](https://github.com/user-attachments/assets/421390ea-b7f3-45f9-a197-c55f8cec13b4)

   - The layout is designed to be fully responsive, providing a smooth user experience on both **desktop** and **mobile** devices.
   - The weather information is presented in a clean, visually appealing format, ensuring easy readability.

### 7. **Toggle Visibility of the Weather App**
 ![apptoggle](https://github.com/user-attachments/assets/bafbbad0-39a9-4806-95f4-453b7d3f998e)

   - Users can toggle the visibility of the weather app using a **button** in the on the page, which hides or shows the entire weather app section.

### 8. **Geolocation Error Handling**
   
   - If geolocation is not supported or if there is an error fetching the location, users are presented with a clear error message to inform them of the issue.

### 9. **No Need for Manual Updates**
   - Once the weather data is fetched for either a city or current location, the app automatically updates and displays the relevant information in real-time.

## How It Works

1. **User Input**:
   - Users can enter the name of a city in the search bar or click the **"Get Current Location Weather"** button to retrieve weather information based on their current location.

2. **Weather Fetching**:
   - The app communicates with the **OpenWeather API** to fetch the current weather data for the specified city or geographic coordinates (latitude and longitude).

3. **Display of Data**:
   - Once the data is retrieved, the app displays the weather conditions in a structured format, including temperature, humidity, wind, and additional details.
   - The app also loads an interactive Google Map that highlights the requested location.

4. **Dynamic Weather Styling**:
   - The app adjusts its appearance based on the weather conditions. For example, on a sunny day, the background turns bright yellow, while on a rainy day, it becomes blue and cool.
  
## Testing 

During the development stages of this webpage and the javascript app itself, I have ensured that feature testing, interactivity and responsivity has been checked prior to each commit made on the project repository. Due to current GitHub limitations, these are not publicly visible commits but can be shown upon request and will be made public once the corresponding GH account is usable again by external viewers.

## Testing Plan

To ensure the functionality and quality of the features, the following tests have/will be performed:

### **1. Testing the "Search Weather by City" Feature**
#### **Test Cases:**
- ✅ **City Name Validation:**  
  - Test the input field with valid city names (e.g., "London", "Paris") to ensure the weather data loads correctly.
  - Test the input field with invalid city names (e.g., "InvalidCity") to ensure the app handles errors and displays an error message (e.g., "City not found").
- ✅ **Button Click Behavior:**  
  - Ensure the "Get Weather" button triggers the weather fetch and correctly updates the UI with temperature, humidity, wind speed, etc.
- ✅ **Empty Input Handling:**  
  - Test that submitting an empty input field displays a message prompting the user to enter a city name.

### **2. Testing the "Display Current Location Weather" Feature**
#### **Test Cases:**
- ✅ **Geolocation Permission:**  
  - Test on browsers with geolocation support to ensure the app prompts for location access and correctly fetches weather data.
  - Test what happens when the user denies location access (e.g., show an appropriate error message like "Location access denied").
- ✅ **Error Handling for Unsupported Browsers:**  
  - Test on browsers without geolocation support to ensure an error message (e.g., "Geolocation is not supported by your browser") is displayed.
- ✅ **Weather Data Display:**  
  - Test that after obtaining the user's location, the weather data is fetched and displayed correctly (temperature, wind, humidity, etc.).

### **3. Testing the "Display Interactive Map" Feature**
#### **Test Cases:**
- ✅ **Map Initialization:**  
  - Verify that the map loads correctly with the right center coordinates (location of the weather).
  - Test that the map zoom level is appropriate (e.g., zoomed in to a street-level view for a city).
- ✅ **Marker Display:**  
  - Ensure a marker is added at the correct location based on the weather data.
- ✅ **Responsive Map:**  
  - Test the map on different screen sizes to ensure it is responsive and fits the layout properly.

### **4. Testing the "Show Weather Details with a Visual Indicator" Feature**
#### **Test Cases:**
- ✅ **Weather Icon Display:**  
  - Test different weather conditions (e.g., clear, cloudy, rainy, snowy) to ensure the correct icons are displayed.
  - Test that icons appear clearly and appropriately sized.
- ✅ **Background Color Changes:**  
  - Test that the background color changes according to the weather condition (e.g., sunny = yellow, rainy = blue).
  - Test that the background color transition is smooth and visually appealing.
- ✅ **Temperature Display:**  
  - Verify that the temperature is clearly displayed in large, bold text.
  - Test that the temperature updates based on the correct unit (Celsius) and reflects the current weather.

### **5. General Usability and Performance Tests**
#### **Test Cases:**
- ✅ **Cross-Browser Testing:**  
  - Ensure the app works across multiple browsers (Chrome, Firefox, Safari, Edge) and handles any inconsistencies.
- ✅ **Mobile Responsiveness:**  
  - Test the app on various mobile devices to ensure it is responsive and maintains usability.
- ✅ **API Response Time:**  
  - Check that the app handles slow API responses gracefully and displays an appropriate loading message while waiting for data.
- ✅ **Error Handling:**  
  - Test scenarios where the API fails or is unreachable to ensure proper error messages are displayed to the user.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official W3C Validator
- CSS
  - No errors were found when passing through the official Jigsaw CSS Validator

    
### Unfixed Bugs

I am not currently aware of any major feature bugs across my page or my javascript feature itself that curerntly exist, however there are a small handful of issue flags in browser devtools highlighting some parts of my code that can be refined with how I have defined certain constants or segments of a function. I can confirm that despite these flags, my feature is still functioning exactly as I had intended it to and I have attempted to stress test the preview version of the page by requesting lots of locations in a short period of time, and it successfully keeps the results and map location shown up to date.

I am aware of a potential flaw with the size of the hero image, not due to any design error, but simply the nature of that image existing on the page will give the page something heavier to load, slightly lowering the lighthouse score in just that category. Other performance factors, SEO and readability all score healthily near 100. I could address this issue by adding code to mark the image to load last as a low priority to ensure the building of the rest of the page and, most importantly, the app itself being loaded hastily. I have in the meantime ensured the image is optimised with a reduced resolution, file size, and is in WEBP format.

Deployment being unavailable will be discussed below, but in theoretical sense, on a deployed live version of my application webpage, I would repeat similar test and review the devtools console to analyse any potential errors, faults or inefficiencies in how the page loads and runs.

## Deployment


- The site is to be deployed to GitHub pages when a resolution is reached over technical difficulties. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - (This will be updated in future to support a live page)

## Technologies Used/Credits

- **HTML5**: For the structure and layout of the app.
- **CSS3**: For styling and making the app visually appealing and responsive.
- **JavaScript**: For app functionality, including fetching weather data and interacting with the Google Maps API.
- **OpenWeather API**: To retrieve weather data (current conditions, temperature, humidity, etc.).
- **Google Maps API**: To embed the interactive map that shows the selected location.
- **ChatGPT by OpenAI**: To aid in bugfixing and refining javascript functions to declutter use of code in my javascript file.
- **MS Copilot**: To aid in bugfixing and generating the hero image used on the webpage.
- **W3 Validation Service**: To check CSS and HTML validation, of which both passed.
- **Lighthouse**: To check webpage loading performance and speed.
- **Bootstrap 5.3.3**: For design and page structure elements to be created in a responsive and definitive manner.
- **Beautify Code Formatter**: To help maintain and actively increase the readability and indentation of my HTML, CSS and JS files to make implementation and bugfixing an easier task.
- **The K&JJJ Team**: For their support, feedback and advice in how to navigate our colllaborative project under difficult technical circumstances for the group. Thank you.
- **Code Institute**: For their support, feedback and advice in how to navigate our colllaborative project under difficult technical circumstances for the group. Thank you.

## Conclusion

This weather app provides an easy-to-use interface for users to get weather information quickly and accurately, whether by city or current location. It’s designed to be user-friendly and visually appealing with dynamic weather-based styling and an interactive map feature.
