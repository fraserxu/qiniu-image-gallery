"use strict";

var React = require("react");

var Profile = React.createClass({

  displayName: "Profile",

  render: function () {
    var user = this.props.user;
    return React.createElement("div", {
      className: "Profile"
    }, React.createElement("h1", null, user.name));
  }
});

module.exports = Profile;