var React = require('react');

var HTTP = require('../services/httpserver');

var TodayWeatherBox = require('./TodayWeatherBox.jsx');
var FutureWeatherBox = require('./FutureWeatherBox.jsx');
var SearchBox = require('./SearchBox.jsx');


var boxStyle = {
  backgroundColor: "#46ca75"
};

var WeatherApp = React.createClass({
  getInitialState: function(){
    return(
      {
        //DefaultCity
        city: 'Kungsbacka',
        weather: []
      }
    );
  },
  componentWillMount: function(){
    HTTP.get('/data/2.5/forecast?q='+ this.state.city + ',se&units=metric&appid=2de143494c0b295cca9337e1e96b00e0').then(function(data){
      this.setState({weather: [data]});
    }.bind(this));
  },
  searchUpdate: function(search){
    this.setState({city: search});
    HTTP.get('/data/2.5/forecast?q='+ this.state.city + ',se&units=metric&appid=2de143494c0b295cca9337e1e96b00e0').then(function(data){
      this.setState({weather: [data]});
    }.bind(this));
  },
  render: function() {
    var todayWeatherBox = this.state.weather.map(function(item, key) {
        return (
          <TodayWeatherBox
            key={key}
            city={item.city.name}
            date={item.list[0].dt_txt}
            temp={item.list[0].main.temp}
            windSpeed={item.list[0].wind.speed}
            windAngle={item.list[0].wind.deg}
            icon={item.list[0].weather[0].icon}
          />
        );
    });

    var futureWeatherBox = this.state.weather.map(function(item, key) {
        return (
          <FutureWeatherBox
            key={key}
            tempList={item.list}
            icon={item.list}
          />
        );
    });

    return (
      <div className="future-weather-app row">
        <div className="components col-sm-4" style={boxStyle}>
          <SearchBox />
          {todayWeatherBox}
          {futureWeatherBox}
        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;
