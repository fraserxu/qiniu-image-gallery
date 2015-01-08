"use strict";

var React = require("react");
var _ref = require("react-router");

var Link = _ref.Link;


var Profile = require("./Profile");

var Header = React.createClass({

  displayName: "Header",

  render: function () {
    var user = this.props.user;


    return React.createElement("div", {
      className: "Header"
    }, React.createElement("h1", null, React.createElement(Link, {
      to: "home"
    }, " Qiniu Image gallery"), " (", React.createElement("small", null, React.createElement(Link, {
      to: "images"
    }, "example")), ")"), React.createElement(Profile, {
      user: user
    }));
  }
});

module.exports = Header;