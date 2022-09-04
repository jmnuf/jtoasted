(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JToasted"] = factory();
	else
		root["JToasted"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*style.css*/ \r\n.jtoasteds-container {\r\n    --jtoasted-exit-btn-size: 25px;\r\n    --half-jtoasted-exit-btn-size: calc(var(--jtoasted-exit-btn-size) / 2);\r\n    position: fixed;\r\n    right: var(--half-jtoasted-exit-btn-size);\r\n    bottom: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.jtoasted {\r\n    position: relative;\r\n    background-color: azure;\r\n    border: 1px slategray solid;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    min-width: 100px;\r\n    min-height: 1.5em;\r\n    max-width: 25vw;\r\n    width: fit-content;\r\n    margin-left: auto;\r\n    margin-right: 0%;\r\n    \r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n.jtoasted .jtoasted-exit-btn {\r\n    position: absolute;\r\n    text-align: center;\r\n    top: calc(var(--half-jtoasted-exit-btn-size) * -0.5);\r\n    right: calc(var(--half-jtoasted-exit-btn-size) * -0.5);\r\n    width: var(--jtoasted-exit-btn-size);\r\n    height: var(--jtoasted-exit-btn-size);\r\n    background-color: rgba(175, 255, 243, 0.1);\r\n    border: none;\r\n    cursor: pointer;\r\n    color: red;\r\n}\r\n.jtoasted .jtoasted-data * {\r\n    margin: 0%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;IACI,8BAA8B;IAC9B,sEAAsE;IACtE,eAAe;IACf,yCAAyC;IACzC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;;IAEhB,iBAAiB;IACjB,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,oDAAoD;IACpD,sDAAsD;IACtD,oCAAoC;IACpC,qCAAqC;IACrC,0CAA0C;IAC1C,YAAY;IACZ,eAAe;IACf,UAAU;AACd;AACA;IACI,UAAU;AACd","sourcesContent":["/*style.css*/ \r\n.jtoasteds-container {\r\n    --jtoasted-exit-btn-size: 25px;\r\n    --half-jtoasted-exit-btn-size: calc(var(--jtoasted-exit-btn-size) / 2);\r\n    position: fixed;\r\n    right: var(--half-jtoasted-exit-btn-size);\r\n    bottom: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.jtoasted {\r\n    position: relative;\r\n    background-color: azure;\r\n    border: 1px slategray solid;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    min-width: 100px;\r\n    min-height: 1.5em;\r\n    max-width: 25vw;\r\n    width: fit-content;\r\n    margin-left: auto;\r\n    margin-right: 0%;\r\n    \r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n.jtoasted .jtoasted-exit-btn {\r\n    position: absolute;\r\n    text-align: center;\r\n    top: calc(var(--half-jtoasted-exit-btn-size) * -0.5);\r\n    right: calc(var(--half-jtoasted-exit-btn-size) * -0.5);\r\n    width: var(--jtoasted-exit-btn-size);\r\n    height: var(--jtoasted-exit-btn-size);\r\n    background-color: rgba(175, 255, 243, 0.1);\r\n    border: none;\r\n    cursor: pointer;\r\n    color: red;\r\n}\r\n.jtoasted .jtoasted-data * {\r\n    margin: 0%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/jtoasty.ts":
/*!************************!*\
  !*** ./src/jtoasty.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValueUpdatedEvent = exports.JToastyMetadataSetEvent = exports.JToastySimpleEvent = exports.JToastyEvent = exports.JToastyProgess = exports.JToasty = void 0;
class JToasty extends EventTarget {
    constructor(parent, life, ...lines) {
        super();
        this.meta_data = new Map();
        this._create_base_html(parent);
        this.set_texts(lines);
        parent.appendChild(this.base_div);
        this.set_lifetime(life);
    }
    _create_base_html(parent) {
        this._create_base_div(parent);
        this._create_exit_button();
        this._create_text_div();
    }
    _create_base_div(parent) {
        const div = document.createElement('div');
        div.classList.add('jtoasted');
        this.base_div = div;
        parent.appendChild(div);
    }
    _create_text_div() {
        const div = document.createElement('div');
        div.classList.add('jtoasted-data');
        this.base_div.appendChild(div);
        this.text_div = div;
    }
    _create_exit_button() {
        const btn = document.createElement('button');
        btn.classList.add('jtoasted-exit-btn');
        const div = this.base_div;
        btn.addEventListener('click', () => {
            const to_remove_event = new CustomEvent('user-remove', { cancelable: true, detail: { toasty: this } });
            if (!this.dispatchEvent(to_remove_event)) {
                return;
            }
            div.remove();
        });
        btn.innerHTML = '&cross;';
        div.appendChild(btn);
        this.exit_btn = btn;
    }
    _create_data_line_p(text) {
        const element = document.createElement('p');
        element.classList.add('jtoasted-data');
        element.textContent = text;
        this.text_div.appendChild(element);
    }
    set_lifetime(lifetime) {
        if (this.life_timeout_id != null) {
            clearTimeout(this.life_timeout_id);
            this.life_timeout_id = null;
        }
        this.life = lifetime;
        if (lifetime == -1) {
            return;
        }
        this.life_timeout_id = setTimeout(() => {
            this.life_timeout_id = null;
            this.remove();
        }, this.life * 1000);
    }
    remove() {
        var _a;
        if (!this.alive) {
            return false;
        }
        if (this.fireEvent('removing', { cancelable: true })) {
            this.set_lifetime(this.life);
            return false;
        }
        (_a = this.base_div) === null || _a === void 0 ? void 0 : _a.remove();
        this.base_div = null;
        return true;
    }
    get alive() {
        if (this.base_div == null) {
            return false;
        }
        const parent = this.base_div.parentElement;
        return parent != null;
    }
    set_texts(value) {
        if (this.lines) {
            const kids = this.text_div.children;
            const minI = Math.min(value.length, kids.length);
            for (let i = 0; i < minI; i++) {
                const element = kids[i];
                element.textContent = value[i];
            }
            if (kids.length > minI) {
                for (let i = minI; i < kids.length; i++) {
                    kids[i].remove();
                }
            }
            else if (value.length > minI) {
                for (let i = minI; i < value.length; i++) {
                    const text = value[i];
                    this._create_data_line_p(text);
                }
            }
        }
        else {
            for (let i = 0; i < value.length; i++) {
                const text = value[i];
                this._create_data_line_p(text);
            }
        }
        this.lines = value.slice();
    }
    /**
     * Set the text of a line in the notification
     *
     * @param index index of text line
     * @param value text to set at position
     * @returns whether the index was a valid index and the line was added
     */
    set_text_at(index, value) {
        if (index < 0 || index > this.lines.length) {
            return false;
        }
        if (index == this.lines.length) {
            this._create_data_line_p(value);
            return true;
        }
        const kids = this.text_div.children;
        this.lines[index] = value;
        kids[index].textContent = value;
        return true;
    }
    get_texts() {
        return this.lines.slice();
    }
    has_metadata(key) {
        return this.meta_data.has(key);
    }
    set_metadata(key, value) {
        const old_value = this.meta_data.get(key);
        this.meta_data.set(key, value);
        const ev = new JToastyMetadataSetEvent(key, value, old_value);
        this.dispatchEvent(ev);
    }
    get_metadata(key) {
        return this.meta_data.get(key);
    }
    on(eventName, callback, options) {
        const cfg = options ? options : {};
        this.addEventListener(eventName, callback, cfg);
    }
    once(eventName, callback, options) {
        const cfg = options ? Object.assign({}, options, { once: true }) : { once: true };
        this.addEventListener(eventName, callback, cfg);
    }
    off(eventName, callback, options) {
        this.removeEventListener(eventName, callback, options);
    }
    fireEvent(eventName, eventInit) {
        const event = eventInit ? new CustomEvent(eventName, eventInit) : new CustomEvent(eventName);
        return !this.dispatchEvent(event);
    }
}
exports.JToasty = JToasty;
function is_progress_data_change_event(event) {
    return event.detail.key.startsWith(JToastyProgess.PROGRESS_METADATA_PREFIX);
}
class JToastyProgess extends JToasty {
    constructor(parent, data) {
        const { progress, finishat, apercent, lifetime, prefixing } = data;
        if (typeof prefixing == 'string') {
            super(parent, -1, prefixing, '');
        }
        else {
            super(parent, -1);
        }
        this.on('metadata-set', JToastyProgess.PROGRESS_METADATA_LISTENER);
        this.meta_data.set(JToastyProgess.PROGRESS_METADATA_PROGRESS_KEY, progress);
        this.meta_data.set(JToastyProgess.PROGRESS_METADATA_FINISH_AT_KEY, finishat);
        this.set_metadata(JToastyProgess.PROGRESS_METADATA_PERCENT_KEY, apercent);
        this._on_completed_callback = () => {
            this.set_lifetime(lifetime);
        };
        this.once('completed', this._on_completed_callback);
    }
    get is_complete() {
        return this.get_progress() >= this.finish_at();
    }
    set_lifetime(lifetime) {
        if (!this.is_complete) {
            return;
        }
        super.set_lifetime(lifetime);
    }
    set_progress(progress) {
        this.set_metadata(JToastyProgess.PROGRESS_METADATA_PREFIX + 'progress', progress);
    }
    get_progress() {
        return this.get_metadata(JToastyProgess.PROGRESS_METADATA_PREFIX + 'progress');
    }
    finish_at(value) {
        const key = JToastyProgess.PROGRESS_METADATA_PREFIX + 'finish_at';
        if (typeof value != 'number') {
            return this.get_metadata(key);
        }
        this.set_metadata(key, value);
    }
    use_percentage(value) {
        if (typeof value != 'boolean') {
            return this.get_metadata(JToastyProgess.PROGRESS_METADATA_PERCENT_KEY);
        }
        this.set_metadata(JToastyProgess.PROGRESS_METADATA_PERCENT_KEY, value);
    }
    on(eventName, callback, options) {
        super.on(eventName, callback, options);
    }
    once(eventName, callback, options) {
        super.once(eventName, callback, options);
    }
    static get PROGRESS_METADATA_PREFIX() {
        return 'PROGRESS.';
    }
    static get PROGRESS_METADATA_LISTENER() {
        const PROGRESS_METADATA_PREFIX = JToastyProgess.PROGRESS_METADATA_PREFIX;
        return (ev) => {
            const data = ev.detail;
            if (!is_progress_data_change_event(ev)) {
                return;
            }
            const toasty = ev.target;
            const texts = toasty.get_texts();
            let index = texts.length - 1;
            if (texts.length == 0) {
                texts.length = 1;
                index = 0;
            }
            const progress = toasty.get_metadata(PROGRESS_METADATA_PREFIX + 'progress');
            const finishat = toasty.get_metadata(PROGRESS_METADATA_PREFIX + 'finish_at');
            const percents = toasty.get_metadata(PROGRESS_METADATA_PREFIX + 'as_percent');
            const prefixx = progress >= finishat ? 'Completed - ' : 'Processing - ';
            const progmsg = percents ? `${((progress / finishat) * 100).toFixed(2)}%` : `${progress} / ${finishat}`;
            toasty.set_text_at(index, `${prefixx}${progmsg}`);
            if (data.key == JToastyProgess.PROGRESS_METADATA_PERCENT_KEY) {
                return;
            }
            const property = data.key.substring(JToastyProgess.PROGRESS_METADATA_PREFIX.length);
            const progress_event = new ValueUpdatedEvent(property, data.old_value, data.value);
            toasty.dispatchEvent(progress_event);
            if (progress >= finishat) {
                toasty.fireEvent('completed', { detail: { from: property, old_value: data.old_value, new_value: data.value } });
            }
        };
    }
    static get PROGRESS_METADATA_PROGRESS_KEY() {
        return this.PROGRESS_METADATA_PREFIX + 'progress';
    }
    static get PROGRESS_METADATA_FINISH_AT_KEY() {
        return this.PROGRESS_METADATA_PREFIX + 'finish_at';
    }
    static get PROGRESS_METADATA_PERCENT_KEY() {
        return this.PROGRESS_METADATA_PREFIX + 'as_percent';
    }
}
exports.JToastyProgess = JToastyProgess;
class JToastyEvent extends CustomEvent {
    constructor(name, init) {
        super(name, init);
    }
}
exports.JToastyEvent = JToastyEvent;
class JToastySimpleEvent extends JToastyEvent {
    constructor(name, detail) {
        super(name, { detail });
    }
}
exports.JToastySimpleEvent = JToastySimpleEvent;
class JToastyMetadataSetEvent extends JToastySimpleEvent {
    constructor(key, value, old_value) {
        super('metadata-set', { key, value, old_value });
    }
}
exports.JToastyMetadataSetEvent = JToastyMetadataSetEvent;
class ValueUpdatedEvent extends JToastySimpleEvent {
    constructor(property_name, old_value, new_value) {
        super(property_name + '-updated', { old_value, new_value, property: property_name });
        this.property = property_name;
        this.old_value = old_value;
        this.new_value = new_value;
    }
}
exports.ValueUpdatedEvent = ValueUpdatedEvent;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JToastyToaster = void 0;
const jtoasty_1 = __webpack_require__(/*! ./jtoasty */ "./src/jtoasty.ts");
__webpack_require__(/*! ./style.css */ "./src/style.css");
class JToastyToaster extends EventTarget {
    constructor(parent = document.body) {
        super();
        if (!(parent instanceof HTMLElement)) {
            throw new TypeError('Passed parent must be an HTMLElement instance');
        }
        this.parent = parent;
        this.toasted_div = document.createElement('div');
        this.toasted_div.classList.add('jtoasteds-container');
        this.parent.appendChild(this.toasted_div);
    }
    createNotification(a, ...lines) {
        let lifetime = 5;
        if (typeof a == 'string') {
            lines.unshift(a);
        }
        else if (Number.isSafeInteger(a)) {
            lifetime = a;
        }
        const toasty = new jtoasty_1.JToasty(this.toasted_div, lifetime, ...lines);
        toasty.on('metadata-set', (ev) => {
            this.dispatchEvent(new CustomEvent('jtoasty.metadata-set', { detail: { data: ev.detail, toasty } }));
        });
        return toasty;
    }
    notification(a, b, ...lines) {
        if (a instanceof jtoasty_1.JToasty) {
            if (typeof b == 'number') {
                a.set_texts(lines);
                a.set_lifetime(b);
            }
            else if (typeof b == 'string') {
                lines.unshift(b);
            }
            a.set_texts(lines);
            return a;
        }
        if (typeof a == 'number') {
            if (typeof b == 'string') {
                lines.unshift(b);
            }
            return this.createNotification(a, ...lines);
        }
        if (typeof a == 'string') {
            lines.unshift(a);
        }
        if (typeof b == 'string') {
            lines.unshift(b);
        }
        return this.createNotification(...lines);
    }
    progressNotification(a, b, c) {
        if (a instanceof jtoasty_1.JToastyProgess) {
            const data = b;
            // Progress exists on this toasty so we just update the values
            if (typeof c == 'string') {
                const texts = a.get_texts();
                if (texts.length == 1) {
                    texts.unshift(c);
                }
                else {
                    texts[0] = c;
                }
                a.set_texts(texts);
            }
            if (typeof data.progress == 'number') {
                a.set_progress(data.progress);
            }
            if (typeof data.finishat == 'number') {
                a.finish_at(data.finishat);
            }
            if (typeof data.apercent == 'boolean') {
                a.use_percentage(data.apercent);
            }
            return a;
        }
        const data = Object.assign({ finishat: 100, lifetime: 5, progress: 0, apercent: false, prefixing: b }, a);
        const toasty = new jtoasty_1.JToastyProgess(this.toasted_div, data);
        return toasty;
    }
}
exports.JToastyToaster = JToastyToaster;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9KVG9hc3RlZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSlRvYXN0ZWQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0pUb2FzdGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9KVG9hc3RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0pUb2FzdGVkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL0pUb2FzdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0pUb2FzdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9KVG9hc3RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9KVG9hc3RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9KVG9hc3RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0pUb2FzdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vSlRvYXN0ZWQvLi9zcmMvanRvYXN0eS50cyIsIndlYnBhY2s6Ly9KVG9hc3RlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9KVG9hc3RlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9KVG9hc3RlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSlRvYXN0ZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9KVG9hc3RlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0pUb2FzdGVkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9KVG9hc3RlZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKVG9hc3RlZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKVG9hc3RlZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qc3R5bGUuY3NzKi8gXFxyXFxuLmp0b2FzdGVkcy1jb250YWluZXIge1xcclxcbiAgICAtLWp0b2FzdGVkLWV4aXQtYnRuLXNpemU6IDI1cHg7XFxyXFxuICAgIC0taGFsZi1qdG9hc3RlZC1leGl0LWJ0bi1zaXplOiBjYWxjKHZhcigtLWp0b2FzdGVkLWV4aXQtYnRuLXNpemUpIC8gMik7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IHZhcigtLWhhbGYtanRvYXN0ZWQtZXhpdC1idG4tc2l6ZSk7XFxyXFxuICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5qdG9hc3RlZCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNsYXRlZ3JheSBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDI1dnc7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMCU7XFxyXFxuICAgIFxcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLmp0b2FzdGVkIC5qdG9hc3RlZC1leGl0LWJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0b3A6IGNhbGModmFyKC0taGFsZi1qdG9hc3RlZC1leGl0LWJ0bi1zaXplKSAqIC0wLjUpO1xcclxcbiAgICByaWdodDogY2FsYyh2YXIoLS1oYWxmLWp0b2FzdGVkLWV4aXQtYnRuLXNpemUpICogLTAuNSk7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1qdG9hc3RlZC1leGl0LWJ0bi1zaXplKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1qdG9hc3RlZC1leGl0LWJ0bi1zaXplKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDI1NSwgMjQzLCAwLjEpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLmp0b2FzdGVkIC5qdG9hc3RlZC1kYXRhICoge1xcclxcbiAgICBtYXJnaW46IDAlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVk7QUFDWjtJQUNJLDhCQUE4QjtJQUM5QixzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9EQUFvRDtJQUNwRCxzREFBc0Q7SUFDdEQsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKnN0eWxlLmNzcyovIFxcclxcbi5qdG9hc3RlZHMtY29udGFpbmVyIHtcXHJcXG4gICAgLS1qdG9hc3RlZC1leGl0LWJ0bi1zaXplOiAyNXB4O1xcclxcbiAgICAtLWhhbGYtanRvYXN0ZWQtZXhpdC1idG4tc2l6ZTogY2FsYyh2YXIoLS1qdG9hc3RlZC1leGl0LWJ0bi1zaXplKSAvIDIpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiB2YXIoLS1oYWxmLWp0b2FzdGVkLWV4aXQtYnRuLXNpemUpO1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uanRvYXN0ZWQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcclxcbiAgICBib3JkZXI6IDFweCBzbGF0ZWdyYXkgc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxLjVlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xcclxcbiAgICBcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5qdG9hc3RlZCAuanRvYXN0ZWQtZXhpdC1idG4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdG9wOiBjYWxjKHZhcigtLWhhbGYtanRvYXN0ZWQtZXhpdC1idG4tc2l6ZSkgKiAtMC41KTtcXHJcXG4gICAgcmlnaHQ6IGNhbGModmFyKC0taGFsZi1qdG9hc3RlZC1leGl0LWJ0bi1zaXplKSAqIC0wLjUpO1xcclxcbiAgICB3aWR0aDogdmFyKC0tanRvYXN0ZWQtZXhpdC1idG4tc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tanRvYXN0ZWQtZXhpdC1idG4tc2l6ZSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyNTUsIDI0MywgMC4xKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi5qdG9hc3RlZCAuanRvYXN0ZWQtZGF0YSAqIHtcXHJcXG4gICAgbWFyZ2luOiAwJTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgSlRvYXN0eSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblx0cHJvdGVjdGVkIGJhc2VfZGl2OiBIVE1MRGl2RWxlbWVudDtcblx0cHJvdGVjdGVkIHRleHRfZGl2OiBIVE1MRGl2RWxlbWVudDtcblx0cHJvdGVjdGVkIGV4aXRfYnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuXHRwcm90ZWN0ZWQgbGluZXM6IHN0cmluZ1tdO1xuXG5cdHByb3RlY3RlZCBtZXRhX2RhdGE6IE1hcDxzdHJpbmcsIHVua25vd24+O1xuXG5cdHByb3RlY3RlZCBsaWZlOiBudW1iZXI7XG5cdHByb3RlY3RlZCBsaWZlX3RpbWVvdXRfaWQ6IHVua25vd247XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgbGlmZTogbnVtYmVyLCAuLi5saW5lczogc3RyaW5nW10pIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubWV0YV9kYXRhID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMuX2NyZWF0ZV9iYXNlX2h0bWwocGFyZW50KTtcblx0XHR0aGlzLnNldF90ZXh0cyhsaW5lcyk7XG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKHRoaXMuYmFzZV9kaXYpO1xuXHRcdHRoaXMuc2V0X2xpZmV0aW1lKGxpZmUpO1xuXHR9XG5cblx0cHJpdmF0ZSBfY3JlYXRlX2Jhc2VfaHRtbChwYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG5cdFx0dGhpcy5fY3JlYXRlX2Jhc2VfZGl2KHBhcmVudCk7XG5cdFx0dGhpcy5fY3JlYXRlX2V4aXRfYnV0dG9uKCk7XG5cdFx0dGhpcy5fY3JlYXRlX3RleHRfZGl2KCk7XG5cdH1cblxuXHRwcml2YXRlIF9jcmVhdGVfYmFzZV9kaXYocGFyZW50OiBIVE1MRWxlbWVudCkge1xuXHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdqdG9hc3RlZCcpO1xuXHRcdHRoaXMuYmFzZV9kaXYgPSBkaXY7XG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG5cdH1cblxuXHRwcml2YXRlIF9jcmVhdGVfdGV4dF9kaXYoKSB7XG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2p0b2FzdGVkLWRhdGEnKTtcblx0XHR0aGlzLmJhc2VfZGl2LmFwcGVuZENoaWxkKGRpdik7XG5cdFx0dGhpcy50ZXh0X2RpdiA9IGRpdjtcblx0fVxuXG5cdHByaXZhdGUgX2NyZWF0ZV9leGl0X2J1dHRvbigpIHtcblx0XHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRidG4uY2xhc3NMaXN0LmFkZCgnanRvYXN0ZWQtZXhpdC1idG4nKTtcblx0XHRjb25zdCBkaXYgPSB0aGlzLmJhc2VfZGl2O1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnN0IHRvX3JlbW92ZV9ldmVudCA9IG5ldyBDdXN0b21FdmVudCgndXNlci1yZW1vdmUnLCB7IGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogeyB0b2FzdHk6IHRoaXMgfSB9KTtcblx0XHRcdGlmICghdGhpcy5kaXNwYXRjaEV2ZW50KHRvX3JlbW92ZV9ldmVudCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZGl2LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdGJ0bi5pbm5lckhUTUwgPSAnJmNyb3NzOyc7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cdFx0dGhpcy5leGl0X2J0biA9IGJ0bjtcblx0fVxuXG5cdHByaXZhdGUgX2NyZWF0ZV9kYXRhX2xpbmVfcCh0ZXh0OiBzdHJpbmcpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnanRvYXN0ZWQtZGF0YScpO1xuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdHRoaXMudGV4dF9kaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0X2xpZmV0aW1lKGxpZmV0aW1lOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5saWZlX3RpbWVvdXRfaWQgIT0gbnVsbCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubGlmZV90aW1lb3V0X2lkIGFzIG51bWJlcik7XG5cdFx0XHR0aGlzLmxpZmVfdGltZW91dF9pZCA9IG51bGw7XG5cdFx0fVxuXHRcdHRoaXMubGlmZSA9IGxpZmV0aW1lO1xuXHRcdGlmIChsaWZldGltZSA9PSAtMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmxpZmVfdGltZW91dF9pZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5saWZlX3RpbWVvdXRfaWQgPSBudWxsO1xuXHRcdFx0dGhpcy5yZW1vdmUoKTtcblx0XHR9LCB0aGlzLmxpZmUgKiAxMDAwKTtcblx0fVxuXG5cdHJlbW92ZSgpIHtcblx0XHRpZiAoIXRoaXMuYWxpdmUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZmlyZUV2ZW50KCdyZW1vdmluZycsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KSkge1xuXHRcdFx0dGhpcy5zZXRfbGlmZXRpbWUodGhpcy5saWZlKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5iYXNlX2Rpdj8ucmVtb3ZlKCk7XG5cdFx0dGhpcy5iYXNlX2RpdiA9IG51bGw7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRnZXQgYWxpdmUoKSB7XG5cdFx0aWYgKHRoaXMuYmFzZV9kaXYgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLmJhc2VfZGl2LnBhcmVudEVsZW1lbnQ7XG5cdFx0cmV0dXJuIHBhcmVudCAhPSBudWxsO1xuXHR9XG5cblx0c2V0X3RleHRzKHZhbHVlOiBzdHJpbmdbXSkge1xuXHRcdGlmICh0aGlzLmxpbmVzKSB7XG5cdFx0XHRjb25zdCBraWRzID0gdGhpcy50ZXh0X2Rpdi5jaGlsZHJlbjtcblx0XHRcdGNvbnN0IG1pbkkgPSBNYXRoLm1pbih2YWx1ZS5sZW5ndGgsIGtpZHMubGVuZ3RoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWluSTsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBraWRzW2ldO1xuXHRcdFx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWVbaV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2lkcy5sZW5ndGggPiBtaW5JKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSBtaW5JOyBpIDwga2lkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGtpZHNbaV0ucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gbWluSSkge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gbWluSTsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IHZhbHVlW2ldO1xuXHRcdFx0XHRcdHRoaXMuX2NyZWF0ZV9kYXRhX2xpbmVfcCh0ZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHRleHQgPSB2YWx1ZVtpXTtcblx0XHRcdFx0dGhpcy5fY3JlYXRlX2RhdGFfbGluZV9wKHRleHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmxpbmVzID0gdmFsdWUuc2xpY2UoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIHRleHQgb2YgYSBsaW5lIGluIHRoZSBub3RpZmljYXRpb25cblx0ICpcblx0ICogQHBhcmFtIGluZGV4IGluZGV4IG9mIHRleHQgbGluZVxuXHQgKiBAcGFyYW0gdmFsdWUgdGV4dCB0byBzZXQgYXQgcG9zaXRpb25cblx0ICogQHJldHVybnMgd2hldGhlciB0aGUgaW5kZXggd2FzIGEgdmFsaWQgaW5kZXggYW5kIHRoZSBsaW5lIHdhcyBhZGRlZFxuXHQgKi9cblx0c2V0X3RleHRfYXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLmxpbmVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaW5kZXggPT0gdGhpcy5saW5lcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX2NyZWF0ZV9kYXRhX2xpbmVfcCh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3Qga2lkcyA9IHRoaXMudGV4dF9kaXYuY2hpbGRyZW47XG5cdFx0dGhpcy5saW5lc1tpbmRleF0gPSB2YWx1ZTtcblx0XHRraWRzW2luZGV4XS50ZXh0Q29udGVudCA9IHZhbHVlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0X3RleHRzKCkge1xuXHRcdHJldHVybiB0aGlzLmxpbmVzLnNsaWNlKCk7XG5cdH1cblxuXHRoYXNfbWV0YWRhdGEoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tZXRhX2RhdGEuaGFzKGtleSk7XG5cdH1cblxuXHRzZXRfbWV0YWRhdGE8VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKSB7XG5cdFx0Y29uc3Qgb2xkX3ZhbHVlOiBUID0gdGhpcy5tZXRhX2RhdGEuZ2V0KGtleSkgYXMgVDtcblx0XHR0aGlzLm1ldGFfZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0Y29uc3QgZXYgPSBuZXcgSlRvYXN0eU1ldGFkYXRhU2V0RXZlbnQ8VD4oa2V5LCB2YWx1ZSwgb2xkX3ZhbHVlKTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXYpO1xuXHR9XG5cblx0Z2V0X21ldGFkYXRhPFQgPSB1bmtub3duPihrZXk6IHN0cmluZyk6IFQge1xuXHRcdHJldHVybiB0aGlzLm1ldGFfZGF0YS5nZXQoa2V5KSBhcyBUO1xuXHR9XG5cblx0b24oXG5cdFx0ZXZlbnROYW1lOiAnbWV0YWRhdGEtc2V0Jyxcblx0XHRjYWxsYmFjazogSlRvYXN0eU1ldGFkYXRhU2V0RXZlbnRMaXN0ZW5lcixcblx0XHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuLFxuXHQpOiB2b2lkO1xuXHRvbihldmVudE5hbWU6ICdyZW1vdmluZycsIGNhbGxiYWNrOiBUb2FzdHlTaW1wbGVFdmVudExpc3RlbmVyLCBvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZDtcblx0b24oXG5cdFx0ZXZlbnROYW1lOiBzdHJpbmcsXG5cdFx0Y2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXG5cdFx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbixcblx0KTogdm9pZDtcblx0b24oXG5cdFx0ZXZlbnROYW1lOiBzdHJpbmcsXG5cdFx0Y2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXG5cdFx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbixcblx0KTogdm9pZCB7XG5cdFx0Y29uc3QgY2ZnID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgY2ZnKTtcblx0fVxuXG5cdG9uY2UoXG5cdFx0ZXZlbnROYW1lOiAnbWV0YWRhdGEtc2V0Jyxcblx0XHRjYWxsYmFjazogSlRvYXN0eU1ldGFkYXRhU2V0RXZlbnRMaXN0ZW5lcixcblx0XHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuLFxuXHQpOiB2b2lkO1xuXHRvbmNlKGV2ZW50TmFtZTogJ3JlbW92aW5nJywgY2FsbGJhY2s6IFRvYXN0eVNpbXBsZUV2ZW50TGlzdGVuZXIsIG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4pOiB2b2lkO1xuXHRvbmNlKFxuXHRcdGV2ZW50TmFtZTogc3RyaW5nLFxuXHRcdGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxuXHRcdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4sXG5cdCk6IHZvaWQ7XG5cdG9uY2UoXG5cdFx0ZXZlbnROYW1lOiBzdHJpbmcsXG5cdFx0Y2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXG5cdFx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbixcblx0KTogdm9pZCB7XG5cdFx0Y29uc3QgY2ZnID0gb3B0aW9ucyA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgb25jZTogdHJ1ZSB9KSA6IHsgb25jZTogdHJ1ZSB9O1xuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBjZmcpO1xuXHR9XG5cblx0b2ZmKFxuXHRcdGV2ZW50TmFtZTogc3RyaW5nLFxuXHRcdGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxuXHRcdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4sXG5cdCk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKTtcblx0fVxuXG5cdHByb3RlY3RlZCBmaXJlRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50SW5pdD86IEN1c3RvbUV2ZW50SW5pdCkge1xuXHRcdGNvbnN0IGV2ZW50ID0gZXZlbnRJbml0ID8gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZXZlbnRJbml0KSA6IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUpO1xuXHRcdHJldHVybiAhdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufVxuXG5leHBvcnQgdHlwZSBUb2FzdHlQcm9nZXNzU2V0dGluZ3MgPSB7XG5cdHByb2dyZXNzOiBudW1iZXI7XG5cdGZpbmlzaGF0OiBudW1iZXI7XG5cdGxpZmV0aW1lOiBudW1iZXI7XG5cdGFwZXJjZW50OiBib29sZWFuO1xuXHRwcmVmaXhpbmc/OiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBpc19wcm9ncmVzc19kYXRhX2NoYW5nZV9ldmVudChcblx0ZXZlbnQ6IEpUb2FzdHlNZXRhZGF0YVNldEV2ZW50PHVua25vd24+LFxuKTogZXZlbnQgaXMgSlRvYXN0eVByb2dyZXNzRGF0YVVwZGF0ZWRFdmVudCB7XG5cdHJldHVybiBldmVudC5kZXRhaWwua2V5LnN0YXJ0c1dpdGgoSlRvYXN0eVByb2dlc3MuUFJPR1JFU1NfTUVUQURBVEFfUFJFRklYKTtcbn1cblxudHlwZSBQUk9HUkVTU0lPTl9QUkVGSVggPSAnUFJPR1JFU1MuJztcblxuZXhwb3J0IGNsYXNzIEpUb2FzdHlQcm9nZXNzIGV4dGVuZHMgSlRvYXN0eSB7XG5cdHByaXZhdGUgX29uX2NvbXBsZXRlZF9jYWxsYmFjazogSlRvYXN0eUV2ZW50TGlzdGVuZXI7XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgZGF0YTogVG9hc3R5UHJvZ2Vzc1NldHRpbmdzKSB7XG5cdFx0Y29uc3QgeyBwcm9ncmVzcywgZmluaXNoYXQsIGFwZXJjZW50LCBsaWZldGltZSwgcHJlZml4aW5nIH0gPSBkYXRhO1xuXHRcdGlmICh0eXBlb2YgcHJlZml4aW5nID09ICdzdHJpbmcnKSB7XG5cdFx0XHRzdXBlcihwYXJlbnQsIC0xLCBwcmVmaXhpbmcsICcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3VwZXIocGFyZW50LCAtMSk7XG5cdFx0fVxuXHRcdHRoaXMub24oJ21ldGFkYXRhLXNldCcsIEpUb2FzdHlQcm9nZXNzLlBST0dSRVNTX01FVEFEQVRBX0xJU1RFTkVSKTtcblx0XHR0aGlzLm1ldGFfZGF0YS5zZXQoSlRvYXN0eVByb2dlc3MuUFJPR1JFU1NfTUVUQURBVEFfUFJPR1JFU1NfS0VZLCBwcm9ncmVzcyk7XG5cdFx0dGhpcy5tZXRhX2RhdGEuc2V0KEpUb2FzdHlQcm9nZXNzLlBST0dSRVNTX01FVEFEQVRBX0ZJTklTSF9BVF9LRVksIGZpbmlzaGF0KTtcblx0XHR0aGlzLnNldF9tZXRhZGF0YShKVG9hc3R5UHJvZ2Vzcy5QUk9HUkVTU19NRVRBREFUQV9QRVJDRU5UX0tFWSwgYXBlcmNlbnQpO1xuXHRcdHRoaXMuX29uX2NvbXBsZXRlZF9jYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2V0X2xpZmV0aW1lKGxpZmV0aW1lKTtcblx0XHR9O1xuXHRcdHRoaXMub25jZSgnY29tcGxldGVkJywgdGhpcy5fb25fY29tcGxldGVkX2NhbGxiYWNrKTtcblx0fVxuXG5cdGdldCBpc19jb21wbGV0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRfcHJvZ3Jlc3MoKSA+PSB0aGlzLmZpbmlzaF9hdCgpO1xuXHR9XG5cblx0cHVibGljIHNldF9saWZldGltZShsaWZldGltZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmlzX2NvbXBsZXRlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHN1cGVyLnNldF9saWZldGltZShsaWZldGltZSk7XG5cdH1cblxuXHRzZXRfcHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuXHRcdHRoaXMuc2V0X21ldGFkYXRhKEpUb2FzdHlQcm9nZXNzLlBST0dSRVNTX01FVEFEQVRBX1BSRUZJWCArICdwcm9ncmVzcycsIHByb2dyZXNzKTtcblx0fVxuXG5cdGdldF9wcm9ncmVzcygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmdldF9tZXRhZGF0YShKVG9hc3R5UHJvZ2Vzcy5QUk9HUkVTU19NRVRBREFUQV9QUkVGSVggKyAncHJvZ3Jlc3MnKTtcblx0fVxuXG5cdGZpbmlzaF9hdCh2YWx1ZTogbnVtYmVyKTogdm9pZDtcblx0ZmluaXNoX2F0KCk6IG51bWJlcjtcblx0ZmluaXNoX2F0KHZhbHVlPzogdW5rbm93bik6IHVua25vd24ge1xuXHRcdGNvbnN0IGtleSA9IEpUb2FzdHlQcm9nZXNzLlBST0dSRVNTX01FVEFEQVRBX1BSRUZJWCArICdmaW5pc2hfYXQnO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldF9tZXRhZGF0YShrZXkpO1xuXHRcdH1cblx0XHR0aGlzLnNldF9tZXRhZGF0YShrZXksIHZhbHVlKTtcblx0fVxuXG5cdHVzZV9wZXJjZW50YWdlKHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0dXNlX3BlcmNlbnRhZ2UoKTogYm9vbGVhbjtcblx0dXNlX3BlcmNlbnRhZ2UodmFsdWU/OiB1bmtub3duKTogdW5rbm93biB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPSAnYm9vbGVhbicpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldF9tZXRhZGF0YShKVG9hc3R5UHJvZ2Vzcy5QUk9HUkVTU19NRVRBREFUQV9QRVJDRU5UX0tFWSk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0X21ldGFkYXRhKEpUb2FzdHlQcm9nZXNzLlBST0dSRVNTX01FVEFEQVRBX1BFUkNFTlRfS0VZLCB2YWx1ZSk7XG5cdH1cblxuXHRvbihcblx0XHRldmVudDogJ21ldGFkYXRhLXNldCcsXG5cdFx0Y2FsbGJhY2s6IEpUb2FzdHlNZXRhZGF0YVNldEV2ZW50TGlzdGVuZXI8SlRvYXN0eVByb2dlc3M+LFxuXHRcdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4sXG5cdCk6IHZvaWQ7XG5cdG9uKFxuXHRcdGV2ZW50OiAncHJvZ3Jlc3MtdXBkYXRlZCcgfCAnZmluaXNoYXQtdXBkYXRlZCcsXG5cdFx0Y2FsbGJhY2s6IFZhbHVlVXBkYXRlZEV2ZW50TGlzdG5lcjxudW1iZXIsIEpUb2FzdHlQcm9nZXNzPixcblx0XHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuLFxuXHQpOiB2b2lkO1xuXHRvbihcblx0XHRldmVudDogJ2NvbXBsZXRlZCcsXG5cdFx0Y2FsbGJhY2s6IEpUb2FzdHlQcm9nZXNzQ29tcGxldGVFdmVudExpc3RlbmVyLFxuXHRcdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4sXG5cdCk6IHZvaWQ7XG5cdG9uKFxuXHRcdGV2ZW50OiAncmVtb3ZpbmcnLFxuXHRcdGNhbGxiYWNrOiBUb2FzdHlTaW1wbGVFdmVudExpc3RlbmVyPEpUb2FzdHlQcm9nZXNzPixcblx0XHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuLFxuXHQpOiB2b2lkO1xuXHRvbihcblx0XHRldmVudE5hbWU6IHN0cmluZyxcblx0XHRjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCxcblx0XHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuLFxuXHQpOiB2b2lkO1xuXHRvbihcblx0XHRldmVudE5hbWU6IHN0cmluZyxcblx0XHRjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCxcblx0XHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuLFxuXHQpOiB2b2lkIHtcblx0XHRzdXBlci5vbihldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKTtcblx0fVxuXG5cdG9uY2UoXG5cdFx0ZXZlbnQ6ICdtZXRhZGF0YS1zZXQnLFxuXHRcdGNhbGxiYWNrOiBKVG9hc3R5TWV0YWRhdGFTZXRFdmVudExpc3RlbmVyPEpUb2FzdHlQcm9nZXNzPixcblx0XHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuLFxuXHQpOiB2b2lkO1xuXHRvbmNlKFxuXHRcdGV2ZW50OiAncHJvZ3Jlc3MtdXBkYXRlZCcgfCAnZmluaXNoYXQtdXBkYXRlZCcsXG5cdFx0Y2FsbGJhY2s6IFZhbHVlVXBkYXRlZEV2ZW50TGlzdG5lcjxudW1iZXIsIEpUb2FzdHlQcm9nZXNzPixcblx0XHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuLFxuXHQpOiB2b2lkO1xuXHRvbmNlKFxuXHRcdGV2ZW50OiAnY29tcGxldGVkJyxcblx0XHRjYWxsYmFjazogSlRvYXN0eVByb2dlc3NDb21wbGV0ZUV2ZW50TGlzdGVuZXIsXG5cdFx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbixcblx0KTogdm9pZDtcblx0b25jZShcblx0XHRldmVudDogJ3JlbW92aW5nJyxcblx0XHRjYWxsYmFjazogVG9hc3R5U2ltcGxlRXZlbnRMaXN0ZW5lcjxKVG9hc3R5UHJvZ2Vzcz4sXG5cdFx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgYm9vbGVhbixcblx0KTogdm9pZDtcblx0b25jZShcblx0XHRldmVudE5hbWU6IHN0cmluZyxcblx0XHRjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCxcblx0XHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuLFxuXHQpOiB2b2lkO1xuXHRvbmNlKFxuXHRcdGV2ZW50TmFtZTogc3RyaW5nLFxuXHRcdGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxuXHRcdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IGJvb2xlYW4sXG5cdCk6IHZvaWQge1xuXHRcdHN1cGVyLm9uY2UoZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0aW9ucyk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IFBST0dSRVNTX01FVEFEQVRBX1BSRUZJWCgpOiBQUk9HUkVTU0lPTl9QUkVGSVgge1xuXHRcdHJldHVybiAnUFJPR1JFU1MuJztcblx0fVxuXG5cdHN0YXRpYyBnZXQgUFJPR1JFU1NfTUVUQURBVEFfTElTVEVORVIoKSB7XG5cdFx0Y29uc3QgUFJPR1JFU1NfTUVUQURBVEFfUFJFRklYID0gSlRvYXN0eVByb2dlc3MuUFJPR1JFU1NfTUVUQURBVEFfUFJFRklYO1xuXHRcdHJldHVybiAoZXY6IEpUb2FzdHlNZXRhZGF0YVNldEV2ZW50PHVua25vd24+KSA9PiB7XG5cdFx0XHRjb25zdCBkYXRhID0gZXYuZGV0YWlsO1xuXHRcdFx0aWYgKCFpc19wcm9ncmVzc19kYXRhX2NoYW5nZV9ldmVudChldikpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdG9hc3R5ID0gZXYudGFyZ2V0O1xuXHRcdFx0Y29uc3QgdGV4dHMgPSB0b2FzdHkuZ2V0X3RleHRzKCk7XG5cdFx0XHRsZXQgaW5kZXggPSB0ZXh0cy5sZW5ndGggLSAxO1xuXHRcdFx0aWYgKHRleHRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdHRleHRzLmxlbmd0aCA9IDE7XG5cdFx0XHRcdGluZGV4ID0gMDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHByb2dyZXNzOiBudW1iZXIgPSB0b2FzdHkuZ2V0X21ldGFkYXRhKFBST0dSRVNTX01FVEFEQVRBX1BSRUZJWCArICdwcm9ncmVzcycpO1xuXHRcdFx0Y29uc3QgZmluaXNoYXQ6IG51bWJlciA9IHRvYXN0eS5nZXRfbWV0YWRhdGEoUFJPR1JFU1NfTUVUQURBVEFfUFJFRklYICsgJ2ZpbmlzaF9hdCcpO1xuXHRcdFx0Y29uc3QgcGVyY2VudHM6IGJvb2xlYW4gPSB0b2FzdHkuZ2V0X21ldGFkYXRhKFBST0dSRVNTX01FVEFEQVRBX1BSRUZJWCArICdhc19wZXJjZW50Jyk7XG5cdFx0XHRjb25zdCBwcmVmaXh4ID0gcHJvZ3Jlc3MgPj0gZmluaXNoYXQgPyAnQ29tcGxldGVkIC0gJyA6ICdQcm9jZXNzaW5nIC0gJztcblx0XHRcdGNvbnN0IHByb2dtc2cgPSBwZXJjZW50cyA/IGAkeygocHJvZ3Jlc3MgLyBmaW5pc2hhdCkgKiAxMDApLnRvRml4ZWQoMil9JWAgOiBgJHtwcm9ncmVzc30gLyAke2ZpbmlzaGF0fWA7XG5cdFx0XHR0b2FzdHkuc2V0X3RleHRfYXQoaW5kZXgsIGAke3ByZWZpeHh9JHtwcm9nbXNnfWApO1xuXHRcdFx0aWYgKGRhdGEua2V5ID09IEpUb2FzdHlQcm9nZXNzLlBST0dSRVNTX01FVEFEQVRBX1BFUkNFTlRfS0VZKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gZGF0YS5rZXkuc3Vic3RyaW5nKEpUb2FzdHlQcm9nZXNzLlBST0dSRVNTX01FVEFEQVRBX1BSRUZJWC5sZW5ndGgpO1xuXHRcdFx0Y29uc3QgcHJvZ3Jlc3NfZXZlbnQgPSBuZXcgVmFsdWVVcGRhdGVkRXZlbnQocHJvcGVydHksIGRhdGEub2xkX3ZhbHVlLCBkYXRhLnZhbHVlKTtcblx0XHRcdHRvYXN0eS5kaXNwYXRjaEV2ZW50KHByb2dyZXNzX2V2ZW50KTtcblx0XHRcdGlmIChwcm9ncmVzcyA+PSBmaW5pc2hhdCkge1xuXHRcdFx0XHR0b2FzdHkuZmlyZUV2ZW50KCdjb21wbGV0ZWQnLCB7IGRldGFpbDogeyBmcm9tOiBwcm9wZXJ0eSwgb2xkX3ZhbHVlOiBkYXRhLm9sZF92YWx1ZSwgbmV3X3ZhbHVlOiBkYXRhLnZhbHVlIH0gfSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHByb3RlY3RlZCBzdGF0aWMgZ2V0IFBST0dSRVNTX01FVEFEQVRBX1BST0dSRVNTX0tFWSgpIHtcblx0XHRyZXR1cm4gdGhpcy5QUk9HUkVTU19NRVRBREFUQV9QUkVGSVggKyAncHJvZ3Jlc3MnO1xuXHR9XG5cblx0cHJvdGVjdGVkIHN0YXRpYyBnZXQgUFJPR1JFU1NfTUVUQURBVEFfRklOSVNIX0FUX0tFWSgpIHtcblx0XHRyZXR1cm4gdGhpcy5QUk9HUkVTU19NRVRBREFUQV9QUkVGSVggKyAnZmluaXNoX2F0Jztcblx0fVxuXG5cdHByb3RlY3RlZCBzdGF0aWMgZ2V0IFBST0dSRVNTX01FVEFEQVRBX1BFUkNFTlRfS0VZKCkge1xuXHRcdHJldHVybiB0aGlzLlBST0dSRVNTX01FVEFEQVRBX1BSRUZJWCArICdhc19wZXJjZW50Jztcblx0fVxufVxuXG50eXBlIFBST0dSRVNTX0RBVEFfS0VZUyA9XG5cdHwgYCR7UFJPR1JFU1NJT05fUFJFRklYfXByb2dyZXNzYFxuXHR8IGAke1BST0dSRVNTSU9OX1BSRUZJWH1maW5pc2hfYXRgXG5cdHwgYCR7UFJPR1JFU1NJT05fUFJFRklYfWFzX3BlcmNlbnRgO1xudHlwZSBQUk9HUkVTU0lPTl9LRVlTID0gYCR7UFJPR1JFU1NJT05fUFJFRklYfXByb2dyZXNzYCB8IGAke1BST0dSRVNTSU9OX1BSRUZJWH1maW5pc2hfYXRgO1xuXG5leHBvcnQgY2xhc3MgSlRvYXN0eUV2ZW50PFQsIEogZXh0ZW5kcyBKVG9hc3R5ID0gSlRvYXN0eT4gZXh0ZW5kcyBDdXN0b21FdmVudDxUPiB7XG5cdHRhcmdldDogSjtcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBpbml0OiBDdXN0b21FdmVudEluaXQ8VD4pIHtcblx0XHRzdXBlcihuYW1lLCBpbml0KTtcblx0fVxufVxuXG50eXBlIEpUb2FzdHlFdmVudExpc3RlbmVyPFQgPSB1bmtub3duLCBKIGV4dGVuZHMgSlRvYXN0eSA9IEpUb2FzdHk+ID0gKGV2ZW50OiBKVG9hc3R5RXZlbnQ8VCwgSj4pID0+IHZvaWQ7XG5cbnR5cGUgSlRvYXN0eVByb2dlc3NDb21wbGV0ZUV2ZW50PEogZXh0ZW5kcyBKVG9hc3R5UHJvZ2VzcyA9IEpUb2FzdHlQcm9nZXNzPiA9IEpUb2FzdHlFdmVudDxcblx0e1xuXHRcdGZyb206IHN0cmluZztcblx0XHRvbGRfdmFsdWU6IG51bWJlcjtcblx0XHRuZXdfdmFsdWU6IG51bWJlcjtcblx0fSxcblx0SlxuPjtcblxudHlwZSBKVG9hc3R5UHJvZ2Vzc0NvbXBsZXRlRXZlbnRMaXN0ZW5lcjxKIGV4dGVuZHMgSlRvYXN0eVByb2dlc3MgPSBKVG9hc3R5UHJvZ2Vzcz4gPSAoXG5cdGV2ZW50OiBKVG9hc3R5UHJvZ2Vzc0NvbXBsZXRlRXZlbnQ8Sj4sXG4pID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBKVG9hc3R5U2ltcGxlRXZlbnQ8VCA9IHVua25vd24sIEogZXh0ZW5kcyBKVG9hc3R5ID0gSlRvYXN0eT4gZXh0ZW5kcyBKVG9hc3R5RXZlbnQ8VCwgSj4ge1xuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRldGFpbDogVCkge1xuXHRcdHN1cGVyKG5hbWUsIHsgZGV0YWlsIH0pO1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIFRvYXN0eVNpbXBsZUV2ZW50TGlzdGVuZXI8SiBleHRlbmRzIEpUb2FzdHkgPSBKVG9hc3R5PiA9IChldmVudDogSlRvYXN0eVNpbXBsZUV2ZW50PHVua25vd24sIEo+KSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgSlRvYXN0eU1ldGFkYXRhU2V0RXZlbnQ8VCA9IHVua25vd24sIEogZXh0ZW5kcyBKVG9hc3R5ID0gSlRvYXN0eT4gZXh0ZW5kcyBKVG9hc3R5U2ltcGxlRXZlbnQ8XG5cdHsga2V5OiBzdHJpbmc7IHZhbHVlOiBUOyBvbGRfdmFsdWU/OiBUIH0sXG5cdEpcbj4ge1xuXHRjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmFsdWU6IFQsIG9sZF92YWx1ZTogVCkge1xuXHRcdHN1cGVyKCdtZXRhZGF0YS1zZXQnLCB7IGtleSwgdmFsdWUsIG9sZF92YWx1ZSB9KTtcblx0fVxufVxuXG5leHBvcnQgdHlwZSBKVG9hc3R5UHJvZ3Jlc3NEYXRhVXBkYXRlZEV2ZW50ID0gSlRvYXN0eU1ldGFkYXRhU2V0RXZlbnQ8XG5cdHtcblx0XHRrZXk6IFBST0dSRVNTX0RBVEFfS0VZUztcblx0XHR2YWx1ZTogbnVtYmVyIHwgYm9vbGVhbjtcblx0XHRvbGRfdmFsdWU6IG51bWJlciB8IGJvb2xlYW47XG5cdH0sXG5cdEpUb2FzdHlQcm9nZXNzXG4+O1xuXG5leHBvcnQgdHlwZSBKVG9hc3R5UHJvZ3Jlc3Npb25FdmVudCA9IEpUb2FzdHlNZXRhZGF0YVNldEV2ZW50PFxuXHR7XG5cdFx0a2V5OiBQUk9HUkVTU0lPTl9LRVlTO1xuXHRcdHZhbHVlOiBudW1iZXI7XG5cdFx0b2xkX3ZhbHVlOiBudW1iZXI7XG5cdH0sXG5cdEpUb2FzdHlQcm9nZXNzXG4+O1xuXG5leHBvcnQgY2xhc3MgVmFsdWVVcGRhdGVkRXZlbnQ8VCwgSiBleHRlbmRzIEpUb2FzdHkgPSBKVG9hc3R5PiBleHRlbmRzIEpUb2FzdHlTaW1wbGVFdmVudDxcblx0eyBvbGRfdmFsdWU6IFQ7IG5ld192YWx1ZTogVDsgcHJvcGVydHk6IHN0cmluZyB9LFxuXHRKXG4+IHtcblx0b2xkX3ZhbHVlOiBUO1xuXHRuZXdfdmFsdWU6IFQ7XG5cdHByb3BlcnR5OiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKHByb3BlcnR5X25hbWU6IHN0cmluZywgb2xkX3ZhbHVlOiBULCBuZXdfdmFsdWU6IFQpIHtcblx0XHRzdXBlcihwcm9wZXJ0eV9uYW1lICsgJy11cGRhdGVkJywgeyBvbGRfdmFsdWUsIG5ld192YWx1ZSwgcHJvcGVydHk6IHByb3BlcnR5X25hbWUgfSk7XG5cdFx0dGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5X25hbWU7XG5cdFx0dGhpcy5vbGRfdmFsdWUgPSBvbGRfdmFsdWU7XG5cdFx0dGhpcy5uZXdfdmFsdWUgPSBuZXdfdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgSlRvYXN0eU1ldGFkYXRhU2V0RXZlbnRMaXN0ZW5lcjxKIGV4dGVuZHMgSlRvYXN0eSA9IEpUb2FzdHk+ID0gKFxuXHRldmVudDogSlRvYXN0eU1ldGFkYXRhU2V0RXZlbnQ8dW5rbm93biwgSj4sXG4pID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFZhbHVlVXBkYXRlZEV2ZW50TGlzdG5lcjxUID0gdW5rbm93biwgSiBleHRlbmRzIEpUb2FzdHkgPSBKVG9hc3R5PiA9IChcblx0ZXZlbnQ6IFZhbHVlVXBkYXRlZEV2ZW50PFQsIEo+LFxuKSA9PiB2b2lkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgSlRvYXN0eSwgSlRvYXN0eVByb2dlc3MsIFRvYXN0eVByb2dlc3NTZXR0aW5ncyB9IGZyb20gJy4vanRvYXN0eSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxudHlwZSBQcm9ncmVzc1RvYXN0eUluZm9ybWF0aW9uID0ge1xuXHRwcm9ncmVzczogbnVtYmVyO1xuXHRmaW5pc2hhdD86IG51bWJlcjtcblx0YXBlcmNlbnQ/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIEpUb2FzdHlUb2FzdGVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuXHRwcml2YXRlIHBhcmVudDogSFRNTEVsZW1lbnQ7XG5cdHByb3RlY3RlZCB0b2FzdGVkX2RpdjogSFRNTERpdkVsZW1lbnQ7XG5cblx0Y29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHkpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmICghKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2VkIHBhcmVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IGluc3RhbmNlJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy50b2FzdGVkX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMudG9hc3RlZF9kaXYuY2xhc3NMaXN0LmFkZCgnanRvYXN0ZWRzLWNvbnRhaW5lcicpO1xuXHRcdHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMudG9hc3RlZF9kaXYpO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZU5vdGlmaWNhdGlvbiguLi5saW5lczogc3RyaW5nW10pOiBKVG9hc3R5O1xuXHRwdWJsaWMgY3JlYXRlTm90aWZpY2F0aW9uKGxpZmV0aW1lOiBudW1iZXIsIC4uLmxpbmVzOiBzdHJpbmdbXSk6IEpUb2FzdHk7XG5cdHB1YmxpYyBjcmVhdGVOb3RpZmljYXRpb24oYTogdW5rbm93biwgLi4ubGluZXM6IHN0cmluZ1tdKTogSlRvYXN0eSB7XG5cdFx0bGV0IGxpZmV0aW1lID0gNTtcblx0XHRpZiAodHlwZW9mIGEgPT0gJ3N0cmluZycpIHtcblx0XHRcdGxpbmVzLnVuc2hpZnQoYSk7XG5cdFx0fSBlbHNlIGlmIChOdW1iZXIuaXNTYWZlSW50ZWdlcihhKSkge1xuXHRcdFx0bGlmZXRpbWUgPSBhIGFzIG51bWJlcjtcblx0XHR9XG5cdFx0Y29uc3QgdG9hc3R5ID0gbmV3IEpUb2FzdHkodGhpcy50b2FzdGVkX2RpdiwgbGlmZXRpbWUsIC4uLmxpbmVzKTtcblx0XHR0b2FzdHkub24oJ21ldGFkYXRhLXNldCcsIChldikgPT4ge1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnanRvYXN0eS5tZXRhZGF0YS1zZXQnLCB7IGRldGFpbDogeyBkYXRhOiBldi5kZXRhaWwsIHRvYXN0eSB9IH0pKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdG9hc3R5O1xuXHR9XG5cblx0cHVibGljIG5vdGlmaWNhdGlvbiguLi5saW5lczogc3RyaW5nW10pOiBKVG9hc3R5O1xuXHRwdWJsaWMgbm90aWZpY2F0aW9uKGxpZmV0aW1lT3JFbGVtZW50OiBudW1iZXIgfCBKVG9hc3R5LCAuLi5saW5lczogc3RyaW5nW10pOiBKVG9hc3R5O1xuXHRwdWJsaWMgbm90aWZpY2F0aW9uKGVsZW1lbnQ6IEpUb2FzdHksIGxpZmV0aW1lOiBudW1iZXIsIC4uLmxpbmVzOiBzdHJpbmdbXSk6IEpUb2FzdHk7XG5cdHB1YmxpYyBub3RpZmljYXRpb24oYTogdW5rbm93biwgYjogdW5rbm93biwgLi4ubGluZXM6IHN0cmluZ1tdKTogSlRvYXN0eSB7XG5cdFx0aWYgKGEgaW5zdGFuY2VvZiBKVG9hc3R5KSB7XG5cdFx0XHRpZiAodHlwZW9mIGIgPT0gJ251bWJlcicpIHtcblx0XHRcdFx0YS5zZXRfdGV4dHMobGluZXMpO1xuXHRcdFx0XHRhLnNldF9saWZldGltZShiKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGIgPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0bGluZXMudW5zaGlmdChiKTtcblx0XHRcdH1cblx0XHRcdGEuc2V0X3RleHRzKGxpbmVzKTtcblx0XHRcdHJldHVybiBhO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGEgPT0gJ251bWJlcicpIHtcblx0XHRcdGlmICh0eXBlb2YgYiA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRsaW5lcy51bnNoaWZ0KGIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlTm90aWZpY2F0aW9uKGEsIC4uLmxpbmVzKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBhID09ICdzdHJpbmcnKSB7XG5cdFx0XHRsaW5lcy51bnNoaWZ0KGEpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGIgPT0gJ3N0cmluZycpIHtcblx0XHRcdGxpbmVzLnVuc2hpZnQoYik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmNyZWF0ZU5vdGlmaWNhdGlvbiguLi5saW5lcyk7XG5cdH1cblxuXHRwdWJsaWMgcHJvZ3Jlc3NOb3RpZmljYXRpb24oZGF0YTogUHJvZ3Jlc3NUb2FzdHlJbmZvcm1hdGlvbik6IEpUb2FzdHlQcm9nZXNzO1xuXHRwdWJsaWMgcHJvZ3Jlc3NOb3RpZmljYXRpb24odG9hc3R5OiBKVG9hc3R5UHJvZ2VzcywgZGF0YTogUHJvZ3Jlc3NUb2FzdHlJbmZvcm1hdGlvbik6IEpUb2FzdHlQcm9nZXNzO1xuXHRwdWJsaWMgcHJvZ3Jlc3NOb3RpZmljYXRpb24oZGF0YTogUHJvZ3Jlc3NUb2FzdHlJbmZvcm1hdGlvbiwgcHJlZml4aW5nX2xpbmU6IHN0cmluZyk6IEpUb2FzdHlQcm9nZXNzO1xuXHRwdWJsaWMgcHJvZ3Jlc3NOb3RpZmljYXRpb24oXG5cdFx0dG9hc3R5OiBKVG9hc3R5UHJvZ2Vzcyxcblx0XHRkYXRhOiBQcm9ncmVzc1RvYXN0eUluZm9ybWF0aW9uLFxuXHRcdHByZWZpeGluZ19saW5lOiBzdHJpbmcsXG5cdCk6IEpUb2FzdHlQcm9nZXNzO1xuXHRwdWJsaWMgcHJvZ3Jlc3NOb3RpZmljYXRpb24oYTogdW5rbm93biwgYj86IHVua25vd24sIGM/OiB1bmtub3duKTogSlRvYXN0eVByb2dlc3Mge1xuXHRcdGlmIChhIGluc3RhbmNlb2YgSlRvYXN0eVByb2dlc3MpIHtcblx0XHRcdGNvbnN0IGRhdGEgPSBiIGFzIFByb2dyZXNzVG9hc3R5SW5mb3JtYXRpb247XG5cdFx0XHQvLyBQcm9ncmVzcyBleGlzdHMgb24gdGhpcyB0b2FzdHkgc28gd2UganVzdCB1cGRhdGUgdGhlIHZhbHVlc1xuXHRcdFx0aWYgKHR5cGVvZiBjID09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGNvbnN0IHRleHRzID0gYS5nZXRfdGV4dHMoKTtcblx0XHRcdFx0aWYgKHRleHRzLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdFx0dGV4dHMudW5zaGlmdChjKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ZXh0c1swXSA9IGM7XG5cdFx0XHRcdH1cblx0XHRcdFx0YS5zZXRfdGV4dHModGV4dHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGRhdGEucHJvZ3Jlc3MgPT0gJ251bWJlcicpIHtcblx0XHRcdFx0YS5zZXRfcHJvZ3Jlc3MoZGF0YS5wcm9ncmVzcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEuZmluaXNoYXQgPT0gJ251bWJlcicpIHtcblx0XHRcdFx0YS5maW5pc2hfYXQoZGF0YS5maW5pc2hhdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEuYXBlcmNlbnQgPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGEudXNlX3BlcmNlbnRhZ2UoZGF0YS5hcGVyY2VudCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhO1xuXHRcdH1cblx0XHRjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7IGZpbmlzaGF0OiAxMDAsIGxpZmV0aW1lOiA1LCBwcm9ncmVzczogMCwgYXBlcmNlbnQ6IGZhbHNlLCBwcmVmaXhpbmc6IGIgYXMgc3RyaW5nIH0sIGEpO1xuXHRcdGNvbnN0IHRvYXN0eSA9IG5ldyBKVG9hc3R5UHJvZ2Vzcyh0aGlzLnRvYXN0ZWRfZGl2LCBkYXRhIGFzIFRvYXN0eVByb2dlc3NTZXR0aW5ncyk7XG5cblx0XHRyZXR1cm4gdG9hc3R5O1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=