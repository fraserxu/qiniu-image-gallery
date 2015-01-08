'use strict';

var React = require('react')
var {Link} = require('react-router')

var Home = React.createClass({

  displayName: 'Home',

  render() {
    return (
      <div className="Home">
        <h3>Welcome come home.</h3>
      </div>
    )
  }
})

module.exports = Home