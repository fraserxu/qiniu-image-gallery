'use strict';

var React = require('react')
var {Link} = require('react-router')

var Profile = require('./Profile')

var Header = React.createClass({

  displayName: 'Header',

  render() {
    let {user} = this.props

    return <div className="Header">
      <h1><Link to="home"> Qiniu Image gallery</Link> (<small><Link to="images">example</Link></small>)</h1>
      <Profile user={user} />
    </div>
  }
})

module.exports = Header