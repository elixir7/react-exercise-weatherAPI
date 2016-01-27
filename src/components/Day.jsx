var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var boxStyle = {
  backgroundColor: "#1ab7ea"
};

var Day = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col-md-4 text-center" style={boxStyle}>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <h1>Day Test</h1>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Day;
