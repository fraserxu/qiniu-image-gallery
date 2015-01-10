"use strict";

var React = require("react");
var _ref = require("react-router");

var Link = _ref.Link;
var superagent = require("superagent");
var forms = require("newforms");

var _ref2 = require("../constants");

var API_URL = _ref2.API_URL;


var Signup = React.createClass({

  displayName: "Singup",

  statics: {
    title: "Signup"
  },

  getInitialState: function () {
    return {
      msg: null
    };
  },

  _signup: function (data) {
    var _this = this;
    superagent.post("" + API_URL + "/signup").send(data).accept("json").end(function (err, res) {
      if (err) console.error("singup error ", err);

      if (res.status === 409) {
        _this.setState({ msg: res.body.msg });
      }

      // redirect to profile page?
      console.log("signup success.", res.body);
    });
  },

  _onSubmit: function (e) {
    e.preventDefault();

    var form = this.refs.signupForm.getForm();
    var isValid = form.validate();
    if (isValid) {
      this._signup(form.cleanedData);
    }
  },

  render: function () {
    var errMsg;
    var signupForm = forms.Form.extend({
      email: forms.EmailField(),
      password: forms.CharField({ widget: forms.PasswordInput })
    });

    if (this.state.msg) {
      errMsg = React.createElement("div", {
        className: "msg"
      }, this.state.msg.content);
    }

    return React.createElement("div", {
      className: "LoginDialog"
    }, React.createElement("div", {
      className: "Signup"
    }, React.createElement("form", {
      onSubmit: this._onSubmit
    }, React.createElement(forms.RenderForm, {
      form: signupForm,
      ref: "signupForm"
    }), React.createElement("button", null, "Sign up"), errMsg)));
  }
});

module.exports = Signup;