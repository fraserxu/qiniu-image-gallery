"use strict";

var express = require("express");
var qiniu = require("qiniu");
var async = require("async");
var router = express.Router();

var Image = require("./db").Image;

qiniu.conf.ACCESS_KEY = process.env.QINIU_ACCESS_KEY;
qiniu.conf.SECRET_KEY = process.env.QINIU_SECRET_KEY;
var bucket = process.env.QINIU_BUCKET;
var domain = process.env.QINIU_DOMAIN;

router.get("/images", function (req, res, next) {
  var client = new qiniu.rs.Client();
  qiniu.rsf.listPrefix(bucket, "", "", "", function (err, ret) {
    if (!err) {
      var images = ret.items.map(function (item) {
        return "http://" + bucket + "" + domain + "/" + item.key;
      });
      res.json(images);
    } else {
      next(err);
    }
  });
});

router.get("/initdb", function (req, res, next) {
  var client = new qiniu.rs.Client();
  qiniu.rsf.listPrefix(bucket, "", "", "", function (err, ret) {
    if (!err) {
      var images = ret.items.map(function (item) {
        return "http://" + bucket + "" + domain + "/" + item.key;
      });
      async.map(images, function (image) {
        Image.create({ key: image }, function (err, result) {
          return result;
        });
      }, function (err, results) {
        if (err) {
          return next(err);
        } else {
          res.json(results);
        }
      });
    } else {
      next(err);
    }
  });
});

router.get("/collections", function (req, res, next) {
  Image.find({}).exec(function (err, results) {
    if (err) {
      return next(err);
    } else {
      var data = results.map(function (result) {
        return {
          key: result.key,
          description: result.description || ""
        };
      });
      res.json(data);
    }
  });
});

router.get("/image/:key", function (req, res, next) {
  Image.findOne({ key: req.params.key }, function (err, data) {
    if (err) return next(err);
    if (data) res.json(data);
  });
});

router.put("/image/:key", function (req, res, next) {
  Image.findOneAndUpdate({ key: req.params.key }, req.body, {}, function (err, data) {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

router.post("/image", function (req, res, next) {
  var image = new Image({
    key: req.body.key,
    description: "test description"
  });

  Image.findOne({ id: image.id }, function (err, data) {
    if (err) return next(err);
    if (data) {
      res.send("Oops, this image has already exist.");
    } else {
      image.save(function (err) {
        if (err) {
          return next(err);
        } else {
          res.json(image);
        }
      });
    }
  });
});

router.get("/user", function (req, res, next) {
  res.json({
    user: {
      name: "fraserxu"
    }
  });
});

router.post("/login", function (req, res, next) {
  console.log("body", req.body);
  res.json({
    user: {
      name: "fraserxu"
    }
  });
});

module.exports = router;