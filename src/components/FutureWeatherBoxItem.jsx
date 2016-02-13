var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

//Styling
var iconStyle = {
  fontSize: 23,
  marginTop: 12
};
var fontColor = {
  color: "#333333"
};
var boxStyle = {
  paddingTop: 10,
  paddingBottom: 10
};
var hrStyle = {
  margin: 0,
  borderTop: "1px solid #333"
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

var FutureWeatherBoxItem = React.createClass({
  //Clicking on an element runs the onClick function which runs the "dayClicked function in FutureWeatherBox.jsx"
  onClick: function(){
    this.props.dayClicked(this.props.wholeDay, this.props.date);

  },
  render: function() {
      return (
        <div>
          <div className="future-box-item" style={boxStyle} onClick={this.onClick}>
            <div className="row swag" style={fontColor}>
              <div className="col-xs-4">
                <h5>{this.props.date}</h5>
              </div>
              <div className="col-xs-4 text-center">
                <i className={evalIcon(this.props.icon, this.props.iconID)} style={iconStyle}></i>
              </div>
              <div className="col-xs-4">
                <h5 className="pull-right">{Math.round(this.props.temp)} {evalTempUnit(this.props.units)}</h5>
              </div>
            </div>
          </div>
          <hr style={hrStyle}/>
        </div>
      );
  }
});

module.exports = FutureWeatherBoxItem;
