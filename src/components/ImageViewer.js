'use strict';

var React = require('react')

var ImageViewer = React.createClass({

  displayName: 'ImageViewer',

  getInitialState() {
    return {
      scaled: false,
      src: null,
      initialPosition: null
    }
  },

  componentWillReceiveProps(nextProps) {
    this.setState({src: nextProps.src})
  },

  _onClick() {
    this.setState({scaled: !this.state.scaled})
    this.setInitialPosition(this.getInitialPosition())
  },

  getInitialPosition() {
    var imgElement = this.getDOMNode().children[0]
    return {
      x: imgElement.x,
      y: imgElement.y,
      width: imgElement.width,
      height: imgElement.height
    }
  },

  setInitialPosition(position) {
    this.setState({initialPosition: position})
  },

  render() {
    var transfromStyle
    var viewSrc = this.state.scaled ? `${this.state.src}?imageView/2/w/800/h/800` : `${this.state.src}?imageView/2/w/300/h/300`

    if (this.state.scaled) {
      var y = - this.state.initialPosition.y
      transfromStyle = {
        WebkitTransform: `translate(-100px, ${y}px) scale(1.5981018394199785)`,
        position: 'relative',
        zIndex: 250
      }
    }
    return <div className='Image-container'>
      <img onClick={this._onClick} src={viewSrc} style={transfromStyle} /> 
    </div>
  }
})

module.exports = ImageViewer