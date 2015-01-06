'use strict';

var React = require('react')
var {Link} = require('react-router')
var superagent = require('superagent')
var ImageViewer = require('./ImageViewer')

var {API_URL} = require('../constants')

var Images = React.createClass({
  statics: {
    title: 'Images',

    fetchData(cb) {
      superagent.get(`${API_URL}/images`).accept('json').end(function(err, res) {
        cb(err, res && res.body)
      })
    }
  },

  getDefaultProps() {
    return {data: {}}
  },

  render() {
    var {images} = this.props.data
    return <div className="Images">
      <div id="grid-gallery" className="grid-gallery">
        <section className="grid-wrap">
          <ul className="grid">
            {images && images.map((image, index) => <li key={image}>
              <figure>
                <ImageViewer src={image} />
              </figure>
            </li>)}
          </ul>
        </section>
      </div>
    </div>
  }
})

module.exports = Images