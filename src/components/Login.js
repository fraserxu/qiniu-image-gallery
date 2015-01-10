'use strict';

var React = require('react')
var {Link} = require('react-router')
var superagent = require('superagent')
var forms = require('newforms')

var {API_URL} = require('../constants')

var Login = React.createClass({

  displayName: 'Login',

  statics: {
    title: 'Login',
    attemptedTransition: null
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
      email: forms.CharField(),
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

module.exports = Login