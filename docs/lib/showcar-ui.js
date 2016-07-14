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
	
	if (!window.jQuery) window.$ = window.Zepto = __webpack_require__(44).$;
	
	__webpack_require__(53)();
	
	var warn = function warn(msg) {
	    if (!window || !window.console) {
	        return;
	    }
	    window.console.warn(msg);
	};
	
	if (typeof Object.assign !== 'function') {
	    __webpack_require__(22)();
	}
	
	window.Storage = __webpack_require__(28);
	window.Pager = __webpack_require__(52);
	
	__webpack_require__(27);
	
	var ctor = document.createElement('as24-tracking').constructor;
	
	if (ctor === HTMLElement || ctor === HTMLUnknownElement) {
	    // only requiring showcar-tracking when it was not already included before
	    __webpack_require__(41);
	}
	
	__webpack_require__(46);
	
	$(function (_) {
	    __webpack_require__(47);
	    __webpack_require__(54)();
	    __webpack_require__(57)();
	    __webpack_require__(45)();
	    __webpack_require__(55);
	    __webpack_require__(56);
	});
	
	try {
	    document.registerElement('as24-carousel-item', { prototype: Object.create(HTMLElement.prototype) });
	} catch (e) {
	    if (window && window.console) {
	        window.console.warn('Failed to register CustomElement "as24-carousel".', e);
	    }
	}
	
	if (!window.notification) {
	    window.notification = __webpack_require__(48);
	} else {
	    warn('window.notification is already registered.');
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(18);
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
	var equalsConstructorPrototype = function equalsConstructorPrototype(o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = function () {
		/* global window */
		if (typeof window === 'undefined') {
			return false;
		}
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && _typeof(window[k]) === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}();
	var equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};
	
	var keysShim = function keys(object) {
		var isObject = object !== null && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];
	
		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}
	
		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}
	
		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}
	
		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	
			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
	
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2);
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};
	
	module.exports = keysShim;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var doc = document;
	
	function readCookie(name, options) {
	    if (!name) {
	        return null;
	    }
	
	    var decodingFunction = options && options.decodingFunction || decodeURIComponent;
	
	    return decodingFunction(doc.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	}
	
	function setCookie(name, value, options) {
	    if (!name || /^(?:expires|max\-age|path|domain|secure)$/i.test(name)) {
	        return false;
	    }
	
	    var expiresString = "";
	
	    if (options.expires) {
	        var date = new Date();
	        date.setTime(+date + options.expires);
	        expiresString = "; expires=" + date.toGMTString();
	    }
	
	    options.encodingFunction = options.encodingFunction || encodeURIComponent;
	
	    document.cookie = encodeURIComponent(name) + "=" + options.encodingFunction(value) + expiresString + (options.domain ? "; domain=" + options.domain : "") + (options.path ? "; path=" + options.path : "") + (options.secure ? "; secure" : "");
	
	    return true;
	}
	
	function removeCookie(name, options) {
	    if (hasCookie(name)) {
	        return false;
	    }
	    document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (name ? "; domain=" + options.domain : "") + (options.path ? "; path=" + options.path : "");
	    return true;
	}
	
	function hasCookie(name) {
	    if (!name) {
	        return false;
	    }
	    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
	}
	
	module.exports = {
	    read: readCookie,
	    set: setCookie,
	    remove: removeCookie
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	var dataLayer = window.dataLayer = window.dataLayer || [];
	
	module.exports = {
	    loadContainer: function loadContainer(containerId) {
	        var gtmAlreadyLoadedClassName = 'gtm-main-container-load-initiated';
	        var alreadyInitiatedMainGtmContainerLoaded = document.documentElement.className.indexOf(gtmAlreadyLoadedClassName) >= 0;
	
	        if (alreadyInitiatedMainGtmContainerLoaded) {
	            // preventing duplicated load of main GTM container
	            return;
	        }
	
	        document.documentElement.className += ' ' + gtmAlreadyLoadedClassName;
	
	        (function (w, d, s, l, i) {
	            w[l] = w[l] || [];w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });var f = d.getElementsByTagName(s)[0],
	                j = d.createElement(s),
	                dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);
	        })(window, document, 'script', 'dataLayer', containerId);
	    },
	
	    push: function push() {
	        if (!arguments.length) {
	            return;
	        }
	
	        var args = [].slice.call(arguments);
	        args.map(function (data) {
	            for (var key in data) {
	                data[key] = toLower(data[key]);
	            }
	
	            return data;
	        });
	
	        dataLayer.push.apply(dataLayer, args);
	    }
	};
	
	function toLower(val) {
	    return val && ('' + val).toLowerCase();
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(8);
	
	module.exports = function (obj) {
	    if (!isObject(obj)) return obj;
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	        source = arguments[i];
	        for (prop in source) {
	            obj[prop] = source[prop];
	        }
	    }
	    return obj;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isNumber = __webpack_require__(7);
	
	module.exports = function indexOf(arr, item, from) {
	    var i = 0;
	    var l = arr && arr.length;
	    if (isNumber(from)) {
	        i = from < 0 ? Math.max(0, l + from) : from;
	    }
	    for (; i < l; i++) {
	        if (arr[i] === item) return i;
	    }
	    return -1;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var toString = Object.prototype.toString;
	
	module.exports = function isFunction(obj) {
	    return toString.call(obj) === '[object Date]';
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	var toString = Object.prototype.toString;
	
	module.exports = function isNumber(obj) {
	    return toString.call(obj) === '[object Number]';
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	module.exports = function isObject(obj) {
	    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    return !!obj && (type === 'function' || type === 'object');
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var extend = __webpack_require__(4);
	
	module.exports = function merge() {
	    var args = [].slice.call(arguments);
	    args.unshift({});
	    return extend.apply(this, args);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	/*! https://mths.be/array-from v0.2.0 by @mathias */
	(function () {
		'use strict';
	
		var defineProperty = function () {
			// IE 8 only supports `Object.defineProperty` on DOM elements.
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch (error) {}
			return result || function put(object, key, descriptor) {
				object[key] = descriptor.value;
			};
		}();
		var toStr = Object.prototype.toString;
		var isCallable = function isCallable(fn) {
			// In a perfect world, the `typeof` check would be sufficient. However,
			// in Chrome 1–12, `typeof /x/ == 'object'`, and in IE 6–8
			// `typeof alert == 'object'` and similar for other host objects.
			return typeof fn == 'function' || toStr.call(fn) == '[object Function]';
		};
		var toInteger = function toInteger(value) {
			var number = Number(value);
			if (isNaN(number)) {
				return 0;
			}
			if (number == 0 || !isFinite(number)) {
				return number;
			}
			return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
		};
		var maxSafeInteger = Math.pow(2, 53) - 1;
		var toLength = function toLength(value) {
			var len = toInteger(value);
			return Math.min(Math.max(len, 0), maxSafeInteger);
		};
		var from = function from(arrayLike) {
			var C = this;
			if (arrayLike == null) {
				throw new TypeError('`Array.from` requires an array-like object, not `null` or `undefined`');
			}
			var items = Object(arrayLike);
			var mapping = arguments.length > 1;
	
			var mapFn, T;
			if (arguments.length > 1) {
				mapFn = arguments[1];
				if (!isCallable(mapFn)) {
					throw new TypeError('When provided, the second argument to `Array.from` must be a function');
				}
				if (arguments.length > 2) {
					T = arguments[2];
				}
			}
	
			var len = toLength(items.length);
			var A = isCallable(C) ? Object(new C(len)) : new Array(len);
			var k = 0;
			var kValue, mappedValue;
			while (k < len) {
				kValue = items[k];
				if (mapFn) {
					mappedValue = typeof T == 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
				} else {
					mappedValue = kValue;
				}
				defineProperty(A, k, {
					'value': mappedValue,
					'configurable': true,
					'enumerable': true,
					'writable': true
				});
				++k;
			}
			A.length = len;
			return A;
		};
		defineProperty(Array, 'from', {
			'value': from,
			'configurable': true,
			'writable': true
		});
	})();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (!Array.from) {
	  __webpack_require__(10);
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var keys = __webpack_require__(1);
	var foreach = __webpack_require__(15);
	var hasSymbols = typeof Symbol === 'function' && _typeof(Symbol()) === 'symbol';
	
	var toStr = Object.prototype.toString;
	
	var isFunction = function isFunction(fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};
	
	var arePropertyDescriptorsSupported = function arePropertyDescriptorsSupported() {
		var obj = {};
		try {
			Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
			/* eslint-disable no-unused-vars, no-restricted-syntax */
			for (var _ in obj) {
				return false;
			}
			/* eslint-enable no-unused-vars, no-restricted-syntax */
			return obj.x === obj;
		} catch (e) {
			/* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
	
	var defineProperty = function defineProperty(object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			Object.defineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};
	
	var defineProperties = function defineProperties(object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = props.concat(Object.getOwnPropertySymbols(map));
		}
		foreach(props, function (name) {
			defineProperty(object, name, map[name], predicates[name]);
		});
	};
	
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	
	module.exports = defineProperties;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	/*! (C) WebReflection Mit Style License */
	(function (e, t, n, r) {
	  "use strict";
	  function rt(e, t) {
	    for (var n = 0, r = e.length; n < r; n++) {
	      vt(e[n], t);
	    }
	  }function it(e) {
	    for (var t = 0, n = e.length, r; t < n; t++) {
	      r = e[t], nt(r, b[ot(r)]);
	    }
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
	    for (var e, t = 0, n = F.length; t < n; t++) {
	      e = F[t], E.contains(e) || (n--, F.splice(t--, 1), vt(e, o));
	    }
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
	    for (var t = this.length; t-- && this[t] !== e;) {}return t;
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
	  } : L && k ? function () {
	    function e(e, t) {
	      for (var n, r = L(t), i = 0, s = r.length; i < s; i++) {
	        n = r[i], T.call(e, n) || C(e, n, k(t, n));
	      }
	    }return function (t, n) {
	      do {
	        e(t, n);
	      } while ((n = A(n)) && !N.call(n, t));return t;
	    };
	  }() : function (e, t) {
	    for (var n in t) {
	      e[n] = t[n];
	    }return e;
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
	      nt;O || M ? (tt = function tt(e, t) {
	    N.call(t, e) || ht(e, t);
	  }, nt = ht) : (tt = function tt(e, t) {
	    e[i] || (e[i] = n(!0), ht(e, t));
	  }, nt = tt), B ? (J = !1, function () {
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
	  }()) : P || (E.addEventListener(c, W), E.setAttribute(i, 1), E.removeAttribute(i), J && (G = function G(e) {
	    var t = this,
	        n,
	        r,
	        s;if (t === e.target) {
	      n = t[i], t[i] = r = Z(t);for (s in r) {
	        if (!(s in n)) return Y(0, t, s, n[s], r[s], a);if (r[s] !== n[s]) return Y(1, t, s, n[s], r[s], f);
	      }for (s in n) {
	        if (!(s in r)) return Y(2, t, s, n[s], r[s], l);
	      }
	    }
	  }, Y = function Y(e, t, n, r, i, s) {
	    var o = { attrChange: e, currentTarget: t, attrName: n, prevValue: r, newValue: i };o[s] = e, at(o);
	  }, Z = function Z(e) {
	    for (var t, n, r = {}, i = e.attributes, s = 0, o = i.length; s < o; s++) {
	      t = i[s], n = t.name, n !== "setAttribute" && (r[n] = t.value);
	    }return r;
	  })), t[r] = function (n, r) {
	    c = n.toUpperCase(), $ || ($ = !0, P ? (et = function (e, t) {
	      function n(e, t) {
	        for (var n = 0, r = e.length; n < r; t(e[n++])) {}
	      }return new P(function (r) {
	        for (var i, s, o, u = 0, a = r.length; u < a; u++) {
	          i = r[u], i.type === "childList" ? (n(i.addedNodes, e), n(i.removedNodes, t)) : (s = i.target, Q && s.attributeChangedCallback && i.attributeName !== "style" && (o = s.getAttribute(i.attributeName), o !== i.oldValue && s.attributeChangedCallback(i.attributeName, i.oldValue, o)));
	        }
	      });
	    }(st(s), st(o)), et.observe(t, { childList: !0, subtree: !0 })) : (X = [], V(function E() {
	      while (X.length) {
	        X.shift().call(null, X.shift());
	      }V(E);
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
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	Copyright (C) 2013-2015 by Andrea Giammarchi - @WebReflection
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	
	*/
	(function (window) {
	  'use strict';
	  /* jshint loopfunc: true, noempty: false*/
	  // http://www.w3.org/TR/dom/#element
	
	  function createDocumentFragment() {
	    return document.createDocumentFragment();
	  }
	
	  function createElement(nodeName) {
	    return document.createElement(nodeName);
	  }
	
	  function enoughArguments(length, name) {
	    if (!length) throw new Error('Failed to construct ' + name + ': 1 argument required, but only 0 present.');
	  }
	
	  function mutationMacro(nodes) {
	    if (nodes.length === 1) {
	      return textNodeIfString(nodes[0]);
	    }
	    for (var fragment = createDocumentFragment(), list = slice.call(nodes), i = 0; i < nodes.length; i++) {
	      fragment.appendChild(textNodeIfString(list[i]));
	    }
	    return fragment;
	  }
	
	  function textNodeIfString(node) {
	    return typeof node === 'string' ? document.createTextNode(node) : node;
	  }
	
	  for (var head, property, TemporaryPrototype, TemporaryTokenList, wrapVerifyToken, document = window.document, hOP = Object.prototype.hasOwnProperty, defineProperty = Object.defineProperty || function (object, property, descriptor) {
	    if (hOP.call(descriptor, 'value')) {
	      object[property] = descriptor.value;
	    } else {
	      if (hOP.call(descriptor, 'get')) object.__defineGetter__(property, descriptor.get);
	      if (hOP.call(descriptor, 'set')) object.__defineSetter__(property, descriptor.set);
	    }
	    return object;
	  }, indexOf = [].indexOf || function indexOf(value) {
	    var length = this.length;
	    while (length--) {
	      if (this[length] === value) {
	        break;
	      }
	    }
	    return length;
	  },
	  // http://www.w3.org/TR/domcore/#domtokenlist
	  verifyToken = function verifyToken(token) {
	    if (!token) {
	      throw 'SyntaxError';
	    } else if (spaces.test(token)) {
	      throw 'InvalidCharacterError';
	    }
	    return token;
	  }, DOMTokenList = function DOMTokenList(node) {
	    var noClassName = typeof node.className === 'undefined',
	        className = noClassName ? node.getAttribute('class') || '' : node.className,
	        isSVG = noClassName || (typeof className === 'undefined' ? 'undefined' : _typeof(className)) === 'object',
	        value = (isSVG ? noClassName ? className : className.baseVal : className).replace(trim, '');
	    if (value.length) {
	      properties.push.apply(this, value.split(spaces));
	    }
	    this._isSVG = isSVG;
	    this._ = node;
	  }, classListDescriptor = {
	    get: function get() {
	      return new DOMTokenList(this);
	    },
	    set: function set() {}
	  }, uid = 'dom4-tmp-'.concat(Math.random() * +new Date()).replace('.', '-'), trim = /^\s+|\s+$/g, spaces = /\s+/, SPACE = '\x20', CLASS_LIST = 'classList', toggle = function toggle(token, force) {
	    if (this.contains(token)) {
	      if (!force) {
	        // force is not true (either false or omitted)
	        this.remove(token);
	      }
	    } else if (force === undefined || force) {
	      force = true;
	      this.add(token);
	    }
	    return !!force;
	  }, DocumentFragmentPrototype = window.DocumentFragment && DocumentFragment.prototype, Node = window.Node, NodePrototype = (Node || Element).prototype, CharacterData = window.CharacterData || Node, CharacterDataPrototype = CharacterData && CharacterData.prototype, DocumentType = window.DocumentType, DocumentTypePrototype = DocumentType && DocumentType.prototype, ElementPrototype = (window.Element || Node || window.HTMLElement).prototype, HTMLSelectElement = window.HTMLSelectElement || createElement('select').constructor, selectRemove = HTMLSelectElement.prototype.remove, ShadowRoot = window.ShadowRoot, SVGElement = window.SVGElement,
	  // normalizes multiple ids as CSS query
	  idSpaceFinder = / /g, idSpaceReplacer = '\\ ', createQueryMethod = function createQueryMethod(methodName) {
	    var createArray = methodName === 'querySelectorAll';
	    return function (css) {
	      var a,
	          i,
	          id,
	          query,
	          nl,
	          selectors,
	          node = this.parentNode;
	      if (node) {
	        for (id = this.getAttribute('id') || uid, query = id === uid ? id : id.replace(idSpaceFinder, idSpaceReplacer), selectors = css.split(','), i = 0; i < selectors.length; i++) {
	          selectors[i] = '#' + query + ' ' + selectors[i];
	        }
	        css = selectors.join(',');
	      }
	      if (id === uid) this.setAttribute('id', id);
	      nl = (node || this)[methodName](css);
	      if (id === uid) this.removeAttribute('id');
	      // return a list
	      if (createArray) {
	        i = nl.length;
	        a = new Array(i);
	        while (i--) {
	          a[i] = nl[i];
	        }
	      }
	      // return node or null
	      else {
	          a = nl;
	        }
	      return a;
	    };
	  }, addQueryAndAll = function addQueryAndAll(where) {
	    if (!('query' in where)) {
	      where.query = ElementPrototype.query;
	    }
	    if (!('queryAll' in where)) {
	      where.queryAll = ElementPrototype.queryAll;
	    }
	  }, properties = ['matches', ElementPrototype.matchesSelector || ElementPrototype.webkitMatchesSelector || ElementPrototype.khtmlMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.msMatchesSelector || ElementPrototype.oMatchesSelector || function matches(selector) {
	    var parentNode = this.parentNode;
	    return !!parentNode && -1 < indexOf.call(parentNode.querySelectorAll(selector), this);
	  }, 'closest', function closest(selector) {
	    var parentNode = this,
	        matches;
	    while (
	    // document has no .matches
	    (matches = parentNode && parentNode.matches) && !parentNode.matches(selector)) {
	      parentNode = parentNode.parentNode;
	    }
	    return matches ? parentNode : null;
	  }, 'prepend', function prepend() {
	    var firstChild = this.firstChild,
	        node = mutationMacro(arguments);
	    if (firstChild) {
	      this.insertBefore(node, firstChild);
	    } else {
	      this.appendChild(node);
	    }
	  }, 'append', function append() {
	    this.appendChild(mutationMacro(arguments));
	  }, 'before', function before() {
	    var parentNode = this.parentNode;
	    if (parentNode) {
	      parentNode.insertBefore(mutationMacro(arguments), this);
	    }
	  }, 'after', function after() {
	    var parentNode = this.parentNode,
	        nextSibling = this.nextSibling,
	        node = mutationMacro(arguments);
	    if (parentNode) {
	      if (nextSibling) {
	        parentNode.insertBefore(node, nextSibling);
	      } else {
	        parentNode.appendChild(node);
	      }
	    }
	  },
	  // WARNING - DEPRECATED - use .replaceWith() instead
	  'replace', function replace() {
	    this.replaceWith.apply(this, arguments);
	  }, 'replaceWith', function replaceWith() {
	    var parentNode = this.parentNode;
	    if (parentNode) {
	      parentNode.replaceChild(mutationMacro(arguments), this);
	    }
	  }, 'remove', function remove() {
	    var parentNode = this.parentNode;
	    if (parentNode) {
	      parentNode.removeChild(this);
	    }
	  }, 'query', createQueryMethod('querySelector'), 'queryAll', createQueryMethod('querySelectorAll')], slice = properties.slice, i = properties.length; i; i -= 2) {
	    property = properties[i - 2];
	    if (!(property in ElementPrototype)) {
	      ElementPrototype[property] = properties[i - 1];
	    }
	    if (property === 'remove') {
	      // see https://github.com/WebReflection/dom4/issues/19
	      HTMLSelectElement.prototype[property] = function () {
	        return 0 < arguments.length ? selectRemove.apply(this, arguments) : ElementPrototype.remove.call(this);
	      };
	    }
	    // see https://github.com/WebReflection/dom4/issues/18
	    if (/^(?:before|after|replace|replaceWith|remove)$/.test(property)) {
	      if (CharacterData && !(property in CharacterDataPrototype)) {
	        CharacterDataPrototype[property] = properties[i - 1];
	      }
	      if (DocumentType && !(property in DocumentTypePrototype)) {
	        DocumentTypePrototype[property] = properties[i - 1];
	      }
	    }
	    // see https://github.com/WebReflection/dom4/pull/26
	    if (/^(?:append|prepend)$/.test(property)) {
	      if (DocumentFragmentPrototype) {
	        if (!(property in DocumentFragmentPrototype)) {
	          DocumentFragmentPrototype[property] = properties[i - 1];
	        }
	      } else {
	        try {
	          createDocumentFragment().constructor.prototype[property] = properties[i - 1];
	        } catch (o_O) {}
	      }
	    }
	  }
	
	  // bring query and queryAll to the document too
	  addQueryAndAll(document);
	
	  // brings query and queryAll to fragments as well
	  if (DocumentFragmentPrototype) {
	    addQueryAndAll(DocumentFragmentPrototype);
	  } else {
	    try {
	      addQueryAndAll(createDocumentFragment().constructor.prototype);
	    } catch (o_O) {}
	  }
	
	  // bring query and queryAll to the ShadowRoot too
	  if (ShadowRoot) {
	    addQueryAndAll(ShadowRoot.prototype);
	  }
	
	  // most likely an IE9 only issue
	  // see https://github.com/WebReflection/dom4/issues/6
	  if (!createElement('a').matches('a')) {
	    ElementPrototype[property] = function (matches) {
	      return function (selector) {
	        return matches.call(this.parentNode ? this : createDocumentFragment().appendChild(this), selector);
	      };
	    }(ElementPrototype[property]);
	  }
	
	  // used to fix both old webkit and SVG
	  DOMTokenList.prototype = {
	    length: 0,
	    add: function add() {
	      for (var j = 0, token; j < arguments.length; j++) {
	        token = arguments[j];
	        if (!this.contains(token)) {
	          properties.push.call(this, property);
	        }
	      }
	      if (this._isSVG) {
	        this._.setAttribute('class', '' + this);
	      } else {
	        this._.className = '' + this;
	      }
	    },
	    contains: function (indexOf) {
	      return function contains(token) {
	        i = indexOf.call(this, property = verifyToken(token));
	        return -1 < i;
	      };
	    }([].indexOf || function (token) {
	      i = this.length;
	      while (i-- && this[i] !== token) {}
	      return i;
	    }),
	    item: function item(i) {
	      return this[i] || null;
	    },
	    remove: function remove() {
	      for (var j = 0, token; j < arguments.length; j++) {
	        token = arguments[j];
	        if (this.contains(token)) {
	          properties.splice.call(this, i, 1);
	        }
	      }
	      if (this._isSVG) {
	        this._.setAttribute('class', '' + this);
	      } else {
	        this._.className = '' + this;
	      }
	    },
	    toggle: toggle,
	    toString: function toString() {
	      return properties.join.call(this, SPACE);
	    }
	  };
	
	  if (SVGElement && !(CLASS_LIST in SVGElement.prototype)) {
	    defineProperty(SVGElement.prototype, CLASS_LIST, classListDescriptor);
	  }
	
	  // http://www.w3.org/TR/dom/#domtokenlist
	  // iOS 5.1 has completely screwed this property
	  // classList in ElementPrototype is false
	  // but it's actually there as getter
	  if (!(CLASS_LIST in document.documentElement)) {
	    defineProperty(ElementPrototype, CLASS_LIST, classListDescriptor);
	  } else {
	    // iOS 5.1 and Nokia ASHA do not support multiple add or remove
	    // trying to detect and fix that in here
	    TemporaryTokenList = createElement('div')[CLASS_LIST];
	    TemporaryTokenList.add('a', 'b', 'a');
	    if ('a\x20b' != TemporaryTokenList) {
	      // no other way to reach original methods in iOS 5.1
	      TemporaryPrototype = TemporaryTokenList.constructor.prototype;
	      if (!('add' in TemporaryPrototype)) {
	        // ASHA double fails in here
	        TemporaryPrototype = window.TemporaryTokenList.prototype;
	      }
	      wrapVerifyToken = function wrapVerifyToken(original) {
	        return function () {
	          var i = 0;
	          while (i < arguments.length) {
	            original.call(this, arguments[i++]);
	          }
	        };
	      };
	      TemporaryPrototype.add = wrapVerifyToken(TemporaryPrototype.add);
	      TemporaryPrototype.remove = wrapVerifyToken(TemporaryPrototype.remove);
	      // toggle is broken too ^_^ ... let's fix it
	      TemporaryPrototype.toggle = toggle;
	    }
	  }
	
	  if (!('contains' in NodePrototype)) {
	    defineProperty(NodePrototype, 'contains', {
	      value: function value(el) {
	        while (el && el !== this) {
	          el = el.parentNode;
	        }return this === el;
	      }
	    });
	  }
	
	  if (!('head' in document)) {
	    defineProperty(document, 'head', {
	      get: function get() {
	        return head || (head = document.getElementsByTagName('head')[0]);
	      }
	    });
	  }
	
	  // requestAnimationFrame partial polyfill
	  (function () {
	    for (var raf, rAF = window.requestAnimationFrame, cAF = window.cancelAnimationFrame, prefixes = ['o', 'ms', 'moz', 'webkit'], i = prefixes.length; !cAF && i--;) {
	      rAF = rAF || window[prefixes[i] + 'RequestAnimationFrame'];
	      cAF = window[prefixes[i] + 'CancelAnimationFrame'] || window[prefixes[i] + 'CancelRequestAnimationFrame'];
	    }
	    if (!cAF) {
	      // some FF apparently implemented rAF but no cAF 
	      if (rAF) {
	        raf = rAF;
	        rAF = function rAF(callback) {
	          var goOn = true;
	          raf(function () {
	            if (goOn) callback.apply(this, arguments);
	          });
	          return function () {
	            goOn = false;
	          };
	        };
	        cAF = function cAF(id) {
	          id();
	        };
	      } else {
	        rAF = function rAF(callback) {
	          return setTimeout(callback, 15, 15);
	        };
	        cAF = function cAF(id) {
	          clearTimeout(id);
	        };
	      }
	    }
	    window.requestAnimationFrame = rAF;
	    window.cancelAnimationFrame = cAF;
	  })();
	
	  // http://www.w3.org/TR/dom/#customevent
	  try {
	    new window.CustomEvent('?');
	  } catch (o_O) {
	    window.CustomEvent = function (eventName, defaultInitDict) {
	
	      // the infamous substitute
	      function CustomEvent(type, eventInitDict) {
	        /*jshint eqnull:true */
	        var event = document.createEvent(eventName);
	        if (typeof type != 'string') {
	          throw new Error('An event name must be provided');
	        }
	        if (eventName == 'Event') {
	          event.initCustomEvent = initCustomEvent;
	        }
	        if (eventInitDict == null) {
	          eventInitDict = defaultInitDict;
	        }
	        event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
	        return event;
	      }
	
	      // attached at runtime
	      function initCustomEvent(type, bubbles, cancelable, detail) {
	        /*jshint validthis:true*/
	        this.initEvent(type, bubbles, cancelable);
	        this.detail = detail;
	      }
	
	      // that's it
	      return CustomEvent;
	    }(
	    // is this IE9 or IE10 ?
	    // where CustomEvent is there
	    // but not usable as construtor ?
	    window.CustomEvent ?
	    // use the CustomEvent interface in such case
	    'CustomEvent' : 'Event',
	    // otherwise the common compatible one
	    {
	      bubbles: false,
	      cancelable: false,
	      detail: null
	    });
	  }
	
	  // window.Event as constructor
	  try {
	    new Event('_');
	  } catch (o_O) {
	    /* jshint -W022 */
	    o_O = function ($Event) {
	      function Event(type, init) {
	        enoughArguments(arguments.length, 'Event');
	        var out = document.createEvent('Event');
	        if (!init) init = {};
	        out.initEvent(type, !!init.bubbles, !!init.cancelable);
	        return out;
	      }
	      Event.prototype = $Event.prototype;
	      return Event;
	    }(window.Event || function Event() {});
	    defineProperty(window, 'Event', { value: o_O });
	    // Android 4 gotcha
	    if (Event !== o_O) Event = o_O;
	  }
	
	  // window.KeyboardEvent as constructor
	  try {
	    new KeyboardEvent('_', {});
	  } catch (o_O) {
	    /* jshint -W022 */
	    o_O = function ($KeyboardEvent) {
	      // code inspired by https://gist.github.com/termi/4654819
	      var initType = 0,
	          defaults = {
	        char: '',
	        key: '',
	        location: 0,
	        ctrlKey: false,
	        shiftKey: false,
	        altKey: false,
	        metaKey: false,
	        altGraphKey: false,
	        repeat: false,
	        locale: navigator.language,
	        detail: 0,
	        bubbles: false,
	        cancelable: false,
	        keyCode: 0,
	        charCode: 0,
	        which: 0
	      },
	          eventType;
	      try {
	        var e = document.createEvent('KeyboardEvent');
	        e.initKeyboardEvent('keyup', false, false, window, '+', 3, true, false, true, false, false);
	        initType = (e.keyIdentifier || e.key) == '+' && (e.keyLocation || e.location) == 3 && (e.ctrlKey ? e.altKey ? 1 : 3 : e.shiftKey ? 2 : 4) || 9;
	      } catch (o_O) {}
	      eventType = 0 < initType ? 'KeyboardEvent' : 'Event';
	
	      function getModifier(init) {
	        for (var out = [], keys = ['ctrlKey', 'Control', 'shiftKey', 'Shift', 'altKey', 'Alt', 'metaKey', 'Meta', 'altGraphKey', 'AltGraph'], i = 0; i < keys.length; i += 2) {
	          if (init[keys[i]]) out.push(keys[i + 1]);
	        }
	        return out.join(' ');
	      }
	
	      function withDefaults(target, source) {
	        for (var key in source) {
	          if (source.hasOwnProperty(key) && !source.hasOwnProperty.call(target, key)) target[key] = source[key];
	        }
	        return target;
	      }
	
	      function withInitValues(key, out, init) {
	        try {
	          out[key] = init[key];
	        } catch (o_O) {}
	      }
	
	      function KeyboardEvent(type, init) {
	        enoughArguments(arguments.length, 'KeyboardEvent');
	        init = withDefaults(init || {}, defaults);
	        var out = document.createEvent(eventType),
	            ctrlKey = init.ctrlKey,
	            shiftKey = init.shiftKey,
	            altKey = init.altKey,
	            metaKey = init.metaKey,
	            altGraphKey = init.altGraphKey,
	            modifiers = initType > 3 ? getModifier(init) : null,
	            key = String(init.key),
	            chr = String(init.char),
	            location = init.location,
	            keyCode = init.keyCode || (init.keyCode = key) && key.charCodeAt(0) || 0,
	            charCode = init.charCode || (init.charCode = chr) && chr.charCodeAt(0) || 0,
	            bubbles = init.bubbles,
	            cancelable = init.cancelable,
	            repeat = init.repeat,
	            locale = init.locale,
	            view = init.view || window,
	            args;
	        if (!init.which) init.which = init.keyCode;
	        if ('initKeyEvent' in out) {
	          out.initKeyEvent(type, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode);
	        } else if (0 < initType && 'initKeyboardEvent' in out) {
	          args = [type, bubbles, cancelable, view];
	          switch (initType) {
	            case 1:
	              args.push(key, location, ctrlKey, shiftKey, altKey, metaKey, altGraphKey);
	              break;
	            case 2:
	              args.push(ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode);
	              break;
	            case 3:
	              args.push(key, location, ctrlKey, altKey, shiftKey, metaKey, altGraphKey);
	              break;
	            case 4:
	              args.push(key, location, modifiers, repeat, locale);
	              break;
	            default:
	              args.push(char, key, location, modifiers, repeat, locale);
	          }
	          out.initKeyboardEvent.apply(out, args);
	        } else {
	          out.initEvent(type, bubbles, cancelable);
	        }
	        for (key in out) {
	          if (defaults.hasOwnProperty(key) && out[key] !== init[key]) {
	            withInitValues(key, out, init);
	          }
	        }
	        return out;
	      }
	      KeyboardEvent.prototype = $KeyboardEvent.prototype;
	      return KeyboardEvent;
	    }(window.KeyboardEvent || function KeyboardEvent() {});
	    defineProperty(window, 'KeyboardEvent', { value: o_O });
	    // Android 4 gotcha
	    if (KeyboardEvent !== o_O) KeyboardEvent = o_O;
	  }
	
	  // window.MouseEvent as constructor
	  try {
	    new MouseEvent('_', {});
	  } catch (o_O) {
	    /* jshint -W022 */
	    o_O = function ($MouseEvent) {
	      function MouseEvent(type, init) {
	        enoughArguments(arguments.length, 'MouseEvent');
	        var out = document.createEvent('MouseEvent');
	        if (!init) init = {};
	        out.initMouseEvent(type, !!init.bubbles, !!init.cancelable, init.view || window, init.detail || 1, init.screenX || 0, init.screenY || 0, init.clientX || 0, init.clientY || 0, !!init.ctrlKey, !!init.altKey, !!init.shiftKey, !!init.metaKey, init.button || 0, init.relatedTarget || null);
	        return out;
	      }
	      MouseEvent.prototype = $MouseEvent.prototype;
	      return MouseEvent;
	    }(window.MouseEvent || function MouseEvent() {});
	    defineProperty(window, 'MouseEvent', { value: o_O });
	    // Android 4 gotcha
	    if (MouseEvent !== o_O) MouseEvent = o_O;
	  }
	})(window);(function (global) {
	  'use strict';
	
	  // a WeakMap fallback for DOM nodes only used as key
	
	  var DOMMap = global.WeakMap || function () {
	
	    var counter = 0,
	        dispatched = false,
	        drop = false,
	        value;
	
	    function dispatch(key, ce, shouldDrop) {
	      drop = shouldDrop;
	      dispatched = false;
	      value = undefined;
	      key.dispatchEvent(ce);
	    }
	
	    function Handler(value) {
	      this.value = value;
	    }
	
	    Handler.prototype.handleEvent = function handleEvent(e) {
	      dispatched = true;
	      if (drop) {
	        e.currentTarget.removeEventListener(e.type, this, false);
	      } else {
	        value = this.value;
	      }
	    };
	
	    function DOMMap() {
	      counter++; // make id clashing highly improbable
	      this.__ce__ = new Event('@DOMMap:' + counter + Math.random());
	    }
	
	    DOMMap.prototype = {
	      'constructor': DOMMap,
	      'delete': function del(key) {
	        return dispatch(key, this.__ce__, true), dispatched;
	      },
	      'get': function get(key) {
	        dispatch(key, this.__ce__, false);
	        var v = value;
	        value = undefined;
	        return v;
	      },
	      'has': function has(key) {
	        return dispatch(key, this.__ce__, false), dispatched;
	      },
	      'set': function set(key, value) {
	        dispatch(key, this.__ce__, true);
	        key.addEventListener(this.__ce__.type, new Handler(value), false);
	        return this;
	      }
	    };
	
	    return DOMMap;
	  }();
	
	  function Dict() {}
	  Dict.prototype = (Object.create || Object)(null);
	
	  // https://dom.spec.whatwg.org/#interface-eventtarget
	
	  function createEventListener(type, callback, options) {
	    function eventListener(e) {
	      if (eventListener.once) {
	        e.currentTarget.removeEventListener(e.type, callback, eventListener);
	        eventListener.removed = true;
	      }
	      if (eventListener.passive) {
	        e.preventDefault = createEventListener.preventDefault;
	      }
	      if (typeof eventListener.callback === 'function') {
	        /* jshint validthis: true */
	        eventListener.callback.call(this, e);
	      } else if (eventListener.callback) {
	        eventListener.callback.handleEvent(e);
	      }
	      if (eventListener.passive) {
	        delete e.preventDefault;
	      }
	    }
	    eventListener.type = type;
	    eventListener.callback = callback;
	    eventListener.capture = !!options.capture;
	    eventListener.passive = !!options.passive;
	    eventListener.once = !!options.once;
	    // currently pointless but specs say to use it, so ...
	    eventListener.removed = false;
	    return eventListener;
	  }
	
	  createEventListener.preventDefault = function preventDefault() {};
	
	  var Event = global.CustomEvent,
	      hOP = Object.prototype.hasOwnProperty,
	      dE = global.dispatchEvent,
	      aEL = global.addEventListener,
	      rEL = global.removeEventListener,
	      counter = 0,
	      increment = function increment() {
	    counter++;
	  },
	      indexOf = [].indexOf || function indexOf(value) {
	    var length = this.length;
	    while (length--) {
	      if (this[length] === value) {
	        break;
	      }
	    }
	    return length;
	  },
	      getListenerKey = function getListenerKey(options) {
	    return ''.concat(options.capture ? '1' : '0', options.passive ? '1' : '0', options.once ? '1' : '0');
	  },
	      augment,
	      proto;
	
	  try {
	    aEL('_', increment, { once: true });
	    dE(new Event('_'));
	    dE(new Event('_'));
	    rEL('_', increment, { once: true });
	  } catch (o_O) {}
	
	  if (counter !== 1) {
	    (function () {
	      var dm = new DOMMap();
	      function createAEL(aEL) {
	        return function addEventListener(type, handler, options) {
	          if (options && typeof options !== 'boolean') {
	            var info = dm.get(this),
	                key = getListenerKey(options),
	                i,
	                tmp,
	                wrap;
	            if (!info) dm.set(this, info = new Dict());
	            if (!(type in info)) info[type] = {
	              handler: [],
	              wrap: []
	            };
	            tmp = info[type];
	            i = indexOf.call(tmp.handler, handler);
	            if (i < 0) {
	              i = tmp.handler.push(handler) - 1;
	              tmp.wrap[i] = wrap = new Dict();
	            } else {
	              wrap = tmp.wrap[i];
	            }
	            if (!(key in wrap)) {
	              wrap[key] = createEventListener(type, handler, options);
	              aEL.call(this, type, wrap[key], wrap[key].capture);
	            }
	          } else {
	            aEL.call(this, type, handler, options);
	          }
	        };
	      }
	      function createREL(rEL) {
	        return function removeEventListener(type, handler, options) {
	          if (options && typeof options !== 'boolean') {
	            var info = dm.get(this),
	                key,
	                i,
	                tmp,
	                wrap;
	            if (info && type in info) {
	              tmp = info[type];
	              i = indexOf.call(tmp.handler, handler);
	              if (-1 < i) {
	                key = getListenerKey(options);
	                wrap = tmp.wrap[i];
	                if (key in wrap) {
	                  rEL.call(this, type, wrap[key], wrap[key].capture);
	                  delete wrap[key];
	                  // return if there are other wraps
	                  for (key in wrap) {
	                    return;
	                  } // otherwise remove all the things
	                  tmp.handler.splice(i, 1);
	                  tmp.wrap.splice(i, 1);
	                  // if there are no other handlers
	                  if (tmp.handler.length === 0)
	                    // drop the info[type] entirely
	                    delete info[type];
	                }
	              }
	            }
	          } else {
	            rEL.call(this, type, handler, options);
	          }
	        };
	      }
	
	      augment = function augment(Constructor) {
	        if (!Constructor) return;
	        var proto = Constructor.prototype;
	        proto.addEventListener = createAEL(proto.addEventListener);
	        proto.removeEventListener = createREL(proto.removeEventListener);
	      };
	
	      if (global.EventTarget) {
	        augment(EventTarget);
	      } else {
	        augment(global.Text);
	        augment(global.Element || global.HTMLElement);
	        augment(global.HTMLDocument);
	        augment(global.Window || { prototype: global });
	        augment(global.XMLHttpRequest);
	      }
	    })();
	  }
	})(self);

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	module.exports = function forEach(obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var bound;
	    var binder = function binder() {
	        if (this instanceof bound) {
	            var result = target.apply(this, args.concat(slice.call(arguments)));
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(that, args.concat(slice.call(arguments)));
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var implementation = __webpack_require__(16);
	
	module.exports = Function.prototype.bind || implementation;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var toStr = Object.prototype.toString;
	
	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' && value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var keys = __webpack_require__(1);
	
	module.exports = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
			return false;
		}
		if (_typeof(Symbol.iterator) === 'symbol') {
			return true;
		}
	
		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') {
			return false;
		}
	
		if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
			return false;
		}
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
			return false;
		}
	
		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }
	
		var symVal = 42;
		obj[sym] = symVal;
		for (sym in obj) {
			return false;
		}
		if (keys(obj).length !== 0) {
			return false;
		}
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
			return false;
		}
	
		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
			return false;
		}
	
		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) {
			return false;
		}
	
		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
			return false;
		}
	
		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
			if (descriptor.value !== symVal || descriptor.enumerable !== true) {
				return false;
			}
		}
	
		return true;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es6-shim
	
	var keys = __webpack_require__(1);
	var bind = __webpack_require__(17);
	var canBeObject = function canBeObject(obj) {
		return typeof obj !== 'undefined' && obj !== null;
	};
	var hasSymbols = __webpack_require__(19)();
	var toObject = Object;
	var push = bind.call(Function.call, Array.prototype.push);
	var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
	var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
	
	module.exports = function assign(target, source1) {
		if (!canBeObject(target)) {
			throw new TypeError('target must be an object');
		}
		var objTarget = toObject(target);
		var s, source, i, props, syms, value, key;
		for (s = 1; s < arguments.length; ++s) {
			source = toObject(arguments[s]);
			props = keys(source);
			var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
			if (getSymbols) {
				syms = getSymbols(source);
				for (i = 0; i < syms.length; ++i) {
					key = syms[i];
					if (propIsEnumerable(source, key)) {
						push(props, key);
					}
				}
			}
			for (i = 0; i < props.length; ++i) {
				key = props[i];
				value = source[key];
				if (propIsEnumerable(source, key)) {
					objTarget[key] = value;
				}
			}
		}
		return objTarget;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var implementation = __webpack_require__(20);
	
	var lacksProperEnumerationOrder = function lacksProperEnumerationOrder() {
		if (!Object.assign) {
			return false;
		}
		// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
		// note: this does not detect the bug unless there's 20 characters
		var str = 'abcdefghijklmnopqrst';
		var letters = str.split('');
		var map = {};
		for (var i = 0; i < letters.length; ++i) {
			map[letters[i]] = letters[i];
		}
		var obj = Object.assign({}, map);
		var actual = '';
		for (var k in obj) {
			actual += k;
		}
		return str !== actual;
	};
	
	var assignHasPendingExceptions = function assignHasPendingExceptions() {
		if (!Object.assign || !Object.preventExtensions) {
			return false;
		}
		// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
		// which is 72% slower than our shim, and Firefox 40's native implementation.
		var thrower = Object.preventExtensions({ 1: 2 });
		try {
			Object.assign(thrower, 'xy');
		} catch (e) {
			return thrower[1] === 'y';
		}
		return false;
	};
	
	module.exports = function getPolyfill() {
		if (!Object.assign) {
			return implementation;
		}
		if (lacksProperEnumerationOrder()) {
			return implementation;
		}
		if (assignHasPendingExceptions()) {
			return implementation;
		}
		return Object.assign;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(12);
	var getPolyfill = __webpack_require__(21);
	
	module.exports = function shimAssign() {
		var polyfill = getPolyfill();
		define(Object, { assign: polyfill }, { assign: function assign() {
				return Object.assign !== polyfill;
			} });
		return polyfill;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
			addEventListener("resize", function () {
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
			}());
		}
	})(window);
	
	/*! Picturefill - v3.0.2
	 * http://scottjehl.github.io/picturefill
	 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
	 *  License: MIT
	 */
	
	(function (window, document, undefined) {
		// Enable strict mode
		"use strict";
	
		// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	
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
		var evalCSS = function () {
	
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
		}();
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function (qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr,
	        vstr,
	        k,
	        v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var stringifyPrimitive = function stringifyPrimitive(v) {
	  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function (obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    return Object.keys(obj).map(function (k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function (v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(24);
	exports.encode = exports.stringify = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	!function (c) {
	  function s(l) {
	    if (v[l]) return v[l].exports;var h = v[l] = { exports: {}, id: l, loaded: !1 };return c[l].call(h.exports, h, h.exports, s), h.loaded = !0, h.exports;
	  }var v = {};return s.m = c, s.c = v, s.p = "", s(0);
	}([function (c, s, v) {
	  var l = ["android", "appIcon", "arrow", "attention", "auto24", "bodytypes/compact", "bodytypes/delivery", "bodytypes/electro-hybrid-gas", "bodytypes/limousine", "bodytypes/moto-chopper", "bodytypes/moto-classic", "bodytypes/moto-enduro", "bodytypes/moto-naked", "bodytypes/moto-quad", "bodytypes/moto-scooter", "bodytypes/moto-sports", "bodytypes/moto-tourer", "bodytypes/moto-touring_enduro", "bodytypes/offroad", "bodytypes/oldtimer", "bodytypes/roadster", "bodytypes/sports", "bodytypes/station", "bodytypes/van", "bubble", "bubbles", "car-valuation", "carInsertion", "carInsertionEdit", "close", "contract", "counselor", "delete", "detailspage/firstregistration", "detailspage/mileage", "detailspage/power", "detailspage/print", "detailspage/share", "download", "edit", "emission-badge-2", "emission-badge-3", "emission-badge-4", "facebook", "finance24", "flag/at", "flag/be", "flag/de", "flag/es", "flag/fr", "flag/it", "flag/lu", "flag/nl", "flag/pl", "googleplus", "heart", "hook", "hookSquare", "immo24", "info", "ios", "lifestyle/familycar", "lifestyle/firstcar", "lifestyle/fourxfour", "lifestyle/fuelsaver", "lifestyle/luxury", "lifestyle/roadster-l", "location", "mail", "navigation/car", "navigation/caravan", "navigation/motocycle", "navigation/truck", "phone", "pin", "pinCar", "pinMoto", "pinterest", "plus", "print", "scout24", "search", "security", "sharing", "star-half", "star", "t-online", "tip", "twitter", "whatsapp", "youtube"],
	      h = {};l.forEach(function (c) {
	    h[c.toLowerCase()] = v(1)("./" + c + ".svg");
	  });var t = Object.create(HTMLElement.prototype);t.createdCallback = function () {
	    this.innerHTML = h[("" + this.getAttribute("type")).toLowerCase()];
	  }, t.attributeChangedCallback = function (c, s, v) {
	    "type" === c && (this.innerHTML = h[("" + this.getAttribute("type")).toLowerCase()]);
	  };try {
	    document.registerElement("as24-icon", { prototype: t });
	  } catch (e) {
	    window && window.console && window.console.warn('Failed to register CustomElement "as24-icon".', e);
	  }window.showcarIconNames = l;
	}, function (c, s, v) {
	  function l(c) {
	    return v(h(c));
	  }function h(c) {
	    return t[c] || function () {
	      throw new Error("Cannot find module '" + c + "'.");
	    }();
	  }var t = { "./android.svg": 2, "./appIcon.svg": 3, "./arrow.svg": 4, "./attention.svg": 5, "./auto24.svg": 6, "./bodytypes/compact.svg": 7, "./bodytypes/delivery.svg": 8, "./bodytypes/electro-hybrid-gas.svg": 9, "./bodytypes/limousine.svg": 10, "./bodytypes/moto-chopper.svg": 11, "./bodytypes/moto-classic.svg": 12, "./bodytypes/moto-enduro.svg": 13, "./bodytypes/moto-naked.svg": 14, "./bodytypes/moto-quad.svg": 15, "./bodytypes/moto-scooter.svg": 16, "./bodytypes/moto-sports.svg": 17, "./bodytypes/moto-tourer.svg": 18, "./bodytypes/moto-touring_enduro.svg": 19, "./bodytypes/offroad.svg": 20, "./bodytypes/oldtimer.svg": 21, "./bodytypes/roadster.svg": 22, "./bodytypes/sports.svg": 23, "./bodytypes/station.svg": 24, "./bodytypes/van.svg": 25, "./bubble.svg": 26, "./bubbles.svg": 27, "./car-valuation.svg": 28, "./carInsertion.svg": 29, "./carInsertionEdit.svg": 30, "./close.svg": 31, "./contract.svg": 32, "./counselor.svg": 33, "./delete.svg": 34, "./detailspage/firstregistration.svg": 35, "./detailspage/mileage.svg": 36, "./detailspage/power.svg": 37, "./detailspage/print.svg": 38, "./detailspage/share.svg": 39, "./download.svg": 40, "./edit.svg": 41, "./emission-badge-2.svg": 42, "./emission-badge-3.svg": 43, "./emission-badge-4.svg": 44, "./facebook.svg": 45, "./finance24.svg": 46, "./flag/at.svg": 47, "./flag/be.svg": 48, "./flag/de.svg": 49, "./flag/es.svg": 50, "./flag/fr.svg": 51, "./flag/it.svg": 52, "./flag/lu.svg": 53, "./flag/nl.svg": 54, "./flag/pl.svg": 55, "./googleplus.svg": 56, "./heart.svg": 57, "./hook.svg": 58, "./hookSquare.svg": 59, "./immo24.svg": 60, "./info.svg": 61, "./ios.svg": 62, "./lifestyle/familycar.svg": 63, "./lifestyle/firstcar.svg": 64, "./lifestyle/fourxfour.svg": 65, "./lifestyle/fuelsaver.svg": 66, "./lifestyle/luxury.svg": 67, "./lifestyle/roadster-l.svg": 68, "./location.svg": 69, "./mail.svg": 70, "./navigation/car.svg": 71, "./navigation/caravan.svg": 72, "./navigation/motocycle.svg": 73, "./navigation/truck.svg": 74, "./phone.svg": 75, "./pin.svg": 76, "./pinCar.svg": 77, "./pinMoto.svg": 78, "./pinterest.svg": 79, "./plus.svg": 80, "./print.svg": 81, "./scout24.svg": 82, "./search.svg": 83, "./security.svg": 84, "./sharing.svg": 85, "./star-half.svg": 86, "./star.svg": 87, "./t-online.svg": 88, "./tip.svg": 89, "./twitter.svg": 90, "./whatsapp.svg": 91, "./youtube.svg": 92 };l.keys = function () {
	    return Object.keys(t);
	  }, l.resolve = h, c.exports = l, l.id = 1;
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22"><path d="M6.2 1.7h.1c.1 0 .1-.1.1-.1L5.4 0h-.1c-.1 0-.1.1-.1.1l1 1.6zM11.7 1.7h-.1c-.1 0-.1-.1-.1-.1L12.6 0h.1c.1 0 .1.1.1.1l-1.1 1.6zM9 2.7C3.3 2.7 3 8 3 8h12s-.4-5.3-6-5.3zM6.4 6.4c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm5.1 0c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM2 15c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6zM18 15c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6zM7 21c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v6zM12 21c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v6z"/><path d="M15 17c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v7z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><path d="M42 0H12C5.4 0 0 5.4 0 12v14h54V12c0-6.6-5.4-12-12-12z" fill="#003468"/><path d="M12 54h30c6.6 0 12-5.4 12-12V28H0v14c0 6.6 5.4 12 12 12z" fill="#ff7500"/><g fill="#003468"><path d="M6.9 42.3h-.1c-1.5 0-2.7-1-2.7-2.7 0-1 1.6-1 1.6 0 0 .7.5 1.1 1.1 1.1h.1c.7 0 1.2-.3 1.2-1 0-1.7-3.9-1.8-3.9-4.3v-.3c0-1.4 1.4-2.3 2.6-2.3h.1c1.4 0 2.6.9 2.6 2.2 0 1-1.5 1-1.5 0 0-.4-.4-.6-1.1-.6h-.1c-.6 0-1 .3-1 .8v.2c0 1.1 3.9 1.5 3.9 4.3-.1 1.6-1.3 2.6-2.8 2.6zM13.6 42.3h-.1c-1.5 0-2.7-1.1-2.7-2.6v-4.2c0-1.5 1.2-2.6 2.7-2.6h.1c1.4 0 2.5.9 2.7 2.2v.1c0 .5-.4.8-.8.8-.3 0-.7-.2-.8-.7-.1-.6-.6-.9-1.1-.9h-.1c-.6 0-1.1.5-1.1 1.1v4.2c0 .6.5 1.1 1.1 1.1h.1c.6 0 1-.4 1.1-.9.1-.5.4-.7.8-.7s.8.3.8.8v.1c-.2 1.3-1.3 2.2-2.7 2.2zM20.2 42.3h-.1c-1.5 0-2.7-1.2-2.7-2.6v-4.2c0-1.5 1.2-2.6 2.7-2.6h.1c1.5 0 2.7 1.1 2.7 2.6v4.2c0 1.4-1.2 2.6-2.7 2.6zm1.2-6.8c0-.6-.5-1.1-1.1-1.1h-.1c-.6 0-1.1.5-1.1 1.1v4.2c0 .6.5 1.1 1.1 1.1h.1c.6 0 1.1-.5 1.1-1.1v-4.2zM27.3 42.3h-.1c-1.5 0-2.7-1.2-2.7-2.7v-6c0-.5.4-.8.8-.8s.8.3.8.8v6c0 .6.5 1.1 1.1 1.1h.1c.6 0 1.1-.5 1.1-1.1v-6c0-.5.4-.8.8-.8s.8.3.8.8v6c0 1.5-1.2 2.7-2.7 2.7zM35.5 34.5h-1.1v7c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-7h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.7c.5 0 .8.4.8.8.1.4-.1.8-.7.8zM42.8 42.2h-3.5c-.5 0-.8-.5-.8-.9 0-.2 0-.3.1-.5l3.1-4.9c.2-.3.2-.4.2-.6v-.1c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.1c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-.2c0-1.3 1.1-2.3 2.3-2.3 1.3 0 2.4.9 2.4 2.3v.1c0 .5-.2.9-.5 1.4l-2.5 4h2.3c.5 0 .8.4.8.8.1.4-.2.8-.7.8zM48.9 40.4h-.3v1.1c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-1.1h-2c-.5 0-.9-.3-.9-.8 0-.1 0-.3.1-.4l2.5-5.8c.1-.3.4-.5.7-.5.4 0 .8.3.8.8 0 .1 0 .2-.1.3l-2.2 4.9h1.2v-.8c0-.5.4-.8.8-.8s.8.3.8.8v.8h.3c.5 0 .8.4.8.8-.1.3-.3.7-.9.7z"/></g><g fill="#fff"><path d="M9.2 21.1c-.3 0-.6-.2-.7-.5L8 19.1H5.5L5 20.6c-.1.4-.4.5-.7.5-.4 0-.8-.3-.8-.7v-.2L6 12.8c.2-.6.5-.6.8-.6.3 0 .6.1.8.6l2.3 7.4v.2c.1.5-.3.7-.7.7zm-2.4-6.2L6 17.6h1.6l-.8-2.7zM13.7 21.1h-.1c-1.4 0-2.6-1.2-2.6-2.6v-5.7c0-.5.4-.7.7-.7s.7.2.7.7v5.7c0 .6.5 1.1 1.1 1.1h.1c.6 0 1.1-.5 1.1-1.1v-5.7c0-.5.4-.7.7-.7.4 0 .7.2.7.7v5.7c.2 1.5-1 2.6-2.4 2.6zM21.7 13.7h-1v6.7c0 .5-.4.7-.7.7-.4 0-.7-.2-.7-.7v-6.7h-1c-.5 0-.7-.4-.7-.7 0-.4.3-.7.7-.7h3.5c.5 0 .7.4.7.7-.1.3-.4.7-.8.7zM26 21.1h-.1c-1.4 0-2.6-1.1-2.6-2.5v-4c0-1.4 1.2-2.5 2.6-2.5h.1c1.4 0 2.6 1.1 2.6 2.5v4c-.1 1.4-1.2 2.5-2.6 2.5zm1-6.4c0-.6-.5-1-1.1-1h-.1c-.6 0-1.1.4-1.1 1v4c0 .6.5 1.1 1.1 1.1h.2c.6 0 1.1-.4 1.1-1v-4.1H27z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 7"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 7L0 .5.5 0l6 6 5.9-6 .6.5z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="17.5" r="2.5"/><path d="M11.5 12h-3l-1-11 1-1h2.9l1.1 1.1z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 35"><path fill="#003468" d="M0 0v17h74V0H0z"/><path d="M0 35h65.3c4.9 0 8.7-3.9 8.7-8.5V18H0v17z" fill="#ff7500"/><g fill="#003468"><path d="M6.7 31.7h-.1c-1.5 0-2.8-1.1-2.8-2.8 0-1.1 1.6-1.1 1.6 0 0 .8.5 1.2 1.2 1.2h.1c.7 0 1.3-.4 1.3-1.1 0-1.8-4-1.9-4-4.5v-.3c0-1.5 1.5-2.4 2.7-2.4h.1c1.4 0 2.7.9 2.7 2.2 0 1-1.6 1.1-1.6 0 0-.4-.4-.7-1.1-.7h-.2c-.6 0-1.1.3-1.1.9v.2c0 1.1 4 1.6 4 4.5.1 1.7-1.2 2.8-2.8 2.8zM13.7 31.7h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.4c0-1.6 1.3-2.7 2.8-2.7h.1c1.4 0 2.6 1 2.8 2.3v.1c0 .5-.4.8-.8.8s-.7-.2-.8-.7c-.1-.6-.6-1-1.2-1h-.1c-.7 0-1.2.5-1.2 1.1V29c0 .7.5 1.1 1.2 1.1h.1c.6 0 1.1-.4 1.2-1 .1-.5.4-.7.8-.7s.8.3.8.8v.2c-.2 1.3-1.4 2.3-2.8 2.3zM20.6 31.7h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.4c0-1.6 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7V29c0 1.5-1.3 2.7-2.8 2.7zm1.1-7.1c0-.7-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1V29c0 .7.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1v-4.4zM27.9 31.7h-.1c-1.5 0-2.8-1.3-2.8-2.8v-6.2c0-.5.4-.8.8-.8s.8.3.8.8v6.2c0 .6.5 1.2 1.2 1.2h.1c.7 0 1.2-.5 1.2-1.2v-6.2c0-.5.4-.8.8-.8s.8.3.8.8v6.2c0 1.6-1.2 2.8-2.8 2.8zM36.4 23.6h-1.1v7.3c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-7.3h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.8c.5 0 .8.4.8.8s-.2.8-.8.8zM43.9 31.6h-3.6c-.5 0-.8-.5-.8-1 0-.2 0-.4.1-.5l3.2-5.1c.2-.3.2-.4.2-.6v-.1c0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8v.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-.2c0-1.4 1.1-2.4 2.4-2.4 1.3 0 2.4 1 2.4 2.4v.2c0 .5-.2 1-.5 1.5l-2.6 4h2.4c.5 0 .8.4.8.8s-.2.8-.8.8zM50.3 29.7H50v1.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-1.2h-2.2c-.6 0-.9-.3-.9-.9 0-.1 0-.3.1-.4l2.6-6.1c.2-.4.4-.5.7-.5.4 0 .8.3.8.8 0 .1 0 .2-.1.3L47.1 28h1.2v-.8c0-.5.4-.8.8-.8s.8.3.8.8v.8h.3c.5 0 .8.4.8.8.1.5-.2.9-.7.9z"/></g><path d="M10.2 13.8c-.3 0-.6-.2-.7-.6L9 11.5H6.2l-.5 1.7c-.1.4-.4.6-.8.6s-.8-.3-.8-.8v-.3l2.5-8.1c.3-.6.6-.7 1-.7.3 0 .7.1.9.7l2.5 8.1v.3c0 .5-.4.8-.8.8zM7.6 6.9l-.9 3h1.8l-.9-3zM15.1 13.8H15c-1.5 0-2.8-1.3-2.8-2.8V4.7c0-.5.4-.8.8-.8s.8.3.8.8V11c0 .6.5 1.2 1.2 1.2h.1c.7 0 1.2-.5 1.2-1.2V4.7c0-.5.4-.8.8-.8s.8.3.8.8V11c0 1.5-1.3 2.8-2.8 2.8zM23.7 5.6h-1.1V13c0 .5-.4.8-.8.8s-.8-.3-.8-.8V5.6h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.8c.5 0 .8.4.8.8s-.3.8-.8.8zM28.4 13.8h-.1c-1.5 0-2.8-1.2-2.8-2.7V6.7c0-1.6 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7V11c0 1.6-1.3 2.8-2.8 2.8zm1.2-7.1c0-.7-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1V11c0 .7.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1V6.7z" fill="#fff"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 26"><path d="M7.2 15C4.9 15 3 16.8 3 19s1.9 4 4.2 4 4.2-1.8 4.2-4-1.8-4-4.2-4zm0 6.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5 2.6 1.1 2.6 2.5-1.1 2.5-2.6 2.5zM33.8 15c-2.3 0-4.2 1.8-4.2 4s1.9 4 4.2 4 4.2-1.8 4.2-4-1.9-4-4.2-4zm0 6.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5 2.6 1.1 2.6 2.5-1.2 2.5-2.6 2.5z"/><path d="M18.1 10L17 5h.8c1.1 0 4.4.6 6.2 1.3 2.4.9 7.1 2.7 8.4 3.7H18.1zm-9.3 0c-.7 0-1.6-.6-1.8-1.6C7.8 6.5 9.6 5 12.5 5h2.2l1.1 5h-7zm28.9.7c-1.5-.4-4.1-1.6-4.1-1.6s-6.1-2.9-9.1-4c-2-.7-5.4-1.2-6.8-1.2h-6C9.4 4 7.1 5.3 5.4 6.7 2.3 9.3 0 14.1 0 17c0 .8.3 2.3.5 3H2v-1.1c0-3.1 2.4-5.6 5.5-5.6s5.5 2.5 5.5 5.6V20h15v-1.1c0-3.1 2.4-5.6 5.5-5.6s5.5 2.5 5.5 5.6V20h1.6c.3-1.1.4-2.4.4-3.4 0-1.5-1-5.2-3.3-5.9z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 26"><path d="M16.4 21.5c0 1.5-1.3 2.8-2.8 2.8s-2.8-1.2-2.8-2.8 1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8zm37.8 0c0 1.5-1.3 2.8-2.8 2.8s-2.8-1.2-2.8-2.8 1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8zm6.4-10L53 2.2C52 .8 50.3 0 48.4 0h-46C1 .7 0 2.5 0 4.6V18s0-.1 0 0c0 2.1 1.1 4.1 2.5 5h5.1v-1.5c0-3.3 2.7-5.9 6-5.9s6 2.7 6 5.9V23h25.7v-1.5c0-3.3 2.7-5.9 6-5.9s6 2.7 6 5.9V23h3.2c.8-.9 1.3-2.2 1.3-3.7v-3.2c.2-1.4-.2-3.3-1.2-4.6zm-13-1.5c-1.9 0-2.6-.9-2.6-3V2h4c1.1 0 2.5.8 3.2 1.7L57 10h-9.4zm-34 7.1c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm37.8 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5c.1-2.5-2-4.5-4.5-4.5z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 40"><path d="M16 4.7c1.1 2.6.7 5.4-.7 7.3-2.4-.3-4.6-2-5.7-4.7-1.2-2.6-.8-5.4.7-7.3 2.4.3 4.6 2 5.7 4.7zM0 25c1.9 1.5 4.7 1.7 7.3.6 2.6-1.1 4.4-3.3 4.7-5.7-1.9-1.5-4.7-1.8-7.3-.7C2 20.2.3 22.6 0 25zm23.1-9.7c1.9 1.5 4.7 1.8 7.3.7 2.6-1.1 4.2-3.6 4.6-6-1.9-1.5-4.6-1.6-7.2-.5-2.7 1.1-4.4 3.4-4.7 5.8zM19.8 12c2.4-.3 4.6-2 5.7-4.7 1.1-2.6.7-5.4-.7-7.3-2.4.3-4.6 2-5.7 4.7-1.1 2.6-.7 5.4.7 7.3zM28 37c-3-2-8-2.4-8-8v-6c0-2.1 1.5-3.8 2.6-5 .5-.5.4-1.3-.1-1.8s-1.3-.4-1.8.1c-.7.8-1.5 1.7-2.1 2.9-.2-1.9-.6-3.9-1.4-6-.2-.6-1-1-1.6-.7-.6.2-1 1-.7 1.6.8 2 1.1 4 1.3 5.8-.6-.5-1.3-.9-2.2-1.3-.6-.3-1.4 0-1.6.6s0 1.4.6 1.6c.8.4 2 .8 2 1.3V29c0 5.6-5 6-8 8 3.1 1 8 0 9-2l1 5h1l1-5c1 2 6.1 3 9 2zM0 10c.3 2.4 2 4.9 4.7 6 2.6 1.1 5.4.7 7.3-.7-.3-2.4-2-4.6-4.7-5.7C4.7 8.4 1.9 8.5 0 10zm36.2 22c-2.3 0-4.2 1.8-4.2 4s1.9 4 4.2 4 4.2-1.8 4.2-4-1.8-4-4.2-4zm0 6.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5 2.6 1.1 2.6 2.5-1.1 2.5-2.6 2.5zM62.8 32c-2.3 0-4.2 1.8-4.2 4s1.9 4 4.2 4c2.3 0 4.2-1.8 4.2-4s-1.9-4-4.2-4zm0 6.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5c1.4 0 2.6 1.1 2.6 2.5s-1.2 2.5-2.6 2.5z"/><path d="M47.1 27L46 22h.8c1.1 0 4.4.6 6.2 1.3 2.4.9 7.1 2.7 8.4 3.7H47.1zm-9.3 0c-.6 0-1.5-.6-1.8-1.5.9-1.9 2.6-3.5 5.5-3.5h2.2l1.1 5h-7zm28.9.8c-1.5-.4-4.1-1.6-4.1-1.6s-6.1-2.9-9.1-4c-2-.7-5.4-1.2-6.8-1.2h-6c-2.4 0-4.7 1.3-6.4 2.8-3 2.6-5.4 7.4-5.4 10.2 0 .8.3 2.3.5 3H31v-1.1c0-3.1 2.4-5.6 5.5-5.6s5.5 2.5 5.5 5.6V37h15v-1.1c0-3.1 2.4-5.6 5.5-5.6s5.5 2.5 5.5 5.6V37h1.6c.3-1.1.4-2.4.4-3.4 0-1.5-1-5.2-3.3-5.8z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 26"><path d="M13.6 15.9c-1.6 0-2.8 1.2-2.8 2.7s1.3 2.7 2.8 2.7c1.6 0 2.8-1.2 2.8-2.7s-1.2-2.7-2.8-2.7zm37.8 0c-1.6 0-2.8 1.2-2.8 2.7s1.3 2.7 2.8 2.7 2.8-1.2 2.8-2.7-1.2-2.7-2.8-2.7zm7.3-4.4L45.2 9.8l-7.6-4.4c-1.7-1-2.8-1.5-5.3-1.5h-9.1c-2.5 0-3.6.5-5.3 1.5l-5.2 3.4-8.9 1C1.8 10.6 0 12.2 0 15c0 2.1 1.1 4.2 2.5 5h5.1v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V20h25.7v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V20h3.2c.8-.9 1.3-2.1 1.3-3.6.2-2.5-1.2-4.6-3.1-4.9zM17 10l2.2-2.9c1.1-1.2 2.5-1.6 4.8-1.6h1.7L27 10H17zm12 0l-1-4.5h4.3c2.2 0 3 .4 4.5 1.3L42 10H29zm-10.9 8.6c0 2.4-2 4.4-4.5 4.4s-4.5-2-4.5-4.4 2-4.4 4.5-4.4 4.5 2 4.5 4.4zm37.9 0c0 2.4-2 4.4-4.5 4.4S47 21 47 18.6s2-4.4 4.5-4.4c2.4 0 4.5 2 4.5 4.4z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M36 22.4c.8-.7 1.7-1.4 2.5-1.4 1.6 0 3.2 1.2 3.8 1.7.6.6 1.6.5 2.1-.1.6-.6.5-1.6-.1-2.1-.3-.3-2.8-2.5-5.8-2.5-1.8 0-3.3 1.1-4.5 2.2L15.4 37.1c-1.6-1.3-3.7-2.1-5.9-2.1C4.3 35 0 39.3 0 44.5S4.3 54 9.5 54s9.5-4.3 9.5-9.5c0-1.9-.6-3.7-1.6-5.2L36 22.4zM16 44.5c0 3.6-2.9 6.5-6.5 6.5S3 48.1 3 44.5 5.9 38 9.5 38c1.4 0 2.6.4 3.7 1.1l-4.7 4.3c-.6.6-.7 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l4.7-4.3c.5 1 .8 2.1.8 3.2z"/><path class="st0" d="M66.5 35c-5.2 0-9.5 4.3-9.5 9.5 0 .5.1 1 .1 1.5h-2.5c-.1-.5-.1-1-.1-1.5 0-6.6 5.4-12 12-12 2 0 3.9.5 5.5 1.4l1-1.9c-2.1-1.1-4.5-2-7-2-4.4 0-6.6 1.4-8.6 2.9C54.2 35 50 38 46 35c-2.8-7-9.9-7.7-13-7l-4 4 5.2 9.7c1.7 2.8 4.6 7.3 8.3 7.3h15.7c1.6 3 4.7 5 8.4 5 5.2 0 9.5-4.3 9.5-9.5S71.7 35 66.5 35zm-6.3 11c-.1-.5-.2-1-.2-1.5 0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5c-1.8 0-3.5-.8-4.7-2h5.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-7.3z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M45.5 31l-4.9 2.5c-.7-.2-1.1-.4-1.1-.5 0-3-6.1-5-9-5-4 0-5 1-6 2h-2.3c.5-1.2.9-2 1.1-2.3.6-1.1 2.6-1.7 6.2-1.7.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5c-3.6 0-7.4.4-8.9 3.3 0 .1-.1.2-.2.4 0 0-4.3-1.5-4.5-1.6-.1-.1-.2-.1-.4-.1-1.1 0-2 1.3-2 3s.9 3 2 3c.2 0 .3 0 .5-.1.1 0 3-1.1 3-1.1-.7 1.6-1.6 3.6-2.4 5.5-.8-.2-1.7-.3-2.6-.3-5.2 0-9.5 4.3-9.5 9.5S8.8 54 14 54s9.5-4.3 9.5-9.5c0-3.3-1.7-6.2-4.2-7.9.6-1.3 1.1-2.6 1.7-3.8 1.1 1.9 3.9 6.8 5.5 9.2 2 3 6 6 10 6h14.7c1.4 3.5 4.8 6 8.8 6 5.1 0 9.2-4 9.5-9h2c0-7-5.2-11.8-11.5-11.8-3.5 0-6.6 1.4-8.7 3.8-.6-.2-2.6-.9-4.8-1.6V34H50c.8 0 1.5-.7 1.5-1.5S50.8 31 50 31h-4.5zm-25 13.5c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5S10.4 38 14 38c.5 0 .9.1 1.4.1-1.2 2.8-2.2 5-2.3 5.3-.3.8 0 1.6.8 2 .2.1.4.1.6.1.6 0 1.1-.3 1.4-.9.6-1.4 1.4-3.2 2.2-5.1 1.5 1.1 2.4 3 2.4 5zm14-6.5h-3l-2 2h-1l-3-5 9 2v1zM62 48c.8 0 1.5-.7 1.5-1.5S62.8 45 62 45h-8.5v-.5c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5S63.6 51 60 51c-2.3 0-4.3-1.2-5.5-3H62z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M58.5 35c-3.3 0-6.2 1.7-7.9 4.3L45.5 37c.9-2.9 3.2-5.1 5.9-6.2l7.4-2.9c3.2-1.4 4.8-.6 6.8 1.2l2.3-1.2c-1.8-3.4-5.1-5-8.3-4.3L43 27c-3.2 0-8.1-2.2-11.2-6H35c.8 0 1.5-.7 1.5-1.5S35.8 18 35 18h-4c-.8 0-1.6.3-2.3.7-2.6 1.7-4.8 4.2-5.4 6.9-4.9-.9-10.2.3-13.2 2.6-.7.5-.8 1.4-.3 2.1.5.7 1.4.8 2.1.3 2.8-2.1 8.2-3.1 12.7-1.5l-3.7 6.5c-1.1-.4-2.2-.6-3.4-.6-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5c0-3-1.4-5.6-3.5-7.4l3.8-6.6c2.5 1.8 3.8 4.5 4 8.1 0 .7.6 1.3 1.2 1.4l6.5 3c3.8 1.3 6-.1 6-3l4.3 2c-.2.8-.3 1.6-.3 2.5 0 5.2 4.3 9.5 9.5 9.5s9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zM24 44.5c0 3.6-2.9 6.5-6.5 6.5S11 48.1 11 44.5s2.9-6.5 6.5-6.5c.6 0 1.3.1 1.9.3l-3.2 5.5c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l3.2-5.5c1.2 1.3 2 2.9 2 4.8zM58.5 51c-3.6 0-6.5-2.9-6.5-6.5 0-.4 0-.8.1-1.3l5.8 2.6c.2.1.4.1.6.1.6 0 1.1-.3 1.4-.9.3-.8 0-1.6-.7-2l-5.8-2.6c1.2-1.5 3-2.5 5.1-2.5 3.6 0 6.5 2.9 6.5 6.5S62.1 51 58.5 51z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M71 44.5c0 5.2-4.3 9.5-9.5 9.5-4.9 0-8.9-3.7-9.4-8.5L55 44v.4c0 3.6 2.9 6.5 6.5 6.5S68 48 68 44.4c0-2.3-1.1-4.2-2.9-5.4l2.9-1.5c1.9 1.9 3 4.3 3 7zM31 34c0-.3 0-.6.1-.9L26.2 32c1.8 3.6 5.2 11.7 8.8 12v-6c-2.2 0-4-1.8-4-4zm32.3 11.8c-.3.5-.8.7-1.3.7-.3 0-.5-.1-.8-.2L54 41.9l-2.7 1.4c-1.4.6-7.3 3.7-13.4 3.7h-1.2c-3.3 0-7.3-2.7-8.7-5.6l-5.4-10.2-2.6 5.5c2.4 1.7 4 4.5 4 7.8 0 5.2-4.3 9.5-9.5 9.5S5 49.7 5 44.5 9.3 35 14.5 35c.9 0 1.7.1 2.5.3l3.5-7.4c-1.4-.2-2.5-1.5-2.5-3 0-1.7 1.3-3 3-3h2.3l1.4-3c.4-.8 1.4-1.2 2.2-.8.8.4 1.2 1.4.8 2.2l-2.5 5.4C30.2 23 31.3 23 36 23c0 0 6 .2 9 7 7.5-2 18.2-6 20-6 2 0 2.7 2.4 1.2 3.4-1.6 1-10.6 6-10.6 6-1.9 1-3.1 2.3-3.8 3.6l2.2 1.3 14.1-7.2 1.5 2.9-12.3 6.3 5.6 3.4c.6.5.8 1.4.4 2.1zm-44.6-6.3L16 45.2c-.3.6-.9.9-1.5.9-.2 0-.5-.1-.7-.2-.8-.4-1.2-1.4-.8-2.2l2.7-5.7h-1.2C10.9 38 8 40.9 8 44.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5c0-2-.9-3.8-2.3-5zM39 34v1l4 4 1-4-5-1z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M17.8 54H17c-4.7 0-8.5-3.9-8.5-8.6s3.8-8.6 8.5-8.6h.8c-2.6 1.9-4.3 5.1-4.3 8.6s1.7 6.6 4.3 8.6zm15-32.8c.4-.8.1-1.7-.7-2-.7-.4-1.6-.1-2 .7L27.6 25c-5.1 1.1-8.4 2.9-10.1 4.6-2.2 2.2 1 3.1 4 3 7 0 13 4.1 13 12.2v1h9c.3 4.5 3.9 8.1 8.5 8.1h.8c-2.6-1.9-4.3-5.1-4.3-8.6 0-5.7 2.9-12.2 16-15.7 0-1.1-.9-2-2-2-7.8.4-15.3 5.1-21 5.1-5 0-6.3-3.5-11-5.1v-.8c0-.5.2-1.2.4-1.7l1.9-3.9zM59 36.8c-4.7 0-8.5 3.9-8.5 8.6S54.3 54 59 54s8.5-3.9 8.5-8.6-3.8-8.6-8.5-8.6zm4.5 8.6c0 2.5-2 4.6-4.5 4.6s-4.5-2-4.5-4.6 2-4.6 4.5-4.6 4.5 2.1 4.5 4.6zM24 36.8c-4.7 0-8.5 3.9-8.5 8.6S19.3 54 24 54s8.5-3.9 8.5-8.6-3.8-8.6-8.5-8.6zm4.5 8.6c0 2.5-2 4.6-4.5 4.6s-4.5-2-4.5-4.6 2-4.6 4.5-4.6 4.5 2.1 4.5 4.6z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M18 36c1.2.1 2.4.3 3.5.8L20 39.4c-.8-.3-1.6-.4-2.5-.4-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5c0-2.2-.9-4.2-2.4-5.5l1.5-2.6c2.4 1.9 3.9 4.9 3.9 8.2v.2c0 .7-.1 1.3-.2 1.9l23.4-.9c.6 3.5 3.7 6.2 7.4 6.2 4.1 0 7.5-3.4 7.5-7.5S62.6 39 58.5 39c-3.6 0-6.7 2.6-7.4 6h-3c.4-3.3 2.4-6.1 5.1-7.7 0 0 4.3-2.7 5.8-3.6 1.5-.9 2-1.5 2-2.8 0-1.7-1.3-3-3-3-.3 0-14.4 2-14.6 2.1-1.9.4-3.4 2-3.4 4 0 1.7 1 3.1 2.4 3.7C40.2 40.2 35.7 41 32 41c-7-5-6-12 0-19h2.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H30c-2.3.9-9.1 7.3-12 12.6-.4.8-1.2 2.8 0 4.4zm4.2 10.5c0 2.6-2.1 4.8-4.8 4.8s-4.8-2.1-4.8-4.8 2.1-4.8 4.8-4.8c.4 0 .7.1 1.1.1L16.2 46c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l2.3-4c.7.9 1.1 1.9 1.1 3.1zm36.3 4.7c-2.2 0-4-1.5-4.6-3.5h4.6c.8 0 1.5-.5 1.5-1.3s-.7-1.5-1.5-1.5L54 45c.6-1.9 2.4-3.3 4.5-3.3 2.6 0 4.8 2.1 4.8 4.8s-2.2 4.7-4.8 4.7z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M46.1 37.7s18-8.8 18.3-8.9c.7-.3 1.1-1 1.1-1.8 0-1.1-.8-2-2-2-.9 0-14 5-14 5h-7c-1.5-3.5-5.7-5-9-5h-7v3l15 7c1.4.7 3.1 1.6 4.6 2.7z"/><path class="st0" d="M61 35c-4.7 0-8.7 3.5-9.4 8h-4.4c-1.1-3.6-5-5.4-7.7-6.7l-15-7V18c-11.9 4.2-14.4 8.5-13.7 12.1 0 0 6.7 2.1 7.4 2.3.5.1 1 .3 1.5.5l-1.5 2.6c-1-.4-2.1-.6-3.2-.6-5.2 0-9.5 4.3-9.5 9.5S9.8 54 15 54s9.5-4.3 9.5-9.5c0-3-1.4-5.7-3.7-7.5l1.5-2.6c3.1 2.3 5.2 5.9 5.2 10.1 0 2-.5 3.8-1.3 5.5h16.3c2.6 0 4.5-1.4 4.9-4h4.2c.7 4.5 4.6 8 9.4 8 5.2 0 9.5-4.3 9.5-9.5S66.2 35 61 35zm-39.5 9.5c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5S11.4 38 15 38c.6 0 1.1.1 1.7.2l-3.5 6c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l3.5-6.1c1.4 1.3 2.2 3.1 2.2 5zM61 51c-3.1 0-5.6-2.1-6.3-5h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8c.7-2.9 3.2-5 6.3-5 3.6 0 6.5 2.9 6.5 6.5S64.6 51 61 51z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M69.9 43h-3.1c.1.5.2 1 .2 1.5 0 3.6-2.9 6.5-6.5 6.5-2.3 0-4.3-1.2-5.5-3h6c.8 0 1.5-.7 1.5-1.5S61.8 45 61 45h-7v-.5c0-1.5.5-2.8 1.3-3.9-.2-.5-.3-1-.3-1.6v-2.2c-2.4 1.7-4 4.5-4 7.7v.5h-2.5v-.5c0-4.6 2.6-8.7 6.5-10.7V33c0-2.2 1.8-4 4-4h9v-2c0-1.1-.9-2-2-2h-1.8C61.5 25 47 30 43 30s-5-6-12-6c-2.1 0-4.6.7-6.3 1.3L23 24c3.9-4.9 4-9 3-11-9.9 3.9-14.2 14.5-14.2 16.6 0 1 .3 2.1.9 2.9h.8c1.6 0 3.2.3 4.6.9l-1.3 2.2c-1.1-.4-2.2-.6-3.4-.6C8.3 35 4 39.3 4 44.5S8.3 54 13.5 54s9.5-4.3 9.5-9.5c0-3-1.4-5.6-3.5-7.4l1.3-2.2c2.9 2.2 4.8 5.7 4.8 9.6 0 1.2-.2 2.4-.5 3.5h26.7c1.4 3.5 4.8 6 8.8 6 5.2 0 9.5-4.3 9.5-9.5-.1-.5-.2-1-.2-1.5zM20 44.5c0 3.6-2.9 6.5-6.5 6.5S7 48.1 7 44.5 9.9 38 13.5 38c.6 0 1.3.1 1.9.3l-3.2 5.5c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l3.2-5.5c1.2 1.3 2 2.9 2 4.8z"/><path class="st0" d="M59 31c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2H59z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 54"><style>.st0{fill:#8c91a0}</style><path class="st0" d="M66 27.7c-.2 0-.3 0-.5.1l-10.6 2.8c-1.1.3-1.7 1.4-1.4 2.4l1.6 5.8c.3 1 1.4 1.7 2.5 1.4l10.6-2.8c1.1-.3 1.7-1.4 1.4-2.5L68 29.2c-.3-.9-1.1-1.5-2-1.5z"/><path class="st0" d="M26.8 21c1.6-4 1-8.4.2-10-9.9 3.9-10.2 8.5-10.2 10.6 0 1.6 1.3 3.7 3.1 5-4.8-.8-9.8.5-12.8 2.7-.7.5-.8 1.4-.3 2.1.5.7 1.4.8 2.1.3 2.8-2.1 8.5-3.2 13.1-1.4l-3.1 5.4c-1.1-.4-2.2-.6-3.4-.6C10.3 35 6 39.3 6 44.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5c0-3-1.4-5.6-3.5-7.4l3.1-5.4c.7.5 1.3 1.1 1.8 1.8L30 43c.6 1.8 2.3 3 4 3h17.1c.7 4.5 4.6 8 9.4 8 5.2 0 9.5-4.3 9.5-9.5 0-1.9-.6-3.6-1.5-5.1l-3.1.8c1 1.1 1.6 2.6 1.6 4.3 0 3.6-2.9 6.5-6.5 6.5-3.1 0-5.6-2.1-6.3-5H62c.8 0 1.5-.7 1.5-1.5S62.8 43 62 43h-7.8c.1-.5.3-1 .5-1.4-.8-.5-1.3-1.3-1.6-2.2l-.2-.6c-.9 1.2-1.5 2.6-1.8 4.2H48c0-3.3 1.5-6.5 3.8-8.6l-.2-.9c-.6-2.1.7-4.3 2.8-4.9L65 25.8c.3-.1.7-.1 1-.1.5 0 1.1.1 1.5.3h.5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v4l-19.1 3.8c-1.8-5.2-6.4-5.7-15.1-5.8zM22 44.5c0 3.6-2.9 6.5-6.5 6.5S9 48.1 9 44.5s2.9-6.5 6.5-6.5c.6 0 1.3.1 1.9.3l-3.2 5.5c-.4.7-.2 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l3.2-5.5c1.2 1.3 2 2.9 2 4.8z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 26"><path d="M58.6 9.6L45 7.7l-7.6-5C35.8 1.6 34.7 1 32.1 1H13.3c-2.6 0-4.7.9-6.3 2.6L1.8 9l-.1.1-.2.2C.6 10.4 0 12 0 14v3.5c0 1.2.6 2.4 1.3 2.9L3 21h3v-1.6c0-4.2 3.2-7.1 7.2-7.1s7.2 2.9 7.2 7.1V21h23.4v-1.6c0-4.2 3.2-7.1 7.2-7.1s7.2 2.9 7.2 7.1V21H61c.6-.9 1-2.5 1-3.7v-2.1c0-2.9-1.5-5.2-3.4-5.6zM16 8H9l2.4-3.3c1-1.4 2.5-1.7 4.5-1.7h1.5L16 8zm2 0l1.7-5h6l.8 5H18zm11 0l-1-5h4.5c1.5 0 2.7.1 4.1 1.1L42 8H29zm-15.8 9.1c-1.7 0-3 1.3-3 3s1.4 3 3 3c1.7 0 3-1.3 3-3s-1.3-3-3-3zm37.8 0c-1.7 0-3 1.3-3 3s1.4 3 3 3c1.7 0 3-1.3 3-3s-1.3-3-3-3zm-32.9 3c0 2.7-2.2 4.9-4.9 4.9s-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9zm37.9 0c0 2.7-2.2 4.9-4.9 4.9s-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 26"><path d="M53 18.6v.7c0 .4-.3.7-.8.7h-.8v-1.4c0-3.3-2.7-5.9-6.1-5.9-2.5 0-4.2 1.4-6 3.6-1.9 2.3-7.7 3.7-9.9 3.7H15.1v-1.4c0-3.3-2.7-5.9-6.1-5.9-3.3 0-6.1 2.7-6.1 5.9.1.8-.5 1.4-1.4 1.4-.8 0-1.5-.6-1.5-1.4v-5.9c0-.8.7-1.5 1.5-1.5H3V9.7C3 5.2 4.5 3 10.6 3H25c2.3 0 2.9.6 3 1.5L29.2 9H46c1.5 0 2.5.7 2.5 2.1v.6c2.6 1.2 4.5 3.8 4.5 6.9zM14 5h-4C7.7 5 6 6.8 6 9h8V5zm13 4l-1-4h-9v4h10zm-15.1 9.6c0 1.5-1.3 2.8-2.8 2.8s-2.8-1.2-2.8-2.8 1.3-2.8 2.8-2.8 2.8 1.2 2.8 2.8zm36.4 0c0 1.5-1.3 2.8-2.8 2.8s-2.8-1.2-2.8-2.8 1.3-2.8 2.8-2.8 2.8 1.2 2.8 2.8zM9.1 14.1c-2.5 0-4.5 2-4.5 4.4s2 4.4 4.5 4.4 4.5-2 4.5-4.4-2-4.4-4.5-4.4zm36.3 0c-2.5 0-4.5 2-4.5 4.4s2 4.4 4.5 4.4 4.5-2 4.5-4.4-2-4.4-4.5-4.4z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 26"><path d="M24.3 9.1c-.4-.6-.2-1.4.5-1.7s1.4-.1 1.8.5l1.4 2.3h-3l-.7-1.1zm34.4 3.4l-13.5-1.7L35.3 5h-.4c-.3 0-.6.2-.6.5 0 .2 0 .3.2.4l6.5 5H17.6c-2.6 0-3.4-1.5-3.4-1.5L3.9 10.8C1.8 11.6 0 13.2 0 16c0 2.1 1.1 4.2 2.5 5h5.1v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V21h25.7v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V21h3.2c.8-.9 1.3-2.1 1.3-3.6.2-2.5-1.2-4.6-3.1-4.9zm-42.3 7.1c0 1.5-1.3 2.7-2.8 2.7s-2.8-1.2-2.8-2.7 1.3-2.7 2.8-2.7 2.8 1.2 2.8 2.7zm37.8 0c0 1.5-1.3 2.7-2.8 2.7s-2.8-1.2-2.8-2.7 1.3-2.7 2.8-2.7 2.8 1.2 2.8 2.7zm-40.6-4.4c-2.5 0-4.5 2-4.5 4.4s2 4.4 4.5 4.4 4.5-2 4.5-4.4-2-4.4-4.5-4.4zm37.8 0c-2.5 0-4.5 2-4.5 4.4s2 4.4 4.5 4.4 4.5-2 4.5-4.4-2-4.4-4.5-4.4z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 26"><path d="M13.4 15.6c-1.5 0-2.8 1.3-2.8 2.8 0 1.6 1.2 2.9 2.8 2.9s2.8-1.3 2.8-2.9c0-1.5-1.3-2.8-2.8-2.8zm36.4 0c-1.5 0-2.8 1.3-2.8 2.8 0 1.6 1.2 2.9 2.8 2.9 1.5 0 2.8-1.3 2.8-2.9 0-1.5-1.2-2.8-2.8-2.8zm6-4c-4.7-1.9-12.6-1.5-12.6-1.5S36 5.7 32.6 4.9c-1.7-.4-4.8-.9-8-.9-2.3 0-4.7.2-6.9.9-2.6.8-7 2.2-10.9 4.3L2.2 7.8l-.7.8 1.9 2.6c-2.2 1.3-3.4 3.4-3.4 5C0 20 3.5 21 5.2 21h2.2v-2.6c0-3.4 2.7-6.1 6-6.1s6 2.7 6 6.1V21h24.5v-2.6c0-3.4 2.7-6.1 6-6.1s6 2.7 6 6.1V21l3.7-.3c1-1 1.5-1.8 1.5-3-.1-1.6-1.3-4.5-5.3-6.1zm-37.2-1.5c-1.5 0-4.2-.4-4.2-1.5 0-1.3 3-2.1 3.7-2.3 1.2-.3 2.6-.6 4.3-.7l1.5 4.5h-5.3zm7.4 0l-1.5-4.6h.7c3.5 0 5.4.4 6.9.8 1.9.5 6.5 2.6 8 3.7H26zm-8.1 8.3c0 2.5-2 4.6-4.5 4.6s-4.5-2-4.5-4.6c0-2.5 2-4.6 4.5-4.6s4.5 2.1 4.5 4.6zm36.4 0c0 2.5-2 4.6-4.5 4.6s-4.5-2-4.5-4.6c0-2.5 2-4.6 4.5-4.6s4.5 2.1 4.5 4.6z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 26"><path d="M58.7 11.5L45.2 9.8l-7.6-4.4c-1.7-1-2.8-1.5-5.3-1.5H13.5c-2.5 0-4.6.8-6.2 2.2l-5 4.5C1 11.7 0 13 0 15c0 2.1 1.1 4.2 2.5 5h5.1v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V20h25.7v-1.4c0-3.2 2.7-5.8 6-5.8s6 2.6 6 5.8V20h3.2c.8-.9 1.3-2.1 1.3-3.6.2-2.5-1.2-4.6-3.1-4.9zm-45-1.5H7l2.3-2.7c1.1-1.2 3.1-1.8 5.1-1.8h1.5L13.7 10zm2.4 0l2-4.5h7.6l.8 4.5H16.1zm12.6 0L28 5.5h4.4c2.2 0 2.9.4 4.4 1.3l5.4 3.3H28.7zm-15.1 5.9c-1.6 0-2.8 1.2-2.8 2.7s1.3 2.7 2.8 2.7c1.6 0 2.8-1.2 2.8-2.7s-1.2-2.7-2.8-2.7zm37.8 0c-1.6 0-2.8 1.2-2.8 2.7s1.3 2.7 2.8 2.7 2.8-1.2 2.8-2.7-1.2-2.7-2.8-2.7zm-33.3 2.7c0 2.4-2 4.4-4.5 4.4s-4.5-2-4.5-4.4 2-4.4 4.5-4.4 4.5 2 4.5 4.4zm37.9 0c0 2.4-2 4.4-4.5 4.4S47 21 47 18.6s2-4.4 4.5-4.4c2.4 0 4.5 2 4.5 4.4z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 26"><path d="M11.3 17.7c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8c1.6 0 2.8-1.3 2.8-2.8s-1.2-2.8-2.8-2.8zm40.9 0c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8S55 22 55 20.5s-1.3-2.8-2.8-2.8zm6.5-6.3L46.6 4c-2.6-1.4-5-3-10.3-3H15.7C6.5 1 4.2 4.3 3 7.2c0 0-3 6-3 8v2.2c0 2.1 1.1 3.6 2.5 4.5h2.8v-1.5c0-3.3 2.7-6 6-6s6 2.7 6 6V22H46v-1.5c0-3.3 2.7-6 6-6s6 2.7 6 6V22h2.5c.8-.9 1.3-2.2 1.3-3.8.2-2.5-.6-5.4-3.1-6.8zM14.1 9H5.6c.4-1 .6-1.5 1.1-2.8.9-2.1 3.8-3.2 8.8-3.2l-1.4 6zm2.1 0l1.4-6h11.2l1 6H16.2zM32 9l-1-6h5.3c4.3 0 6.9 1 9 2.2L52.1 9H32zM15.9 20.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c2.4 0 4.5 2 4.5 4.5zm40.8 0c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5 4.5 2 4.5 4.5z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.5 16h-.2c-.2-.1-.3-.3-.3-.5v-2.7l-.7-.8H2c-.1 0-.2 0-.2-.1l-1-.5c-.1 0-.2-.1-.2-.2l-.5-1c-.1 0-.1-.1-.1-.2V2c0-.1 0-.2.1-.2l.5-1C.6.7.7.6.8.6l1-.5c0-.1.1-.1.2-.1h12c.1 0 .2 0 .2.1l1 .5c.1 0 .2.1.2.2l.5 1c.1 0 .1.1.1.2v8c0 .1 0 .2-.1.2l-.5 1c0 .1-.1.2-.2.2l-1 .5c0 .1-.1.1-.2.1H7.7l-3.9 3.9s-.2.1-.3.1zm-1.4-5h.4c.1 0 .3.1.4.2l1 1.1c.1 0 .1.1.1.3v1.7l3.1-3.1c.1-.1.3-.2.4-.2h6.4l.7-.4.4-.7V2.1l-.4-.7-.7-.4H2.1l-.7.4-.4.7v7.8l.4.7.7.4z"/><path d="M3 7h10v1H3zM3 4h10v1H3z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 60"><path d="M69.2 27c1.1 0 2.8 1.6 2.8 2.7v15.2c0 1-1.9 3.2-3 3.2h-3.5c-1 0-2.5 1-2.5 2v4l-5.7-5c-.4-.4-.8-1-1.3-1H43c-1 0-2-3-2-4h-4c0 3.1 2.6 7 5.7 7H55l9.5 8.4c.4.4.8.6 1.3.6.2 0 .2.1.2-.1v-8.9h3c3.1 0 6-3 6-6.2V29.7c0-3.1-2.6-5.7-5.7-5.7H59v3h10.2z" fill-rule="evenodd" clip-rule="evenodd" fill="#c4c4c4"/><path d="M48.2 37H26l-1.2.9L13 50V39l-2-2H7.5C5.4 37 4 35.8 4 33.7V7.5C4 5.4 5.4 4 7.5 4h41.1c2 0 3.4 1.4 3.4 3.5v26.1c0 2.1-1.4 3.4-3.5 3.4h-.3zm0-37H7.5C3.4 0 0 3.3 0 7.5v26.1c0 4.1 3.4 7.5 7.5 7.5L9 41v13l3.3 2 14.4-15h21.8c4.1 0 7.5-3.3 7.5-7.4V7.5C56 3.3 52.6 0 48.5 0h-.3z" fill-rule="evenodd" clip-rule="evenodd" fill="#c4c4c4"/><path fill="#ff7500" d="M10 9h34v4H10z"/><path fill="#c4c4c4" d="M10 27h22v4H10zM10 18h34v4H10z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="none" d="M25.236 27.961h7.383v2.217h-7.383z"/><circle fill="none" cx="36.31" cy="26.486" r="1.66"/><path fill="#949494" d="M37.715 20.562c-.893-1.581-2.104-2.934-3.908-2.934h-3.5c-.165.506-.362.997-.582 1.476h4.082c.729 0 1.275.073 2.239 1.778.102.18.637 1.18 1.1 2.651h-10.63a14.005 14.005 0 0 1-3.429 2.339 1.66 1.66 0 0 1-1.54 2.274 1.654 1.654 0 0 1-1.585-1.19c-.655.14-1.329.225-2.014.27a13.953 13.953 0 0 0-.092 1.549v3.617c0 .813.661 1.476 1.476 1.476h.738c.815 0 1.476-.662 1.476-1.476v-.738H36.31v.738c0 .813.66 1.476 1.477 1.476h.738c.815 0 1.476-.662 1.476-1.476v-3.617c-.001-3.861-1.647-7.081-2.286-8.213zm-5.096 9.616h-7.383v-2.217h7.383v2.217zm3.691-2.032a1.66 1.66 0 1 1 0-3.322 1.66 1.66 0 0 1 0 3.322zM.33 35.834a2.467 2.467 0 0 0 4.273 2.467l6.834-11.837a14.279 14.279 0 0 1-4.136-2.703L.33 35.834z"/><path fill="#949494" d="M17.022.465C9.937.465 4.194 6.208 4.194 13.293s5.743 12.828 12.828 12.828c.37 0 .733-.025 1.095-.057a12.7 12.7 0 0 0 1.952-.323c.76-.186 1.493-.434 2.193-.748a12.83 12.83 0 0 0 2.463-1.46 12.883 12.883 0 0 0 3.723-4.429c.242-.476.452-.969.635-1.476a12.79 12.79 0 0 0 .767-4.335C29.85 6.208 24.106.465 17.022.465zm3.753 22.907c-.671.251-1.372.435-2.098.548-.541.084-1.091.141-1.655.141-5.938 0-10.768-4.83-10.768-10.768S11.085 2.525 17.022 2.525s10.767 4.831 10.767 10.768a10.694 10.694 0 0 1-1.716 5.811 10.803 10.803 0 0 1-5.298 4.268z"/><path fill="#FF7500" d="M19.816 9.208a7.643 7.643 0 0 0-.828-.236c-.261-.057-.607-.084-1.039-.084-.699 0-1.264.24-1.696.718-.431.481-.736 1.079-.914 1.797h4.026l-.264 1.4H15.09l-.038.359a3.09 3.09 0 0 0-.019.341v.349c0 .111.006.229.021.351h3.745l-.266 1.4h-3.308c.139 1.047.458 1.822.953 2.326.495.505 1.125.758 1.887.758.599 0 1.183-.114 1.756-.34v1.588a4.82 4.82 0 0 1-.899.199 7.256 7.256 0 0 1-.993.067c-.706 0-1.321-.114-1.845-.339a3.817 3.817 0 0 1-1.334-.946 4.654 4.654 0 0 1-.87-1.455 8.3 8.3 0 0 1-.454-1.858h-1.551l.265-1.4h1.174a3.09 3.09 0 0 1-.019-.351v-.349c0-.111.005-.224.019-.341l.037-.359H11.93l.265-1.4h1.344a8.097 8.097 0 0 1 .529-1.504c.228-.484.52-.914.88-1.285a4.19 4.19 0 0 1 1.277-.899c.491-.228 1.072-.341 1.74-.341.441 0 .861.036 1.258.105s.723.154.974.254l-.381 1.475z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40"><path fill="#FF7500" d="M6 23h20v2H6z"/><path fill="#949494" d="M6 28h20v2H6zm0 5h16v2H6zm23 7H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h26c1.7 0 3 1.3 3 3v34c0 1.7-1.3 3-3 3zM3 2c-.6 0-1 .4-1 1v34c0 .6.4 1 1 1h26c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H3zm20.9 5.7C23.1 6.3 22 5 20.4 5h-8.8C10 5 8.9 6.3 8.1 7.7c-.6 1-2.1 4-2.1 7.5v3.3c0 .8.7 1.5 1.5 1.5S9 19.3 9 18.5V18h14v.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.3c0-3.5-1.5-6.4-2.1-7.5zm-14.3.9c.9-1.5 1.4-1.6 2-1.6h8.8c.7 0 1.2.1 2 1.6.1.1.3.6.6 1.4H9c.3-.8.5-1.3.6-1.4zM9.5 15c-.8 0-1.5-.7-1.5-1.5S8.7 12 9.5 12s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm9.5 1h-6v-2h6v2zm3.5-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40"><path d="M30 28.3V37c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h26c.6 0 1 .4 1 1v14.1l2-2V3c0-1.7-1.3-3-3-3H3C1.3 0 0 1.3 0 3v34c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V26.3l-2 2zM24.2 23H6v2h16.2zm-4.1 5H6v2h13.1z" fill="#949494"/><path fill="#FF7500" d="M17.9 33H6v2h13.9zm1.9-.6l.6.6 4.8-2.4-3-3.1z"/><path d="M23.9 7.7C23.1 6.3 22 5 20.4 5h-8.8S8.9 6.3 8.1 7.7c-.6 1-2.1 4-2.1 7.5v3.3c0 .8.7 1.5 1.5 1.5S9 19.3 9 18.5V18h14v.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.3c0-3.5-1.5-6.4-2.1-7.5zm-14.3.9c.9-1.5 1.4-1.6 2-1.6h8.8c.7 0 1.2.1 2 1.6.1.1.3.6.6 1.4H9c.3-.8.5-1.3.6-1.4zM9.5 15c-.8 0-1.5-.7-1.5-1.5S8.7 12 9.5 12s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm9.5 1h-6v-2h6v2zm3.5-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm17.3-.1c.6.6 0 1.2-.6 1.8L26.4 29.4l-3-3 12.8-12.9c.6-.6 1.2-1.2 1.8-.6l1.8 2z" fill="#949494"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M.031 14.142L14.173 0l1.414 1.414L1.445 15.556z"/><path d="M1.415.031l14.142 14.142-1.415 1.414L0 1.445z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="#949494" d="M30 26.499v10.679c0 .548-.405.822-.954.822H3.154C2.604 38 2 37.726 2 37.178V3.319C2 2.77 2.604 2 3.154 2h25.892c.549 0 .954.77.954 1.319V15.41l2-2.008V3.319C32 1.672 30.693 0 29.046 0H3.154C1.507 0 0 1.672 0 3.319v33.859C0 38.825 1.507 40 3.154 40h25.892C30.693 40 32 38.825 32 37.178V24.495l-2 2.004z"/><path fill="#949494" d="M39.704 12.857c-.603-.606-1.177-1.054-1.777-1.661-.602-.606-1.202 0-1.804.607L23.422 24.609l3.006 3.033L39.13 14.834c.421-.422.856-.747.87-1.169.006-.183-.113-.623-.296-.808z"/><path fill="#FF7500" d="M19.883 30.604l.603.606 4.812-2.426-3.009-3.032z"/><path fill="#949494" d="M6 8h20v2H6zM6 13h20v2H6zM6 18h17v2H6z"/><path fill="none" stroke="#FF7500" stroke-width="1.3" stroke-linejoin="round" stroke-miterlimit="10" d="M6.72 31.035s3.271-6.9 5.092-6.648c2.561.355-3.91 9.722-2.388 10.449 1.202.573 3.754-4.291 5.848-4.774.898-.208 1.781.57 1.781.57"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path fill="#949494" d="M36 36c0 2.207-1.792 4-4 4H8a4 4 0 0 1-4-4V4c0-2.21 1.79-4 4-4h24a4 4 0 0 1 4 4v32zM34 4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32c0 1.102.895 2 2 2h24c1.103 0 2-.898 2-2V4z"/><path fill="#949494" d="M10 6.998h20v2H10z"/><path fill="#FF7500" d="M10 12h20v2H10z"/><path fill="#949494" d="M10 16.998h20v2H10zM15.494 33.796l-.471-1.972h-2.456l-.47 1.972H9.955l2.547-8.714h2.665l2.547 8.714h-2.22zm-1.712-7.159l-.875 3.736h1.763l-.888-3.736zM18.925 30.752v-1.516h3.423v1.516h-3.423zM24.133 33.796v-1.255l3.318-5.93H24.29v-1.529h5.591v1.254l-3.318 5.918h3.396v1.542h-5.826z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 21"><path d="M6 18c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1s-1 .5-1 1v11c0 .5.5 1 1 1zM10 18c.5 0 1-.5 1-1V6c0-.5-.5-1-1-1s-1 .5-1 1v11c0 .5.5 1 1 1z"/><path d="M15 2h-4V0H5v2H1c-.5 0-1 .5-1 1v1h1v15c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4h1V3c0-.5-.5-1-1-1zm-2 17H3V4h10v15z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="6.2 5.1 19 18.6"><style>.st0{fill:#1d1d1b}</style><path class="st0" d="M10.2 12.3h4.4v1.1h-3.1v1.9h2.6v1.1h-2.6v2.2h3.2v1.1h-4.5v-7.4zM16 18.9l3.6-5.5h-3.2v-1.1h4.8v.8l-3.6 5.5h3.6v1.1H16v-.8z"/><path class="st0" d="M23.9 8.2v14H7.6v-14h16.3m0-1.3H7.5c-.7 0-1.3.6-1.3 1.3v14.2c0 .7.6 1.3 1.3 1.3h16.4c.7 0 1.3-.6 1.3-1.3V8.2c0-.7-.6-1.3-1.3-1.3z"/><path class="st0" d="M11.1 9.9c-.4 0-.7-.3-.7-.7V5.8c0-.4.3-.7.7-.7.4 0 .7.3.7.7v3.4c-.1.4-.4.7-.7.7zM20.1 9.9c-.4 0-.7-.3-.7-.7V5.8c0-.4.3-.7.7-.7.4 0 .7.3.7.7v3.4c0 .4-.3.7-.7.7z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="7.1 5.6 19 15.1"><style>.st0{fill:#1d1d1b}</style><path class="st0" d="M15.7 5.6h1.5v3.1h-1.5zM15.7 11.6h1.5v3.1h-1.5zM15.7 17.6h1.5v3.1h-1.5zM10.4 5.6L7.1 20.7h1.8l3.3-15.1zM20.8 5.6l3.5 15h1.8l-3.6-15z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="5.4 4.4 19 16.2"><style>.st0{fill:#1d1d1b}</style><path class="st0" d="M16.2 15.2L18 9.4c.1-.2 0-.4-.2-.4-.2-.1-.4 0-.5.1L14 14s0 .1-.1.1l-.1.1c-.2.5-.1 1.1.3 1.4.1.1.2.2.3.2.3.1.6.2 1 .1.3-.1.6-.3.8-.7 0 .1 0 .1 0 0z"/><path class="st0" d="M10.2 20.6c-2.1-1.5-3.4-3.9-3.4-6.7 0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2c0 2.7-1.3 5.2-3.4 6.7h1.9c1.7-1.7 2.7-4.1 2.7-6.7 0-5.2-4.3-9.5-9.5-9.5s-9.5 4.3-9.5 9.5c0 2.6 1 4.9 2.7 6.7h2.1z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="17.2 14.7 24 24.3"><path d="M37.2 22.8c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-.6-.5-1.1-1.1-1.1zM24.8 31h8v1h-8zM24.8 33h5v1h-5z"/><path d="M37.2 20v-5.3h-16V20h-4v13h4v6h8c5.1 0 8-3 8-6h4V20h-4zm-14-3.3h12V20h-12v-3.3zM35.6 33c0 2.2-3.1 1-3.1 1s.2 3.4-3.3 3.4h-6.4v-8.8h12.8V33zm3.6-2h-2v-4h-16v4h-2v-9h20v9z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 10.2 23.9 23.7"><path d="M17 19.1c1.6 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.4-3 3-3m0-2c-2.7 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.3-5-5-5zM31.9 10.2c-2.2 0-4 1.8-4 4 0 .3.1.7.1 1l-5.4 2.7c.4.5.7 1.1 1 1.8L29 17c.7.8 1.8 1.3 2.9 1.3 2.2 0 4-1.8 4-4 0-2.3-1.8-4.1-4-4.1zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM31.9 25.9c-1.2 0-2.2.5-2.9 1.3l-5.3-2.8c-.2.6-.6 1.2-.9 1.8L28 29c-.1.3-.1.6-.1.9 0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18"><path d="M11.9 0H3.1L2 1.5V7h2V2.3L3.8 2H9v5h5v8.8l-.2.2H7.9l-1.8 2h8.4l1.4-1.4V4.2l-4-4.2zM11 5V2.3L13.8 5H11z"/><path d="M6 13V9.6C6 8.8 5.2 8 4.4 8h-.8C2.8 8 2 8.8 2 9.6V13H0l4 4 4-4H6z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M6.6 17.6l4.4-1.1-3.3-3.3z"/><path d="M16 19.3l-1.1.7H2.7l-.7-.7V2.7l.7-.7H15l1 .7v.6l1.6-1.9L15.9 0H1.8C1.1 0 0 1.1 0 1.7v18.5c0 .7 1.1 1.8 1.7 1.8h14.1c.6 0 2.1-1.2 2.1-1.7v-8.2l-2 2.2v5z"/><path d="M12.075 15.375l-3.322-3.324 9.902-9.897 3.323 3.325z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M23.8.6C11.1.6.8 10.9.8 23.6s10.3 23 23 23 23-10.3 23-23c.1-12.7-10.2-23-23-23zm0 44.3c-11.7 0-21.2-9.5-21.2-21.2S12.1 2.5 23.8 2.5 45 12 45 23.7s-9.5 21.2-21.2 21.2z" fill="#923526"/><circle cx="23.8" cy="23.6" r="19.5" fill="#da2d00"/><path d="M30.1 28.5H18.5v-2.1l4.4-4.4c1.3-1.3 2.2-2.3 2.6-2.8s.7-1.1.9-1.6.3-1 .3-1.6c0-.8-.2-1.4-.7-1.8s-1.1-.7-1.9-.7c-.7 0-1.3.1-1.9.4s-1.3.7-2.1 1.3l-1.5-1.8c1-.8 1.9-1.4 2.8-1.7s1.9-.5 2.9-.5c1.6 0 2.9.4 3.8 1.2s1.4 2 1.4 3.4c0 .8-.1 1.5-.4 2.2s-.7 1.4-1.3 2.2-1.5 1.7-2.9 3L22 26v.1h8.1v2.4z"/><path fill="#fff" d="M16 33h16v4H16z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M23.8.6C11.1.6.8 10.9.8 23.6s10.3 23 23 23 23-10.3 23-23c.1-12.7-10.2-23-23-23zm0 44.3c-11.7 0-21.2-9.5-21.2-21.2S12.1 2.5 23.8 2.5 45 12 45 23.7s-9.5 21.2-21.2 21.2z" fill="#817d0a"/><circle cx="23.8" cy="23.6" r="19.5" fill="#d7cb07"/><path d="M29.6 15.4c0 1.1-.3 2-.9 2.7s-1.5 1.2-2.7 1.5v.1c1.4.2 2.4.6 3.1 1.3s1 1.6 1 2.7c0 1.6-.6 2.9-1.7 3.8s-2.8 1.3-5 1.3c-1.9 0-3.5-.3-4.8-.9v-2.4c.7.4 1.5.6 2.3.8s1.6.3 2.3.3c1.3 0 2.3-.2 3-.7s1-1.3 1-2.3c0-.9-.4-1.6-1.1-2s-1.9-.6-3.4-.6h-1.5v-2.2h1.5c2.7 0 4.1-.9 4.1-2.8 0-.7-.2-1.3-.7-1.7s-1.2-.6-2.1-.6c-.6 0-1.3.1-1.9.3s-1.3.5-2.1 1.1l-1.3-1.9c1.6-1.2 3.4-1.7 5.5-1.7 1.7 0 3.1.4 4 1.1s1.4 1.4 1.4 2.8z"/><path fill="#fff" d="M16 33h16v4H16z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M23.8.6C11.1.6.8 10.9.8 23.6s10.3 23 23 23 23-10.3 23-23c.1-12.7-10.2-23-23-23zm0 44.3c-11.7 0-21.2-9.5-21.2-21.2S12.1 2.5 23.8 2.5 45 12 45 23.7s-9.5 21.2-21.2 21.2z" fill="#2a6042"/><circle cx="23.8" cy="23.6" r="19.5" fill="#449567"/><path d="M29.9 24.6h-2.3v3.7h-2.7v-3.7h-7.8v-2.1l7.8-11.3h2.7v11.2h2.3v2.2zm-5-2.3V18c0-1.5 0-2.8.1-3.8h-.1c-.2.5-.6 1.1-1 1.9l-4.3 6.2h5.3z"/><path fill="#fff" d="M16 33h16v4H16z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M7 18v-8H4V7h3V4.5C7.1 2.9 8 1 10 1h3v3h-3v3h3v3h-3v8H7z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 35"><path fill="#fff" d="M0 15v4.5h74V15H0z"/><path fill="#003468" d="M0 0v16.9h74V0H0z"/><path d="M0 35h65.3c4.9 0 8.7-3.9 8.7-8.5v-8.4H0V35z" fill="#ff7500"/><path d="M6.7 31.4h-.1c-1.5 0-2.8-1-2.8-2.7 0-1 1.6-1 1.6 0 0 .7.5 1.2 1.2 1.2h.1c.7 0 1.2-.4 1.2-1 0-1.7-4-1.9-4-4.4v-.3c0-1.5 1.5-2.3 2.7-2.3h.1c1.4 0 2.7.9 2.7 2.2 0 1-1.6 1-1.6 0 0-.4-.4-.7-1.1-.7h-.1c-.6 0-1.1.3-1.1.8v.2c0 1.1 4 1.6 4 4.4.1 1.6-1.2 2.6-2.8 2.6zM13.7 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.3c0-1.5 1.3-2.7 2.8-2.7h.1c1.4 0 2.6.9 2.8 2.3v.1c0 .5-.4.8-.8.8s-.7-.2-.8-.7c-.1-.6-.6-.9-1.2-.9h-.1c-.7 0-1.2.5-1.2 1.1v4.3c0 .6.5 1.1 1.2 1.1h.1c.6 0 1.1-.4 1.2-.9.1-.5.4-.7.8-.7s.8.3.8.8v.2c-.2 1.3-1.4 2.2-2.8 2.2zM21.7 24.5c0-.6-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1v-4.2zm-1.1 6.9h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.2c0-1.5 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7v4.2c0 1.5-1.3 2.7-2.8 2.7zM27.9 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-6.1c0-.5.4-.8.8-.8s.8.3.8.8v6.1c0 .6.5 1.2 1.2 1.2h.1c.7 0 1.2-.5 1.2-1.2v-6.1c0-.5.4-.8.8-.8s.8.3.8.8v6.1c0 1.5-1.2 2.7-2.8 2.7zM36.4 23.5h-1.1v7.1c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-7.1h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.8c.5 0 .8.4.8.8s-.2.8-.8.8zM43.9 31.3h-3.6c-.5 0-.8-.5-.8-.9 0-.2 0-.3.1-.5l3.2-5c.2-.3.2-.4.2-.6v-.1c0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8v.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-.2c0-1.3 1.1-2.3 2.4-2.3 1.3 0 2.4 1 2.4 2.3v.2c0 .5-.2.9-.5 1.4l-2.5 4.1H44c.5 0 .8.4.8.8-.1.2-.3.6-.9.6zM50.3 29.5H50v1.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-1.2h-2.2c-.6 0-.9-.3-.9-.8 0-.1 0-.3.1-.4l2.6-5.9c.2-.3.4-.5.7-.5.4 0 .8.3.8.8 0 .1 0 .2-.1.3l-2.3 5h1.2v-.8c0-.5.4-.8.8-.8s.8.3.8.8v.8h.3c.5 0 .8.4.8.8s-.2.7-.7.7z" fill="#003468"/><path d="M9.1 5.5H5.8v2.2H8c.5 0 .8.4.8.8s-.3.8-.8.8H5.8v3.4c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h4.1c.5 0 .8.4.8.8s-.3.8-.8.8zM11.9 13.4c-.4 0-.8-.3-.8-.8v-8c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .5-.4.8-.8.8zM20 13.4h-.2c-.5 0-.7-.3-.9-.7l-2.2-5.1v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l2.2 4.9V4.6c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .4-.4.8-.8.8zM25.7 6.7l-.9 2.9h1.8l-.9-2.9zm2.7 6.7c-.3 0-.6-.2-.7-.6l-.5-1.6h-2.8l-.5 1.6c-.1.4-.4.6-.8.6s-.8-.3-.8-.8v-.3l2.5-7.9c.2-.6.5-.7.9-.7.3 0 .7.1.9.7l2.5 7.9v.3c.1.5-.3.8-.7.8zM35.5 13.4h-.2c-.5 0-.7-.3-.9-.7l-2.2-5.1v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l2.2 4.9V4.6c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .4-.3.8-.8.8zM41.3 13.4h-.1c-1.5 0-2.8-1.2-2.8-2.7V6.5c0-1.5 1.2-2.7 2.8-2.7h.1c1.4 0 2.6.9 2.8 2.3v.1c-.1.5-.5.8-.9.8s-.7-.2-.8-.7c-.1-.6-.6-.9-1.2-.9h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.6 0 1.1-.4 1.2-.9.1-.5.4-.7.8-.7s.8.3.8.8v.2c-.2 1.2-1.3 2.2-2.7 2.2zM50.8 13.3h-4.1c-.4 0-.8-.4-.8-.8V4.7c0-.4.4-.8.8-.8h4.1c.5 0 .8.4.8.8s-.3.8-.8.8h-3.3v2.2h2.2c.5 0 .8.4.8.8s-.3.8-.8.8h-2.2v2.5h3.3c.5 0 .8.4.8.8 0 .3-.3.7-.8.7z" fill="#fff"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" version="1"><g fill-rule="evenodd"><path fill="#fff" d="M640 480H0V0h640z"/><path fill="#df0000" d="M640 480H0V319.997h640zm0-319.875H0V.122h640z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><g fill-rule="evenodd" stroke-width="1pt"><path d="M0 0h213.335v479.997H0z"/><path fill="#ffd90c" d="M213.335 0H426.67v479.997H213.335z"/><path fill="#f31830" d="M426.67 0h213.335v479.997H426.67z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" version="1"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fc0" d="M0 320h640v160.002H0z"/><path d="M0 0h640v160H0z"/><path fill="red" d="M0 160h640v160H0z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" version="1"><path fill="#c60b1e" d="M0 0h640v480H0z"/><path fill="#ffc400" d="M0 120h640v240H0z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" version="1"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#00267f" d="M0 0h213.337v480H0z"/><path fill="#f31830" d="M426.662 0H640v480H426.662z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" version="1"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v479.997H0z"/><path fill="#005700" d="M0 0h213.331v479.997H0z"/><path fill="#fc0000" d="M426.663 0h213.331v479.997H426.663z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" fill-opacity="14.118" viewBox="0 0 640 480" fill="#28ff09"><g fill-rule="evenodd" fill-opacity="1"><path fill="red" d="M0 0h640v160.683H0z"/><path fill="#fff" d="M0 160.683h640V321.55H0z"/><path fill="#0098ff" d="M0 321.55h640v158.448H0z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" version="1"><g fill-rule="evenodd" stroke-width="1pt" transform="scale(1.25 .9375)"><rect rx="0" ry="0" height="509.76" width="512" fill="#fff"/><rect rx="0" ry="0" height="169.92" width="512" y="342.08" fill="#21468b"/><path fill="#ae1c28" d="M0 0h512v169.92H0z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" version="1"><g fill-rule="evenodd"><path fill="#fff" d="M640 480H0V0h640z"/><path stroke-width="1pt" fill="#dc143c" d="M640 480H0V240h640z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M7.2 8.9c0-1.1 2.4-1.4 2.4-4 0-1.6-.1-2.5-1.3-3.1 0-.4 2.1-.1 2.1-.9-.5.1-4.7.1-4.7.1S1 1.1 1 5.2c0 4.1 4.1 3.6 4.1 3.6v1c0 .4.5.3.6 1.1-.3 0-5.7-.1-5.7 3.5C0 18.2 4.8 18 4.8 18s5.5.3 5.5-4.3c0-2.8-3.1-3.7-3.1-4.8zM3.1 5.4c-.4-1.6.2-3.2 1.3-3.5 1.1-.3 2.4.8 2.8 2.4S7.1 7.5 6 7.8c-1.1.3-2.4-.7-2.9-2.4zm2.4 11.4c-1.9.2-3.5-.9-3.6-2.3-.1-1.4 1.4-2.7 3.3-2.8 1.9-.1 3.5.9 3.6 2.3.1 1.4-1.4 2.7-3.3 2.8zM18 4.1V5h-3.1v3H14V5h-3v-.9h3V1h.9v3.1z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.98 4.888c.568-.586 1.095-1.173 1.667-1.713 1.034-.978 2.29-1.436 3.702-1.523 1.204-.074 2.37.06 3.462.587 1.686.814 2.665 2.188 3.034 4 .428 2.09-.06 4.015-1.135 5.82-.61 1.03-1.422 1.892-2.26 2.735-1.506 1.517-3.006 3.04-4.507 4.563-1.15 1.167-2.295 2.338-3.445 3.506-.367.373-.626.374-.99.004a3944.265 3944.265 0 0 1-6.425-6.52c-.887-.9-1.79-1.79-2.634-2.728C1.27 12.313.435 10.806.13 9.053-.195 7.165.058 5.38 1.24 3.813c.932-1.237 2.22-1.88 3.73-2.106a7.738 7.738 0 0 1 2.857.11c1.274.288 2.28 1.01 3.15 1.952.342.37.675.75 1.004 1.118z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.8 19L20 5.7 18.4 4 6.8 15.7l-5.2-5.3L0 12.1z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 36"><path d="M32 8.7V31c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h18.7L25 2H5C2.2 2 0 4.2 0 7v24c0 2.8 2.2 5 5 5h24c2.8 0 5-2.2 5-5V7c0-.3 0-.6-.1-.9L32 8.7z" fill="#949494"/><path d="M32 .3c-.9-.6-2.1-.3-2.7.6L16.6 19l-6.3-5.5c-.7-.6-1.8-.7-2.6-.1-.9.7-1 1.9-.3 2.8l8 10c.4.5 1 .8 1.6.8h.1c.7 0 1.2-.4 1.6-1l14-23c.6-.9.3-2.1-.7-2.7z" fill="#FF7500"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 35"><path fill="#fff" d="M0 15v4.5h74V15H0z"/><path fill="#003468" d="M0 0v16.9h74V0H0z"/><path d="M0 35h65.3c4.9 0 8.7-3.9 8.7-8.5v-8.4H0V35z" fill="#ff7500"/><path d="M6.7 31.4h-.1c-1.5 0-2.8-1-2.8-2.7 0-1 1.6-1 1.6 0 0 .7.5 1.2 1.2 1.2h.1c.7 0 1.2-.4 1.2-1 0-1.7-4-1.9-4-4.4v-.3c0-1.5 1.5-2.3 2.7-2.3h.1c1.4 0 2.7.9 2.7 2.2 0 1-1.6 1-1.6 0 0-.4-.4-.7-1.1-.7h-.1c-.6 0-1.1.3-1.1.8v.2c0 1.1 4 1.6 4 4.4.1 1.6-1.2 2.6-2.8 2.6zM13.7 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.2c0-1.5 1.3-2.7 2.8-2.7h.1c1.4 0 2.6.9 2.8 2.3v.1c0 .5-.4.8-.8.8s-.7-.2-.8-.7c-.1-.6-.6-.9-1.2-.9h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.6 0 1.1-.4 1.2-.9.1-.5.4-.7.8-.7s.8.3.8.8v.1c-.2 1.4-1.4 2.3-2.8 2.3zM20.6 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-4.2c0-1.5 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7v4.2c0 1.5-1.3 2.7-2.8 2.7zm1.1-6.9c0-.6-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1v-4.2zM27.9 31.4h-.1c-1.5 0-2.8-1.2-2.8-2.7v-6.1c0-.5.4-.8.8-.8s.8.3.8.8v6.1c0 .6.5 1.2 1.2 1.2h.1c.7 0 1.2-.5 1.2-1.2v-6.1c0-.5.4-.8.8-.8s.8.3.8.8v6.1c0 1.5-1.2 2.7-2.8 2.7zM36.4 23.5h-1.1v7.1c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-7.1h-1.1c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h3.8c.5 0 .8.4.8.8s-.2.8-.8.8zM43.9 31.3h-3.6c-.5 0-.8-.5-.8-.9 0-.2 0-.3.1-.5l3.2-5c.2-.3.2-.4.2-.6v-.1c0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8v.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-.2c0-1.3 1.1-2.3 2.4-2.3 1.3 0 2.4 1 2.4 2.3v.1c0 .5-.2.9-.5 1.4l-2.5 4.1H44c.5 0 .8.4.8.8-.1.3-.3.7-.9.7zM50.3 29.5H50v1.2c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-1.2h-2.2c-.6 0-.9-.3-.9-.8 0-.1 0-.3.1-.4l2.6-5.9c.2-.3.4-.5.7-.5.4 0 .8.3.8.8 0 .1 0 .2-.1.3l-2.3 5h1.2v-.8c0-.5.4-.8.8-.8s.8.3.8.8v.8h.3c.5 0 .8.4.8.8s-.2.7-.7.7z" fill="#003468"/><path d="M5 13.4c-.4 0-.8-.3-.8-.8v-8c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .5-.4.8-.8.8zM14.5 13.4c-.4 0-.8-.3-.8-.8v-5l-1.2 2.7c-.2.4-.6.5-.8.5-.3 0-.6-.1-.8-.5L9.7 7.6v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l1.7 3.8 1.7-3.8c.2-.4.4-.7.9-.7h.2c.4 0 .8.4.8.8v8c0 .5-.4.8-.8.8zM23.9 13.4c-.4 0-.8-.3-.8-.8v-5l-1.2 2.7c-.2.4-.6.5-.8.5-.3 0-.6-.1-.8-.5l-1.2-2.7v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l1.7 3.8 1.7-3.8c.2-.4.4-.7.9-.7h.2c.4 0 .8.4.8.8v8c0 .5-.4.8-.8.8zM29.6 13.4h-.1c-1.5 0-2.8-1.2-2.8-2.7V6.5c0-1.5 1.3-2.7 2.8-2.7h.1c1.5 0 2.8 1.2 2.8 2.7v4.2c0 1.5-1.3 2.7-2.8 2.7zm1.2-6.9c0-.6-.5-1.1-1.2-1.1h-.1c-.7 0-1.2.5-1.2 1.1v4.2c0 .6.5 1.1 1.2 1.1h.1c.7 0 1.2-.5 1.2-1.1V6.5zM37.2 13.3h-2c-.4 0-.8-.4-.8-.8V4.7c0-.4.4-.8.8-.8h2c1.6 0 2.7 1.1 2.7 2.6 0 .9-.4 1.4-.9 1.9.6.5 1 1.2 1 2v.1c0 1.6-1.3 2.8-2.8 2.8zm0-7.8H36v2.2h1.2c.6 0 1.1-.5 1.1-1.2s-.5-1-1.1-1zm1.2 5c0-.7-.6-1.2-1.2-1.2H36v2.5h1.2c.7 0 1.2-.5 1.2-1.2v-.1zM42.4 13.4c-.4 0-.8-.3-.8-.8v-8c0-.5.4-.8.8-.8s.8.3.8.8v8c.1.5-.3.8-.8.8zM49.8 13.3h-3.5c-.4 0-.8-.4-.8-.8V4.6c0-.5.4-.8.8-.8s.7.3.7.8v7.1h2.7c.5 0 .8.4.8.8.1.4-.2.8-.7.8zM52.2 13.4c-.4 0-.8-.3-.8-.8v-8c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .5-.4.8-.8.8zM60 13.3h-4.1c-.4 0-.8-.4-.8-.8V4.7c0-.4.4-.8.8-.8H60c.5 0 .8.4.8.8s-.3.8-.8.8h-3.3v2.2h2.2c.5 0 .8.4.8.8s-.3.8-.8.8h-2.2v2.5H60c.5 0 .8.4.8.8 0 .3-.3.7-.8.7zM67.3 13.4h-.2c-.5 0-.7-.3-.9-.7L64 7.6v5c0 .5-.4.8-.8.8s-.8-.3-.8-.8v-8c0-.4.4-.8.8-.8h.2c.5 0 .7.3.9.7l2.2 4.9V4.6c0-.5.4-.8.8-.8s.8.3.8.8v8c0 .4-.4.8-.8.8z" fill="#fff"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 1c3.859 0 7 3.141 7 7s-3.141 7-7 7-7-3.141-7-7 3.141-7 7-7m0-1C3.588 0 0 3.588 0 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8z"/><path d="M9.333 11.667c0 .458-.238 1-.762 1H7.429c-.523 0-.762-.542-.762-1V8.333c0-.458.238-1 .762-1h1.143c.523 0 .762.542.762 1v3.334z"/><circle cx="8" cy="4.667" r="1.333"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22"><path d="M18 15.4c-.5 1.1-.7 1.6-1.4 2.5-.9 1.4-2.1 3-3.7 3-1.4 0-1.7-.9-3.6-.9-1.9 0-2.2.9-3.6.9-1.5 0-2.7-1.5-3.6-2.9C-.4 14.2-.6 9.8.9 7.5 2 5.9 3.7 4.9 5.3 4.9c1.6 0 2.7.9 4 .9 1.3 0 2.1-.9 4-.9 1.4 0 2.9.8 4 2.1-3.4 2-2.9 7.1.7 8.4z" fill-rule="evenodd" clip-rule="evenodd"/><path d="M11.9 3.4c.7-.9 1.2-2.1 1-3.4-1.1.1-2.4.8-3.2 1.7-.7.8-1.3 2.1-1 3.3 1.2.1 2.5-.6 3.2-1.6z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><ellipse cx="32" cy="22.1" rx="2" ry="2"/><ellipse cx="23.9" cy="3.2" rx="2.5" ry="3.2"/><path d="M42.7 7h4.6c.6 0 1-.3 1-.9v-.2l-1-3.8c-.2-1-1.1-1.7-2.2-1.7s-2 .8-2.2 1.8l-1 3.8v.1c-.2.6.2.9.8.9zM37.4 20.9c-.5-.3-1.1-.1-1.4.4l-2.4 4.6-.3.1h-2.9L28 24.1c-.4-.3-1.1-.3-1.4.1-.3.4-.1 1 .4 1.4l2.8 2V40h4.4l1.2-13.4 2.4-4.4c.3-.4.1-1-.4-1.3zM27.8 11.8v-.3c0-1.6-1.3-3-2.9-3.2l-5-.4h-.3c-1.7 0-3 1.2-3.2 2.9l-.7 7.7v.3c0 1 .4 1.9 1.2 2.5l.6 8.7c.9 0 1.8.3 2.5.8l1-1c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-.8 1c.5.8 1.1 1.7 1.1 2.8v5h1.6l1.1-18c.9-.5 1.5-1.4 1.6-2.5l.8-7.7z"/><path d="M17.3 32H15c-.9 0-1.7-.6-1.9-1.4l-.4-1.3c-.1-.3-.2-.6-.5-.6-.4 0-.5.3-.5.8v1l-2.9.7c-.2.1-.5.2-.6.5-.2.3-.2.5-.1.7l.5 1c.2.2.4.6.6.6h1.5s1.3-.1 1.3 1v5h2v-3h2.3c1.1 0 2.7.9 2.7 2v1h2v-5c0-1.7-2.1-3-3.7-3zM41.1 10.8l-3.8 8.1c-.2.5 0 1 .4 1.3.2.1.3.1.5.1.3 0 .7-.2.9-.5l1.9-3 .1 3.1c0 .1 0 .1-.1.2l-3 7.5c0 .1-.1.3-.1.4 0 .6.5 1 1 1h3l1.6 11h2.8l1.6-11h2.8c.6 0 1.1-.5 1.1-1 0-.1.1-.3 0-.4l-2.9-7.5.2-8c0-.8-.3-1.6-.9-2.2-.4-.6-1.2-.9-2.1-.9h-2.3c-.8 0-1.6.3-2.2.9-.2.3-.4.6-.5.9"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><circle cx="32.5" cy="4.5" r="4.5"/><path d="M49 18.5c0-1.4-1.1-2.5-2.5-2.5-1 0-1.8.6-2.2 1.3C41.6 14.1 37.1 12 32 12c-4.3 0-8.2 1.5-10.9 4-.8-1-1.4-2.1-2-2.6-.5-.5-1.1-.4-1.1-.4v6.4c-1.1.6-1.6 1.3-2 2.6h-3c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h3c1 2.1 3.3 3.7 6 4.3V38c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-1.3c1 .2 2 .3 3 .3s2-.1 3-.3V38c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-4.2h.1c3.1-2.3 4.9-5.6 4.9-9.3 0-1.2-.2-2.4-.6-3.5h.1c1.4 0 2.5-1.1 2.5-2.5zm-29 6.7c-1 0-1.8-.6-2-1.5 0-.1 0-.2-.1-.3V23c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2s-1.1 2.2-2.3 2.2z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><path d="M3.7 36l13-7 5 1 4-5 8-2 5 3 9-8 9 4v18h-53v-4zM7 15.4l-.7-8S25.4.5 26.2.2c1-.4 1.6.2 1.6.2l6.7 5.1 12.8-3.2c.8-.2 1.6.2 1.8.8s2.4 6.6 2.4 6.6l-1.7 1.4-.2-.7C48.5 7.5 45.3 6 42.4 7c-2.9 1.1-4.4 4.3-3.4 7.2l.2.7-2 .7-13.3 4.8-.2-.7c-1.1-2.9-4.3-4.4-7.2-3.4-2.9 1.1-4.4 4.3-3.4 7.2l.2.4-2.8.5-3.5-9zm13.9-5.1l-2.2-6L8.1 8.2l.9 6.5 11.9-4.4zm11.3-4.1l-5.5-4.8-6 2.2 2.2 6 9.3-3.4z"/><path d="M48.8 13.1c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3-.1 4.2 1.8 4.2 4.2zm-4.3-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM22.9 22.1c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3-.1 4.2 1.8 4.2 4.2zm-4.3-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM8.8 23.3c.2.5-.1 1.1-.6 1.3l-.9.3c-.5.2-1.1-.1-1.3-.6l-2.4-6.6c-.2-.5.1-1.1.6-1.3l.9-.3c.5-.2 1.1.1 1.3.6l2.4 6.6z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><path d="M28.5 4.7c1.1 2.6.7 5.4-.7 7.3-2.4-.3-4.6-2-5.7-4.7-1.1-2.6-.7-5.4.7-7.3 2.4.3 4.6 2 5.7 4.7zm7.1 15.2c.3 2.4 2 4.6 4.7 5.7 2.6 1.1 5.3.9 7.2-.6-.3-2.4-1.9-4.8-4.6-5.9-2.6-1.1-5.4-.7-7.3.8zM12.5 25c1.9 1.5 4.7 1.7 7.3.6 2.6-1.1 4.4-3.3 4.7-5.7-1.9-1.5-4.7-1.8-7.3-.7-2.7 1-4.4 3.4-4.7 5.8zm23.1-9.7c1.9 1.5 4.7 1.8 7.3.7 2.6-1.1 4.2-3.6 4.6-6-1.9-1.5-4.6-1.6-7.2-.5-2.7 1.1-4.4 3.4-4.7 5.8zM32.3 12c2.4-.3 4.6-2 5.7-4.7 1.1-2.6.7-5.4-.7-7.3-2.4.3-4.6 2-5.7 4.7-1.1 2.6-.7 5.4.7 7.3zm8.2 25c-3-2-8-2.4-8-8v-6c0-2.1 1.5-3.8 2.6-5 .5-.5.4-1.3-.1-1.8s-1.3-.4-1.8.1c-.7.8-1.5 1.7-2.1 2.9-.2-1.9-.6-3.9-1.4-6-.2-.6-1-1-1.6-.7-.6.2-1 1-.7 1.6.8 2 1.1 4 1.3 5.8-.6-.5-1.3-.9-2.2-1.3-.6-.3-1.4 0-1.6.6s0 1.4.6 1.6c.8.4 2 .8 2 1.3V29c0 5.6-5 6-8 8 3.1 1 8 0 9-2l1 5h1l1-5c1 2 6.1 3 9 2zM12.5 10c.3 2.4 2 4.9 4.7 6 2.6 1.1 5.4.7 7.3-.7-.3-2.4-2-4.6-4.7-5.7-2.6-1.2-5.4-1.1-7.3.4z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><style>.st0{fill-rule:evenodd;clip-rule:evenodd}</style><circle cx="30" cy="25" r="1.5"/><path class="st0" d="M27.6 27.4l-.7-4.4H31c2.1 0 2.9.3 4.3 1.1l5.4 3.3H27.6zm-11.7 0l2.6-3c1.1-1.2 2.4-1.5 4.6-1.5h1.6l.7 4.4h-9.5zm40.4 1.2l-13-1.7-7.3-4.1c-1.6-.9-2.6-1.2-5.1-1.2h-8.7c-2.4 0-3.5.3-5.1 1.2l-5 3.5-8.5 1.1c-2 0-3.7 2.1-3.7 4.8 0 2.1 1.2 4 2.5 4.8h4.3v-1.5c0-3.2 2.6-5.8 5.8-5.8s5.8 2.6 5.8 5.8V37h25.1v-1.5c0-3.2 2.6-5.8 5.8-5.8 3.2 0 5.8 2.6 5.8 5.8V37h3.1c1-.9 1.8-2.4 1.8-3.9.1-2.4-1.8-4.2-3.6-4.5zm-7 4.3c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7.1-1.5-1.2-2.7-2.7-2.7zm0 7.1l-2.2-.6-1.6-1.6-.5-2.2.6-2.2 1.6-1.6 2.2-.6 2.2.6 1.6 1.6.6 2.2-.6 2.2-1.6 1.6-2.3.6zm-36.7-7.1c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm0 7.1l-2.2-.6-1.6-1.6-.6-2.2.6-2.2 1.6-1.6 2.2-.6 2.2.6 1.6 1.6.6 2.2-.6 2.2-1.6 1.6-2.2.6z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40"><style>.st0{fill:#010202}</style><path class="st0" d="M2.5 18c7 2.6 8.1-5.6 14-5l-1 2c-3.5-.2-3 7-8 7-2 0-3.7-1.1-5-4zM39.5 34h4.8c1.1 0 1.7-.8 1.3-1.9l-2-5.2-1.7 2.3 1.3 2.8h-2.8l-.9 2zM22.2 31.2l1.5.8c1.4.8 2 1.6 2.3 2.4.3.8.5 1.5.5 1.5h2l-.5-2c-.3-1.2-1.4-2.9-2.9-3.6L19.9 28l2.3 3.2z"/><path class="st0" d="M16.2 22.1l-3.5 2.6c-.9.7-.9 1.8-.1 2.5l5 4.5c.8.7 1.9 2.2 2.3 3.2l.9 2.1h2.5l-1.5-3.4c-.4-1-1.4-2.5-2.1-3.3l-2.7-3 7.5-4.3h3s5.1 1.4 9.6 2.4L32.5 40h1.7l7.2-14c4 0 6-15 8-15s3.3.6 5 1.4c1.7.8 3-.4 3-1.4s-.4-1.4-.8-1.7c-1-.7-7.2-5.8-7.2-5.8V0C48 0 41.2 12 37.2 12h-1.8v3.8c0 2-2.2 4.2-4.2 4.2h-2.6c-2 0-4.2-2.2-4.2-4.2V12h-2c-3.7 0-7 4-7 7 .1 1.2.4 2.3.8 3.1z"/><path class="st0" d="M32.5 11h-5c-.6 0-1 .4-1 1v3c0 1.7 1.3 3 3 3h1c1.7 0 3-1.3 3-3v-3c0-.6-.4-1-1-1z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/><path d="M17.7 11H20V9h-2.3c-.2-3.1-2.4-5.2-5.2-6.2-.2 0-.4-.1-.5-.2-.5-.1-.5-.2-1-.2V0H9v2.4c-2.8.2-4.8 1.9-6 4.4-.3.8-.5 1.2-.7 2.2H0v2h2.3c.1.7.2 1 .5 1.7.2.3.3.7.5 1 .2.3.3.5.5.8 1.3 1.8 2.9 3 5.2 3.2V20h2v-2.3c3.8-.4 6.3-2.9 6.7-6.7zM10 16.5c-2 0-3.8-.9-5-2.3-.2-.3-.5-.7-.7-1-.5-.9-.8-2-.8-3.1 0-.7.1-1.3.3-2 .2-.6.4-1.3.9-1.9.4-.6 1-1.2 1.6-1.6 1-.8 2.3-1.2 3.7-1.2h.8c1.9.2 3.5 1.3 4.6 2.8l.3.6c.3.4.4.9.5 1.2.2.6.3 1.2.3 2v.7c0 .4-.1.8-.2 1.2-.8 2.6-3.3 4.6-6.3 4.6z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M9 11.9l-9-6v7.5c0 .9.7 1.6 1.6 1.6h14.7c.9 0 1.6-.7 1.6-1.6V6v-.2L9 11.9zm0-1.6l8.5-5.9c-.3-.2-.9-.4-1.3-.4H1.8c-.4 0-1 .2-1.3.4L9 10.3z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 15"><g fill="#8C91A0"><path d="M6 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.8c-.993 0-1.8-.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8z"/><path d="M1.604 13.5c-.066 0-.104-.898-.104-1.225 0-2.484 2.015-4.638 4.5-4.638s4.5 2.196 4.5 4.681c0 .346-.047.182-.12 1.182h13.24c-.073-1-.12-.905-.12-1.25 0-2.485 2.015-4.625 4.5-4.625s4.5 2.202 4.5 4.688c0 .345-.047.188-.12 1.188h.466C33.482 12.5 34 11.207 34 10c0-2.092-1.321-3.581-2.496-3.842l-7.031-1.377S18.979.5 15.713.5H9.099C4.002.5 0 6.273 0 9.463 0 11.164.172 11.5.953 13.5h.651zm3.238-8L6.25 3.181C7.241 1.619 9.262 1.5 11.094 1.5h1.075l.479 4H4.842zm9.238 0l-.478-4h2.11c2.379 0 7.07 4 7.07 4H14.08z"/><path d="M28 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.8c-.993 0-1.8-.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 20"><g fill="#8C91A0"><path d="M26.742 11.596c-.973 0-1.528-.469-1.528-1.528V7.775h2.292c.549 0 1.182.311 1.528.764l2.426 3.057h-4.718zm6.569.955L29.44 7.744c-.521-.705-1.359-1.115-2.303-1.115H23.686c-.632 0-1.146.514-1.146 1.146v10.696h3.155a3.1 3.1 0 0 1-.1-.764 3.057 3.057 0 0 1 6.114 0c0 .265-.037.519-.101.764h1.724A3.047 3.047 0 0 0 34 16.562v-1.634c0-.731-.199-1.697-.689-2.377z"/><path d="M30.332 1.859l-.685-.393c-.548-.312-1.511-.568-2.142-.568h-6.494c-.631 0-1.631.177-2.223.393l-3.126 1.137H1.529C.688 2.428 0 3.115 0 3.955v12.988c0 .842.688 1.528 1.529 1.528H3.82c.033 0 .062-.007.096-.01v.01h2.679a3.054 3.054 0 0 1-.101-.764 3.057 3.057 0 1 1 6.014.764h9.268V7.775c0-1.053.857-1.91 1.91-1.91H28.653l1.68-.959c.547-.312.994-.999.994-1.523-.001-.527-.448-1.212-.995-1.524zM6.494 9.303c0 .631-.516 1.146-1.145 1.146H3.82a1.15 1.15 0 0 1-1.146-1.146V7.775A1.15 1.15 0 0 1 3.82 6.629h1.53a1.15 1.15 0 0 1 1.145 1.146v1.528zm12.608 0a1.15 1.15 0 0 1-1.146 1.146h-4.201a1.15 1.15 0 0 1-1.146-1.146V7.775a1.15 1.15 0 0 1 1.146-1.146h4.201a1.15 1.15 0 0 1 1.146 1.146v1.528z"/><path d="M10.697 17.708a1.147 1.147 0 1 1-2.293-.001 1.147 1.147 0 0 1 2.293.001zm-1.146-2.292a2.291 2.291 0 1 0 0 4.584 2.293 2.293 0 1 0 0-4.584zM29.799 17.708a1.147 1.147 0 1 1-2.293-.001 1.147 1.147 0 0 1 2.293.001zm-1.147-2.292A2.292 2.292 0 1 0 28.65 20a2.292 2.292 0 0 0 .002-4.584z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 15"><g fill="#8C91A0"><path d="M9.85 6.227s-5.562-2.35-7.213-2.91c-.231-.08-.387-.133-.519-.133-.513 0-.863.431-.863.907a.9.9 0 0 0 .481.798c.115.057 8.1 3.74 8.1 3.74s6.521-3.582 7.41-4.072c.887-.49 1.02-1.057 1.02-1.057h-3.74c-1.426 0-3.867.857-4.676 2.727z"/><path d="M20.211.501c4.258 1.739 5.125 3.534 4.837 4.978 0 0-2.069.63-3.298 1.002-2.277.689-4.047 2.432-4.047 4.926 0 .854.146 1.094.507 2.094h-7.029c-1.27 0-2.095-.68-2.095-1.492 0-1.301 2.06-2.479 3.453-3.275 0 0 5.273-2.802 5.91-3.153.639-.352 1.051-.832 1.051-1.3V2.192c0-1.037.635-1.722.711-1.691zM6.344 11.76a2.105 2.105 0 1 1-4.207-.001 2.105 2.105 0 0 1 4.207.001zM4.24 8.02a3.74 3.74 0 1 0 .001 7.481A3.74 3.74 0 0 0 4.24 8.02z"/><path d="M25.045 11.76a2.105 2.105 0 1 1-4.208-.002 2.105 2.105 0 0 1 4.208.002zm-2.104-3.74a3.74 3.74 0 1 0 0 7.48 3.74 3.74 0 0 0 0-7.48z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 17"><g fill="#8C91A0"><path d="M7.871 11.796H3.123v.897l3.525 1.111a3.283 3.283 0 0 1 1.223-2.008zM33.697 6.799l-.729-3.105c-.166-.715-.902-1.265-1.635-1.265H26c-.733 0-1.367.532-1.367 1.265v8.103H11.906a3.295 3.295 0 0 1 1.27 2.429h11.467a3.291 3.291 0 0 1 6.574 0h1.449C33.4 14.225 34 13.76 34 13.027V9.414c0-.733-.137-1.9-.303-2.615zm-4.363.834c-.848 0-1.232-.348-1.232-1.271V4.164H31c.521 0 1 .119 1.129.672l.537 2.797h-3.332z"/><path d="M23.939 11.103H1.334C.6 11.103 0 10.428 0 9.694V1.361C0 .627.6 0 1.334 0h21.333c.733 0 1.272.627 1.272 1.361v9.742zM11.514 14.398c0 .897-.729 1.626-1.626 1.626a1.627 1.627 0 0 1 0-3.253c.897 0 1.626.729 1.626 1.627zm-1.626-2.602a2.603 2.603 0 1 0 0 5.206 2.603 2.603 0 0 0 0-5.206zM29.555 14.398a1.627 1.627 0 1 1-3.25-.001 1.627 1.627 0 0 1 3.25.001zm-1.626-2.602a2.602 2.602 0 1 0-.001 5.205 2.602 2.602 0 0 0 .001-5.205z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 27 27"><path d="M6.8 1l1.9.5s1 .3.7 1.3l.4 5.3s0 .8-.8 1.1l-1.3.5s-.9.6-.3 1.4c.5.9 4.1 6.5 4.1 6.5s.3.4.8.4c.2 0 .4-.1.6-.2l1-.7s.3-.2.6-.2c.1 0 .2 0 .3.1.4.2 3.7 1.9 3.7 1.9s.8.4.5 1.4c-.3 1-.7 2.5-.7 2.5S16.9 24 15.8 24h-.3c-1.1-.3-14.2-4.4-11-21.1C4.7 1.8 6.8 1 6.8 1"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 43"><path d="M27 7.2c-2-3.4-5.1-5.8-8.8-6.7C17 .2 15.7 0 14.5 0 7.7 0 1.9 4.6.4 11.2c-1 4.3.3 8.3 1.7 11.5C5 29.4 9 35.3 12.6 40.2c.3.4.6.8 1 1.3l1 1.2.4-.6c.5-.7 1.1-1.5 1.6-2.2 1.1-1.6 2.2-3.1 3.3-4.6 3.4-5.1 6.9-10.7 8.7-17 .9-3.8.4-7.7-1.6-11.1zM14.5 21.5c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 44"><path d="M14.1 42c-.4-.5-.7-.9-1-1.3-3.6-4.9-7.6-10.8-10.5-17.5C1.2 19.9-.2 16 .9 11.7 2.4 5.1 8.2.5 15 .5c1.2 0 2.5.2 3.7.5 3.7 1 6.9 3.3 8.8 6.7 2 3.4 2.5 7.3 1.4 11.1-1.8 6.3-5.2 11.9-8.7 17-1 1.6-2.1 3-3.3 4.6-.5.7-1.1 1.5-1.6 2.2l-.4.6-.8-1.2z" fill="#ff7500"/><path d="M15 1c1.2 0 2.4.1 3.6.5 7.5 1.9 12 9.7 9.9 17.2-1.7 6.2-5.1 11.6-8.6 16.9-1.5 2.3-3.2 4.4-4.8 6.8-.6-.7-1.1-1.3-1.5-1.9C9.5 34.9 5.7 29.3 3 23 1.4 19.4.4 15.8 1.3 11.8 2.9 5.3 8.6 1 15 1m0-1C8 0 2 4.8.4 11.6c-1.1 4.5.3 8.5 1.7 11.8C5 30.1 9.1 36.1 12.7 41c.3.4.7.9 1 1.3.2.2.3.4.5.7l.8 1.1.8-1.1c.5-.7 1.1-1.5 1.6-2.2 1.1-1.6 2.2-3.1 3.3-4.6 3.4-5.2 6.9-10.7 8.7-17.2 1.1-4 .6-8-1.4-11.5s-5.3-6-9.2-7C17.6.2 16.3 0 15 0z" fill="#fff"/><path d="M24.5 13.4c0-.9-1.1-.7-1.5-.7h-1c-.1-.6-.4-1-.5-1.1-.7-1.2-1.5-2-2.9-2h-7.3c-1.4 0-2.1 1.1-2.8 2.3-.2.1-.3.1-.4.7h-1c-.5 0-1.6-.2-1.6.7 0 .5 1.2.7 2 .8-.3 1.1-.2 2-.2 3.5V21c0 .5.7.7 1.2.7s1.2-.2 1.2-.7v-1h10.5v.9c0 .5.6.8 1.1.8h.1c.5 0 1.3-.2 1.3-.8v-3.2c0-1.4 0-2.4-.3-3.5.9-.1 2.1-.3 2.1-.8zM9.5 12c.8-1.3 1.3-1.1 1.8-1.1H18.5c.7 0 1.1 0 1.7 1.1.1.1.5.7.8 1.9H8.9c.3-1.2.5-1.8.6-1.9zm-.1 5.2c-.5 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1c-.1.5-.5 1-1 1zm8.2 1.9h-5.2v-1.7h5.2v1.7zm3-1.9c-.5 0-1-.4-1-1 0-.5.4-1 1-1 .5 0 1 .4 1 1 0 .5-.4 1-1 1z" fill="#fff"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 44"><path d="M14.1 42c-.4-.5-.7-.9-1-1.3-3.6-4.9-7.6-10.8-10.5-17.5C1.2 19.9-.2 16 .9 11.7 2.4 5.1 8.2.5 15 .5c1.2 0 2.5.2 3.7.5 3.7 1 6.9 3.3 8.8 6.7 2 3.4 2.5 7.3 1.4 11.1-1.8 6.3-5.2 11.9-8.7 17-1 1.6-2.1 3-3.3 4.6-.5.7-1.1 1.5-1.6 2.2l-.4.6-.8-1.2z" fill="#ff7500"/><path d="M15 1c1.2 0 2.4.1 3.6.5 7.5 1.9 12 9.7 9.9 17.2-1.7 6.2-5.1 11.6-8.6 16.9-1.5 2.3-3.2 4.4-4.8 6.8-.6-.7-1.1-1.3-1.5-1.9C9.5 34.9 5.7 29.3 3 23 1.4 19.4.4 15.8 1.3 11.8 2.9 5.3 8.6 1 15 1m0-1C8 0 2 4.8.4 11.6c-1.1 4.5.3 8.5 1.7 11.8C5 30.1 9.1 36.1 12.7 41c.3.4.7.9 1 1.3.2.2.3.4.5.7l.8 1.1.8-1.1c.5-.7 1.1-1.5 1.6-2.2 1.1-1.6 2.2-3.1 3.3-4.6 3.4-5.2 6.9-10.7 8.7-17.2 1.1-4 .6-8-1.4-11.5s-5.3-6-9.2-7C17.6.2 16.3 0 15 0z" fill="#fff"/><g fill="#fff"><path d="M16.6 19.9c0-.8-.6-1.4-1.4-1.4h-.7c-.8 0-1.4.6-1.4 1.4v6.4c0 .8.6 1.4 1.4 1.4h.7c.8 0 1.4-.6 1.4-1.4v-6.4z"/><path d="M21.5 8.8h-.7c-.6 0-1.3.6-1.3 1.2v.7c-.7 0-1 .1-1 .1-.8-1.8-3-2.8-3-2.8h-1.2s-2.1 1-3 2.8c0 0-.3-.1-1-.1V10c0-.6-.7-1.2-1.3-1.2h-.8s-.8.7-.8 1.2v.7s.8.7 1.5.7l2.1.7c-.4.7-.7 1.9-.7 2.9v2.9c0 2.4.7 3.6 2.1 5v-3.6c0-.7.8-2 2.2-2h.4c1.4 0 2.3 1.2 2.3 2v3.6c1.4-1.4 2.1-2.6 2.1-5V15c0-.9-.4-2.1-.7-2.9l2.1-.7c.7 0 1.5-.7 1.5-.7V10c0-.5-.8-1.2-.8-1.2zm-6.8 5.9c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7.9 0 1.7.8 1.7 1.7 0 1-.7 1.7-1.7 1.7z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M9 1C4.6 1 1 4.6 1 9c0 3.3 2 6.1 4.8 7.3 0-.6 0-1.2.1-1.8l1-4.4s-.3-.5-.3-1.3c0-1.2.7-2.1 1.5-2.1.9.1 1.2.6 1.2 1.3 0 .7-.5 1.8-.7 2.8-.2.9.4 1.5 1.3 1.5 1.5 0 2.5-1.9 2.5-4.3 0-1.7-1.2-3.1-3.3-3.1-2.4 0-3.9 1.8-3.9 3.8 0 .7.2 1.2.5 1.6.2.2.2.2.1.5l-.2.6c-.1.2-.2.3-.4.2-1.1-.5-1.6-1.7-1.6-3.1 0-2.3 1.9-5 5.7-5 3.1 0 5.1 2.2 5.1 4.6 0 3.1-1.7 5.5-4.3 5.5-.9 0-1.7-.5-2-1 0 0-.5 1.8-.6 2.2-.2.6-.5 1.2-.8 1.7.8.4 1.5.5 2.3.5 4.4 0 8-3.6 8-8s-3.6-8-8-8z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><style>.st0{fill:#fff}</style><path d="M24 15c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/><path class="st0" d="M20 14h-3v-3c0-.6-.4-1-1-1s-1 .4-1 1v3h-3c-.6 0-1 .4-1 1s.4 1 1 1h3v3c0 .6.4 1 1 1s1-.4 1-1v-3h3c.6 0 1-.4 1-1s-.4-1-1-1z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#3D648C"><path d="M2.356 20.498h18.13v-5.685H2.356v5.685zm18.13 2.273H2.356A2.272 2.272 0 0 1 .09 20.498v-5.685a2.272 2.272 0 0 1 2.266-2.274h18.13c1.251 0 2.266 1.02 2.266 2.274v5.685a2.272 2.272 0 0 1-2.266 2.273zM13.688 2.778l2.93 2.94h-2.93v-2.94zm.469-2.744H3.49v11.369h2.266V2.307h5.665v5.685h5.666v3.41h2.266V5.248L14.157.034z"/><path d="M19.353 17.655c0 .942-.761 1.706-1.7 1.706-.938 0-1.7-.764-1.7-1.706 0-.94.762-1.705 1.7-1.705.939 0 1.7.764 1.7 1.705"/></g></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 210.5 74 36"><path fill="#FF7500" d="M0 246.236h65.28c4.851 0 8.721-3.983 8.721-8.65V210.5H0v35.736z"/><g fill="#003468"><path d="M8.101 241.691h-.156c-1.868 0-3.476-1.296-3.476-3.458 0-1.331 2.006-1.331 2.006 0 0 .934.605 1.47 1.47 1.47h.156c.864 0 1.521-.45 1.521-1.314 0-2.161-5.031-2.37-5.031-5.533v-.363c0-1.85 1.85-2.957 3.354-2.957h.156c1.78 0 3.371 1.107 3.371 2.766 0 1.279-1.988 1.314-1.988.052 0-.449-.553-.83-1.383-.83h-.156c-.761 0-1.349.415-1.349 1.071v.259c0 1.366 5.031 1.971 5.031 5.533 0 1.972-1.538 3.304-3.526 3.304zM16.798 241.691h-.156c-1.902 0-3.458-1.47-3.458-3.388v-5.395c0-1.919 1.557-3.371 3.458-3.371h.156c1.746 0 3.198 1.193 3.423 2.888a.511.511 0 0 1 .018.172c0 .623-.519.968-1.021.968-.45 0-.882-.276-.968-.864-.104-.709-.708-1.176-1.452-1.176h-.156c-.812 0-1.47.588-1.47 1.383v5.395c0 .812.674 1.4 1.47 1.4h.156c.744 0 1.349-.467 1.452-1.176.086-.587.536-.865.968-.865.519 0 1.021.346 1.021.968v.19c-.26 1.661-1.695 2.871-3.441 2.871zM25.287 241.691h-.156c-1.901 0-3.458-1.487-3.458-3.388v-5.377c0-1.92 1.557-3.389 3.458-3.389h.156c1.919 0 3.458 1.47 3.458 3.389v5.359c.001 1.92-1.538 3.406-3.458 3.406zm1.453-8.765c0-.813-.639-1.401-1.452-1.401h-.156c-.812 0-1.452.605-1.452 1.401v5.359c0 .813.657 1.418 1.452 1.418h.156c.813 0 1.452-.605 1.452-1.4v-5.377zM34.417 241.691h-.155a3.469 3.469 0 0 1-3.458-3.458v-7.693c0-.674.501-1.003 1.002-1.003s1.003.329 1.003 1.003v7.693c0 .796.657 1.47 1.453 1.47h.155c.813 0 1.47-.657 1.47-1.47v-7.693c0-.674.501-1.003 1.003-1.003s1.002.329 1.002 1.003v7.693c0 1.902-1.555 3.458-3.475 3.458zM44.982 231.628h-1.384v9.061c0 .674-.502 1.002-1.002 1.002-.502 0-1.003-.328-1.003-1.002v-9.061H40.21c-.657 0-1.002-.501-1.002-1.002 0-.484.346-.986 1.002-.986h4.772c.675 0 1.002.501 1.002.986 0 .501-.327 1.002-1.002 1.002zM54.319 241.587h-4.496c-.64 0-1.02-.605-1.02-1.193 0-.225.034-.433.155-.623l3.925-6.328c.208-.346.208-.536.208-.795v-.139c0-.519-.449-.985-1.037-.985h-.053a.99.99 0 0 0-1.003.985v.191c0 .657-.501.985-1.002.985s-1.003-.329-1.003-.985v-.259c0-1.677 1.365-2.905 3.008-2.905h.053c1.625 0 3.043 1.21 3.043 2.905l-.017.19c0 .657-.243 1.193-.606 1.798l-3.163 5.169h3.009c.674 0 1.002.502 1.002.985 0 .503-.329 1.004-1.003 1.004zM62.22 239.219h-.38v1.47c0 .674-.502 1.002-1.003 1.002-.502 0-1.003-.328-1.003-1.002v-1.47H57.12c-.691 0-1.124-.379-1.124-1.054 0-.173.034-.398.104-.554l3.232-7.469c.191-.432.536-.605.883-.605.519 0 1.037.397 1.037.968 0 .139-.018.277-.086.434l-2.853 6.292h1.521v-1.002c0-.658.502-1.003 1.003-1.003.502 0 1.003.329 1.003 1.003v1.002h.38c.674 0 1.003.484 1.003.986 0 .501-.329 1.002-1.003 1.002z"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M7 2.2c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5m0 12c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.141 7-7 7M16.146 16.824l-2.96-3.808a8.497 8.497 0 0 1-2.87 2.012l3.06 3.933a1.795 1.795 0 1 0 2.77-2.137"/></g></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 40"><path d="M23 16h-3V7.5C20 5 18 3 15.5 3h-5C8 3 6 5 6 7.5V16H3V7.5C3 3.4 6.4 0 10.5 0h5C19.6 0 23 3.4 23 7.5V16z" fill="#FF7500"/><path d="M26 22v10c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8V22c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4zm-9.5 3.5c0-1.9-1.6-3.5-3.5-3.5s-3.5 1.6-3.5 3.5c0 1.2.6 2.2 1.5 2.9V33c0 1.1.9 2 2 2s2-.9 2-2v-4.6c.9-.7 1.5-1.7 1.5-2.9z" fill="#949494"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.5 16c-1.1 0-2 .5-2.7 1.3l-8.9-4.1c.1-.3.1-.5.1-.7 0-.2 0-.4-.1-.6l8.9-4.2c.7.8 1.6 1.3 2.7 1.3C21.4 9 23 7.4 23 5.5S21.4 2 19.5 2 16 3.6 16 5.5c0 .2 0 .4.1.6l-8.9 4.1C6.5 9.5 5.6 9 4.5 9 2.6 9 1 10.6 1 12.5S2.6 16 4.5 16c1.1 0 2-.5 2.7-1.3l8.9 4.2c0 .2-.1.4-.1.6 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 26 26"><path d="M11.906 19.063V.03c-.466.06-.906.502-1 .969l-2.5 7.688H1.312c-.6 0-1.312.2-1.312 1 0 .4.1 1.018.5 1.218l6 3.594-2.406 8c-.1.5.193 1.113.593 1.313.2.1.425.187.625.187.3 0 .482.012.782-.188l5.812-4.75z"/><path d="M12 0c-.033 0-.061.027-.094.031v19.032L12 19l5.906 4.813c.2.2.382.187.782.187.2 0 .418-.087.718-.188.4-.2.7-.812.5-1.312l-2.406-8 6-3.594c.4-.2.5-.819.5-1.219 0-.4-.188-.63-.438-.78-.25-.15-.575-.22-.875-.22h-7.093L13.094 1C12.994.5 12.5 0 12 0z" fill="#fff"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 27 27"><path d="M22.7 8.7h-7.1L13.1 1c-.1-.5-.6-1-1.1-1s-1 .5-1.1 1L8.4 8.7H1.3c-.6 0-1.3.2-1.3 1 0 .4.1 1 .5 1.2l6 3.6-2.4 8c-.1.5.2 1.1.6 1.3.2.1.4.2.6.2.3 0 .5 0 .8-.2L12 19l5.9 4.8c.2.2.4.2.8.2.2 0 .4-.1.7-.2.4-.2.7-.8.5-1.3l-2.4-8 6-3.6c.4-.2.5-.8.5-1.2 0-.8-.7-1-1.3-1z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 22"><path fill="#fff" d="M51 0h78v22H51z"/><path d="M0 16.3V9.8h.7v.6c.3-.5.8-.7 1.4-.7.6 0 1.1.2 1.4.6.4.5.6 1.1.6 1.9 0 .8-.2 1.4-.5 1.8-.4.4-.8.7-1.4.7-.6 0-1-.2-1.4-.7v2.3H0m2-6c-.2 0-.3 0-.5.1s-.3.2-.4.4c-.2.3-.3.8-.3 1.4 0 .6.1 1.1.4 1.4.2.3.5.4.9.4s.7-.2.9-.5c.2-.4.4-.8.4-1.4 0-.6-.1-1-.4-1.4-.3-.2-.6-.4-1-.4M7.2 9.7c.6 0 1.1.2 1.5.7.4.4.6 1 .6 1.8s-.2 1.5-.7 1.9c-.4.4-.8.5-1.4.5-.7 0-1.2-.2-1.6-.7-.4-.4-.6-1-.6-1.7s.2-1.3.5-1.7c.4-.6 1-.8 1.7-.8m-.1.6c-.4 0-.7.2-.9.5-.3.4-.4.8-.4 1.4 0 .6.1 1.1.4 1.4.2.3.6.4 1 .4s.6-.1.9-.4c.3-.4.4-.8.4-1.5 0-.6-.1-1.1-.4-1.4-.3-.3-.6-.4-1-.4M11.1 14.5L9.8 9.8h.8l1 3.7.9-3.7h.8l.9 3.7.9-3.7h.8l-1.4 4.7h-.8l-.9-3.6-.8 3.6h-.9M20.3 12.4h-3.2c0 .3.1.6.1.8.2.6.6.8 1.1.8.4 0 .7-.2.9-.5.1-.1.1-.3.2-.5h.8c-.1.4-.2.7-.4.9-.4.5-.8.7-1.5.7s-1.2-.3-1.6-.8c-.3-.5-.5-1-.5-1.7s.2-1.3.6-1.8c.4-.5.9-.7 1.5-.7.5 0 .9.2 1.3.5s.6.8.7 1.5v.8m-.8-.6c0-.3-.1-.6-.2-.8-.2-.4-.5-.6-1-.6-.4 0-.8.2-1 .6-.1.2-.2.5-.3.9h2.5M21.5 14.5V9.8h.7v.9c.3-.7.8-1 1.6-1v.8h-.3c-.4 0-.7.1-.9.4-.2.2-.3.6-.4 1v2.6h-.7M28.4 12.4h-3.2c0 .3.1.6.1.8.2.6.6.8 1.1.8.4 0 .7-.2.9-.5.1-.1.1-.3.2-.5h.8c-.1.4-.2.7-.4.9-.4.5-.8.7-1.5.7s-1.2-.3-1.6-.8c-.3-.5-.5-1-.5-1.7s.2-1.3.6-1.8c.4-.5.9-.7 1.5-.7.5 0 .9.2 1.3.5s.6.8.7 1.5v.8m-.8-.6c0-.3-.1-.6-.2-.8-.2-.4-.5-.6-1-.6-.4 0-.8.2-1 .6-.1.2-.2.5-.3.9h2.5M33.4 14.5h-.7v-.6c-.3.5-.8.7-1.4.7-.6 0-1.1-.2-1.4-.6-.4-.5-.6-1.1-.6-1.9 0-.8.2-1.4.6-1.8.4-.4.8-.7 1.4-.7.6 0 1 .2 1.4.7V7.7h.8v6.8m-2.1-4.2c-.2 0-.3 0-.5.1s-.3.2-.4.3c-.2.4-.4.8-.4 1.4 0 .6.1 1 .4 1.4.2.3.5.5.9.5.2 0 .4 0 .5-.1.2-.1.3-.2.4-.4.2-.3.3-.8.3-1.4 0-.6-.1-1.1-.4-1.4-.2-.3-.5-.4-.8-.4M37 14.5V7.7h.8v2.6c.3-.5.8-.7 1.4-.7s1.1.2 1.4.7c.4.4.5 1 .5 1.8s-.2 1.4-.6 1.9c-.4.4-.8.6-1.4.6-.6 0-1.1-.2-1.4-.7v.6H37m2-4.2c-.4 0-.7.2-.9.5-.3.3-.4.8-.4 1.4 0 .6.1 1 .3 1.4.2.3.5.5.9.5s.7-.2.9-.5c.2-.4.4-.8.4-1.4 0-.6-.1-1-.4-1.4-.1-.3-.4-.5-.8-.5M41.9 16.2v-.7h.1c.1 0 .2.1.3.1.2 0 .3-.1.4-.2.1-.1.2-.5.4-1.1l-1.7-4.6h.9l1.2 3.6 1.2-3.6h.8L44 14.3c-.3.8-.5 1.3-.6 1.5-.2.3-.5.5-1 .5-.1 0-.3-.1-.5-.1" fill="#999"/><path d="M64.4 18v.9h-7.8V18c.3 0 .6 0 .9-.1 1.1-.1 1.6-.6 1.7-1.8v-.8V3.9v-.3c-.6 0-1.2.1-1.8.3-1.2.5-1.9 1.5-2.3 2.7-.2.6-.3 1.3-.4 1.9-.2 0-.5-.1-.8-.1.1-1.9.1-3.7.2-5.6h12.7c.1 2.1.2 3.9.2 5.8-.3 0-.6.1-.8.1-.1-.6-.2-1.1-.3-1.6-.3-1-.7-1.9-1.6-2.6-.7-.5-1.6-.7-2.5-.8V15.4c0 .4 0 .8.1 1.2.1.9.5 1.3 1.5 1.4h1z" fill-rule="evenodd" clip-rule="evenodd" fill="#e1027b"/><path d="M98.3 14.7c0 .6-.1 1.3-.3 1.9-.5 1.4-1.8 2.3-3.3 2.4-.8 0-1.6-.1-2.4-.5-1.1-.6-1.7-1.7-1.8-2.9-.1-.8-.1-1.7.1-2.5.4-1.6 1.7-2.6 3.3-2.7.9-.1 1.7 0 2.5.5 1.1.6 1.6 1.6 1.8 2.8 0 .3 0 .7.1 1zm-1.6.2c0-.4-.1-.8-.1-1.2-.2-1.1-1-1.8-2-1.9-1.3-.1-2.1.5-2.4 1.7-.2.8-.2 1.6 0 2.4.3 1 1.1 1.6 2.2 1.6 1 0 1.9-.6 2.2-1.6 0-.3 0-.7.1-1z" fill-rule="evenodd" clip-rule="evenodd" fill="#7b7c7c"/><path d="M125.2 16.3h-4c0 .7.4 1.3 1 1.5.6.1 1-.1 1.3-.8.5.1 1 .1 1.6.2-.3.9-.8 1.5-1.7 1.7-.7.2-1.3.2-2-.1-.9-.3-1.4-1-1.7-1.9-.2-.8-.2-1.7.1-2.5.4-1.2 1.4-1.8 2.8-1.8 1.2.1 2.1.8 2.4 2 .1.5.1 1.1.2 1.7zm-1.7-1c0-.6-.1-1.1-.7-1.4-.4-.2-.8-.2-1.1.1-.4.3-.5.8-.5 1.3h2.3zM105 18.8h-1.6v-.3-3-.9c-.1-.7-.7-1-1.3-.8-.6.2-.8.8-.8 1.4v3.5h-1.6v-6h1.6v.8l.2-.2c.6-.7 1.3-.9 2.2-.7.8.2 1.3.7 1.3 1.6v4.6z" fill-rule="evenodd" clip-rule="evenodd" fill="#7c7d7d"/><path d="M114.7 18.8h-1.6v-6h1.6v.9l.2-.2c.7-.8 1.7-1 2.6-.6.6.3.9.8 1 1.5v4.5h-1.6v-.3V15c0-.7-.3-1-.8-1.1-.6 0-1.1.3-1.2.9-.1.4-.1.7-.1 1.1v2.8c-.1 0-.1 0-.1.1z" fill-rule="evenodd" clip-rule="evenodd" fill="#7b7c7c"/><path d="M108.2 10.6v8.2h-1.5l-.1-.1v-.1-7.8-.2h1.6z" fill-rule="evenodd" clip-rule="evenodd" fill="#7c7d7d"/><path d="M54 13.5v-3.2h3.2v3.2H54zM67 10.3v3.2h-3.2v-3.2H67z" fill-rule="evenodd" clip-rule="evenodd" fill="#e1027b"/><path d="M76.8 10.3v3.2h-3.2v-3.2h3.2z" fill-rule="evenodd" clip-rule="evenodd" fill="#e1037b"/><path d="M83.3 13.5v-3.2h3.2v3.2h-3.2z" fill-rule="evenodd" clip-rule="evenodd" fill="#e1027b"/><path d="M111.4 18.8h-1.6v-6h1.6v6z" fill-rule="evenodd" clip-rule="evenodd" fill="#7c7d7d"/><path d="M109.8 12v-1.4h1.6V12h-1.6z" fill-rule="evenodd" clip-rule="evenodd" fill="#7b7c7c"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 16v1.2L8 19l1.3 1h1.4l1.3-1 1-1.8V16l-1-1H8z"/><path d="M8.6 12h2.9l.1-.1c.1-1.2.8-2.2 1.7-3.6l.3-.5c.2-.5.4-1.1.4-1.8 0-2.2-1.8-4-4-4S6 3.8 6 6c0 .7.2 1.4.5 2l.4.5c.9 1.3 1.5 2.2 1.7 3.5zm3.3 2H8.1c-.3 0-.6-.1-.8-.3l-.6-.7c-.2-.2-.2-.4-.2-.7 0-.7-.4-1.3-1.3-2.7L4.8 9C4.3 8.1 4 7.1 4 6c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1-.2 2-.7 2.9l-.4.5c-1 1.5-1.4 2.1-1.4 2.9 0 .2-.1.5-.2.7l-.6.7c-.2.2-.5.3-.8.3z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M12 12.9c1.3 0 1.8 1.4 1.8 2.6 0 1.2-.8 2.5-2.1 2.5h-4C5.1 18 3 16 3 13.6V2.9C3 1.7 4.5 1 5.8 1c1.3 0 2.3.7 2.3 1.9v3h4.2c1.3 0 1.5.8 1.5 2S13 10 11.7 10H8.1v3H12z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M9.2 0C4.2 0 .3 3.9.3 8.7c0 1.7.4 3.3 1.3 4.5L0 18l4.8-1.6c1.3.7 2.7 1.1 4.2 1.1 4.8 0 8.7-3.9 8.7-8.7C17.9 3.9 14 0 9.2 0zm0 15.8c-1.4 0-2.7-.4-3.8-1.1l-2.7.9.8-2.7c-.8-1.1-1.3-2.6-1.3-4.1 0-3.8 3.1-7 7-7 3.8 0 7 3.1 7 7-.1 3.9-3.2 7-7 7zm4.1-5.1c-.2-.1-1.3-.7-1.5-.7-.2-.1-.3-.1-.5.1s-.6.7-.7.8c-.1.1-.3.1-.5 0s-.9-.4-1.8-1.2c-.7-.5-1.1-1.3-1.2-1.5-.2-.2 0-.3.1-.4.1-.2.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1 0-.3 0-.4s-.4-1.3-.6-1.8c-.2-.5-.4-.4-.5-.4-.1 0-.3-.1-.4-.1-.1 0-.4 0-.6.2-.2.3-.9.9-.9 1.9 0 1.1.7 2.2.8 2.3.1.1 1.5 2.5 3.7 3.6 2.2.9 2.2.6 2.6.6s1.4-.5 1.6-1.1c.2-.5.2-.9.2-1.1 0 .1-.1 0-.3-.1z"/></svg>';
	}, function (c, s) {
	  c.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M8 12V6l4.4 3.1L8 12zm10-6.4C18 4.2 16.8 3 15.3 3H2.7C1.2 3 0 4.2 0 5.6v6.9C0 13.9 1.2 15 2.7 15h12.5c1.5 0 2.7-1.1 2.7-2.6V5.6z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
	}]);
	//# sourceMappingURL=showcar-icons.min.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var stores = {
	    local: __webpack_require__(30),
	    session: __webpack_require__(31),
	    cookie: __webpack_require__(29)
	};
	
	var Storage = function () {
	    /**
	     * @constructor
	     * @param {string} type The store backend to use
	     * @param {boolean} [silent=true] Whether to throw exceptions or fail silently returning false
	     */
	
	    function Storage(type) {
	        var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        var _ref$silent = _ref.silent;
	        var silent = _ref$silent === undefined ? true : _ref$silent;
	
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
	}();
	
	module.exports = Storage;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function () {
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
	}();

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function () {
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
	}();

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function () {
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
	}();

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	var currentVehicles = [];
	
	function add(data) {
	    currentVehicles.push(data);
	}
	
	function commit() {
	    window.dataLayer = window.dataLayer || [];
	    window.dataLayer.push({
	        list_productidsall: currentVehicles
	    });
	
	    currentVehicles = [];
	}
	
	module.exports = {
	    add: add,
	    commit: commit
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cookies = __webpack_require__(2);
	var visitorId = cookies.read('as24Visitor');
	
	function sendRequest(params) {
	    if (!visitorId) {
	        return;
	    }
	
	    params.visitor = visitorId;
	    params.ticks = +new Date();
	
	    var paramsStr = Object.keys(params).map(function (key) {
	        return key + '=' + encodeURIComponent(params[key]);
	    }).join('&');
	
	    new Image().src = 'http://tracking.autoscout24.com/parser.ashx?' + paramsStr;
	}
	
	module.exports = {
	    listview: function listview(ids) {
	        sendRequest({
	            id: ids.join('|'),
	            source: 'lv',
	            url: '/'
	        });
	    },
	
	    detailview: function detailview(url) {
	        var parser = document.createElement('a');
	        parser.href = url || location.href;
	        var matches = parser.pathname.match(/-([\d]+)$/i);
	
	        if (matches && matches.length === 2) {
	            var id = matches[1];
	            sendRequest({
	                source: 'pv',
	                url: url || location.href,
	                id: id
	            });
	        }
	    },
	
	    topcarview: function topcarview() {
	        var matches = location.pathname.match(/-([\d]+)$/i);
	        if (matches && matches.length === 2) {
	            var id = matches[1];
	            sendRequest({
	                source: 'ha',
	                url: location.href,
	                id: id
	            });
	        }
	    },
	
	    phone: function phone() {
	        var matches = location.pathname.match(/-([\d]+)$/i);
	        if (matches && matches.length === 2) {
	            var id = matches[1];
	            sendRequest({
	                source: 'mc',
	                url: location.href,
	                id: id
	            });
	        }
	    }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cookies = __webpack_require__(2);
	var visitorId = cookies.read('as24Visitor');
	
	function sendRequest(params) {
	    if (!visitorId) {
	        return;
	    }
	
	    params.visitor = visitorId;
	    params.ticks = +new Date();
	
	    var paramsStr = Object.keys(params).map(function (key) {
	        return key + '=' + encodeURIComponent(params[key]);
	    }).join('&');
	
	    new Image().src = 'http://tracking.autoscout24.com/parser.ashx?' + paramsStr;
	}
	
	module.exports = {
	    listview: function listview(ids) {
	        sendRequest({
	            id: ids.join('|'),
	            source: 'lv',
	            url: location.href
	        });
	    },
	
	    detailview: function detailview(id) {
	        sendRequest({
	            id: id,
	            source: 'pv',
	            url: location.href
	        });
	    },
	
	    topcarview: function topcarview(id) {
	        sendRequest({
	            id: id,
	            source: 'ha',
	            url: location.href
	        });
	    },
	
	    phone: function phone(id) {
	        sendRequest({
	            id: id,
	            source: 'mc',
	            url: location.href
	        });
	    }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cookies = __webpack_require__(2);
	var isValidDate = __webpack_require__(6);
	
	var utm = __webpack_require__(37);
	
	var cAge = 90;
	var oneDay = 24 * 60 * 60 * 1000;
	
	function readCookie(name) {
	    // format of the cookie:
	    // timeStamp(no separator here)firstVisit#lastPaidCampaign#currentVisit
	    // cookieDate(0-13)medium,source,campaign,timestamp#medium,source,campaign,timestamp#medium,source,campaign,timestamp
	
	    var now = +new Date();
	
	    var cookie = {
	        name: name,
	        date: new Date(0),
	        content: [],
	
	        firstVisit: null,
	        currentVisit: null,
	        lastPaidVisit: null,
	
	        isValid: function isValid() {
	            return isValidDate(this.date) && this.content && this.content.length === 3;
	        },
	        getGtmData: function getGtmData() {
	            var ret = {};
	            ret.campaign_directMedium = this.currentVisit[0];
	            ret.campaign_directSource = this.currentVisit[1];
	            ret.campaign_directCampaign = this.currentVisit[2];
	
	            if (this.lastPaidVisit && this.lastPaidVisit[3] > now - cAge * oneDay) {
	                ret.campaign_lastPaidMedium = this.lastPaidVisit[0];
	                ret.campaign_lastPaidSource = this.lastPaidVisit[1];
	                ret.campaign_lastPaidCampaign = this.lastPaidVisit[2];
	            }
	
	            return ret;
	        },
	
	        updateCurrentVisit: function updateCurrentVisit() {
	            var utmParams = utm.getParameters(location.search);
	            this.currentVisit = [utmParams.medium, utmParams.source, utmParams.campaign, now];
	            this.firstVisit = this.firstVisit || this.currentVisit;
	
	            if (utm.isPaidChannel(utmParams.medium)) {
	                this.lastPaidVisit = this.currentVisit;
	            }
	
	            this.content = [this.firstVisit, this.lastPaidVisit, this.currentVisit];
	        }
	    };
	
	    try {
	        var rawValue = cookies.read(name);
	
	        if (!rawValue) {
	            return cookie;
	        }
	
	        var date = new Date(+rawValue.substring(0, 13));
	
	        if (!isValidDate(date)) {
	            return cookie;
	        }
	
	        cookie.date = date;
	
	        var content = rawValue.substring(13).split('#').map(function (part) {
	            if (!part) {
	                return null;
	            }
	
	            var parts = part.split(',');
	            parts[3] = parts[3] && parseInt(parts[3], 10);
	            return parts;
	        });
	
	        if (!content || content.length !== 3) {
	            content = [];
	        }
	
	        cookie.firstVisit = content[0];
	        cookie.lastPaidVisit = content[1];
	        cookie.currentVisit = content[2];
	
	        cookie.content = content;
	
	        return cookie;
	    } catch (ex) {
	        return cookie;
	    }
	}
	
	function writeCookie(cookie) {
	    var now = +new Date();
	    var domain = '.' + location.hostname.split('.').slice(-2).join('.');
	
	    var formattedValue = now + '' + cookie.content.slice(0, 3).join('#');
	    var options = {
	        expires: cAge * 24 * 60 * 60,
	        path: '/',
	        domain: location.hostname.indexOf('localhost') >= 0 ? '' : domain
	    };
	
	    cookies.set(cookie.name, formattedValue, options);
	}
	
	module.exports = {
	    read: readCookie,
	    write: writeCookie
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var gtm = __webpack_require__(3);
	var cookieHandler = __webpack_require__(35);
	
	function updateCampaignCookie() {
	    var cookiename = 'cmpatt';
	    var campaignCookie = cookieHandler.read(cookiename);
	    campaignCookie.updateCurrentVisit();
	    gtm.push(campaignCookie.getGtmData());
	    cookieHandler.write(campaignCookie);
	}
	
	module.exports = {
	    updateCampaignCookie: updateCampaignCookie
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var qs = __webpack_require__(26);
	var indexOf = __webpack_require__(5);
	
	module.exports = {
	    getParameters: function getParameters(locationSearch) {
	        var queryParams = qs.parse(locationSearch.replace('?', '')) || {};
	        var utm = {
	            medium: queryParams.gclid ? 'gclid' : queryParams.utm_medium || '',
	
	            source: queryParams.utm_source || '',
	
	            campaign: queryParams.utm_campaign || ''
	        };
	
	        if (!utm.medium) {
	            utm.medium = 'direct';
	            utm.source = 'direct';
	            utm.campaign = 'direct';
	        }
	
	        return utm;
	    },
	
	    isPaidChannel: function isPaidChannel(medium) {
	        var paidChannels = ['aff', 'co', 'med', 'email', 'ret', 'cpc', 'print', 'gclid'];
	        return !!(medium && indexOf(paidChannels, medium) >= 0);
	    }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	var containerIdsByTld = {
	    'de': 'GTM-MK57H2',
	    'at': 'GTM-WBZ87G',
	    'be': 'GTM-5BWB2M',
	    'lu': 'GTM-NDBDCZ',
	    'es': 'GTM-PS6QHN',
	    'fr': 'GTM-PD93LD',
	    'it': 'GTM-WTCSNR',
	    'nl': 'GTM-TW48BJ',
	    'com': 'GTM-KWX9NX'
	};
	
	module.exports = function (hostname) {
	    var tld = hostname.split('.').pop();
	    return containerIdsByTld[tld] || containerIdsByTld['com'];
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var merge = __webpack_require__(9);
	
	var gtm = __webpack_require__(3);
	var containerId = __webpack_require__(38)(location.hostname);
	var viewport = __webpack_require__(40);
	
	var pagename;
	
	function setPagename(pn) {
	    pagename = pn;
	}
	
	function generateCommonParams(data) {
	    var mergedPagename = merge({}, pagename, data);
	
	    if (!mergedPagename || !mergedPagename.country || !mergedPagename.market || !mergedPagename.category || !mergedPagename.pageid) {
	        throw new Error('Incorrect pagename');
	    }
	
	    var commonPageName = [mergedPagename.country, mergedPagename.market, mergedPagename.category, mergedPagename.group, mergedPagename.pageid].filter(function (x) {
	        return x;
	    }).join('/');
	
	    if (mergedPagename.layer) {
	        commonPageName += '|' + mergedPagename.layer;
	    }
	
	    var commonData = {
	        common_country: mergedPagename.country,
	        common_market: mergedPagename.market,
	        common_category: mergedPagename.category,
	        common_pageid: mergedPagename.pageid,
	        common_pageName: commonPageName,
	
	        common_environment: mergedPagename.environment || '',
	        common_language: mergedPagename.language || '',
	        common_group: mergedPagename.group || '',
	        common_layer: mergedPagename.layer || '',
	        common_attribute: mergedPagename.attribute || '',
	
	        common_linkgroup: mergedPagename.linkgroup || '',
	        common_linkid: mergedPagename.linkid || '',
	
	        common_techState: mergedPagename.techState || ''
	    };
	
	    return commonData;
	}
	
	function trackClick(params) {
	    gtm.push(generateCommonParams(params));
	    gtm.push({ event: 'click' });
	}
	
	var firstPageview = true;
	
	function trackPageview(data) {
	    if (firstPageview) {
	        gtm.push(viewport);
	    }
	
	    gtm.push(generateCommonParams(data));
	
	    if (firstPageview) {
	        gtm.loadContainer(containerId);
	        __webpack_require__(36).updateCampaignCookie();
	        gtm.push({ event: 'common_data_ready' });
	        gtm.push({ event: 'data_ready' });
	        firstPageview = false;
	    } else {
	        gtm.push({ event: 'pageview' });
	    }
	}
	
	module.exports = {
	    setPagename: setPagename,
	    trackClick: trackClick,
	
	    set: gtm.push,
	    pageview: trackPageview,
	    click: trackClick
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	var viewportWidth = Math.min(document.documentElement.clientWidth, window.innerWidth || screen.width);
	
	module.exports = {
	    session_viewport: viewportWidth >= 994 ? 'l' : viewportWidth >= 768 ? 'm' : viewportWidth >= 480 ? 's' : 'xs'
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var gtm = __webpack_require__(39);
	var dealer = __webpack_require__(33);
	var dealerTatsu = __webpack_require__(34);
	var dealerGtm = __webpack_require__(32);
	
	function processCommand(data) {
	    var fn, args;
	
	    if (data[0] === 'pagename') {
	        gtm.setPagename(data[1]);
	    }
	
	    if (data[0] === 'gtm') {
	        fn = gtm[data[1]];
	        args = data.slice(2);
	        if (typeof fn === 'function') {
	            fn.apply(gtm, args);
	        }
	    } else if (data[0] === 'dealer') {
	        fn = dealer[data[1]];
	        args = data.slice(2);
	        if (typeof fn === 'function') {
	            fn.apply(dealer, args);
	        }
	    } else if (data[0] === 'dealerTatsu') {
	        fn = dealerTatsu[data[1]];
	        args = data.slice(2);
	        if (typeof fn === 'function') {
	            fn.apply(dealerTatsu, args);
	        }
	    } else if (data[0] === 'dealer-gtm') {
	        fn = dealerGtm[data[1]];
	        args = data.slice(2);
	        if (typeof fn === 'function') {
	            fn.apply(dealerGtm, args);
	        }
	    }
	}
	
	var ut = window.ut || (window.ut = []);
	
	if (ut.push === Array.prototype.push) {
	    ut.push = function () {
	        Array.prototype.push.apply(window.ut, arguments);
	        processCommand.apply({}, arguments);
	    };
	
	    ut.forEach(processCommand);
	}
	
	__webpack_require__(42);
	
	module.exports = {
	    gtm: gtm,
	    dealer: dealer,
	    dealerTatsu: dealerTatsu,
	    ut: ut
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	var as24tracking = Object.assign(Object.create(HTMLElement.prototype), {
	    inDev: false,
	    supportedActions: ['set', 'click', 'pageview'],
	    supportedTypes: ['gtm', 'pagename'],
	    reservedWords: ['type', 'action', 'as24-tracking-value', 'as24-tracking-click-target'],
	
	    createdCallback: function createdCallback() {
	        var _this = this;
	
	        var values = this.getAdditionalProperties();
	        var type = this.getAttribute('type');
	        var action = this.getAttribute('action');
	        var args = [type, action];
	
	        if (Object.keys(values).length > 0) {
	            args.push(values);
	        }
	
	        if (type === 'pagename') {
	            args.splice(1, 1);
	        }
	
	        var clickTarget = this.getAttribute('as24-tracking-click-target');
	        if (clickTarget) {
	            var elements = document.querySelectorAll(clickTarget);
	
	            for (var i = 0; i < elements.length; i++) {
	                elements[i].addEventListener('click', function () {
	                    return _this.track(args);
	                });
	            }
	        } else {
	            this.track(args);
	        }
	    },
	    getAdditionalProperties: function getAdditionalProperties() {
	        var _this2 = this;
	
	        var trackingValue = this.getAttribute('as24-tracking-value');
	        var values = trackingValue ? JSON.parse(trackingValue) : {};
	
	        if (Array.isArray(values)) {
	            return values;
	        }
	
	        return Array.prototype.slice.call(this.attributes).filter(function (element) {
	            return !(_this2.reservedWords.indexOf(element.nodeName) > -1);
	        }).reduce(function (prev, curr) {
	            var attrName = _this2.decodeAttributeName(curr.nodeName);
	            prev[attrName] = curr.nodeValue;
	            return prev;
	        }, values);
	    },
	    decodeAttributeName: function decodeAttributeName(attrName) {
	        if (attrName.indexOf('-') > -1) {
	            attrName = attrName.replace(/-([a-z])/g, function (g) {
	                return g[1].toUpperCase();
	            });
	        }
	        return attrName;
	    },
	    track: function track(args) {
	        if (this.inDev) {
	            console.log(args);
	        } else {
	            ut.push(args);
	        }
	    }
	});
	
	try {
	    var ctor = document.createElement('as24-tracking').constructor;
	    if (ctor === HTMLElement || ctor === HTMLUnknownElement) {
	        document.registerElement('as24-tracking', { prototype: as24tracking });
	    }
	} catch (e) {
	    if (window && window.console) {
	        window.console.warn('Failed to register CustomElement "as24-tracking".', e);
	    }
	}

/***/ },
/* 43 */
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
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/* Zepto v1.0 - polyfill zepto detect event ajax form fx - zeptojs.com/license */
	
	;(function (undefined) {
	  if (String.prototype.trim === undefined) // fix for iOS 3.2
	    String.prototype.trim = function () {
	      return this.replace(/^\s+|\s+$/g, '');
	    };
	
	  // For iOS 3.x
	  // from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce
	  if (Array.prototype.reduce === undefined) Array.prototype.reduce = function (fun) {
	    if (this === void 0 || this === null) throw new TypeError();
	    var t = Object(this),
	        len = t.length >>> 0,
	        k = 0,
	        accumulator;
	    if (typeof fun != 'function') throw new TypeError();
	    if (len == 0 && arguments.length == 1) throw new TypeError();
	
	    if (arguments.length >= 2) accumulator = arguments[1];else do {
	      if (k in t) {
	        accumulator = t[k++];
	        break;
	      }
	      if (++k >= len) throw new TypeError();
	    } while (true);
	
	    while (k < len) {
	      if (k in t) accumulator = fun.call(undefined, accumulator, t[k], k, t);
	      k++;
	    }
	    return accumulator;
	  };
	})();
	
	var Zepto = function () {
	  var undefined,
	      key,
	      $,
	      classList,
	      emptyArray = [],
	      _slice = emptyArray.slice,
	      _filter = emptyArray.filter,
	      document = window.document,
	      elementDisplay = {},
	      classCache = {},
	      getComputedStyle = document.defaultView.getComputedStyle,
	      cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 },
	      fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	      tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	      rootNodeRE = /^(?:body|html)$/i,
	
	
	  // special attributes that should be get/set via method calls
	  methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
	      adjacencyOperators = ['after', 'prepend', 'before', 'append'],
	      table = document.createElement('table'),
	      tableRow = document.createElement('tr'),
	      containers = {
	    'tr': document.createElement('tbody'),
	    'tbody': table, 'thead': table, 'tfoot': table,
	    'td': tableRow, 'th': tableRow,
	    '*': document.createElement('div')
	  },
	      readyRE = /complete|loaded|interactive/,
	      classSelectorRE = /^\.([\w-]+)$/,
	      idSelectorRE = /^#([\w-]*)$/,
	      tagSelectorRE = /^[\w-]+$/,
	      class2type = {},
	      toString = class2type.toString,
	      zepto = {},
	      camelize,
	      uniq,
	      tempParent = document.createElement('div');
	
	  zepto.matches = function (element, selector) {
	    if (!element || element.nodeType !== 1) return false;
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
	    if (matchesSelector) return matchesSelector.call(element, selector);
	    // fall back to performing a selector:
	    var match,
	        parent = element.parentNode,
	        temp = !parent;
	    if (temp) (parent = tempParent).appendChild(element);
	    match = ~zepto.qsa(parent, selector).indexOf(element);
	    temp && tempParent.removeChild(element);
	    return match;
	  };
	
	  function type(obj) {
	    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
	  }
	
	  function isFunction(value) {
	    return type(value) == "function";
	  }
	  function isWindow(obj) {
	    return obj != null && obj == obj.window;
	  }
	  function isDocument(obj) {
	    return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
	  }
	  function isObject(obj) {
	    return type(obj) == "object";
	  }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && obj.__proto__ == Object.prototype;
	  }
	  function isArray(value) {
	    return value instanceof Array;
	  }
	  function likeArray(obj) {
	    return typeof obj.length == 'number';
	  }
	
	  function compact(array) {
	    return _filter.call(array, function (item) {
	      return item != null;
	    });
	  }
	  function flatten(array) {
	    return array.length > 0 ? $.fn.concat.apply([], array) : array;
	  }
	  camelize = function camelize(str) {
	    return str.replace(/-+(.)?/g, function (match, chr) {
	      return chr ? chr.toUpperCase() : '';
	    });
	  };
	  function dasherize(str) {
	    return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
	  }
	  uniq = function uniq(array) {
	    return _filter.call(array, function (item, idx) {
	      return array.indexOf(item) == idx;
	    });
	  };
	
	  function classRE(name) {
	    return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
	  }
	
	  function maybeAddPx(name, value) {
	    return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
	  }
	
	  function defaultDisplay(nodeName) {
	    var element, display;
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName);
	      document.body.appendChild(element);
	      display = getComputedStyle(element, '').getPropertyValue("display");
	      element.parentNode.removeChild(element);
	      display == "none" && (display = "block");
	      elementDisplay[nodeName] = display;
	    }
	    return elementDisplay[nodeName];
	  }
	
	  function _children(element) {
	    return 'children' in element ? _slice.call(element.children) : $.map(element.childNodes, function (node) {
	      if (node.nodeType == 1) return node;
	    });
	  }
	
	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function (html, name, properties) {
	    if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
	    if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
	    if (!(name in containers)) name = '*';
	
	    var nodes,
	        dom,
	        container = containers[name];
	    container.innerHTML = '' + html;
	    dom = $.each(_slice.call(container.childNodes), function () {
	      container.removeChild(this);
	    });
	    if (isPlainObject(properties)) {
	      nodes = $(dom);
	      $.each(properties, function (key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
	      });
	    }
	    return dom;
	  };
	
	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. Note that `__proto__` is not supported on Internet
	  // Explorer. This method can be overriden in plugins.
	  zepto.Z = function (dom, selector) {
	    dom = dom || [];
	    dom.__proto__ = $.fn;
	    dom.selector = selector || '';
	    return dom;
	  };
	
	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function (object) {
	    return object instanceof zepto.Z;
	  };
	
	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function (selector, context) {
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z();
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector);
	      // If a Zepto collection is given, juts return it
	      else if (zepto.isZ(selector)) return selector;else {
	          var dom;
	          // normalize array if an array of nodes is given
	          if (isArray(selector)) dom = compact(selector);
	          // Wrap DOM nodes. If a plain object is given, duplicate it.
	          else if (isObject(selector)) dom = [isPlainObject(selector) ? $.extend({}, selector) : selector], selector = null;
	            // If it's a html fragment, create nodes from it
	            else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
	              // If there's a context, create a collection on that context first, and select
	              // nodes from there
	              else if (context !== undefined) return $(context).find(selector);
	                // And last but no least, if it's a CSS selector, use it to select nodes.
	                else dom = zepto.qsa(document, selector);
	          // create a new Zepto collection from the nodes found
	          return zepto.Z(dom, selector);
	        }
	  };
	
	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function $(selector, context) {
	    return zepto.init(selector, context);
	  };
	
	  function extend(target, source, deep) {
	    for (key in source) {
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
	        if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
	        extend(target[key], source[key], deep);
	      } else if (source[key] !== undefined) target[key] = source[key];
	    }
	  }
	
	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function (target) {
	    var deep,
	        args = _slice.call(arguments, 1);
	    if (typeof target == 'boolean') {
	      deep = target;
	      target = args.shift();
	    }
	    args.forEach(function (arg) {
	      extend(target, arg, deep);
	    });
	    return target;
	  };
	
	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function (element, selector) {
	    var found;
	    return isDocument(element) && idSelectorRE.test(selector) ? (found = element.getElementById(RegExp.$1)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 ? [] : _slice.call(classSelectorRE.test(selector) ? element.getElementsByClassName(RegExp.$1) : tagSelectorRE.test(selector) ? element.getElementsByTagName(selector) : element.querySelectorAll(selector));
	  };
	
	  function filtered(nodes, selector) {
	    return selector === undefined ? $(nodes) : $(nodes).filter(selector);
	  }
	
	  $.contains = function (parent, node) {
	    return parent !== node && parent.contains(node);
	  };
	
	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg;
	  }
	
	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
	  }
	
	  // access className property while respecting SVGAnimatedString
	  function className(node, value) {
	    var klass = node.className,
	        svg = klass && klass.baseVal !== undefined;
	
	    if (value === undefined) return svg ? klass.baseVal : klass;
	    svg ? klass.baseVal = value : node.className = value;
	  }
	
	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    var num;
	    try {
	      return value ? value == "true" || (value == "false" ? false : value == "null" ? null : !isNaN(num = Number(value)) ? num : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
	    } catch (e) {
	      return value;
	    }
	  }
	
	  $.type = type;
	  $.isFunction = isFunction;
	  $.isWindow = isWindow;
	  $.isArray = isArray;
	  $.isPlainObject = isPlainObject;
	
	  $.isEmptyObject = function (obj) {
	    var name;
	    for (name in obj) {
	      return false;
	    }return true;
	  };
	
	  $.inArray = function (elem, array, i) {
	    return emptyArray.indexOf.call(array, elem, i);
	  };
	
	  $.camelCase = camelize;
	  $.trim = function (str) {
	    return str.trim();
	  };
	
	  // plugin compatibility
	  $.uuid = 0;
	  $.support = {};
	  $.expr = {};
	
	  $.map = function (elements, callback) {
	    var value,
	        values = [],
	        i,
	        key;
	    if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
	      value = callback(elements[i], i);
	      if (value != null) values.push(value);
	    } else for (key in elements) {
	      value = callback(elements[key], key);
	      if (value != null) values.push(value);
	    }
	    return flatten(values);
	  };
	
	  $.each = function (elements, callback) {
	    var i, key;
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++) {
	        if (callback.call(elements[i], i, elements[i]) === false) return elements;
	      }
	    } else {
	      for (key in elements) {
	        if (callback.call(elements[key], key, elements[key]) === false) return elements;
	      }
	    }
	
	    return elements;
	  };
	
	  $.grep = function (elements, callback) {
	    return _filter.call(elements, callback);
	  };
	
	  if (window.JSON) $.parseJSON = JSON.parse;
	
	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
	    class2type["[object " + name + "]"] = name.toLowerCase();
	  });
	
	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    indexOf: emptyArray.indexOf,
	    concat: emptyArray.concat,
	
	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function map(fn) {
	      return $($.map(this, function (el, i) {
	        return fn.call(el, i, el);
	      }));
	    },
	    slice: function slice() {
	      return $(_slice.apply(this, arguments));
	    },
	
	    ready: function ready(callback) {
	      if (readyRE.test(document.readyState)) callback($);else document.addEventListener('DOMContentLoaded', function () {
	        callback($);
	      }, false);
	      return this;
	    },
	    get: function get(idx) {
	      return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
	    },
	    toArray: function toArray() {
	      return this.get();
	    },
	    size: function size() {
	      return this.length;
	    },
	    remove: function remove() {
	      return this.each(function () {
	        if (this.parentNode != null) this.parentNode.removeChild(this);
	      });
	    },
	    each: function each(callback) {
	      emptyArray.every.call(this, function (el, idx) {
	        return callback.call(el, idx, el) !== false;
	      });
	      return this;
	    },
	    filter: function filter(selector) {
	      if (isFunction(selector)) return this.not(this.not(selector));
	      return $(_filter.call(this, function (element) {
	        return zepto.matches(element, selector);
	      }));
	    },
	    add: function add(selector, context) {
	      return $(uniq(this.concat($(selector, context))));
	    },
	    is: function is(selector) {
	      return this.length > 0 && zepto.matches(this[0], selector);
	    },
	    not: function not(selector) {
	      var nodes = [];
	      if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
	        if (!selector.call(this, idx)) nodes.push(this);
	      });else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);
	        this.forEach(function (el) {
	          if (excludes.indexOf(el) < 0) nodes.push(el);
	        });
	      }
	      return $(nodes);
	    },
	    has: function has(selector) {
	      return this.filter(function () {
	        return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
	      });
	    },
	    eq: function eq(idx) {
	      return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
	    },
	    first: function first() {
	      var el = this[0];
	      return el && !isObject(el) ? el : $(el);
	    },
	    last: function last() {
	      var el = this[this.length - 1];
	      return el && !isObject(el) ? el : $(el);
	    },
	    find: function find(selector) {
	      var result,
	          $this = this;
	      if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') result = $(selector).filter(function () {
	        var node = this;
	        return emptyArray.some.call($this, function (parent) {
	          return $.contains(parent, node);
	        });
	      });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
	        return zepto.qsa(this, selector);
	      });
	      return result;
	    },
	    closest: function closest(selector, context) {
	      var node = this[0],
	          collection = false;
	      if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') collection = $(selector);
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) {
	        node = node !== context && !isDocument(node) && node.parentNode;
	      }return $(node);
	    },
	    parents: function parents(selector) {
	      var ancestors = [],
	          nodes = this;
	      while (nodes.length > 0) {
	        nodes = $.map(nodes, function (node) {
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node);
	            return node;
	          }
	        });
	      }return filtered(ancestors, selector);
	    },
	    parent: function parent(selector) {
	      return filtered(uniq(this.pluck('parentNode')), selector);
	    },
	    children: function children(selector) {
	      return filtered(this.map(function () {
	        return _children(this);
	      }), selector);
	    },
	    contents: function contents() {
	      return this.map(function () {
	        return _slice.call(this.childNodes);
	      });
	    },
	    siblings: function siblings(selector) {
	      return filtered(this.map(function (i, el) {
	        return _filter.call(_children(el.parentNode), function (child) {
	          return child !== el;
	        });
	      }), selector);
	    },
	    empty: function empty() {
	      return this.each(function () {
	        this.innerHTML = '';
	      });
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function pluck(property) {
	      return $.map(this, function (el) {
	        return el[property];
	      });
	    },
	    show: function show() {
	      return this.each(function () {
	        this.style.display == "none" && (this.style.display = null);
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
	      });
	    },
	    replaceWith: function replaceWith(newContent) {
	      return this.before(newContent).remove();
	    },
	    wrap: function wrap(structure) {
	      var func = isFunction(structure);
	      if (this[0] && !func) var dom = $(structure).get(0),
	          clone = dom.parentNode || this.length > 1;
	
	      return this.each(function (index) {
	        $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
	      });
	    },
	    wrapAll: function wrapAll(structure) {
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure));
	        var children;
	        // drill down to the inmost element
	        while ((children = structure.children()).length) {
	          structure = children.first();
	        }$(structure).append(this);
	      }
	      return this;
	    },
	    wrapInner: function wrapInner(structure) {
	      var func = isFunction(structure);
	      return this.each(function (index) {
	        var self = $(this),
	            contents = self.contents(),
	            dom = func ? structure.call(this, index) : structure;
	        contents.length ? contents.wrapAll(dom) : self.append(dom);
	      });
	    },
	    unwrap: function unwrap() {
	      this.parent().each(function () {
	        $(this).replaceWith($(this).children());
	      });
	      return this;
	    },
	    clone: function clone() {
	      return this.map(function () {
	        return this.cloneNode(true);
	      });
	    },
	    hide: function hide() {
	      return this.css("display", "none");
	    },
	    toggle: function toggle(setting) {
	      return this.each(function () {
	        var el = $(this);(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
	      });
	    },
	    prev: function prev(selector) {
	      return $(this.pluck('previousElementSibling')).filter(selector || '*');
	    },
	    next: function next(selector) {
	      return $(this.pluck('nextElementSibling')).filter(selector || '*');
	    },
	    html: function html(_html) {
	      return _html === undefined ? this.length > 0 ? this[0].innerHTML : null : this.each(function (idx) {
	        var originHtml = this.innerHTML;
	        $(this).empty().append(funcArg(this, _html, idx, originHtml));
	      });
	    },
	    text: function text(_text) {
	      return _text === undefined ? this.length > 0 ? this[0].textContent : null : this.each(function () {
	        this.textContent = _text;
	      });
	    },
	    attr: function attr(name, value) {
	      var result;
	      return typeof name == 'string' && value === undefined ? this.length == 0 || this[0].nodeType !== 1 ? undefined : name == 'value' && this[0].nodeName == 'INPUT' ? this.val() : !(result = this[0].getAttribute(name)) && name in this[0] ? this[0][name] : result : this.each(function (idx) {
	        if (this.nodeType !== 1) return;
	        if (isObject(name)) for (key in name) {
	          setAttribute(this, key, name[key]);
	        } else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
	      });
	    },
	    removeAttr: function removeAttr(name) {
	      return this.each(function () {
	        this.nodeType === 1 && setAttribute(this, name);
	      });
	    },
	    prop: function prop(name, value) {
	      return value === undefined ? this[0] && this[0][name] : this.each(function (idx) {
	        this[name] = funcArg(this, value, idx, this[name]);
	      });
	    },
	    data: function data(name, value) {
	      var data = this.attr('data-' + dasherize(name), value);
	      return data !== null ? deserializeValue(data) : undefined;
	    },
	    val: function val(value) {
	      return value === undefined ? this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function (o) {
	        return this.selected;
	      }).pluck('value') : this[0].value) : this.each(function (idx) {
	        this.value = funcArg(this, value, idx, this.value);
	      });
	    },
	    offset: function offset(coordinates) {
	      if (coordinates) return this.each(function (index) {
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	          top: coords.top - parentOffset.top,
	          left: coords.left - parentOffset.left
	        };
	
	        if ($this.css('position') == 'static') props['position'] = 'relative';
	        $this.css(props);
	      });
	      if (this.length == 0) return null;
	      var obj = this[0].getBoundingClientRect();
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      };
	    },
	    css: function css(property, value) {
	      if (arguments.length < 2 && typeof property == 'string') return this[0] && (this[0].style[camelize(property)] || getComputedStyle(this[0], '').getPropertyValue(property));
	
	      var css = '';
	      if (type(property) == 'string') {
	        if (!value && value !== 0) this.each(function () {
	          this.style.removeProperty(dasherize(property));
	        });else css = dasherize(property) + ":" + maybeAddPx(property, value);
	      } else {
	        for (key in property) {
	          if (!property[key] && property[key] !== 0) this.each(function () {
	            this.style.removeProperty(dasherize(key));
	          });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
	        }
	      }
	
	      return this.each(function () {
	        this.style.cssText += ';' + css;
	      });
	    },
	    index: function index(element) {
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
	    },
	    hasClass: function hasClass(name) {
	      return emptyArray.some.call(this, function (el) {
	        return this.test(className(el));
	      }, classRE(name));
	    },
	    addClass: function addClass(name) {
	      return this.each(function (idx) {
	        classList = [];
	        var cls = className(this),
	            newName = funcArg(this, name, idx, cls);
	        newName.split(/\s+/g).forEach(function (klass) {
	          if (!$(this).hasClass(klass)) classList.push(klass);
	        }, this);
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
	      });
	    },
	    removeClass: function removeClass(name) {
	      return this.each(function (idx) {
	        if (name === undefined) return className(this, '');
	        classList = className(this);
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
	          classList = classList.replace(classRE(klass), " ");
	        });
	        className(this, classList.trim());
	      });
	    },
	    toggleClass: function toggleClass(name, when) {
	      return this.each(function (idx) {
	        var $this = $(this),
	            names = funcArg(this, name, idx, className(this));
	        names.split(/\s+/g).forEach(function (klass) {
	          (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
	        });
	      });
	    },
	    scrollTop: function scrollTop() {
	      if (!this.length) return;
	      return 'scrollTop' in this[0] ? this[0].scrollTop : this[0].scrollY;
	    },
	    position: function position() {
	      if (!this.length) return;
	
	      var elem = this[0],
	
	      // Get *real* offsetParent
	      offsetParent = this.offsetParent(),
	
	      // Get correct offsets
	      offset = this.offset(),
	          parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();
	
	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top -= parseFloat($(elem).css('margin-top')) || 0;
	      offset.left -= parseFloat($(elem).css('margin-left')) || 0;
	
	      // Add offsetParent borders
	      parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
	      parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;
	
	      // Subtract the two offsets
	      return {
	        top: offset.top - parentOffset.top,
	        left: offset.left - parentOffset.left
	      };
	    },
	    offsetParent: function offsetParent() {
	      return this.map(function () {
	        var parent = this.offsetParent || document.body;
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") {
	          parent = parent.offsetParent;
	        }return parent;
	      });
	    }
	  };
	
	  // for now
	  $.fn.detach = $.fn.remove
	
	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function (dimension) {
	    $.fn[dimension] = function (value) {
	      var offset,
	          el = this[0],
	          Dimension = dimension.replace(/./, function (m) {
	        return m[0].toUpperCase();
	      });
	      if (value === undefined) return isWindow(el) ? el['inner' + Dimension] : isDocument(el) ? el.documentElement['offset' + Dimension] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
	        el = $(this);
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()));
	      });
	    };
	  });
	
	  function traverseNode(node, fun) {
	    fun(node);
	    for (var key in node.childNodes) {
	      traverseNode(node.childNodes[key], fun);
	    }
	  }
	
	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function (operator, operatorIndex) {
	    var inside = operatorIndex % 2; //=> prepend, append
	
	    $.fn[operator] = function () {
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType,
	          nodes = $.map(arguments, function (arg) {
	        argType = type(arg);
	        return argType == "object" || argType == "array" || arg == null ? arg : zepto.fragment(arg);
	      }),
	          parent,
	          copyByClone = this.length > 1;
	      if (nodes.length < 1) return this;
	
	      return this.each(function (_, target) {
	        parent = inside ? target : target.parentNode;
	
	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;
	
	        nodes.forEach(function (node) {
	          if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();
	
	          traverseNode(parent.insertBefore(node, target), function (el) {
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) window['eval'].call(window, el.innerHTML);
	          });
	        });
	      });
	    };
	
	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
	      $(html)[operator](this);
	      return this;
	    };
	  });
	
	  zepto.Z.prototype = $.fn;
	
	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq;
	  zepto.deserializeValue = deserializeValue;
	  $.zepto = zepto;
	
	  return $;
	}();
	
	// @@ original loader
	// window.Zepto = Zepto
	// '$' in window || (window.$ = Zepto)
	// @@ modified by jiyinyiyong
	module.exports.$ = Zepto;
	module.exports.Zepto = Zepto;
	// @@ modifications end
	
	;(function ($) {
	  function detect(ua) {
	    var os = this.os = {},
	        browser = this.browser = {},
	        webkit = ua.match(/WebKit\/([\d.]+)/),
	        android = ua.match(/(Android)\s+([\d.]+)/),
	        ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	        iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	        webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
	        touchpad = webos && ua.match(/TouchPad/),
	        kindle = ua.match(/Kindle\/([\d.]+)/),
	        silk = ua.match(/Silk\/([\d._]+)/),
	        blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
	        bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
	        rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
	        playbook = ua.match(/PlayBook/),
	        chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
	        firefox = ua.match(/Firefox\/([\d.]+)/);
	
	    // Todo: clean this up with a better OS/browser seperation:
	    // - discern (more) between multiple browsers on android
	    // - decide if kindle fire in silk mode is android or not
	    // - Firefox on Android doesn't specify the Android version
	    // - possibly devide in os, device and browser hashes
	
	    if (browser.webkit = !!webkit) browser.version = webkit[1];
	
	    if (android) os.android = true, os.version = android[2];
	    if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
	    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
	    if (webos) os.webos = true, os.version = webos[2];
	    if (touchpad) os.touchpad = true;
	    if (blackberry) os.blackberry = true, os.version = blackberry[2];
	    if (bb10) os.bb10 = true, os.version = bb10[2];
	    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2];
	    if (playbook) browser.playbook = true;
	    if (kindle) os.kindle = true, os.version = kindle[1];
	    if (silk) browser.silk = true, browser.version = silk[1];
	    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
	    if (chrome) browser.chrome = true, browser.version = chrome[1];
	    if (firefox) browser.firefox = true, browser.version = firefox[1];
	
	    os.tablet = !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/));
	    os.phone = !!(!os.tablet && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/)));
	  }
	
	  detect.call($, navigator.userAgent);
	  // make available to unit tests
	  $.__detect = detect;
	})(Zepto);(function ($) {
	  var $$ = $.zepto.qsa,
	      handlers = {},
	      _zid = 1,
	      specialEvents = {},
	      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
	
	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';
	
	  function zid(element) {
	    return element._zid || (element._zid = _zid++);
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event);
	    if (event.ns) var matcher = matcherFor(event.ns);
	    return (handlers[zid(element)] || []).filter(function (handler) {
	      return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
	    });
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.');
	    return { e: parts[0], ns: parts.slice(1).sort().join(' ') };
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
	  }
	
	  function eachEvent(events, fn, iterator) {
	    if ($.type(events) != "string") $.each(events, iterator);else events.split(/\s/).forEach(function (type) {
	      iterator(type, fn);
	    });
	  }
	
	  function eventCapture(handler, captureSetting) {
	    return handler.del && (handler.e == 'focus' || handler.e == 'blur') || !!captureSetting;
	  }
	
	  function realEvent(type) {
	    return hover[type] || type;
	  }
	
	  function add(element, events, fn, selector, getDelegate, capture) {
	    var id = zid(element),
	        set = handlers[id] || (handlers[id] = []);
	    eachEvent(events, fn, function (event, fn) {
	      var handler = parse(event);
	      handler.fn = fn;
	      handler.sel = selector;
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function fn(e) {
	        var related = e.relatedTarget;
	        if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
	      };
	      handler.del = getDelegate && getDelegate(fn, event);
	      var callback = handler.del || fn;
	      handler.proxy = function (e) {
	        var result = callback.apply(element, [e].concat(e.data));
	        if (result === false) e.preventDefault(), e.stopPropagation();
	        return result;
	      };
	      handler.i = set.length;
	      set.push(handler);
	      element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
	    });
	  }
	  function remove(element, events, fn, selector, capture) {
	    var id = zid(element);
	    eachEvent(events || '', fn, function (event, fn) {
	      findHandlers(element, event, fn, selector).forEach(function (handler) {
	        delete handlers[id][handler.i];
	        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
	      });
	    });
	  }
	
	  $.event = { add: add, remove: remove };
	
	  $.proxy = function (fn, context) {
	    if ($.isFunction(fn)) {
	      var proxyFn = function proxyFn() {
	        return fn.apply(context, arguments);
	      };
	      proxyFn._zid = zid(fn);
	      return proxyFn;
	    } else if (typeof context == 'string') {
	      return $.proxy(fn[context], fn);
	    } else {
	      throw new TypeError("expected function");
	    }
	  };
	
	  $.fn.bind = function (event, callback) {
	    return this.each(function () {
	      add(this, event, callback);
	    });
	  };
	  $.fn.unbind = function (event, callback) {
	    return this.each(function () {
	      remove(this, event, callback);
	    });
	  };
	  $.fn.one = function (event, callback) {
	    return this.each(function (i, element) {
	      add(this, event, callback, null, function (fn, type) {
	        return function () {
	          var result = fn.apply(element, arguments);
	          remove(element, type, fn);
	          return result;
	        };
	      });
	    });
	  };
	
	  var returnTrue = function returnTrue() {
	    return true;
	  },
	      returnFalse = function returnFalse() {
	    return false;
	  },
	      ignoreProperties = /^([A-Z]|layer[XY]$)/,
	      eventMethods = {
	    preventDefault: 'isDefaultPrevented',
	    stopImmediatePropagation: 'isImmediatePropagationStopped',
	    stopPropagation: 'isPropagationStopped'
	  };
	  function createProxy(event) {
	    var key,
	        proxy = { originalEvent: event };
	    for (key in event) {
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
	    }$.each(eventMethods, function (name, predicate) {
	      proxy[name] = function () {
	        this[predicate] = returnTrue;
	        return event[name].apply(event, arguments);
	      };
	      proxy[predicate] = returnFalse;
	    });
	    return proxy;
	  }
	
	  // emulates the 'defaultPrevented' property for browsers that have none
	  function fix(event) {
	    if (!('defaultPrevented' in event)) {
	      event.defaultPrevented = false;
	      var prevent = event.preventDefault;
	      event.preventDefault = function () {
	        this.defaultPrevented = true;
	        prevent.call(this);
	      };
	    }
	  }
	
	  $.fn.delegate = function (selector, event, callback) {
	    return this.each(function (i, element) {
	      add(element, event, callback, selector, function (fn) {
	        return function (e) {
	          var evt,
	              match = $(e.target).closest(selector, element).get(0);
	          if (match) {
	            evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });
	            return fn.apply(match, [evt].concat([].slice.call(arguments, 1)));
	          }
	        };
	      });
	    });
	  };
	  $.fn.undelegate = function (selector, event, callback) {
	    return this.each(function () {
	      remove(this, event, callback, selector);
	    });
	  };
	
	  $.fn.live = function (event, callback) {
	    $(document.body).delegate(this.selector, event, callback);
	    return this;
	  };
	  $.fn.die = function (event, callback) {
	    $(document.body).undelegate(this.selector, event, callback);
	    return this;
	  };
	
	  $.fn.on = function (event, selector, callback) {
	    return !selector || $.isFunction(selector) ? this.bind(event, selector || callback) : this.delegate(selector, event, callback);
	  };
	  $.fn.off = function (event, selector, callback) {
	    return !selector || $.isFunction(selector) ? this.unbind(event, selector || callback) : this.undelegate(selector, event, callback);
	  };
	
	  $.fn.trigger = function (event, data) {
	    if (typeof event == 'string' || $.isPlainObject(event)) event = $.Event(event);
	    fix(event);
	    event.data = data;
	    return this.each(function () {
	      // items in the collection might not be DOM elements
	      // (todo: possibly support events on plain old objects)
	      if ('dispatchEvent' in this) this.dispatchEvent(event);
	    });
	  };
	
	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function (event, data) {
	    var e, result;
	    this.each(function (i, element) {
	      e = createProxy(typeof event == 'string' ? $.Event(event) : event);
	      e.data = data;
	      e.target = element;
	      $.each(findHandlers(element, event.type || event), function (i, handler) {
	        result = handler.proxy(e);
	        if (e.isImmediatePropagationStopped()) return false;
	      });
	    });
	    return result;
	  }
	
	  // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
	    $.fn[event] = function (callback) {
	      return callback ? this.bind(event, callback) : this.trigger(event);
	    };
	  });['focus', 'blur'].forEach(function (name) {
	    $.fn[name] = function (callback) {
	      if (callback) this.bind(name, callback);else this.each(function () {
	        try {
	          this[name]();
	        } catch (e) {}
	      });
	      return this;
	    };
	  });
	
	  $.Event = function (type, props) {
	    if (typeof type != 'string') props = type, type = props.type;
	    var event = document.createEvent(specialEvents[type] || 'Events'),
	        bubbles = true;
	    if (props) for (var name in props) {
	      name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
	    }event.initEvent(type, bubbles, true, null, null, null, null, null, null, null, null, null, null, null, null);
	    event.isDefaultPrevented = function () {
	      return this.defaultPrevented;
	    };
	    return event;
	  };
	})(Zepto);(function ($) {
	  var jsonpID = 0,
	      document = window.document,
	      key,
	      name,
	      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      scriptTypeRE = /^(?:text|application)\/javascript/i,
	      xmlTypeRE = /^(?:text|application)\/xml/i,
	      jsonType = 'application/json',
	      htmlType = 'text/html',
	      blankRE = /^\s*$/;
	
	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName);
	    $(context).trigger(event, data);
	    return !event.defaultPrevented;
	  }
	
	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data);
	  }
	
	  // Number of active Ajax requests
	  $.active = 0;
	
	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
	  }
	  function ajaxStop(settings) {
	    if (settings.global && ! --$.active) triggerGlobal(settings, null, 'ajaxStop');
	  }
	
	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context;
	    if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;
	
	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
	  }
	  function ajaxSuccess(data, xhr, settings) {
	    var context = settings.context,
	        status = 'success';
	    settings.success.call(context, data, status, xhr);
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
	    ajaxComplete(status, xhr, settings);
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings) {
	    var context = settings.context;
	    settings.error.call(context, xhr, type, error);
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error]);
	    ajaxComplete(type, xhr, settings);
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context;
	    settings.complete.call(context, xhr, status);
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
	    ajaxStop(settings);
	  }
	
	  // Empty function, used as default callback
	  function empty() {}
	
	  $.ajaxJSONP = function (options) {
	    if (!('type' in options)) return $.ajax(options);
	
	    var callbackName = 'jsonp' + ++jsonpID,
	        script = document.createElement('script'),
	        cleanup = function cleanup() {
	      clearTimeout(abortTimeout);
	      $(script).remove();
	      delete window[callbackName];
	    },
	        abort = function abort(type) {
	      cleanup();
	      // In case of manual abort or timeout, keep an empty function as callback
	      // so that the SCRIPT tag that eventually loads won't result in an error.
	      if (!type || type == 'timeout') window[callbackName] = empty;
	      ajaxError(null, type || 'abort', xhr, options);
	    },
	        xhr = { abort: abort },
	        abortTimeout;
	
	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort');
	      return false;
	    }
	
	    window[callbackName] = function (data) {
	      cleanup();
	      ajaxSuccess(data, xhr, options);
	    };
	
	    script.onerror = function () {
	      abort('error');
	    };
	
	    script.src = options.url.replace(/=\?/, '=' + callbackName);
	    $('head').append(script);
	
	    if (options.timeout > 0) abortTimeout = setTimeout(function () {
	      abort('timeout');
	    }, options.timeout);
	
	    return xhr;
	  };
	
	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function xhr() {
	      return new window.XMLHttpRequest();
	    },
	    // MIME types mapping
	    accepts: {
	      script: 'text/javascript, application/javascript',
	      json: jsonType,
	      xml: 'application/xml, text/xml',
	      html: htmlType,
	      text: 'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  };
	
	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0];
	    return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
	  }
	
	  function appendQuery(url, query) {
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?');
	  }
	
	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET')) options.url = appendQuery(options.url, options.data);
	  }
	
	  $.ajax = function (options) {
	    var settings = $.extend({}, options || {});
	    for (key in $.ajaxSettings) {
	      if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
	    }ajaxStart(settings);
	
	    if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host;
	
	    if (!settings.url) settings.url = window.location.toString();
	    serializeData(settings);
	    if (settings.cache === false) settings.url = appendQuery(settings.url, '_=' + Date.now());
	
	    var dataType = settings.dataType,
	        hasPlaceholder = /=\?/.test(settings.url);
	    if (dataType == 'jsonp' || hasPlaceholder) {
	      if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?');
	      return $.ajaxJSONP(settings);
	    }
	
	    var mime = settings.accepts[dataType],
	        baseHeaders = {},
	        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	        xhr = settings.xhr(),
	        abortTimeout;
	
	    if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest';
	    if (mime) {
	      baseHeaders['Accept'] = mime;
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
	      xhr.overrideMimeType && xhr.overrideMimeType(mime);
	    }
	    if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') baseHeaders['Content-Type'] = settings.contentType || 'application/x-www-form-urlencoded';
	    settings.headers = $.extend(baseHeaders, settings.headers || {});
	
	    xhr.onreadystatechange = function () {
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty;
	        clearTimeout(abortTimeout);
	        var result,
	            error = false;
	        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
	          dataType = dataType || mimeToDataType(xhr.getResponseHeader('content-type'));
	          result = xhr.responseText;
	
	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);
	          } catch (e) {
	            error = e;
	          }
	
	          if (error) ajaxError(error, 'parsererror', xhr, settings);else ajaxSuccess(result, xhr, settings);
	        } else {
	          ajaxError(null, xhr.status ? 'error' : 'abort', xhr, settings);
	        }
	      }
	    };
	
	    var async = 'async' in settings ? settings.async : true;
	    xhr.open(settings.type, settings.url, async);
	
	    for (name in settings.headers) {
	      xhr.setRequestHeader(name, settings.headers[name]);
	    }if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort();
	      return false;
	    }
	
	    if (settings.timeout > 0) abortTimeout = setTimeout(function () {
	      xhr.onreadystatechange = empty;
	      xhr.abort();
	      ajaxError(null, 'timeout', xhr, settings);
	    }, settings.timeout);
	
	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null);
	    return xhr;
	  };
	
	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    var hasData = !$.isFunction(data);
	    return {
	      url: url,
	      data: hasData ? data : undefined,
	      success: !hasData ? data : $.isFunction(success) ? success : undefined,
	      dataType: hasData ? dataType || success : success
	    };
	  }
	
	  $.get = function (url, data, success, dataType) {
	    return $.ajax(parseArguments.apply(null, arguments));
	  };
	
	  $.post = function (url, data, success, dataType) {
	    var options = parseArguments.apply(null, arguments);
	    options.type = 'POST';
	    return $.ajax(options);
	  };
	
	  $.getJSON = function (url, data, success) {
	    var options = parseArguments.apply(null, arguments);
	    options.dataType = 'json';
	    return $.ajax(options);
	  };
	
	  $.fn.load = function (url, data, success) {
	    if (!this.length) return this;
	    var self = this,
	        parts = url.split(/\s/),
	        selector,
	        options = parseArguments(url, data, success),
	        callback = options.success;
	    if (parts.length > 1) options.url = parts[0], selector = parts[1];
	    options.success = function (response) {
	      self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
	      callback && callback.apply(self, arguments);
	    };
	    $.ajax(options);
	    return this;
	  };
	
	  var escape = encodeURIComponent;
	
	  function serialize(params, obj, traditional, scope) {
	    var type,
	        array = $.isArray(obj);
	    $.each(obj, function (key, value) {
	      type = $.type(value);
	      if (scope) key = traditional ? scope : scope + '[' + (array ? '' : key) + ']';
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value);
	      // recurse into nested objects
	      else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
	    });
	  }
	
	  $.param = function (obj, traditional) {
	    var params = [];
	    params.add = function (k, v) {
	      this.push(escape(k) + '=' + escape(v));
	    };
	    serialize(params, obj, traditional);
	    return params.join('&').replace(/%20/g, '+');
	  };
	})(Zepto);(function ($) {
	  $.fn.serializeArray = function () {
	    var result = [],
	        el;
	    $(Array.prototype.slice.call(this.get(0).elements)).each(function () {
	      el = $(this);
	      var type = el.attr('type');
	      if (this.nodeName.toLowerCase() != 'fieldset' && !this.disabled && type != 'submit' && type != 'reset' && type != 'button' && (type != 'radio' && type != 'checkbox' || this.checked)) result.push({
	        name: el.attr('name'),
	        value: el.val()
	      });
	    });
	    return result;
	  };
	
	  $.fn.serialize = function () {
	    var result = [];
	    this.serializeArray().forEach(function (elm) {
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
	    });
	    return result.join('&');
	  };
	
	  $.fn.submit = function (callback) {
	    if (callback) this.bind('submit', callback);else if (this.length) {
	      var event = $.Event('submit');
	      this.eq(0).trigger(event);
	      if (!event.defaultPrevented) this.get(0).submit();
	    }
	    return this;
	  };
	})(Zepto);(function ($, undefined) {
	  var prefix = '',
	      eventPrefix,
	      endEventName,
	      endAnimationName,
	      vendors = { Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' },
	      document = window.document,
	      testEl = document.createElement('div'),
	      supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
	      transform,
	      transitionProperty,
	      transitionDuration,
	      transitionTiming,
	      animationName,
	      animationDuration,
	      animationTiming,
	      cssReset = {};
	
	  function dasherize(str) {
	    return downcase(str.replace(/([a-z])([A-Z])/, '$1-$2'));
	  }
	  function downcase(str) {
	    return str.toLowerCase();
	  }
	  function normalizeEvent(name) {
	    return eventPrefix ? eventPrefix + name : downcase(name);
	  }
	
	  $.each(vendors, function (vendor, event) {
	    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
	      prefix = '-' + downcase(vendor) + '-';
	      eventPrefix = event;
	      return false;
	    }
	  });
	
	  transform = prefix + 'transform';
	  cssReset[transitionProperty = prefix + 'transition-property'] = cssReset[transitionDuration = prefix + 'transition-duration'] = cssReset[transitionTiming = prefix + 'transition-timing-function'] = cssReset[animationName = prefix + 'animation-name'] = cssReset[animationDuration = prefix + 'animation-duration'] = cssReset[animationTiming = prefix + 'animation-timing-function'] = '';
	
	  $.fx = {
	    off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
	    speeds: { _default: 400, fast: 200, slow: 600 },
	    cssPrefix: prefix,
	    transitionEnd: normalizeEvent('TransitionEnd'),
	    animationEnd: normalizeEvent('AnimationEnd')
	  };
	
	  $.fn.animate = function (properties, duration, ease, callback) {
	    if ($.isPlainObject(duration)) ease = duration.easing, callback = duration.complete, duration = duration.duration;
	    if (duration) duration = (typeof duration == 'number' ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1000;
	    return this.anim(properties, duration, ease, callback);
	  };
	
	  $.fn.anim = function (properties, duration, ease, callback) {
	    var key,
	        cssValues = {},
	        cssProperties,
	        transforms = '',
	        that = this,
	        _wrappedCallback,
	        endEvent = $.fx.transitionEnd;
	
	    if (duration === undefined) duration = 0.4;
	    if ($.fx.off) duration = 0;
	
	    if (typeof properties == 'string') {
	      // keyframe animation
	      cssValues[animationName] = properties;
	      cssValues[animationDuration] = duration + 's';
	      cssValues[animationTiming] = ease || 'linear';
	      endEvent = $.fx.animationEnd;
	    } else {
	      cssProperties = [];
	      // CSS transitions
	      for (key in properties) {
	        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') ';else cssValues[key] = properties[key], cssProperties.push(dasherize(key));
	      }if (transforms) cssValues[transform] = transforms, cssProperties.push(transform);
	      if (duration > 0 && (typeof properties === 'undefined' ? 'undefined' : _typeof(properties)) === 'object') {
	        cssValues[transitionProperty] = cssProperties.join(', ');
	        cssValues[transitionDuration] = duration + 's';
	        cssValues[transitionTiming] = ease || 'linear';
	      }
	    }
	
	    _wrappedCallback = function wrappedCallback(event) {
	      if (typeof event !== 'undefined') {
	        if (event.target !== event.currentTarget) return; // makes sure the event didn't bubble from "below"
	        $(event.target).unbind(endEvent, _wrappedCallback);
	      }
	      $(this).css(cssReset);
	      callback && callback.call(this);
	    };
	    if (duration > 0) this.bind(endEvent, _wrappedCallback);
	
	    // trigger page reflow so new elements can animate
	    this.size() && this.get(0).clientLeft;
	
	    this.css(cssValues);
	
	    if (duration <= 0) setTimeout(function () {
	      that.each(function () {
	        _wrappedCallback.call(this);
	      });
	    }, 0);
	
	    return this;
	  };
	
	  testEl = null;
	})(Zepto);

/***/ },
/* 45 */
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
/* 46 */
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
	
	    el.find('[type=checkbox]').addClass('sc-input');
	    var updateCaption = function updateCaption() {
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
	    var _this = this;
	
	    this.querySelector('p').addEventListener('mousedown', function () {
	        closeAllDropdowns(_this);
	        _this.classList.toggle('sc-open');
	    });
	
	    attachEventListeners();
	}
	
	/**
	 * @param {HTMLElement} exceptThisOne
	 */
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
	    attachEventListeners = function attachEventListeners() {}; // so that we only attach at most once
	}

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Navigation = function () {
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
	
	        /**
	         * @param {HTMLElement} root
	         */
	
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
	
	    /**
	     * @event Navigation#toggleMenu
	     * @event Navigation#escapeMenu
	     * @event Navigation#onKeyDown
	     * @event Navigation#onKeyUp
	     */
	
	
	    _createClass(Navigation, [{
	        key: 'initEvents',
	        value: function initEvents() {
	            this.rootElement.on('click', 'ul>li', $.proxy(this.toggleMenu, this));
	            this.menuBtn.on('click', $.proxy(this.toggleMenu, this));
	            this.document.on('click', $.proxy(this.escapeMenu, this));
	            this.document.on('keydown', $.proxy(this.onKeyDown, this));
	            this.document.on('keyup', $.proxy(this.onKeyUp, this));
	        }
	
	        /**
	         * @param {Object} event
	         */
	
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
	
	        /**
	         * @param {HTMLElement} element
	         */
	
	    }, {
	        key: 'setActiveMenu',
	        value: function setActiveMenu(element) {
	            this.activeMenu = $(element);
	        }
	
	        /**
	         * @param {HTMLElement} element
	         */
	
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
	            if (!this.activeMenu) {
	                // quick fix when active menu doesn't exists because of any unknown reason
	                // TODO: fix it properly
	                return;
	            }
	
	            this.activeMenu.addClass('open');
	            this.items = this.activeMenu.find('ul:not(.submenu) > li:not(.subheadline)');
	            this.menuIsOpen = true;
	        }
	
	        /**
	         * @param {Object} event
	         */
	
	    }, {
	        key: 'escapeMenu',
	        value: function escapeMenu(event) {
	            this.activeMenu && this.menuIsOpen && this.closeMenu();
	        }
	
	        /**
	         * @param {Number} keyCode
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'isNavigationKey',
	        value: function isNavigationKey(keyCode) {
	            return [this.KEY_DOWN, this.KEY_LEFT, this.KEY_RIGHT, this.KEY_UP, this.KEY_TAB].indexOf(keyCode) > -1;
	        }
	
	        /**
	         * Prevent scrolling
	         *
	         * @param {Object} event
	         * @returns {boolean}
	         */
	
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
	
	        /**
	         * @param {Object} event
	         * @returns {boolean}
	         */
	
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
	            if (!this.activeMenu) {
	                // quick fix when active menu doesn't exists because of any unknown reason
	                // TODO: fix it properly
	                return;
	            }
	
	            var current = this.menus.indexOf(this.activeMenu[0]);
	            var newMenuIdx = this.menus.length - 1 > current ? newMenuIdx = current + 1 : 0;
	            this.selectMenu(this.menus[newMenuIdx]);
	        }
	    }, {
	        key: 'handleJumpLeft',
	        value: function handleJumpLeft() {
	            if (!this.activeMenu) {
	                // quick fix when active menu doesn't exists because of any unknown reason
	                // TODO: fix it properly
	                return;
	            }
	
	            var current = this.menus.indexOf(this.activeMenu[0]);
	            var newMenuIdx = 0 < current ? current - 1 : this.menus.length - 1;
	            this.selectMenu(this.menus[newMenuIdx]);
	        }
	
	        /**
	         * @param {HTMLElement} element
	         */
	
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
	}();
	
	var navigationElement = document.querySelector('.sc-navigation'),
	    navigation = null;
	if (navigationElement) {
	    navigation = new Navigation(navigationElement);
	}
	module.exports = navigation;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ContainerHandler = __webpack_require__(50);
	var containerHandler = new ContainerHandler();
	
	function onElementCreated() {
	    containerHandler.createNotification(this);
	}
	
	function onElementChanged(attributeName, previous, value) {
	    containerHandler.updateNotification(this, attributeName, previous, value);
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

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Container = function () {
	
	    /**
	     * @event Container#onScroll
	     * @param {String} target
	     */
	
	    function Container(target) {
	        _classCallCheck(this, Container);
	
	        this.target = target;
	        this.targetPosition = 0;
	        this.element = this.createElement('div', document.body, '', ['sc-notification-container']);
	        this.notifications = [];
	
	        this.updatePosition();
	
	        $(document).on('scroll', this.onScroll.bind(this));
	        $(document.body).on('DOMSubtreeModified', this.observeTargetPosition.bind(this));
	    }
	
	    /**
	     * @returns {Array}
	     */
	
	
	    _createClass(Container, [{
	        key: 'remove',
	
	
	        /**
	         * @returns {Node}
	         */
	        value: function remove() {
	            return this.element.remove();
	        }
	
	        /**
	         * @param {Notification} notification
	         */
	
	    }, {
	        key: 'addNotificationToTarget',
	        value: function addNotificationToTarget(notification) {
	            this.element.appendChild(notification.element);
	        }
	
	        /**
	         * @param {Notification} notification
	         */
	
	    }, {
	        key: 'addNotification',
	        value: function addNotification(notification) {
	            if (this.notifications.indexOf(notification) < 0) {
	                this.notifications.push(notification);
	            }
	            this.addNotificationToTarget(notification);
	        }
	
	        /**
	         * @param {Notification} notification
	         * @returns {Array.<T>}
	         */
	
	    }, {
	        key: 'removeNotification',
	        value: function removeNotification(notification) {
	            return this.notifications.splice(this.notifications.indexOf(notification), 1);
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
	        key: 'updatePosition',
	        value: function updatePosition() {
	            if (!this.target) return;
	
	            var target = $(this.target);
	            var offset = target.offset();
	            var width = target.width();
	            var element = $(this.element);
	
	            this.targetPosition = [offset.top, offset.left, offset.width, offset.height];
	
	            if ($(window).scrollTop() > offset.top + offset.height) {
	                element.css({
	                    position: 'fixed',
	                    top: 0,
	                    width: width + 'px',
	                    left: offset.left + 'px'
	                });
	            } else {
	                element.css({
	                    position: 'absolute',
	                    width: width + 'px',
	                    top: offset.top + offset.height + 'px',
	                    left: offset.left + 'px'
	                });
	            }
	        }
	    }, {
	        key: 'onScroll',
	        value: function onScroll() {
	            if ($('.show', this.element).length > 0) {
	                this.updatePosition();
	            }
	        }
	    }, {
	        key: 'observeTargetPosition',
	        value: function observeTargetPosition() {
	            var offset = $(this.target).offset();
	            if (this.targetPosition.toString() != [offset.top, offset.left, offset.width, offset.height].toString()) {
	                this.onScroll();
	            }
	        }
	    }, {
	        key: 'childNodes',
	        get: function get() {
	            return this.element.childNodes;
	        }
	    }]);
	
	    return Container;
	}();
	
	module.exports = Container;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Notification = __webpack_require__(51);
	var Container = __webpack_require__(49);
	
	var ContainerHandler = function () {
	    function ContainerHandler() {
	        _classCallCheck(this, ContainerHandler);
	
	        this.containers = {};
	    }
	
	    /**
	     * Add a new notification
	     *
	     * @param {HTMLElement} element
	     */
	
	
	    _createClass(ContainerHandler, [{
	        key: 'createNotification',
	        value: function createNotification(element) {
	            var notification = new Notification(element);
	            notification.create();
	
	            element.notification = notification;
	        }
	
	        /**
	         * Update a existing notification
	         *
	         * @param {HTMLElement} element
	         * @param {String} attribute
	         * @param {String} previous previous value
	         * @param {String} value new value
	         */
	
	    }, {
	        key: 'updateNotification',
	        value: function updateNotification(element, attribute, previous, value) {
	            var notification = element.notification;
	
	            if (notification === undefined || notification === null) return;
	
	            if ('class' === attribute && 'show' === value) {
	                this.addNotificationToContainer(notification);
	            } else if ('target' === attribute) {
	                this.moveNotificationToContainer(notification, attribute, previous, value);
	            }
	
	            if (typeof notification.update === 'function') {
	                notification.update(attribute, value);
	            }
	        }
	
	        /**
	         * @param {Notification} notification
	         */
	
	    }, {
	        key: 'addNotificationToContainer',
	        value: function addNotificationToContainer(notification) {
	            var container = void 0;
	
	            if (!this.hasContainer(notification.targetName)) {
	                container = this.createContainer(notification.targetName);
	            } else {
	                container = this.getContainer(notification.targetName);
	            }
	            container.addNotification(notification);
	        }
	
	        /**
	         * Move a notification to a new container if the target was changed
	         *
	         * @param {Notification} notification
	         * @param {String} attribute
	         * @param {String} previous
	         * @param {String} value
	         */
	
	    }, {
	        key: 'moveNotificationToContainer',
	        value: function moveNotificationToContainer(notification, attribute, previous, value) {
	            if (previous !== value) {
	                if (this.hasContainer(previous)) {
	                    var container = this.getContainer(previous);
	                    container.removeNotification(notification);
	                }
	                this.addNotificationToContainer(notification);
	            }
	
	            // cleanup old containers without notifications
	            if (this.hasContainer(previous)) {
	                var _container = this.getContainer(previous);
	                if (_container.childNodes.length < 1) {
	                    _container.remove();
	                    delete this.containers[previous];
	                }
	            }
	        }
	
	        /**
	         * Create container below the target element
	         *
	         * @param target
	         */
	
	    }, {
	        key: 'createContainer',
	        value: function createContainer(target) {
	            var container = new Container(target);
	            this.containers[target] = container;
	
	            return container;
	        }
	
	        /**
	         * @param {String} target
	         * @returns {Container}
	         */
	
	    }, {
	        key: 'getContainer',
	        value: function getContainer(target) {
	            return this.containers[target];
	        }
	
	        /**
	         *
	         * @param {String} name
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'hasContainer',
	        value: function hasContainer(name) {
	            return this.containers.hasOwnProperty(name);
	        }
	    }]);
	
	    return ContainerHandler;
	}();
	
	module.exports = ContainerHandler;

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Notification = function () {
	
	    /**
	     * @param {HTMLElement} element
	     */
	
	    function Notification(element) {
	        _classCallCheck(this, Notification);
	
	        this.element = element;
	        this._body = '';
	        this.body = this.element.innerHTML;
	
	        this.closeBtn = null;
	        this.titleTag = null;
	    }
	
	    _createClass(Notification, [{
	        key: 'hide',
	        value: function hide() {
	            this.element.classList.remove('show');
	            this.element.classList.remove('prefade');
	        }
	    }, {
	        key: 'isShow',
	        value: function isShow() {
	            return this.element.classList.contains('show');
	        }
	
	        /**
	         * Create the html structure of the notification element
	         */
	
	    }, {
	        key: 'create',
	        value: function create() {
	            this.element.classList.add('prefade');
	            this.element.innerHTML = '';
	            this.container = this.createElement('div', this.element, '', ['icon']);
	            this.titleTag = this.createElement('span', this.container, this.title, ['sc-font-m', 'sc-font-bold']);
	            this.createElement('div', this.container, this.body);
	
	            if (this.close) {
	                this.closeBtn = this.createCloseButton();
	            }
	        }
	
	        /**
	         * @param {String} attribute
	         * @param {String} value
	         */
	
	    }, {
	        key: 'update',
	        value: function update(attribute, value) {
	            if ('class' === attribute && this.isShow()) {
	                this.element.classList.remove('prefade');
	                if (this.timeout) {
	                    window.setTimeout(this.hide.bind(this), this.timeout);
	                }
	            } else if ('class' === attribute && !this.isShow()) {
	                this.hide();
	            }
	            if ('title' === attribute) {
	                this.titleTag.innerHTML = value;
	            }
	            if ('close' === attribute) {
	                if (!this.closeBtn && "true" === value) {
	                    this.closeBtn = this.createCloseButton();
	                } else {
	                    this.closeBtn.remove();
	                    this.closeBtn = null;
	                }
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
	        key: 'createCloseButton',
	        value: function createCloseButton() {
	            var closeBtn = this.createElement('a', this.container, '');
	            $(closeBtn).on('click', this.hide.bind(this));
	
	            var icon = this.createElement('as24-icon', closeBtn, '');
	            icon.setAttribute('type', 'close');
	
	            return closeBtn;
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
	        key: 'close',
	        get: function get() {
	            return this.element.getAttribute('close');
	        }
	    }, {
	        key: 'body',
	        get: function get() {
	            return this._body;
	        },
	        set: function set(value) {
	            this._body = value;
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return document.querySelector(this.targetName);
	        }
	    }, {
	        key: 'targetName',
	        get: function get() {
	            return this.element.getAttribute('target');
	        }
	    }]);
	
	    return Notification;
	}();
	
	module.exports = Notification;

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Pager = function () {
	
	    /**
	     * @param {HTMLElement|String} root can be a selector
	     * @param {Number} itemsPerPage
	     * @param {Number} activePage
	     * @param {Number} totalItems
	     * @param {String} urlTemplate
	     */
	
	    function Pager(root, itemsPerPage, activePage, totalItems, urlTemplate) {
	        _classCallCheck(this, Pager);
	
	        this.ETC = '...';
	        this.rootElement = $(root);
	        this.itemsPerPage = parseInt(itemsPerPage);
	        this.activePage = parseInt(activePage);
	        this.totalCount = parseInt(totalItems);
	        this.urlTemplate = urlTemplate;
	        this.maxPage = this.calculatePageCount();
	        this.tileWidth = 48;
	
	        this.prototypeLi = $('<li>');
	        this.prototypeA = $('<a>');
	        this.prototypeIcon = $('<as24-icon>');
	
	        $(window).on('resize', $.proxy(this.render, this));
	
	        this.render();
	    }
	
	    /**
	     * @returns {Number}
	     */
	
	
	    _createClass(Pager, [{
	        key: 'getPageUrl',
	
	
	        /**
	         * @param {Number} pageNumber
	         * @returns {String}
	         */
	        value: function getPageUrl(pageNumber) {
	            var template = this.urlTemplate.replace('{page}', pageNumber.toString());
	
	            return template.replace('{size}', this.itemsPerPage.toString());
	        }
	
	        /**
	         * Create a single page element
	         *
	         * @param {Number} pageNumber
	         * @returns {Object|Zepto}
	         */
	
	    }, {
	        key: 'createPage',
	        value: function createPage(pageNumber) {
	            var tile = this.prototypeLi.clone().data('page', pageNumber),
	                a = this.prototypeA.clone().attr('href', this.getPageUrl(pageNumber));
	
	            if (this.ETC === pageNumber) {
	                tile.data('page', 'etc');
	                a.addClass('disabled');
	            }
	
	            if (this.activePage === pageNumber) {
	                a.addClass('active');
	            }
	
	            a.text(pageNumber);
	
	            return tile.append(a);
	        }
	
	        /**
	         * Returns the maximum possible amount ot tiles between <PREV> and <NEXT>
	         *
	         * @returns {int}
	         */
	
	    }, {
	        key: 'getMaximumPossibleTiles',
	        value: function getMaximumPossibleTiles() {
	            var rootWidth = this.rootElement.width();
	
	            // We assume that this is the minWidth for both buttons
	            var prevNextWidth = 200;
	
	            return Math.floor((rootWidth - prevNextWidth) / this.tileWidth);
	        }
	
	        /**
	         * Returns an array with all page numbers in the correct order
	         *
	         * Example:
	         * activePage = 17
	         * maxPage    = 20
	         * Returns [1, "...", 14, 15, 16, 17, 18, 19, 20]
	         *
	         * @param {Number} activePage
	         * @returns {Array}
	         */
	
	    }, {
	        key: 'getPageTiles',
	        value: function getPageTiles(activePage) {
	            var leftNumber = activePage - 1,
	                rightNumber = activePage + 1,
	                maxPossibleTiles = this.getMaximumPossibleTiles(),
	                usefulTiles = 0,
	                countEtc = 0;
	
	            // we always want to have an odd number of tiles to show
	            if (maxPossibleTiles % 2 === 0 && this.maxPage > maxPossibleTiles) {
	                maxPossibleTiles--;
	            }
	
	            var tiles = [activePage];
	
	            // because we have our activePage, we have one possible tile less
	            maxPossibleTiles--;
	
	            while ((leftNumber > 0 || rightNumber <= this.maxPage) && maxPossibleTiles > 0) {
	
	                if (leftNumber > 0) {
	                    tiles.unshift(leftNumber);
	                    usefulTiles++;
	                    maxPossibleTiles--;
	                    if (0 === maxPossibleTiles) {
	                        break;
	                    }
	                }
	
	                if (rightNumber <= this.maxPage) {
	                    tiles.push(rightNumber);
	                    usefulTiles++;
	                    maxPossibleTiles--;
	                    if (0 === maxPossibleTiles) {
	                        break;
	                    }
	                }
	
	                leftNumber--;
	                rightNumber++;
	            }
	
	            // special case: we have enough space to show 'em all
	            if (tiles.length === this.maxPage) {
	                return tiles;
	            }
	
	            // special case: If we have less or equal to 7 pages/tiles in total, we show all or infopage
	            if (this.maxPage <= 7 && tiles.length < this.maxPage) {
	                return [];
	            }
	
	            // show dots on the left ( < 1 ... 7 8 9)
	            if (1 !== tiles[0]) {
	                tiles[0] = 1;
	                tiles[1] = this.ETC;
	                countEtc++;
	                usefulTiles -= 1;
	            }
	
	            // show dots on the right ( 10 11 ... 20 >)
	            if (this.maxPage !== tiles[tiles.length - 1]) {
	                tiles[tiles.length - 1] = this.maxPage;
	                tiles[tiles.length - 2] = this.ETC;
	                countEtc++;
	                usefulTiles -= 1;
	            }
	
	            // special case: show info page if less than 3 useful tiles
	            if (countEtc >= 1 && usefulTiles <= 3) {
	                return [];
	            }
	
	            // show only the info page tile
	            if (usefulTiles <= 2 || this.maxPage <= 3) {
	                return [];
	            }
	
	            return tiles;
	        }
	
	        /**
	         * Render the pagination
	         */
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            this.rootElement.children().remove();
	
	            var pagination = this.getPageTiles(this.activePage),
	                collection = $();
	
	            this.rootElement.append(this.previousButton);
	
	            if (0 === pagination.length) {
	                this.rootElement.append(this.infoPage);
	            } else {
	                pagination.forEach(function (page) {
	                    collection = collection.add(_this.createPage(page));
	                });
	                this.rootElement.append(collection);
	            }
	
	            this.rootElement.append(this.nextButton);
	        }
	
	        /**
	         * @returns {Number}
	         */
	
	    }, {
	        key: 'calculatePageCount',
	        value: function calculatePageCount() {
	            var numberOfPages = Math.ceil(this.totalCount / this.itemsPerPage);
	
	            if (numberOfPages >= 20) {
	                return 20;
	            }
	
	            return numberOfPages;
	        }
	    }, {
	        key: 'maxPage',
	        get: function get() {
	            return this._maxPage;
	        }
	
	        /**
	         * @param {Number} pages
	         */
	        ,
	        set: function set(pages) {
	            this._maxPage = pages;
	        }
	
	        /**
	         * @returns {Object|Zepto}
	         */
	
	    }, {
	        key: 'previousButton',
	        get: function get() {
	            var li = this.prototypeLi.clone(),
	                a = this.prototypeA.clone(),
	                icon = this.prototypeIcon.clone();
	
	            li.addClass('previous-page');
	            a.attr('href', this.getPageUrl(this.activePage - 1));
	            a.text(' Previous');
	            icon.attr('type', 'arrow');
	
	            if (1 === this.activePage) a.addClass('disabled');
	
	            return li.append(a.prepend(icon));
	        }
	
	        /**
	         * @returns {Object|Zepto}
	         */
	
	    }, {
	        key: 'nextButton',
	        get: function get() {
	            var li = this.prototypeLi.clone(),
	                a = this.prototypeA.clone(),
	                icon = this.prototypeIcon.clone();
	
	            li.addClass('next-page');
	            a.attr('href', this.getPageUrl(this.activePage + 1));
	            a.text('Next ');
	            icon.attr('type', 'arrow');
	
	            if (this.maxPage === this.activePage) a.addClass('disabled');
	
	            return li.append(a.append(icon));
	        }
	    }, {
	        key: 'infoPage',
	        get: function get() {
	            return this.prototypeLi.clone().addClass('info-page').append(this.prototypeA.clone().addClass('disabled').attr('href', 'javascript:void(0)').text(this.activePage + ' / ' + this.maxPage));
	        }
	    }]);
	
	    return Pager;
	}();
	
	module.exports = Pager;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function () {
	    'use strict';
	
	    var isDom4Browser = document.head && 'matches' in document.head && 'classList' in document.head && 'CustomEvent' in window;
	
	    var isEs5Browser = 'map' in Array.prototype && 'isArray' in Array && 'bind' in Function.prototype && 'keys' in Object && 'trim' in String.prototype;
	
	    __webpack_require__(13);
	    __webpack_require__(23);
	    __webpack_require__(11);
	
	    if (!isDom4Browser) {
	        __webpack_require__(14);
	    }
	
	    // TODO: check whether we need this
	    //if (!isEs5Browser) {
	    //    require('es5-shim/es5-shim.min.js');
	    //}
	};

/***/ },
/* 54 */
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
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	function smoothScroll(el, to, duration) {
	    if (duration < 0) {
	        return;
	    }
	
	    var difference = to - $(window).scrollTop();
	    var perTick = difference / duration * 10;
	    $(this).scrollToTimerCache = setTimeout(function () {
	        if (!isNaN(parseInt(perTick, 10))) {
	            window.scrollTo(0, $(window).scrollTop() + perTick);
	            smoothScroll(el, to, duration - 10);
	        }
	    }, 10);
	}
	
	$('a[href*="#"]').on('click', function (e) {
	    var scrollDuration = 300;
	    var targetName = $(e.currentTarget).attr('href').split('#');
	    var targetSelector = 'a[name="' + targetName[1] + '"]';
	
	    if ($(targetSelector).length === 0) {
	        targetSelector = '#' + targetName[1];
	        if ($(targetSelector).length === 0) {
	            return;
	        }
	    }
	
	    e.preventDefault();
	
	    smoothScroll($(window), $(targetSelector).offset().top, scrollDuration);
	
	    return false;
	});

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	(function () {
	    Array.prototype.forEach.call(document.querySelectorAll('.sc-stepper'), function (stepperContainer) {
	        var stepperEl = stepperContainer.querySelector('.sc-stepper-input');
	        var decrementEl = stepperContainer.querySelector(".sc-stepper-button-decrement");
	        var incrementEl = stepperContainer.querySelector(".sc-stepper-button-increment");
	        var minValue = parseInt(stepperEl.getAttribute('min')) || 0;
	        var maxValue = parseInt(stepperEl.getAttribute('max')) || 100;
	
	        // To make sure we can also calculate with the value the user typed in
	        var getCurrentValue = function getCurrentValue(_) {
	            return stepperEl.value !== "" ? parseInt(stepperEl.value, 10) : 0;
	        };
	
	        var currentValue = getCurrentValue();
	
	        var increment = function increment(_) {
	            currentValue = getCurrentValue();
	
	            if (currentValue < maxValue) {
	                stepperEl.value = ++currentValue;
	            }
	        };
	
	        var decrement = function decrement(_) {
	            currentValue = getCurrentValue();
	
	            if (currentValue > minValue) {
	                stepperEl.value = --currentValue;
	            }
	        };
	
	        decrementEl.addEventListener("click", decrement);
	        incrementEl.addEventListener("click", increment);
	    });
	})();

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
	
	    /**
	     * add an class to the given dom element
	     * ToDo: move it to utils or use a polyfill
	     * @param {string} className
	     * @param {HTMLElement} domEl
	     * @returns {HTMLElement}
	     */
	    function addClass(className, domEl) {
	        var classList = [],
	            classesString = domEl.getAttribute('class');
	        if (classesString) {
	            classList = classesString.split(' ');
	            if (classList.indexOf(className) === -1) {
	                classesString = classList.concat(className).join(' ');
	            }
	        } else {
	            classesString = className;
	        }
	        domEl.setAttribute('class', classesString);
	        return domEl;
	    }
	
	    /**
	     * remove an class to the given dom element
	     * ToDo: move it to utils or use a polyfill
	     * @param {string} className
	     * @param {HTMLElement} domEl
	     * @returns {HTMLElement}
	     */
	    function removeClass(className, domEl) {
	        var classList = [],
	            classesString = domEl.getAttribute('class');
	        if (classesString) {
	            classList = classesString.split(' ');
	            if (classList.indexOf(className) !== -1) {
	                classList.splice(classList.indexOf(className), 1);
	            }
	            domEl.setAttribute('class', classList.join(' '));
	        }
	        return domEl;
	    }
	
	    /**
	     * gets the current document height.
	     * @returns {number}
	     */
	    function getDocumentHeight() {
	        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
	    }
	
	    /**
	     * gets the current client height.
	     * @returns {number}
	     */
	    function getWindowHeight() {
	        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	    }
	
	    /**
	     * handler for positioning the sticky elements.
	     */
	    function handleStickies() {
	
	        // get some basic values element like: scroll position, document and window height and the sticky elements
	        var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
	        var stickies = document.querySelectorAll('[data-sticky]');
	        var bodyOffset = document.body.getBoundingClientRect().top;
	        var documentHeight = getDocumentHeight();
	        var windowHeight = getWindowHeight();
	
	        [].forEach.call(stickies, function (stickyElement) {
	
	            // Get the dock and un-dock element by the id of sticky
	            var id = stickyElement.getAttribute('data-sticky');
	            var undockElement = document.querySelector('[data-sticky-undock="' + id + '"]');
	            var dockElement = document.querySelector('[data-sticky-dock="' + id + '"]');
	
	            // If device height is to small don't stick!
	            if (windowHeight < 320) {
	                removeClass('sc-sticky', stickyElement);
	                return;
	            }
	
	            // If there is no dock or un-dock element just stick!
	            if (!undockElement && !dockElement) {
	                addClass('sc-sticky', stickyElement);
	                return;
	            }
	
	            // Get dock and un-dock element positions
	            var undockPosition = undockElement ? undockElement.getBoundingClientRect().top - bodyOffset : 0;
	            var dockPosition = dockElement ? dockElement.getBoundingClientRect().top - bodyOffset : documentHeight;
	
	            // Decide based on the position to stick or not stick
	            if (scrollPosition + windowHeight > undockPosition && scrollPosition < dockPosition - windowHeight + stickyElement.getBoundingClientRect().height * 1.5) {
	                addClass('sc-sticky', stickyElement);
	            } else {
	                removeClass('sc-sticky', stickyElement);
	            }
	        });
	    }
	
	    /**
	     * initial positioning of the sticky
	     */
	    handleStickies();
	
	    /**
	     * adding several event listeners needed for updating the positions of the stickies
	     */
	    window.addEventListener("deviceorientation", function () {
	        return handleStickies();
	    });
	    window.addEventListener("resize", function () {
	        return handleStickies();
	    });
	    window.addEventListener("pageSizeChanged", function () {
	        return handleStickies();
	    });
	    document.addEventListener('scroll', function () {
	        return handleStickies();
	    });
	    document.addEventListener('collapse', function () {
	        return handleStickies();
	    });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=showcar-ui.js.map