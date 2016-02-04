var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require('history/lib/createHashHistory');

var Base = require('./components/Base.jsx');
var WeatherApp = require('./components/WeatherApp.jsx');
var Intro = require('./components/Intro.jsx');
var Day = require('./components/Day.jsx');


//Removes the haskey from the url and shows the page name in text
var History = new CreateHistory({
  queryKey: false
});

var Routes = (
  <Router history={History}>
      <Route path="/" component={Base}>
        <IndexRoute component={Intro} />
        <Route path="/weather" component={WeatherApp} />
        <Route path="/weather/:dayId" component={Day} />
      </Route>
  </Router>
);

module.exports = Routes;
