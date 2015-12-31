var React = require('react');


var ListItem = React.createClass({
    render: function() {
        return (
            <li>
                <h4>{this.props.city}</h4>
                <p>{this.props.temp} °C</p>
            </li>
        );
    }
});

module.exports = ListItem;
