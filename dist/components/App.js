"use strict";

var React = require("react");
var superagent = require("superagent");
var _ref = require("react-router");

var Link = _ref.Link;
var RouteHandler = _ref.RouteHandler;
var _ref2 = require("../constants");

var API_URL = _ref2.API_URL;
var TITLE = _ref2.TITLE;
var Header = require("./Header");

var App = React.createClass({

  displayName: "App",

  statics: {
    title: TITLE,

    fetchData: function (cb) {
      superagent.get("" + API_URL + "/user").accept("json").end(function (err, res) {
        cb(err, res && res.body);
      });
    }

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
    var user = this.props.data.app.user;


    return React.createElement("div", {
      className: "App"
    }, user.loggedIn ? React.createElement(Header, {
      user: user
    }) : "", React.createElement(RouteHandler, this.props), React.createElement("footer", null, "© Copyright 2015 by Fraser Xu."));
  }
});

module.exports = App;