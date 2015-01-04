'use strict';

var React = require('react')
var {Link} = require('react-router')

var Home = React.createClass({
  render() {
    return <div className="Home">
      <p>
        在去年<a href="http://user.qzone.qq.com/469565300/2">我的2013</a>文章最后， 我引用了乔布斯在斯坦福大学毕业典礼上的讲话，今天再拿他来开始。
      </p>
      <p>
        “You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.”
      </p>
      <p>
        正如上面这段话所描述的，我没有办法预测未来。能做的就是把过去所发生的事情串起来，并且始终相信，生活中的这些瞬间，将会决定和改变我的未来。
      </p>
      <p>
        <Link to="images">查看图片</Link>
      </p>
    </div>
  }
})

module.exports = Home