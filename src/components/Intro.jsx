var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Intro = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col-md-4">
          <h2>Intro Screen</h2>
          <Link to="/weather">Go!</Link>
        </div>
      </div>
    );
  }
});

module.exports = Intro;
