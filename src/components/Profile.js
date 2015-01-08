'use strict';

var React = require('react')

var Profile = React.createClass({
  
  displayName: 'Profile',

  render() {
    var {user} = this.props
    return (
      <div className="Profile">
        <h1>{user.name}</h1>
      </div>
    )
  }
})

module.exports = Profile