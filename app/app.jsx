var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation-sites
$(document).foundation();

require('style!css!sass!lookatStyles')

ReactDOM.render(
  <p>boiler plate v3 React-web 14</p>,
  document.getElementById('app')
);
