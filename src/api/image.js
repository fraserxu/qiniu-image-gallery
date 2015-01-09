'use strict'

var express = require('express')
var qiniu = require('qiniu')
var async = require('async')
var router = express.Router()

var Image = require('../models/image')

qiniu.conf.ACCESS_KEY = process.env.QINIU_ACCESS_KEY
qiniu.conf.SECRET_KEY = process.env.QINIU_SECRET_KEY
const bucket = process.env.QINIU_BUCKET
const domain = process.env.QINIU_DOMAIN

router.get('/images', (req, res, next) => {
  var client = new qiniu.rs.Client()
  qiniu.rsf.listPrefix(bucket, '', '', '', function(err, ret) {
    if (!err) {
      var images = ret.items.map(item => {
        return `http://${bucket}${domain}/${item.key}`
      })
      res.json(images)
    } else {
      next(err)
    }
  })
})

router.get('/initdb', (req, res, next) => {
  var client = new qiniu.rs.Client()
  qiniu.rsf.listPrefix(bucket, '', '', '', function(err, ret) {
    if (!err) {
      var images = ret.items.map(item => {
        return `http://${bucket}${domain}/${item.key}`
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
    if (err) {
      return next(err)
    } else {
      var data = results.map((result) => {
        return {
          key: result.key,
          description: result.description || ''
        }
      })
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