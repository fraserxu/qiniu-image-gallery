"use strict";

var React = require("react");

var ImageViewer = React.createClass({

  displayName: "ImageViewer",

  getInitialState: function () {
    return {
      scaled: false,
      src: null,
      initialPosition: null
    };
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({ src: nextProps.src });
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
      height: imgElement.height
    };
  },

  setInitialPosition: function (position) {
    this.setState({ initialPosition: position });
  },

  render: function () {
    var transfromStyle;
    var viewSrc = this.state.scaled ? "" + this.state.src + "?imageView/2/w/800/h/800" : "" + this.state.src + "?imageView/2/w/300/h/300";

    if (this.state.scaled) {
      var y = -this.state.initialPosition.y;
      transfromStyle = {
        WebkitTransform: "translate(-100px, " + y + "px) scale(1.5981018394199785)",
        position: "relative",
        zIndex: 250
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