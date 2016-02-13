var React = require('react');

var container = {
  marginTop: 20
}

var unit = {
  cursor: "pointer"
}

var Units = React.createClass({
  tempClick: function(e){
    this.props.changeTemp(e.target.innerHTML);
  },

  render: function(){
    return (
      <div className="col-xs-6 text-right">
        <div style={container}>
          <span onClick={this.tempClick} style={unit}>°C</span>
          <span> / </span>
          <span onClick={this.tempClick} style={unit}>°F</span>
        </div>
      </div>
    );
  }
});

module.exports = Units;
