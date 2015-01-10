'use strict'

var React = require('react')
var superagent = require('superagent')
var {Link, RouteHandler} = require('react-router')
var AuthenticationMixin = require('../mixins/AuthenticationMixin')

var {API_URL, TITLE} = require('../constants')
var Header = require('./Header')

var App = React.createClass({

  displayName: 'App',

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
    // let {user} = this.props.data.app

    return <div className="App">

      { user.loggedIn
        ? <Header user={user} />
        : ''
      }

      <RouteHandler {...this.props}/>
      
      <footer>
        © Copyright 2015 by Fraser Xu.
      </footer>
    </div>
  }
})

module.exports = App