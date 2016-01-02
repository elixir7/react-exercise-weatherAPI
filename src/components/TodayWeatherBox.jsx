var React = require('react');

//Styling
var mainIcon = {
  fontSize: 48
};
var mainContent = {
  paddingTop: 50,
  paddingBottom: 50
};
var subContent = {
  fontSize: 20,
  marginRight: 10
};
var subText = {
  fontSize: 18
};
var subMargin = {
  marginBottom: 20
};
var clockIcon = {
  marginRight: 5
};

//Takes a angle in degrees and returns an object with a direction where the wind is blowing from written in words and a class to show where the wind is blowing from. Used to display an icon and some text for the wind.
var wind = function(deg){
  var angle = deg;
  var object = {
    direction: "",
    compassClass: ""
  };

  if(angle >= 0 && angle <= 22.5 || angle > 337.5 && angle <= 360){
    //North
    object.direction = "North";
    object.compassClass = "wi wi-wind wi-from-n";
  } else if(angle > 22.5 && angle <= 67.5){
    //North East
    object.direction = "North East";
    object.compassClass = "wi wi-wind wi-from-ne";
  } else if(angle > 67.5 && angle <= 112.5){
    //East
    object.direction = "East";
    object.compassClass = "wi wi-wind wi-from-e";
  } else if(angle > 112.5 && angle <= 157.5){
    //South East
    object.direction = "South East";
    object.compassClass = "wi wi-wind wi-from-se";
  } else if(angle > 157.5 && angle <= 202.5){
    //South
    object.direction = "South";
    object.compassClass = "wi wi-wind wi-from-s";
  } else if(angle > 202.5 && angle <= 247.5){
    //South West
    object.direction = "South West";
    object.compassClass = "wi wi-wind wi-from-sw";
  } else if(angle > 247.5 && angle <= 292.5){
    //West
    object.direction = "West";
    object.compassClass = "wi wi-wind wi-from-w";
  } else if(angle > 292.5 && angle <= 337.5){
    //North West
    object.direction = "North East";
    object.compassClass = "wi wi-wind wi-from-ne";
  }

  return object;
};

//Calculates the windchill, info here: http://www.freemathhelp.com/wind-chill.html
var evalTemp = function(temp, windSpeed){
  var vPow = Math.pow(windSpeed, 0.16);
  var feelsLike = Math.round(13.12 + 0.6215*temp - 11.37*vPow + 0.3965*temp*vPow);
  return (feelsLike);
};

//Function take a string from WeatherAPI and returns a className for showing the right icon depending on the current weather.
var evalIcon = function(iconText){
  var icon = "wi ";
  if(iconText == "01d"){
    icon += "wi-day-sunny";
  } else if(iconText == "02d"){
    icon += "wi-day-cloudy";
  } else if(iconText == "03d"){
    icon += "wi-cloud";
  } else if(iconText == "04d"){
    icon += "wi-cloudy";
  } else if(iconText == "09d"){
    icon += "wi-rain";
  } else if(iconText == "10d"){
    icon += "wi-day-rain";
  } else if(iconText == "11d"){
    icon += "wi-thunderstorm";
  } else if(iconText == "13d"){
    icon += "wi-snow";
  } else if(iconText == "50d"){
    icon += "wi-windy";
  } else if(iconText == "01n"){
    icon += "wi-night-clear";
  } else if(iconText == "02n"){
    icon += "wi-night-alt-cloudy";
  } else if(iconText == "03n"){
    icon += "wi-cloud";
  } else if(iconText == "04n"){
    icon += "wi-cloudy";
  } else if(iconText == "09n"){
    icon += "wi-rain";
  } else if(iconText == "10n"){
    icon += "wi-night-alt-rain";
  } else if(iconText == "11n"){
    icon += "wi-thunderstorm";
  } else if(iconText == "13n"){
    icon += "wi-snow";
  } else if(iconText == "50n"){
    icon += "wi-windy";
  }
  return (icon);
};



var TodayWeatherBox = React.createClass({
    render: function() {
        return (
          <div id="today-weather-box" className="row">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h5>{this.props.city}, {this.props.country}</h5>
                  <h5>
                    <i className="fa fa-clock-o"  style={clockIcon}></i>
                    {this.props.date.substring(11, 16)}
                  </h5>
                </div>
              </div>
              <div className="row" style={mainContent}>
                <div className="col-xs-12 text-center">
                  <i className={evalIcon(this.props.icon)} style={mainIcon}></i>
                  <h1>{Math.round(this.props.temp)} °C</h1>
                  <h5>Feels like {evalTemp(this.props.temp, this.props.windSpeed)} °C</h5>
                </div>
              </div>
              <div className="row" style={subMargin}>
                <div className="col-xs-6 text-center">
                  <i className={wind(this.props.windAngle).compassClass} style={subContent}></i>
                  <span style={subText}>{wind(this.props.windAngle).direction}</span>
                </div>
                <div className="col-xs-6 text-center">
                  <i className="wi wi-strong-wind" style={subContent}></i>
                  <span style={subText}>{Math.round(this.props.windSpeed)} m/s</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
});

module.exports = TodayWeatherBox;
