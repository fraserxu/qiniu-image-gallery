"use strict";

var React = require("react");
var _ref = require("react-router");

var Link = _ref.Link;
var superagent = require("superagent");
var ImageViewer = require("./ImageViewer");

var _ref2 = require("../constants");

var API_URL = _ref2.API_URL;


var Images = React.createClass({
  displayName: "Images",
  statics: {
    title: "Images",

    fetchData: function (cb) {
      superagent.get("" + API_URL + "/images").accept("json").end(function (err, res) {
        cb(err, res && res.body);
      });
    }
  },

  getDefaultProps: function () {
    return { data: {} };
  },

  render: function () {
    var images = this.props.data.images;
    return React.createElement("div", {
      className: "Images"
    }, React.createElement("div", {
      id: "grid-gallery",
      className: "grid-gallery"
    }, React.createElement("section", {
      className: "grid-wrap"
    }, React.createElement("ul", {
      className: "grid"
    }, images && images.map(function (image, index) {
      return React.createElement("li", {
        key: image
      }, React.createElement("figure", null, React.createElement(ImageViewer, {
        src: image
      })));
    })))));
  }
});

module.exports = Images;