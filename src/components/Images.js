'use strict';

var React = require('react')
var {Link} = require('react-router')
var superagent = require('superagent')

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
      <h2>Images</h2>
      <div id="grid-gallery" className="grid-gallery">
        <section className="grid-wrap">
          <ul className="grid">
            <li className="grid-sizer"></li>
            {images && images.map((image, index) => <li>
              <figure>
                <img src={image + '?imageView/2/w/203/h/203'} key={index} /> 
              </figure>
            </li>)}
          </ul>
        </section>
      </div>
    </div>
  }
})

module.exports = Images