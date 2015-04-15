(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["baseTagAnchorPolyfill"] = factory();
	else
		root["baseTagAnchorPolyfill"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar transformAnchors = __webpack_require__(1).transformAnchors;\n\n// on document load\ndocument.addEventListener(\"DOMContentLoaded\", transformAnchors);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/main.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; };\n\nexports.transformAnchor = transformAnchor;\nexports.transformAnchors = transformAnchors;\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar anchorListener = _interopRequireWildcard(__webpack_require__(2));\n\nvar documentUtils = _interopRequireWildcard(__webpack_require__(3));\n\nvar startsWith = function (str, char) {\n  return str.indexOf(char) === 0;\n};\n\nfunction transformAnchor(anchor) {\n  var hash = \"#\";\n  if (startsWith(anchor.hash, hash)) {\n    var url = documentUtils.getLocationUrl();\n    anchor.href = url.split(hash)[0] + hash + anchor.href.substr(anchor.href.indexOf(hash) + 1);\n  }\n}\n\nfunction transformAnchors() {\n  if (documentUtils.isBaseTagUsed()) {\n    anchorListener.listen(transformAnchor);\n  }\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/anchor-polyfill.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/anchor-polyfill.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nexports.listen = listen;\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n__webpack_require__(4);\n\nvar LISTENER_NAMES = [\"animationstart\", \"MSAnimationStart\", \"webkitAnimationStart\"];\n\nfunction listen(callback) {\n  var animationName = \"anchorStartingWithHash\";\n\n  var eventHandler = function (event) {\n    if (event.animationName === animationName) {\n      callback(event.target);\n    }\n  };\n\n  var listeners = setTimeout(function () {\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = LISTENER_NAMES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var listenerName = _step.value;\n\n        document.addEventListener(listenerName, eventHandler, false);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"]) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  }, 0);\n\n  return {\n    clearListeners: function () {\n      clearTimeout(listeners);\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = LISTENER_NAMES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var listenerName = _step.value;\n\n          document.removeEventListener(listenerName, eventHandler);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"]) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  };\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/anchor-listener/anchor-listener.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/anchor-listener/anchor-listener.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nexports.getTagsByName = getTagsByName;\nexports.getLocationUrl = getLocationUrl;\nexports.getAllAnchorsStaringWithHash = getAllAnchorsStaringWithHash;\nexports.isBaseTagUsed = isBaseTagUsed;\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ANCHOR_SELECTOR = \"a[href^='#']\";\n\nexports.ANCHOR_SELECTOR = ANCHOR_SELECTOR;\n\nfunction getTagsByName(name) {\n  return document.getElementsByTagName(name);\n}\n\nfunction getLocationUrl() {\n  return window.location.href;\n}\n\nfunction getAllAnchorsStaringWithHash() {\n  return document.querySelectorAll(ANCHOR_SELECTOR);\n}\n\nfunction isBaseTagUsed() {\n  return getTagsByName(\"base\").length > 0;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/document-utils.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/document-utils.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(5);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(6)(content, {});\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./style.less\", function() {\n\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./style.less\");\n\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\tupdate(newContent);\n\t});\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/anchor-listener/style.less\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/anchor-listener/style.less?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(7)();\nexports.push([module.id, \"/* set up the keyframes */\\n@keyframes anchorStartingWithHash {\\n  from {\\n    opacity: 0.99;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@-moz-keyframes anchorStartingWithHash {\\n  from {\\n    opacity: 0.99;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@-webkit-keyframes anchorStartingWithHash {\\n  from {\\n    opacity: 0.99;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@-ms-keyframes anchorStartingWithHash {\\n  from {\\n    opacity: 0.99;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@-o-keyframes anchorStartingWithHash {\\n  from {\\n    opacity: 0.99;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\na[href^='#'] {\\n  animation-duration: 0.001s;\\n  -o-animation-duration: 0.001s;\\n  -ms-animation-duration: 0.001s;\\n  -moz-animation-duration: 0.001s;\\n  -webkit-animation-duration: 0.001s;\\n  animation-name: anchorStartingWithHash;\\n  -o-animation-name: anchorStartingWithHash;\\n  -ms-animation-name: anchorStartingWithHash;\\n  -moz-animation-name: anchorStartingWithHash;\\n  -webkit-animation-name: anchorStartingWithHash;\\n}\\n\", \"\"]);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/less-loader!./src/anchor-listener/style.less\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/anchor-listener/style.less?./~/css-loader!./~/less-loader");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\nvar stylesInDom = {},\r\n\tmemoize = function(fn) {\r\n\t\tvar memo;\r\n\t\treturn function () {\r\n\t\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\r\n\t\t\treturn memo;\r\n\t\t};\r\n\t},\r\n\tisOldIE = memoize(function() {\r\n\t\treturn /msie [6-9]\\b/.test(window.navigator.userAgent.toLowerCase());\r\n\t}),\r\n\tgetHeadElement = memoize(function () {\r\n\t\treturn document.head || document.getElementsByTagName(\"head\")[0];\r\n\t}),\r\n\tsingletonElement = null,\r\n\tsingletonCounter = 0;\r\n\r\nmodule.exports = function(list, options) {\r\n\tif(true) {\r\n\t\tif(typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\r\n\t}\r\n\r\n\toptions = options || {};\r\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n\t// tags it will allow on a page\r\n\tif (typeof options.singleton === \"undefined\") options.singleton = isOldIE();\r\n\r\n\tvar styles = listToStyles(list);\r\n\taddStylesToDom(styles, options);\r\n\r\n\treturn function update(newList) {\r\n\t\tvar mayRemove = [];\r\n\t\tfor(var i = 0; i < styles.length; i++) {\r\n\t\t\tvar item = styles[i];\r\n\t\t\tvar domStyle = stylesInDom[item.id];\r\n\t\t\tdomStyle.refs--;\r\n\t\t\tmayRemove.push(domStyle);\r\n\t\t}\r\n\t\tif(newList) {\r\n\t\t\tvar newStyles = listToStyles(newList);\r\n\t\t\taddStylesToDom(newStyles, options);\r\n\t\t}\r\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\r\n\t\t\tvar domStyle = mayRemove[i];\r\n\t\t\tif(domStyle.refs === 0) {\r\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\r\n\t\t\t\t\tdomStyle.parts[j]();\r\n\t\t\t\tdelete stylesInDom[domStyle.id];\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n}\r\n\r\nfunction addStylesToDom(styles, options) {\r\n\tfor(var i = 0; i < styles.length; i++) {\r\n\t\tvar item = styles[i];\r\n\t\tvar domStyle = stylesInDom[item.id];\r\n\t\tif(domStyle) {\r\n\t\t\tdomStyle.refs++;\r\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\r\n\t\t\t}\r\n\t\t\tfor(; j < item.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tvar parts = [];\r\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\r\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction listToStyles(list) {\r\n\tvar styles = [];\r\n\tvar newStyles = {};\r\n\tfor(var i = 0; i < list.length; i++) {\r\n\t\tvar item = list[i];\r\n\t\tvar id = item[0];\r\n\t\tvar css = item[1];\r\n\t\tvar media = item[2];\r\n\t\tvar sourceMap = item[3];\r\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\r\n\t\tif(!newStyles[id])\r\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\r\n\t\telse\r\n\t\t\tnewStyles[id].parts.push(part);\r\n\t}\r\n\treturn styles;\r\n}\r\n\r\nfunction createStyleElement() {\r\n\tvar styleElement = document.createElement(\"style\");\r\n\tvar head = getHeadElement();\r\n\tstyleElement.type = \"text/css\";\r\n\thead.appendChild(styleElement);\r\n\treturn styleElement;\r\n}\r\n\r\nfunction createLinkElement() {\r\n\tvar linkElement = document.createElement(\"link\");\r\n\tvar head = getHeadElement();\r\n\tlinkElement.rel = \"stylesheet\";\r\n\thead.appendChild(linkElement);\r\n\treturn linkElement;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n\tvar styleElement, update, remove;\r\n\r\n\tif (options.singleton) {\r\n\t\tvar styleIndex = singletonCounter++;\r\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement());\r\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\r\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\r\n\t} else if(obj.sourceMap &&\r\n\t\ttypeof URL === \"function\" &&\r\n\t\ttypeof URL.createObjectURL === \"function\" &&\r\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\r\n\t\ttypeof Blob === \"function\" &&\r\n\t\ttypeof btoa === \"function\") {\r\n\t\tstyleElement = createLinkElement();\r\n\t\tupdate = updateLink.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tstyleElement.parentNode.removeChild(styleElement);\r\n\t\t\tif(styleElement.href)\r\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\r\n\t\t};\r\n\t} else {\r\n\t\tstyleElement = createStyleElement();\r\n\t\tupdate = applyToTag.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tstyleElement.parentNode.removeChild(styleElement);\r\n\t\t};\r\n\t}\r\n\r\n\tupdate(obj);\r\n\r\n\treturn function updateStyle(newObj) {\r\n\t\tif(newObj) {\r\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\r\n\t\t\t\treturn;\r\n\t\t\tupdate(obj = newObj);\r\n\t\t} else {\r\n\t\t\tremove();\r\n\t\t}\r\n\t};\r\n}\r\n\r\nvar replaceText = (function () {\r\n\tvar textStore = [];\r\n\r\n\treturn function (index, replacement) {\r\n\t\ttextStore[index] = replacement;\r\n\t\treturn textStore.filter(Boolean).join('\\n');\r\n\t};\r\n})();\r\n\r\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\r\n\tvar css = remove ? \"\" : obj.css;\r\n\r\n\tif (styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\r\n\t} else {\r\n\t\tvar cssNode = document.createTextNode(css);\r\n\t\tvar childNodes = styleElement.childNodes;\r\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\r\n\t\tif (childNodes.length) {\r\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\r\n\t\t} else {\r\n\t\t\tstyleElement.appendChild(cssNode);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction applyToTag(styleElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar media = obj.media;\r\n\tvar sourceMap = obj.sourceMap;\r\n\r\n\tif(media) {\r\n\t\tstyleElement.setAttribute(\"media\", media)\r\n\t}\r\n\r\n\tif(styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = css;\r\n\t} else {\r\n\t\twhile(styleElement.firstChild) {\r\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\r\n\t\t}\r\n\t\tstyleElement.appendChild(document.createTextNode(css));\r\n\t}\r\n}\r\n\r\nfunction updateLink(linkElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar media = obj.media;\r\n\tvar sourceMap = obj.sourceMap;\r\n\r\n\tif(sourceMap) {\r\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(JSON.stringify(sourceMap)) + \" */\";\r\n\t}\r\n\r\n\tvar blob = new Blob([css], { type: \"text/css\" });\r\n\r\n\tvar oldSrc = linkElement.href;\r\n\r\n\tlinkElement.href = URL.createObjectURL(blob);\r\n\r\n\tif(oldSrc)\r\n\t\tURL.revokeObjectURL(oldSrc);\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/style-loader/addStyles.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/style-loader/addStyles.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = function() {\r\n\tvar list = [];\r\n\tlist.toString = function toString() {\r\n\t\tvar result = [];\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar item = this[i];\r\n\t\t\tif(item[2]) {\r\n\t\t\t\tresult.push(\"@media \" + item[2] + \"{\" + item[1] + \"}\");\r\n\t\t\t} else {\r\n\t\t\t\tresult.push(item[1]);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn result.join(\"\");\r\n\t};\r\n\treturn list;\r\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader/cssToString.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/css-loader/cssToString.js?");

/***/ }
/******/ ])
});
;