'use strict'

var React = require('react')
var {Link, RouteHandler} = require('react-router')

var {TITLE} = require('../constants')

var App = React.createClass({
  statics: {
    title: TITLE
  },

  getInitialState() {
    return {
      server: true
    }
  },

  componentDidMount() {
    this.setState({server: false})
  },

  render() {
    return <div className="App">
      <h1><Link to="home"> Fraser Xu's 2014</Link> (<small><Link to="images">相册</Link></small>)</h1>
      <hr/>
      <RouteHandler {...this.props}/>
      <hr/>
      <footer>
        © Copyright 2015 by Fraser Xu.
      </footer>
    </div>
  }
})

module.exports = App