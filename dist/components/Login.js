"use strict";

var React = require("react");
var _ref = require("react-router");

var Link = _ref.Link;
var superagent = require("superagent");
var forms = require("newforms");

var _ref2 = require("../constants");

var API_URL = _ref2.API_URL;


var Edit = React.createClass({
  displayName: "Edit",
  statics: {
    title: "Login"

    // fetchData(cb) {
    //   superagent.get(`${API_URL}/images`).accept('json').end(function(err, res) {
    //     cb(err, res && res.body)
    //   })
    // }
  },

  getDefaultProps: function () {
    return { data: {} };
  },

  _login: function (data) {
    superagent.post("" + API_URL + "/login").send(data).accept("json").end(function (err, res) {
      console.log(err, res);
    });
  },

  _onSubmit: function (e) {
    e.preventDefault();

    var form = this.refs.loginForm.getForm();
    var isValid = form.validate();
    if (isValid) {
      this._login(form.cleanedData);
    }
  },

  render: function () {
    var LoginForm = forms.Form.extend({
      username: forms.CharField(),
      password: forms.CharField({ widget: forms.PasswordInput })
    });

    return React.createElement("div", {
      className: "LoginDialog"
    }, React.createElement("div", {
      className: "Login"
    }, React.createElement("form", {
      onSubmit: this._onSubmit
    }, React.createElement(forms.RenderForm, {
      form: LoginForm,
      ref: "loginForm"
    }), React.createElement("button", null, "Log in"))));
  }
});

module.exports = Edit;