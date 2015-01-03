'use strict'

require('node-jsx').install({extension: '.js'})

// var debug = require('debug')('qiniu-image-gallery')
var compression = require('compression')
var express = require('express')
var errorhandler = require('errorhandler')
var path = require('path')
var logger = require('morgan')
var React = require('react')
var server = express()

var api = require('./api')
var pkg = require('../package.json')
var reactRouter = require('./react-router-middleware')

server.set('view engine', 'jade')
server.set('views', path.join(__dirname, '../views'))
server.use(logger(server.get('env') === 'production' ? 'combined' : 'dev'))
server.use(express.static(path.join(__dirname, '../static')))
server.use(compression())

server.use('/api', api)
server.use(reactRouter(require('./routes')))

if ('production' != server.get('env')) {
  server.use(errorhandler())
}

server.set('host', process.env.HOST || '0.0.0.0')
server.set('port', process.env.PORT || 4000)
server.listen(server.get('port'), function() {
  console.log(
  	`${pkg.name} server listening on http://${server.get('host')}:${server.get('port')}`
  )
})