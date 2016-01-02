var React = require('react');

var logoStyle = {
  maxHeight: 20,
  width: "auto"
};

var appName = {
  color: "#333333"
};

var Base = React.createClass({
  render: function(){
    return(
        <div className="container-fluid">
          {this.props.children}
        </div>
    );
  }
});

module.exports = Base;
