var React = require('react');

var searchBorder = {
  borderRadius: 50,
  border: "2px solid #2EAD5B",
  padding: 10,
  paddingLeft: 20
};
var searchIconBorder = {
  backgroundColor: "#45CA75",
  borderRadius: 50,
  border: "2px solid #2EAD5B",
  width: 46,
  height: 46,
  cursor: "pointer"
}
var inputStyle = {
  backgroundColor: "#46CA75",
  border: "none",
  width: "100%"
};
var searchIcon = {
  fontSize: 14
}
var marginBottom = {
  marginTop: 10,
  marginBottom: 10
}

var SearchBox = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    };
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({
      text: ''
    });
    console.log(this.state.text);
  },

  render: function() {
    return (
      <div className="row" style={marginBottom}>
        <div className="col-xs-12">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="col-xs-9">
                <div style={searchBorder}>
                  <input style={inputStyle} type="text" placeholder="Search..." onChange={ this.onChange } value={ this.state.text } />
                </div>
              </div>
              <div className="col-xs-3">
                <button style={searchIconBorder} type="btn">
                  <i className="fa fa-search" style={searchIcon}></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchBox;
