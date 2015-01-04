"use strict";

webpackJsonprequire([2], { 76: function (e, t, n) {
    "use strict";var r = n(1), i = n(75), o = n(231), s = { mixins: [i, o], propTypes: { lightboxState: r.PropTypes.oneOf(["active", "leaving"]), isImageInLightbox: r.PropTypes.func.isRequired }, componentDidUpdate: function (e, t) {
        (e.lightboxState !== this.props.lightboxState || t.isInViewport !== this.state.isInViewport) && this.updateImageQueue();
      }, getImageOptions: function () {
        var e = this.getImage();return { image: e, sizes: { thumb: !0, small: this.state.imageSize > 500, normal: !0, retina: window.devicePixelRatio > 1.5 && this.state.isInViewport, original: this.props.isImageInLightbox(e) } };
      } };e.exports = s;
  }, 96: function (e, t, n) {
    "use strict";var r = n(1), i = n(2), o = n(134), s = r.createClass({ displayName: "Img", mixins: [o, i], propTypes: { onTransitionEnd: r.PropTypes.func.isRequired, preventSave: r.PropTypes.bool.isRequired }, getDefaultProps: function () {
        return { preventSave: !0 };
      }, render: function () {
        return r.createElement("img", r.__spread({}, this.props, { onContextMenu: this.handleContextMenu, onDragStart: this.handleDragStart }));
      }, handleTransitionEnd: function () {
        this.props.onTransitionEnd();
      }, handleContextMenu: function (e) {
        this.props.preventSave ? e.preventDefault() : this.props.onContextMenu && this.props.onContextMenu(e);
      }, handleDragStart: function (e) {
        this.props.preventSave ? e.preventDefault() : this.props.onDragStart && this.props.onDragStart(e);
      } });e.exports = s;
  }, 129: function (e, t, n) {
    "use strict";var r = n(1), i = n(75), o = n(2), s = n(4), a = n(90), l = r, c = l.PropTypes, u = r.createClass({ displayName: "BlurredBackground", mixins: [i, o, s], propTypes: { background: c.shape({ url: c.string.isRequired }).isRequired }, getImageSizes: function () {
        return { "default": 480, xs: 640, sm: 640, md: 640, lg: 640, xl: 640 };
      }, getImageOptions: function () {
        return { image: this.props.background, blur: 32, sizes: { small: !0, normal: !0 } };
      }, componentDidUpdate: function (e) {
        e.background !== this.props.background && this.updateImageQueue();
      }, render: function () {
        var e = this.props.background.colors, t = this.hasLoadedImage(), n = {};return (n.backgroundImage = t ? this.getBackgroundImageUrl() : a("#" + e.top, "#" + e.bottom), r.createElement("div", { className: this.getClassName(), style: n }, this.renderLoaderImg()));
      } });e.exports = u;
  }, 133: function (e, t, n) {
    "use strict";var r = n(1), i = n(47), o = n(217), s = n(19), a = n(23), l = a.isMobile, c = n(20), u = r, p = u.PropTypes, d = { propTypes: { stamp: p.object.isRequired }, getInitialState: function () {
        return { isPinItVisible: !1 };
      }, togglePinItOnMobile: function () {
        if (l()) {
          var e = this.state.isPinItVisible;this.setState({ isPinItVisible: !e });
        }
      }, renderPinItOnMobile: function (e) {
        return this.state.isPinItVisible ? new o({ onTouchTap: this._handlePinItClick.bind(this, e) }) : void 0;
      }, _handlePinItClick: function (e) {
        i.shareStamp({ stampId: this.props.stamp.id, service: s.PINTEREST, imageUrl: e, source: c.PIN_IT_BUTTON });
      } };e.exports = d;
  }, 137: function (e, t, n) {
    "use strict";var r = n(1), i = n(218), o = n(129), s = n(2), a = n(274), l = n(4), c = r, u = c.PropTypes, p = r.createClass({ displayName: "AudioContainer", mixins: [l, s], propTypes: { background: u.object.isRequired, title: u.string.isRequired, username: u.string.isRequired, duration: u.number.isRequired, url: u.string.isRequired, cover: u.node.isRequired, trackList: u.node }, className: "stamp-AudioContainer", getCSSModifiers: function () {
        return { supportsSticky: a() };
      }, render: function () {
        return r.createElement("div", { className: this.getClassName(), "data-scroll-anchor": !0 }, r.createElement("div", { className: "stamp-AudioContainer-container" }, r.createElement("div", { className: "stamp-AudioContainer-bg" }, r.createElement(o, { background: this.props.background })), r.createElement("div", { className: "stamp-AudioContainer-box" }, r.createElement("div", { className: "stamp-AudioContainer-player" }, this.props.cover), r.createElement("div", { className: "stamp-AudioContainer-meta" }, r.createElement(i, { title: this.props.title, username: this.props.username, duration: this.props.duration, linkUrl: this.props.url }), this.props.trackList))));
      } });e.exports = p;
  }, 138: function (e, t, n) {
    "use strict";var r = n(1), i = n(96), o = n(139), s = n(26), a = n(133), l = n(76), c = n(2), u = r.createClass({ displayName: "GalleryImage", mixins: [c, l, s, a], propTypes: { stamp: r.PropTypes.object.isRequired, className: r.PropTypes.string.isRequired, style: r.PropTypes.object, caption: r.PropTypes.string, image: r.PropTypes.object.isRequired, imageStyle: r.PropTypes.object, imageSizes: r.PropTypes.object, onTransitionEnd: r.PropTypes.func.isRequired, onClick: r.PropTypes.func.isRequired }, getImage: function () {
        return this.props.image;
      }, getImageSizes: function () {
        return this.props.imageSizes;
      }, render: function () {
        var e = this.props.image.url;return r.createElement("div", { className: this.props.className, "data-scroll-anchor": !0, onClick: this.togglePinItOnMobile, style: this.props.style }, r.createElement("div", { className: "stamp-Image" }, r.createElement(i, { src: this.getImageSrcUrl(), style: this.props.imageStyle, onClick: this.handleImageClick, onTransitionEnd: this.props.onTransitionEnd, onLoad: this.handleImageLoad, onError: this.handleImageError }), this.props.caption.length > 0 && r.createElement(o, { caption: this.props.caption }), this.renderPinItOnMobile(e)));
      }, handleImageClick: function (e) {
        this.props.onClick(this.props.image, e);
      } });e.exports = u;
  }, 139: function (e, t, n) {
    "use strict";var r = n(1), i = n(4), o = n(62), s = n(2), a = r.createClass({ displayName: "ImageCaption", mixins: [i, s], className: "stamp-ImageCaption", propTypes: { caption: r.PropTypes.string.isRequired }, render: function () {
        var e = this.props, t = e.caption;return r.createElement("div", { className: this.getClassName() }, r.createElement("div", { className: "stamp-ImageCaption-box" }, r.createElement(o, { family: "minion-pro-condensed", test: t }, r.createElement("div", { className: "stamp-ImageCaption-text", dangerouslySetInnerHTML: { __html: t } }))));
      } });e.exports = a;
  }, 160: function (e, t, n) {
    "use strict";var r = n(1), i = n(127), o = n(2), s = n(1), a = s.PropTypes, l = r.createClass({ displayName: "OffsetMonitor", mixins: [o], propTypes: { onOffsetTopChange: a.func }, componentDidMount: function () {
        this.props.onOffsetTopChange && (window.addEventListener("scroll", this._updateOffsetTop), window.addEventListener("visibilitychange", this._updateOffsetTop), window.addEventListener("resize", this._updateOffsetTop), this._updateOffsetsInterval = setInterval(this._updateOffsetTop, 700), this._updateOffsetTop());
      }, componentWillUnmount: function () {
        this.props.onOffsetTopChange && (window.removeEventListener("scroll", this._requestFrame), window.removeEventListener("visibilitychange", this._updateOffsetTop), window.removeEventListener("resize", this._updateOffsetTop), clearInterval(this._updateOffsetsInterval));
      }, render: function () {
        return i(this.props.children);
      }, _updateOffsetTop: function () {
        if (this.isMounted()) {
          var e = this.getDOMNode();if (e) {
            var t = e.offsetTop;t !== this._lastOffsetTop && (this._lastOffsetTop = t, this.props.onOffsetTopChange(t));
          }
        }
      } });e.exports = l;
  }, 163: function (e) {
    "use strict";e.exports = { GRID: "grid", LIST: "list" };
  }, 178: function (e, t, n) {
    "use strict";function r(e, t) {
      return e && t && i(e, t) ? e : t;
    }var i = n(30);e.exports = r;
  }, 214: function (e, t, n) {
    "use strict";var r = n(5), i = n(7), o = { showLightbox: function () {
        r.handleViewAction({ type: i.ENTER_LIGHTBOX });
      }, hideLightbox: function () {
        r.handleViewAction({ type: i.LEAVE_LIGHTBOX });
      } };e.exports = o;
  }, 223: function (e, t, n) {
    "use strict";var r = n(16);e.exports = r({ VIMEO: null, SOUNDCLOUD: null });
  }, 224: function (e, t, n) {
    "use strict";function r(e, t, n) {
      var r, i = t.getBoundingClientRect(), o = (i.bottom - i.top) / 2, s = t.getAttribute("data-scroll-anchor") || "image", a = e / 2;return (r = { id: n, type: s }, o > a ? [{ el: r, shift: i.top }, { el: r, shift: i.bottom - e }] : { el: r, shift: i.top + o - a });
    }var i = n(3), o = n(228), s = n(66), a = 40, l = 200, c = { mixins: [o], isSpaceKeyEvent: function (e) {
        return 32 === e.keyCode;
      }, isSpaceKeyHeld: function () {
        return this._isSpaceKeyHeld;
      }, handleSpaceKeyUp: function () {
        this._isSpaceKeyHeld = !1;
      }, handleSpaceKeyDown: function (e) {
        if (e.target === document.body && "true" !== e.target.getAttribute("data-popover")) {
          var t = this.isSpaceKeyHeld();if (!t) {
            this._isSpaceKeyHeld = !0;var n = !e.shiftKey, r = this._getCandidateAnchorY(n);i.isNumber(r) && (e.preventDefault(), this.animateScroll(r, l), this._lastTargetY = r);
          }
        }
      }, _getCandidateAnchorY: function (e) {
        function t(e, t) {
          return t && "text" === t.el.type ? g : f;
        }function n(e, t) {
          return t && t.el.id === e.el.id ? m : h;
        }var r, o, l, c = window.innerHeight, u = s(), p = this.isAnimatingScroll() ? this._lastTargetY : u, d = this._findScrollAnchors(c), h = 1.5 * c, m = c - a, f = c / 3, g = 2 * a;return (o = i.chain(d).each(function (e) {
          e.shift += p - u;
        }).sortBy(function (t) {
          return e ? t.shift : -t.shift;
        }).find(function (n) {
          var i = e ? n.shift > t(n, r) : n.shift < -t(n, r);return (i || (r = n), i);
        }).value()) ? (l = e ? Math.min(o.shift, n(o, r)) : Math.max(o.shift, -n(o, r)), Math.abs(l) > t(o, r) ? Math.round(p + l) : void 0) : void 0;
      }, _findScrollAnchors: function (e) {
        var t = this.getDOMNode(), n = i.toArray(t.querySelectorAll("[data-scroll-anchor]"));return i.chain(n).map(i.partial(r, e)).flatten().value();
      } };e.exports = c;
  }, 226: function (e, t, n) {
    "use strict";function r() {
      var e = document.hidden;return (o.isBoolean(e) || (e = !1), !e);
    }function i(e, t) {
      if (t[0] === t[1]) return t[0];var n = (e - t[0]) / (t[1] - t[0]), r = 1 / (window.safari ? 0.1 : 0.02);return (n = Math.min(1, Math.max(0, n)), n = Math.round(n * r) / r);
    }var o = n(3), s = n(66), a = n(55), l = n(23), c = l.isMobile, u = l.isIE10, p = n(178), d = { isActive: !1, isVisible: !1, topOpacity: 0, bottomOpacity: 0 }, h = { getInitialState: function () {
        return { posterFadings: null };
      }, isFadingEnabled: function () {
        return !u() && !c();
      }, getSectionFading: function (e) {
        if (this.isFadingEnabled()) {
          var t = this.state.sections || [], n = this.state.posterFadings || [], r = t[e].type;return r === a.POSTER || r === a.COVER ? n[e] || d : void 0;
        }
      }, componentDidMount: function () {
        this.isFadingEnabled() && (this._sectionHeights = [], this._updateSectionHeights(), window.addEventListener("scroll", this._updatePosterFadings), window.addEventListener("visibilitychange", this._updateSectionHeights), window.addEventListener("resize", this._updateSectionHeights), this._updateHeightsInterval = setInterval(this._updateSectionHeights, 700));
      }, componentWillUnmount: function () {
        this.isFadingEnabled() && (clearInterval(this._updateHeightsInterval), window.removeEventListener("visibilitychange", this._updateSectionHeights), window.removeEventListener("resize", this._updateSectionHeights), window.removeEventListener("scroll", this._updatePosterFadings));
      }, componentDidUpdate: function (e, t) {
        this.isFadingEnabled() && this.state.sections !== t.sections && this._updateSectionHeights();
      }, _updateSectionHeights: function () {
        if (this.isMounted() && r()) {
          var e, t, n, i = this.state.sections.length;this._sectionHeights.length !== i && (this._sectionHeights.length = i, n = !0);for (var o = 0; i > o; o++) e = this.getSectionNode(o), t = e.offsetHeight, t !== this._sectionHeights[o] && (this._sectionHeights[o] = t, n = !0);n && this._updatePosterFadings();
        }
      }, _updatePosterFadings: function () {
        if (this.isMounted()) {
          var e = s(), t = this._sectionHeights, n = this._getBoundingRects(t, e), r = this._getFadingState(n);this.setState(r);
        }
      }, _getFadingState: function (e) {
        var t = this.state.posterFadings, n = window.innerHeight, r = this.state.sections.length, i = this._findVisiblePosters(e, n), o = this._findActivePoster(i, n), s = null;i.length && (s = new Array(r));for (var a = 0; a < i.length; a++) {
          var l, c = i[a], u = c.index, d = c.rect;d.height && (l = this._getVisiblePosterFading(u, d, c === o, e, n), t && (l = p(t[u], l)), s[u] = l);
        }return (s = p(t, s), { posterFadings: s });
      }, _getVisiblePosterFading: function (e, t, n, r, i) {
        if (t.height) {
          var o = { isVisible: !0, isActive: n, progress: this._getPosterProgress(t, i), topOpacity: 0, bottomOpacity: 0 };if (n) {
            var s, l = t.height > i, c = this.state.sections[e].type === a.COVER, u = this.state.sections[e + 1].type === a.INFO, p = this._getDistanceToPosters(e, r);s = l || c ? this._getTallPosterOpacities(t, i, p) : this._getShortPosterOpacities(t, i, p), u && (s.bottom = 0), o.topOpacity = s.top, o.bottomOpacity = s.bottom;
          }return o;
        }
      }, _getDistanceToPosters: function (e, t) {
        var n, r = 0, i = 0, o = this.state.sections;for (n = e - 1; n >= 0 && o[n].type !== a.POSTER; n--) r += t[n].height;for (n = e + 1; n < t.length && o[n].type !== a.POSTER; n++) i += t[n].height;return { next: i, prev: r };
      }, _getShortPosterOpacities: function (e, t, n) {
        var r = e.top, o = e.height, s = t / 2, a = n.prev > 0 && n.prev < t, l = n.next > 0 && n.next < t;return { top: i(r, { 0: a ? s + n.prev / 4 : t, 1: t - o }), bottom: i(r, { 1: 0, 0: l ? s - (e.height + n.next / 4) : -s }) };
      }, _getTallPosterOpacities: function (e, t, n) {
        var r, o, s = e.top, a = e.bottom, l = n.prev > 0 && n.prev < t;return (n.prev > 0 ? (r = t / 2, l || (r += t / 4), o = t / 2) : (r = t, o = t), { top: i(s, { 0: r, 1: r - o }), bottom: i(a, { 1: t, 0: t / 2 }) });
      }, _getPosterProgress: function (e, t) {
        var n = t / 2;return i(e.top, { 0: n, 1: n - e.height });
      }, _findActivePoster: function (e, t) {
        if (e.length) {
          var n = t / 2;return o.min(e, function (e) {
            var t = e.rect;return t.top <= n && t.bottom >= n ? 0 : Math.min(Math.abs(t.top - n), Math.abs(t.bottom - n));
          });
        }
      }, _findVisiblePosters: function (e, t) {
        var n, r, i, o, s, l = this.state.sections, c = [];for (s = 0; s < l.length; s++) e[s] && (n = l[s], r = e[s], r.bottom <= 0 || r.top >= t || 0 === r.height || (i = n.type === a.POSTER, o = 0 === s && l.length > 1 && l[1].type === a.POSTER, (i || o) && c.push({ index: s, section: n, rect: r })));return c;
      }, _getBoundingRects: function (e, t) {
        for (var n, r = 0, i = new Array(e.length), o = 0; o < e.length; o++) n = e[o] || 0, i[o] = { top: r - t, bottom: r - t + n, height: n }, r += n;return i;
      } };e.exports = h;
  }, 227: function (e, t, n) {
    "use strict";var r = n(27), i = n(3), o = n(275), s = n(23), a = s.isMobile, l = s.isIE10, c = n(214), u = n(132), p = 250, d = { getInitialState: function () {
        return this.getInitialLightboxState();
      }, getInitialLightboxState: function () {
        return { lightbox: { current: null, previous: null } };
      }, componentDidUpdate: function (e, t) {
        var n = t.lightbox.current, r = !i.isEqual(n, this.state.lightbox.current);r && (this.isInLightbox() ? (window.addEventListener("scroll", this.hideLightbox, !1), window.addEventListener("resize", this.hideLightbox, !1), window.addEventListener("keydown", this._handleEscapeKeyDown, !1)) : (window.removeEventListener("scroll", this.hideLightbox, !1), window.removeEventListener("resize", this.hideLightbox, !1), window.removeEventListener("keydown", this._handleEscapeKeyDown, !1)));
      }, componentWillUnmount: function () {
        window.removeEventListener("scroll", this.hideLightbox, !1), window.removeEventListener("resize", this.hideLightbox, !1), window.removeEventListener("keydown", this._handleEscapeKeyDown, !1), this.isLightboxVisible() && c.hideLightbox();
      }, resetLightbox: function () {
        this.setState(this.getInitialLightboxState()), this.isLightboxVisible() && c.hideLightbox();
      }, handleLightboxTransitionEnd: function () {
        this._setLightboxState("previous", null);
      }, _handleEscapeKeyDown: function (e) {
        e.keyCode === u.ESCAPE && this.hideLightbox();
      }, getLightboxState: function (e) {
        return this.isInLightbox(e) ? "active" : this.isLeavingLightbox(e) ? "leaving" : void 0;
      }, isLightboxVisible: function (e) {
        return !!this.getLightboxState(e);
      }, isInLightbox: function (e) {
        var t = this.state.lightbox.current;return t ? i.isUndefined(e) || t.sectionIndex === e : !1;
      }, isLeavingLightbox: function (e) {
        var t = this.state.lightbox.previous;return t ? i.isUndefined(e) || t.sectionIndex === e : !1;
      }, isImageInLightbox: function (e) {
        return this.isInLightbox() && this.state.lightbox.current.image === e;
      }, isImageLeavingLightbox: function (e) {
        return this.isLeavingLightbox() && this.state.lightbox.previous.image === e;
      }, toggleLightbox: function (e, t, n, r) {
        this.isInLightbox() ? this.hideLightbox() : this.showLightbox(e, t, n, r);
      }, isLightboxEnabled: function () {
        return !a() && !l() && window.matchMedia("(min-width: 992px)").matches;
      }, showLightbox: function (e, t, n, r) {
        this.isLightboxEnabled() && (this._setLightboxState("current", { sectionIndex: e, image: t, fromRect: n, toHeight: r || window.innerHeight }), c.showLightbox());
      }, hideLightbox: function () {
        this.isInLightbox() && (this._setLightboxState("current", null), c.hideLightbox());
      }, getLightboxImageStyle: function (e) {
        var t = this.getLightboxImageTransform(e), n = {};return (n[o.js + "Transform"] = t, (this.isImageInLightbox(e) || this.isImageLeavingLightbox(e)) && (n.position = "relative", n.zIndex = p), n);
      }, getLightboxImageTransform: function (e) {
        if (!this.isImageInLightbox(e)) return "translate(0, 0) scale(1)";var t, n = e.size, r = this.state.lightbox.current, i = r.fromRect, o = r.toHeight, s = window.innerWidth, a = 3 * s / 100 + 140, l = 48, c = s - a, u = o - l, p = n.width / i.width;t = n.width < c && n.height < u ? p : n.width / n.height < c / u ? u / n.height * p : c / n.width * p;var d = (s - i.width) / 2 - i.left, h = (o - i.height) / 2 - i.top, m = "translate(" + d + "px, " + h + "px) scale(" + t + ")";return m;
      }, _setLightboxState: function (e, t) {
        var n = {};if ((n[e] = { $set: t }, "current" === e && null === t)) {
          var r = this.state.lightbox.current;n.previous = { $set: r };
        }this._updateState({ lightbox: n });
      }, _updateState: function (e) {
        this.isMounted() && this.replaceState(r(this.state, e));
      } };e.exports = d;
  }, 230: function (e, t, n) {
    "use strict";var r = n(1), i = n(224), o = n(23), s = o.isMobile, a = { mixins: [i], propTypes: { isInViewer: r.PropTypes.bool.isRequired }, componentDidMount: function () {
        s() || (window.addEventListener("keydown", this._handleKeyDown), window.addEventListener("keyup", this._handleKeyUp));
      }, componentWillUnmount: function () {
        s() || (window.removeEventListener("keydown", this._handleKeyDown), window.removeEventListener("keyup", this._handleKeyUp));
      }, _handleKeyDown: function (e) {
        this.isSpaceKeyEvent(e) && this.isMounted() && this.handleSpaceKeyDown(e);
      }, _handleKeyUp: function (e) {
        this.isSpaceKeyEvent(e) && this.isMounted() && this.handleSpaceKeyUp(e);
      } };e.exports = a;
  }, 235: function (e, t, n) {
    "use strict";var r = n(1), i = n(71), o = r, s = o.PropTypes, a = n(101), l = n(2), c = r.createClass({ displayName: "TrackList", mixins: [l], propTypes: { tracks: s.array.isRequired, activeTrackIndex: s.number.isRequired, isPlaying: s.bool.isRequired, onSelect: s.func.isRequired }, getCSSModifiers: function () {
        return [this.props.isPlaying && "active"];
      }, render: function () {
        return r.createElement("ul", { className: "TrackList" }, this.renderTracks());
      }, renderTracks: function () {
        var e = this.props, t = e.activeTrackIndex;return this.props.tracks.map((function (e, n) {
          return r.createElement("li", { className: i({ "TrackList-track": !0, "TrackList-track--active": n === t }), onClick: this.handleSelect.bind(this, n), key: n }, r.createElement("span", { className: "TrackList-trackTitle" }, e.title), r.createElement("span", { className: "TrackList-trackDuration" }, a(e.duration)));
        }).bind(this));
      }, handleSelect: function (e) {
        this.props.onSelect(e);
      } });e.exports = c;
  }, 240: function (e, t, n) {
    "use strict";var r = n(1), i = n(9), o = n(89), s = n(61), a = n(135), l = n(235), c = n(2), u = n(112), p = n(137), d = n(54), h = r, m = h.PropTypes, f = r.createClass({ displayName: "AudioPlayList", mixins: [i(o), c], propTypes: { uuid: m.string.isRequired, url: m.string.isRequired, tracks: m.array.isRequired, title: m.string.isRequired, background: m.object, stamp: m.shape({ id: m.number }).isRequired }, getStateFromStores: function () {
        var e = this.props.uuid;return { isPlaying: o.isPlaying(e), isPaused: o.isPaused(e), activeTrackIndex: o.getActiveTrackIndex(e), activeTrack: o.getActiveTrack(e), currentTime: o.getCurrentTime(e), artwork: o.getArtwork(e) };
      }, componentWillMount: function () {
        s.registerAudio(this.props.uuid, { mediaType: d.AUDIO_PLAYLIST, tracks: this.props.tracks, background: this.props.background, stampId: this.props.stamp.id });
      }, componentWillUnmount: function () {
        s.unregisterAudio(this.props.uuid);
      }, getBackground: function () {
        return this.props.background || u;
      }, getArtwork: function () {
        return this.state.artwork || u;
      }, getTrackDuration: function (e) {
        return e && e.duration || 0;
      }, renderCover: function () {
        var e = this.state, t = e.isPlaying, n = e.activeTrack, i = e.currentTime, o = e.isPaused;return r.createElement(a, { uuid: this.props.uuid, linkUrl: this.props.url, colors: this.getBackground().colors, artwork: this.getArtwork(), duration: this.getTrackDuration(n), currentTime: i, isPlaying: t, isPaused: o, onBackward: this.handleBackward, onForward: this.handleForward, onPlay: this.togglePause, onPause: this.togglePause, alwaysShowControls: !0 });
      }, renderTrackList: function () {
        return r.createElement(l, { tracks: this.props.tracks, activeTrackIndex: this.state.activeTrackIndex, isPlaying: this.state.isPlaying, onSelect: this.toggleTrack });
      }, render: function () {
        return r.createElement(p, { title: this.props.title, username: this.props.username, duration: this.props.duration, background: this.getBackground(), url: this.props.url, cover: this.renderCover(), trackList: this.renderTrackList() });
      }, togglePause: function () {
        var e = this.props.uuid;this.state.isPlaying ? s.pause(e) : s.play(e);
      }, toggleTrack: function (e) {
        this.state.activeTrackIndex === e ? this.togglePause() : s.play(this.props.uuid, { trackIndex: e, currentTime: 0 });
      }, handleBackward: function () {
        s.playPrevious(this.props.uuid);
      }, handleForward: function () {
        s.playNext(this.props.uuid);
      } });e.exports = f;
  }, 241: function (e, t, n) {
    "use strict";var r = n(1), i = n(9), o = n(89), s = n(61), a = n(135), l = n(137), c = n(112), u = n(2), p = n(54), d = r, h = d.PropTypes, m = r.createClass({ displayName: "AudioTrack", mixins: [i(o), u], propTypes: { uuid: h.string.isRequired, source: h.string, background: h.object, streamUrl: h.string, url: h.string.isRequired, stamp: h.shape({ id: h.number }).isRequired }, getStateFromStores: function () {
        var e = this.props.uuid;return { isPlaying: o.isPlaying(e), isPaused: o.isPaused(e), currentTime: o.getCurrentTime(e), artwork: o.getArtwork(e) };
      }, componentWillMount: function () {
        s.registerAudio(this.props.uuid, { mediaType: p.AUDIO_PLAYLIST, background: this.props.background, tracks: [this.props], trackIndex: 0, stampId: this.props.stamp.id });
      }, componentWillUnmount: function () {
        s.unregisterAudio(this.props.uuid);
      }, getArtwork: function () {
        return this.state.artwork || c;
      }, getBackground: function () {
        return this.props.background || c;
      }, renderCover: function () {
        var e = this.state, t = e.isPlaying, n = e.currentTime, i = e.isPaused, o = this.props, s = o.url, l = o.duration;return r.createElement(a, { uuid: this.props.uuid, linkUrl: s, artwork: this.getArtwork(), colors: this.getBackground().colors, duration: l, currentTime: n, isPlaying: t, isPaused: i, onPlay: this.togglePause, onPause: this.togglePause, onBackward: this.handleBackward, onForward: this.handleForward, context: "AudioTrack" });
      }, render: function () {
        return r.createElement(l, { title: this.props.title, username: this.props.username, duration: this.props.duration, background: this.getBackground(), url: this.props.url, cover: this.renderCover() });
      }, togglePause: function () {
        var e = this.state.isPlaying, t = this.props.uuid;e ? s.pause(t) : s.play(t);
      }, handleBackward: function () {
        s.playPrevious(this.props.uuid);
      }, handleForward: function () {
        s.playNext(this.props.uuid);
      } });e.exports = m;
  }, 242: function (e, t, n) {
    "use strict";var r = n(1), i = n(75), o = n(2), s = n(38), a = n(44), l = { url: "http://stampsy-eu-1.s3.amazonaws.com/uploads/12/19/2014/be92ae37-d8d1-4d4b-afaf-0926d28a6e25.jpg", size: { width: 1024, height: 1024 } }, c = r.createClass({ displayName: "BuyInItunes", mixins: [i, o], getImageOptions: function () {
        return { image: l, mode: "scale_crop", sizes: { normal: !0, retina: window.devicePixelRatio > 1.5 } };
      }, getImageSizes: function () {
        return { "default": 400, xs: 560, sm: 192, md: 192, lg: 192, xl: 192 };
      }, render: function () {
        return r.createElement("div", { className: "stamp-BuyInItunes", "data-scroll-anchor": !0 }, r.createElement("div", { className: "stamp-BuyInItunes-box" }, r.createElement("div", { className: "stamp-BuyInItunes-label" }, "iTunes Store"), this.renderLoaderImg(), r.createElement("div", { className: "stamp-BuyInItunes-cover", style: { backgroundImage: this.getBackgroundImageUrl() } }, r.createElement("a", { className: "stamp-BuyInItunes-coverLink", href: "https://itunes.apple.com/ru/album/planetarium/id952188951?uo=4", target: "_blank", onClick: this.handleClick })), r.createElement("div", { className: "stamp-BuyInItunes-meta" }, r.createElement("a", { className: "stamp-BuyInItunes-title Link Link--underlineHover", href: "https://itunes.apple.com/ru/album/planetarium/id952188951?uo=4", target: "_blank", onClick: this.handleClick }, "Planetarium"), r.createElement("div", { className: "stamp-BuyInItunes-artist" }, "Mujuice"), r.createElement("a", { className: "Btn Btn--green Btn--medium Btn--fill stamp-BuyInItunes-button", href: "https://itunes.apple.com/ru/album/planetarium/id952188951?uo=4", target: "_blank", onClick: this.handleClick }, "View in iTunes"))));
      }, handleClick: function () {
        s.trackEvent(a.STAMP_ACTION_BUY_IN_ITUNES);
      } });e.exports = c;
  }, 243: function (e, t, n) {
    "use strict";var r = n(1), i = n(90), o = n(244), s = n(76), a = n(2), l = n(4), c = n(96), u = n(35), p = n(62), d = n(73), h = n(66), m = n(119), f = n(58), g = n(23), E = g.isMobile, v = r, y = v.PropTypes, S = r.createClass({ displayName: "Cover", mixins: [a, s, l], propTypes: { stamp: y.object.isRequired, isInViewer: y.bool.isRequired, isLoading: y.bool, sectionIndex: y.number.isRequired, isLightboxEnabled: y.func.isRequired, primaryZine: y.object }, className: "stamp-Cover", getImageSizes: function () {
        return { "default": 480, xs: 640, sm: 992, md: 1200, lg: 1440, xl: 1600 };
      }, getInitialState: function () {
        return { enableLightbox: !0, imageWrapperStyle: {} };
      }, getImage: function () {
        return this.props.stamp.thumbnail;
      }, componentDidMount: function () {
        this.deferUpdateWrapperStyle = window.setTimeout.bind(window, this.updateWrapperStyle, 0), window.addEventListener("scroll", this.handleWindowScroll, !1), window.addEventListener("resize", this.updateWrapperStyle, !1), window.addEventListener("orientationchange", this.deferUpdateWrapperStyle, !1), this.updateWrapperStyle();
      }, componentWillUnmount: function () {
        window.removeEventListener("scroll", this.handleWindowScroll, !1), window.removeEventListener("resize", this.updateWrapperStyle, !1), window.removeEventListener("orientationchange", this.deferUpdateWrapperStyle, !1);
      }, updateWrapperStyle: function () {
        if (this.isMounted()) {
          var e = this.getDOMNode(), t = window.innerWidth, n = e.offsetHeight, r = this.getImage().size, i = Math.round(t * (r.height / r.width)) + 1, o = Math.max(1, n / i);this.setState({ imageWrapperStyle: { width: 100 * o + "%", left: (1 - o) / 2 * 100 + "%" } });
        }
      }, handleWindowScroll: function () {
        if (this.isMounted()) {
          var e = h(), t = 0 >= e;this.setState({ enableLightbox: t });
        }
      }, render: function () {
        var e, t = this.props, n = t.stamp, s = t.primaryZine, a = t.isLoading, l = t.isInViewer, h = n.description, g = this.getImage().colors, v = !E(), y = this.props.isLightboxEnabled(), S = this.hasLoadedImage(), T = l ? new Date(n.published) : new Date(), C = this.props.getLightboxImageStyle(this.getImage());return ((v || !S) && (e = { backgroundImage: i("#" + g.top, "#" + g.bottom) }), r.createElement("div", { className: this.getClassName(), style: e, "data-lightbox": this.props.lightboxState, "data-disabled": !this.props.isInViewer, "data-scroll-anchor": !0 }, r.createElement("div", { className: "stamp-Cover-imgWrapper", style: this.state.imageWrapperStyle }, r.createElement(c, { src: this.getImageSrcUrl(), ref: "image", className: "stamp-Cover-img", style: C, onTransitionEnd: this.handleImageTransitionEnd, onLoad: this.handleImageLoad, onError: this.handleImageError })), a && r.createElement(u, null), f(s) && r.createElement(d, { zine: s, className: "stamp-Cover-bestOf2014", underline: "never", showTitle: !0 }, "Best of 2014"), !a && r.createElement("div", { className: "stamp-Cover-box" }, r.createElement("h1", { className: "stamp-Cover-title" }, n.title), h && r.createElement(p, { family: "minion-pro-condensed", test: h }, r.createElement("h3", { className: "stamp-Cover-subtitle", dangerouslySetInnerHTML: { __html: h } }))), r.createElement("div", { className: "stamp-Cover-footer" }, S && y && r.createElement(o, { isActive: this.state.enableLightbox, onClick: this.handleLightboxIconClick }), r.createElement("span", { className: "stamp-Cover-date" }, m(T)))));
      }, handleLightboxIconClick: function () {
        var e = this.refs.image.getDOMNode().getBoundingClientRect(), t = this.getDOMNode().offsetHeight, n = this.getImage();this.props.toggleLightbox(this.props.sectionIndex, n, e, t);
      }, handleImageTransitionEnd: function () {
        this.props.onImageTransitionEnd && this.props.onImageTransitionEnd();
      } });e.exports = S;
  }, 244: function (e, t, n) {
    "use strict";var r = n(1), i = n(10), o = n(11), s = n(2), a = r.createClass({ displayName: "CoverLightboxSwitch", mixins: [s], propTypes: { isActive: r.PropTypes.bool.isRequired, onClick: r.PropTypes.func.isRequired }, render: function () {
        return r.createElement("div", { className: "stamp-Cover-lightboxSwitch", "data-active": this.props.isActive }, r.createElement(o, { size: "xsmall", onClick: this.props.onClick, color: "black", overlay: !0, round: !0 }, r.createElement(i, { name: "eye", size: "xsmall", mode: "stroke" })));
      } });e.exports = a;
  }, 245: function (e, t, n) {
    "use strict";var r = n(1), i = n(134), o = n(2), s = n(4), a = r.createClass({ displayName: "Fade", mixins: [s, i, o], propTypes: { color: r.PropTypes.string.isRequired, opacity: r.PropTypes.number.isRequired, isActive: r.PropTypes.bool.isRequired, isVisible: r.PropTypes.bool.isRequired, isLightboxVisible: r.PropTypes.bool.isRequired, isTop: r.PropTypes.bool }, className: "stamp-Fade", getCSSModifiers: function () {
        return [this.props.isTop && "top"];
      }, getInitialState: function () {
        return { animateOpacity: !1 };
      }, componentWillReceiveProps: function (e) {
        var t = e.isLightboxVisible !== this.props.isLightboxVisible, n = e.isActive !== this.props.isActive, r = e.isVisible !== this.props.isVisible, i = Math.abs(e.opacity - this.props.opacity);(t || n && !r && i > 0) && this.setState({ animateOpacity: !0 });
      }, handleTransitionEnd: function () {
        this.setState({ animateOpacity: !1 });
      }, render: function () {
        var e, t = this.getOpacity();return (e = { pointerEvents: 1 > t ? "none" : "", opacity: t, backgroundColor: "#" + this.props.color }, r.createElement("div", { className: this.getClassName(), "data-animate": this.state.animateOpacity, style: e }));
      }, getOpacity: function () {
        return this.props.isLightboxVisible ? 1 : this.props.opacity || 0.00001;
      } });e.exports = a;
  }, 246: function (e, t, n) {
    "use strict";var r = n(1), i = n(138), o = n(2), s = { "default": 480, xs: 512, sm: 512, md: 512, lg: 512, xl: 640 }, a = 2, l = r.createClass({ displayName: "GridGallery", mixins: [o], propTypes: { stamp: r.PropTypes.object.isRequired, images: r.PropTypes.array.isRequired, sectionIndex: r.PropTypes.number.isRequired, lightboxState: r.PropTypes.oneOf(["active", "leaving"]), toggleLightbox: r.PropTypes.func.isRequired, getLightboxImageStyle: r.PropTypes.func.isRequired, isImageInLightbox: r.PropTypes.func.isRequired, onImageTransitionEnd: r.PropTypes.func.isRequired }, getImageSizes: function () {
        return s;
      }, getRows: function () {
        for (var e = this.props, t = e.images, n = [], r = 0; r < t.length; r += a) n.push(t.slice(r, r + a).filter(Boolean));return n;
      }, render: function () {
        return r.createElement("div", { className: "stamp-GridGallery", "data-lightbox": this.props.lightboxState }, r.createElement("div", { className: "stamp-GridGallery-box" }, this.getRows().map(this.renderRow)));
      }, renderRow: function (e, t) {
        return r.createElement("div", { className: "stamp-GridGallery-row", key: t }, e.map(this.renderImage));
      }, renderImage: function (e, t, n) {
        var o = this.props.getLightboxImageStyle(e), a = e.caption, l = {}, c = 0 === t ? n[1] : n[0];return (l.flex = 1, l.MozFlex = 1, l.WebkitFlex = 1, l.msFlex = 1, c && (l.flex = c.size.height / c.size.width, l.MozFlex = c.size.height / c.size.width, l.WebkitFlex = c.size.height / c.size.width, l.msFlex = c.size.height / c.size.width), r.createElement(i, { key: t, className: "stamp-GridGallery-item", style: l, stamp: this.props.stamp, image: e, imageSizes: s, imageStyle: o, caption: a, onClick: this.handleImageClick, onTransitionEnd: this.props.onImageTransitionEnd, isImageInLightbox: this.props.isImageInLightbox, lightboxState: this.props.lightboxState }));
      }, handleImageClick: function (e, t) {
        var n = t.target.getBoundingClientRect();this.props.toggleLightbox(this.props.sectionIndex, e, n);
      } });e.exports = l;
  }, 247: function (e, t, n) {
    "use strict";var r = n(1), i = n(2), o = n(252), s = n(239), a = n(238), l = n(88), c = n(17), u = n(102), p = n(36), d = n(34), h = n(119), m = n(168), f = n(160), g = n(20), E = r, v = E.PropTypes, y = r.createClass({ displayName: "InfoPanel", mixins: [i, m(g.INFO_PANEL)], propTypes: { onOffsetTopChange: v.func, stamp: v.object.isRequired, user: v.object.isRequired, primaryZine: v.object, otherZines: v.array.isRequired, isInViewer: v.bool.isRequired }, render: function () {
        var e = this.props.stamp, t = this.props.user, n = this.props.primaryZine, i = this.props.otherZines, p = this.props.isInViewer, d = p ? new Date(e.published) : new Date();return r.createElement(f, { onOffsetTopChange: this.props.onOffsetTopChange }, r.createElement("div", { className: "InfoPanel", "data-section": "info", "data-disabled": !p, "data-scroll-anchor": !0 }, r.createElement(l, { context: "InfoPanel" }, r.createElement("div", { className: "InfoPanel-box" }, r.createElement("div", { className: "InfoPanel-section InfoPanel-section--stampControls" }, r.createElement(o, { stamp: e, isInViewer: p })))), r.createElement(l, { context: "InfoPanel" }, r.createElement("div", { className: "InfoPanel-box" }, r.createElement("div", { className: "InfoPanel-section InfoPanel-section--userAndZine" }, r.createElement("div", { className: "InfoPanel-user" }, r.createElement("div", { className: "InfoPanel-label utils--smallCaps" }, "Posted By"), r.createElement(a, { user: t, vertical: !0, context: "InfoPanel", size: "small", imageSize: "large", card: !0, showAbout: !0, showLocation: !0, showWebsite: !0, showFollow: !0 }), r.createElement("div", { className: "InfoPanel-date" }, "Posted on ", h(d))), n && r.createElement("div", { className: "InfoPanel-zine" }, r.createElement("div", { className: "InfoPanel-label utils--smallCaps" }, "In Collection"), r.createElement(s, { zine: n, size: "small", context: "InfoPanel" }), r.createElement("div", { className: "InfoPanel-otherZines" }, i.length > 0 && r.createElement("span", null, "Also in", " ", r.createElement(c, { onClick: this.handleOtherZinesClick, underline: "hover", bold: !0 }, i.length, " other ", u(i.length, "collection", "collections"))))))))));
      }, handleOtherZinesClick: function () {
        d.showSidebar(p.STAMP_OTHER_ZINES, { stampId: this.props.stamp.id, zineSlugs: this.props.otherZines.map(function (e) {
            return e.slug;
          }) });
      } });e.exports = y;
  }, 248: function (e, t, n) {
    "use strict";var r = n(1), i = n(138), o = n(2), s = { "default": 480, xs: 640, sm: 992, md: 1024, lg: 1024, xl: 1280 }, a = r.createClass({ displayName: "ListGallery", mixins: [o], propTypes: { stamp: r.PropTypes.object.isRequired, images: r.PropTypes.array.isRequired, sectionIndex: r.PropTypes.number.isRequired, lightboxState: r.PropTypes.oneOf(["active", "leaving"]), toggleLightbox: r.PropTypes.func.isRequired, getLightboxImageStyle: r.PropTypes.func.isRequired, isImageInLightbox: r.PropTypes.func.isRequired, onImageTransitionEnd: r.PropTypes.func.isRequired }, getImageSizes: function () {
        return s;
      }, render: function () {
        var e = this.props.images;return r.createElement("div", { className: "stamp-ListGallery", "data-lightbox": this.props.lightboxState }, r.createElement("div", { className: "stamp-ListGallery-box" }, e.map(this.renderImage)));
      }, renderImage: function (e, t) {
        var n = this.props.getLightboxImageStyle(e), o = e.caption;return r.createElement(i, { key: t, stamp: this.props.stamp, className: "stamp-ListGallery-item", caption: o, image: e, imageSizes: s, imageStyle: n, onClick: this.handleImageClick, onTransitionEnd: this.props.onImageTransitionEnd, isImageInLightbox: this.props.isImageInLightbox, lightboxState: this.props.lightboxState });
      }, handleImageClick: function (e, t) {
        var n = t.target.getBoundingClientRect();this.props.toggleLightbox(this.props.sectionIndex, e, n);
      } });e.exports = a;
  }, 249: function (e, t, n) {
    "use strict";var r = n(1), i = n(3), o = n(116), s = n(47), a = n(2), l = n(4), c = n(19), u = n(55), p = n(20), d = r.createClass({ displayName: "Overlay", mixins: [l, a], propTypes: { stamp: r.PropTypes.object.isRequired, image: r.PropTypes.object.isRequired, color: r.PropTypes.oneOf(["dark", "light"]).isRequired, hideLightbox: r.PropTypes.func.isRequired, isInViewer: r.PropTypes.bool.isRequired, isInLightbox: r.PropTypes.bool.isRequired, sectionType: r.PropTypes.oneOf([u.COVER, u.GALLERY, u.POSTER]).isRequired }, className: "stamp-Overlay", getCSSModifiers: function () {
        return [this.props.sectionType];
      }, componentDidMount: function () {
        i.defer(this._triggerActiveTransition);
      }, componentDidUpdate: function () {
        i.defer(this._triggerActiveTransition);
      }, _triggerActiveTransition: function () {
        this.isMounted() && this.getDOMNode().setAttribute("data-active", this.props.isInLightbox);
      }, render: function () {
        return r.createElement("div", { className: this.getClassName(), onClick: this.props.hideLightbox }, r.createElement("div", { className: "stamp-Overlay-share", "data-disabled": !this.props.isInViewer }, r.createElement(o, { services: [c.PINTEREST, c.TUMBLR], onShareClick: this.handleShareClick, color: this.props.color, size: "small", vertical: !0 })));
      }, handleShareClick: function (e) {
        s.shareStamp({ stampId: this.props.stamp.id, service: e, imageUrl: this.props.image.url, source: p.LIGHTBOX });
      } });e.exports = d;
  }, 250: function (e, t, n) {
    "use strict";var r = n(1), i = n(76), o = n(26), s = n(96), a = n(133), l = n(139), c = n(2), u = n(90), p = r.createClass({ displayName: "Poster", mixins: [i, o, c, a], propTypes: { stamp: r.PropTypes.object.isRequired, background: r.PropTypes.object.isRequired, sectionIndex: r.PropTypes.number.isRequired, isActive: r.PropTypes.bool.isRequired, lightboxState: r.PropTypes.oneOf(["active", "leaving"]), toggleLightbox: r.PropTypes.func.isRequired, getLightboxImageStyle: r.PropTypes.func.isRequired, onImageTransitionEnd: r.PropTypes.func.isRequired }, getImageSizes: function () {
        return { "default": 480, xs: 640, sm: 992, md: 1200, lg: 1440, xl: 1600 };
      }, getImage: function () {
        return this.props.background;
      }, render: function () {
        var e = this.props.background, t = e.caption, n = e.colors, i = e.url, o = this.props.isActive, a = this.props.lightboxState, c = this.props.getLightboxImageStyle(e), p = {};return ((a || !this.hasLoadedImage()) && (p.backgroundImage = u("#" + n.top, "#" + n.bottom)), r.createElement("div", { className: "stamp-Poster", "data-active": o, "data-lightbox": a, "data-scroll-anchor": !0, style: p, onClick: this.togglePinItOnMobile }, r.createElement(s, { className: "stamp-Poster-img", src: this.getImageSrcUrl(), style: c, onClick: this.handleImageClick, onTransitionEnd: this.props.onImageTransitionEnd, onLoad: this.handleImageLoad, onError: this.handleImageError }), t.length > 0 && r.createElement(l, { caption: t, context: "Poster" }), this.renderPinItOnMobile(this.props.stamp, i)));
      }, handleImageClick: function (e) {
        var t = e.target.getBoundingClientRect(), n = this.props.background;this.props.toggleLightbox(this.props.sectionIndex, n, t);
      } });e.exports = p;
  }, 251: function (e, t, n) {
    "use strict";var r = n(1), i = n(3), o = n(249), s = n(245), a = n(226), l = n(2), c = n(227), u = n(230), p = n(26), d = n(6), h = n(15), m = n(9), f = n(12), g = n(30), E = n(55), v = n(54), y = n(223), S = n(163), T = r, C = T.PropTypes, b = [E.GALLERY, E.POSTER, E.COVER], _ = {};_[E.COVER] = n(243), _[E.POSTER] = n(250), _[E.GALLERY + ":" + S.LIST] = n(248), _[E.GALLERY + ":" + S.GRID] = n(246), _[E.TEXT] = n(253), _[E.INFO] = n(247), _[E.MEDIA + ":" + v.AUDIO_TRACK + ":" + y.SOUNDCLOUD] = n(241), _[E.MEDIA + ":" + v.AUDIO_PLAYLIST + ":" + y.SOUNDCLOUD] = n(240), _[E.MEDIA + ":" + v.VIDEO + ":" + y.VIMEO] = n(254), _[E.BUY_IN_ITUNES] = n(242);var I = r.createClass({ displayName: "Stamp", mixins: [m(d, h), l, a, c, p, u], propTypes: { stamp: C.object.isRequired, nextUp: C.element, primaryZine: C.object, isInViewer: C.bool, onInfoPanelOffsetTopChange: C.func }, getStateFromStores: function (e) {
        var t, n = e.stamp, r = e.primaryZine, o = e.isInViewer, s = o ? d.get(n.user) : d.getMe(), a = (o ? n.zines : []).map(h.get), l = n.content && n.content.sections.slice(1), c = this.props.onInfoPanelOffsetTopChange, u = !l;return (t = [{ key: n.id + "-cover", type: E.COVER, stamp: n, isLoading: u, primaryZine: r }], u || (t = t.concat(l.map(function (e, t) {
          return f({ key: n.id + "-" + t }, e);
        })), t.push({ key: n.id + "-info", type: E.INFO, stamp: n, user: s, primaryZine: r, otherZines: i.without(a, r), onOffsetTopChange: c })), { sections: t });
      }, componentWillReceiveProps: function (e) {
        g(e, this.props) || this.setState(this.getStateFromStores(e)), e.stamp !== this.props.stamp && this.resetLightbox();
      }, render: function () {
        var e = this.state.sections, t = e.map(this.renderSection);return (t.push(this.renderOverlay(e)), r.createElement("div", { className: "stamp-Stamp" }, i.compact(i.flatten(t)), e.length > 1 && this.props.nextUp));
      }, renderSection: function (e, t, n) {
        var i, o, s = this.getSectionFading(t), a = this.getSectionProps(e, t, s);return (i = _[e.type] || _[e.type + ":" + e.layout] || _[e.type + ":" + e.mediaType + ":" + e.mediaSource], o = r.createElement(i, a), s ? this.wrapInFades(o, t, n, s) : o);
      }, getSectionNode: function (e) {
        return this.refs["section-" + e].getDOMNode();
      }, getSectionProps: function (e, t, n) {
        var r, i = e.type;return (r = f({ sectionIndex: t, isInViewer: !!this.props.isInViewer, ref: "section-" + t, stamp: this.props.stamp }, e), delete r.type, b.indexOf(i) > -1 && f(r, this.getLightboxProps(t)), i === E.POSTER && n && f(r, { isActive: n.isActive }), r);
      }, getLightboxProps: function (e) {
        return { lightboxState: this.getLightboxState(e), getLightboxImageStyle: this.getLightboxImageStyle, toggleLightbox: this.toggleLightbox, isImageInLightbox: this.isImageInLightbox, onImageTransitionEnd: this.handleLightboxTransitionEnd, isLightboxEnabled: this.isLightboxEnabled };
      }, wrapInFades: function (e, t, n, i) {
        var o, a, l = this.isLightboxVisible(t), c = this.props.isInViewer, u = t === n.length - 2, p = n[t].background || this.props.stamp.thumbnail, d = p.colors;return (t > 0 && (o = r.createElement(s, { key: t + "-top", color: d.top, isLightboxVisible: l, isActive: i.isActive, isVisible: i.isVisible, opacity: i.topOpacity, isTop: !0 })), (c || l || !u) && (a = r.createElement(s, { key: t + "-bottom", color: d.bottom, isLightboxVisible: l, isActive: i.isActive, isVisible: i.isVisible, opacity: i.bottomOpacity })), [o, e, a]);
      }, renderOverlay: function (e) {
        if (this.isFadingEnabled() && this.getLightboxState()) {
          var t, n = this.state.lightbox.current || this.state.lightbox.previous, i = n.sectionIndex, s = e[i].type, a = n.image, l = a.colors, c = "dark";return (s === E.POSTER ? (t = this.getGradientColorStop(l, this.getSectionFading(i).progress), c = this.getTextColor(t)) : s === E.COVER && (t = this.getGradientColorStop(l, 0.5), c = this.getTextColor(t)), r.createElement(o, { key: "overlay", stamp: this.props.stamp, image: a, color: c, isInLightbox: this.isInLightbox(i), isInViewer: this.props.isInViewer, hideLightbox: this.hideLightbox, sectionType: s }));
        }
      }, getGradientColorStop: function (e, t) {
        var n = this.parseColor(e.top), r = this.parseColor(e.bottom);return i.zip(n, r).map(function (e) {
          var n = e[0], r = e[1], i = Math.round(n + (r - n) * t);return i.toString(16);
        }).join("");
      } });e.exports = I;
  }, 252: function (e, t, n) {
    "use strict";var r = n(1), i = n(233), o = n(237), s = n(86), a = n(114), l = n(2), c = r, u = c.PropTypes, p = r.createClass({ displayName: "StampControls", mixins: [a, l], propTypes: { stamp: u.object.isRequired, isInViewer: u.bool }, render: function () {
        var e = this.props, t = e.stamp, n = e.isInViewer, a = this.state.isMobile ? [] : [s.FACEBOOK, s.TWITTER];return r.createElement("div", { className: "StampControls" }, r.createElement("div", { className: "StampControls-like" }, r.createElement(i, { size: "xlarge", iconSize: "medium", showCounter: !0, showLikers: n, stamp: t, overlay: this.props.overlay, color: "gray", fill: !0, like: !0 })), r.createElement("div", { className: "StampControls-actions" }, r.createElement(o, { size: "medium", color: "gray", stamp: t, primaryServices: a, showAddLabel: !0, round: !0 })));
      } });e.exports = p;
  }, 253: function (e, t, n) {
    "use strict";var r = n(1), i = n(62), o = n(269), s = r.createClass({ displayName: "TextBlock", propTypes: { text: r.PropTypes.string.isRequired }, shouldComponentUpdate: function () {
        return !1;
      }, render: function () {
        var e = o(this.props.text);return r.createElement("div", { className: "stamp-Text", "data-scroll-anchor": "text" }, r.createElement(i, { family: "minion-pro-condensed", test: e }, r.createElement("div", { className: "stamp-Text-box", dangerouslySetInnerHTML: { __html: e } })));
      } });e.exports = s;
  }, 254: function (e, t, n) {
    "use strict";var r = n(1), i = n(9), o = n(4), s = n(61), a = n(89), l = n(76), c = n(2), u = n(129), p = n(10), d = n(11), h = n(35), m = n(101), f = n(120), g = n(54), E = n(23), v = E.isMobile, y = r, S = y.PropTypes, T = { "default": 480, xs: 640, sm: 992, md: 1024, lg: 1024, xl: 1280 }, C = r.createClass({ displayName: "Video", mixins: [i(a), l, o, c], propTypes: { stamp: S.object.isRequired, uuid: S.string.isRequired, sourceId: S.number.isRequired, width: S.number.isRequired, height: S.number.isRequired, background: S.shape({ url: S.string.isRequired, size: S.object.isRequired, colors: S.object.isRequired }).isRequired }, className: "stamp-Video", getMediaId: function () {
        return this.props.uuid;
      }, getEmbedMaxHeight: function () {
        var e = this.props.height < 960 / this.props.width * this.props.height ? this.props.height : 960 / this.props.width * this.props.height;return 540 > e ? 540 : e;
      }, getInitialState: function () {
        return { hasPressedPlay: !1, isLoaded: !1 };
      }, getDefaultProps: function () {
        return { isImageInLightbox: f };
      }, getStateFromStores: function () {
        return { isPlaying: a.isPlaying(this.getMediaId()) };
      }, getCSSModifiers: function () {
        var e = this.state, t = e.hasPressedPlay, n = e.isLoaded, r = t && (n || v());return [t && "pressedPlay", r && "ready"];
      }, getContentWindow: function () {
        return this.refs.iframe.getDOMNode().contentWindow;
      }, getImageSizes: function () {
        return T;
      }, getImage: function () {
        return this.props.background;
      }, componentDidMount: function () {
        window.addEventListener("message", this.handleIframeMessage);
      }, componentWillUnmount: function () {
        this.pause(), window.removeEventListener("message", this.handleIframeMessage), this.clearIdleTimeout();
      }, componentWillUpdate: function (e, t) {
        this.state.isPlaying && !t.isPlaying ? this.postMessage("pause") : !this.state.isPlaying && t.isPlaying && this.postMessage("play");
      }, render: function () {
        var e = "http://player.vimeo.com/video/" + this.props.sourceId, t = this.getEmbedMaxHeight();return r.createElement("div", { className: this.getClassName(), onClick: this.handlePlayClick, "data-scroll-anchor": !0 }, r.createElement("div", { className: "stamp-Video-bg", style: { backgroundImage: this.getBackgroundImageUrl() } }), r.createElement("div", { className: "stamp-Video-blurredBg" }, r.createElement(u, { background: this.getImage() })), this.renderLoaderImg(), r.createElement("div", { className: "stamp-Video-box" }, r.createElement("div", { className: "stamp-Video-embed", style: { paddingBottom: 100 * t / 960 + "%" } }, r.createElement("iframe", { src: e, frameBorder: "0", webkitAllowFullScreen: !0, mozAllowFullscreen: !0, allowFullScreen: !0, ref: "iframe" }), !this.state.isLoaded && r.createElement("div", { className: "stamp-Video-play" }, this.state.hasPressedPlay ? !v() && r.createElement(h, { absoluteCenter: !0 }) : r.createElement(d, { absoluteCenter: !0, context: "Video", onClick: this.handlePlayClick, size: "xxxlarge", color: "black", overlay: !0, round: !0 }, r.createElement(p, { name: "play", mode: "stroke", size: "large" }), r.createElement("div", { className: "stamp-Video-duration utils--hideOnMobile" }, m(this.props.duration)))))), r.createElement("div", { className: "stamp-Video-meta" }, r.createElement("div", { className: "stamp-Video-title" }, this.props.title), r.createElement("div", { className: "stamp-Video-author" }, this.props.username)));
      }, handlePlayClick: function (e) {
        return (e.stopPropagation(), this.setState({ hasPressedPlay: !0 }), this.state.isLoaded ? void (this.state.isPlaying ? this.pause() : this.play()) : (this.play(), void this.setIdleTimeout()));
      }, setIdleTimeout: function () {
        this.idleTimeout || (this.idleTimeout = setTimeout(this.handleVideoIdle, 5000));
      }, clearIdleTimeout: function () {
        this.idleTimeout && clearTimeout(this.idleTimeout);
      }, handleVideoIdle: function () {
        this.setState({ isLoaded: !0 });
      }, handleIframeMessage: function (e) {
        if (this.isMounted() && e.source === this.getContentWindow()) {
          var t = JSON.parse(e.data);switch (t.event) {case "ready":
              this.postMessage("addEventListener", "play"), this.postMessage("addEventListener", "playProgress"), this.postMessage("addEventListener", "pause"), this.postMessage("addEventListener", "finish");break;case "play":
              this.play();break;case "playProgress":
              this.handleVideoProgress(t.data);break;case "pause":
            case "finish":
              this.pause();}
        }
      }, handleVideoProgress: function (e) {
        this.state.isLoaded || this.setState({ isLoaded: !0 }), e.duration - e.seconds > 0.3 || (this.rewind(), requestAnimationFrame((function () {
          this.postMessage("pause");
        }).bind(this)));
      }, rewind: function () {
        this.postMessage("seekTo", 0), this.postMessage("pause");
      }, play: function () {
        s.play(this.getMediaId(), { mediaType: g.VIDEO, stampId: this.props.stamp.id });
      }, pause: function () {
        s.pause(this.getMediaId());
      }, postMessage: function (e, t) {
        var n = { method: e, value: t }, r = JSON.stringify(n), i = this.getContentWindow(), o = "http://player.vimeo.com/video/" + this.props.sourceId;i.postMessage(r, o);
      } });e.exports = C;
  }, 269: function (e, t, n) {
    "use strict";function r(e) {
      return s.contains(a, e.nodeName);
    }function i(e) {
      var t = Array.prototype.reduce.call(e.childNodes, function (e, t) {
        function n() {
          var n = [t];e.push(n);
        }var i = s.last(e);if (i) {
          var o = r(i[0]);o === r(t) ? i.push(t) : n();
        } else n();return e;
      }, []), n = t.filter(function (e) {
        var t = r(e[0]);return !t;
      });n.forEach(function (e) {
        var t = document.createElement("p");e[0].parentNode.insertBefore(t, e[0]), e.forEach(function (e) {
          t.appendChild(e);
        });
      }), e._isWrapped = !0;
    }function o(e) {
      var t = document.createElement("div");return (t.innerHTML = e, i(t), t.innerHTML);
    }var s = n(3), a = ["P", "DIV", "BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "OL", "LI"];e.exports = o;
  }, 274: function (e, t, n) {
    "use strict";var r = n(3), i = r.memoize, o = i(function () {
      var e = "position:", t = "sticky", n = document.createElement("test"), r = n.style;return (r.cssText = e + ["-webkit-", "-moz-", "-ms-", "-o-", ""].join(t + ";" + e) + t + ";", -1 !== r.position.indexOf(t));
    });e.exports = o;
  }, 275: function (e) {
    "use strict";var t = (function () {
      var e = window.getComputedStyle(document.documentElement, ""), t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1], n = "WebKit|Moz|MS|O".match(new RegExp("(" + t + ")", "i"))[1];return { dom: n, lowercase: t, css: "-" + t + "-", js: "ms" === t ? "ms" : t[0].toUpperCase() + t.substr(1) };
    })();e.exports = t;
  }, 623: function (e, t, n) {
    "use strict";e.exports = { createStampPage: n(733) };
  }, 714: function (e, t, n) {
    "use strict";var r = n(1), i = n(37), o = n(2), s = n(229), a = r, l = a.PropTypes, c = r.createClass({ displayName: "TrendingNextUp", mixins: [s.Feed, o], propTypes: { perFirstPage: l.number.isRequired, itemProps: l.object, getItemProps: l.func }, getStateFromStores: function () {
        return { stamps: this.getPage(), nextUpTitle: this.getNextUpTitle(), isExpectingPage: this.isExpectingPage() };
      }, componentDidMount: function () {
        this.requestPage(!0);
      }, render: function () {
        var e = this.state, t = e.nextUpTitle, n = e.stamps, o = e.isExpectingPage, s = e.isLastPage, a = this.props, l = a.getItemProps, c = a.itemProps;return r.createElement(i, { type: "stamps", mode: "grid", columns: 3, context: "page", title: t, items: n, itemProps: c, getItemProps: l, isExpectingPage: o, isLastPage: s, isInvalidated: !1, perFirstPage: this.props.perFirstPage });
      } });e.exports = c;
  }, 733: function (e, t, n) {
    (function (e) {
      "use strict";function t(t) {
        var n = t.routeName, I = t.stampPageMixin;T(I, "stampPageMixin is required");var O = r.createClass({ displayName: b(n), mixins: [I, v, y, S], propTypes: { params: M.shape({ stampId: M.string.isRequired }).isRequired }, statics: { willTransitionTo: function (e) {
              w() || e.wait(_().timeout(2000)["catch"](i.TimeoutError, k));
            } }, parseStampId: function (e) {
            return (e = e || this.props, parseInt(e.params.stampId, 10));
          }, hasScrolledToInfo: function (e, t) {
            return this._infoPanelOffsetTop ? e > this._infoPanelOffsetTop - t : !1;
          }, hasScrolledToNextUp: function (e, t) {
            return this._nextUpOffsetTop ? e > this._nextUpOffsetTop - t : !1;
          }, hasScrolledPastNextUp: function (e, t, n) {
            return (e = Math.min(e, t - n), this._nextUpOffsetTop ? e > this._nextUpOffsetTop : !1);
          }, getScrollState: function (e, t, n, r) {
            return { isScrolled: e > 52, isScrollingDown: e > 52 && e > t, hasScrolledToInfo: this.hasScrolledToInfo(e, r), hasScrolledToNextUp: this.hasScrolledToNextUp(e, r), hasScrolledPastNextUp: this.hasScrolledPastNextUp(e, n, r) };
          }, getStateFromStores: function (e) {
            var t = this.getPage(), n = this.parseStampId(e), r = t.map(function (e) {
              return e.id;
            }).indexOf(n), i = s.get(n), a = this.isLastPage(), l = this.getPerFirstPageCount(), c = !a && t.length - r <= l;return { stamp: i, primaryZine: i && this.getStampPrimaryZine(i.id), nextStamps: t.slice(r + 1), nextUpTitle: this.getNextUpTitle(), needsNextPage: c, isExpectingPage: this.isExpectingPage(), isLastPage: a, routeParams: o.omit(e.params, "stampId") };
          }, getPerFirstPageCount: function () {
            return Math.max(D, x(this.getScreenSize(), D));
          }, getNextUpStampItemProps: function (e) {
            var t = !1, n = null;return (this.shouldShowPrimaryZineInNextUp() && (n = this.getStampPrimaryZine(e.id)), { isTrending: t, primaryZine: n });
          }, getRouteProps: function () {
            return { routeName: n, routeParams: this.state.routeParams };
          }, hasEnoughStampsForNextUp: function () {
            var e = this.state, t = e.nextStamps, n = e.isExpectingPage, r = e.isLastPage;return t.length || !r || n;
          }, componentDidMount: function () {
            this.requestPage(!0), this.handleStampIdChange(this.props, !1), this.preloadNextStamps(), this.updatePageControlsAndNavigation(), this.showPlayerPreviewIfNeeded();
          }, componentWillReceiveProps: function (e) {
            C(this.props.params, e.params) || (this.setState(this.getStateFromStores(e)), this.handleStampIdChange(e, !0));
          }, componentDidUpdate: function (e, t) {
            this.state.needsNextPage && !this.state.isExpectingPage && this.requestPage();var n = t.stamp, r = this.state.stamp;n !== r && (this.updatePageControlsAndNavigation(), this.showPlayerPreviewIfNeeded(), n && r && n.id === r.id || this.preloadNextStamps());
          }, scrollStateDidUpdate: function () {
            this.updatePageControlsAndNavigation();
          }, handleStampIdChange: function (e, t) {
            var n = this.parseStampId(e);a.requestStamp(n, ["content", "zines"]), a.incrementStampViews(n, t), this._infoPanelOffsetTop = 0, this._nextUpOffsetTop = 0;
          }, updatePageControlsAndNavigation: function () {
            if ((u.clearContext(), l.hidePageControls(), this.state.stamp)) {
              var e = this.parseStampId(), t = this.getStampPrimaryZine(e), n = this.getStampPendingZine(e), r = this.state.nextUpTitle;this.hasEnoughStampsForNextUp() || (r = N.Feed.getNextUpTitle.call(this)), u.replaceContext(p.STAMP, { stampId: e, primaryZineSlug: t && t.slug, isScrolled: this.state.isScrolled, isScrollingDown: this.state.isScrollingDown, hasScrolledToInfo: this.state.hasScrolledToInfo, hasScrolledPastNextUp: this.state.hasScrolledPastNextUp, nextUpTitle: r }), n && !this.state.hasScrolledToNextUp ? l.showPageControls(c.STAMP_PENDING, { stampId: e, zineSlug: n.slug }) : this.state.hasScrolledToInfo || l.showPageControls(c.STAMP, { stampId: e });
            }
          }, showPlayerPreviewIfNeeded: function () {
            if (!this.state.stamp) return void P.considerRemoveStickyMedia();var e = A(this.state.stamp);e ? P.considerSetStickyMedia(e.uuid) : P.considerRemoveStickyMedia();
          }, preloadNextStamps: function () {
            if (this.state.nextStamps) {
              var e = Math.min(L, this.getPerFirstPageCount());this.state.nextStamps.slice(0, e).forEach(function (e) {
                return a.requestStamp(e.id, ["content", "zines"]);
              });
            }
          }, componentWillUnmount: function () {
            u.clearContext(), l.hidePageControls(), P.considerRemoveStickyMedia();
          }, render: function () {
            var e = this.state.stamp;return e ? r.createElement(R, { title: e.title }, r.createElement(d, { stamp: e, primaryZine: this.state.primaryZine, nextUp: this.renderNextUp(), onInfoPanelOffsetTopChange: this.handleInfoPanelOffsetTopChange, isInViewer: !0 })) : r.createElement(h, { absoluteCenter: !0 });
          }, renderNextUp: function () {
            if (!this.hasEnoughStampsForNextUp()) return this.renderTrendingNextUp();var e = this.state, t = e.nextStamps, n = e.primaryZine, i = e.nextUpTitle, o = e.isExpectingPage, s = e.isLastPage, a = this.getColors(n);return r.createElement(f, { onOffsetTopChange: this.handleNextUpOffsetTopChange }, r.createElement(m, { key: "next-" + this.parseStampId(), context: "Stamp", style: { backgroundColor: "#" + a.background }, color: a.text }, r.createElement(g, { type: "stamps", mode: "grid", columns: D, context: "page", color: a.text, title: i, items: t, itemProps: this.getRouteProps(), getItemProps: this.getNextUpStampItemProps, isExpectingPage: o, isLastPage: s, loadNextPage: this.requestPage, isInvalidated: !1, perFirstPage: this.getPerFirstPageCount() })));
          }, renderTrendingNextUp: function () {
            return r.createElement(f, { onOffsetTopChange: this.handleNextUpOffsetTopChange }, r.createElement(m, { context: "Stamp" }, r.createElement(E, { perFirstPage: this.getPerFirstPageCount(), itemProps: this.getRouteProps(), getItemProps: this.getNextUpStampItemProps })));
          }, handleNextUpOffsetTopChange: function (e) {
            this._nextUpOffsetTop = e, this.updateScrollState();
          }, handleInfoPanelOffsetTopChange: function (e) {
            this._infoPanelOffsetTop = e, this.updateScrollState();
          } });return (e.makeHot && (O = e.makeHot(O, n)), O);
      }var r = n(1), i = n(50), o = n(3), s = n(14), a = n(42), l = n(111), c = n(85), u = n(94), p = n(64), d = n(251), h = n(35), m = n(88), f = n(160), g = n(37), E = n(714), v = n(167), y = n(114), S = n(2), T = n(8), C = n(30), b = n(123).pascalize, _ = n(761), I = n(23), w = I.isMobile, k = n(120), R = n(72), x = n(272), N = n(229), P = n(61), A = n(751), O = r, M = O.PropTypes, D = 3, L = 3;e.exports = t;
    }).call(t, n(209)(e));
  }, 751: function (e, t, n) {
    "use strict";function r(e) {
      return e && e.content ? o(e.content.sections, function (e) {
        return e.type === s.MEDIA && (e.mediaType === a.AUDIO_TRACK || e.mediaType === a.AUDIO_PLAYLIST);
      }) : null;
    }var i = n(3), o = i.find, s = n(55), a = n(54);e.exports = r;
  }, 761: function (e, t, n) {
    "use strict";function r() {
      return new i(function (e) {
        window.requestAnimationFrame(function () {
          function t() {
            return o() <= r;
          }function n() {
            t() ? e() : window.requestAnimationFrame(n);
          }var r = document.body.scrollHeight - window.innerHeight;n();
        });
      });
    }var i = n(50), o = n(66);e.exports = r;
  } });
//# sourceMappingURL=2.chunk.360ba5f4b3a78273f7c2.js.map