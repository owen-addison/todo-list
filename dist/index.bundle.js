/******/ (() => { // webpackBootstrap
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Code+Pro:wght@300;400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --min-width: 1310px;\n  --bg-side-header: #3e3e3e;\n  --bg-color: #888888;\n  --bg-list: #3e3e3e;\n  --title-icon-width: 1.5rem;\n  --header-icon-width: 2.2rem;\n  --list-width: 350px;\n  --list-padding: 20px;\n  --header-height: 100px;\n\n  font-family: 'Source Code Pro', monospace;\n  color: whitesmoke;\n}\n\nbody {\n  margin: 0;\n}\n\nh2, h3, h4, h5, h6 {\n  margin: 0px;\n}\n\nh2 {\n  font-family: 'Press Start 2P', cursive;\n}\n\n.content {\n  width: 100vw;\n  height: 100vh;\n\n}\n\n.content-container {\n  display: grid;\n  grid-template-columns: minmax(300px, 0.25fr) 1fr;\n  height: 100%;\n}\n\n\n/* ------------ SIDEBAR VIEW ------------ */\n.sidebar {\n  background: var(--bg-side-header);\n  border-right: 2px solid white;\n}\n\n\n/* ------------ PROJECT VIEW ------------ */\n.project-view {\n  width: 100%;\n  background-color: var(--bg-color);\n}\n\n.project-header {\n  display: grid;\n  grid-template-columns: 1fr 200px;\n  border-bottom: 2px solid white;\n  background: var(--bg-side-header);\n  height: var(--header-height);\n  /* width: 100%; */\n}\n\n.project-header img {\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n  width: var(--header-icon-width);\n}\n\n.header-icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, var(--header-icon-width));\n  align-content: center;\n  gap: 20px;\n  width: fit-content;\n}\n\n.project-container {\n  display: grid;\n  /* grid-template-columns: minmax(repeat(2, var(--list-width)), repeat(4, (--list-width))); */\n  grid-template-columns: repeat(3, var(--list-width));\n  padding: var(--list-padding);\n}\n\n.list-container {\n  display: grid;\n  gap: 10px;\n  /* width: var(--list-width); */\n  background-color: var(--bg-list);\n  padding: 25px 30px;\n  border-radius: 20px;\n  \n  border: 2px solid white;\n}\n\n.title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n\n  /* border: 1px solid blue; */\n}\n\n.icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.title-container img {\n  width: var(--title-icon-width);\n  height: var(--title-icon-width);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.list-title {\n  margin: 0;\n}\n\n.todo-container {\n  display: grid;\n  gap: 10px;\n  /* border: 1px solid green; */\n}\n\n.todo {\n  /* width: 100%; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* border: 1px solid red; */\n}\n\n.todo-name {\n  width: 70%;\n  height: fit-content;\n  /* border: 1px solid blue; */\n}\n\n.todo .icon-container {\n  /* border: 1px solid green; */\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.todo img {\n  width: calc(var(--title-icon-width) * 0.8);\n  height: calc(var(--title-icon-width) * 0.8);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,0BAA0B;EAC1B,2BAA2B;EAC3B,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;;EAEtB,yCAAyC;EACzC,iBAAiB;AACnB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,YAAY;EACZ,aAAa;;AAEf;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,YAAY;AACd;;;AAGA,2CAA2C;AAC3C;EACE,iCAAiC;EACjC,6BAA6B;AAC/B;;;AAGA,2CAA2C;AAC3C;EACE,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,8BAA8B;EAC9B,iCAAiC;EACjC,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA;EACE,gGAAgG;EAChG,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,0DAA0D;EAC1D,qBAAqB;EACrB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4FAA4F;EAC5F,mDAAmD;EACnD,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,gCAAgC;EAChC,kBAAkB;EAClB,mBAAmB;;EAEnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;;;EAGX,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,8BAA8B;EAC9B,+BAA+B;EAC/B,gGAAgG;AAClG;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,0CAA0C;EAC1C,2CAA2C;EAC3C,gGAAgG;AAClG","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Code+Pro:wght@300;400;500;600&display=swap');\n\n:root {\n  --min-width: 1310px;\n  --bg-side-header: #3e3e3e;\n  --bg-color: #888888;\n  --bg-list: #3e3e3e;\n  --title-icon-width: 1.5rem;\n  --header-icon-width: 2.2rem;\n  --list-width: 350px;\n  --list-padding: 20px;\n  --header-height: 100px;\n\n  font-family: 'Source Code Pro', monospace;\n  color: whitesmoke;\n}\n\nbody {\n  margin: 0;\n}\n\nh2, h3, h4, h5, h6 {\n  margin: 0px;\n}\n\nh2 {\n  font-family: 'Press Start 2P', cursive;\n}\n\n.content {\n  width: 100vw;\n  height: 100vh;\n\n}\n\n.content-container {\n  display: grid;\n  grid-template-columns: minmax(300px, 0.25fr) 1fr;\n  height: 100%;\n}\n\n\n/* ------------ SIDEBAR VIEW ------------ */\n.sidebar {\n  background: var(--bg-side-header);\n  border-right: 2px solid white;\n}\n\n\n/* ------------ PROJECT VIEW ------------ */\n.project-view {\n  width: 100%;\n  background-color: var(--bg-color);\n}\n\n.project-header {\n  display: grid;\n  grid-template-columns: 1fr 200px;\n  border-bottom: 2px solid white;\n  background: var(--bg-side-header);\n  height: var(--header-height);\n  /* width: 100%; */\n}\n\n.project-header img {\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n  width: var(--header-icon-width);\n}\n\n.header-icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, var(--header-icon-width));\n  align-content: center;\n  gap: 20px;\n  width: fit-content;\n}\n\n.project-container {\n  display: grid;\n  /* grid-template-columns: minmax(repeat(2, var(--list-width)), repeat(4, (--list-width))); */\n  grid-template-columns: repeat(3, var(--list-width));\n  padding: var(--list-padding);\n}\n\n.list-container {\n  display: grid;\n  gap: 10px;\n  /* width: var(--list-width); */\n  background-color: var(--bg-list);\n  padding: 25px 30px;\n  border-radius: 20px;\n  \n  border: 2px solid white;\n}\n\n.title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n\n  /* border: 1px solid blue; */\n}\n\n.icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.title-container img {\n  width: var(--title-icon-width);\n  height: var(--title-icon-width);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.list-title {\n  margin: 0;\n}\n\n.todo-container {\n  display: grid;\n  gap: 10px;\n  /* border: 1px solid green; */\n}\n\n.todo {\n  /* width: 100%; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* border: 1px solid red; */\n}\n\n.todo-name {\n  width: 70%;\n  height: fit-content;\n  /* border: 1px solid blue; */\n}\n\n.todo .icon-container {\n  /* border: 1px solid green; */\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.todo img {\n  width: calc(var(--title-icon-width) * 0.8);\n  height: calc(var(--title-icon-width) * 0.8);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoProto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoProto */ "./src/todoProto.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* 
*********************************************************************

Factory function to return a project object
OAL 16-02-2023
Version 0.1 genesis

This function called by index.js to create and return a todoList

********************************************************************* 
*/




const project = (
  name,
  id,
  info,
  type = "project",
  arrayName = "listArray",
  obj = _todoList__WEBPACK_IMPORTED_MODULE_1__["default"]
) => {
  const {
    todoArray: listArray,
    addItem,
    ...rest
  } = (0,_todoList__WEBPACK_IMPORTED_MODULE_1__["default"])(name, id, info, type, arrayName);
  const state = {
    ...rest,
    listArray,
  };
  return {
    ...state,
    ...(0,_todoProto__WEBPACK_IMPORTED_MODULE_0__.creator)(state, arrayName, obj),
    ...(0,_todoProto__WEBPACK_IMPORTED_MODULE_0__.remover)(state, arrayName),
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoProto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoProto */ "./src/todoProto.js");
/* 
*********************************************************************

Factory function to return a todoItem object
OAL 15-02-2023
Version 0.1 genesis

This function called by project or todoList code to create and return a todoItem

********************************************************************* 
*/



const todoItem = (
  name,
  id,
  info,
  type = "todo",
  dueDate = null,
  priority = "none",
  checklist = [],
  status = "pending"
) => {
  const state = {
    ...(0,_todoProto__WEBPACK_IMPORTED_MODULE_0__.todoProto)(name, id, info, type),
    creationDate: new Date(),
    dueDate,
    priority,
    checklist,
    status,
  };
  return {
    ...state,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);


/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoProto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoProto */ "./src/todoProto.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
/* 
*********************************************************************

Factory function to return a todoList object
OAL 15-02-2023
Version 0.1 genesis

This function called by project code to create and return a todoList.
The returned object includes an array of todoItems, name, info and
functions for adding and removing todoItems from array.

********************************************************************* 
*/




// const nameUpdater = (state) => ({
//   updateNames: () => {
//     const { todoArray } = state;

//     todoArray.map((obj) => {
//       obj.id = 6;
//     });
//   },
// });

const todoList = (
  name,
  id,
  info,
  type = "list",
  arrayName = "todoArray",
  obj = _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"]
) => {
  const todoArray = [];
  const state = {
    ...(0,_todoProto__WEBPACK_IMPORTED_MODULE_0__.todoProto)(name, id, info, type),
    todoArray,
  };
  return {
    ...state,
    ...(0,_todoProto__WEBPACK_IMPORTED_MODULE_0__.creator)(state, arrayName, obj),
    ...(0,_todoProto__WEBPACK_IMPORTED_MODULE_0__.remover)(state, arrayName),
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoList);


/***/ }),

/***/ "./src/todoProto.js":
/*!**************************!*\
  !*** ./src/todoProto.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creator": () => (/* binding */ creator),
/* harmony export */   "remover": () => (/* binding */ remover),
/* harmony export */   "todoProto": () => (/* binding */ todoProto)
/* harmony export */ });
const getDefaultName = (arrayLength) => `Item ${arrayLength + 1}`;

const creator = (state, array, object) => ({
  create: (
    objName = getDefaultName(state[`${array}`].length),
    id = `${state.id}_td${state[`${array}`].length + 1}`
    // id = state[`${array}`].length + 1,
  ) => {
    state[`${array}`].push(object(objName, id));
  },
});

const remover = (state, array) => ({
  deleteItem: (id) => state[`${array}`].filter((element) => element.id !== id),
});

const todoProto = (name, id, info, type) => {
  const state = {
    name,
    id,
    info,
    type,
  };
  return {
    ...state,
  };
};




/***/ }),

/***/ "./src/images/file-edit-outline.svg":
/*!******************************************!*\
  !*** ./src/images/file-edit-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae589010d8b937c5a909.svg";

/***/ }),

/***/ "./src/images/plus-box-outline.svg":
/*!*****************************************!*\
  !*** ./src/images/plus-box-outline.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de7aff6cb1c57b33c2db.svg";

/***/ }),

/***/ "./src/images/trash-can-outline.svg":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/plus-box-outline.svg */ "./src/images/plus-box-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg");
/* harmony import */ var _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/file-edit-outline.svg */ "./src/images/file-edit-outline.svg");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");







const listArray = [];

const headerTitleElement = "h2";
const listTitleElement = "h3";
const todoNameElement = "h5";

/*
-------------------------
  HTML setup
-------------------------
*/
// Get content div element
const content = document.querySelector(".content");

// Create content container
const contentContainer = document.createElement("div");
contentContainer.classList.add("content-container");

// Create sidebar section
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

// Create project view
const projectView = document.createElement("div");
projectView.classList.add("project-view");

// Create project view header
const projectHeader = document.createElement("div");
projectHeader.classList.add("project-header");
// Add title to project header
const headerTitle = document.createElement(headerTitleElement);
projectHeader.appendChild(headerTitle);
// Add icon container to header
const headerIconContainer = document.createElement("div");
headerIconContainer.classList.add("header-icon-container");
projectHeader.appendChild(headerIconContainer);
// Add icons to container
const headerAddIcon = new Image();
headerAddIcon.src = _images_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
headerAddIcon.classList.add("add-icon");
// headerAddIcon.setAttribute("projId", "proj1");
headerAddIcon.setAttribute("type", "proj");
headerIconContainer.appendChild(headerAddIcon);
const headerEditIcon = new Image();
headerEditIcon.src = _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
headerEditIcon.classList.add("edit-icon");
// headerEditIcon.setAttribute("projId", "proj");
headerEditIcon.setAttribute("type", "proj");
headerIconContainer.appendChild(headerEditIcon);
const headerRemoveIcon = new Image();
headerRemoveIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
headerRemoveIcon.classList.add("del-icon");
headerRemoveIcon.setAttribute("type", "proj");
headerIconContainer.appendChild(headerRemoveIcon);

// Add project header to project view
projectView.appendChild(projectHeader);

// Create project view main section
const projectContainer = document.createElement("div");
projectContainer.classList.add("project-container");
// Add project container to project view
projectView.appendChild(projectContainer);

// Add elements to document
contentContainer.appendChild(sidebar);
contentContainer.appendChild(projectView);
content.appendChild(contentContainer);

/*
-------------------------
  Todo/list logic
-------------------------
*/
/*
  ___OBJECT LOGIC___
*/
// Get object from array
function returnObjectFromArray(id, array) {
  // Filter through array of lists to find matching list object
  const filteredArray = array.filter((element) => element.id === id);
  // Check for uniqueness
  if (filteredArray.length > 1) {
    // If more than one list object found throw error
    console.log(filteredArray);
    throw Error("ERROR! More than one relative found."); // Error if more that one relative object found
  } else if (filteredArray.length < 1) {
    throw Error("ERROR! No relative found."); // Error if no relative object found
  } else {
    // Destructure array of objects
    const [relative] = filteredArray;
    // Return list object
    return relative;
  }
}

function removeObjFromList(id, list, parentObj) {
  const filteredArray = list.filter((element) => element.id !== id);
}

/*
  ___HANDLER EVENTS___ (for event listeners)
*/
// Handle todo add event
function handleTodoAdd(targetId) {
  // Get list object
  const list = returnObjectFromArray(targetId, listArray);
  // Create a todo item
  list.create();
  // // Display list in DOM
  // updateListView(targetId, list);
  // Update view of lists in array in DOM
  updateProjView(targetId, listArray);
}

// Handle list add event
function handleListAdd(targetId) {
  console.log(targetId);
}

// Handle todo delete event
function handleTodoDel(targetId, parentId) {
  // Filter through array of lists to find matching list object
  const list = returnObjectFromArray(parentId, listArray);
  // Remove the first 4 characters from targetId string (First 4 characters: "del-")
  const todoObjId = targetId.substring(4);
  // Remove the todo object from array in parent list object
  list.todoArray = list.todoArray.filter((element) => element.id !== todoObjId);
  // Update list view in DOM
  updateProjView(parentId, listArray);
}

// Handle list delete event
function handleListDel(targetId, array) {
  // Filter through array of lists to find matching list object
  const list = returnObjectFromArray(targetId, array);
  // Remove the list from the list array
  array = array.filter((element) => element.id !== targetId);
  // Update view of lists in array in DOM
  updateProjView(targetId, array);
}

/*
  ___EVENT LISTENERS___
*/
// Global event listener
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// Event listener functionality for add icons
addGlobalEventListener("click", ".add-icon", (e) => {
  // Set variables for the DOM element's type and id attributes
  const targetType = e.target.getAttribute("type");
  const targetId = e.target.getAttribute("listId");

  // Check if element type is a list
  if (targetType === "list") {
    handleTodoAdd(targetId);
  } else if (targetType === "proj") {
    handleListAdd(targetId);
  }
});

// Event listener functionality for edit icons
addGlobalEventListener("click", ".edit-icon", (e) => {
  console.log(`Edit target:`);
  console.log(e.target);
});

// Event listener functionality for delete icons
addGlobalEventListener("click", ".del-icon", (e) => {
  // Get target type
  const targetType = e.target.getAttribute("type");
  // Get target ID
  const targetId = e.target.getAttribute("id");
  // Get parent ID
  const parentId = e.target.getAttribute("listId");
  // Handle depending on target type
  if (targetType === "todo") {
    handleTodoDel(targetId, parentId);
  } else if (targetType === "list") {
    handleListDel(parentId, listArray);
  }
});

/*
-------------------------
  List create
-------------------------
*/
// Function to create new todo list
const createNewList = (name = "New List", id = undefined, info = undefined) => {
  const newList = (0,_todoList__WEBPACK_IMPORTED_MODULE_4__["default"])(name, `list${id}`, info);
  listArray.push(newList);
  // console.table(listArray);

  return newList;
};

/*
-------------------------
  List display
-------------------------
*/
// Function to display todo list
const displayNewList = (list) => {
  // Create new element
  const listContainer = document.createElement("div");
  // Assign class and id name
  listContainer.classList.add("list-container");
  const listIdName = `${list.id}`;
  listContainer.setAttribute("id", listIdName);

  // Display name as title
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");
  listContainer.appendChild(titleContainer);
  const title = document.createElement(listTitleElement);
  title.classList.add("list-title");
  title.textContent = list.name;
  titleContainer.appendChild(title);

  // Display icons
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");
  const addIcon = new Image();
  addIcon.src = _images_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
  addIcon.classList.add("add-icon");
  addIcon.setAttribute("id", `add-${listIdName}`);
  addIcon.setAttribute("type", "list");
  addIcon.setAttribute("listId", listIdName);
  iconContainer.appendChild(addIcon);
  const editIcon = new Image();
  editIcon.src = _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
  editIcon.classList.add("edit-icon");
  editIcon.setAttribute("id", `edit-${listIdName}`);
  editIcon.setAttribute("type", "list");
  editIcon.setAttribute("listId", listIdName);
  iconContainer.appendChild(editIcon);
  const removeIcon = new Image();
  removeIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
  removeIcon.classList.add("del-icon");
  removeIcon.setAttribute("id", `del-${listIdName}`);
  removeIcon.setAttribute("type", "list");
  removeIcon.setAttribute("listId", listIdName);
  iconContainer.appendChild(removeIcon);
  titleContainer.appendChild(iconContainer);

  // Display list contents
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");
  listContainer.appendChild(todoContainer);
  list.todoArray.forEach((element) => {
    // Todo box
    const todo = document.createElement("div");
    const todoIdName = `${element.id}`;
    todo.classList.add("todo");
    todo.setAttribute("id", todoIdName);
    todoContainer.appendChild(todo);
    // Checkbox
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", `chk-${todoIdName}`);
    todo.appendChild(checkBox);
    // Todo name
    const todoName = document.createElement(todoNameElement);
    todoName.classList.add("todo-name");
    todoName.textContent = element.id;
    todo.appendChild(todoName);
    // Todo icons
    const todoIcons = document.createElement("div");
    todoIcons.classList.add("icon-container");
    const todoEdit = new Image();
    todoEdit.src = _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
    todoEdit.classList.add("edit-icon");
    todoEdit.setAttribute("id", `edit-${todoIdName}`);
    todoEdit.setAttribute("type", "todo");
    todoEdit.setAttribute("listId", listIdName);
    todoIcons.appendChild(todoEdit);
    const todoDel = new Image();
    todoDel.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
    todoDel.classList.add("del-icon");
    todoDel.setAttribute("id", `del-${todoIdName}`);
    todoDel.setAttribute("type", "todo");
    todoDel.setAttribute("listId", listIdName);
    todoIcons.appendChild(todoDel);
    todo.appendChild(todoIcons);
    // Add todo to container
    todoContainer.appendChild(todo);
  });

  // Add list container to DOM
  projectContainer.appendChild(listContainer);
};

/*
-------------------------
  DOM update
-------------------------
*/
// Function to remove list from DOM
function removeListFromDOM(list) {
  // Get project element from DOM
  const proj = list.parentElement;
  // Remove the list DOM element from the project DOM element
  proj.removeChild(list);
}

// Function to add list to DOM
function addListToDOM(list) {
  // Display list in DOM
  displayNewList(list);
}

// Function to update project view
function updateProjView(listId, array) {
  if (array.length === 0) {
    // If array empty
    // Get DOM element for list
    const listDOM = document.getElementById(listId);
    // Remove list DOM element from project DOM element
    removeListFromDOM(listDOM);
  } else {
    // For each element in the list array
    array.forEach((element) => {
      // Get old DOM element for this array element
      const oldDOM = document.getElementById(element.id);
      // Remove old DOM element
      removeListFromDOM(oldDOM);
      // Add new DOM element
      addListToDOM(element);
    });
  }
}

/*
-------------------------
  Init
-------------------------
*/
const myTodoList = createNewList("My first list", 1, "This is my first list");

for (let i = 0; i < 7; i++) {
  myTodoList.create();
}

displayNewList(myTodoList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvUHJvdG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmZhbWlseT1Tb3VyY2UrQ29kZStQcm86d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1taW4td2lkdGg6IDEzMTBweDtcXG4gIC0tYmctc2lkZS1oZWFkZXI6ICMzZTNlM2U7XFxuICAtLWJnLWNvbG9yOiAjODg4ODg4O1xcbiAgLS1iZy1saXN0OiAjM2UzZTNlO1xcbiAgLS10aXRsZS1pY29uLXdpZHRoOiAxLjVyZW07XFxuICAtLWhlYWRlci1pY29uLXdpZHRoOiAyLjJyZW07XFxuICAtLWxpc3Qtd2lkdGg6IDM1MHB4O1xcbiAgLS1saXN0LXBhZGRpbmc6IDIwcHg7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcblxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzAwcHgsIDAuMjVmcikgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0gU0lERUJBUiBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0gUFJPSkVDVCBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5wcm9qZWN0LXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgd2lkdGg6IHZhcigtLWhlYWRlci1pY29uLXdpZHRoKTtcXG59XFxuXFxuLmhlYWRlci1pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgdmFyKC0taGVhZGVyLWljb24td2lkdGgpKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChyZXBlYXQoMiwgdmFyKC0tbGlzdC13aWR0aCkpLCByZXBlYXQoNCwgKC0tbGlzdC13aWR0aCkpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIHZhcigtLWxpc3Qtd2lkdGgpKTtcXG4gIHBhZGRpbmc6IHZhcigtLWxpc3QtcGFkZGluZyk7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogd2lkdGg6IHZhcigtLWxpc3Qtd2lkdGgpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlzdCk7XFxuICBwYWRkaW5nOiAyNXB4IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgXFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcblxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLmljb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogdmFyKC0tdGl0bGUtaWNvbi13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLXRpdGxlLWljb24td2lkdGgpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxufVxcblxcbi50b2RvIHtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi50b2RvLW5hbWUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4udG9kbyAuaWNvbi1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRvZG8gaW1nIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLXRpdGxlLWljb24td2lkdGgpICogMC44KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS10aXRsZS1pY29uLXdpZHRoKSAqIDAuOCk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHNCQUFzQjs7RUFFdEIseUNBQXlDO0VBQ3pDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztBQUVmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxZQUFZO0FBQ2Q7OztBQUdBLDJDQUEyQztBQUMzQztFQUNFLGlDQUFpQztFQUNqQyw2QkFBNkI7QUFDL0I7OztBQUdBLDJDQUEyQztBQUMzQztFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdHQUFnRztFQUNoRywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMERBQTBEO0VBQzFELHFCQUFxQjtFQUNyQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRGQUE0RjtFQUM1RixtREFBbUQ7RUFDbkQsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7OztFQUdYLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsZ0dBQWdHO0FBQ2xHOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQywyQ0FBMkM7RUFDM0MsZ0dBQWdHO0FBQ2xHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmZhbWlseT1Tb3VyY2UrQ29kZStQcm86d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1taW4td2lkdGg6IDEzMTBweDtcXG4gIC0tYmctc2lkZS1oZWFkZXI6ICMzZTNlM2U7XFxuICAtLWJnLWNvbG9yOiAjODg4ODg4O1xcbiAgLS1iZy1saXN0OiAjM2UzZTNlO1xcbiAgLS10aXRsZS1pY29uLXdpZHRoOiAxLjVyZW07XFxuICAtLWhlYWRlci1pY29uLXdpZHRoOiAyLjJyZW07XFxuICAtLWxpc3Qtd2lkdGg6IDM1MHB4O1xcbiAgLS1saXN0LXBhZGRpbmc6IDIwcHg7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcblxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzAwcHgsIDAuMjVmcikgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0gU0lERUJBUiBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0gUFJPSkVDVCBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5wcm9qZWN0LXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgd2lkdGg6IHZhcigtLWhlYWRlci1pY29uLXdpZHRoKTtcXG59XFxuXFxuLmhlYWRlci1pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgdmFyKC0taGVhZGVyLWljb24td2lkdGgpKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChyZXBlYXQoMiwgdmFyKC0tbGlzdC13aWR0aCkpLCByZXBlYXQoNCwgKC0tbGlzdC13aWR0aCkpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIHZhcigtLWxpc3Qtd2lkdGgpKTtcXG4gIHBhZGRpbmc6IHZhcigtLWxpc3QtcGFkZGluZyk7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogd2lkdGg6IHZhcigtLWxpc3Qtd2lkdGgpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlzdCk7XFxuICBwYWRkaW5nOiAyNXB4IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgXFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcblxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLmljb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogdmFyKC0tdGl0bGUtaWNvbi13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLXRpdGxlLWljb24td2lkdGgpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxufVxcblxcbi50b2RvIHtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi50b2RvLW5hbWUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4udG9kbyAuaWNvbi1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRvZG8gaW1nIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLXRpdGxlLWljb24td2lkdGgpICogMC44KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS10aXRsZS1pY29uLXdpZHRoKSAqIDAuOCk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbkZhY3RvcnkgZnVuY3Rpb24gdG8gcmV0dXJuIGEgcHJvamVjdCBvYmplY3Rcbk9BTCAxNi0wMi0yMDIzXG5WZXJzaW9uIDAuMSBnZW5lc2lzXG5cblRoaXMgZnVuY3Rpb24gY2FsbGVkIGJ5IGluZGV4LmpzIHRvIGNyZWF0ZSBhbmQgcmV0dXJuIGEgdG9kb0xpc3RcblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFxuKi9cblxuaW1wb3J0IHsgY3JlYXRvciwgcmVtb3ZlciB9IGZyb20gXCIuL3RvZG9Qcm90b1wiO1xuaW1wb3J0IHRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IHByb2plY3QgPSAoXG4gIG5hbWUsXG4gIGlkLFxuICBpbmZvLFxuICB0eXBlID0gXCJwcm9qZWN0XCIsXG4gIGFycmF5TmFtZSA9IFwibGlzdEFycmF5XCIsXG4gIG9iaiA9IHRvZG9MaXN0XG4pID0+IHtcbiAgY29uc3Qge1xuICAgIHRvZG9BcnJheTogbGlzdEFycmF5LFxuICAgIGFkZEl0ZW0sXG4gICAgLi4ucmVzdFxuICB9ID0gdG9kb0xpc3QobmFtZSwgaWQsIGluZm8sIHR5cGUsIGFycmF5TmFtZSk7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIC4uLnJlc3QsXG4gICAgbGlzdEFycmF5LFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmNyZWF0b3Ioc3RhdGUsIGFycmF5TmFtZSwgb2JqKSxcbiAgICAuLi5yZW1vdmVyKHN0YXRlLCBhcnJheU5hbWUpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsIi8qIFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbkZhY3RvcnkgZnVuY3Rpb24gdG8gcmV0dXJuIGEgdG9kb0l0ZW0gb2JqZWN0XG5PQUwgMTUtMDItMjAyM1xuVmVyc2lvbiAwLjEgZ2VuZXNpc1xuXG5UaGlzIGZ1bmN0aW9uIGNhbGxlZCBieSBwcm9qZWN0IG9yIHRvZG9MaXN0IGNvZGUgdG8gY3JlYXRlIGFuZCByZXR1cm4gYSB0b2RvSXRlbVxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXG4qL1xuXG5pbXBvcnQgeyB0b2RvUHJvdG8gfSBmcm9tIFwiLi90b2RvUHJvdG9cIjtcblxuY29uc3QgdG9kb0l0ZW0gPSAoXG4gIG5hbWUsXG4gIGlkLFxuICBpbmZvLFxuICB0eXBlID0gXCJ0b2RvXCIsXG4gIGR1ZURhdGUgPSBudWxsLFxuICBwcmlvcml0eSA9IFwibm9uZVwiLFxuICBjaGVja2xpc3QgPSBbXSxcbiAgc3RhdHVzID0gXCJwZW5kaW5nXCJcbikgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICAuLi50b2RvUHJvdG8obmFtZSwgaWQsIGluZm8sIHR5cGUpLFxuICAgIGNyZWF0aW9uRGF0ZTogbmV3IERhdGUoKSxcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrbGlzdCxcbiAgICBzdGF0dXMsXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvSXRlbTtcbiIsIi8qIFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbkZhY3RvcnkgZnVuY3Rpb24gdG8gcmV0dXJuIGEgdG9kb0xpc3Qgb2JqZWN0XG5PQUwgMTUtMDItMjAyM1xuVmVyc2lvbiAwLjEgZ2VuZXNpc1xuXG5UaGlzIGZ1bmN0aW9uIGNhbGxlZCBieSBwcm9qZWN0IGNvZGUgdG8gY3JlYXRlIGFuZCByZXR1cm4gYSB0b2RvTGlzdC5cblRoZSByZXR1cm5lZCBvYmplY3QgaW5jbHVkZXMgYW4gYXJyYXkgb2YgdG9kb0l0ZW1zLCBuYW1lLCBpbmZvIGFuZFxuZnVuY3Rpb25zIGZvciBhZGRpbmcgYW5kIHJlbW92aW5nIHRvZG9JdGVtcyBmcm9tIGFycmF5LlxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXG4qL1xuXG5pbXBvcnQgeyB0b2RvUHJvdG8sIGNyZWF0b3IsIHJlbW92ZXIgfSBmcm9tIFwiLi90b2RvUHJvdG9cIjtcbmltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuXG4vLyBjb25zdCBuYW1lVXBkYXRlciA9IChzdGF0ZSkgPT4gKHtcbi8vICAgdXBkYXRlTmFtZXM6ICgpID0+IHtcbi8vICAgICBjb25zdCB7IHRvZG9BcnJheSB9ID0gc3RhdGU7XG5cbi8vICAgICB0b2RvQXJyYXkubWFwKChvYmopID0+IHtcbi8vICAgICAgIG9iai5pZCA9IDY7XG4vLyAgICAgfSk7XG4vLyAgIH0sXG4vLyB9KTtcblxuY29uc3QgdG9kb0xpc3QgPSAoXG4gIG5hbWUsXG4gIGlkLFxuICBpbmZvLFxuICB0eXBlID0gXCJsaXN0XCIsXG4gIGFycmF5TmFtZSA9IFwidG9kb0FycmF5XCIsXG4gIG9iaiA9IHRvZG9JdGVtXG4pID0+IHtcbiAgY29uc3QgdG9kb0FycmF5ID0gW107XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIC4uLnRvZG9Qcm90byhuYW1lLCBpZCwgaW5mbywgdHlwZSksXG4gICAgdG9kb0FycmF5LFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmNyZWF0b3Ioc3RhdGUsIGFycmF5TmFtZSwgb2JqKSxcbiAgICAuLi5yZW1vdmVyKHN0YXRlLCBhcnJheU5hbWUpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0xpc3Q7XG4iLCJjb25zdCBnZXREZWZhdWx0TmFtZSA9IChhcnJheUxlbmd0aCkgPT4gYEl0ZW0gJHthcnJheUxlbmd0aCArIDF9YDtcblxuY29uc3QgY3JlYXRvciA9IChzdGF0ZSwgYXJyYXksIG9iamVjdCkgPT4gKHtcbiAgY3JlYXRlOiAoXG4gICAgb2JqTmFtZSA9IGdldERlZmF1bHROYW1lKHN0YXRlW2Ake2FycmF5fWBdLmxlbmd0aCksXG4gICAgaWQgPSBgJHtzdGF0ZS5pZH1fdGQke3N0YXRlW2Ake2FycmF5fWBdLmxlbmd0aCArIDF9YFxuICAgIC8vIGlkID0gc3RhdGVbYCR7YXJyYXl9YF0ubGVuZ3RoICsgMSxcbiAgKSA9PiB7XG4gICAgc3RhdGVbYCR7YXJyYXl9YF0ucHVzaChvYmplY3Qob2JqTmFtZSwgaWQpKTtcbiAgfSxcbn0pO1xuXG5jb25zdCByZW1vdmVyID0gKHN0YXRlLCBhcnJheSkgPT4gKHtcbiAgZGVsZXRlSXRlbTogKGlkKSA9PiBzdGF0ZVtgJHthcnJheX1gXS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgIT09IGlkKSxcbn0pO1xuXG5jb25zdCB0b2RvUHJvdG8gPSAobmFtZSwgaWQsIGluZm8sIHR5cGUpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgbmFtZSxcbiAgICBpZCxcbiAgICBpbmZvLFxuICAgIHR5cGUsXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gIH07XG59O1xuXG5leHBvcnQgeyB0b2RvUHJvdG8sIGNyZWF0b3IsIHJlbW92ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHBsdXNJY29uIGZyb20gXCIuL2ltYWdlcy9wbHVzLWJveC1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IHRyYXNoQ2FuSWNvbiBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgZmlsZUVkaXRJY29uIGZyb20gXCIuL2ltYWdlcy9maWxlLWVkaXQtb3V0bGluZS5zdmdcIjtcbmltcG9ydCB0b2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBsaXN0QXJyYXkgPSBbXTtcblxuY29uc3QgaGVhZGVyVGl0bGVFbGVtZW50ID0gXCJoMlwiO1xuY29uc3QgbGlzdFRpdGxlRWxlbWVudCA9IFwiaDNcIjtcbmNvbnN0IHRvZG9OYW1lRWxlbWVudCA9IFwiaDVcIjtcblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgSFRNTCBzZXR1cFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi8vIEdldCBjb250ZW50IGRpdiBlbGVtZW50XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4vLyBDcmVhdGUgY29udGVudCBjb250YWluZXJcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1jb250YWluZXJcIik7XG5cbi8vIENyZWF0ZSBzaWRlYmFyIHNlY3Rpb25cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuLy8gQ3JlYXRlIHByb2plY3Qgdmlld1xuY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdFZpZXcuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtdmlld1wiKTtcblxuLy8gQ3JlYXRlIHByb2plY3QgdmlldyBoZWFkZXJcbmNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXJcIik7XG4vLyBBZGQgdGl0bGUgdG8gcHJvamVjdCBoZWFkZXJcbmNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoZWFkZXJUaXRsZUVsZW1lbnQpO1xucHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4vLyBBZGQgaWNvbiBjb250YWluZXIgdG8gaGVhZGVyXG5jb25zdCBoZWFkZXJJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlYWRlckljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1pY29uLWNvbnRhaW5lclwiKTtcbnByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySWNvbkNvbnRhaW5lcik7XG4vLyBBZGQgaWNvbnMgdG8gY29udGFpbmVyXG5jb25zdCBoZWFkZXJBZGRJY29uID0gbmV3IEltYWdlKCk7XG5oZWFkZXJBZGRJY29uLnNyYyA9IHBsdXNJY29uO1xuaGVhZGVyQWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLWljb25cIik7XG4vLyBoZWFkZXJBZGRJY29uLnNldEF0dHJpYnV0ZShcInByb2pJZFwiLCBcInByb2oxXCIpO1xuaGVhZGVyQWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicHJvalwiKTtcbmhlYWRlckljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQWRkSWNvbik7XG5jb25zdCBoZWFkZXJFZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuaGVhZGVyRWRpdEljb24uc3JjID0gZmlsZUVkaXRJY29uO1xuaGVhZGVyRWRpdEljb24uY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcbi8vIGhlYWRlckVkaXRJY29uLnNldEF0dHJpYnV0ZShcInByb2pJZFwiLCBcInByb2pcIik7XG5oZWFkZXJFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicHJvalwiKTtcbmhlYWRlckljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRWRpdEljb24pO1xuY29uc3QgaGVhZGVyUmVtb3ZlSWNvbiA9IG5ldyBJbWFnZSgpO1xuaGVhZGVyUmVtb3ZlSWNvbi5zcmMgPSB0cmFzaENhbkljb247XG5oZWFkZXJSZW1vdmVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWwtaWNvblwiKTtcbmhlYWRlclJlbW92ZUljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInByb2pcIik7XG5oZWFkZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclJlbW92ZUljb24pO1xuXG4vLyBBZGQgcHJvamVjdCBoZWFkZXIgdG8gcHJvamVjdCB2aWV3XG5wcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuLy8gQ3JlYXRlIHByb2plY3QgdmlldyBtYWluIHNlY3Rpb25cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4vLyBBZGQgcHJvamVjdCBjb250YWluZXIgdG8gcHJvamVjdCB2aWV3XG5wcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuLy8gQWRkIGVsZW1lbnRzIHRvIGRvY3VtZW50XG5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Vmlldyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBUb2RvL2xpc3QgbG9naWNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4vKlxuICBfX19PQkpFQ1QgTE9HSUNfX19cbiovXG4vLyBHZXQgb2JqZWN0IGZyb20gYXJyYXlcbmZ1bmN0aW9uIHJldHVybk9iamVjdEZyb21BcnJheShpZCwgYXJyYXkpIHtcbiAgLy8gRmlsdGVyIHRocm91Z2ggYXJyYXkgb2YgbGlzdHMgdG8gZmluZCBtYXRjaGluZyBsaXN0IG9iamVjdFxuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gYXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBpZCk7XG4gIC8vIENoZWNrIGZvciB1bmlxdWVuZXNzXG4gIGlmIChmaWx0ZXJlZEFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICAvLyBJZiBtb3JlIHRoYW4gb25lIGxpc3Qgb2JqZWN0IGZvdW5kIHRocm93IGVycm9yXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7XG4gICAgdGhyb3cgRXJyb3IoXCJFUlJPUiEgTW9yZSB0aGFuIG9uZSByZWxhdGl2ZSBmb3VuZC5cIik7IC8vIEVycm9yIGlmIG1vcmUgdGhhdCBvbmUgcmVsYXRpdmUgb2JqZWN0IGZvdW5kXG4gIH0gZWxzZSBpZiAoZmlsdGVyZWRBcnJheS5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJFUlJPUiEgTm8gcmVsYXRpdmUgZm91bmQuXCIpOyAvLyBFcnJvciBpZiBubyByZWxhdGl2ZSBvYmplY3QgZm91bmRcbiAgfSBlbHNlIHtcbiAgICAvLyBEZXN0cnVjdHVyZSBhcnJheSBvZiBvYmplY3RzXG4gICAgY29uc3QgW3JlbGF0aXZlXSA9IGZpbHRlcmVkQXJyYXk7XG4gICAgLy8gUmV0dXJuIGxpc3Qgb2JqZWN0XG4gICAgcmV0dXJuIHJlbGF0aXZlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU9iakZyb21MaXN0KGlkLCBsaXN0LCBwYXJlbnRPYmopIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGxpc3QuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmlkICE9PSBpZCk7XG59XG5cbi8qXG4gIF9fX0hBTkRMRVIgRVZFTlRTX19fIChmb3IgZXZlbnQgbGlzdGVuZXJzKVxuKi9cbi8vIEhhbmRsZSB0b2RvIGFkZCBldmVudFxuZnVuY3Rpb24gaGFuZGxlVG9kb0FkZCh0YXJnZXRJZCkge1xuICAvLyBHZXQgbGlzdCBvYmplY3RcbiAgY29uc3QgbGlzdCA9IHJldHVybk9iamVjdEZyb21BcnJheSh0YXJnZXRJZCwgbGlzdEFycmF5KTtcbiAgLy8gQ3JlYXRlIGEgdG9kbyBpdGVtXG4gIGxpc3QuY3JlYXRlKCk7XG4gIC8vIC8vIERpc3BsYXkgbGlzdCBpbiBET01cbiAgLy8gdXBkYXRlTGlzdFZpZXcodGFyZ2V0SWQsIGxpc3QpO1xuICAvLyBVcGRhdGUgdmlldyBvZiBsaXN0cyBpbiBhcnJheSBpbiBET01cbiAgdXBkYXRlUHJvalZpZXcodGFyZ2V0SWQsIGxpc3RBcnJheSk7XG59XG5cbi8vIEhhbmRsZSBsaXN0IGFkZCBldmVudFxuZnVuY3Rpb24gaGFuZGxlTGlzdEFkZCh0YXJnZXRJZCkge1xuICBjb25zb2xlLmxvZyh0YXJnZXRJZCk7XG59XG5cbi8vIEhhbmRsZSB0b2RvIGRlbGV0ZSBldmVudFxuZnVuY3Rpb24gaGFuZGxlVG9kb0RlbCh0YXJnZXRJZCwgcGFyZW50SWQpIHtcbiAgLy8gRmlsdGVyIHRocm91Z2ggYXJyYXkgb2YgbGlzdHMgdG8gZmluZCBtYXRjaGluZyBsaXN0IG9iamVjdFxuICBjb25zdCBsaXN0ID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KHBhcmVudElkLCBsaXN0QXJyYXkpO1xuICAvLyBSZW1vdmUgdGhlIGZpcnN0IDQgY2hhcmFjdGVycyBmcm9tIHRhcmdldElkIHN0cmluZyAoRmlyc3QgNCBjaGFyYWN0ZXJzOiBcImRlbC1cIilcbiAgY29uc3QgdG9kb09iaklkID0gdGFyZ2V0SWQuc3Vic3RyaW5nKDQpO1xuICAvLyBSZW1vdmUgdGhlIHRvZG8gb2JqZWN0IGZyb20gYXJyYXkgaW4gcGFyZW50IGxpc3Qgb2JqZWN0XG4gIGxpc3QudG9kb0FycmF5ID0gbGlzdC50b2RvQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmlkICE9PSB0b2RvT2JqSWQpO1xuICAvLyBVcGRhdGUgbGlzdCB2aWV3IGluIERPTVxuICB1cGRhdGVQcm9qVmlldyhwYXJlbnRJZCwgbGlzdEFycmF5KTtcbn1cblxuLy8gSGFuZGxlIGxpc3QgZGVsZXRlIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVMaXN0RGVsKHRhcmdldElkLCBhcnJheSkge1xuICAvLyBGaWx0ZXIgdGhyb3VnaCBhcnJheSBvZiBsaXN0cyB0byBmaW5kIG1hdGNoaW5nIGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGxpc3QgPSByZXR1cm5PYmplY3RGcm9tQXJyYXkodGFyZ2V0SWQsIGFycmF5KTtcbiAgLy8gUmVtb3ZlIHRoZSBsaXN0IGZyb20gdGhlIGxpc3QgYXJyYXlcbiAgYXJyYXkgPSBhcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgIT09IHRhcmdldElkKTtcbiAgLy8gVXBkYXRlIHZpZXcgb2YgbGlzdHMgaW4gYXJyYXkgaW4gRE9NXG4gIHVwZGF0ZVByb2pWaWV3KHRhcmdldElkLCBhcnJheSk7XG59XG5cbi8qXG4gIF9fX0VWRU5UIExJU1RFTkVSU19fX1xuKi9cbi8vIEdsb2JhbCBldmVudCBsaXN0ZW5lclxuZnVuY3Rpb24gYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcih0eXBlLCBzZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkgY2FsbGJhY2soZSk7XG4gIH0pO1xufVxuXG4vLyBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbmFsaXR5IGZvciBhZGQgaWNvbnNcbmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcIi5hZGQtaWNvblwiLCAoZSkgPT4ge1xuICAvLyBTZXQgdmFyaWFibGVzIGZvciB0aGUgRE9NIGVsZW1lbnQncyB0eXBlIGFuZCBpZCBhdHRyaWJ1dGVzXG4gIGNvbnN0IHRhcmdldFR5cGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICBjb25zdCB0YXJnZXRJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImxpc3RJZFwiKTtcblxuICAvLyBDaGVjayBpZiBlbGVtZW50IHR5cGUgaXMgYSBsaXN0XG4gIGlmICh0YXJnZXRUeXBlID09PSBcImxpc3RcIikge1xuICAgIGhhbmRsZVRvZG9BZGQodGFyZ2V0SWQpO1xuICB9IGVsc2UgaWYgKHRhcmdldFR5cGUgPT09IFwicHJvalwiKSB7XG4gICAgaGFuZGxlTGlzdEFkZCh0YXJnZXRJZCk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbmFsaXR5IGZvciBlZGl0IGljb25zXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXCIuZWRpdC1pY29uXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFZGl0IHRhcmdldDpgKTtcbiAgY29uc29sZS5sb2coZS50YXJnZXQpO1xufSk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uYWxpdHkgZm9yIGRlbGV0ZSBpY29uc1xuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFwiLmRlbC1pY29uXCIsIChlKSA9PiB7XG4gIC8vIEdldCB0YXJnZXQgdHlwZVxuICBjb25zdCB0YXJnZXRUeXBlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcbiAgLy8gR2V0IHRhcmdldCBJRFxuICBjb25zdCB0YXJnZXRJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAvLyBHZXQgcGFyZW50IElEXG4gIGNvbnN0IHBhcmVudElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibGlzdElkXCIpO1xuICAvLyBIYW5kbGUgZGVwZW5kaW5nIG9uIHRhcmdldCB0eXBlXG4gIGlmICh0YXJnZXRUeXBlID09PSBcInRvZG9cIikge1xuICAgIGhhbmRsZVRvZG9EZWwodGFyZ2V0SWQsIHBhcmVudElkKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBcImxpc3RcIikge1xuICAgIGhhbmRsZUxpc3REZWwocGFyZW50SWQsIGxpc3RBcnJheSk7XG4gIH1cbn0pO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBMaXN0IGNyZWF0ZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgdG9kbyBsaXN0XG5jb25zdCBjcmVhdGVOZXdMaXN0ID0gKG5hbWUgPSBcIk5ldyBMaXN0XCIsIGlkID0gdW5kZWZpbmVkLCBpbmZvID0gdW5kZWZpbmVkKSA9PiB7XG4gIGNvbnN0IG5ld0xpc3QgPSB0b2RvTGlzdChuYW1lLCBgbGlzdCR7aWR9YCwgaW5mbyk7XG4gIGxpc3RBcnJheS5wdXNoKG5ld0xpc3QpO1xuICAvLyBjb25zb2xlLnRhYmxlKGxpc3RBcnJheSk7XG5cbiAgcmV0dXJuIG5ld0xpc3Q7XG59O1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBMaXN0IGRpc3BsYXlcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IHRvZG8gbGlzdFxuY29uc3QgZGlzcGxheU5ld0xpc3QgPSAobGlzdCkgPT4ge1xuICAvLyBDcmVhdGUgbmV3IGVsZW1lbnRcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vIEFzc2lnbiBjbGFzcyBhbmQgaWQgbmFtZVxuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbGlzdElkTmFtZSA9IGAke2xpc3QuaWR9YDtcbiAgbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBsaXN0SWROYW1lKTtcblxuICAvLyBEaXNwbGF5IG5hbWUgYXMgdGl0bGVcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGxpc3RUaXRsZUVsZW1lbnQpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibGlzdC10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAvLyBEaXNwbGF5IGljb25zXG4gIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYWRkSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBhZGRJY29uLnNyYyA9IHBsdXNJY29uO1xuICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGQtaWNvblwiKTtcbiAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgYWRkLSR7bGlzdElkTmFtZX1gKTtcbiAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibGlzdFwiKTtcbiAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJsaXN0SWRcIiwgbGlzdElkTmFtZSk7XG4gIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGVkaXRJY29uLnNyYyA9IGZpbGVFZGl0SWNvbjtcbiAgZWRpdEljb24uY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcbiAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGVkaXQtJHtsaXN0SWROYW1lfWApO1xuICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibGlzdFwiKTtcbiAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgY29uc3QgcmVtb3ZlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICByZW1vdmVJY29uLnNyYyA9IHRyYXNoQ2FuSWNvbjtcbiAgcmVtb3ZlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsLWljb25cIik7XG4gIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbC0ke2xpc3RJZE5hbWV9YCk7XG4gIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImxpc3RcIik7XG4gIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUljb24pO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcblxuICAvLyBEaXNwbGF5IGxpc3QgY29udGVudHNcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICBsaXN0LnRvZG9BcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gVG9kbyBib3hcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvSWROYW1lID0gYCR7ZWxlbWVudC5pZH1gO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgdG9kby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0b2RvSWROYW1lKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgIC8vIENoZWNrYm94XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBjaGstJHt0b2RvSWROYW1lfWApO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIC8vIFRvZG8gbmFtZVxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0b2RvTmFtZUVsZW1lbnQpO1xuICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWVcIik7XG4gICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50LmlkO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgIC8vIFRvZG8gaWNvbnNcbiAgICBjb25zdCB0b2RvSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9JY29ucy5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kb0VkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2RvRWRpdC5zcmMgPSBmaWxlRWRpdEljb247XG4gICAgdG9kb0VkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcbiAgICB0b2RvRWRpdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZWRpdC0ke3RvZG9JZE5hbWV9YCk7XG4gICAgdG9kb0VkaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRvZG9cIik7XG4gICAgdG9kb0VkaXQuc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICAgIHRvZG9JY29ucy5hcHBlbmRDaGlsZCh0b2RvRWRpdCk7XG4gICAgY29uc3QgdG9kb0RlbCA9IG5ldyBJbWFnZSgpO1xuICAgIHRvZG9EZWwuc3JjID0gdHJhc2hDYW5JY29uO1xuICAgIHRvZG9EZWwuY2xhc3NMaXN0LmFkZChcImRlbC1pY29uXCIpO1xuICAgIHRvZG9EZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbC0ke3RvZG9JZE5hbWV9YCk7XG4gICAgdG9kb0RlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidG9kb1wiKTtcbiAgICB0b2RvRGVsLnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWROYW1lKTtcbiAgICB0b2RvSWNvbnMuYXBwZW5kQ2hpbGQodG9kb0RlbCk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvSWNvbnMpO1xuICAgIC8vIEFkZCB0b2RvIHRvIGNvbnRhaW5lclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG4gIH0pO1xuXG4gIC8vIEFkZCBsaXN0IGNvbnRhaW5lciB0byBET01cbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbn07XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIERPTSB1cGRhdGVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgbGlzdCBmcm9tIERPTVxuZnVuY3Rpb24gcmVtb3ZlTGlzdEZyb21ET00obGlzdCkge1xuICAvLyBHZXQgcHJvamVjdCBlbGVtZW50IGZyb20gRE9NXG4gIGNvbnN0IHByb2ogPSBsaXN0LnBhcmVudEVsZW1lbnQ7XG4gIC8vIFJlbW92ZSB0aGUgbGlzdCBET00gZWxlbWVudCBmcm9tIHRoZSBwcm9qZWN0IERPTSBlbGVtZW50XG4gIHByb2oucmVtb3ZlQ2hpbGQobGlzdCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBsaXN0IHRvIERPTVxuZnVuY3Rpb24gYWRkTGlzdFRvRE9NKGxpc3QpIHtcbiAgLy8gRGlzcGxheSBsaXN0IGluIERPTVxuICBkaXNwbGF5TmV3TGlzdChsaXN0KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHByb2plY3Qgdmlld1xuZnVuY3Rpb24gdXBkYXRlUHJvalZpZXcobGlzdElkLCBhcnJheSkge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgYXJyYXkgZW1wdHlcbiAgICAvLyBHZXQgRE9NIGVsZW1lbnQgZm9yIGxpc3RcbiAgICBjb25zdCBsaXN0RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdElkKTtcbiAgICAvLyBSZW1vdmUgbGlzdCBET00gZWxlbWVudCBmcm9tIHByb2plY3QgRE9NIGVsZW1lbnRcbiAgICByZW1vdmVMaXN0RnJvbURPTShsaXN0RE9NKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGb3IgZWFjaCBlbGVtZW50IGluIHRoZSBsaXN0IGFycmF5XG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgLy8gR2V0IG9sZCBET00gZWxlbWVudCBmb3IgdGhpcyBhcnJheSBlbGVtZW50XG4gICAgICBjb25zdCBvbGRET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkKTtcbiAgICAgIC8vIFJlbW92ZSBvbGQgRE9NIGVsZW1lbnRcbiAgICAgIHJlbW92ZUxpc3RGcm9tRE9NKG9sZERPTSk7XG4gICAgICAvLyBBZGQgbmV3IERPTSBlbGVtZW50XG4gICAgICBhZGRMaXN0VG9ET00oZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgSW5pdFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmNvbnN0IG15VG9kb0xpc3QgPSBjcmVhdGVOZXdMaXN0KFwiTXkgZmlyc3QgbGlzdFwiLCAxLCBcIlRoaXMgaXMgbXkgZmlyc3QgbGlzdFwiKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgbXlUb2RvTGlzdC5jcmVhdGUoKTtcbn1cblxuZGlzcGxheU5ld0xpc3QobXlUb2RvTGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=