"use strict";

var React = require("react");
var _ref = require("react-router");

var Link = _ref.Link;


var Home = React.createClass({
  displayName: "Home",
  render: function () {
    return React.createElement("div", {
      className: "Home"
    }, React.createElement("p", null, "在去年", React.createElement("a", {
      href: "http://user.qzone.qq.com/469565300/2"
    }, "我的2013"), "文章最后， 我引用了乔布斯在斯坦福大学毕业典礼上的讲话，今天再拿他来开始。"), React.createElement("p", null, "“You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.”"), React.createElement("p", null, "正如上面这段话所描述的，我没有办法预测未来。能做的就是把过去所发生的事情串起来，并且始终相信，生活中的这些瞬间，将会决定和改变我的未来。"), React.createElement("p", null, React.createElement(Link, {
      to: "images"
    }, "查看图片")));
  }
});

module.exports = Home;