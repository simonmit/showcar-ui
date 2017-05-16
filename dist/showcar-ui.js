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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var registerElement = function registerElement(element) {
    try {
        document.registerElement(element.tagName, {
            prototype: Object.create(HTMLElement.prototype, {
                createdCallback: {
                    value: element.createdCallback
                },
                attributeChangedCallback: {
                    value: element.attributeChangedCallback
                },
                attachedCallback: {
                    value: element.attachedCallback
                }
            })
        });
    } catch (e) {
        if (window && window.console) {
            window.console.warn('Failed to register CustomElement "' + element.tagName + '".', e);
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (registerElement);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = smoothScroll;
/* harmony export (immutable) */ __webpack_exports__["a"] = registerSmoothScrolling;
var _this = this;

var scroll = function scroll(to, duration) {
    if (duration <= 0) {
        window.scrollTo(0, to);
    } else {
        var difference = to - window.pageYOffset;

        var perTick = difference / duration * 10;
        $(_this).scrollToTimerCache = setTimeout(function () {
            if (!isNaN(parseInt(perTick, 10))) {
                window.scrollTo(0, window.pageYOffset + perTick);
                scroll(to, duration - 10);
            }
        }, 10);
    }
};

function smoothScroll(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var cb = arguments[2];


    var targetSelector = '';
    var hrefTarget = $(target).attr('href');

    // We need to handle href and name since spy navigation is using name as target
    if (hrefTarget.length) {
        targetSelector = 'a[name="' + hrefTarget.split('#')[1] + '"]';
        if (!$(targetSelector).length) {
            targetSelector = hrefTarget;
        }
    } else {
        var nameTarget = $(target).attr('name');
        if (nameTarget.length) {
            targetSelector = 'a[name="' + nameTarget + '"]';
        } else {
            console.warn('No target for scroll');
            return;
        }
    }

    var offset = $(targetSelector).offset();
    var to = offset && offset.top || 0;

    scroll(to, duration);

    if (cb) {
        cb();
    }
}

function registerSmoothScrolling() {
    // TODO: Get rid of .sc-smooth-scroll class once all teams have migrated to data attribute
    $(document).on('click', '.sc-smooth-scroll, [data-smooth-scroll]', function (e) {
        e.preventDefault();
        smoothScroll(e.currentTarget);
        return false;
    });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
		module.exports = lazySizes;
	}
})(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */

	if (!document.getElementsByClassName) {
		return;
	}

	var lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function hasClass(ele, cls) {
		if (!regClassCache[cls]) {
			regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function addClass(ele, cls) {
		if (!hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function removeClass(ele, cls) {
		var reg;
		if (reg = hasClass(ele, cls)) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
		var action = add ? _addEventListener : 'removeEventListener';
		if (add) {
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function (evt) {
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
		var event = document.createEvent('CustomEvent');

		event.initCustomEvent(name, !noBubbles, !noCancelable, detail || {});

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function updatePolyfill(el, full) {
		var polyfill;
		if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
			polyfill({ reevaluate: true, elements: [el] });
		} else if (full && full.src) {
			el.src = full.src;
		}
	};

	var getCSS = function getCSS(elem, style) {
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function getWidth(elem, parent, width) {
		width = width || elem.offsetWidth;

		while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
			width = parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = function () {
		var running, waiting;
		var fns = [];

		var run = function run() {
			var fn;
			running = true;
			waiting = false;
			while (fns.length) {
				fn = fns.shift();
				fn[0].apply(fn[1], fn[2]);
			}
			running = false;
		};

		return function (fn) {
			if (running) {
				fn.apply(this, arguments);
			} else {
				fns.push([fn, this, arguments]);

				if (!waiting) {
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};
	}();

	var rAFIt = function rAFIt(fn, simple) {
		return simple ? function () {
			rAF(fn);
		} : function () {
			var that = this;
			var args = arguments;
			rAF(function () {
				fn.apply(that, args);
			});
		};
	};

	var throttle = function throttle(fn) {
		var running;
		var lastTime = 0;
		var gDelay = 125;
		var RIC_DEFAULT_TIMEOUT = 999;
		var rICTimeout = RIC_DEFAULT_TIMEOUT;
		var run = function run() {
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback ? function () {
			requestIdleCallback(run, { timeout: rICTimeout });
			if (rICTimeout !== RIC_DEFAULT_TIMEOUT) {
				rICTimeout = RIC_DEFAULT_TIMEOUT;
			}
		} : rAFIt(function () {
			setTimeout(run);
		}, true);

		return function (isPriority) {
			var delay;
			if (isPriority = isPriority === true) {
				rICTimeout = 66;
			}

			if (running) {
				return;
			}

			running = true;

			delay = gDelay - (Date.now() - lastTime);

			if (delay < 0) {
				delay = 0;
			}

			if (isPriority || delay < 9 && requestIdleCallback) {
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function debounce(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function run() {
			timeout = null;
			func();
		};
		var later = function later() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function () {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = function () {
		var lazyloadElems, preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

		var defaultExpand, preloadExpand, hFac;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = 'onscroll' in window && !/glebot/.test(navigator.userAgent);

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function resetPreloading(e) {
			isLoading--;
			if (e && e.target) {
				addRemoveLoadEvents(e.target, resetPreloading);
			}

			if (!e || isLoading < 0 || !e.target) {
				isLoading = 0;
			}
		};

		var isNestedVisible = function isNestedVisible(elem, elemExpand) {
			var outerRect;
			var parent = elem;
			var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
				visible = (getCSS(parent, 'opacity') || 1) > 0;

				if (visible && getCSS(parent, 'overflow') != 'visible') {
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
				}
			}

			return visible;
		};

		var checkElements = function checkElements() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

			if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {

				i = 0;

				lowRuns++;

				if (preloadExpand == null) {
					if (!('expand' in lazySizesConfig)) {
						lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
					}

					defaultExpand = lazySizesConfig.expand;
					preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				}

				if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for (; i < eLlen; i++) {

					if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
						continue;
					}

					if (!supportScroll) {
						unveilElement(lazyloadElems[i]);continue;
					}

					if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
						elemExpand = currentExpand;
					}

					if (beforeExpandVal !== elemExpand) {
						eLvW = innerWidth + elemExpand * hFac;
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if (isLoading > 9) {
							break;
						}
					} else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if (autoLoadElem && !loadedSomething) {
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function switchLoadingClass(e) {
			addClass(e.target, lazySizesConfig.loadedClass);
			removeClass(e.target, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
			rafedSwitchLoadingClass({ target: e.target });
		};

		var changeIframeSrc = function changeIframeSrc(elem, src) {
			try {
				elem.contentWindow.location.replace(src);
			} catch (e) {
				elem.src = src;
			}
		};

		var handleSources = function handleSources(source) {
			var customMedia, parent;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
				source.setAttribute('media', customMedia);
			}

			if (sourceSrcset) {
				source.setAttribute('srcset', sourceSrcset);
			}

			//https://bugzilla.mozilla.org/show_bug.cgi?id=1170572
			if (customMedia) {
				parent = source.parentNode;
				parent.insertBefore(source.cloneNode(), source);
				parent.removeChild(source);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
			var src, srcset, parent, isPicture, event, firesLoad;

			if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {

				if (sizes) {
					if (isAuto) {
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if (isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);

				event = { target: elem };

				if (firesLoad) {
					addRemoveLoadEvents(elem, resetPreloading, true);
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);

					addClass(elem, lazySizesConfig.loadingClass);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if (isPicture) {
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if (srcset) {
					elem.setAttribute('srcset', srcset);
				} else if (src && !isPicture) {
					if (regIframe.test(elem.nodeName)) {
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if (srcset || isPicture) {
					updatePolyfill(elem, { src: src });
				}
			}

			rAF(function () {
				if (elem._lazyRace) {
					delete elem._lazyRace;
				}
				removeClass(elem, lazySizesConfig.lazyClass);

				if (!firesLoad || elem.complete) {
					if (firesLoad) {
						resetPreloading(event);
					} else {
						isLoading--;
					}
					switchLoadingClass(event);
				}
			});
		});

		var unveilElement = function unveilElement(elem) {
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if ((isAuto || !isCompleted) && isImg && (elem.src || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass)) {
				return;
			}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if (isAuto) {
				autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function onload() {
			if (isCompleted) {
				return;
			}
			if (Date.now() - started < 999) {
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function () {
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function () {
				if (lazySizesConfig.loadMode == 3) {
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function _() {
				started = Date.now();

				lazyloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
				hFac = lazySizesConfig.hFac;

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if (window.MutationObserver) {
					new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if (/d$|^c/.test(document.readyState)) {
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				throttledCheckElements(lazyloadElems.length > 0);
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	}();

	var autoSizer = function () {
		var autosizesElems;

		var sizeElement = rAFIt(function (elem, parent, event, width) {
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if (regPicture.test(parent.nodeName || '')) {
				sources = parent.getElementsByTagName('source');
				for (i = 0, len = sources.length; i < len; i++) {
					sources[i].setAttribute('sizes', width);
				}
			}

			if (!event.detail.dataAttr) {
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function getSizeElement(elem, dataAttr, width) {
			var event;
			var parent = elem.parentNode;

			if (parent) {
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', { width: width, dataAttr: !!dataAttr });

				if (!event.defaultPrevented) {
					width = event.detail.width;

					if (width && width !== elem._lazysizesWidth) {
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function updateElementsSizes() {
			var i;
			var len = autosizesElems.length;
			if (len) {
				i = 0;

				for (; i < len; i++) {
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function _() {
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	}();

	var init = function init() {
		if (!init.i) {
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	(function () {
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for (prop in lazySizesDefaults) {
			if (!(prop in lazySizesConfig)) {
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function () {
			if (lazySizesConfig.init) {
				init();
			}
		});
	})();

	return {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF
	};
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stores = {
    local: __webpack_require__(19),
    session: __webpack_require__(20),
    cookie: __webpack_require__(18)
};

var Storage = function () {
    /**
     * @constructor
     * @param {string} type The store backend to use
     * @param {boolean} [silent=true] Whether to throw exceptions or fail silently returning false
     */
    function Storage(type) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$silent = _ref.silent,
            silent = _ref$silent === undefined ? true : _ref$silent;

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
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {

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
        return Math.max(document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
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
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
        var stickies = document.querySelectorAll('[data-sticky]');
        var bodyOffset = document.documentElement.getBoundingClientRect().top;
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
    window.addEventListener('deviceorientation', function () {
        return handleStickies();
    });
    window.addEventListener('resize', function () {
        return handleStickies();
    });
    window.addEventListener('pageSizeChanged', function () {
        return handleStickies();
    });
    document.addEventListener('scroll', function () {
        return handleStickies();
    });
    document.addEventListener('collapse', function () {
        return handleStickies();
    });
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    function init() {
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
    }

    init();
    document.addEventListener('as24-collapse:update', init);
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__07_utilities_helpers_js__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (tagName) {
    function createdCallback() {
        var el = $(this);
        var titleElement = el.find('p');
        var defaultTitle = titleElement.text();

        el.removeClass('sc-open');
        // TODO: rewrite to click
        el.on('touchstart, mousedown', function (e) {
            e.stopPropagation();
        });

        if (null === el.attr('checkboxgroup')) {
            return;
        }

        if (this.hasAttribute('checkboxgroup')) {
            el.find('[type=checkbox]').addClass('sc-input');
            var updateCaption = function updateCaption() {
                var checkboxes = el.find(':checked');
                var texts = [];
                checkboxes.filter(':checked').forEach(function (element) {
                    texts.push(element.nextElementSibling.innerHTML);
                });

                var title = texts.join(', ') || defaultTitle;
                titleElement.html(title);
            };

            el.on('change', updateCaption);
            updateCaption();
        }
    }

    function attachedCallback() {
        var _this = this;

        if (this.hasAttribute('checkboxgroup')) {
            this.querySelector('p').addEventListener('mousedown', function () {
                closeAllDropdowns(_this);
                _this.classList.toggle('sc-open');
            });

            attachEventListeners();
        }
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
        attachEventListeners = function attachEventListeners() {}; // eslint-disable-line no-func-assign
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__07_utilities_helpers_js__["a" /* default */])({
        createdCallback: createdCallback,
        attachedCallback: attachedCallback,
        tagName: tagName
    });
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__07_utilities_helpers_js__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (function (tagName) {

    function createdCallback() {
        var overlay = document.querySelector('sc-overlay');

        if (!overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('sc-overlay');
            document.body.appendChild(overlay);
        }

        var lb = {
            parent: this.parentElement,
            open: this.querySelector('.sc-lightbox-open'),
            container: this.querySelector('.sc-lightbox-container'),
            close: this.querySelector('.sc-lightbox-close'),
            content: this.querySelector('.sc-lightbox-content'),
            overlay: overlay
        };

        lb.open.addEventListener('click', function () {
            return show(lb);
        }, false);
        lb.close.addEventListener('click', function (e) {
            return hide(lb, e);
        }, false);
        lb.overlay.addEventListener('click', function (e) {
            return hide(lb, e);
        }, false);
    }

    var show = function show(lb) {
        lb.overlay.classList.add('sc-visible');
        lb.overlay.appendChild(lb.container);
        lb.container.classList.add('sc-visible');

        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 27) hide(lb);
        });
        setTimeout(function () {
            return lb.overlay.classList.add('sc-fade-in');
        }, 20);
    };

    var hide = function hide(lb, e) {
        e.stopPropagation();
        e.preventDefault();
        if (e.target === lb.overlay || e.target === lb.close) {
            lb.container.classList.remove('sc-visible');
            lb.parent.appendChild(lb.container);
            lb.overlay.classList.remove('sc-fade-in');
            setTimeout(function () {
                lb.overlay.classList.remove('sc-visible');
            }, 250);
        }
    };

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__07_utilities_helpers_js__["a" /* default */])({
        createdCallback: createdCallback,
        tagName: tagName
    });
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    window.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('[data-toggle="arrow"]'), function (arrow) {
            var arrowEl = $(arrow);
            $(arrowEl.data('target')).on('click', function () {
                arrowEl.toggleClass('open');
            });
        });
    }, true);
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    window.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.sc-stepper'), function (stepperContainer) {
            var stepperEl = stepperContainer.querySelector('.sc-stepper-input');
            var decrementEl = stepperContainer.querySelector('.sc-stepper-button-decrement');
            var incrementEl = stepperContainer.querySelector('.sc-stepper-button-increment');
            var minValue = parseInt(stepperEl.getAttribute('min')) || 0;
            var maxValue = parseInt(stepperEl.getAttribute('max')) || 100;

            // To make sure we can also calculate with the value the user typed in
            var getCurrentValue = function getCurrentValue() {
                return stepperEl.value !== '' ? parseInt(stepperEl.value, 10) : 0;
            };

            var currentValue = getCurrentValue();

            var increment = function increment() {
                currentValue = getCurrentValue();

                if (currentValue < maxValue) {
                    stepperEl.value = ++currentValue;
                }
            };

            var decrement = function decrement() {
                currentValue = getCurrentValue();

                if (currentValue > minValue) {
                    stepperEl.value = --currentValue;
                }
            };

            decrementEl.addEventListener('click', decrement);
            incrementEl.addEventListener('click', increment);
        });
    });
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    window.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.sc-tag'), function (tag) {
            var tagClose = tag.querySelector('.sc-tag__close');
            var parentNode = tag.parentNode;

            tag.addEventListener('animationend', function () {
                if (parentNode) {
                    parentNode.removeChild(tag);
                } else {
                    console.warn('No parentNode found for tag element - ', tag);
                }
            });

            tagClose.addEventListener('click', function () {
                tag.classList.toggle('closing');
            });
        });
    });
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    window.addEventListener('DOMContentLoaded', function () {
        var $target = $('as24-icon[title]');
        if (!$target.length) return;
        var $tooltip = $('<div class="sc-font-s tooltip tooltip-top tooltip-hidden"></div>');
        $tooltip.appendTo($(document.body));

        var allTooltipClasses = 'tooltip-top tooltip-r tooltip-b tooltip-l tooltip-hidden';

        var hideTooltip = function hideTooltip() {
            $tooltip.addClass('tooltip-hidden');
        };

        var timer = null;

        $target.on('mousedown mouseover', function () {
            var $this = $(this);
            if (!$this.data('title')) return;

            if (!$tooltip.hasClass('tooltip-hidden')) {
                hideTooltip();
                return;
            }

            timer = setTimeout(function () {

                $tooltip.removeAttr('style').html($this.data('title') + '<span class="tooltip-arrow"></span>').removeClass(allTooltipClasses);

                var distance = { vertical: 6, horizontal: 8 };

                var width = $tooltip.width();
                var height = $tooltip.height();
                var pos = $this.offset();
                var top = pos.top - height - distance.vertical;
                var left = pos.left - width / 2 + $this.width() / 2;

                var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

                if (top - scrollPosition <= 0) {
                    top = pos.top + $this.height() + distance.vertical;
                    $tooltip.removeClass('tooltip-top').addClass('tooltip-bottom');
                } else {
                    $tooltip.removeClass('tooltip-bottom').addClass('tooltip-top');
                }

                $tooltip.removeClass('tooltip-right tooltip-left');

                if (left + width > $(window).width()) {
                    left = pos.left - width + $this.width() + distance.horizontal;
                    $tooltip.removeClass('tooltip-right').addClass('tooltip-left');
                } else if (left <= 0) {
                    left = pos.left - distance.horizontal;
                    $tooltip.removeClass('tooltip-left').addClass('tooltip-right');
                }

                $tooltip.css({ top: top, left: left });
            }, 300);
        });

        $target.on('mouseleave', function () {
            clearTimeout(timer);
            timer = setTimeout(hideTooltip, 300);
        }).data('title', function () {
            return this.title ? this.title : false;
        }).removeAttr('title');

        $tooltip.on('mouseenter', function () {
            clearTimeout(timer);
        });

        $tooltip.on('mouseleave', function () {
            clearTimeout(timer);
            timer = setTimeout(hideTooltip, 300);
        });

        $(window).on('resize', function () {
            clearTimeout(timer);
            hideTooltip();
        });
    });
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__07_utilities_helpers_js__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (tagName) {

    function offset(el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + (document.body.scrollTop || document.documentElement.scrollTop),
            left: rect.left + (document.body.scrollLeft || document.documentElement.scrollLeft)
        };
    }

    function attachedCallback() {
        var tt = {
            tooltip: this,
            shown: false,
            indentTop: 8,
            content: this.querySelector('.sc-tooltip-content'),
            timeoutID: 0
        };

        tt.tooltip.addEventListener('mouseover', function () {
            return show(tt);
        }, false);
        tt.tooltip.addEventListener('mousedown', function () {
            return show(tt);
        }, false);
        tt.tooltip.addEventListener('touchstart', function () {
            return show(tt);
        }, false);
        tt.tooltip.addEventListener('click', function () {
            return show(tt);
        }, false);
        tt.tooltip.addEventListener('mouseleave', function () {
            return hide(tt);
        }, false);

        tt.content.addEventListener('mouseover', function () {
            return show(tt);
        }, false);
        tt.content.addEventListener('mousedown', function () {
            return show(tt);
        }, false);
        tt.content.addEventListener('touchstart', function () {
            return show(tt);
        }, false);
        tt.content.addEventListener('click', function () {
            return show(tt);
        }, false);
        tt.content.addEventListener('mouseleave', function () {
            return hide(tt);
        }, false);

        document.addEventListener('touchstart', function () {
            return hide(tt);
        }, false);
    }

    function show(tt) {
        clearTimeout(tt.timeoutID);
        if (tt.shown === true) return;
        document.body.appendChild(tt.content);
        tt.content.classList.add('sc-tooltip-shown');
        setTimeout(function () {
            return tt.content.classList.add('sc-fade-in');
        }, 20);
        setPosition(tt);
    }

    function hide(tt) {
        tt.timeoutID = setTimeout(function () {
            tt.shown = false;
            tt.content.classList.remove('sc-fade-in');
            tt.timeoutID = setTimeout(function () {
                tt.tooltip.appendChild(tt.content);
                tt.content.classList.remove('sc-tooltip-shown');
                tt.content.style.top = null;
                tt.content.style.left = null;
            }, 350);
        }, 300);
    }

    function setPosition(tt) {
        tt.shown = true;
        var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
        tt.content.classList.remove('sc-tooltip-right', 'sc-tooltip-left', 'sc-tooltip-top', 'sc-tooltip-bottom');
        var top = offset(tt.tooltip).top - tt.content.offsetHeight - tt.indentTop;
        if (top - scrollPosition <= 0) {
            top = offset(tt.tooltip).top + tt.tooltip.offsetHeight + tt.indentTop;
            tt.content.classList.add('sc-tooltip-bottom');
        } else {
            tt.content.classList.add('sc-tooltip-top');
        }

        var left = offset(tt.tooltip).left - tt.content.offsetWidth / 2 + tt.tooltip.offsetWidth / 2;
        if (left + tt.content.offsetWidth > window.innerWidth) {
            left = offset(tt.tooltip).left - tt.content.offsetWidth + tt.tooltip.offsetWidth + 8; // small gap
            tt.content.classList.add('sc-tooltip-left');
        } else if (left <= 0) {
            left = offset(tt.tooltip).left - tt.tooltip.offsetWidth / 2;
            tt.content.classList.add('sc-tooltip-right');
        }

        tt.content.style.top = Math.round(top) + 'px';
        tt.content.style.left = Math.round(left) + 'px';
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__07_utilities_helpers_js__["a" /* default */])({
        attachedCallback: attachedCallback,
        tagName: tagName
    });
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__07_utilities_helpers_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_ContainerHandler__ = __webpack_require__(23);



/* harmony default export */ __webpack_exports__["a"] = (function (tagName) {
    var containerHandler = new __WEBPACK_IMPORTED_MODULE_1__js_ContainerHandler__["a" /* default */]();
    var items = []; // prevent of appearing twice
    function attachedCallback() {
        if (items.indexOf(this.id) != -1) {
            // prevent of appearing twice. TODO check on new polyfill
            return;
        }

        items.push(this.id);
        containerHandler.createNotification(this);
    }
    function attributeChangedCallback(attributeName, previous, value) {
        containerHandler.updateNotification(this, attributeName, previous, value);
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__07_utilities_helpers_js__["a" /* default */])({
        attachedCallback: attachedCallback,
        attributeChangedCallback: attributeChangedCallback,
        tagName: tagName
    });
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
        value: function escapeMenu() {
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
                    event.shiftKey ? this.handleJumpLeft() : this.handleJumpRight();
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

/* harmony default export */ __webpack_exports__["a"] = (function () {
    var navigationElement = document.querySelector('.sc-navigation'),
        navigation = null;
    if (navigationElement) {
        navigation = new Navigation(navigationElement);
    }

    return navigation;
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pager = function () {

    /**
     * @param {HTMLElement|String} root can be a selector
     * @param {Number} itemsPerPage
     * @param {Number} activePage
     * @param {Number} totalItems
     * @param {String} urlTemplate
     * @param {Boolean} unlimited
     */
    function Pager(root, itemsPerPage, activePage, totalItems, urlTemplate, unlimited) {
        _classCallCheck(this, Pager);

        this.ETC = '...';
        this.rootElement = $(root);
        this.itemsPerPage = parseInt(itemsPerPage);
        this.activePage = parseInt(activePage);
        this.totalCount = parseInt(totalItems);
        this.urlTemplate = urlTemplate;
        this.unlimited = unlimited;
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
                a.removeAttr('href');
                a.attr('rel', 'nofollow');
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

            if (this.unlimited) {
                return numberOfPages;
            }

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

            var previousText = $(this.rootElement).data('previous-text') || 'Previous';
            var isFirstPage = 1 === this.activePage;

            li.addClass('previous-page');
            if (!isFirstPage) {
                a.attr('href', this.getPageUrl(this.activePage - 1));
            }

            a.text(' ' + previousText);
            icon.attr('type', 'arrow');

            if (isFirstPage) {
                a.addClass('disabled');
            }

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

            var nextText = $(this.rootElement).data('next-text') || 'Next';
            var isLastPage = this.maxPage === this.activePage;

            li.addClass('next-page');
            if (!isLastPage) {
                a.attr('href', this.getPageUrl(this.activePage + 1));
            }

            a.text(nextText + ' ');
            icon.attr('type', 'arrow');

            if (isLastPage) {
                a.addClass('disabled');
            }

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

/* harmony default export */ __webpack_exports__["a"] = (Pager);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__07_utilities_scroll_js__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function (config) {
    // This one is needed for check whether active link element has changed or not
    var activeNavItemCache;
    var componentClass = '.sc-spy-navigation';
    var linkClass = componentClass + '__link';
    var toggleClass = componentClass + '__toggle';
    var expandedStateModifier = (componentClass + '--expanded').substr(1);
    var stickedStateModifier = (componentClass + '--sticked').substr(1);
    var activeLinkModifier = (linkClass + '--active').substr(1);
    var componentElem = document.querySelector(componentClass);
    var spyOnHold = false;

    if (componentElem === null) return;

    var stickElemSelector = componentElem.getAttribute('data-stick-when');
    var stickElem = document.querySelector(stickElemSelector);
    var links = componentElem.querySelectorAll(linkClass);

    if (!links.length) return;

    var linkTargetPairs = Array.prototype.map.call(links, function (link) {
        var href = link.getAttribute('data-href');
        var target = document.querySelector('[name="' + href + '"]');
        return { link: link, target: target };
    });

    function componentSticked() {
        return componentElem.classList.contains(stickedStateModifier);
    }

    function stick() {
        var navHeight = componentElem.getBoundingClientRect().height;
        stickElem.style.paddingTop = navHeight + 'px';
        componentElem.classList.add(stickedStateModifier);
    }

    function unstick() {
        componentElem.classList.remove(stickedStateModifier);
        stickElem.style.paddingTop = '0px';
    }

    function defaultStickWhenFn(scrollTop, stickToElem) {
        return scrollTop > stickToElem.offsetTop;
    }

    function defaultUnstickWhen(scrollTop, stickToElem, componentElem) {
        return scrollTop < stickToElem.offsetTop - componentElem.getBoundingClientRect().height;
    }

    function handleStickiness() {
        if (!stickElem) return;

        var needToStick = (config && config.stickPosFn || defaultStickWhenFn)(window.pageYOffset, stickElem);
        var needToUnstick = (config && config.unstickPosFn || defaultUnstickWhen)(window.pageYOffset, stickElem, componentElem);

        if (!componentSticked() && needToStick) {
            stick();
        } else if (componentSticked() && needToUnstick) {
            unstick();
        }
    }

    function handleResize() {
        var containerHeight = 55;
        var rootEl = document.querySelector(componentClass);
        var toggle = rootEl.querySelector(toggleClass);
        var toggleIconWidth = 28;
        var toggleWidth = toggle.offsetWidth;
        var toggleVisibleClass = 'sc-spy-navigation__toggle--visible';
        var containerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        containerWidth = containerWidth > 1100 ? 1100 : containerWidth;
        var navigationWidth = 0;
        var elementY = containerHeight;
        var elements = componentElem.querySelectorAll(linkClass);
        var index = 0;
        var count = elements.length;
        var minWidth = 0;

        Array.prototype.forEach.call(elements, function (element) {
            element.style.width = 'auto';
            if (element.offsetWidth + toggleIconWidth > minWidth) {
                minWidth = element.offsetWidth + toggleIconWidth;
            }
        });

        var first = true;

        Array.prototype.forEach.call(elements, function (element) {
            navigationWidth += element.offsetWidth + 10;

            if (navigationWidth > containerWidth - toggleWidth && containerWidth >= 768) {
                toggle.classList.add(toggleVisibleClass);
                element.style.position = 'absolute';
                element.style.top = elementY + 'px';
                element.style.right = 0;
                element.style.borderLeft = '1px solid #dcdcdc';
                element.style.width = minWidth + 'px';
                element.style.padding = '12px 16px';

                if (first) {
                    first = false;
                    element.style.padding = '20px 16px 12px 16px';
                }

                if (index === count - 1) {
                    element.style.borderBottom = '1px solid #dcdcdc';
                    element.style.padding = '12px 16px 20px 16px';
                }

                elementY += element.offsetHeight;
            } else {
                toggle.classList.remove(toggleVisibleClass);
                element.removeAttribute('style');
            }

            index++;
        });
    }

    function navigateToAnchor($item) {
        var targetName = $item.getAttribute('data-href');
        var target = document.querySelector('[name="' + targetName + '"]');

        if (target) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__07_utilities_scroll_js__["b" /* smoothScroll */])(target, 300, function () {
                spyOnHold = false;
                spyScroll();
            });
        }
    }

    function closeNavigation() {
        if (!componentElem) return;

        componentElem.classList.remove('sc-spy-navigation--expanded');
    }

    var spyScroll = function spyScroll() {
        if (spyOnHold) return;

        var activeNavItem,
            scrollTop = window.pageYOffset,
            componentHeight = componentElem.getBoundingClientRect().height;
        activeNavItem = linkTargetPairs.filter(function (pair) {
            if (!pair.target) {
                throw new Error('Check hash name on target');
            }
            return pair.target.getBoundingClientRect().top + (document.body.scrollTop || document.documentElement.scrollTop) <= scrollTop + componentHeight + 5;
        }).pop();

        if (activeNavItemCache !== activeNavItem) {
            activeNavItemCache = activeNavItem;

            linkTargetPairs.forEach(function (pair) {
                pair.link.classList.remove(activeLinkModifier);
            });

            if (activeNavItem) {
                activeNavItem.link.classList.add(activeLinkModifier);
            }
        }
    };

    var initMobileToggle = function initMobileToggle() {
        var rootEl = document.querySelector(componentClass);
        var toggle = rootEl.querySelector(toggleClass);

        toggle.addEventListener('click', function () {
            rootEl.classList.toggle(expandedStateModifier);
        });
    };

    function debounce(func, wait) {
        var timeout;

        return function () {
            var context = this,
                args = arguments;

            if (timeout) return;
            timeout = setTimeout(function () {
                func.apply(context, args);
                clearTimeout(timeout);
                timeout = null;
            }, wait);
        };
    }

    Array.prototype.forEach.call(componentElem.querySelectorAll(linkClass), function (linkEl) {
        linkEl.addEventListener('click', function (evt) {
            evt.preventDefault();
            closeNavigation();
            spyOnHold = true;
            navigateToAnchor(linkEl);
        });
    });

    var debSpyScroll = debounce(spyScroll, 300);

    window.addEventListener('resize', function () {
        handleStickiness();
        handleResize();
        debSpyScroll();
    });

    window.addEventListener('scroll', function () {
        handleStickiness();
        debSpyScroll();
    });

    handleStickiness();
    spyScroll();
    initMobileToggle();
    document.addEventListener('DOMContentLoaded', function () {
        handleResize();
    });
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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
            var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref$expires = _ref.expires,
                expires = _ref$expires === undefined ? "Fri, 31 Dec 9999 23:59:59 GMT" : _ref$expires,
                _ref$path = _ref.path,
                path = _ref$path === undefined ? "/" : _ref$path;

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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
            var classes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

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

            if (!offset.height) {
                offset.height = 0;
            }

            this.targetPosition = [offset.top, offset.left, offset.width, offset.height];

            if (window.pageYOffset > offset.top + offset.height) {
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

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(22);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




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
            var notification = new __WEBPACK_IMPORTED_MODULE_0__Notification__["a" /* default */](element);
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
            var container = new __WEBPACK_IMPORTED_MODULE_1__Container__["a" /* default */](target);
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

/* harmony default export */ __webpack_exports__["a"] = (ContainerHandler);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

            var triggerElem = document.querySelector('[data-trigger=' + this.element.id + ']');

            if (triggerElem) {
                var self = this;
                triggerElem.addEventListener('click', function () {
                    self.element.classList.toggle('show');
                });
            }

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
                if (!this.closeBtn && 'true' === value) {
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
            var classes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

            var element = document.createElement(name);

            classes.forEach(function (cls) {
                element.classList.add(cls);
            });
            element.innerHTML = typeof body === 'string' ? body : '';

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

/* harmony default export */ __webpack_exports__["a"] = (Notification);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__06_components_atoms_custom_dropdown_custom_dropdown__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__06_components_organisms_pagination_pagination__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__06_components_organisms_spy_navigation_spy_navigation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__05_layout_sticky_sticky__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__06_components_atoms_rotating_arrow_rotating_arrow__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__06_components_atoms_collapse_collapse__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__06_components_atoms_stepper_stepper__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__06_components_atoms_tooltip_old_tooltip_old__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__06_components_atoms_tooltip_tooltip__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__06_components_atoms_lightbox_lightbox__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__06_components_atoms_tag_tag__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__06_components_organisms_navigation_navigation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__06_components_molecules_notification_notification__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__07_utilities_scroll__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lazysizes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lazysizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lazysizes__);
// Todo: remove Zepto
if (!window.jQuery) window.$ = window.Zepto = __webpack_require__(4).$;

// Make sure these variables are initialized in case somebody uses them unintialized before they are loaded
window.ut = window.ut || [];
window.dataLayer = window.dataLayer || [];

var warn = function warn(msg) {
    return window.console && window.console.warn(msg);
};
var showcar = {};

// Dropdown

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__06_components_atoms_custom_dropdown_custom_dropdown__["a" /* default */])('custom-dropdown');

// Pager

window.Pager = __WEBPACK_IMPORTED_MODULE_1__06_components_organisms_pagination_pagination__["a" /* default */];

// Spy-navigation

showcar.spyNavigation = __WEBPACK_IMPORTED_MODULE_2__06_components_organisms_spy_navigation_spy_navigation__["a" /* default */];

// Sticky js

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__05_layout_sticky_sticky__["a" /* default */])();

// Rotating-arrow
 // Todo: Check usages and remove
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__06_components_atoms_rotating_arrow_rotating_arrow__["a" /* default */])();

// Collapse

document.addEventListener('DOMContentLoaded', function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__06_components_atoms_collapse_collapse__["a" /* default */])();
});

// stepper

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__06_components_atoms_stepper_stepper__["a" /* default */])();

// tooltip

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__06_components_atoms_tooltip_old_tooltip_old__["a" /* default */])();

// tooltip2

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__06_components_atoms_tooltip_tooltip__["a" /* default */])('as24-tooltip');

// lightbox

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__06_components_atoms_lightbox_lightbox__["a" /* default */])('as24-lightbox');

// tag

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__06_components_atoms_tag_tag__["a" /* default */])();

// navigation

// Loading on document ready. Otherwise the navigation does not work in IE11.
document.addEventListener('DOMContentLoaded', function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__06_components_organisms_navigation_navigation__["a" /* default */])();
});

// notification
 // TODO: question for the guild
// TODO do we still need it?
if (!window.notification) {
    window.notification = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__06_components_molecules_notification_notification__["a" /* default */])('as24-notification');
} else {
    warn('window.notification is already registered.');
}

//Scroll

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__07_utilities_scroll__["a" /* default */])();

// storage
window.Storage = __webpack_require__(3);

//lazysizes
window.lazySizesConfig = { loadMode: 1, expFactor: 0, hFac: 0 };


window.showcar = window.showcar || showcar;

/* harmony default export */ __webpack_exports__["default"] = (showcar);

/***/ })
/******/ ]);
//# sourceMappingURL=showcar-ui.js.map