'use strict';

var express = require('express')
var qiniu = require('qiniu')

qiniu.conf.ACCESS_KEY = 'bovC2M9LGGAlhABWCjph4mrKM0UCtuVaZFCfrxIh'
qiniu.conf.SECRET_KEY = 'eAMndeEDi4GuxCocxJk1GUx8wqFctZxrIeF_vKDN'

function makeUrl(id) {
  return `http://fraserxu.u.qiniudn.com/${id}`
}

var router = express.Router()

router.get('/images', (req, res, next) => {
  var client = new qiniu.rs.Client()
  qiniu.rsf.listPrefix('fraserxu', '', '', '', function(err, ret) {
    if (!err) {
      var images = ret.items.map(item => {
        return makeUrl(item.key)
      })
      res.json(images)
    } else {
      console.log(err);
      // http://docs.qiniu.com/api/file-handle.html#error-code
    }
  })
  
})

router.get('/things/checkname', (req, res, next) => {
  if (!req.query.name) {
    return res.status(400).json({error: 'No name specified.'})
  }
  res.json({taken: isNameTaken(req.query.name)})
})

router.get('/things/:num', (req, res, next) => {
  var {num} = req.params
  if (!/^(?:[1-9]|10)$/.test(num)) {
    return res.status(404).json({error: 'Invalid thing number.'})
  }
  var index = Number(num) - 1
  if (!THINGS[index]) {
    return res.status(404).json({error: `Thing number ${num} not found.`})
  }
  res.json(THINGS[index])
})

module.exports = router