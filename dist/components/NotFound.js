"use strict";

var React = require("react");

var NotFound = React.createClass({
  displayName: "NotFound",
  statics: {
    title: "404 Not Found"
  },

  render: function () {
    return React.createElement("div", {
      className: "NotFound"
    }, React.createElement("h2", null, "404 Not Found"));
  }
});

module.exports = NotFound;