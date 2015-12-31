var React = require('react');

var boxStyle = {
  backgroundColor: "#46ca75"
};
var mainIcon = {
  fontSize: 48
};
var mainContent = {
  paddingTop: 70,
  paddingBottom: 70
};
var subContent = {
  fontSize: 18,
  marginRight: 10
};
var subText = {
  fontSize: 16
};
var subMargin = {
  marginBottom: 20
}


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

var evalTemp = function(temp, windSpeed){
  //Calculates the windchill, info here: http://www.freemathhelp.com/wind-chill.html
  var vPow = Math.pow(windSpeed, 0.16);
  var feelsLike = Math.round(13.12 + 0.6215*temp - 11.37*vPow + 0.3965*temp*vPow);
  return (feelsLike);
};


var TodayWeatherBox = React.createClass({
    render: function() {
        return (
          <div id="today-weather-box" className="row" style={boxStyle}>
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <h5>{this.props.city}, Sweden</h5>
                  <h6>{this.props.date}</h6>
                </div>
              </div>
              <div className="row" style={mainContent}>
                <div className="col-xs-12 text-center">
                  <i className="wi wi-day-sunny" style={mainIcon}></i>
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
