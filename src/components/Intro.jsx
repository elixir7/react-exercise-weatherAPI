var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var boxStyle = {
  backgroundColor: "#1ab7ea"
};
var weatherIcon = {
  fontSize: 56,
  marginTop: 20,
  marginBottom: 20
};
/*
If you don't get the city you searched for, try to follow the city name by a comma and then the ISO 3166 country code for that city, like this. <em>"Stockholm, SE" or "London, GB"</em>
*/
var Intro = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col-md-4 text-center" style={boxStyle}>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <h1>Welcome to WOD</h1>
              <i className="wi wi-day-sunny" style={weatherIcon}/>
              <h3>What's WOD?</h3>
              <p><b>Weather On Demand</b> is weather application that let's you browse the weather where ever you are, when ever you want.</p>
              <h3>Get started</h3>
              <p>To use WOD, simply allow it to find your position via GPS or search on a city. To search by city, type the English name of the city, like this "London". </p>

              <br />

              <Link to="/weather">
                <button type="btn" className="btn btn-default">Got it, let's go!</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Intro;
