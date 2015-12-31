var React = require('react');
var WeatherApp = require('./WeatherApp.jsx');

var Weather = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col-md-6" >
          <WeatherApp />
        </div>
      </div>  
    );
  }
});

module.exports = Weather;
