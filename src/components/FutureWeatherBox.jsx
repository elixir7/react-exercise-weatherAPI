var React = require('react');
var FutureWeatherBoxItem = require('./FutureWeatherBoxItem.jsx');

var boxStyle = {
  backgroundColor: "#e7e7e7"
};

var hrStyle = {
  margin: 0,
  borderTop: "1px solid #333"
}

var FutureWeatherBox = React.createClass({
    render: function() {
      var futureWeatherBoxItem = this.props.tempList.map(function(item, key) {
          return (
            <div key={key}>
              <FutureWeatherBoxItem
                date={item.dt_txt}
                temp={item.main.temp}
              />
            <hr style={hrStyle}/>
          </div>
          );
      });

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
