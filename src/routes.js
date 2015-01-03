'use strict';

var React = require('react')
var {DefaultRoute, NotFoundRoute, Route} = require('react-router')

module.exports = [
  <Route path='/' handler={require('./components/App')}>
    <DefaultRoute name='home' handler={require('./components/Home')}/>
  </Route>,
  <NotFoundRoute name='notfound' handler={require('./components/NotFound')}/>
]