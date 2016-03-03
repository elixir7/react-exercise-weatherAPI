var React = require('react');
var HTTP = require('../services/httpserver');
var $ = require('jquery');

var TodayWeatherBox = require('./TodayWeatherBox.jsx');
var FutureWeatherBox = require('./FutureWeatherBox.jsx');
var SearchBox = require('./SearchBox.jsx');
var Day = require('./Day.jsx');
var Info = require('./Info.jsx');
var Spinner = require('./Spinner.jsx')


var boxStyle = {
  backgroundColor: "#46ca75"
};

var pos = {
  lat: "",
  lon: ""
}

var WeatherApp = React.createClass({
  getInitialState: function(){
    return(
      {
        gps: false,
        lat: "",
        lon: "",
        search: "",
        weather: null,
        units: "metric",
        loading: true,
        days: null,
        dayDate: ""
      }
    );
  },

  componentDidMount: function(){
    // Tries HTML5 geolocation
    if (navigator.geolocation) {
      //Sets a timeout on 10s to let the navigator to find geolocation
      var location_timeout = setTimeout("geolocFail()", 10000);

      navigator.geolocation.getCurrentPosition(function(position) {
        //If the position is found, stop the timeout
        clearTimeout(location_timeout);

        this.setState(
          {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            gps: true
          },
          function(){
            //Console Log for knowing if the geolocation was found and showing it
            console.log("HTML5 goelocation found, lat: " + this.state.lat + " lon: " + this.state.lon);

            //Sends an request to OpenWeatherAPI with the users position (latitude and longitude)
            //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
            HTTP.get('lat=' + this.state.lat + "&lon=" + this.state.lon + '&units=' + this.state.units).then(function(data){
              //Sets the weather data returned fro OpenWeatherMap to the state of the component
              this.setState({weather: data, loading: false});
            }.bind(this));
            //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
          }.bind(this));
      }.bind(this), function(error) {
        //If there is any errors getting the position the timeout will clear and fails the geolocation
          clearTimeout(location_timeout);
          geolocFail();
        });
    }
    else {
      // Fallback if geolocation wasn't supported or allowed
      //Fails the geolocation

      //Sends an request to OpenWeatherAPI with the default city "London"
      HTTP.get('q=Billdal&units=' + this.state.units).then(function(data){
        //Sets the weather data returned fro OpenWeatherMap to the state of the component
        this.setState({weather: data, loading: false});
        //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
      }.bind(this));
    }
    var geolocFail = function(){
      //Change this to use a default city so that something is showed instead of an error.
      alert("Geolocation was not support or allowed, try searching on a city instead.");
    }
  },
  //This function gets called when the form in the SearchBox is submited.
  handleSearch: function(search){
    //Sends an request to OpenWeatherAPI with the input of the user
    HTTP.get('q='+ search + '&units=' + this.state.units).then(function(data){
      //Sets the data returned to the state of the component
      this.setState({ search: search, weather: data, loading: false, gps: false});
    }.bind(this));
  },

  onDayClick: function(weatherArray, date){
    this.setState({days: weatherArray, dayDate: date}, function(){
      $("#popupDay").css("display", "block");
    });
  },

  closeDay: function(){
    $("#popupDay").css("display", "none");
  },

  openInfo: function(){
    $("#popupInfo").css("display", "block");
  },

  closeInfo: function(){
    $("#popupInfo").css("display", "none");
  },

  changeUnits: function(temp){
    if(temp == "°C" && temp.substring(1,2) != this.state.units){
      this.setState({units: "metric"}, function () {
        if(this.state.gps == true){
          HTTP.get('lat=' + this.state.lat + "&lon=" + this.state.lon + '&units=' + this.state.units).then(function(data){
            //Sets the weather data returned fro OpenWeatherMap to the state of the component
            this.setState({weather: data});
          }.bind(this));
        } else{
          HTTP.get('q='+ this.state.search + '&units=' + this.state.units).then(function(data){
            //Sets the data returned to the state of the component
            this.setState({ weather: data});
          }.bind(this));
        }
      });

    } else if(temp == "°F" && temp.substring(1,2) != this.state.units){
      this.setState({units: "imperial"}, function () {
        if(this.state.gps == true){
          HTTP.get('lat=' + this.state.lat + "&lon=" + this.state.lon + '&units=' + this.state.units).then(function(data){
            this.setState({weather: data});
          }.bind(this));
        } else{
          HTTP.get('q='+ this.state.search + '&units=' + this.state.units).then(function(data){
            this.setState({ weather: data});
          }.bind(this));
        }
      });
    }
  },

  render: function() {

    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="row">

            <Info closeInfo={this.closeInfo} />

            {(() => {
              if (this.state.days)
               return (
                <Day closeDay={this.closeDay} openInfo={this.openInfo} date={this.state.dayDate} days={this.state.days} units={this.state.units}/>
               );
            })()}

            <div className="col-sm-12" style={boxStyle}>
              <SearchBox onNewSearch={this.handleSearch}/>
              <Spinner loading={this.state.loading} />
              {(() => {
                if (this.state.weather) {
                  return (
                    <div>
                      <TodayWeatherBox
                        city={this.state.weather.city.name}
                        country={this.state.weather.city.country}
                        date={this.state.weather.list[0].dt_txt}
                        temp={this.state.weather.list[0].main.temp}
                        windSpeed={this.state.weather.list[0].wind.speed}
                        windAngle={this.state.weather.list[0].wind.deg}
                        icon={this.state.weather.list[0].weather[0].icon}
                        iconID={this.state.weather.list[0].weather[0].id}
                        iconDesc={this.state.weather.list[0].weather[0].description}
                        units={this.state.units}
                        changeUnits={this.changeUnits}
                      />
                      <FutureWeatherBox
                        units={this.state.units}
                        tempList={this.state.weather.list}
                        icon={this.state.weather.list}
                        onDayClick={this.onDayClick}
                        wholeDay={this.state.weather.list}
                      />
                  </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;
