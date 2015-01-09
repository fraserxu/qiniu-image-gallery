'use strict'

var express = require('express')
var router = express.Router()

var authRoute = function(passport) {
  router.get('/user', (req, res, next) => {
    res.json({
      user: {
        name: 'fraserxu'
      }
    })
  })

  router.post('/login', passport.authenticate('local-login'), (req, res, next) => {
    console.log(req.user)
    res.json(req.user)
  })

  router.post('/signup', passport.authenticate('local-signup'), (req, res, next) => {
    console.log('signup', req)
  })

  return router
}

module.exports = authRoute