"use strict";

var React = require("react");
var _ref = require("react-router");

var Link = _ref.Link;
var RouteHandler = _ref.RouteHandler;
var _ref2 = require("../constants");

var TITLE = _ref2.TITLE;


var App = React.createClass({
  displayName: "App",
  statics: {
    title: TITLE
  },

  getInitialState: function () {
    return {
      server: true
    };
  },

  componentDidMount: function () {
    this.setState({ server: false });
  },

  render: function () {
    return React.createElement("div", {
      className: "App"
    }, React.createElement("h1", null, React.createElement(Link, {
      to: "home"
    }, " Fraser Xu's 2014"), " (", React.createElement("small", null, React.createElement(Link, {
      to: "images"
    }, "相册")), ")"), React.createElement("hr", null), React.createElement(RouteHandler, this.props), React.createElement("footer", null, "© Copyright 2015 by Fraser Xu."));
  }
});

module.exports = App;