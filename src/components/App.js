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
      <h1><Link to="home"> Qiniu Image Gallery</Link> <small>({this.state.server ? 'server' : 'client'} version)</small></h1>
      <hr/>
      <RouteHandler {...this.props}/>
      <footer>
        <a href="https://github.com/fraserxu/qiniu-image-gallery">
          <img
            style={{position: 'absolute', top: 0, right: 0, border: 0}}
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"
          />
        </a>
      </footer>
    </div>
  }
})

module.exports = App