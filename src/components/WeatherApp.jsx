var React = require('react');

var HTTP = require('../services/httpserver');

var TodayWeatherBox = require('./TodayWeatherBox.jsx');
var FutureWeatherBox = require('./FutureWeatherBox.jsx');

var WeatherApp = React.createClass({
  getInitialState: function(){
    return(
      {
        weather: []
      }
    );
  },
  componentWillMount: function(){
    HTTP.get('/data/2.5/forecast?q=Kungsbacka,se&units=metric&appid=2de143494c0b295cca9337e1e96b00e0').then(function(data){
      console.log(data);
      this.setState({weather: [data]});
    }.bind(this));
  },
  render: function() {
    var todayWeatherBox = this.state.weather.map(function(item) {
        return (
          <TodayWeatherBox
            key={item.city.id}
            city={item.city.name}
            date={item.list[0].dt_txt}
            temp={item.list[0].main.temp}
            windSpeed={item.list[0].wind.speed}
            windAngle={item.list[0].wind.deg}
          />
        );
    });
    
    var futureWeatherBox = this.state.weather.map(function(item) {
        return (
          <FutureWeatherBox
            key={item.city.id}
            tempList={item.list}
          />
        );
    });

    return (
      <div className="future-weather-app row">
        <div className="components col-sm-4">
          {todayWeatherBox}
          {futureWeatherBox}
        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;
