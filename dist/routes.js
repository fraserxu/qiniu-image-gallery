"use strict";

var React = require("react");
var _ref = require("react-router");

var DefaultRoute = _ref.DefaultRoute;
var NotFoundRoute = _ref.NotFoundRoute;
var Route = _ref.Route;


module.exports = [React.createElement(Route, {
  path: "/",
  name: "app",
  handler: require("./components/App")
}, React.createElement(DefaultRoute, {
  name: "home",
  handler: require("./components/Home")
}), React.createElement(Route, {
  name: "images",
  handler: require("./components/Images")
}), React.createElement(Route, {
  name: "edit",
  handler: require("./components/Edit")
}), React.createElement(Route, {
  name: "image",
  path: "/image/:id",
  handler: require("./components/Image")
})), React.createElement(NotFoundRoute, {
  name: "notfound",
  handler: require("./components/NotFound")
})];