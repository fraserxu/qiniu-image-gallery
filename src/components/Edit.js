'use strict';

var React = require('react')
var {Link} = require('react-router')
var superagent = require('superagent')
var ImageViewer = require('./ImageViewer')
var AuthenticationMixin = require('../mixins/AuthenticationMixin')

var {API_URL} = require('../constants')

var Edit = React.createClass({

  displayName: 'Edit',

  mixins: [ AuthenticationMixin ],

  statics: {
    title: 'Edit',

    fetchData(cb) {
      superagent.get(`${API_URL}/images`).accept('json').end(function(err, res) {
        cb(err, res && res.body)
      })
    }
  },

  getDefaultProps() {
    return {data: {}}
  },

  render() {
    var {images} = this.props.data
    return <div className="Images">
      <h1>Welcome to the edit page.</h1>
    </div>
  }
})

module.exports = Edit