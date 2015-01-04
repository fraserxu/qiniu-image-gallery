"use strict";

var React = require("react");
var superagent = require("superagent");

var _ref = require("../constants");

var API_URL = _ref.API_URL;


var Thing = React.createClass({
  displayName: "Thing",
  statics: {
    getTitle: function (props, params) {
      return "Thing: " + props.data.thing.name;
    },

    fetchData: function (params, cb) {
      superagent.get("" + API_URL + "/things/" + params.num).end(function (err, res) {
        // TODO How should 404s be handled?
        cb(err, res && res.body);
      });
    }
  },

  getDefaultProps: function () {
    return { data: {} };
  },

  render: function () {
    var thing = this.props.data.thing;
    if (thing.error) {
      return React.createElement("h3", null, "Error: ", thing.error);
    }
    return React.createElement("div", {
      className: "Thing"
    }, React.createElement("h3", {
      className: "Thing__name"
    }, thing.name), React.createElement("div", {
      className: "Thing__price"
    }, React.createElement("strong", null, "¤", thing.price.toFixed(2))), React.createElement("div", {
      className: "Thing__description"
    }, thing.description));
  }
});

module.exports = Thing;