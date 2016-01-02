var React = require('react');
var FutureWeatherBoxItem = require('./FutureWeatherBoxItem.jsx');

var boxStyle = {
  backgroundColor: "#e7e7e7"
};

var hrStyle = {
  margin: 0,
  borderTop: "1px solid #333"
};

var evalMonth = function(month){
  var monthInWords;
  if(month == "01"){
    monthInWords = "Jan"
  } else if(month == "02"){
    monthInWords = "Feb"
  } else if(month == "03"){
    monthInWords = "Mar"
  } else if(month == "04"){
    monthInWords = "Apr"
  } else if(month == "05"){
    monthInWords = "May"
  } else if(month == "06"){
    monthInWords = "Jun"
  } else if(month == "07"){
    monthInWords = "Jul"
  } else if(month == "08"){
    monthInWords = "Aug"
  } else if(month == "09"){
    monthInWords = "Sep"
  } else if(month == "010"){
    monthInWords = "Oct"
  } else if(month == "11"){
    monthInWords = "Nov"
  } else if(month == "12"){
    monthInWords = "Dec"
  }
  return monthInWords;
};

var FutureWeatherBox = React.createClass({
    render: function() {
      var futureWeatherBoxItem = this.props.tempList.map(function(item, key) {
        if(item.dt_txt.substring(11, 13) == "12"){
          return (
            <div key={key}>
              <FutureWeatherBoxItem
                date={item.dt_txt.substring(8, 10) + " " + evalMonth(item.dt_txt.substring(5, 7))}
                temp={item.main.temp}
                icon={item.weather[0].icon}
              />
              <hr style={hrStyle}/>
            </div>
          );
        }
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