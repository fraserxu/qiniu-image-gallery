'use strict';

var React = require('react')
var {Link} = require('react-router')
var superagent = require('superagent')
var forms = require('newforms')

var {API_URL} = require('../constants')

var Edit = React.createClass({
  statics: {
    title: 'Login'

    // fetchData(cb) {
    //   superagent.get(`${API_URL}/images`).accept('json').end(function(err, res) {
    //     cb(err, res && res.body)
    //   })
    // }
  },

  getDefaultProps() {
    return {data: {}}
  },

  _login(data) {
    superagent.post(`${API_URL}/login`)
      .send(data)
      .accept('json').end((err, res) => {
        console.log(err, res)
      })
  },

  _onSubmit(e) {
    e.preventDefault()

    var form = this.refs.loginForm.getForm()
    var isValid = form.validate()
    if (isValid) {
      this._login(form.cleanedData)
    }
  },

  render() {
    var LoginForm = forms.Form.extend({
      username: forms.CharField(),
      password: forms.CharField({widget: forms.PasswordInput})
    })

    return <div className="LoginDialog">
      <div className="Login">
        <form onSubmit={this._onSubmit}>
          <forms.RenderForm form={LoginForm} ref="loginForm"/>
          <button>Log in</button>
        </form>
      </div>
    </div>
  }
})

module.exports = Edit