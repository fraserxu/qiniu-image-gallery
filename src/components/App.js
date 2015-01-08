'use strict'

var React = require('react')
var superagent = require('superagent')
var {Link, RouteHandler} = require('react-router')

var {API_URL, TITLE} = require('../constants')
var Header = require('./Header')

var App = React.createClass({

  displayName: 'App',

  statics: {
    title: TITLE,

    fetchData(cb) {
      superagent.get(`${API_URL}/user`).accept('json').end((err, res) => {
        cb(err, res && res.body)
      })
    }

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
    let {user} = this.props.data.app

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