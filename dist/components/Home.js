"use strict";

var React = require("react");
var _ref = require("react-router");

var Link = _ref.Link;


var Home = React.createClass({
  displayName: "Home",
  render: function () {
    return React.createElement("div", {
      className: "Home"
    }, React.createElement("p", null, "This app is rendered with the same codebase on the client and server", "using ", React.createElement("a", {
      href: "http://facebook.github.io/react/"
    }, "React"), " and ", React.createElement("a", {
      href: "https://github.com/rackt/react-router"
    }, "react-router"), "."), React.createElement("p", null, "Full pages are pre-rendered on the server and – when it can –", "the client rehydrates the state of the current page on initial load and", "takes over."), React.createElement("p", null, "If you forgot to pay your JavaScript bill (or you're using a laggy or", "slow connection, or your mobile provider breaks stuff with poor attempts", "at script injection, or…), this app will keep working using HTTP", "round trips to the server."));
  }
});

module.exports = Home;