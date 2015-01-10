"use strict";

var React = require("react");
var _ref = require("react-router");

var Link = _ref.Link;
var superagent = require("superagent");
var ImageViewer = require("./ImageViewer");
var AuthenticationMixin = require("../mixins/AuthenticationMixin");

var _ref2 = require("../constants");

var API_URL = _ref2.API_URL;


var Edit = React.createClass({

  displayName: "Edit",

  statics: {
    title: "Edit",

    fetchData: function (cb) {
      superagent.get("" + API_URL + "/images").accept("json").end(function (err, res) {
        cb(err, res && res.body);
      });
    }
  },

  mixins: [AuthenticationMixin],

  getDefaultProps: function () {
    return { data: {} };
  },

  render: function () {
    var images = this.props.data.images;
    return React.createElement("div", {
      className: "Images"
    }, React.createElement("h1", null, "Welcome to the edit page."));
  }
});

module.exports = Edit;