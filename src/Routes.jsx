var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var CreateHistory = require('history/lib/createHashHistory');

var Base = require('./components/Base.jsx');


//Removes the haskey from the url and shows the page name in text
var History = new CreateHistory({
  queryKey: false
});

var Routes = (
  <Router history={History}>
      <Route path="/" component={Base} >
        <Route path="/" />
        <Route path="/" />
      </Route>
  </Router>
);

module.exports = Routes;
