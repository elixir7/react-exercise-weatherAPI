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


var FutureWeatherBoxItem = React.createClass({
    render: function() {
        return (
            <Link to="/day">
              <div className="future-box-item" style={boxStyle}>
                <div className="row swag" style={fontColor}>
                  <div className="col-xs-4">
                    <h5>{this.props.date}</h5>
                  </div>
                  <div className="col-xs-4 text-center">
                    <i className={evalIcon(this.props.icon)} style={iconStyle}></i>
                  </div>
                  <div className="col-xs-4">
                    <h5 className="pull-right">{Math.round(this.props.temp)} °C</h5>
                  </div>
                </div>
              </div>
          </Link>
        );
    }
});

module.exports = FutureWeatherBoxItem;
