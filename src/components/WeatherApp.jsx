var evalDate = function(){
  console.log("ran");
  if(this.state.days.dt_txt){
    var month = this.state.days.dt_txt.substring(5, 7);
    var day = this.state.days.dt_txt.substring(8, 10);
    console.log("Month: " + month + " day: " + day);
    var monthInWords = "";;
    if(month == "01"){
      monthInWords = "January " + day;
    } else if(month == "02"){
      monthInWords = "February " + day;
    } else if(month == "03"){
      monthInWords = "Mars " + day;
    } else if(month == "04"){
      monthInWords = "April " + day;
    } else if(month == "05"){
      monthInWords = "May " + day;
    } else if(month == "06"){
      monthInWords = "June " + day;
    } else if(month == "07"){
      monthInWords = "July " + day;
    } else if(month == "08"){
      monthInWords = "August " + day;
    } else if(month == "09"){
      monthInWords = "September " + day;
    } else if(month == "010"){
      monthInWords = "October " + day;
    } else if(month == "11"){
      monthInWords = "November " + day;
    } else if(month == "12"){
      monthInWords = "December " + day;
    }
    return monthInWords;
  }
}


var React = require('react');
var HTTP = require('../services/httpserver');
var $ = require('jquery');

var TodayWeatherBox = require('./TodayWeatherBox.jsx');
var FutureWeatherBox = require('./FutureWeatherBox.jsx');
var SearchBox = require('./SearchBox.jsx');
var Day = require('./Day.jsx');
var Info = require('./Info.jsx');


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
        weather: [],
        days: [],
        dayDate: ""
      }
    );
  },

  componentWillMount: function(){
    // Tries HTML5 geolocation
    /*
    if (navigator.geolocation) {
      //Sets a timeout on 10s to let the navigator to find geolocation
      var location_timeout = setTimeout("geolocFail()", 10000);

      navigator.geolocation.getCurrentPosition(function(position) {
        //If the position is found, stop the timeout
        clearTimeout(location_timeout);

        //Sets the latitude and longitude to the position object
        pos.lat = position.coords.latitude;
        pos.lon = position.coords.longitude;

        //Console Log for knowing if the geolocation was found and showing it
        console.log("HTML5 goelocation found, lat: " + pos.lat + " lon: " + pos.lon);

        //Sends an request to OpenWeatherAPI with the users position (latitude and longitude)
        //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
        HTTP.get('/data/2.5/forecast?lat=' + pos.lat + "&lon=" + pos.lon + '&units=metric&appid=f06dae075f128fd55d49a2655d6e1a9a').then(function(data){
          //Sets the weather data returned fro OpenWeatherMap to the state of the component
          this.setState({weather: [data]});
        }.bind(this));
        //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
      }.bind(this), function(error) {
        //If there is any errors getting the position the timeout will clear and fails the geolocation
          clearTimeout(location_timeout);
          geolocFail();
        });
    }
    */
    //change to else and remove comment to get current position
    if(true) {
      // Fallback if geolocation wasn't supported
      //Fails the geolocation
      //geolocFail();

      //Sends an request to OpenWeatherAPI with the default city "London"
      HTTP.get('/data/2.5/forecast?q=Billdal&units=metric&appid=f06dae075f128fd55d49a2655d6e1a9a').then(function(data){
        //Sets the weather data returned fro OpenWeatherMap to the state of the component
        this.setState({weather: [data]});
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
    HTTP.get('/data/2.5/forecast?q='+ search + '&units=metric&appid=f06dae075f128fd55d49a2655d6e1a9a').then(function(data){
      //Sets the data returned to the state of the component
      this.setState({weather: [data]});
    }.bind(this));
    //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
  },

  onDayClick: function(weatherArray, date){
    $("#popupDay").css("display", "block");
    this.setState({days: weatherArray, dayDate: date});
    console.log(weatherArray);
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
    //Should not need to be maped! If you don't map, it will render the component before the response from OpenWeatherMap arrives.
    var futureWeatherBox = this.state.weather.map(function(item, key) {
        return (
          <FutureWeatherBox
            key={key}
            tempList={item.list}
            icon={item.list}
            onDayClick={this.onDayClick}
            wholeDay={this.state.weather[0].list}
          />
        );
    }.bind(this));
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="row">

            <Info closeInfo={this.closeInfo} />

            <Day closeDay={this.closeDay} openInfo={this.openInfo} date={this.state.dayDate} days={this.state.days} />

            <div className="col-sm-12" style={boxStyle}>
              <SearchBox onNewSearch={this.handleSearch}/>
              {todayWeatherBox}
              {futureWeatherBox}
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;


/* TodayWeatherBox without mapping it.
<TodayWeatherBox
  city={this.state.weather[0].city.name}
  country={this.state.weather[0].city.country}
  date={this.state.weather[0].list[0].dt_txt}
  temp={this.state.weather[0].list[0].main.temp}
  windSpeed={this.state.weather[0].list[0].wind.speed}
  windAngle={this.state.weather[0].list[0].wind.deg}
  icon={this.state.weather[0].list[0].weather[0].icon}
/>*/
