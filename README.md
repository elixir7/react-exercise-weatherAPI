# React Weather App

### Demo
You can find a live version of this project [Here](http://elixir7.github.io/react-exercise-weatherAPI/public/#/)

### Development
To try it out clone this repo. Run `npm install` and then run `http-server -p 3000`, then locate to localhost:3000/#/weather in your browser.

### Improvements
Change background color depending on temperature or use the codedrop.com amazing background with realistic raindrops.
Add more exact icons by checking id of icons [Here](http://openweathermap.org/weather-conditions)
Fix to not use the custom.css styling but instead use the inline styling in the component.
Clean up httpserver to have the API key instead of typing it all over.

### Done
Start-view for the user to read how it works and if they want to use Geolocation or search by city. (check)
Add whole day forecast when clicking on that day. (check)
Add a spinner to when the app is finding the location and sending API request. (check)
Add both Farenheit and Celcius as temperature. (check)
Add both Mph and m/s wind speed. (check)

### Ideas
Since raindrops with javascript seems to be very hard to implement and might be difficult to read text on. Instead use a gradient background which is depending on the weather temperature.
