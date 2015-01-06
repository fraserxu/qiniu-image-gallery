"use strict";

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/qiniu-image-gallery");

// var options = {
//   username: '9L46HZ4o',
//   password: 'K04nNv8X667Z',
//   host: 'mongo-2-1.jae.jd.com',
//   port: 27017,
//   database: 'qiniu-im'
// }

// mongoose.connect('localhost', options)

// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error: '))

var imageSchema = mongoose.Schema({
  key: { type: String, required: true, unique: true },
  name: { type: String },
  description: { type: String }
});

var Image = mongoose.model("Image", imageSchema);

exports.Image = Image;