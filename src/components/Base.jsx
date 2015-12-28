var React = require('react');
var Link = require('react-router').Link

var Base = React.createClass({
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12" >
            <h1>React Skeleton</h1>
            <h3>What's included</h3>
            <p>Npm packages:</p>
            <ul>
              <li>History</li>
              <li>Browserify</li>
              <li>Babel-preset-react</li>
              <li>Http-server</li>
              <li>React</li>
              <li>React-DOM</li>
              <li>Watchify</li>
            </ul>
            <p>Other:</p>
            <ul>
              <li>Bootstrap</li>
              <li>jQuery</li>
            </ul>
            <h3>Find it on github</h3>
            <a href="https://github.com/elixir7/react-skeleton">
              <button type="btn" className="btn btn-primary">Github</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Base;
