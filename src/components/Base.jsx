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
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Brand" style={logoStyle}  src="http://img3.wikia.nocookie.net/__cb20090104011038/uncyclopedia/images/4/4c/Striped_apple_logo.png" />
              </a>
            </div>
            <div className="col-md-12">
              <h4 className="navbar-text" style={appName}>Weather App</h4>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Base;
