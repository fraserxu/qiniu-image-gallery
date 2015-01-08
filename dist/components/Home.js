"use strict";

var React = require("react");
var _ref = require("react-router");

var Link = _ref.Link;


var Home = React.createClass({

  displayName: "Home",

  render: function () {
    return React.createElement("div", {
      className: "Home"
    }, React.createElement("h3", null, "Welcome come home."));
  }
});

module.exports = Home;