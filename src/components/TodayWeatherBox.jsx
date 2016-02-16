var React = require('react');

var Units = require('./Units.jsx');

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
var iconDescText = {
  marginTop: 10
}

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

var evalIcon = function(iconNumb, iconID){
  var icon = "wi ";
  if(iconNumb.substring(2,3) === "n"){
    if(iconID >= 200 && iconID <= 232 ){
      icon += "wi-night-thunderstorm"
    } else if(iconID >= 300 && iconID <= 501 ){
      icon += "wi-night-alt-rain-mix"
    } else if(iconID >= 502 && iconID <= 504 ){
      icon += "wi-night-alt-rain"
    } else if(iconID == 511){
      icon += "wi-night-alt-sleet"
    } else if(iconID >= 520 && iconID <= 531 ){
      icon += "wi-night-alt-rain"
    } else if(iconID >= 600 && iconID <= 602 ){
      icon += "wi-night-alt-snow"
    } else if(iconID >= 611 && iconID <= 612 ){
      icon += "wi-night-alt-sleet"
    } else if(iconID >= 615 && iconID <= 622 ){
      icon += "wi-night-alt-snow"
    } else if(iconID == 701){
      icon += "wi-fog"
    } else if(iconID == 711){
      icon += "wi-smoke"
    } else if(iconID == 721){
      icon += "wi-day-haze"
    } else if(iconID == 731 || iconID == 761){
      icon += "wi-dust"
    } else if(iconID == 741){
      icon += "wi-night-fog"
    } else if(iconID == 751){
      icon += "wi-sandstorm"
    } else if(iconID == 762){
      icon += "wi-volcano"
    } else if(iconID == 771){
      icon += "wi-night-alt-cloudy-windy"
    } else if(iconID == 781){
      icon += "wi-tornado"
    } else if(iconID == 800){
      icon += "wi-night-clear"
    } else if(iconID >= 800 && iconID <= 802){
      icon += "wi-cloud"
    } else if(iconID >= 803 && iconID <= 804){
      icon += "wi-cloudy"
    } else if(iconID == 900){
      icon += "wi-tornado"
    } else if(iconID >= 901 && iconID <= 902){
      icon += "wi-hurricane"
    } else if(iconID == 903){
      icon += "wi-snowflake-cold"
    } else if(iconID == 904){
      icon += "wi-hot"
    } else if(iconID == 905){
      icon += "wi-windy"
    } else if(iconID == 906){
      icon += "wi-hail"
    } else if(iconID >= 951 && iconID <= 955){
      icon += "wi-night-alt-cloudy-windy"
    } else if(iconID >= 956 && iconID <= 961){
      icon += "wi-night-alt-cloudy-gusts"
    } else if(iconID == 962){
      icon += "wi-hurricane"
    }
  } else if(iconNumb.substring(2,3) === "d"){
    if(iconID >= 200 && iconID <= 232 ){
      icon += "wi-day-thunderstorm"
    } else if(iconID >= 300 && iconID <= 501 ){
      icon += "wi-day-rain-mix"
    } else if(iconID >= 502 && iconID <= 504 ){
      icon += "wi-day-rain"
    } else if(iconID == 511){
      icon += "wi-day-sleet"
    } else if(iconID >= 520 && iconID <= 531 ){
      icon += "wi-day-rain"
    } else if(iconID >= 600 && iconID <= 602 ){
      icon += "wi-day-snow"
    } else if(iconID >= 611 && iconID <= 612 ){
      icon += "wi-day-sleet"
    } else if(iconID >= 615 && iconID <= 622 ){
      icon += "wi-day-snow"
    } else if(iconID == 701){
      icon += "wi-fog"
    } else if(iconID == 711){
      icon += "wi-smoke"
    } else if(iconID == 721){
      icon += "wi-day-haze"
    } else if(iconID == 731 || iconID == 761){
      icon += "wi-dust"
    } else if(iconID == 741){
      icon += "wi-day-fog"
    } else if(iconID == 751){
      icon += "wi-sandstorm"
    } else if(iconID == 762){
      icon += "wi-volcano"
    } else if(iconID == 771){
      icon += "wi-day-windy"
    } else if(iconID == 781){
      icon += "wi-tornado"
    } else if(iconID == 800){
      icon += "wi-day-sunny"
    } else if(iconID >= 800 && iconID <= 802){
      icon += "wi-cloud"
    } else if(iconID >= 803 && iconID <= 804){
      icon += "wi-cloudy"
    } else if(iconID == 900){
      icon += "wi-tornado"
    } else if(iconID >= 901 && iconID <= 902){
      icon += "wi-hurricane"
    } else if(iconID == 903){
      icon += "wi-snowflake-cold"
    } else if(iconID == 904){
      icon += "wi-hot"
    } else if(iconID == 905){
      icon += "wi-windy"
    } else if(iconID == 906){
      icon += "wi-hail"
    } else if(iconID >= 951 && iconID <= 955){
      icon += "wi-day-light-wind"
    } else if(iconID >= 956 && iconID <= 961){
      icon += "wi-day-cloudy-gusts"
    } else if(iconID == 962){
      icon += "wi-hurricane"
    }
  }
  return (icon);
};

var evalTempUnit = function(unit){
  if(unit == "metric"){
    return "°C"
  } else if(unit == "imperial"){
    return "°F"
  }
}

var evalSpeedUnit = function(unit){
  if(unit == "metric"){
    return "m/s"
  } else if(unit == "imperial"){
    return "mph"
  }
}

var TodayWeatherBox = React.createClass({
    changeTemp: function(unit){
      this.props.changeUnits(unit);
    },

    render: function() {
        return (
          <div id="today-weather-box" className="row" >
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-4">
                  <h5>{this.props.city}, {this.props.country}</h5>
                  <h5>
                    <i className="fa fa-clock-o"  style={clockIcon}></i>
                    {this.props.date.substring(11, 16)}
                  </h5>
                </div>
                <div className="col-xs-4 text-center">
                  <h5>{this.props.iconDesc}</h5>
                </div>
                <Units changeTemp={this.changeTemp}/>
              </div>
              <div className="row" style={mainContent}>
                <div className="col-xs-12 text-center">
                  <i className={evalIcon(this.props.icon, this.props.iconID)} style={mainIcon}></i>
                  <h1>{Math.round(this.props.temp)} {evalTempUnit(this.props.units)}</h1>
                  <h5>Feels like {evalTemp(this.props.temp, this.props.windSpeed)} {evalTempUnit(this.props.units)}</h5>
                </div>
              </div>
              <div className="row" style={subMargin}>
                <div className="col-xs-6 text-center">
                  <i className={wind(this.props.windAngle).compassClass} style={subContent}></i>
                  <span style={subText}>{wind(this.props.windAngle).direction}</span>
                </div>
                <div className="col-xs-6 text-center">
                  <i className="wi wi-strong-wind" style={subContent}></i>
                  <span style={subText}>{Math.round(this.props.windSpeed)} {evalSpeedUnit(this.props.units)}</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
});

module.exports = TodayWeatherBox;
