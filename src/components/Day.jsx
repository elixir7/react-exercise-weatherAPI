var React = require('react');

var popupDay = {
  backgroundColor: "#1ab7ea",
  height: "100%",
  position: "absolute",
  zIndex: 1,
  display: "none"
};

var timesIcon = {
  marginTop: 20,
  fontSize: 24
}

var infoIcon = timesIcon;

var descIcon = {
  fontSize: 24,
  marginBottom: 20
}

var descIcon = {
  fontSize: 24,
  marginBottom: 20
}

var dayTitle = {
  marginBottom: 50
}

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

var Day = React.createClass({

  render: function(){

    var times = this.props.days.map(function(item, key){
      if(item.dt_txt.substring(8, 10) == this.props.date.substring(4, 6)){
        return(
          <p key={key}>{item.dt_txt.substring(11,16)}</p>
        );
      }
    }.bind(this));

    var weatherIcons = this.props.days.map(function(item, key){
      if(item.dt_txt.substring(8, 10) == this.props.date.substring(4, 6)){
        return(
          <p key={key}><i className={evalIcon(item.weather[0].icon, item.weather[0].id)} /></p>
        );
      }
    }.bind(this));

    var winds = this.props.days.map(function(item, key){
      if(item.dt_txt.substring(8, 10) == this.props.date.substring(4, 6)){
        return(
          <p key={key}>{Math.round(item.wind.speed) + evalSpeedUnit(this.props.units)}</p>
        );
      }
    }.bind(this));

    var temps = this.props.days.map(function(item, key){
      if(item.dt_txt.substring(8, 10) == this.props.date.substring(4, 6)){
        return(
          <p key={key}>{Math.round(item.main.temp) + evalTempUnit(this.props.units)}</p>
        );
      }
    }.bind(this));

    return (
      <div className="col-sm-12" id="popupDay" style={popupDay}>
        <div className="row">
          <div className="col-xs-6">
            <i className="fa fa-times" style={timesIcon} onClick={this.props.closeDay} />
          </div>
          <div className="col-xs-6 text-right">
            <i className="fa fa-info" style={infoIcon} onClick={this.props.openInfo} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <h1 style={dayTitle} id="dayTitle">{this.props.date}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3 text-center">
            <i className="fa fa-clock-o" style={descIcon} />
            {times}
          </div>
          <div className="col-xs-3 text-center">
            <i className="wi wi-day-cloudy" style={descIcon} />
            {weatherIcons}
          </div>
          <div className="col-xs-3 text-center">
            <i className="wi wi-strong-wind" style={descIcon} />
            {winds}
          </div>
          <div className="col-xs-3 text-center">
            <i className="wi wi-thermometer" style={descIcon} />
            {temps}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Day;
