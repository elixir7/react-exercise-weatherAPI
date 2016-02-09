var React = require('react');
var $ = require('jquery');

var spinner = {
  fontSize: 120
}

var container = {
  height: "100vh",
  marginTop: "50%",
}

var Spinner = React.createClass({

  componentDidUpdate: function(){
    if(this.props.loading === false){
      console.log("Not Loading");
      $("#spinnerContainer").css("display", "none");
    }
  },

  render: function(){
    return (
      <div className="row" id="spinnerContainer">
        <div className="col-xs-6 col-xs-offset-3 text-center" style={container}>
          <i className="fa fa-spinner fa-spin" id="spinner" style={spinner} onClick={this.onClick}></i>
          </div>
      </div>
    );
  }
});

module.exports = Spinner;
