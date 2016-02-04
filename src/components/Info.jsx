var React = require('react');

var popupInfo = {
  backgroundColor: "coral",
  height: "100%",
  position: "absolute",
  zIndex: 2,
  display: "none"
};

var infoIcons = {
  fontSize: 14,
  marginRight: 10
}

var iconText = {
  fontSize: 14,
  marginBottom: 20
}

var timesIcon = {
  marginTop: 20,
  fontSize: 24
}

var marginBottom = {
  marginBottom: 20
}

var Info = React.createClass({
  render: function(){
    return (
      <div className="col-sm-12" id="popupInfo" style={popupInfo}>
        <div className="row">
          <div className="col-sm-12">
            <i className="fa fa-times" style={timesIcon} onClick={this.props.closeInfo}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>Info</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>Icons <i className="fa fa-question" /></h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <i className="fa fa-clock-o" style={infoIcons}/>
            <span style={iconText}>is the time.</span>
          </div>
        </div>
        <div className="row  text-center">
          <div className="col-sm-12">
            <i className="wi wi-day-cloudy" style={infoIcons}/>
            <span style={iconText}>represents the weather.</span>
          </div>
        </div>
        <div className="row  text-center">
          <div className="col-sm-12">
            <i className="wi wi-strong-wind" style={infoIcons}/>
            <span style={iconText}>is the wind speed.</span>
          </div>
        </div>
        <div className="row  text-center">
          <div className="col-sm-12">
            <i className="wi wi-thermometer" style={infoIcons}/>
            <span style={iconText}>is the temperature.</span>
          </div>
        </div>
        <div className="row  text-center" style={marginBottom}>
          <div className="col-sm-12">
            <i className="wi wi-wind wi-towards-nne" style={infoIcons}/>
            <span style={iconText}>shows where the wind is blowing.</span>
          </div>
        </div>
        <div className="row  text-center">
          <div className="col-sm-8 col-sm-offset-2">
            <h3>About <i className="fa fa-smile-o fa-spin" /></h3>
            <p>This weather app is built with Java Script and the JS framework React. This app was built for ITG Gothenburg Awards 2016 by Isak Åslund 3C. The code is open source and it is avaliable <a href="https://github.com/elixir7/react-exercise-weatherAPI">here</a>. If you have any questions feel free to contact me via <a href="mailto:aslundisak@gmai.com">email</a>.</p>
          </div>
        </div>
      </div>

    );
  }
});
module.exports = Info;
