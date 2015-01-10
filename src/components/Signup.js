'use strict';

var React = require('react')
var {Link} = require('react-router')
var superagent = require('superagent')
var forms = require('newforms')

var {API_URL} = require('../constants')

var Signup = React.createClass({

  displayName: 'Singup',

  statics: {
    title: 'Signup'
  },

  getInitialState: function() {
    return {
      msg: null
    }
  },

  _signup(data) {
    superagent.post(`${API_URL}/signup`)
      .send(data)
      .accept('json').end((err, res) => {
        if (err) console.error('singup error ', err)

        if (res.status === 409) {
          this.setState({ msg : res.body.msg})
        }

        // redirect to profile page?
        console.log('signup success.', res.body)
      })
  },

  _onSubmit(e) {
    e.preventDefault()

    var form = this.refs.signupForm.getForm()
    var isValid = form.validate()
    if (isValid) {
      this._signup(form.cleanedData)
    }
  },

  render() {
    var errMsg
    var signupForm = forms.Form.extend({
      email: forms.EmailField(),
      password: forms.CharField({widget: forms.PasswordInput})
    })

    if (this.state.msg) {
      errMsg = (<div className='msg'>
        {this.state.msg.content}
      </div>)
    }

    return (
      <div className="LoginDialog">
        <div className="Signup">
          <form onSubmit={this._onSubmit}>
            <forms.RenderForm form={signupForm} ref="signupForm"/>
            <button>Sign up</button>
            {errMsg}
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Signup