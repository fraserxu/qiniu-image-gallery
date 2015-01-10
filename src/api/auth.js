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

  router.post('/login', passport.authenticate('local-login'))

  router.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
      if (err) return next(err)
      if (!user) return res.status(409).send(info)
      req.logIn(user, (err) => {
        if (err) return next(err)
        res.send(user)
      })
    })(req, res, next)
  })

  return router
}

module.exports = authRoute