"use strict";

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/qiniu-image-gallery");

var imageSchema = mongoose.Schema({
  key: { type: String, required: true, unique: true },
  name: { type: String },
  description: { type: String }
});

var Image = mongoose.model("Image", imageSchema);

exports.Image = Image;