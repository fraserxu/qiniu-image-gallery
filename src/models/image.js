var mongoose = require('mongoose')

var imageSchema = mongoose.Schema({
  key: { type: String, required: true, unique: true },
  name: { type: String },
  description: { type: String }
})

module.exports = mongoose.model('Image', imageSchema)