"use strict";

var React = require("react");

var ImageViewer = React.createClass({

  displayName: "ImageViewer",

  getInitialState: function () {
    return {
      scaled: false,
      initialPosition: null
    };
  },

  _onClick: function () {
    this.setState({ scaled: !this.state.scaled });
    this.setInitialPosition(this.getInitialPosition());
  },

  getInitialPosition: function () {
    var imgElement = this.getDOMNode().children[0];
    return {
      x: imgElement.x,
      y: imgElement.y,
      width: imgElement.width,
      height: imgElement.height,
      offsetTop: imgElement.getBoundingClientRect().top
    };
  },

  setInitialPosition: function (position) {
    this.setState({ initialPosition: position });
  },

  render: function () {
    var transfromStyle;
    var viewSrc = this.state.scaled ? "" + this.props.src + "?imageView/2/h/" + window.innerHeight : "" + this.props.src + "?imageView/2/w/300/h/300";

    if (this.state.scaled) {
      var y = (window.innerHeight - this.state.initialPosition.height) / 2 - this.state.initialPosition.offsetTop;
      var x = (window.innerWidth - this.state.initialPosition.width) / 2 - this.state.initialPosition.x;
      var scale = window.innerHeight / this.state.initialPosition.height;
      transfromStyle = {
        WebkitTransform: "translate(" + x + "px, " + y + "px) scale(" + scale + ")",
        WebkitTransition: "all 0.6s",
        position: "relative",
        zIndex: 250
      };
    } else {
      transfromStyle = {
        WebkitTransform: "translate(0, 0) scale(1)",
        WebkitTransition: "all 0.6s"
      };
    }
    return React.createElement("div", {
      className: "Image-container"
    }, React.createElement("img", {
      onClick: this._onClick,
      src: viewSrc,
      style: transfromStyle
    }));
  }
});

module.exports = ImageViewer;