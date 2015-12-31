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
  fontSize: 16,
  marginRight: 10
};
var subText = {
  fontSize: 16
};
var subMargin = {
  marginBottom: 20
}


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
                  <h1>{this.props.temp} °C</h1>
                  <h5>Feels like 13 °C</h5>
                </div>
              </div>
              <div className="row" style={subMargin}>
                <div className="col-xs-6 text-center">
                  <i className="wi wi-wind towards-0-deg" style={subContent}></i>
                  <span style={subText}>{this.props.windAngle}°</span>
                </div>
                <div className="col-xs-6 text-center">
                  <i className="wi wi-strong-wind" style={subContent}></i>
                  <span style={subText}>{this.props.windSpeed} m/s</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
});

module.exports = TodayWeatherBox;
