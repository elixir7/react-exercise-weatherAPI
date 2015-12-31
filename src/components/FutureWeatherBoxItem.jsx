var React = require('react');

var iconStyle = {
  fontSize: 18,
  marginTop: 7
};
var fontColor = {
  color: "#333333"
};
var boxStyle = {
  paddingTop: 10,
  paddingBottom: 10
};
var FutureWeatherBoxItem = React.createClass({
    render: function() {
        return (
            <div className="future-box-item" style={boxStyle}>
              <div className="row swag" style={fontColor}>
                <div className="col-xs-4">
                  <h5>{this.props.date}</h5>
                </div>
                <div className="col-xs-4 text-center">
                  <i className="wi wi-day-sunny" style={iconStyle}></i>
                </div>
                <div className="col-xs-4">
                  <h5 className="pull-right">{this.props.temp} °C</h5>
                </div>
              </div>
            </div>
        );
    }
});

module.exports = FutureWeatherBoxItem;
