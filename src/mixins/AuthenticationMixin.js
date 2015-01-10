var superagent = require('superagent')

var auth = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, function (res) {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    }.bind(this))
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return 
  },

  onChange() {}
}

var Authentication = {
  statics: {
    willTransitionTo(transition) {
      if (!auth.loggedIn()) {
        Login.attemptedTransition = transition
        transition.redirect('/login')
      }
    }
  }
}

module.exports = Authentication