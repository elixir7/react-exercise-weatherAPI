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
          <p key={key}><i className={evalIcon(item.weather[0].icon)} /></p>
        );
      }
    }.bind(this));

    var winds = this.props.days.map(function(item, key){
      if(item.dt_txt.substring(8, 10) == this.props.date.substring(4, 6)){
        return(
          <p key={key}>{Math.round(item.wind.speed) + "m/s"}</p>
        );
      }
    }.bind(this));

    var temps = this.props.days.map(function(item, key){
      if(item.dt_txt.substring(8, 10) == this.props.date.substring(4, 6)){
        return(
          <p key={key}>{Math.round(item.main.temp) + "°C"}</p>
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
