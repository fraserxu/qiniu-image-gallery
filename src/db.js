var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/qiniu-image-gallery')

var options = {
  username: '9L46HZ4o',
  password: 'K04nNv8X667Z',
  host: '10.0.31.57',
  port: 27017,
  database: 'xvfeng123_mongo_2w89gt45'
}

console.log(`mongodb://${options.username}:${options.password}@${options.host}:${options.port}/${options.database}`)
mongoose.connect(`mongodb://${options.username}:${options.password}@${options.host}:${options.port}/${options.database}`)
// mongoose.connect('localhost', options)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))

var imageSchema = mongoose.Schema({
  key: { type: String, required: true, unique: true },
  name: { type: String },
  description: { type: String }
})

var Image = mongoose.model('Image', imageSchema)

exports.Image = Image