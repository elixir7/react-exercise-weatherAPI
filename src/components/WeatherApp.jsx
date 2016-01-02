var React = require('react');

var HTTP = require('../services/httpserver');

var TodayWeatherBox = require('./TodayWeatherBox.jsx');
var FutureWeatherBox = require('./FutureWeatherBox.jsx');
var SearchBox = require('./SearchBox.jsx');


var boxStyle = {
  backgroundColor: "#46ca75"
};

var pos = {
  lat: '51.50722',
  lon: '-0.12750'
}


var WeatherApp = React.createClass({
  getInitialState: function(){
    return(
      {
        weather: []
      }
    );
  },

  componentWillMount: function(){
    // Tries HTML5 geolocation
    if (navigator.geolocation) {
      //Sets a timeout on 10s to let the navigator to find geolocation
      var location_timeout = setTimeout("geolocFail()", 10000);

      navigator.geolocation.getCurrentPosition(function(position) {
        //If the position is found, stop the timeout
        clearTimeout(location_timeout);

        //Sets the latitude and longitude to the position object
        pos.lat = position.coords.latitude;
        pos.lon = position.coords.longitude;

        //Console Log for knowing if the geolocation was found
        console.log("HTML5 goelocation found, lat: " + pos.lat + " lon: " + pos.lon);

        //Sends an request to OpenWeatherAPI with the users position (latitude and longitude)
        //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
        HTTP.get('/data/2.5/forecast?lat=' + pos.lat + "&lon=" + pos.lon + '&units=metric&appid=2de143494c0b295cca9337e1e96b00e0').then(function(data){
          this.setState({weather: [data]});
        }.bind(this));
        //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
      }.bind(this), function(error) {
        //If there is any errors getting the position the timeout will clear and fails the geolocation
          clearTimeout(location_timeout);
          geolocFail();
        });
    } else {
      // Fallback if geolocation wasn't supported
      //Fails the geolocation
      geolocFail();

      //Sends an request to OpenWeatherAPI with the default city "London"
      HTTP.get('/data/2.5/forecast?q=London&units=metric&appid=2de143494c0b295cca9337e1e96b00e0').then(function(data){
        //Sets the data returned to the state of the component
        this.setState({weather: [data]});
        //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
      }.bind(this));
    }
  },
  //This function gets called when the form in the SearchBox is submited.
  handleSearch: function(search){
    //Sends an request to OpenWeatherAPI with the input of the user
    HTTP.get('/data/2.5/forecast?q='+ search + '&units=metric&appid=2de143494c0b295cca9337e1e96b00e0').then(function(data){
      //Sets the data returned to the state of the component
      this.setState({weather: [data]});
    }.bind(this));
    //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
  },

  render: function() {
    //Not sure if a map function is needed because it only need specific values for "today"
    var todayWeatherBox = this.state.weather.map(function(item, key) {
        return (
          <TodayWeatherBox
            key={key}
            city={item.city.name}
            country={item.city.country}
            date={item.list[0].dt_txt}
            temp={item.list[0].main.temp}
            windSpeed={item.list[0].wind.speed}
            windAngle={item.list[0].wind.deg}
            icon={item.list[0].weather[0].icon}
          />
        );
    });

    //Loops threw all the data in the state of weather.
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
      <div className="row">
        <div className="components col-sm-4" style={boxStyle}>
          <SearchBox onNewSearch={this.handleSearch}/>
          {todayWeatherBox}
          {futureWeatherBox}
        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;
