/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	__webpack_require__(2)();
	
	var warn = function warn(msg) {
	    if (!window || !window.console) {
	        return;
	    }
	    window.console.warn(msg);
	};
	
	var FontFaceObserver = __webpack_require__(9);
	var observer = new FontFaceObserver('Source Sans Pro');
	
	try {
	    observer.check().then(function () {
	        $('body').addClass('font-loaded');
	    }, function () {
	        warn('Cannot load font.');
	    });
	} catch (e) {
	    warn('Failed to use FontFaceObserver', e);
	}
	
	window.Storage = __webpack_require__(10);
	
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16)();
	__webpack_require__(17)();
	__webpack_require__(18)();
	
	if (!window.notification) {
	    window.notification = __webpack_require__(19);
	} else {
	    warn('window.notification is already registered.');
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
	var Zepto = (function () {
	  function L(t) {
	    return null == t ? String(t) : j[S.call(t)] || "object";
	  }function Z(t) {
	    return "function" == L(t);
	  }function _(t) {
	    return null != t && t == t.window;
	  }function $(t) {
	    return null != t && t.nodeType == t.DOCUMENT_NODE;
	  }function D(t) {
	    return "object" == L(t);
	  }function M(t) {
	    return D(t) && !_(t) && Object.getPrototypeOf(t) == Object.prototype;
	  }function R(t) {
	    return "number" == typeof t.length;
	  }function k(t) {
	    return s.call(t, function (t) {
	      return null != t;
	    });
	  }function z(t) {
	    return t.length > 0 ? n.fn.concat.apply([], t) : t;
	  }function F(t) {
	    return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
	  }function q(t) {
	    return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
	  }function H(t, e) {
	    return "number" != typeof e || c[F(t)] ? e : e + "px";
	  }function I(t) {
	    var e, n;return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t];
	  }function V(t) {
	    return "children" in t ? o.call(t.children) : n.map(t.childNodes, function (t) {
	      return 1 == t.nodeType ? t : void 0;
	    });
	  }function B(n, i, r) {
	    for (e in i) r && (M(i[e]) || A(i[e])) ? (M(i[e]) && !M(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e]);
	  }function U(t, e) {
	    return null == e ? n(t) : n(t).filter(e);
	  }function J(t, e, n, i) {
	    return Z(e) ? e.call(t, n, i) : e;
	  }function X(t, e, n) {
	    null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
	  }function W(e, n) {
	    var i = e.className || "",
	        r = i && i.baseVal !== t;return n === t ? r ? i.baseVal : i : void (r ? i.baseVal = n : e.className = n);
	  }function Y(t) {
	    try {
	      return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t;
	    } catch (e) {
	      return t;
	    }
	  }function G(t, e) {
	    e(t);for (var n = 0, i = t.childNodes.length; i > n; n++) G(t.childNodes[n], e);
	  }var t,
	      e,
	      n,
	      i,
	      C,
	      N,
	      r = [],
	      o = r.slice,
	      s = r.filter,
	      a = window.document,
	      u = {},
	      f = {},
	      c = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
	      l = /^\s*<(\w+|!)[^>]*>/,
	      h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	      p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	      d = /^(?:body|html)$/i,
	      m = /([A-Z])/g,
	      g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
	      v = ["after", "prepend", "before", "append"],
	      y = a.createElement("table"),
	      x = a.createElement("tr"),
	      b = { tr: a.createElement("tbody"), tbody: y, thead: y, tfoot: y, td: x, th: x, "*": a.createElement("div") },
	      w = /complete|loaded|interactive/,
	      E = /^[\w-]*$/,
	      j = {},
	      S = j.toString,
	      T = {},
	      O = a.createElement("div"),
	      P = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
	      A = Array.isArray || function (t) {
	    return t instanceof Array;
	  };return T.matches = function (t, e) {
	    if (!e || !t || 1 !== t.nodeType) return !1;var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;if (n) return n.call(t, e);var i,
	        r = t.parentNode,
	        o = !r;return o && (r = O).appendChild(t), i = ~T.qsa(r, e).indexOf(t), o && O.removeChild(t), i;
	  }, C = function (t) {
	    return t.replace(/-+(.)?/g, function (t, e) {
	      return e ? e.toUpperCase() : "";
	    });
	  }, N = function (t) {
	    return s.call(t, function (e, n) {
	      return t.indexOf(e) == n;
	    });
	  }, T.fragment = function (e, i, r) {
	    var s, u, f;return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function () {
	      f.removeChild(this);
	    })), M(r) && (u = n(s), n.each(r, function (t, e) {
	      g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e);
	    })), s;
	  }, T.Z = function (t, e) {
	    return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t;
	  }, T.isZ = function (t) {
	    return t instanceof T.Z;
	  }, T.init = function (e, i) {
	    var r;if (!e) return T.Z();if ("string" == typeof e) if ((e = e.trim(), "<" == e[0] && l.test(e))) r = T.fragment(e, RegExp.$1, i), e = null;else {
	      if (i !== t) return n(i).find(e);r = T.qsa(a, e);
	    } else {
	      if (Z(e)) return n(a).ready(e);if (T.isZ(e)) return e;if (A(e)) r = k(e);else if (D(e)) r = [e], e = null;else if (l.test(e)) r = T.fragment(e.trim(), RegExp.$1, i), e = null;else {
	        if (i !== t) return n(i).find(e);r = T.qsa(a, e);
	      }
	    }return T.Z(r, e);
	  }, n = function (t, e) {
	    return T.init(t, e);
	  }, n.extend = function (t) {
	    var e,
	        n = o.call(arguments, 1);return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
	      B(t, n, e);
	    }), t;
	  }, T.qsa = function (t, e) {
	    var n,
	        i = "#" == e[0],
	        r = !i && "." == e[0],
	        s = i || r ? e.slice(1) : e,
	        a = E.test(s);return $(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e));
	  }, n.contains = a.documentElement.contains ? function (t, e) {
	    return t !== e && t.contains(e);
	  } : function (t, e) {
	    for (; e && (e = e.parentNode);) if (e === t) return !0;return !1;
	  }, n.type = L, n.isFunction = Z, n.isWindow = _, n.isArray = A, n.isPlainObject = M, n.isEmptyObject = function (t) {
	    var e;for (e in t) return !1;return !0;
	  }, n.inArray = function (t, e, n) {
	    return r.indexOf.call(e, t, n);
	  }, n.camelCase = C, n.trim = function (t) {
	    return null == t ? "" : String.prototype.trim.call(t);
	  }, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function (t, e) {
	    var n,
	        r,
	        o,
	        i = [];if (R(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n);else for (o in t) n = e(t[o], o), null != n && i.push(n);return z(i);
	  }, n.each = function (t, e) {
	    var n, i;if (R(t)) {
	      for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t;
	    } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;return t;
	  }, n.grep = function (t, e) {
	    return s.call(t, e);
	  }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
	    j["[object " + e + "]"] = e.toLowerCase();
	  }), n.fn = { forEach: r.forEach, reduce: r.reduce, push: r.push, sort: r.sort, indexOf: r.indexOf, concat: r.concat, map: function map(t) {
	      return n(n.map(this, function (e, n) {
	        return t.call(e, n, e);
	      }));
	    }, slice: function slice() {
	      return n(o.apply(this, arguments));
	    }, ready: function ready(t) {
	      return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function () {
	        t(n);
	      }, !1), this;
	    }, get: function get(e) {
	      return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length];
	    }, toArray: function toArray() {
	      return this.get();
	    }, size: function size() {
	      return this.length;
	    }, remove: function remove() {
	      return this.each(function () {
	        null != this.parentNode && this.parentNode.removeChild(this);
	      });
	    }, each: function each(t) {
	      return r.every.call(this, function (e, n) {
	        return t.call(e, n, e) !== !1;
	      }), this;
	    }, filter: function filter(t) {
	      return Z(t) ? this.not(this.not(t)) : n(s.call(this, function (e) {
	        return T.matches(e, t);
	      }));
	    }, add: function add(t, e) {
	      return n(N(this.concat(n(t, e))));
	    }, is: function is(t) {
	      return this.length > 0 && T.matches(this[0], t);
	    }, not: function not(e) {
	      var i = [];if (Z(e) && e.call !== t) this.each(function (t) {
	        e.call(this, t) || i.push(this);
	      });else {
	        var r = "string" == typeof e ? this.filter(e) : R(e) && Z(e.item) ? o.call(e) : n(e);this.forEach(function (t) {
	          r.indexOf(t) < 0 && i.push(t);
	        });
	      }return n(i);
	    }, has: function has(t) {
	      return this.filter(function () {
	        return D(t) ? n.contains(this, t) : n(this).find(t).size();
	      });
	    }, eq: function eq(t) {
	      return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
	    }, first: function first() {
	      var t = this[0];return t && !D(t) ? t : n(t);
	    }, last: function last() {
	      var t = this[this.length - 1];return t && !D(t) ? t : n(t);
	    }, find: function find(t) {
	      var e,
	          i = this;return e = t ? "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? n(t).filter(function () {
	        var t = this;return r.some.call(i, function (e) {
	          return n.contains(e, t);
	        });
	      }) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function () {
	        return T.qsa(this, t);
	      }) : n();
	    }, closest: function closest(t, e) {
	      var i = this[0],
	          r = !1;for ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));) i = i !== e && !$(i) && i.parentNode;return n(i);
	    }, parents: function parents(t) {
	      for (var e = [], i = this; i.length > 0;) i = n.map(i, function (t) {
	        return (t = t.parentNode) && !$(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
	      });return U(e, t);
	    }, parent: function parent(t) {
	      return U(N(this.pluck("parentNode")), t);
	    }, children: function children(t) {
	      return U(this.map(function () {
	        return V(this);
	      }), t);
	    }, contents: function contents() {
	      return this.map(function () {
	        return o.call(this.childNodes);
	      });
	    }, siblings: function siblings(t) {
	      return U(this.map(function (t, e) {
	        return s.call(V(e.parentNode), function (t) {
	          return t !== e;
	        });
	      }), t);
	    }, empty: function empty() {
	      return this.each(function () {
	        this.innerHTML = "";
	      });
	    }, pluck: function pluck(t) {
	      return n.map(this, function (e) {
	        return e[t];
	      });
	    }, show: function show() {
	      return this.each(function () {
	        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName));
	      });
	    }, replaceWith: function replaceWith(t) {
	      return this.before(t).remove();
	    }, wrap: function wrap(t) {
	      var e = Z(t);if (this[0] && !e) var i = n(t).get(0),
	          r = i.parentNode || this.length > 1;return this.each(function (o) {
	        n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i);
	      });
	    }, wrapAll: function wrapAll(t) {
	      if (this[0]) {
	        n(this[0]).before(t = n(t));for (var e; (e = t.children()).length;) t = e.first();n(t).append(this);
	      }return this;
	    }, wrapInner: function wrapInner(t) {
	      var e = Z(t);return this.each(function (i) {
	        var r = n(this),
	            o = r.contents(),
	            s = e ? t.call(this, i) : t;o.length ? o.wrapAll(s) : r.append(s);
	      });
	    }, unwrap: function unwrap() {
	      return this.parent().each(function () {
	        n(this).replaceWith(n(this).children());
	      }), this;
	    }, clone: function clone() {
	      return this.map(function () {
	        return this.cloneNode(!0);
	      });
	    }, hide: function hide() {
	      return this.css("display", "none");
	    }, toggle: function toggle(e) {
	      return this.each(function () {
	        var i = n(this);(e === t ? "none" == i.css("display") : e) ? i.show() : i.hide();
	      });
	    }, prev: function prev(t) {
	      return n(this.pluck("previousElementSibling")).filter(t || "*");
	    }, next: function next(t) {
	      return n(this.pluck("nextElementSibling")).filter(t || "*");
	    }, html: function html(t) {
	      return 0 in arguments ? this.each(function (e) {
	        var i = this.innerHTML;n(this).empty().append(J(this, t, e, i));
	      }) : 0 in this ? this[0].innerHTML : null;
	    }, text: function text(t) {
	      return 0 in arguments ? this.each(function (e) {
	        var n = J(this, t, e, this.textContent);this.textContent = null == n ? "" : "" + n;
	      }) : 0 in this ? this[0].textContent : null;
	    }, attr: function attr(n, i) {
	      var r;return "string" != typeof n || 1 in arguments ? this.each(function (t) {
	        if (1 === this.nodeType) if (D(n)) for (e in n) X(this, e, n[e]);else X(this, n, J(this, i, t, this.getAttribute(n)));
	      }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t;
	    }, removeAttr: function removeAttr(t) {
	      return this.each(function () {
	        1 === this.nodeType && t.split(" ").forEach(function (t) {
	          X(this, t);
	        }, this);
	      });
	    }, prop: function prop(t, e) {
	      return t = P[t] || t, 1 in arguments ? this.each(function (n) {
	        this[t] = J(this, e, n, this[t]);
	      }) : this[0] && this[0][t];
	    }, data: function data(e, n) {
	      var i = "data-" + e.replace(m, "-$1").toLowerCase(),
	          r = 1 in arguments ? this.attr(i, n) : this.attr(i);return null !== r ? Y(r) : t;
	    }, val: function val(t) {
	      return 0 in arguments ? this.each(function (e) {
	        this.value = J(this, t, e, this.value);
	      }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
	        return this.selected;
	      }).pluck("value") : this[0].value);
	    }, offset: function offset(t) {
	      if (t) return this.each(function (e) {
	        var i = n(this),
	            r = J(this, t, e, i.offset()),
	            o = i.offsetParent().offset(),
	            s = { top: r.top - o.top, left: r.left - o.left };"static" == i.css("position") && (s.position = "relative"), i.css(s);
	      });if (!this.length) return null;var e = this[0].getBoundingClientRect();return { left: e.left + window.pageXOffset, top: e.top + window.pageYOffset, width: Math.round(e.width), height: Math.round(e.height) };
	    }, css: function css(t, i) {
	      if (arguments.length < 2) {
	        var r,
	            o = this[0];if (!o) return;if ((r = getComputedStyle(o, ""), "string" == typeof t)) return o.style[C(t)] || r.getPropertyValue(t);if (A(t)) {
	          var s = {};return n.each(t, function (t, e) {
	            s[e] = o.style[C(e)] || r.getPropertyValue(e);
	          }), s;
	        }
	      }var a = "";if ("string" == L(t)) i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function () {
	        this.style.removeProperty(F(t));
	      });else for (e in t) t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function () {
	        this.style.removeProperty(F(e));
	      });return this.each(function () {
	        this.style.cssText += ";" + a;
	      });
	    }, index: function index(t) {
	      return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0]);
	    }, hasClass: function hasClass(t) {
	      return t ? r.some.call(this, function (t) {
	        return this.test(W(t));
	      }, q(t)) : !1;
	    }, addClass: function addClass(t) {
	      return t ? this.each(function (e) {
	        if ("className" in this) {
	          i = [];var r = W(this),
	              o = J(this, t, e, r);o.split(/\s+/g).forEach(function (t) {
	            n(this).hasClass(t) || i.push(t);
	          }, this), i.length && W(this, r + (r ? " " : "") + i.join(" "));
	        }
	      }) : this;
	    }, removeClass: function removeClass(e) {
	      return this.each(function (n) {
	        if ("className" in this) {
	          if (e === t) return W(this, "");i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function (t) {
	            i = i.replace(q(t), " ");
	          }), W(this, i.trim());
	        }
	      });
	    }, toggleClass: function toggleClass(e, i) {
	      return e ? this.each(function (r) {
	        var o = n(this),
	            s = J(this, e, r, W(this));s.split(/\s+/g).forEach(function (e) {
	          (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e);
	        });
	      }) : this;
	    }, scrollTop: function scrollTop(e) {
	      if (this.length) {
	        var n = "scrollTop" in this[0];return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
	          this.scrollTop = e;
	        } : function () {
	          this.scrollTo(this.scrollX, e);
	        });
	      }
	    }, scrollLeft: function scrollLeft(e) {
	      if (this.length) {
	        var n = "scrollLeft" in this[0];return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
	          this.scrollLeft = e;
	        } : function () {
	          this.scrollTo(e, this.scrollY);
	        });
	      }
	    }, position: function position() {
	      if (this.length) {
	        var t = this[0],
	            e = this.offsetParent(),
	            i = this.offset(),
	            r = d.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, { top: i.top - r.top, left: i.left - r.left };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;return t;
	      });
	    } }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (e) {
	    var i = e.replace(/./, function (t) {
	      return t[0].toUpperCase();
	    });n.fn[e] = function (r) {
	      var o,
	          s = this[0];return r === t ? _(s) ? s["inner" + i] : $(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function (t) {
	        s = n(this), s.css(e, J(this, r, t, s[e]()));
	      });
	    };
	  }), v.forEach(function (t, e) {
	    var i = e % 2;n.fn[t] = function () {
	      var t,
	          o,
	          r = n.map(arguments, function (e) {
	        return t = L(e), "object" == t || "array" == t || null == e ? e : T.fragment(e);
	      }),
	          s = this.length > 1;return r.length < 1 ? this : this.each(function (t, u) {
	        o = i ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;var f = n.contains(a.documentElement, o);r.forEach(function (t) {
	          if (s) t = t.cloneNode(!0);else if (!o) return n(t).remove();o.insertBefore(t, u), f && G(t, function (t) {
	            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
	          });
	        });
	      });
	    }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function (e) {
	      return n(e)[t](this), this;
	    };
	  }), T.Z.prototype = n.fn, T.uniq = N, T.deserializeValue = Y, n.zepto = T, n;
	})();window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), (function (t) {
	  function l(t) {
	    return t._zid || (t._zid = e++);
	  }function h(t, e, n, i) {
	    if ((e = p(e), e.ns)) var r = d(e.ns);return (s[l(t)] || []).filter(function (t) {
	      return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i);
	    });
	  }function p(t) {
	    var e = ("" + t).split(".");return { e: e[0], ns: e.slice(1).sort().join(" ") };
	  }function d(t) {
	    return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
	  }function m(t, e) {
	    return t.del && !u && t.e in f || !!e;
	  }function g(t) {
	    return c[t] || u && f[t] || t;
	  }function v(e, i, r, o, a, u, f) {
	    var h = l(e),
	        d = s[h] || (s[h] = []);i.split(/\s/).forEach(function (i) {
	      if ("ready" == i) return t(document).ready(r);var s = p(i);s.fn = r, s.sel = a, s.e in c && (r = function (e) {
	        var n = e.relatedTarget;return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0;
	      }), s.del = u;var l = u || r;s.proxy = function (t) {
	        if ((t = j(t), !t.isImmediatePropagationStopped())) {
	          t.data = o;var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));return i === !1 && (t.preventDefault(), t.stopPropagation()), i;
	        }
	      }, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f));
	    });
	  }function y(t, e, n, i, r) {
	    var o = l(t);(e || "").split(/\s/).forEach(function (e) {
	      h(t, e, n, i).forEach(function (e) {
	        delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
	      });
	    });
	  }function j(e, i) {
	    return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function (t, n) {
	      var r = i[t];e[t] = function () {
	        return this[n] = x, r && r.apply(i, arguments);
	      }, e[n] = b;
	    }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e;
	  }function S(t) {
	    var e,
	        i = { originalEvent: t };for (e in t) w.test(e) || t[e] === n || (i[e] = t[e]);return j(i, t);
	  }var n,
	      e = 1,
	      i = Array.prototype.slice,
	      r = t.isFunction,
	      o = function o(t) {
	    return "string" == typeof t;
	  },
	      s = {},
	      a = {},
	      u = "onfocusin" in window,
	      f = { focus: "focusin", blur: "focusout" },
	      c = { mouseenter: "mouseover", mouseleave: "mouseout" };a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = { add: v, remove: y }, t.proxy = function (e, n) {
	    var s = 2 in arguments && i.call(arguments, 2);if (r(e)) {
	      var a = function a() {
	        return e.apply(n, s ? s.concat(i.call(arguments)) : arguments);
	      };return a._zid = l(e), a;
	    }if (o(n)) return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);throw new TypeError("expected function");
	  }, t.fn.bind = function (t, e, n) {
	    return this.on(t, e, n);
	  }, t.fn.unbind = function (t, e) {
	    return this.off(t, e);
	  }, t.fn.one = function (t, e, n, i) {
	    return this.on(t, e, n, i, 1);
	  };var x = function x() {
	    return !0;
	  },
	      b = function b() {
	    return !1;
	  },
	      w = /^([A-Z]|returnValue$|layer[XY]$)/,
	      E = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };t.fn.delegate = function (t, e, n) {
	    return this.on(e, t, n);
	  }, t.fn.undelegate = function (t, e, n) {
	    return this.off(e, t, n);
	  }, t.fn.live = function (e, n) {
	    return t(document.body).delegate(this.selector, e, n), this;
	  }, t.fn.die = function (e, n) {
	    return t(document.body).undelegate(this.selector, e, n), this;
	  }, t.fn.on = function (e, s, a, u, f) {
	    var c,
	        l,
	        h = this;return e && !o(e) ? (t.each(e, function (t, e) {
	      h.on(t, s, a, e, f);
	    }), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function (n, r) {
	      f && (c = function (t) {
	        return y(r, t.type, u), u.apply(this, arguments);
	      }), s && (l = function (e) {
	        var n,
	            o = t(e.target).closest(s, r).get(0);return o && o !== r ? (n = t.extend(S(e), { currentTarget: o, liveFired: r }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0;
	      }), v(r, e, u, a, s, l || c);
	    }));
	  }, t.fn.off = function (e, i, s) {
	    var a = this;return e && !o(e) ? (t.each(e, function (t, e) {
	      a.off(t, i, e);
	    }), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function () {
	      y(this, e, s, i);
	    }));
	  }, t.fn.trigger = function (e, n) {
	    return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function () {
	      e.type in f && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n);
	    });
	  }, t.fn.triggerHandler = function (e, n) {
	    var i, r;return this.each(function (s, a) {
	      i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function (t, e) {
	        return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0;
	      });
	    }), r;
	  }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
	    t.fn[e] = function (t) {
	      return 0 in arguments ? this.bind(e, t) : this.trigger(e);
	    };
	  }), t.Event = function (t, e) {
	    o(t) || (e = t, t = e.type);var n = document.createEvent(a[t] || "Events"),
	        i = !0;if (e) for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];return n.initEvent(t, i, !0), j(n);
	  };
	})(Zepto), (function (t) {
	  function h(e, n, i) {
	    var r = t.Event(n);return t(e).trigger(r, i), !r.isDefaultPrevented();
	  }function p(t, e, i, r) {
	    return t.global ? h(e || n, i, r) : void 0;
	  }function d(e) {
	    e.global && 0 === t.active++ && p(e, null, "ajaxStart");
	  }function m(e) {
	    e.global && ! --t.active && p(e, null, "ajaxStop");
	  }function g(t, e) {
	    var n = e.context;return e.beforeSend.call(n, t, e) === !1 || p(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void p(e, n, "ajaxSend", [t, e]);
	  }function v(t, e, n, i) {
	    var r = n.context,
	        o = "success";n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), p(n, r, "ajaxSuccess", [e, n, t]), x(o, e, n);
	  }function y(t, e, n, i, r) {
	    var o = i.context;i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), p(i, o, "ajaxError", [n, i, t || e]), x(e, n, i);
	  }function x(t, e, n) {
	    var i = n.context;n.complete.call(i, e, t), p(n, i, "ajaxComplete", [e, n]), m(n);
	  }function b() {}function w(t) {
	    return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text";
	  }function E(t, e) {
	    return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
	  }function j(e) {
	    e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0);
	  }function S(e, n, i, r) {
	    return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), { url: e, data: n, success: i, dataType: r };
	  }function C(e, n, i, r) {
	    var o,
	        s = t.isArray(n),
	        a = t.isPlainObject(n);t.each(n, function (n, u) {
	      o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? C(e, u, i, n) : e.add(n, u);
	    });
	  }var i,
	      r,
	      e = 0,
	      n = window.document,
	      o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      s = /^(?:text|application)\/javascript/i,
	      a = /^(?:text|application)\/xml/i,
	      u = "application/json",
	      f = "text/html",
	      c = /^\s*$/,
	      l = n.createElement("a");l.href = window.location.href, t.active = 0, t.ajaxJSONP = function (i, r) {
	    if (!("type" in i)) return t.ajax(i);var f,
	        h,
	        o = i.jsonpCallback,
	        s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
	        a = n.createElement("script"),
	        u = window[s],
	        c = function c(e) {
	      t(a).triggerHandler("error", e || "abort");
	    },
	        l = { abort: c };return r && r.promise(l), t(a).on("load error", function (e, n) {
	      clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? v(f[0], l, i, r) : y(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0;
	    }), g(l, i) === !1 ? (c("abort"), l) : (window[s] = function () {
	      f = arguments;
	    }, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function () {
	      c("timeout");
	    }, i.timeout)), l);
	  }, t.ajaxSettings = { type: "GET", beforeSend: b, success: b, error: b, complete: b, context: null, global: !0, xhr: function xhr() {
	      return new window.XMLHttpRequest();
	    }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: u, xml: "application/xml, text/xml", html: f, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0 }, t.ajax = function (e) {
	    var a,
	        o = t.extend({}, e || {}),
	        s = t.Deferred && t.Deferred();for (i in t.ajaxSettings) void 0 === o[i] && (o[i] = t.ajaxSettings[i]);d(o), o.crossDomain || (a = n.createElement("a"), a.href = o.url, a.href = a.href, o.crossDomain = l.protocol + "//" + l.host != a.protocol + "//" + a.host), o.url || (o.url = window.location.toString()), j(o);var u = o.dataType,
	        f = /\?.+=\?/.test(o.url);if ((f && (u = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != u && "jsonp" != u) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == u)) return f || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, s);var C,
	        h = o.accepts[u],
	        p = {},
	        m = function m(t, e) {
	      p[t.toLowerCase()] = [t, e];
	    },
	        x = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol,
	        S = o.xhr(),
	        T = S.setRequestHeader;if ((s && s.promise(S), o.crossDomain || m("X-Requested-With", "XMLHttpRequest"), m("Accept", h || "*/*"), (h = o.mimeType || h) && (h.indexOf(",") > -1 && (h = h.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(h)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && m("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers)) for (r in o.headers) m(r, o.headers[r]);if ((S.setRequestHeader = m, S.onreadystatechange = function () {
	      if (4 == S.readyState) {
	        S.onreadystatechange = b, clearTimeout(C);var e,
	            n = !1;if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == x) {
	          u = u || w(o.mimeType || S.getResponseHeader("content-type")), e = S.responseText;try {
	            "script" == u ? (1, eval)(e) : "xml" == u ? e = S.responseXML : "json" == u && (e = c.test(e) ? null : t.parseJSON(e));
	          } catch (i) {
	            n = i;
	          }n ? y(n, "parsererror", S, o, s) : v(e, S, o, s);
	        } else y(S.statusText || null, S.status ? "error" : "abort", S, o, s);
	      }
	    }, g(S, o) === !1)) return S.abort(), y(null, "abort", S, o, s), S;if (o.xhrFields) for (r in o.xhrFields) S[r] = o.xhrFields[r];var N = "async" in o ? o.async : !0;S.open(o.type, o.url, N, o.username, o.password);for (r in p) T.apply(S, p[r]);return o.timeout > 0 && (C = setTimeout(function () {
	      S.onreadystatechange = b, S.abort(), y(null, "timeout", S, o, s);
	    }, o.timeout)), S.send(o.data ? o.data : null), S;
	  }, t.get = function () {
	    return t.ajax(S.apply(null, arguments));
	  }, t.post = function () {
	    var e = S.apply(null, arguments);return e.type = "POST", t.ajax(e);
	  }, t.getJSON = function () {
	    var e = S.apply(null, arguments);return e.dataType = "json", t.ajax(e);
	  }, t.fn.load = function (e, n, i) {
	    if (!this.length) return this;var a,
	        r = this,
	        s = e.split(/\s/),
	        u = S(e, n, i),
	        f = u.success;return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function (e) {
	      r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments);
	    }, t.ajax(u), this;
	  };var T = encodeURIComponent;t.param = function (e, n) {
	    var i = [];return i.add = function (e, n) {
	      t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(T(e) + "=" + T(n));
	    }, C(i, e, n), i.join("&").replace(/%20/g, "+");
	  };
	})(Zepto), (function (t) {
	  t.fn.serializeArray = function () {
	    var e,
	        n,
	        i = [],
	        r = function r(t) {
	      return t.forEach ? t.forEach(r) : void i.push({ name: e, value: t });
	    };return this[0] && t.each(this[0].elements, function (i, o) {
	      n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val());
	    }), i;
	  }, t.fn.serialize = function () {
	    var t = [];return this.serializeArray().forEach(function (e) {
	      t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
	    }), t.join("&");
	  }, t.fn.submit = function (e) {
	    if (0 in arguments) this.bind("submit", e);else if (this.length) {
	      var n = t.Event("submit");this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
	    }return this;
	  };
	})(Zepto), (function (t) {
	  "__proto__" in {} || t.extend(t.zepto, { Z: function Z(e, n) {
	      return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e;
	    }, isZ: function isZ(e) {
	      return "array" === t.type(e) && "__Z" in e;
	    } });try {
	    getComputedStyle(void 0);
	  } catch (e) {
	    var n = getComputedStyle;window.getComputedStyle = function (t) {
	      try {
	        return n(t);
	      } catch (e) {
	        return null;
	      }
	    };
	  }
	})(Zepto);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (callback) {
	    'use strict';
	
	    var needsPlaceholderPolyfill = !('placeholder' in document.createElement('input'));
	
	    var isDom4Browser = document.head && 'matches' in document.head && 'classList' in document.head && 'CustomEvent' in window;
	
	    var isEs5Browser = 'map' in Array.prototype && 'isArray' in Array && 'bind' in Function.prototype && 'keys' in Object && 'trim' in String.prototype;
	
	    __webpack_require__(3);
	    __webpack_require__(4);
	
	    if (!isDom4Browser) {
	        __webpack_require__(6);
	    }
	    if (!isEs5Browser) {
	        __webpack_require__(7);
	    }
	    if (needsPlaceholderPolyfill) {
	        //check if this is required anymore and can be dropped - midler, 09.02.2016
	        //needed only for IE9 support
	        __webpack_require__(8);
	    }
	
	    start();
	
	    function start() {
	        if (callback && typeof callback === 'function') {
	            callback();
	        }
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	/*! (C) WebReflection Mit Style License */
	(function (e, t, n, r) {
	  "use strict";
	  function rt(e, t) {
	    for (var n = 0, r = e.length; n < r; n++) vt(e[n], t);
	  }function it(e) {
	    for (var t = 0, n = e.length, r; t < n; t++) r = e[t], nt(r, b[ot(r)]);
	  }function st(e) {
	    return function (t) {
	      j(t) && (vt(t, e), rt(t.querySelectorAll(w), e));
	    };
	  }function ot(e) {
	    var t = e.getAttribute("is"),
	        n = e.nodeName.toUpperCase(),
	        r = S.call(y, t ? v + t.toUpperCase() : d + n);return t && -1 < r && !ut(n, t) ? -1 : r;
	  }function ut(e, t) {
	    return -1 < w.indexOf(e + '[is="' + t + '"]');
	  }function at(e) {
	    var t = e.currentTarget,
	        n = e.attrChange,
	        r = e.attrName,
	        i = e.target;Q && (!i || i === t) && t.attributeChangedCallback && r !== "style" && e.prevValue !== e.newValue && t.attributeChangedCallback(r, n === e[a] ? null : e.prevValue, n === e[l] ? null : e.newValue);
	  }function ft(e) {
	    var t = st(e);return function (e) {
	      X.push(t, e.target);
	    };
	  }function lt(e) {
	    K && (K = !1, e.currentTarget.removeEventListener(h, lt)), rt((e.target || t).querySelectorAll(w), e.detail === o ? o : s), B && pt();
	  }function ct(e, t) {
	    var n = this;q.call(n, e, t), G.call(n, { target: n });
	  }function ht(e, t) {
	    D(e, t), et ? et.observe(e, z) : (J && (e.setAttribute = ct, e[i] = Z(e), e.addEventListener(p, G)), e.addEventListener(c, at)), e.createdCallback && Q && (e.created = !0, e.createdCallback(), e.created = !1);
	  }function pt() {
	    for (var e, t = 0, n = F.length; t < n; t++) e = F[t], E.contains(e) || (n--, F.splice(t--, 1), vt(e, o));
	  }function dt(e) {
	    throw new Error("A " + e + " type is already registered");
	  }function vt(e, t) {
	    var n,
	        r = ot(e);-1 < r && (tt(e, b[r]), r = 0, t === s && !e[s] ? (e[o] = !1, e[s] = !0, r = 1, B && S.call(F, e) < 0 && F.push(e)) : t === o && !e[o] && (e[s] = !1, e[o] = !0, r = 1), r && (n = e[t + "Callback"]) && n.call(e));
	  }if (r in t) return;var i = "__" + r + (Math.random() * 1e5 >> 0),
	      s = "attached",
	      o = "detached",
	      u = "extends",
	      a = "ADDITION",
	      f = "MODIFICATION",
	      l = "REMOVAL",
	      c = "DOMAttrModified",
	      h = "DOMContentLoaded",
	      p = "DOMSubtreeModified",
	      d = "<",
	      v = "=",
	      m = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
	      g = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
	      y = [],
	      b = [],
	      w = "",
	      E = t.documentElement,
	      S = y.indexOf || function (e) {
	    for (var t = this.length; t-- && this[t] !== e;);return t;
	  },
	      x = n.prototype,
	      T = x.hasOwnProperty,
	      N = x.isPrototypeOf,
	      C = n.defineProperty,
	      k = n.getOwnPropertyDescriptor,
	      L = n.getOwnPropertyNames,
	      A = n.getPrototypeOf,
	      O = n.setPrototypeOf,
	      M = !!n.__proto__,
	      _ = n.create || function mt(e) {
	    return e ? (mt.prototype = e, new mt()) : this;
	  },
	      D = O || (M ? function (e, t) {
	    return e.__proto__ = t, e;
	  } : L && k ? (function () {
	    function e(e, t) {
	      for (var n, r = L(t), i = 0, s = r.length; i < s; i++) n = r[i], T.call(e, n) || C(e, n, k(t, n));
	    }return function (t, n) {
	      do e(t, n); while ((n = A(n)) && !N.call(n, t));return t;
	    };
	  })() : function (e, t) {
	    for (var n in t) e[n] = t[n];return e;
	  }),
	      P = e.MutationObserver || e.WebKitMutationObserver,
	      H = (e.HTMLElement || e.Element || e.Node).prototype,
	      B = !N.call(H, E),
	      j = B ? function (e) {
	    return e.nodeType === 1;
	  } : function (e) {
	    return N.call(H, e);
	  },
	      F = B && [],
	      I = H.cloneNode,
	      q = H.setAttribute,
	      R = H.removeAttribute,
	      U = t.createElement,
	      z = P && { attributes: !0, characterData: !0, attributeOldValue: !0 },
	      W = P || function (e) {
	    J = !1, E.removeEventListener(c, W);
	  },
	      X,
	      V = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
	    setTimeout(e, 10);
	  },
	      $ = !1,
	      J = !0,
	      K = !0,
	      Q = !0,
	      G,
	      Y,
	      Z,
	      et,
	      tt,
	      nt;O || M ? (tt = function (e, t) {
	    N.call(t, e) || ht(e, t);
	  }, nt = ht) : (tt = function (e, t) {
	    e[i] || (e[i] = n(!0), ht(e, t));
	  }, nt = tt), B ? (J = !1, (function () {
	    var e = k(H, "addEventListener"),
	        t = e.value,
	        n = function n(e) {
	      var t = new CustomEvent(c, { bubbles: !0 });t.attrName = e, t.prevValue = this.getAttribute(e), t.newValue = null, t[l] = t.attrChange = 2, R.call(this, e), this.dispatchEvent(t);
	    },
	        r = function r(e, t) {
	      var n = this.hasAttribute(e),
	          r = n && this.getAttribute(e),
	          i = new CustomEvent(c, { bubbles: !0 });q.call(this, e, t), i.attrName = e, i.prevValue = n ? r : null, i.newValue = t, n ? i[f] = i.attrChange = 1 : i[a] = i.attrChange = 0, this.dispatchEvent(i);
	    },
	        s = function s(e) {
	      var t = e.currentTarget,
	          n = t[i],
	          r = e.propertyName,
	          s;n.hasOwnProperty(r) && (n = n[r], s = new CustomEvent(c, { bubbles: !0 }), s.attrName = n.name, s.prevValue = n.value || null, s.newValue = n.value = t[r] || null, s.prevValue == null ? s[a] = s.attrChange = 0 : s[f] = s.attrChange = 1, t.dispatchEvent(s));
	    };e.value = function (e, o, u) {
	      e === c && this.attributeChangedCallback && this.setAttribute !== r && (this[i] = { className: { name: "class", value: this.className } }, this.setAttribute = r, this.removeAttribute = n, t.call(this, "propertychange", s)), t.call(this, e, o, u);
	    }, C(H, "addEventListener", e);
	  })()) : P || (E.addEventListener(c, W), E.setAttribute(i, 1), E.removeAttribute(i), J && (G = function (e) {
	    var t = this,
	        n,
	        r,
	        s;if (t === e.target) {
	      n = t[i], t[i] = r = Z(t);for (s in r) {
	        if (!(s in n)) return Y(0, t, s, n[s], r[s], a);if (r[s] !== n[s]) return Y(1, t, s, n[s], r[s], f);
	      }for (s in n) if (!(s in r)) return Y(2, t, s, n[s], r[s], l);
	    }
	  }, Y = function (e, t, n, r, i, s) {
	    var o = { attrChange: e, currentTarget: t, attrName: n, prevValue: r, newValue: i };o[s] = e, at(o);
	  }, Z = function (e) {
	    for (var t, n, r = {}, i = e.attributes, s = 0, o = i.length; s < o; s++) t = i[s], n = t.name, n !== "setAttribute" && (r[n] = t.value);return r;
	  })), t[r] = function (n, r) {
	    c = n.toUpperCase(), $ || ($ = !0, P ? (et = (function (e, t) {
	      function n(e, t) {
	        for (var n = 0, r = e.length; n < r; t(e[n++]));
	      }return new P(function (r) {
	        for (var i, s, o, u = 0, a = r.length; u < a; u++) i = r[u], i.type === "childList" ? (n(i.addedNodes, e), n(i.removedNodes, t)) : (s = i.target, Q && s.attributeChangedCallback && i.attributeName !== "style" && (o = s.getAttribute(i.attributeName), o !== i.oldValue && s.attributeChangedCallback(i.attributeName, i.oldValue, o)));
	      });
	    })(st(s), st(o)), et.observe(t, { childList: !0, subtree: !0 })) : (X = [], V(function E() {
	      while (X.length) X.shift().call(null, X.shift());V(E);
	    }), t.addEventListener("DOMNodeInserted", ft(s)), t.addEventListener("DOMNodeRemoved", ft(o))), t.addEventListener(h, lt), t.addEventListener("readystatechange", lt), t.createElement = function (e, n) {
	      var r = U.apply(t, arguments),
	          i = "" + e,
	          s = S.call(y, (n ? v : d) + (n || i).toUpperCase()),
	          o = -1 < s;return n && (r.setAttribute("is", n = n.toLowerCase()), o && (o = ut(i.toUpperCase(), n))), Q = !t.createElement.innerHTMLHelper, o && nt(r, b[s]), r;
	    }, H.cloneNode = function (e) {
	      var t = I.call(this, !!e),
	          n = ot(t);return -1 < n && nt(t, b[n]), e && it(t.querySelectorAll(w)), t;
	    }), -2 < S.call(y, v + c) + S.call(y, d + c) && dt(n);if (!m.test(c) || -1 < S.call(g, c)) throw new Error("The type " + n + " is invalid");var i = function i() {
	      return f ? t.createElement(l, c) : t.createElement(l);
	    },
	        a = r || x,
	        f = T.call(a, u),
	        l = f ? r[u].toUpperCase() : c,
	        c,
	        p;return f && -1 < S.call(y, d + l) && dt(l), p = y.push((f ? v : d) + c) - 1, w = w.concat(w.length ? "," : "", f ? l + '[is="' + n.toLowerCase() + '"]' : l), i.prototype = b[p] = T.call(a, "prototype") ? a.prototype : _(H), rt(t.querySelectorAll(w), s), i;
	  };
	})(window, document, Object, "registerElement");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	/*! picturefill - v3.0.2 - 2016-02-12
	 * https://scottjehl.github.io/picturefill/
	 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
	 */
	/*! Gecko-Picture - v1.0
	 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
	 * Firefox's early picture implementation (prior to FF41) is static and does
	 * not react to viewport changes. This tiny module fixes this.
	 */
	(function (window) {
		/*jshint eqnull:true */
		var ua = navigator.userAgent;
	
		if (window.HTMLPictureElement && /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) {
			addEventListener("resize", (function () {
				var timer;
	
				var dummySrc = document.createElement("source");
	
				var fixRespimg = function fixRespimg(img) {
					var source, sizes;
					var picture = img.parentNode;
	
					if (picture.nodeName.toUpperCase() === "PICTURE") {
						source = dummySrc.cloneNode();
	
						picture.insertBefore(source, picture.firstElementChild);
						setTimeout(function () {
							picture.removeChild(source);
						});
					} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
						img._pfLastSize = img.offsetWidth;
						sizes = img.sizes;
						img.sizes += ",100vw";
						setTimeout(function () {
							img.sizes = sizes;
						});
					}
				};
	
				var findPictureImgs = function findPictureImgs() {
					var i;
					var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
					for (i = 0; i < imgs.length; i++) {
						fixRespimg(imgs[i]);
					}
				};
				var onResize = function onResize() {
					clearTimeout(timer);
					timer = setTimeout(findPictureImgs, 99);
				};
				var mq = window.matchMedia && matchMedia("(orientation: landscape)");
				var init = function init() {
					onResize();
	
					if (mq && mq.addListener) {
						mq.addListener(onResize);
					}
				};
	
				dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	
				if (/^[c|i]|d$/.test(document.readyState || "")) {
					init();
				} else {
					document.addEventListener("DOMContentLoaded", init);
				}
	
				return onResize;
			})());
		}
	})(window);
	
	/*! Picturefill - v3.0.2
	 * http://scottjehl.github.io/picturefill
	 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
	 *  License: MIT
	 */
	
	(function (window, document, undefined) {
		// Enable strict mode
		"use strict"
	
		// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
		;
		document.createElement("picture");
	
		var warn, eminpx, alwaysCheckWDescriptor, evalId;
		// local object for method references and testing exposure
		var pf = {};
		var isSupportTestReady = false;
		var noop = function noop() {};
		var image = document.createElement("img");
		var getImgAttr = image.getAttribute;
		var setImgAttr = image.setAttribute;
		var removeImgAttr = image.removeAttribute;
		var docElem = document.documentElement;
		var types = {};
		var cfg = {
			//resource selection:
			algorithm: ""
		};
		var srcAttr = "data-pfsrc";
		var srcsetAttr = srcAttr + "set";
		// ua sniffing is done for undetectable img loading features,
		// to do some non crucial perf optimizations
		var ua = navigator.userAgent;
		var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35;
		var curSrcProp = "currentSrc";
		var regWDesc = /\s+\+?\d+(e\d+)?w/;
		var regSize = /(\([^)]+\))?\s*(.+)/;
		var setOptions = window.picturefillCFG;
		/**
	  * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	  */
		// baseStyle also used by getEmValue (i.e.: width: 1em is important)
		var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
		var fsCss = "font-size:100%!important;";
		var isVwDirty = true;
	
		var cssCache = {};
		var sizeLengthCache = {};
		var DPR = window.devicePixelRatio;
		var units = {
			px: 1,
			"in": 96
		};
		var anchor = document.createElement("a");
		/**
	  * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	  * @type {boolean}
	  */
		var alreadyRun = false;
	
		// Reusable, non-"g" Regexes
	
		// (Don't use \s, to avoid matching non-breaking space.)
		var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
		    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
		    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
		    regexTrailingCommas = /[,]+$/,
		    regexNonNegativeInteger = /^\d+$/,
		   
	
		// ( Positive or negative or unsigned integers or decimals, without or without exponents.
		// Must include at least one digit.
		// According to spec tests any decimal point must be followed by a digit.
		// No leading plus sign is allowed.)
		// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
		regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
	
		var on = function on(obj, evt, fn, capture) {
			if (obj.addEventListener) {
				obj.addEventListener(evt, fn, capture || false);
			} else if (obj.attachEvent) {
				obj.attachEvent("on" + evt, fn);
			}
		};
	
		/**
	  * simple memoize function:
	  */
	
		var memoize = function memoize(fn) {
			var cache = {};
			return function (input) {
				if (!(input in cache)) {
					cache[input] = fn(input);
				}
				return cache[input];
			};
		};
	
		// UTILITY FUNCTIONS
	
		// Manual is faster than RegEx
		// http://jsperf.com/whitespace-character/5
		function isSpace(c) {
			return c === " " || // space
			c === "\t" || // horizontal tab
			c === "\n" || // new line
			c === "\f" || // form feed
			c === "\r"; // carriage return
		}
	
		/**
	  * gets a mediaquery and returns a boolean or gets a css length and returns a number
	  * @param css mediaqueries or css length
	  * @returns {boolean|number}
	  *
	  * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	  */
		var evalCSS = (function () {
	
			var regLength = /^([\d\.]+)(em|vw|px)$/;
			var replace = function replace() {
				var args = arguments,
				    index = 0,
				    string = args[0];
				while (++index in args) {
					string = string.replace(args[index], args[++index]);
				}
				return string;
			};
	
			var buildStr = memoize(function (css) {
	
				return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",
	
				// interpret `,`
				/,/g, "||",
	
				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",
	
				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",
	
				//calc value
				/calc([^)]+)/g, "($1)",
	
				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
			});
	
			return function (css, length) {
				var parsedLength;
				if (!(css in cssCache)) {
					cssCache[css] = false;
					if (length && (parsedLength = css.match(regLength))) {
						cssCache[css] = parsedLength[1] * units[parsedLength[2]];
					} else {
						/*jshint evil:true */
						try {
							cssCache[css] = new Function("e", buildStr(css))(units);
						} catch (e) {}
						/*jshint evil:false */
					}
				}
				return cssCache[css];
			};
		})();
	
		var setResolution = function setResolution(candidate, sizesattr) {
			if (candidate.w) {
				// h = means height: || descriptor.type === 'h' do not handle yet...
				candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
				candidate.res = candidate.w / candidate.cWidth;
			} else {
				candidate.res = candidate.d;
			}
			return candidate;
		};
	
		/**
	  *
	  * @param opt
	  */
		var picturefill = function picturefill(opt) {
	
			if (!isSupportTestReady) {
				return;
			}
	
			var elements, i, plen;
	
			var options = opt || {};
	
			if (options.elements && options.elements.nodeType === 1) {
				if (options.elements.nodeName.toUpperCase() === "IMG") {
					options.elements = [options.elements];
				} else {
					options.context = options.elements;
					options.elements = null;
				}
			}
	
			elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);
	
			if (plen = elements.length) {
	
				pf.setupRun(options);
				alreadyRun = true;
	
				// Loop through all elements
				for (i = 0; i < plen; i++) {
					pf.fillImg(elements[i], options);
				}
	
				pf.teardownRun(options);
			}
		};
	
		/**
	  * outputs a warning for the developer
	  * @param {message}
	  * @type {Function}
	  */
		warn = window.console && console.warn ? function (message) {
			console.warn(message);
		} : noop;
	
		if (!(curSrcProp in image)) {
			curSrcProp = "src";
		}
	
		// Add support for standard mime types.
		types["image/jpeg"] = true;
		types["image/gif"] = true;
		types["image/png"] = true;
	
		function detectTypeSupport(type, typeUri) {
			// based on Modernizr's lossless img-webp test
			// note: asynchronous
			var image = new window.Image();
			image.onerror = function () {
				types[type] = false;
				picturefill();
			};
			image.onload = function () {
				types[type] = image.width === 1;
				picturefill();
			};
			image.src = typeUri;
			return "pending";
		}
	
		// test svg support
		types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
	
		/**
	  * updates the internal vW property with the current viewport width in px
	  */
		function updateMetrics() {
	
			isVwDirty = false;
			DPR = window.devicePixelRatio;
			cssCache = {};
			sizeLengthCache = {};
	
			pf.DPR = DPR || 1;
	
			units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
			units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);
	
			units.vw = units.width / 100;
			units.vh = units.height / 100;
	
			evalId = [units.height, units.width, DPR].join("-");
	
			units.em = pf.getEmValue();
			units.rem = units.em;
		}
	
		function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
			var bonusFactor, tooMuch, bonus, meanDensity;
	
			//experimental
			if (cfg.algorithm === "saveData") {
				if (lowerValue > 2.7) {
					meanDensity = dprValue + 1;
				} else {
					tooMuch = higherValue - dprValue;
					bonusFactor = Math.pow(lowerValue - 0.6, 1.5);
	
					bonus = tooMuch * bonusFactor;
	
					if (isCached) {
						bonus += 0.1 * bonusFactor;
					}
	
					meanDensity = lowerValue + bonus;
				}
			} else {
				meanDensity = dprValue > 1 ? Math.sqrt(lowerValue * higherValue) : lowerValue;
			}
	
			return meanDensity > dprValue;
		}
	
		function applyBestCandidate(img) {
			var srcSetCandidates;
			var matchingSet = pf.getSet(img);
			var evaluated = false;
			if (matchingSet !== "pending") {
				evaluated = evalId;
				if (matchingSet) {
					srcSetCandidates = pf.setRes(matchingSet);
					pf.applySetCandidate(srcSetCandidates, img);
				}
			}
			img[pf.ns].evaled = evaluated;
		}
	
		function ascendingSort(a, b) {
			return a.res - b.res;
		}
	
		function setSrcToCur(img, src, set) {
			var candidate;
			if (!set && src) {
				set = img[pf.ns].sets;
				set = set && set[set.length - 1];
			}
	
			candidate = getCandidateForSrc(src, set);
	
			if (candidate) {
				src = pf.makeUrl(src);
				img[pf.ns].curSrc = src;
				img[pf.ns].curCan = candidate;
	
				if (!candidate.res) {
					setResolution(candidate, candidate.set.sizes);
				}
			}
			return candidate;
		}
	
		function getCandidateForSrc(src, set) {
			var i, candidate, candidates;
			if (src && set) {
				candidates = pf.parseSet(set);
				src = pf.makeUrl(src);
				for (i = 0; i < candidates.length; i++) {
					if (src === pf.makeUrl(candidates[i].url)) {
						candidate = candidates[i];
						break;
					}
				}
			}
			return candidate;
		}
	
		function getAllSourceElements(picture, candidates) {
			var i, len, source, srcset;
	
			// SPEC mismatch intended for size and perf:
			// actually only source elements preceding the img should be used
			// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
			var sources = picture.getElementsByTagName("source");
	
			for (i = 0, len = sources.length; i < len; i++) {
				source = sources[i];
				source[pf.ns] = true;
				srcset = source.getAttribute("srcset");
	
				// if source does not have a srcset attribute, skip
				if (srcset) {
					candidates.push({
						srcset: srcset,
						media: source.getAttribute("media"),
						type: source.getAttribute("type"),
						sizes: source.getAttribute("sizes")
					});
				}
			}
		}
	
		/**
	  * Srcset Parser
	  * By Alex Bell |  MIT License
	  *
	  * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	  *
	  * Based super duper closely on the reference algorithm at:
	  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	  */
	
		// 1. Let input be the value passed to this algorithm.
		// (TO-DO : Explain what "set" argument is here. Maybe choose a more
		// descriptive & more searchable name.  Since passing the "set" in really has
		// nothing to do with parsing proper, I would prefer this assignment eventually
		// go in an external fn.)
		function parseSrcset(input, set) {
	
			function collectCharacters(regEx) {
				var chars,
				    match = regEx.exec(input.substring(pos));
				if (match) {
					chars = match[0];
					pos += chars.length;
					return chars;
				}
			}
	
			var inputLength = input.length,
			    url,
			    descriptors,
			    currentDescriptor,
			    state,
			    c,
			   
	
			// 2. Let position be a pointer into input, initially pointing at the start
			//    of the string.
			pos = 0,
			   
	
			// 3. Let candidates be an initially empty source set.
			candidates = [];
	
			/**
	  * Adds descriptor properties to a candidate, pushes to the candidates array
	  * @return undefined
	  */
			// (Declared outside of the while loop so that it's only created once.
			// (This fn is defined before it is used, in order to pass JSHINT.
			// Unfortunately this breaks the sequencing of the spec comments. :/ )
			function parseDescriptors() {
	
				// 9. Descriptor parser: Let error be no.
				var pError = false,
				   
	
				// 10. Let width be absent.
				// 11. Let density be absent.
				// 12. Let future-compat-h be absent. (We're implementing it now as h)
				w,
				    d,
				    h,
				    i,
				    candidate = {},
				    desc,
				    lastChar,
				    value,
				    intVal,
				    floatVal;
	
				// 13. For each descriptor in descriptors, run the appropriate set of steps
				// from the following list:
				for (i = 0; i < descriptors.length; i++) {
					desc = descriptors[i];
	
					lastChar = desc[desc.length - 1];
					value = desc.substring(0, desc.length - 1);
					intVal = parseInt(value, 10);
					floatVal = parseFloat(value);
	
					// If the descriptor consists of a valid non-negative integer followed by
					// a U+0077 LATIN SMALL LETTER W character
					if (regexNonNegativeInteger.test(value) && lastChar === "w") {
	
						// If width and density are not both absent, then let error be yes.
						if (w || d) {
							pError = true;
						}
	
						// Apply the rules for parsing non-negative integers to the descriptor.
						// If the result is zero, let error be yes.
						// Otherwise, let width be the result.
						if (intVal === 0) {
							pError = true;
						} else {
							w = intVal;
						}
	
						// If the descriptor consists of a valid floating-point number followed by
						// a U+0078 LATIN SMALL LETTER X character
					} else if (regexFloatingPoint.test(value) && lastChar === "x") {
	
							// If width, density and future-compat-h are not all absent, then let error
							// be yes.
							if (w || d || h) {
								pError = true;
							}
	
							// Apply the rules for parsing floating-point number values to the descriptor.
							// If the result is less than zero, let error be yes. Otherwise, let density
							// be the result.
							if (floatVal < 0) {
								pError = true;
							} else {
								d = floatVal;
							}
	
							// If the descriptor consists of a valid non-negative integer followed by
							// a U+0068 LATIN SMALL LETTER H character
						} else if (regexNonNegativeInteger.test(value) && lastChar === "h") {
	
								// If height and density are not both absent, then let error be yes.
								if (h || d) {
									pError = true;
								}
	
								// Apply the rules for parsing non-negative integers to the descriptor.
								// If the result is zero, let error be yes. Otherwise, let future-compat-h
								// be the result.
								if (intVal === 0) {
									pError = true;
								} else {
									h = intVal;
								}
	
								// Anything else, Let error be yes.
							} else {
									pError = true;
								}
				} // (close step 13 for loop)
	
				// 15. If error is still no, then append a new image source to candidates whose
				// URL is url, associated with a width width if not absent and a pixel
				// density density if not absent. Otherwise, there is a parse error.
				if (!pError) {
					candidate.url = url;
	
					if (w) {
						candidate.w = w;
					}
					if (d) {
						candidate.d = d;
					}
					if (h) {
						candidate.h = h;
					}
					if (!h && !d && !w) {
						candidate.d = 1;
					}
					if (candidate.d === 1) {
						set.has1x = true;
					}
					candidate.set = set;
	
					candidates.push(candidate);
				}
			} // (close parseDescriptors fn)
	
			/**
	  * Tokenizes descriptor properties prior to parsing
	  * Returns undefined.
	  * (Again, this fn is defined before it is used, in order to pass JSHINT.
	  * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
	  */
			function tokenize() {
	
				// 8.1. Descriptor tokeniser: Skip whitespace
				collectCharacters(regexLeadingSpaces);
	
				// 8.2. Let current descriptor be the empty string.
				currentDescriptor = "";
	
				// 8.3. Let state be in descriptor.
				state = "in descriptor";
	
				while (true) {
	
					// 8.4. Let c be the character at position.
					c = input.charAt(pos);
	
					//  Do the following depending on the value of state.
					//  For the purpose of this step, "EOF" is a special character representing
					//  that position is past the end of input.
	
					// In descriptor
					if (state === "in descriptor") {
						// Do the following, depending on the value of c:
	
						// Space character
						// If current descriptor is not empty, append current descriptor to
						// descriptors and let current descriptor be the empty string.
						// Set state to after descriptor.
						if (isSpace(c)) {
							if (currentDescriptor) {
								descriptors.push(currentDescriptor);
								currentDescriptor = "";
								state = "after descriptor";
							}
	
							// U+002C COMMA (,)
							// Advance position to the next character in input. If current descriptor
							// is not empty, append current descriptor to descriptors. Jump to the step
							// labeled descriptor parser.
						} else if (c === ",") {
								pos += 1;
								if (currentDescriptor) {
									descriptors.push(currentDescriptor);
								}
								parseDescriptors();
								return;
	
								// U+0028 LEFT PARENTHESIS (()
								// Append c to current descriptor. Set state to in parens.
							} else if (c === "(") {
									currentDescriptor = currentDescriptor + c;
									state = "in parens";
	
									// EOF
									// If current descriptor is not empty, append current descriptor to
									// descriptors. Jump to the step labeled descriptor parser.
								} else if (c === "") {
										if (currentDescriptor) {
											descriptors.push(currentDescriptor);
										}
										parseDescriptors();
										return;
	
										// Anything else
										// Append c to current descriptor.
									} else {
											currentDescriptor = currentDescriptor + c;
										}
						// (end "in descriptor"
	
						// In parens
					} else if (state === "in parens") {
	
							// U+0029 RIGHT PARENTHESIS ())
							// Append c to current descriptor. Set state to in descriptor.
							if (c === ")") {
								currentDescriptor = currentDescriptor + c;
								state = "in descriptor";
	
								// EOF
								// Append current descriptor to descriptors. Jump to the step labeled
								// descriptor parser.
							} else if (c === "") {
									descriptors.push(currentDescriptor);
									parseDescriptors();
									return;
	
									// Anything else
									// Append c to current descriptor.
								} else {
										currentDescriptor = currentDescriptor + c;
									}
	
							// After descriptor
						} else if (state === "after descriptor") {
	
								// Do the following, depending on the value of c:
								// Space character: Stay in this state.
								if (isSpace(c)) {
	
									// EOF: Jump to the step labeled descriptor parser.
								} else if (c === "") {
										parseDescriptors();
										return;
	
										// Anything else
										// Set state to in descriptor. Set position to the previous character in input.
									} else {
											state = "in descriptor";
											pos -= 1;
										}
							}
	
					// Advance position to the next character in input.
					pos += 1;
	
					// Repeat this step.
				} // (close while true loop)
			}
	
			// 4. Splitting loop: Collect a sequence of characters that are space
			//    characters or U+002C COMMA characters. If any U+002C COMMA characters
			//    were collected, that is a parse error.
			while (true) {
				collectCharacters(regexLeadingCommasOrSpaces);
	
				// 5. If position is past the end of input, return candidates and abort these steps.
				if (pos >= inputLength) {
					return candidates; // (we're done, this is the sole return path)
				}
	
				// 6. Collect a sequence of characters that are not space characters,
				//    and let that be url.
				url = collectCharacters(regexLeadingNotSpaces);
	
				// 7. Let descriptors be a new empty list.
				descriptors = [];
	
				// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
				//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
				//         more than one character, that is a parse error.
				if (url.slice(-1) === ",") {
					url = url.replace(regexTrailingCommas, "");
					// (Jump ahead to step 9 to skip tokenization and just push the candidate).
					parseDescriptors();
	
					//	Otherwise, follow these substeps:
				} else {
						tokenize();
					} // (close else of step 8)
	
				// 16. Return to the step labeled splitting loop.
			} // (Close of big while loop.)
		}
	
		/*
	  * Sizes Parser
	  *
	  * By Alex Bell |  MIT License
	  *
	  * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	  *
	  * Reference algorithm at:
	  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	  *
	  * Most comments are copied in directly from the spec
	  * (except for comments in parens).
	  *
	  * Grammar is:
	  * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	  * <source-size> = <media-condition> <source-size-value>
	  * <source-size-value> = <length>
	  * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	  *
	  * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	  * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	  *
	  * Returns the first valid <css-length> with a media condition that evaluates to true,
	  * or "100vw" if all valid media conditions evaluate to false.
	  *
	  */
	
		function parseSizes(strValue) {
	
			// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
			// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
			// CSS allows a single optional plus or minus sign:
			// http://www.w3.org/TR/CSS2/syndata.html#numbers
			// CSS is ASCII case-insensitive:
			// http://www.w3.org/TR/CSS2/syndata.html#characters )
			// Spec allows exponential notation for <number> type:
			// http://dev.w3.org/csswg/css-values/#numbers
			var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;
	
			// (This is a quick and lenient test. Because of optional unlimited-depth internal
			// grouping parens and strict spacing rules, this could get very complicated.)
			var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
	
			var i;
			var unparsedSizesList;
			var unparsedSizesListLength;
			var unparsedSize;
			var lastComponentValue;
			var size;
	
			// UTILITY FUNCTIONS
	
			//  (Toy CSS parser. The goals here are:
			//  1) expansive test coverage without the weight of a full CSS parser.
			//  2) Avoiding regex wherever convenient.
			//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
			//  Returns an array of arrays.)
			function parseComponentValues(str) {
				var chrctr;
				var component = "";
				var componentArray = [];
				var listArray = [];
				var parenDepth = 0;
				var pos = 0;
				var inComment = false;
	
				function pushComponent() {
					if (component) {
						componentArray.push(component);
						component = "";
					}
				}
	
				function pushComponentArray() {
					if (componentArray[0]) {
						listArray.push(componentArray);
						componentArray = [];
					}
				}
	
				// (Loop forwards from the beginning of the string.)
				while (true) {
					chrctr = str.charAt(pos);
	
					if (chrctr === "") {
						// ( End of string reached.)
						pushComponent();
						pushComponentArray();
						return listArray;
					} else if (inComment) {
						if (chrctr === "*" && str[pos + 1] === "/") {
							// (At end of a comment.)
							inComment = false;
							pos += 2;
							pushComponent();
							continue;
						} else {
							pos += 1; // (Skip all characters inside comments.)
							continue;
						}
					} else if (isSpace(chrctr)) {
						// (If previous character in loop was also a space, or if
						// at the beginning of the string, do not add space char to
						// component.)
						if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
							pos += 1;
							continue;
						} else if (parenDepth === 0) {
							pushComponent();
							pos += 1;
							continue;
						} else {
							// (Replace any space character with a plain space for legibility.)
							chrctr = " ";
						}
					} else if (chrctr === "(") {
						parenDepth += 1;
					} else if (chrctr === ")") {
						parenDepth -= 1;
					} else if (chrctr === ",") {
						pushComponent();
						pushComponentArray();
						pos += 1;
						continue;
					} else if (chrctr === "/" && str.charAt(pos + 1) === "*") {
						inComment = true;
						pos += 2;
						continue;
					}
	
					component = component + chrctr;
					pos += 1;
				}
			}
	
			function isValidNonNegativeSourceSizeValue(s) {
				if (regexCssLengthWithUnits.test(s) && parseFloat(s) >= 0) {
					return true;
				}
				if (regexCssCalc.test(s)) {
					return true;
				}
				// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
				// "-0 is equivalent to 0 and is not a negative number." which means that
				// unitless zero and unitless negative zero must be accepted as special cases.)
				if (s === "0" || s === "-0" || s === "+0") {
					return true;
				}
				return false;
			}
	
			// When asked to parse a sizes attribute from an element, parse a
			// comma-separated list of component values from the value of the element's
			// sizes attribute (or the empty string, if the attribute is absent), and let
			// unparsed sizes list be the result.
			// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values
	
			unparsedSizesList = parseComponentValues(strValue);
			unparsedSizesListLength = unparsedSizesList.length;
	
			// For each unparsed size in unparsed sizes list:
			for (i = 0; i < unparsedSizesListLength; i++) {
				unparsedSize = unparsedSizesList[i];
	
				// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
				// ( parseComponentValues() already omits spaces outside of parens. )
	
				// If unparsed size is now empty, that is a parse error; continue to the next
				// iteration of this algorithm.
				// ( parseComponentValues() won't push an empty array. )
	
				// 2. If the last component value in unparsed size is a valid non-negative
				// <source-size-value>, let size be its value and remove the component value
				// from unparsed size. Any CSS function other than the calc() function is
				// invalid. Otherwise, there is a parse error; continue to the next iteration
				// of this algorithm.
				// http://dev.w3.org/csswg/css-syntax/#parse-component-value
				lastComponentValue = unparsedSize[unparsedSize.length - 1];
	
				if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
					size = lastComponentValue;
					unparsedSize.pop();
				} else {
					continue;
				}
	
				// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
				// size. If unparsed size is now empty, return size and exit this algorithm.
				// If this was not the last item in unparsed sizes list, that is a parse error.
				if (unparsedSize.length === 0) {
					return size;
				}
	
				// 4. Parse the remaining component values in unparsed size as a
				// <media-condition>. If it does not parse correctly, or it does parse
				// correctly but the <media-condition> evaluates to false, continue to the
				// next iteration of this algorithm.
				// (Parsing all possible compound media conditions in JS is heavy, complicated,
				// and the payoff is unclear. Is there ever an situation where the
				// media condition parses incorrectly but still somehow evaluates to true?
				// Can we just rely on the browser/polyfill to do it?)
				unparsedSize = unparsedSize.join(" ");
				if (!pf.matchesMedia(unparsedSize)) {
					continue;
				}
	
				// 5. Return size and exit this algorithm.
				return size;
			}
	
			// If the above algorithm exhausts unparsed sizes list without returning a
			// size value, return 100vw.
			return "100vw";
		}
	
		// namespace
		pf.ns = ("pf" + new Date().getTime()).substr(0, 9);
	
		// srcset support test
		pf.supSrcset = "srcset" in image;
		pf.supSizes = "sizes" in image;
		pf.supPicture = !!window.HTMLPictureElement;
	
		// UC browser does claim to support srcset and picture, but not sizes,
		// this extended test reveals the browser does support nothing
		if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
			(function (image2) {
				image.srcset = "data:,a";
				image2.src = "data:,a";
				pf.supSrcset = image.complete === image2.complete;
				pf.supPicture = pf.supSrcset && pf.supPicture;
			})(document.createElement("img"));
		}
	
		// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
		if (pf.supSrcset && !pf.supSizes) {
	
			(function () {
				var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
				var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
				var img = document.createElement("img");
				var test = function test() {
					var width = img.width;
	
					if (width === 2) {
						pf.supSizes = true;
					}
	
					alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;
	
					isSupportTestReady = true;
					// force async
					setTimeout(picturefill);
				};
	
				img.onload = test;
				img.onerror = test;
				img.setAttribute("sizes", "9px");
	
				img.srcset = width1 + " 1w," + width2 + " 9w";
				img.src = width1;
			})();
		} else {
			isSupportTestReady = true;
		}
	
		// using pf.qsa instead of dom traversing does scale much better,
		// especially on sites mixing responsive and non-responsive images
		pf.selShort = "picture>img,img[srcset]";
		pf.sel = pf.selShort;
		pf.cfg = cfg;
	
		/**
	  * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	  */
		pf.DPR = DPR || 1;
		pf.u = units;
	
		// container of supported mime types that one might need to qualify before using
		pf.types = types;
	
		pf.setSize = noop;
	
		/**
	  * Gets a string and returns the absolute URL
	  * @param src
	  * @returns {String} absolute URL
	  */
	
		pf.makeUrl = memoize(function (src) {
			anchor.href = src;
			return anchor.href;
		});
	
		/**
	  * Gets a DOM element or document and a selctor and returns the found matches
	  * Can be extended with jQuery/Sizzle for IE7 support
	  * @param context
	  * @param sel
	  * @returns {NodeList|Array}
	  */
		pf.qsa = function (context, sel) {
			return "querySelector" in context ? context.querySelectorAll(sel) : [];
		};
	
		/**
	  * Shortcut method for matchMedia ( for easy overriding in tests )
	  * wether native or pf.mMQ is used will be decided lazy on first call
	  * @returns {boolean}
	  */
		pf.matchesMedia = function () {
			if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
				pf.matchesMedia = function (media) {
					return !media || matchMedia(media).matches;
				};
			} else {
				pf.matchesMedia = pf.mMQ;
			}
	
			return pf.matchesMedia.apply(this, arguments);
		};
	
		/**
	  * A simplified matchMedia implementation for IE8 and IE9
	  * handles only min-width/max-width with px or em values
	  * @param media
	  * @returns {boolean}
	  */
		pf.mMQ = function (media) {
			return media ? evalCSS(media) : true;
		};
	
		/**
	  * Returns the calculated length in css pixel from the given sourceSizeValue
	  * http://dev.w3.org/csswg/css-values-3/#length-value
	  * intended Spec mismatches:
	  * * Does not check for invalid use of CSS functions
	  * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	  * @param sourceSizeValue
	  * @returns {Number}
	  */
		pf.calcLength = function (sourceSizeValue) {
	
			var value = evalCSS(sourceSizeValue, true) || false;
			if (value < 0) {
				value = false;
			}
	
			return value;
		};
	
		/**
	  * Takes a type string and checks if its supported
	  */
	
		pf.supportsType = function (type) {
			return type ? types[type] : true;
		};
	
		/**
	  * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	  * @param sourceSizeStr
	  * @returns {*}
	  */
		pf.parseSize = memoize(function (sourceSizeStr) {
			var match = (sourceSizeStr || "").match(regSize);
			return {
				media: match && match[1],
				length: match && match[2]
			};
		});
	
		pf.parseSet = function (set) {
			if (!set.cands) {
				set.cands = parseSrcset(set.srcset, set);
			}
			return set.cands;
		};
	
		/**
	  * returns 1em in css px for html/body default size
	  * function taken from respondjs
	  * @returns {*|number}
	  */
		pf.getEmValue = function () {
			var body;
			if (!eminpx && (body = document.body)) {
				var div = document.createElement("div"),
				    originalHTMLCSS = docElem.style.cssText,
				    originalBodyCSS = body.style.cssText;
	
				div.style.cssText = baseStyle;
	
				// 1em in a media query is the value of the default font size of the browser
				// reset docElem and body to ensure the correct value is returned
				docElem.style.cssText = fsCss;
				body.style.cssText = fsCss;
	
				body.appendChild(div);
				eminpx = div.offsetWidth;
				body.removeChild(div);
	
				//also update eminpx before returning
				eminpx = parseFloat(eminpx, 10);
	
				// restore the original values
				docElem.style.cssText = originalHTMLCSS;
				body.style.cssText = originalBodyCSS;
			}
			return eminpx || 16;
		};
	
		/**
	  * Takes a string of sizes and returns the width in pixels as a number
	  */
		pf.calcListLength = function (sourceSizeListStr) {
			// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
			//
			//                           or (min-width:30em) calc(30% - 15px)
			if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
				var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));
	
				sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
			}
	
			return sizeLengthCache[sourceSizeListStr];
		};
	
		/**
	  * Takes a candidate object with a srcset property in the form of url/
	  * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	  *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	  *     "images/pic-small.png"
	  * Get an array of image candidates in the form of
	  *      {url: "/foo/bar.png", resolution: 1}
	  * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	  * If sizes is specified, res is calculated
	  */
		pf.setRes = function (set) {
			var candidates;
			if (set) {
	
				candidates = pf.parseSet(set);
	
				for (var i = 0, len = candidates.length; i < len; i++) {
					setResolution(candidates[i], set.sizes);
				}
			}
			return candidates;
		};
	
		pf.setRes.res = setResolution;
	
		pf.applySetCandidate = function (candidates, img) {
			if (!candidates.length) {
				return;
			}
			var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;
	
			var imageData = img[pf.ns];
			var dpr = pf.DPR;
	
			curSrc = imageData.curSrc || img[curSrcProp];
	
			curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);
	
			// if we have a current source, we might either become lazy or give this source some advantage
			if (curCan && curCan.set === candidates[0].set) {
	
				// if browser can abort image request and the image has a higher pixel density than needed
				// and this image isn't downloaded yet, we skip next part and try to save bandwidth
				abortCurSrc = supportAbort && !img.complete && curCan.res - 0.1 > dpr;
	
				if (!abortCurSrc) {
					curCan.cached = true;
	
					// if current candidate is "best", "better" or "okay",
					// set it to bestCandidate
					if (curCan.res >= dpr) {
						bestCandidate = curCan;
					}
				}
			}
	
			if (!bestCandidate) {
	
				candidates.sort(ascendingSort);
	
				length = candidates.length;
				bestCandidate = candidates[length - 1];
	
				for (i = 0; i < length; i++) {
					candidate = candidates[i];
					if (candidate.res >= dpr) {
						j = i - 1;
	
						// we have found the perfect candidate,
						// but let's improve this a little bit with some assumptions ;-)
						if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {
	
							bestCandidate = candidates[j];
						} else {
							bestCandidate = candidate;
						}
						break;
					}
				}
			}
	
			if (bestCandidate) {
	
				candidateSrc = pf.makeUrl(bestCandidate.url);
	
				imageData.curSrc = candidateSrc;
				imageData.curCan = bestCandidate;
	
				if (candidateSrc !== curSrc) {
					pf.setSrc(img, bestCandidate);
				}
				pf.setSize(img);
			}
		};
	
		pf.setSrc = function (img, bestCandidate) {
			var origWidth;
			img.src = bestCandidate.url;
	
			// although this is a specific Safari issue, we don't want to take too much different code paths
			if (bestCandidate.set.type === "image/svg+xml") {
				origWidth = img.style.width;
				img.style.width = img.offsetWidth + 1 + "px";
	
				// next line only should trigger a repaint
				// if... is only done to trick dead code removal
				if (img.offsetWidth + 1) {
					img.style.width = origWidth;
				}
			}
		};
	
		pf.getSet = function (img) {
			var i, set, supportsType;
			var match = false;
			var sets = img[pf.ns].sets;
	
			for (i = 0; i < sets.length && !match; i++) {
				set = sets[i];
	
				if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
					continue;
				}
	
				if (supportsType === "pending") {
					set = supportsType;
				}
	
				match = set;
				break;
			}
	
			return match;
		};
	
		pf.parseSets = function (element, parent, options) {
			var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;
	
			var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
			var imageData = element[pf.ns];
	
			if (imageData.src === undefined || options.src) {
				imageData.src = getImgAttr.call(element, "src");
				if (imageData.src) {
					setImgAttr.call(element, srcAttr, imageData.src);
				} else {
					removeImgAttr.call(element, srcAttr);
				}
			}
	
			if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
				srcsetAttribute = getImgAttr.call(element, "srcset");
				imageData.srcset = srcsetAttribute;
				srcsetParsed = true;
			}
	
			imageData.sets = [];
	
			if (hasPicture) {
				imageData.pic = true;
				getAllSourceElements(parent, imageData.sets);
			}
	
			if (imageData.srcset) {
				imageSet = {
					srcset: imageData.srcset,
					sizes: getImgAttr.call(element, "sizes")
				};
	
				imageData.sets.push(imageSet);
	
				isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");
	
				// add normal src as candidate, if source has no w descriptor
				if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
					imageSet.srcset += ", " + imageData.src;
					imageSet.cands.push({
						url: imageData.src,
						d: 1,
						set: imageSet
					});
				}
			} else if (imageData.src) {
				imageData.sets.push({
					srcset: imageData.src,
					sizes: null
				});
			}
	
			imageData.curCan = null;
			imageData.curSrc = undefined;
	
			// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
			// or has a w descriptor (and does not support sizes) set support to false to evaluate
			imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);
	
			if (srcsetParsed && pf.supSrcset && !imageData.supported) {
				if (srcsetAttribute) {
					setImgAttr.call(element, srcsetAttr, srcsetAttribute);
					element.srcset = "";
				} else {
					removeImgAttr.call(element, srcsetAttr);
				}
			}
	
			if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
				if (imageData.src === null) {
					element.removeAttribute("src");
				} else {
					element.src = imageData.src;
				}
			}
	
			imageData.parsed = true;
		};
	
		pf.fillImg = function (element, options) {
			var imageData;
			var extreme = options.reselect || options.reevaluate;
	
			// expando for caching data on the img
			if (!element[pf.ns]) {
				element[pf.ns] = {};
			}
	
			imageData = element[pf.ns];
	
			// if the element has already been evaluated, skip it
			// unless `options.reevaluate` is set to true ( this, for example,
			// is set to true when running `picturefill` on `resize` ).
			if (!extreme && imageData.evaled === evalId) {
				return;
			}
	
			if (!imageData.parsed || options.reevaluate) {
				pf.parseSets(element, element.parentNode, options);
			}
	
			if (!imageData.supported) {
				applyBestCandidate(element);
			} else {
				imageData.evaled = evalId;
			}
		};
	
		pf.setupRun = function () {
			if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
				updateMetrics();
			}
		};
	
		// If picture is supported, well, that's awesome.
		if (pf.supPicture) {
			picturefill = noop;
			pf.fillImg = noop;
		} else {
	
			// Set up picture polyfill by polling the document
			(function () {
				var isDomReady;
				var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;
	
				var run = function run() {
					var readyState = document.readyState || "";
	
					timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
					if (document.body) {
						pf.fillImgs();
						isDomReady = isDomReady || regReady.test(readyState);
						if (isDomReady) {
							clearTimeout(timerId);
						}
					}
				};
	
				var timerId = setTimeout(run, document.body ? 9 : 99);
	
				// Also attach picturefill on resize and readystatechange
				// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
				var debounce = function debounce(func, wait) {
					var timeout, timestamp;
					var later = function later() {
						var last = new Date() - timestamp;
	
						if (last < wait) {
							timeout = setTimeout(later, wait - last);
						} else {
							timeout = null;
							func();
						}
					};
	
					return function () {
						timestamp = new Date();
	
						if (!timeout) {
							timeout = setTimeout(later, wait);
						}
					};
				};
				var lastClientWidth = docElem.clientHeight;
				var onResize = function onResize() {
					isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
					lastClientWidth = docElem.clientHeight;
					if (isVwDirty) {
						pf.fillImgs();
					}
				};
	
				on(window, "resize", debounce(onResize, 99));
				on(document, "readystatechange", run);
			})();
		}
	
		pf.picturefill = picturefill;
		//use this internally for easy monkey patching/performance testing
		pf.fillImgs = picturefill;
		pf.teardownRun = noop;
	
		/* expose methods for testing */
		picturefill._ = pf;
	
		window.picturefillCFG = {
			pf: pf,
			push: function push(args) {
				var name = args.shift();
				if (typeof pf[name] === "function") {
					pf[name].apply(pf, args);
				} else {
					cfg[name] = args[0];
					if (alreadyRun) {
						pf.fillImgs({ reselect: true });
					}
				}
			}
		};
	
		while (setOptions && setOptions.length) {
			window.picturefillCFG.push(setOptions.shift());
		}
	
		/* expose picturefill */
		window.picturefill = picturefill;
	
		/* expose picturefill */
		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			// CommonJS, just export
			module.exports = picturefill;
		} else if (true) {
			// AMD support
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return picturefill;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	
		// IE8 evals this sync, so it must be the last thing we do
		if (!pf.supPicture) {
			types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
		}
	})(window, document);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
	(function (e) {
	  "use strict";
	  function t() {
	    return l.createDocumentFragment();
	  }function n(e) {
	    return l.createElement(e);
	  }function r(e) {
	    if (e.length === 1) return i(e[0]);for (var n = t(), r = I.call(e), s = 0; s < e.length; s++) n.appendChild(i(r[s]));return n;
	  }function i(e) {
	    return typeof e == "string" ? l.createTextNode(e) : e;
	  }for (var s, o, u, a, f, l = e.document, c = Object.defineProperty || function (e, t, n) {
	    e.__defineGetter__(t, n.get);
	  }, h = [].indexOf || function (t) {
	    var n = this.length;while (n--) if (this[n] === t) break;return n;
	  }, p = function p(e) {
	    if (!e) throw "SyntaxError";if (y.test(e)) throw "InvalidCharacterError";return e;
	  }, d = function d(e) {
	    var t = e.className,
	        n = (typeof t === "undefined" ? "undefined" : _typeof(t)) == "object",
	        r = (n ? t.baseVal : t).replace(g, "");r.length && F.push.apply(this, r.split(y)), this._isSVG = n, this._ = e;
	  }, v = { get: function get() {
	      return new d(this);
	    }, set: function set() {} }, m = "dom4-tmp-".concat(Math.random() * +new Date()).replace(".", "-"), g = /^\s+|\s+$/g, y = /\s+/, b = " ", w = "classList", E = function E(t, n) {
	    if (this.contains(t)) n || this.remove(t);else if (n === undefined || n) n = !0, this.add(t);return !!n;
	  }, S = e.DocumentFragment, x = e.Node, T = (x || Element).prototype, N = e.CharacterData || x, C = N && N.prototype, k = e.DocumentType, L = k && k.prototype, A = (e.Element || x || e.HTMLElement).prototype, O = e.HTMLSelectElement || n("select").constructor, M = O.prototype.remove, _ = e.ShadowRoot, D = e.SVGElement, P = / /g, H = "\\ ", B = function B(e) {
	    var t = e === "querySelectorAll";return function (n) {
	      var r,
	          i,
	          s,
	          o,
	          u,
	          a,
	          f = this.parentNode;if (f) {
	        for (s = this.getAttribute("id") || m, o = s === m ? s : s.replace(P, H), a = n.split(","), i = 0; i < a.length; i++) a[i] = "#" + o + " " + a[i];n = a.join(",");
	      }s === m && this.setAttribute("id", s), u = (f || this)[e](n), s === m && this.removeAttribute("id");if (t) {
	        i = u.length, r = new Array(i);while (i--) r[i] = u[i];
	      } else r = u;return r;
	    };
	  }, j = function j(e) {
	    "query" in e || (e.query = A.query), "queryAll" in e || (e.queryAll = A.queryAll);
	  }, F = ["matches", A.matchesSelector || A.webkitMatchesSelector || A.khtmlMatchesSelector || A.mozMatchesSelector || A.msMatchesSelector || A.oMatchesSelector || function (t) {
	    var n = this.parentNode;return !!n && -1 < h.call(n.querySelectorAll(t), this);
	  }, "closest", function (t) {
	    var n = this,
	        r;while ((r = n && n.matches) && !n.matches(t)) n = n.parentNode;return r ? n : null;
	  }, "prepend", function () {
	    var t = this.firstChild,
	        n = r(arguments);t ? this.insertBefore(n, t) : this.appendChild(n);
	  }, "append", function () {
	    this.appendChild(r(arguments));
	  }, "before", function () {
	    var t = this.parentNode;t && t.insertBefore(r(arguments), this);
	  }, "after", function () {
	    var t = this.parentNode,
	        n = this.nextSibling,
	        i = r(arguments);t && (n ? t.insertBefore(i, n) : t.appendChild(i));
	  }, "replace", function () {
	    this.replaceWith.apply(this, arguments);
	  }, "replaceWith", function () {
	    var t = this.parentNode;t && t.replaceChild(r(arguments), this);
	  }, "remove", function () {
	    var t = this.parentNode;t && t.removeChild(this);
	  }, "query", B("querySelector"), "queryAll", B("querySelectorAll")], I = F.slice, q = F.length; q; q -= 2) o = F[q - 2], o in A || (A[o] = F[q - 1]), o === "remove" && (O.prototype[o] = function () {
	    return 0 < arguments.length ? M.apply(this, arguments) : A.remove.call(this);
	  }), /before|after|replace|remove/.test(o) && (N && !(o in C) && (C[o] = F[q - 1]), k && !(o in L) && (L[o] = F[q - 1]));j(l);if (S) j(S.prototype);else try {
	    j(t().constructor.prototype);
	  } catch (R) {}_ && j(_.prototype), n("a").matches("a") || (A[o] = (function (e) {
	    return function (n) {
	      return e.call(this.parentNode ? this : t().appendChild(this), n);
	    };
	  })(A[o])), d.prototype = { length: 0, add: function add() {
	      for (var t = 0, n; t < arguments.length; t++) n = arguments[t], this.contains(n) || F.push.call(this, o);this._isSVG ? this._.setAttribute("class", "" + this) : this._.className = "" + this;
	    }, contains: (function (e) {
	      return function (n) {
	        return q = e.call(this, o = p(n)), -1 < q;
	      };
	    })([].indexOf || function (e) {
	      q = this.length;while (q-- && this[q] !== e);return q;
	    }), item: function item(t) {
	      return this[t] || null;
	    }, remove: function remove() {
	      for (var t = 0, n; t < arguments.length; t++) n = arguments[t], this.contains(n) && F.splice.call(this, q, 1);this._isSVG ? this._.setAttribute("class", "" + this) : this._.className = "" + this;
	    }, toggle: E, toString: function U() {
	      return F.join.call(this, b);
	    } }, D && !(w in D.prototype) && c(D.prototype, w, v), w in l.documentElement ? (a = n("div")[w], a.add("a", "b", "a"), "a b" != a && (u = a.constructor.prototype, "add" in u || (u = e.TemporaryTokenList.prototype), f = function (e) {
	    return function () {
	      var t = 0;while (t < arguments.length) e.call(this, arguments[t++]);
	    };
	  }, u.add = f(u.add), u.remove = f(u.remove), u.toggle = E)) : c(A, w, v), "contains" in T || c(T, "contains", { value: function value(e) {
	      while (e && e !== this) e = e.parentNode;return this === e;
	    } }), "head" in l || c(l, "head", { get: function get() {
	      return s || (s = l.getElementsByTagName("head")[0]);
	    } }), (function () {
	    for (var t, n = e.requestAnimationFrame, r = e.cancelAnimationFrame, i = ["o", "ms", "moz", "webkit"], s = i.length; !r && s--;) n = n || e[i[s] + "RequestAnimationFrame"], r = e[i[s] + "CancelAnimationFrame"] || e[i[s] + "CancelRequestAnimationFrame"];r || (n ? (t = n, n = function (e) {
	      var n = !0;return t(function () {
	        n && e.apply(this, arguments);
	      }), function () {
	        n = !1;
	      };
	    }, r = function (e) {
	      e();
	    }) : (n = function (e) {
	      return setTimeout(e, 15, 15);
	    }, r = function (e) {
	      clearTimeout(e);
	    })), e.requestAnimationFrame = n, e.cancelAnimationFrame = r;
	  })();try {
	    new e.CustomEvent("?");
	  } catch (R) {
	    e.CustomEvent = (function (e, t) {
	      function n(n, i) {
	        var s = l.createEvent(e);if (typeof n != "string") throw new Error("An event name must be provided");return e == "Event" && (s.initCustomEvent = r), i == null && (i = t), s.initCustomEvent(n, i.bubbles, i.cancelable, i.detail), s;
	      }function r(e, t, n, r) {
	        this.initEvent(e, t, n), this.detail = r;
	      }return n;
	    })(e.CustomEvent ? "CustomEvent" : "Event", { bubbles: !1, cancelable: !1, detail: null });
	  }
	})(window);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	/*!
	 * https://github.com/es-shims/es5-shim
	 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
	 * see https://github.com/es-shims/es5-shim/blob/v4.3.1/LICENSE
	 */
	(function (e, t) {
	  "use strict";
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
	    module.exports = t();
	  } else {
	    e.returnExports = t();
	  }
	})(undefined, function () {
	  var e = Array;var t = e.prototype;var r = Object;var n = r.prototype;var i = Function.prototype;var a = String;var o = a.prototype;var u = Number;var f = u.prototype;var l = t.slice;var s = t.splice;var c = t.push;var v = t.unshift;var p = t.concat;var h = i.call;var g = Math.max;var y = Math.min;var d = n.toString;var m = typeof Symbol === "function" && _typeof(Symbol.toStringTag) === "symbol";var w;var b = Function.prototype.toString,
	      T = function tryFunctionObject(e) {
	    try {
	      b.call(e);return true;
	    } catch (t) {
	      return false;
	    }
	  },
	      x = "[object Function]",
	      O = "[object GeneratorFunction]";w = function isCallable(e) {
	    if (typeof e !== "function") {
	      return false;
	    }if (m) {
	      return T(e);
	    }var t = d.call(e);return t === x || t === O;
	  };var S;var I = RegExp.prototype.exec,
	      j = function tryRegexExec(e) {
	    try {
	      I.call(e);return true;
	    } catch (t) {
	      return false;
	    }
	  },
	      E = "[object RegExp]";S = function isRegex(e) {
	    if ((typeof e === "undefined" ? "undefined" : _typeof(e)) !== "object") {
	      return false;
	    }return m ? j(e) : d.call(e) === E;
	  };var N;var D = String.prototype.valueOf,
	      M = function tryStringObject(e) {
	    try {
	      D.call(e);return true;
	    } catch (t) {
	      return false;
	    }
	  },
	      U = "[object String]";N = function isString(e) {
	    if (typeof e === "string") {
	      return true;
	    }if ((typeof e === "undefined" ? "undefined" : _typeof(e)) !== "object") {
	      return false;
	    }return m ? M(e) : d.call(e) === U;
	  };var k = (function (e) {
	    var t = r.defineProperty && (function () {
	      try {
	        var e = {};r.defineProperty(e, "x", { enumerable: false, value: e });for (var t in e) {
	          return false;
	        }return e.x === e;
	      } catch (n) {
	        return false;
	      }
	    })();var n;if (t) {
	      n = function (e, t, n, i) {
	        if (!i && t in e) {
	          return;
	        }r.defineProperty(e, t, { configurable: true, enumerable: false, writable: true, value: n });
	      };
	    } else {
	      n = function (e, t, r, n) {
	        if (!n && t in e) {
	          return;
	        }e[t] = r;
	      };
	    }return function defineProperties(t, r, i) {
	      for (var a in r) {
	        if (e.call(r, a)) {
	          n(t, a, r[a], i);
	        }
	      }
	    };
	  })(n.hasOwnProperty);var R = function isPrimitive(e) {
	    var t = typeof e === "undefined" ? "undefined" : _typeof(e);return e === null || t !== "object" && t !== "function";
	  };var F = u.isNaN || function (e) {
	    return e !== e;
	  };var A = { ToInteger: function ToInteger(e) {
	      var t = +e;if (F(t)) {
	        t = 0;
	      } else if (t !== 0 && t !== 1 / 0 && t !== -(1 / 0)) {
	        t = (t > 0 || -1) * Math.floor(Math.abs(t));
	      }return t;
	    }, ToPrimitive: function ToPrimitive(e) {
	      var t, r, n;if (R(e)) {
	        return e;
	      }r = e.valueOf;if (w(r)) {
	        t = r.call(e);if (R(t)) {
	          return t;
	        }
	      }n = e.toString;if (w(n)) {
	        t = n.call(e);if (R(t)) {
	          return t;
	        }
	      }throw new TypeError();
	    }, ToObject: function ToObject(e) {
	      if (e == null) {
	        throw new TypeError("can't convert " + e + " to object");
	      }return r(e);
	    }, ToUint32: function ToUint32(e) {
	      return e >>> 0;
	    } };var P = function Empty() {};k(i, { bind: function bind(e) {
	      var t = this;if (!w(t)) {
	        throw new TypeError("Function.prototype.bind called on incompatible " + t);
	      }var n = l.call(arguments, 1);var i;var a = function a() {
	        if (this instanceof i) {
	          var a = t.apply(this, p.call(n, l.call(arguments)));if (r(a) === a) {
	            return a;
	          }return this;
	        } else {
	          return t.apply(e, p.call(n, l.call(arguments)));
	        }
	      };var o = g(0, t.length - n.length);var u = [];for (var f = 0; f < o; f++) {
	        c.call(u, "$" + f);
	      }i = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this, arguments); }")(a);if (t.prototype) {
	        P.prototype = t.prototype;i.prototype = new P();P.prototype = null;
	      }return i;
	    } });var $ = h.bind(n.hasOwnProperty);var C = h.bind(n.toString);var Z = h.bind(o.slice);var J = h.bind(o.split);var z = h.bind(o.indexOf);var B = h.bind(c);var G = e.isArray || function isArray(e) {
	    return C(e) === "[object Array]";
	  };var H = [].unshift(0) !== 1;k(t, { unshift: function unshift() {
	      v.apply(this, arguments);return this.length;
	    } }, H);k(e, { isArray: G });var L = r("a");var X = L[0] !== "a" || !(0 in L);var Y = function properlyBoxed(e) {
	    var t = true;var r = true;if (e) {
	      e.call("foo", function (e, r, n) {
	        if ((typeof n === "undefined" ? "undefined" : _typeof(n)) !== "object") {
	          t = false;
	        }
	      });e.call([1], function () {
	        "use strict";
	        r = typeof this === "string";
	      }, "x");
	    }return !!e && t && r;
	  };k(t, { forEach: function forEach(e) {
	      var t = A.ToObject(this);var r = X && N(this) ? J(this, "") : t;var n = -1;var i = A.ToUint32(r.length);var a;if (arguments.length > 1) {
	        a = arguments[1];
	      }if (!w(e)) {
	        throw new TypeError("Array.prototype.forEach callback must be a function");
	      }while (++n < i) {
	        if (n in r) {
	          if (typeof a === "undefined") {
	            e(r[n], n, t);
	          } else {
	            e.call(a, r[n], n, t);
	          }
	        }
	      }
	    } }, !Y(t.forEach));k(t, { map: function map(t) {
	      var r = A.ToObject(this);var n = X && N(this) ? J(this, "") : r;var i = A.ToUint32(n.length);var a = e(i);var o;if (arguments.length > 1) {
	        o = arguments[1];
	      }if (!w(t)) {
	        throw new TypeError("Array.prototype.map callback must be a function");
	      }for (var u = 0; u < i; u++) {
	        if (u in n) {
	          if (typeof o === "undefined") {
	            a[u] = t(n[u], u, r);
	          } else {
	            a[u] = t.call(o, n[u], u, r);
	          }
	        }
	      }return a;
	    } }, !Y(t.map));k(t, { filter: function filter(e) {
	      var t = A.ToObject(this);var r = X && N(this) ? J(this, "") : t;var n = A.ToUint32(r.length);var i = [];var a;var o;if (arguments.length > 1) {
	        o = arguments[1];
	      }if (!w(e)) {
	        throw new TypeError("Array.prototype.filter callback must be a function");
	      }for (var u = 0; u < n; u++) {
	        if (u in r) {
	          a = r[u];if (typeof o === "undefined" ? e(a, u, t) : e.call(o, a, u, t)) {
	            B(i, a);
	          }
	        }
	      }return i;
	    } }, !Y(t.filter));k(t, { every: function every(e) {
	      var t = A.ToObject(this);var r = X && N(this) ? J(this, "") : t;var n = A.ToUint32(r.length);var i;if (arguments.length > 1) {
	        i = arguments[1];
	      }if (!w(e)) {
	        throw new TypeError("Array.prototype.every callback must be a function");
	      }for (var a = 0; a < n; a++) {
	        if (a in r && !(typeof i === "undefined" ? e(r[a], a, t) : e.call(i, r[a], a, t))) {
	          return false;
	        }
	      }return true;
	    } }, !Y(t.every));k(t, { some: function some(e) {
	      var t = A.ToObject(this);var r = X && N(this) ? J(this, "") : t;var n = A.ToUint32(r.length);var i;if (arguments.length > 1) {
	        i = arguments[1];
	      }if (!w(e)) {
	        throw new TypeError("Array.prototype.some callback must be a function");
	      }for (var a = 0; a < n; a++) {
	        if (a in r && (typeof i === "undefined" ? e(r[a], a, t) : e.call(i, r[a], a, t))) {
	          return true;
	        }
	      }return false;
	    } }, !Y(t.some));var q = false;if (t.reduce) {
	    q = _typeof(t.reduce.call("es5", function (e, t, r, n) {
	      return n;
	    })) === "object";
	  }k(t, { reduce: function reduce(e) {
	      var t = A.ToObject(this);var r = X && N(this) ? J(this, "") : t;var n = A.ToUint32(r.length);if (!w(e)) {
	        throw new TypeError("Array.prototype.reduce callback must be a function");
	      }if (n === 0 && arguments.length === 1) {
	        throw new TypeError("reduce of empty array with no initial value");
	      }var i = 0;var a;if (arguments.length >= 2) {
	        a = arguments[1];
	      } else {
	        do {
	          if (i in r) {
	            a = r[i++];break;
	          }if (++i >= n) {
	            throw new TypeError("reduce of empty array with no initial value");
	          }
	        } while (true);
	      }for (; i < n; i++) {
	        if (i in r) {
	          a = e(a, r[i], i, t);
	        }
	      }return a;
	    } }, !q);var K = false;if (t.reduceRight) {
	    K = _typeof(t.reduceRight.call("es5", function (e, t, r, n) {
	      return n;
	    })) === "object";
	  }k(t, { reduceRight: function reduceRight(e) {
	      var t = A.ToObject(this);var r = X && N(this) ? J(this, "") : t;var n = A.ToUint32(r.length);if (!w(e)) {
	        throw new TypeError("Array.prototype.reduceRight callback must be a function");
	      }if (n === 0 && arguments.length === 1) {
	        throw new TypeError("reduceRight of empty array with no initial value");
	      }var i;var a = n - 1;if (arguments.length >= 2) {
	        i = arguments[1];
	      } else {
	        do {
	          if (a in r) {
	            i = r[a--];break;
	          }if (--a < 0) {
	            throw new TypeError("reduceRight of empty array with no initial value");
	          }
	        } while (true);
	      }if (a < 0) {
	        return i;
	      }do {
	        if (a in r) {
	          i = e(i, r[a], a, t);
	        }
	      } while (a--);return i;
	    } }, !K);var Q = t.indexOf && [0, 1].indexOf(1, 2) !== -1;k(t, { indexOf: function indexOf(e) {
	      var t = X && N(this) ? J(this, "") : A.ToObject(this);var r = A.ToUint32(t.length);if (r === 0) {
	        return -1;
	      }var n = 0;if (arguments.length > 1) {
	        n = A.ToInteger(arguments[1]);
	      }n = n >= 0 ? n : g(0, r + n);for (; n < r; n++) {
	        if (n in t && t[n] === e) {
	          return n;
	        }
	      }return -1;
	    } }, Q);var V = t.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;k(t, { lastIndexOf: function lastIndexOf(e) {
	      var t = X && N(this) ? J(this, "") : A.ToObject(this);var r = A.ToUint32(t.length);if (r === 0) {
	        return -1;
	      }var n = r - 1;if (arguments.length > 1) {
	        n = y(n, A.ToInteger(arguments[1]));
	      }n = n >= 0 ? n : r - Math.abs(n);for (; n >= 0; n--) {
	        if (n in t && e === t[n]) {
	          return n;
	        }
	      }return -1;
	    } }, V);var W = (function () {
	    var e = [1, 2];var t = e.splice();return e.length === 2 && G(t) && t.length === 0;
	  })();k(t, { splice: function splice(e, t) {
	      if (arguments.length === 0) {
	        return [];
	      } else {
	        return s.apply(this, arguments);
	      }
	    } }, !W);var _ = (function () {
	    var e = {};t.splice.call(e, 0, 0, 1);return e.length === 1;
	  })();k(t, { splice: function splice(e, t) {
	      if (arguments.length === 0) {
	        return [];
	      }var r = arguments;this.length = g(A.ToInteger(this.length), 0);if (arguments.length > 0 && typeof t !== "number") {
	        r = l.call(arguments);if (r.length < 2) {
	          B(r, this.length - e);
	        } else {
	          r[1] = A.ToInteger(t);
	        }
	      }return s.apply(this, r);
	    } }, !_);var ee = (function () {
	    var t = new e(1e5);t[8] = "x";t.splice(1, 1);return t.indexOf("x") === 7;
	  })();var te = (function () {
	    var e = 256;var t = [];t[e] = "a";t.splice(e + 1, 0, "b");return t[e] === "a";
	  })();k(t, { splice: function splice(e, t) {
	      var r = A.ToObject(this);var n = [];var i = A.ToUint32(r.length);var o = A.ToInteger(e);var u = o < 0 ? g(i + o, 0) : y(o, i);var f = y(g(A.ToInteger(t), 0), i - u);var s = 0;var c;while (s < f) {
	        c = a(u + s);if ($(r, c)) {
	          n[s] = r[c];
	        }s += 1;
	      }var v = l.call(arguments, 2);var p = v.length;var h;if (p < f) {
	        s = u;while (s < i - f) {
	          c = a(s + f);h = a(s + p);if ($(r, c)) {
	            r[h] = r[c];
	          } else {
	            delete r[h];
	          }s += 1;
	        }s = i;while (s > i - f + p) {
	          delete r[s - 1];s -= 1;
	        }
	      } else if (p > f) {
	        s = i - f;while (s > u) {
	          c = a(s + f - 1);h = a(s + p - 1);if ($(r, c)) {
	            r[h] = r[c];
	          } else {
	            delete r[h];
	          }s -= 1;
	        }
	      }s = u;for (var d = 0; d < v.length; ++d) {
	        r[s] = v[d];s += 1;
	      }r.length = i - f + p;return n;
	    } }, !ee || !te);var re = [1, 2].join(undefined) !== "1,2";var ne = t.join;k(t, { join: function join(e) {
	      return ne.call(this, typeof e === "undefined" ? "," : e);
	    } }, re);var ie = function push(e) {
	    var t = A.ToObject(this);var r = A.ToUint32(t.length);var n = 0;while (n < arguments.length) {
	      t[r + n] = arguments[n];n += 1;
	    }t.length = r + n;return r + n;
	  };var ae = (function () {
	    var e = {};var t = Array.prototype.push.call(e, undefined);return t !== 1 || e.length !== 1 || typeof e[0] !== "undefined" || !$(e, 0);
	  })();k(t, { push: function push(e) {
	      if (G(this)) {
	        return c.apply(this, arguments);
	      }return ie.apply(this, arguments);
	    } }, ae);var oe = (function () {
	    var e = [];var t = e.push(undefined);return t !== 1 || e.length !== 1 || typeof e[0] !== "undefined" || !$(e, 0);
	  })();k(t, { push: ie }, oe);var ue = !({ toString: null }).propertyIsEnumerable("toString");var fe = (function () {}).propertyIsEnumerable("prototype");var le = !$("x", "0");var se = function se(e) {
	    var t = e.constructor;return t && t.prototype === e;
	  };var ce = { $window: true, $console: true, $parent: true, $self: true, $frame: true, $frames: true, $frameElement: true, $webkitIndexedDB: true, $webkitStorageInfo: true };var ve = (function () {
	    if (typeof window === "undefined") {
	      return false;
	    }for (var e in window) {
	      try {
	        if (!ce["$" + e] && $(window, e) && window[e] !== null && _typeof(window[e]) === "object") {
	          se(window[e]);
	        }
	      } catch (t) {
	        return true;
	      }
	    }return false;
	  })();var pe = function pe(e) {
	    if (typeof window === "undefined" || !ve) {
	      return se(e);
	    }try {
	      return se(e);
	    } catch (t) {
	      return false;
	    }
	  };var he = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];var ge = he.length;var ye = function isArguments(e) {
	    return C(e) === "[object Arguments]";
	  };var de = function isArguments(e) {
	    return e !== null && (typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && typeof e.length === "number" && e.length >= 0 && !G(e) && w(e.callee);
	  };var me = ye(arguments) ? ye : de;k(r, { keys: function keys(e) {
	      var t = w(e);var r = me(e);var n = e !== null && (typeof e === "undefined" ? "undefined" : _typeof(e)) === "object";var i = n && N(e);if (!n && !t && !r) {
	        throw new TypeError("Object.keys called on a non-object");
	      }var o = [];var u = fe && t;if (i && le || r) {
	        for (var f = 0; f < e.length; ++f) {
	          B(o, a(f));
	        }
	      }if (!r) {
	        for (var l in e) {
	          if (!(u && l === "prototype") && $(e, l)) {
	            B(o, a(l));
	          }
	        }
	      }if (ue) {
	        var s = pe(e);for (var c = 0; c < ge; c++) {
	          var v = he[c];if (!(s && v === "constructor") && $(e, v)) {
	            B(o, v);
	          }
	        }
	      }return o;
	    } });var we = r.keys && (function () {
	    return r.keys(arguments).length === 2;
	  })(1, 2);var be = r.keys && (function () {
	    var e = r.keys(arguments);return arguments.length !== 1 || e.length !== 1 || e[0] !== 1;
	  })(1);var Te = r.keys;k(r, { keys: function keys(e) {
	      if (me(e)) {
	        return Te(l.call(e));
	      } else {
	        return Te(e);
	      }
	    } }, !we || be);var xe = -621987552e5;var Oe = "-000001";var Se = Date.prototype.toISOString && new Date(xe).toISOString().indexOf(Oe) === -1;var Ie = Date.prototype.toISOString && new Date(-1).toISOString() !== "1969-12-31T23:59:59.999Z";k(Date.prototype, { toISOString: function toISOString() {
	      var e, t, r, n, i;if (!isFinite(this)) {
	        throw new RangeError("Date.prototype.toISOString called on non-finite value.");
	      }n = this.getUTCFullYear();i = this.getUTCMonth();n += Math.floor(i / 12);i = (i % 12 + 12) % 12;e = [i + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];n = (n < 0 ? "-" : n > 9999 ? "+" : "") + Z("00000" + Math.abs(n), 0 <= n && n <= 9999 ? -4 : -6);t = e.length;while (t--) {
	        r = e[t];if (r < 10) {
	          e[t] = "0" + r;
	        }
	      }return n + "-" + l.call(e, 0, 2).join("-") + "T" + l.call(e, 2).join(":") + "." + Z("000" + this.getUTCMilliseconds(), -3) + "Z";
	    } }, Se || Ie);var je = (function () {
	    try {
	      return Date.prototype.toJSON && new Date(NaN).toJSON() === null && new Date(xe).toJSON().indexOf(Oe) !== -1 && Date.prototype.toJSON.call({ toISOString: function toISOString() {
	          return true;
	        } });
	    } catch (e) {
	      return false;
	    }
	  })();if (!je) {
	    Date.prototype.toJSON = function toJSON(e) {
	      var t = r(this);var n = A.ToPrimitive(t);if (typeof n === "number" && !isFinite(n)) {
	        return null;
	      }var i = t.toISOString;if (!w(i)) {
	        throw new TypeError("toISOString property is not callable");
	      }return i.call(t);
	    };
	  }var Ee = Date.parse("+033658-09-27T01:46:40.000Z") === 1e15;var Ne = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));var De = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if (De || Ne || !Ee) {
	    var Me = Math.pow(2, 31) - 1;var Ue = Math.floor(Me / 1e3);var ke = F(new Date(1970, 0, 1, 0, 0, 0, Me + 1).getTime());Date = (function (e) {
	      var t = function Date(r, n, i, o, u, f, l) {
	        var s = arguments.length;var c;if (this instanceof e) {
	          var v = f;var p = l;if (ke && s >= 7 && l > Me) {
	            var h = Math.floor(l / Me) * Me;var g = Math.floor(h / 1e3);v += g;p -= g * 1e3;
	          }c = s === 1 && a(r) === r ? new e(t.parse(r)) : s >= 7 ? new e(r, n, i, o, u, v, p) : s >= 6 ? new e(r, n, i, o, u, v) : s >= 5 ? new e(r, n, i, o, u) : s >= 4 ? new e(r, n, i, o) : s >= 3 ? new e(r, n, i) : s >= 2 ? new e(r, n) : s >= 1 ? new e(r) : new e();
	        } else {
	          c = e.apply(this, arguments);
	        }if (!R(c)) {
	          k(c, { constructor: t }, true);
	        }return c;
	      };var r = new RegExp("^" + "(\\d{4}|[+-]\\d{6})" + "(?:-(\\d{2})" + "(?:-(\\d{2})" + "(?:" + "T(\\d{2})" + ":(\\d{2})" + "(?:" + ":(\\d{2})" + "(?:(\\.\\d{1,}))?" + ")?" + "(" + "Z|" + "(?:" + "([-+])" + "(\\d{2})" + ":(\\d{2})" + ")" + ")?)?)?)?" + "$");var n = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];var i = function dayFromMonth(e, t) {
	        var r = t > 1 ? 1 : 0;return n[t] + Math.floor((e - 1969 + r) / 4) - Math.floor((e - 1901 + r) / 100) + Math.floor((e - 1601 + r) / 400) + 365 * (e - 1970);
	      };var o = function toUTC(t) {
	        var r = 0;var n = t;if (ke && n > Me) {
	          var i = Math.floor(n / Me) * Me;var a = Math.floor(i / 1e3);r += a;n -= a * 1e3;
	        }return u(new e(1970, 0, 1, 0, 0, r, n));
	      };for (var f in e) {
	        if ($(e, f)) {
	          t[f] = e[f];
	        }
	      }k(t, { now: e.now, UTC: e.UTC }, true);t.prototype = e.prototype;k(t.prototype, { constructor: t }, true);var l = function parse(t) {
	        var n = r.exec(t);if (n) {
	          var a = u(n[1]),
	              f = u(n[2] || 1) - 1,
	              l = u(n[3] || 1) - 1,
	              s = u(n[4] || 0),
	              c = u(n[5] || 0),
	              v = u(n[6] || 0),
	              p = Math.floor(u(n[7] || 0) * 1e3),
	              h = Boolean(n[4] && !n[8]),
	              g = n[9] === "-" ? 1 : -1,
	              y = u(n[10] || 0),
	              d = u(n[11] || 0),
	              m;var w = c > 0 || v > 0 || p > 0;if (s < (w ? 24 : 25) && c < 60 && v < 60 && p < 1e3 && f > -1 && f < 12 && y < 24 && d < 60 && l > -1 && l < i(a, f + 1) - i(a, f)) {
	            m = ((i(a, f) + l) * 24 + s + y * g) * 60;m = ((m + c + d * g) * 60 + v) * 1e3 + p;if (h) {
	              m = o(m);
	            }if (-864e13 <= m && m <= 864e13) {
	              return m;
	            }
	          }return NaN;
	        }return e.parse.apply(this, arguments);
	      };k(t, { parse: l });return t;
	    })(Date);
	  }if (!Date.now) {
	    Date.now = function now() {
	      return new Date().getTime();
	    };
	  }var Re = f.toFixed && (8e-5.toFixed(3) !== "0.000" || .9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 0xde0b6b3a7640080.toFixed(0) !== "1000000000000000128");var Fe = { base: 1e7, size: 6, data: [0, 0, 0, 0, 0, 0], multiply: function multiply(e, t) {
	      var r = -1;var n = t;while (++r < Fe.size) {
	        n += e * Fe.data[r];Fe.data[r] = n % Fe.base;n = Math.floor(n / Fe.base);
	      }
	    }, divide: function divide(e) {
	      var t = Fe.size,
	          r = 0;while (--t >= 0) {
	        r += Fe.data[t];Fe.data[t] = Math.floor(r / e);r = r % e * Fe.base;
	      }
	    }, numToString: function numToString() {
	      var e = Fe.size;var t = "";while (--e >= 0) {
	        if (t !== "" || e === 0 || Fe.data[e] !== 0) {
	          var r = a(Fe.data[e]);if (t === "") {
	            t = r;
	          } else {
	            t += Z("0000000", 0, 7 - r.length) + r;
	          }
	        }
	      }return t;
	    }, pow: function pow(e, t, r) {
	      return t === 0 ? r : t % 2 === 1 ? pow(e, t - 1, r * e) : pow(e * e, t / 2, r);
	    }, log: function log(e) {
	      var t = 0;var r = e;while (r >= 4096) {
	        t += 12;r /= 4096;
	      }while (r >= 2) {
	        t += 1;r /= 2;
	      }return t;
	    } };var Ae = function toFixed(e) {
	    var t, r, n, i, o, f, l, s;t = u(e);t = F(t) ? 0 : Math.floor(t);if (t < 0 || t > 20) {
	      throw new RangeError("Number.toFixed called with invalid number of decimals");
	    }r = u(this);if (F(r)) {
	      return "NaN";
	    }if (r <= -1e21 || r >= 1e21) {
	      return a(r);
	    }n = "";if (r < 0) {
	      n = "-";r = -r;
	    }i = "0";if (r > 1e-21) {
	      o = Fe.log(r * Fe.pow(2, 69, 1)) - 69;f = o < 0 ? r * Fe.pow(2, -o, 1) : r / Fe.pow(2, o, 1);f *= 4503599627370496;o = 52 - o;if (o > 0) {
	        Fe.multiply(0, f);l = t;while (l >= 7) {
	          Fe.multiply(1e7, 0);l -= 7;
	        }Fe.multiply(Fe.pow(10, l, 1), 0);l = o - 1;while (l >= 23) {
	          Fe.divide(1 << 23);l -= 23;
	        }Fe.divide(1 << l);Fe.multiply(1, 1);Fe.divide(2);i = Fe.numToString();
	      } else {
	        Fe.multiply(0, f);Fe.multiply(1 << -o, 0);i = Fe.numToString() + Z("0.00000000000000000000", 2, 2 + t);
	      }
	    }if (t > 0) {
	      s = i.length;if (s <= t) {
	        i = n + Z("0.0000000000000000000", 0, t - s + 2) + i;
	      } else {
	        i = n + Z(i, 0, s - t) + "." + Z(i, s - t);
	      }
	    } else {
	      i = n + i;
	    }return i;
	  };k(f, { toFixed: Ae }, Re);var Pe = (function () {
	    try {
	      return 1..toPrecision(undefined) === "1";
	    } catch (e) {
	      return true;
	    }
	  })();var $e = f.toPrecision;k(f, { toPrecision: function toPrecision(e) {
	      return typeof e === "undefined" ? $e.call(this) : $e.call(this, e);
	    } }, Pe);if ("ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1) {
	    (function () {
	      var e = typeof /()??/.exec("")[1] === "undefined";var t = Math.pow(2, 32) - 1;o.split = function (r, n) {
	        var i = this;if (typeof r === "undefined" && n === 0) {
	          return [];
	        }if (!S(r)) {
	          return J(this, r, n);
	        }var a = [];var o = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (r.sticky ? "y" : ""),
	            u = 0,
	            f,
	            s,
	            v,
	            p;var h = new RegExp(r.source, o + "g");i += "";if (!e) {
	          f = new RegExp("^" + h.source + "$(?!\\s)", o);
	        }var g = typeof n === "undefined" ? t : A.ToUint32(n);s = h.exec(i);while (s) {
	          v = s.index + s[0].length;if (v > u) {
	            B(a, Z(i, u, s.index));if (!e && s.length > 1) {
	              s[0].replace(f, function () {
	                for (var e = 1; e < arguments.length - 2; e++) {
	                  if (typeof arguments[e] === "undefined") {
	                    s[e] = void 0;
	                  }
	                }
	              });
	            }if (s.length > 1 && s.index < i.length) {
	              c.apply(a, l.call(s, 1));
	            }p = s[0].length;u = v;if (a.length >= g) {
	              break;
	            }
	          }if (h.lastIndex === s.index) {
	            h.lastIndex++;
	          }s = h.exec(i);
	        }if (u === i.length) {
	          if (p || !h.test("")) {
	            B(a, "");
	          }
	        } else {
	          B(a, Z(i, u));
	        }return a.length > g ? Z(a, 0, g) : a;
	      };
	    })();
	  } else if ("0".split(void 0, 0).length) {
	    o.split = function split(e, t) {
	      if (typeof e === "undefined" && t === 0) {
	        return [];
	      }return J(this, e, t);
	    };
	  }var Ce = o.replace;var Ze = (function () {
	    var e = [];"x".replace(/x(.)?/g, function (t, r) {
	      B(e, r);
	    });return e.length === 1 && typeof e[0] === "undefined";
	  })();if (!Ze) {
	    o.replace = function replace(e, t) {
	      var r = w(t);var n = S(e) && /\)[*?]/.test(e.source);if (!r || !n) {
	        return Ce.call(this, e, t);
	      } else {
	        var i = function i(r) {
	          var n = arguments.length;var i = e.lastIndex;e.lastIndex = 0;var a = e.exec(r) || [];e.lastIndex = i;B(a, arguments[n - 2], arguments[n - 1]);return t.apply(this, a);
	        };return Ce.call(this, e, i);
	      }
	    };
	  }var Je = o.substr;var ze = "".substr && "0b".substr(-1) !== "b";k(o, { substr: function substr(e, t) {
	      var r = e;if (e < 0) {
	        r = g(this.length + e, 0);
	      }return Je.call(this, r, t);
	    } }, ze);var Be = "\t\n\u000b\f\r   ᠎    " + "         　\u2028" + "\u2029﻿";var Ge = "​";var He = "[" + Be + "]";var Le = new RegExp("^" + He + He + "*");var Xe = new RegExp(He + He + "*$");var Ye = o.trim && (Be.trim() || !Ge.trim());k(o, { trim: function trim() {
	      if (typeof this === "undefined" || this === null) {
	        throw new TypeError("can't convert " + this + " to object");
	      }return a(this).replace(Le, "").replace(Xe, "");
	    } }, Ye);var qe = o.lastIndexOf && "abcあい".lastIndexOf("あい", 2) !== -1;k(o, { lastIndexOf: function lastIndexOf(e) {
	      if (typeof this === "undefined" || this === null) {
	        throw new TypeError("can't convert " + this + " to object");
	      }var t = a(this);var r = a(e);var n = arguments.length > 1 ? u(arguments[1]) : NaN;var i = F(n) ? Infinity : A.ToInteger(n);var o = y(g(i, 0), t.length);var f = r.length;var l = o + f;while (l > 0) {
	        l = g(0, l - f);var s = z(Z(t, l, o + f), r);if (s !== -1) {
	          return l + s;
	        }
	      }return -1;
	    } }, qe);var Ke = o.lastIndexOf;k(o, { lastIndexOf: function lastIndexOf(e) {
	      return Ke.apply(this, arguments);
	    } }, o.lastIndexOf.length !== 1);if (parseInt(Be + "08") !== 8 || parseInt(Be + "0x16") !== 22) {
	    parseInt = (function (e) {
	      var t = /^[\-+]?0[xX]/;return function parseInt(r, n) {
	        var i = a(r).trim();var o = u(n) || (t.test(i) ? 16 : 10);return e(i, o);
	      };
	    })(parseInt);
	  }if (String(new RangeError("test")) !== "RangeError: test") {
	    var Qe = Error.prototype.toString;var Ve = function toString() {
	      if (typeof this === "undefined" || this === null) {
	        throw new TypeError("can't convert " + this + " to object");
	      }var e = this.name;if (typeof e === "undefined") {
	        e = "Error";
	      } else if (typeof e !== "string") {
	        e = a(e);
	      }var t = this.message;if (typeof t === "undefined") {
	        t = "";
	      } else if (typeof t !== "string") {
	        t = a(t);
	      }if (!e) {
	        return t;
	      }if (!t) {
	        return e;
	      }return e + ": " + t;
	    };Error.prototype.toString = Ve;
	  }
	});
	//# sourceMappingURL=es5-shim.map

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	/* Placeholders.js v4.0.1 */
	/*!
	 * The MIT License
	 *
	 * Copyright (c) 2012 James Allardice
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to
	 * deal in the Software without restriction, including without limitation the
	 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	 * sell copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
	 * IN THE SOFTWARE.
	 */
	!(function (a) {
	  "use strict";
	  function b() {}function c() {
	    try {
	      return document.activeElement;
	    } catch (a) {}
	  }function d(a, b) {
	    for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return !0;return !1;
	  }function e(a, b, c) {
	    return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0;
	  }function f(a, b) {
	    var c;a.createTextRange ? (c = a.createTextRange(), c.move("character", b), c.select()) : a.selectionStart && (a.focus(), a.setSelectionRange(b, b));
	  }function g(a, b) {
	    try {
	      return a.type = b, !0;
	    } catch (c) {
	      return !1;
	    }
	  }function h(a, b) {
	    if (a && a.getAttribute(B)) b(a);else for (var c, d = a ? a.getElementsByTagName("input") : N, e = a ? a.getElementsByTagName("textarea") : O, f = d ? d.length : 0, g = e ? e.length : 0, h = f + g, i = 0; h > i; i++) c = f > i ? d[i] : e[i - f], b(c);
	  }function i(a) {
	    h(a, k);
	  }function j(a) {
	    h(a, l);
	  }function k(a, b) {
	    var c = !!b && a.value !== b,
	        d = a.value === a.getAttribute(B);if ((c || d) && "true" === a.getAttribute(C)) {
	      a.removeAttribute(C), a.value = a.value.replace(a.getAttribute(B), ""), a.className = a.className.replace(A, "");var e = a.getAttribute(I);parseInt(e, 10) >= 0 && (a.setAttribute("maxLength", e), a.removeAttribute(I));var f = a.getAttribute(D);return f && (a.type = f), !0;
	    }return !1;
	  }function l(a) {
	    var b = a.getAttribute(B);if ("" === a.value && b) {
	      a.setAttribute(C, "true"), a.value = b, a.className += " " + z;var c = a.getAttribute(I);c || (a.setAttribute(I, a.maxLength), a.removeAttribute("maxLength"));var d = a.getAttribute(D);return d ? a.type = "text" : "password" === a.type && g(a, "text") && a.setAttribute(D, "password"), !0;
	    }return !1;
	  }function m(a) {
	    return function () {
	      P && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) ? f(a, 0) : k(a);
	    };
	  }function n(a) {
	    return function () {
	      l(a);
	    };
	  }function o(a) {
	    return function () {
	      i(a);
	    };
	  }function p(a) {
	    return function (b) {
	      return v = a.value, "true" === a.getAttribute(C) && v === a.getAttribute(B) && d(x, b.keyCode) ? (b.preventDefault && b.preventDefault(), !1) : void 0;
	    };
	  }function q(a) {
	    return function () {
	      k(a, v), "" === a.value && (a.blur(), f(a, 0));
	    };
	  }function r(a) {
	    return function () {
	      a === c() && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) && f(a, 0);
	    };
	  }function s(a) {
	    var b = a.form;b && "string" == typeof b && (b = document.getElementById(b), b.getAttribute(E) || (e(b, "submit", o(b)), b.setAttribute(E, "true"))), e(a, "focus", m(a)), e(a, "blur", n(a)), P && (e(a, "keydown", p(a)), e(a, "keyup", q(a)), e(a, "click", r(a))), a.setAttribute(F, "true"), a.setAttribute(B, T), (P || a !== c()) && l(a);
	  }var t = document.createElement("input"),
	      u = void 0 !== t.placeholder;if ((a.Placeholders = { nativeSupport: u, disable: u ? b : i, enable: u ? b : j }, !u)) {
	    var v,
	        w = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
	        x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
	        y = "#ccc",
	        z = "placeholdersjs",
	        A = new RegExp("(?:^|\\s)" + z + "(?!\\S)"),
	        B = "data-placeholder-value",
	        C = "data-placeholder-active",
	        D = "data-placeholder-type",
	        E = "data-placeholder-submit",
	        F = "data-placeholder-bound",
	        G = "data-placeholder-focus",
	        H = "data-placeholder-live",
	        I = "data-placeholder-maxlength",
	        J = 100,
	        K = document.getElementsByTagName("head")[0],
	        L = document.documentElement,
	        M = a.Placeholders,
	        N = document.getElementsByTagName("input"),
	        O = document.getElementsByTagName("textarea"),
	        P = "false" === L.getAttribute(G),
	        Q = "false" !== L.getAttribute(H),
	        R = document.createElement("style");R.type = "text/css";var S = document.createTextNode("." + z + " {color:" + y + ";}");R.styleSheet ? R.styleSheet.cssText = S.nodeValue : R.appendChild(S), K.insertBefore(R, K.firstChild);for (var T, U, V = 0, W = N.length + O.length; W > V; V++) U = V < N.length ? N[V] : O[V - N.length], T = U.attributes.placeholder, T && (T = T.nodeValue, T && d(w, U.type) && s(U));var X = setInterval(function () {
	      for (var a = 0, b = N.length + O.length; b > a; a++) U = a < N.length ? N[a] : O[a - N.length], T = U.attributes.placeholder, T ? (T = T.nodeValue, T && d(w, U.type) && (U.getAttribute(F) || s(U), (T !== U.getAttribute(B) || "password" === U.type && !U.getAttribute(D)) && ("password" === U.type && !U.getAttribute(D) && g(U, "text") && U.setAttribute(D, "password"), U.value === U.getAttribute(B) && (U.value = T), U.setAttribute(B, T)))) : U.getAttribute(C) && (k(U), U.removeAttribute(B));Q || clearInterval(X);
	    }, J);e(a, "beforeunload", function () {
	      M.disable();
	    });
	  }
	})(undefined);

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	  'use strict';
	  var h = !!document.addEventListener;function k(a, b) {
	    h ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
	  }function w(a) {
	    document.body ? a() : h ? document.addEventListener("DOMContentLoaded", a) : document.onreadystatechange = function () {
	      "interactive" == document.readyState && a();
	    };
	  };function x(a) {
	    this.a = document.createElement("div");this.a.setAttribute("aria-hidden", "true");this.a.appendChild(document.createTextNode(a));this.b = document.createElement("span");this.c = document.createElement("span");this.h = document.createElement("span");this.f = document.createElement("span");this.g = -1;this.b.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
	    this.f.style.cssText = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c);
	  }
	  function y(a, b) {
	    a.a.style.cssText = "min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + b + ";";
	  }function z(a) {
	    var b = a.a.offsetWidth,
	        c = b + 100;a.f.style.width = c + "px";a.c.scrollLeft = c;a.b.scrollLeft = a.b.scrollWidth + 100;return a.g !== b ? (a.g = b, !0) : !1;
	  }function A(a, b) {
	    function c() {
	      var a = l;z(a) && null !== a.a.parentNode && b(a.g);
	    }var l = a;k(a.b, c);k(a.c, c);z(a);
	  };function B(a, b) {
	    var c = b || {};this.family = a;this.style = c.style || "normal";this.weight = c.weight || "normal";this.stretch = c.stretch || "normal";
	  }var C = null,
	      D = null,
	      H = !!window.FontFace;function I() {
	    if (null === D) {
	      var a = document.createElement("div");try {
	        a.style.font = "condensed 100px sans-serif";
	      } catch (b) {}D = "" !== a.style.font;
	    }return D;
	  }function J(a, b) {
	    return [a.style, a.weight, I() ? a.stretch : "", "100px", b].join(" ");
	  }
	  B.prototype.a = function (a, b) {
	    var c = this,
	        l = a || "BESbswy",
	        E = b || 3E3,
	        F = new Date().getTime();return new Promise(function (a, b) {
	      if (H) {
	        var q = function q() {
	          new Date().getTime() - F >= E ? b(c) : document.fonts.load(J(c, c.family), l).then(function (b) {
	            1 <= b.length ? a(c) : setTimeout(q, 25);
	          }, function () {
	            b(c);
	          });
	        };q();
	      } else w(function () {
	        function r() {
	          var b;if (b = -1 != e && -1 != f || -1 != e && -1 != g || -1 != f && -1 != g) (b = e != f && e != g && f != g) || (null === C && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), C = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = C && (e == t && f == t && g == t || e == u && f == u && g == u || e == v && f == v && g == v)), b = !b;b && (null !== d.parentNode && d.parentNode.removeChild(d), clearTimeout(G), a(c));
	        }function q() {
	          if (new Date().getTime() - F >= E) null !== d.parentNode && d.parentNode.removeChild(d), b(c);else {
	            var a = document.hidden;if (!0 === a || void 0 === a) e = m.a.offsetWidth, f = n.a.offsetWidth, g = p.a.offsetWidth, r();G = setTimeout(q, 50);
	          }
	        }var m = new x(l),
	            n = new x(l),
	            p = new x(l),
	            e = -1,
	            f = -1,
	            g = -1,
	            t = -1,
	            u = -1,
	            v = -1,
	            d = document.createElement("div"),
	            G = 0;d.dir = "ltr";y(m, J(c, "sans-serif"));y(n, J(c, "serif"));y(p, J(c, "monospace"));d.appendChild(m.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);t = m.a.offsetWidth;u = n.a.offsetWidth;v = p.a.offsetWidth;q();A(m, function (a) {
	          e = a;r();
	        });y(m, J(c, '"' + c.family + '",sans-serif'));A(n, function (a) {
	          f = a;r();
	        });y(n, J(c, '"' + c.family + '",serif'));A(p, function (a) {
	          g = a;r();
	        });y(p, J(c, '"' + c.family + '",monospace'));
	      });
	    });
	  };window.FontFaceObserver = B;window.FontFaceObserver.prototype.check = B.prototype.a;"undefined" !== typeof module && (module.exports = window.FontFaceObserver);
	})();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var stores = {
	    local: __webpack_require__(11),
	    session: __webpack_require__(12),
	    cookie: __webpack_require__(13)
	};
	
	var Storage = (function () {
	    /**
	     * @constructor
	     * @param {string} type The store backend to use
	     * @param {boolean} [silent=false] Whether to throw exceptions or fail silently returning false
	     */
	
	    function Storage(type) {
	        var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        var _ref$silent = _ref.silent;
	        var silent = _ref$silent === undefined ? false : _ref$silent;
	
	        _classCallCheck(this, Storage);
	
	        if (!(type in stores)) {
	            this.fail('Storage: Unsupported type ' + type);
	        }
	
	        this.silent = !!silent;
	        this.store = new stores[type]();
	    }
	
	    /**
	     * Gets the stored value for a specified key
	     * @param {string} key The key to look up
	     * @param defaultValue Return this if no value has been found
	     * @throws {Error} If not silent
	     * @returns {string} The stored value or defaultValue
	     */
	
	    _createClass(Storage, [{
	        key: 'get',
	        value: function get(key) {
	            var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	            try {
	                var result = this.store.get(key);
	
	                if (null === result) {
	                    return defaultValue;
	                }
	                return result;
	            } catch (e) {
	                return this.fail(e);
	            }
	        }
	
	        /**
	         * Writes a value to the store under the specified key
	         * @param {string} key The key to use when storing
	         * @param {string} value The value to store
	         * @param {object} [options] A map of options. See the respective backends.
	         * @throws {Error} If not silent
	         * @returns {Storage|boolean} If silent, returns false on error. Returns this on success.
	         */
	
	    }, {
	        key: 'set',
	        value: function set(key, value, options) {
	            try {
	                this.store.set(key, value, options);
	                return this;
	            } catch (e) {
	                return this.fail(e);
	            }
	        }
	
	        /**
	         * Checks whether the store knows about the specified key
	         * @param {string} key The key to check for existance
	         * @throws {Error} If not silent
	         * @returns {boolean} If silent, returns false on error (!!)
	         */
	
	    }, {
	        key: 'has',
	        value: function has(key) {
	            try {
	                return this.store.has(key);
	            } catch (e) {
	                return this.fail(e);
	            }
	        }
	
	        /**
	         * Deletes the specified key and its value from the store
	         * @param {string} key The key to delete
	         * @returns {Storage|boolean} If silent, returns false on error
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            try {
	                this.store.remove(key);
	                return this;
	            } catch (e) {
	                return this.fail(e);
	            }
	        }
	
	        /**
	         * Wrapper for error handling
	         * @private
	         * @param {Error|string} reason What is happening?
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'fail',
	        value: function fail(reason) {
	            if (this.silent) {
	                return false;
	            }
	
	            if (!reason instanceof Error) {
	                reason = new Error(reason);
	            }
	
	            throw reason;
	        }
	    }]);
	
	    return Storage;
	})();
	
	module.exports = Storage;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = (function () {
	    function LocalStore() {
	        _classCallCheck(this, LocalStore);
	    }
	
	    _createClass(LocalStore, [{
	        key: "get",
	        value: function get(key) {
	            return localStorage.getItem(key);
	        }
	    }, {
	        key: "set",
	        value: function set(key, value) {
	            localStorage.setItem(key, value);
	        }
	    }, {
	        key: "has",
	        value: function has(key) {
	            return null !== localStorage.getItem(key);
	        }
	    }, {
	        key: "remove",
	        value: function remove(key) {
	            localStorage.removeItem(key);
	        }
	    }]);
	
	    return LocalStore;
	})();

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = (function () {
	    function SessionStore() {
	        _classCallCheck(this, SessionStore);
	    }
	
	    _createClass(SessionStore, [{
	        key: "get",
	        value: function get(key) {
	            return sessionStorage.getItem(key);
	        }
	    }, {
	        key: "set",
	        value: function set(key, value) {
	            sessionStorage.setItem(key, value);
	        }
	    }, {
	        key: "has",
	        value: function has(key) {
	            return null !== sessionStorage.getItem(key);
	        }
	    }, {
	        key: "remove",
	        value: function remove(key) {
	            sessionStorage.removeItem(key);
	        }
	    }]);
	
	    return SessionStore;
	})();

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = (function () {
	    function CookieStore() {
	        _classCallCheck(this, CookieStore);
	    }
	
	    _createClass(CookieStore, [{
	        key: "get",
	        value: function get(key) {
	            var matchedCookie = this.matchSingleCookie(document.cookie, key);
	
	            if (matchedCookie instanceof Array && matchedCookie[1] !== undefined) {
	                try {
	                    return decodeURIComponent(matchedCookie[1]);
	                } catch (e) {
	                    return matchedCookie[1];
	                }
	            }
	
	            return null;
	        }
	    }, {
	        key: "set",
	        value: function set(key, value) {
	            var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            var _ref$expires = _ref.expires;
	            var expires = _ref$expires === undefined ? "Fri, 31 Dec 9999 23:59:59 GMT" : _ref$expires;
	            var _ref$path = _ref.path;
	            var path = _ref$path === undefined ? "/" : _ref$path;
	
	            // support expires in seconds
	            if (!isNaN(parseFloat(expires)) && isFinite(expires)) {
	                expires = new Date(Date.now() + parseInt(expires) * 1000).toUTCString();
	            }
	
	            // support expires as date-object
	            if (expires instanceof Date) {
	                expires = expires.toUTCString();
	            }
	
	            document.cookie = [encodeURIComponent(key) + "=" + encodeURIComponent(value), "expires=" + expires, "path=" + path].join("; ");
	        }
	    }, {
	        key: "has",
	        value: function has(key) {
	            return null !== this.get(key);
	        }
	    }, {
	        key: "remove",
	        value: function remove(key) {
	            this.set(key, "", "Thu, 01 Jan 1970 00:00:00 GMT");
	        }
	    }, {
	        key: "matchSingleCookie",
	        value: function matchSingleCookie(cookies, key) {
	            var saneKey = encodeURIComponent(key).replace(/[-\.+\*]/g, "$&");
	            var regExp = new RegExp("(?:(?:^|.*;)s*" + saneKey + "s*=s*([^;]*).*$)|^.*$");
	            return cookies.match(regExp);
	        }
	    }]);
	
	    return CookieStore;
	})();

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	var tagName = 'custom-dropdown';
	
	try {
	    document.registerElement(tagName, {
	        prototype: Object.create(HTMLElement.prototype, {
	            createdCallback: { value: createdCallback },
	            attachedCallback: { value: attachedCallback }
	        })
	    });
	} catch (e) {
	    if (window && window.console) {
	        window.console.warn('Failed to register CustomElement "' + tagName + '".', e);
	    }
	}
	
	function createdCallback() {
	    var el = $(this);
	    var titleElement = el.find('p');
	    var defaultTitle = titleElement.text();
	
	    el.removeClass('sc-open');
	    el.on('touchstart, mousedown', function (e) {
	        e.stopPropagation();
	    });
	
	    if (null === el.attr('checkboxgroup')) {
	        return;
	    }
	
	    var checkboxes = el.find('[type=checkbox]').addClass('sc-input');
	    var updateCaption = function updateCaption() {
	        var box;
	        var checkboxes = el.find('[type=checkbox]:checked');
	        var texts = [];
	        checkboxes.filter(":checked").forEach(function (element) {
	            texts.push(element.nextElementSibling.innerHTML);
	        });
	
	        var title = texts.join(', ') || defaultTitle;
	        titleElement.html(title);
	    };
	
	    el.on('change', updateCaption);
	    updateCaption();
	}
	
	function attachedCallback() {
	    var el = this;
	
	    el.querySelector('p').addEventListener('mousedown', function (e) {
	        closeAllDropdowns(el);
	        el.classList.toggle('sc-open');
	    });
	
	    attachEventListeners();
	}
	
	function closeAllDropdowns(exceptThisOne) {
	    var allCds = document.querySelectorAll(tagName);
	    for (var i = 0, l = allCds.length; i < l; i++) {
	        if (allCds[i] !== exceptThisOne) {
	            allCds[i].classList.remove('sc-open');
	        }
	    }
	}
	
	function attachEventListeners() {
	    // this should only be done at most once
	    // when the first of this element gets attached
	    document.addEventListener('mousedown', closeAllDropdowns);
	    attachEventListeners = function () {}; // so that we only attach at most once
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Navigation = (function () {
	    _createClass(Navigation, [{
	        key: 'KEY_DOWN',
	        get: function get() {
	            return 40;
	        }
	    }, {
	        key: 'KEY_UP',
	        get: function get() {
	            return 38;
	        }
	    }, {
	        key: 'KEY_LEFT',
	        get: function get() {
	            return 37;
	        }
	    }, {
	        key: 'KEY_RIGHT',
	        get: function get() {
	            return 39;
	        }
	    }, {
	        key: 'KEY_TAB',
	        get: function get() {
	            return 9;
	        }
	    }, {
	        key: 'KEY_RETURN',
	        get: function get() {
	            return 13;
	        }
	    }, {
	        key: 'KEY_ESCAPE',
	        get: function get() {
	            return 27;
	        }
	    }]);
	
	    function Navigation(root) {
	        _classCallCheck(this, Navigation);
	
	        this.document = $(document);
	        this.rootElement = $(root);
	        this.menuBtn = $('.sc-btn-mobile-menu', this.rootElement);
	        this.activeItem = null;
	        this.activeMenu = null;
	        this.menuIsOpen = false;
	        this.menus = $('nav > ul > li', this.rootElement);
	        this.items = [];
	        this.initEvents();
	    }
	
	    _createClass(Navigation, [{
	        key: 'initEvents',
	        value: function initEvents() {
	            this.rootElement.on('click', 'ul>li', $.proxy(this.toggleMenu, this));
	            this.menuBtn.on('click', $.proxy(this.toggleMenu, this));
	            this.document.on('click', $.proxy(this.escapeMenu, this));
	            this.document.on('keydown', $.proxy(this.onKeyDown, this));
	            this.document.on('keyup', $.proxy(this.onKeyUp, this));
	        }
	    }, {
	        key: 'toggleMenu',
	        value: function toggleMenu(event) {
	            event.stopPropagation();
	            var clickedMenu = $(event.target).closest('li');
	
	            if ($(event.target).closest('li').length === 0) {
	                clickedMenu = this.rootElement;
	            }
	
	            if (this.activeMenu && this.menuIsOpen) {
	
	                if (this.activeMenu[0] == clickedMenu[0]) {
	                    this.closeMenu();
	                    return;
	                } else if (this.rootElement[0] == clickedMenu[0]) {
	                    this.closeMenu(this.rootElement.find('.open').add(this.rootElement));
	                    return;
	                } else if (this.activeMenu[0] != this.rootElement[0]) {
	                    this.closeMenu();
	                }
	            }
	
	            this.setActiveMenu(clickedMenu);
	            this.openMenu();
	        }
	    }, {
	        key: 'setActiveMenu',
	        value: function setActiveMenu(element) {
	            this.activeMenu = $(element);
	        }
	    }, {
	        key: 'closeMenu',
	        value: function closeMenu(menu) {
	            var closeTarget = menu || this.activeMenu;
	            closeTarget.removeClass('open');
	            this.unsetInactiveMenuItems();
	            this.items = [];
	            this.menuIsOpen = false;
	        }
	    }, {
	        key: 'openMenu',
	        value: function openMenu() {
	            this.activeMenu.addClass('open');
	            this.items = this.activeMenu.find('ul:not(.submenu) > li:not(.subheadline)');
	            this.menuIsOpen = true;
	        }
	    }, {
	        key: 'escapeMenu',
	        value: function escapeMenu(event) {
	            this.activeMenu && this.menuIsOpen && this.closeMenu();
	        }
	    }, {
	        key: 'isNavigationKey',
	        value: function isNavigationKey(keyCode) {
	            return [this.KEY_DOWN, this.KEY_LEFT, this.KEY_RIGHT, this.KEY_UP, this.KEY_TAB].indexOf(keyCode) > -1;
	        }
	
	        // Prevent scrolling
	
	    }, {
	        key: 'onKeyDown',
	        value: function onKeyDown(event) {
	            var keyCode = event.which;
	
	            if (this.menuIsOpen && this.isNavigationKey(keyCode)) {
	                event.preventDefault();
	                return false;
	            }
	
	            return true;
	        }
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(event) {
	            var keyCode = event.which;
	
	            switch (keyCode) {
	                case this.KEY_ESCAPE:
	                    this.escapeMenu();
	                    break;
	                case this.KEY_DOWN:
	                    this.handleJumpDown();
	                    break;
	                case this.KEY_UP:
	                    this.handleJumpUp();
	                    break;
	                case this.KEY_TAB:
	                    !!event.shiftKey ? this.handleJumpLeft() : this.handleJumpRight();
	                    break;
	                case this.KEY_RIGHT:
	                    this.handleJumpRight();
	                    break;
	                case this.KEY_LEFT:
	                    this.handleJumpLeft();
	                    break;
	            }
	
	            event.preventDefault();
	            return false;
	        }
	    }, {
	        key: 'handleJumpDown',
	        value: function handleJumpDown() {
	            // Expand the menu if closed
	            if (false === this.menuIsOpen) {
	                this.openMenu();
	                this.selectFirstItem();
	                return;
	            }
	            var position = this.items.indexOf(this.activeItem);
	            this.items.length - 1 > position && position++;
	            this.setActiveMenuItem(this.items[position]);
	        }
	    }, {
	        key: 'handleJumpUp',
	        value: function handleJumpUp() {
	            if (false === this.menuIsOpen) {
	                return;
	            }
	            var position = this.items.indexOf(this.activeItem);
	            0 === position && this.closeMenu();
	            0 < position && position--;
	            this.setActiveMenuItem(this.items[position]);
	        }
	    }, {
	        key: 'handleJumpRight',
	        value: function handleJumpRight() {
	            var current = this.menus.indexOf(this.activeMenu[0]);
	            var newMenuIdx = this.menus.length - 1 > current ? newMenuIdx = current + 1 : 0;
	            this.selectMenu(this.menus[newMenuIdx]);
	        }
	    }, {
	        key: 'handleJumpLeft',
	        value: function handleJumpLeft() {
	            var current = this.menus.indexOf(this.activeMenu[0]);
	            var newMenuIdx = 0 < current ? current - 1 : this.menus.length - 1;
	            this.selectMenu(this.menus[newMenuIdx]);
	        }
	    }, {
	        key: 'setActiveMenuItem',
	        value: function setActiveMenuItem(element) {
	            this.unsetInactiveMenuItems();
	            element = $(element);
	            !element.hasClass('active-item') && element.addClass('active-item');
	            this.activeItem = element[0];
	            $('a', element).focus();
	        }
	    }, {
	        key: 'unsetInactiveMenuItems',
	        value: function unsetInactiveMenuItems() {
	            this.rootElement.find('.active-item').removeClass('active-item');
	            this.activeItem = null;
	        }
	    }, {
	        key: 'selectFirstItem',
	        value: function selectFirstItem() {
	            this.setActiveMenuItem(this.items[0]);
	        }
	    }, {
	        key: 'selectMenu',
	        value: function selectMenu(element) {
	            if ('object' !== (typeof element === 'undefined' ? 'undefined' : _typeof(element))) {
	                return;
	            }
	            this.menuIsOpen && this.closeMenu();
	            this.setActiveMenu(element);
	            this.openMenu();
	            this.selectFirstItem();
	        }
	    }]);
	
	    return Navigation;
	})();
	
	Zepto(function ($) {
	    var navigationElement = document.querySelector('.sc-navigation'),
	        navigation = null;
	    if (navigationElement) {
	        navigation = new Navigation(navigationElement);
	    }
	    module.exports = navigation;
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
	    Array.prototype.forEach.call(document.querySelectorAll('[data-toggle="arrow"]'), function (arrow) {
	        var arrowEl = $(arrow);
	        $(arrowEl.data('target')).on('click', function () {
	            return arrowEl.toggleClass('open');
	        });
	    });
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
	    function handleStickies() {
	        var scrollPos = $(window).scrollTop();
	
	        var stickyButtons = $('[data-sticky]');
	        Array.prototype.forEach.call(stickyButtons, function (stickyButton) {
	            var stickyEl = $(stickyButton);
	            var id = stickyEl.attr('data-sticky');
	            var undockEl = $('[data-sticky-undock="' + id + '"]');
	            var dockEl = $('[data-sticky-dock="' + id + '"]');
	
	            // if there is no dock and undock element leave sticky class
	            if (undockEl.length === 0 && dockEl.length === 0) {
	                stickyEl.addClass('sticky');
	            }
	
	            // get undock position
	            var undockPos = 0;
	            if (undockEl.length > 0) {
	                undockPos = undockEl.offset().top;
	            }
	
	            // get dock position
	            var dockPos = $(document).height();
	            if (dockEl.length > 0) {
	                dockPos = dockEl.offset().top;
	            }
	
	            // if element is within scrolling area, scroll, else don't
	            if (scrollPos + $(window).height() > undockPos && scrollPos < dockPos - $(window).height() + stickyEl.height() * 1.5) {
	                stickyEl.addClass('sc-sticky');
	            } else {
	                stickyEl.removeClass('sc-sticky');
	            }
	        });
	    }
	
	    handleStickies();
	
	    window.addEventListener("deviceorientation", function () {
	        handleStickies();
	    });
	
	    window.addEventListener("resize", function () {
	        handleStickies();
	    });
	
	    window.addEventListener("pageSizeChanged", function () {
	        handleStickies();
	    });
	
	    document.addEventListener('scroll', function () {
	        handleStickies();
	    });
	
	    document.addEventListener('collapse', function () {
	        handleStickies();
	    });
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
	    Array.prototype.forEach.call(document.querySelectorAll('[data-toggle="sc-collapse"]'), function (collapsable) {
	        collapsable.onclick = function () {
	            var targetAttr = collapsable.getAttribute('data-target');
	            var targets = document.querySelectorAll(targetAttr);
	
	            Array.prototype.forEach.call(targets, function (target) {
	                target.classList.toggle('in');
	            });
	
	            var event = new CustomEvent('collapse', {
	                bubbles: true
	            });
	            document.dispatchEvent(event);
	        };
	    });
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Notification = (function () {
	    function Notification(element) {
	        _classCallCheck(this, Notification);
	
	        this.element = element;
	        this._body = '';
	        this.body = this.element.innerHTML;
	    }
	
	    _createClass(Notification, [{
	        key: 'hide',
	        value: function hide() {
	            this.element.classList.remove('show');
	        }
	
	        /**
	         * Create the html structure of the notification element
	         */
	
	    }, {
	        key: 'create',
	        value: function create() {
	            this.element.innerHTML = '';
	            var container = this.createElement('div', this.element, '', ['sc-content-container', 'icon']);
	            this.createElement('h3', container, this.title, ['sc-font-m', 'sc-font-bold']);
	            this.createElement('div', container, this.body);
	        }
	
	        /**
	         * @param {String} attribute
	         * @param {String} value
	         */
	
	    }, {
	        key: 'update',
	        value: function update(attribute, value) {
	            if ('class' === attribute && 'show' === value && this.timeout) {
	                window.setTimeout(this.hide.bind(this), this.timeout);
	            }
	        }
	
	        /**
	         * @param {String} name
	         * @param {String} body
	         * @param {Array} classes
	         * @param {HTMLElement} parent
	         * @returns {Element}
	         */
	
	    }, {
	        key: 'createElement',
	        value: function createElement(name, parent, body) {
	            var classes = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];
	
	            var element = document.createElement(name);
	
	            classes.forEach(function (cls) {
	                element.classList.add(cls);
	            });
	            element.innerHTML = body;
	
	            parent.appendChild(element);
	
	            return element;
	        }
	    }, {
	        key: 'title',
	        get: function get() {
	            return this.element.getAttribute('title');
	        }
	    }, {
	        key: 'timeout',
	        get: function get() {
	            return this.element.getAttribute('timeout');
	        }
	    }, {
	        key: 'body',
	        get: function get() {
	            return this._body;
	        },
	        set: function set(value) {
	            this._body = value;
	        }
	    }]);
	
	    return Notification;
	})();
	
	function onElementCreated() {
	    this.notification = new Notification(this);
	    this.notification.create();
	}
	
	function onElementChanged(attributeName, previousValue, value) {
	    this.notification.update(attributeName, value);
	}
	
	var tagName = 'as24-notification';
	
	try {
	    module.exports = document.registerElement(tagName, {
	        prototype: Object.create(HTMLElement.prototype, {
	            createdCallback: { value: onElementCreated },
	            attributeChangedCallback: { value: onElementChanged }
	        })
	    });
	} catch (e) {
	    if (window && window.console) {
	        window.console.warn('Failed to register CustomElement "' + tagName + '".', e);
	    }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=showcar-ui.js.map