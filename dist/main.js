"use strict";

require("setimmediate");

var React = require("react");
var Router = require("react-router");

if ("production" !== process.env.NODE_ENV) {
  // Enable React devtools
  window.React = React;
}

var fetchData = require("./utils/fetchData");
var getTitle = require("./utils/getTitle");
var routes = require("./routes");

var appDiv = document.getElementById("app");

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  fetchData(state.routes, state.params, function (err, props) {
    React.render(React.createElement(Handler, props), appDiv);
    document.title = getTitle(state.routes, state.params, props);
  });
});