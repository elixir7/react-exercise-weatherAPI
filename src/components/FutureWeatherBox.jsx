var React = require('react');
var FutureWeatherBoxItem = require('./FutureWeatherBoxItem.jsx');

var boxStyle = {
  backgroundColor: "#e7e7e7"
};

var evalDate = function(unix_timestamp){
  var d = new Date(unix_timestamp * 1000);
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  return n;
}

var FutureWeatherBox = React.createClass({
  //Callbackfunction which runs "onDayClick" in "WeatherApp.jsx"
  dayClicked: function(weatherArray, date){
    this.props.onDayClick(weatherArray, date);
  },
  render: function() {
    var futureWeatherBoxItem = this.props.tempList.map(function(item, key) {
      if(item.dt_txt.substring(11, 13) == "12"){
        return (
          <FutureWeatherBoxItem
            key={key}
            units={this.props.units}
            date={evalDate(item.dt)}
            temp={item.main.temp}
            icon={item.weather[0].icon}
            iconID={item.weather[0].id}
            dayClicked={this.dayClicked}
            wholeDay={this.props.wholeDay}
          />
        );
      }
    }.bind(this));

    return (
      <div className="row future-weather-box" style={boxStyle}>
        <div className="col-xs-12">
          {futureWeatherBoxItem}
        </div>
      </div>
    );
  }
});

module.exports = FutureWeatherBox;
