# React Weather App

### Demo
You can find a live version of this project [Here](http://elixir7.github.io/react-exercise-weatherAPI/public/#/)

### Development
To try it out clone this repo. Run `npm install` and then run `npm start`, then locate to localhost:3000 in your browser.

### Improvements
Change background color depending on temperature or use the codedrop.com amazing background with realistic raindrops.
Fix to not use the custom.css styling but instead use the inline styling in the component.
Refactor to ES6
Use Webpack instead of browserify
Update Day view with larger icons
Instead of having loading state to render the spinning loader, just use else statement when rendering today and futureweatherbox.

### Done
Start-view for the user to read how it works and if they want to use Geolocation or search by city. (check)
Add whole day forecast when clicking on that day. (check)
Add a spinner to when the app is finding the location and sending API request. (check)
Add both Farenheit and Celcius as temperature. (check)
Add both Mph and m/s wind speed. (check)
Add more exact icons by checking id of icons [Here](http://openweathermap.org/weather-conditions) (check)
Clean up httpserver to have the API key instead of typing it all over. (check)

### Ideas
Since raindrops with javascript seems to be very hard to implement and might be difficult to read text on. Instead use a gradient background which is depending on the weather temperature.
