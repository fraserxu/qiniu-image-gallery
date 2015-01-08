'use strict'

var React = require('react')
var superagent = require('superagent')
var {Link, RouteHandler} = require('react-router')

var {API_URL, TITLE} = require('../constants')
var Profile = require('./Profile')

var App = React.createClass({
  statics: {
    title: TITLE,

    fetchData(cb) {
      superagent.get(`${API_URL}/user`).accept('json').end((err, res) => {
        cb(err, res && res.body)
      })
    }
  },

  getDefaultProps() {
    return {data: {}}
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
    var {user} = this.props.data.app

    return <div className="App">
      <h1><Link to="home"> Qiniu Image gallery</Link> (<small><Link to="images">example</Link></small>)</h1>
      <Profile user={user} />
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