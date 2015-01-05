'use strict';

var express = require('express')
var qiniu = require('qiniu')
var Image = require('./db').Image
var uuid = require('uuid')
var async = require('async')
var router = express.Router()

// TODO: load from env
qiniu.conf.ACCESS_KEY = 'bovC2M9LGGAlhABWCjph4mrKM0UCtuVaZFCfrxIh'
qiniu.conf.SECRET_KEY = 'eAMndeEDi4GuxCocxJk1GUx8wqFctZxrIeF_vKDN'

router.get('/images', (req, res, next) => {
  var client = new qiniu.rs.Client()
  qiniu.rsf.listPrefix('fraserxu', '', '', '', function(err, ret) {
    if (!err) {
      var images = ret.items.map(item => {
        return `http://fraserxu.u.qiniudn.com/${item.key}`
      })
      res.json(images)
    } else {
      next(err)
    }
  })
  
})

router.get('/initdb', (req, res, next) => {
  var client = new qiniu.rs.Client()
  qiniu.rsf.listPrefix('fraserxu', '', '', '', function(err, ret) {
    if (!err) {
      var images = ret.items.map(item => {
        return `http://fraserxu.u.qiniudn.com/${item.key}`
      })
      async.map(images, (image) => {
        Image.create({key: image}, (err, result) => {
          return result
        })
      }, (err, results) => {
        if (err) {
          return next(err)
        } else {
          res.json(results)
        }
      })
    } else {
      next(err)
    }
  })
})

router.get('/collections', (req, res, next) => {
  Image.find({}).exec((err, results) => {
    if(err) {
      return next(err)
    } else {
      var data = results.map((result) => result.key)
      res.json(data)
    }
  })
})

router.get('/image/:key', (req, res, next) => {
  Image.findOne({key: req.params.key}, (err, data) => {
    if (err) return next(err)
    if (data) res.json(data)
  })
})

router.put('/image/:key', (req, res, next) => {
  Image.findOneAndUpdate({key: req.params.key}, req.body, {}, (err, data) => {
    if (err) {
      return next(err)
    } else {
      res.json(data)
    }
  })
})

router.post('/image', (req, res, next) => {
  var image = new Image({
    key: req.body.key,
    description: 'test description'
  })

  Image.findOne({id: image.id}, (err, data) => {
    if (err) return next(err)
    if (data) {
      res.send('Oops, this image has already exist.')
    } else {
      image.save((err) => {
        if(err) {
          return next(err)
        } else {
          res.json(image)
        }
      })
    }
  })
})

module.exports = router