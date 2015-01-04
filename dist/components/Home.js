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
    }, "我的2013"), "文章最后, 我引用了乔布斯在斯坦福大学毕业典礼上的讲话, 今天再拿他来开始。"), React.createElement("p", null, "“You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.”"), React.createElement("p", null, "正如上面这段话所描述的, 我没有办法预测2015年或是更远的将来会发生什么。能做的就是把过去, 在2014年所发生的这些事情串起来，并且始终相信，生活中的这些瞬间，将会决定和改变我的未来。"), React.createElement("h3", null, "工作"), React.createElement("p", null, "13年春节过后我加入了现在的公司Wiredcraft,刚开始是以实习生的身份进入的公司,到现在已经转正,算起来刚好快两年时间."), React.createElement("p", null, "产品方面, 年初的工作主要集中在Octochat上. Octochat是一款基于Github的即时通讯工具, 目标用户是重度使用Github的团队. 主要原理是通过Github的API获取一个Github组织的所有团队成员", "列表, 然后创建对应的聊天房间, 另外带有即时视频聊天, 文件共享等功能, 还有一个使用node-webkit打包好的跨平台原生客户端. 前后大概也快花了大半年的时间, 后来因为各种原因, 我们放弃了这个产品."), React.createElement("p", null, "虽然最终放弃了这个产品, 但是从个人技术积累的角度来讲, 还是有比较大的收获. 先后了解了xmpp协议, webrtc, Angularjs复杂单页面应用, node-webkit构建原生桌面应用, Github Oauth, Docker等技术."), React.createElement("p", null, "我们放弃Octochat的原因之一, 是因为产品的目标用户群比较特殊, 团队使用成本也比较高, 到最后几乎没有任何用户. 而当时我们也在开发另外一个基于Github的类似Trello的看板管理工具Sweepboard(原Octokan).", "这个应用的复杂度小于前者, 简单来讲, 就是通过使用Github的API, 获取一个项目对应的issue列表, 然后通过label来划分为不同的列表, 用户可以通过拖拽的方式来简单快捷的管理项目的进度. 重要的是, 后者的使用", "成本相对较低, 或者说没有任何成本. 只需使用Github账号登录, 然后就可以开始使用. 这个产品当时是由我们的一个实习生负责开发的, 发布后也积累的200多个用户. 通过一段时间的讨论后, 最终决定将时间和精力发在后者上."), React.createElement("p", null, "此后围绕Sweepboard前后开发了2个多月. 这个产品主要的收获是尝试使用了CoffeeScript来做开发, 加上很多OO的写法, 另外还掌握了PouchDB数据库的使用."), React.createElement("p", null, "因为公司目前为止还没有一个独立的盈利的产品, 所以很多时候我们都需要对外做一些Service的工作(外包). 大概是7-8月份, 我接手了一个移动端的应用. 应用的功能跟打车应用Uber很像, 区别在于交通工具不是小汽车而是公交车."), React.createElement("p", null, "这是我第一次做移动端的应用, 因为对Angularjs比较熟悉, 所以当时我们选择了使用Ionic框架, 结合使用Cordova, 实现了GPS定位, PUSH Notification, 短信邀请, 用户管理等功能."), React.createElement("p", null, "年末, 又接手了另外一个数据可视化的项目CSViz. 我所负责的主要是通过读取一些处理后CSV文件, 生成了一个基于Mapbox的Choropleth地图, 和D3的一些图表. 技术上最大的改变是抛弃了Angularjs, 转向Reactjs. 对于个人而言", "这个也是最喜欢的一个项目. 首先是开始在实际项目中学习和使用了Reactjs这一框架, 配合flux架构, 开发起来更加高效, bug相对也比较少. 另外就是终于有机会使用D3.js, 之前有尝试过学习, 但是由于没有具体的项目, 所以进展不大."), React.createElement("h3", null, "社交"), React.createElement("p", null, "加入Wiredcraft觉得最好的一点, 就是知道了什么叫", React.createElement("b", null, "开源"), ". 公司不但鼓励我们参与国内外大大小小技术活动, 更是花了很多时间和精力在组织和建设开源社区."), React.createElement("p", null, "受公司的影响, 在今年, 我和几位线上认识的好友题叶和Undozen组建了", React.createElement("a", {
      href: "http://react-china.org"
    }, "React中文社区"), ", 目的是推动React在中国的发展. 此外, 我还成为了Shanghai Javascript Meetup的组织者, 到目前", "已经有了250多个成员, 也算是上海最大的JavaScript社区之一."), React.createElement("p", null, "自己之所以积极地参与开源社区中, 是因为在这个过程中, 不仅仅认识和结交了很多志同道合的朋友, 更提升了视野, 从而促使自己去学习和提升技术水平."), React.createElement("p", null, "活跃于线上线下各个社区, 也给自己赢得了很多不错的机遇. 今年不得不提的就是年中的一次跳槽风波. 从硅谷回来的两位创业者从Github上找到了我, 希望我能加入他们的团队, 一起去做一款线上教育的产品. 他们看了我的代码和简介, 见面交流后后对我还算比较", "满意, 所以提出了非常优厚的条件(高于现在很多的工资以及期权)邀请我加入, 做他们前端的负责人. 对于我个人而言, 抛开待遇上的提升不看, 一个很好的创业经历一直是自己所向往的, 而作为某个方面的负责人又对自己的技术和能力提出了更高的要求, 自己似乎没有", "理由拒绝."), React.createElement("p", null, "那段时间跟很多朋友聊了我当时的想法, 感谢所有人的建议. 从刚进公司的菜鸟, 到现在能够独立完成一定的任务, 自己一直都是处在一个学习的过程, 对公司的贡献也非常有限; 其次, 自己的能力和经验还无法达到作为leader的角色, 而如果成为", "一个leader之后, 就没有足够的自由时间去接触自己还没来得及尝试和学习的新技术, 所以最终, 我还是选择了留下. 过了几个月再回头看, 也没有什么好后悔的, 因为现在的感觉依然和以前一样, 自己在每天进步, 这样就够了."), React.createElement("h3", null, "生活"), React.createElement("p", null, "生活一直是我觉得比较难写的地方. 先前偶尔在空间发发说说, 今年好像很少, 所以也不知道发生了什么. 想到什么写什么好了."), React.createElement("p", null, "今年主要搬了一次家, 来来回回换了几个室友, 都还不错."), React.createElement("p", null, "现在住的房子里面有厨房, 一年到头, 或多或少洗了几次碗, 做了几次菜."), React.createElement("p", null, "快两年了, 在上海也认识了一些朋友. 关系最好的还是骑行群里的那些小伙伴, 时常聚在一起吃饭, 还有过6天的长途骑行经历."), React.createElement("p", null, "年初把户口弄到了深圳, 和彭颖又去了一次香港, 也体验了20多天的远程办公."), React.createElement("p", null, "周末即使是一个人, 也会跑去打篮球."), React.createElement("p", null, "生活太散, 不好写, 所以整理了一些图片, 有兴趣的朋友可以在这里", React.createElement(Link, {
      to: "images"
    }, "查看图片"), "."), React.createElement("p", null, "最后, 祝所有的朋友和我一样, 一切都好, 只欠烦恼."));
  }
});

module.exports = Home;