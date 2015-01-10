'use strict';

var React = require('react')
var {DefaultRoute, NotFoundRoute, Route} = require('react-router')

module.exports = [
  <Route path='/' name='app' handler={require('./components/App')}>
    <DefaultRoute name='home' handler={require('./components/Home')}/>
    <Route name='login' handler={require('./components/Login')}/>
    <Route name='signup' handler={require('./components/Signup')}/>
    <Route name='images' handler={require('./components/Images')}/>
    <Route name='edit' handler={require('./components/Edit')} />
    <Route name='image' path='/image/:id' handler={require('./components/Image')}/>
  </Route>,
  <NotFoundRoute name='notfound' handler={require('./components/NotFound')}/>
]