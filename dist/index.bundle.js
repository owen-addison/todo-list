/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --min-width: 1310px;\n  --bg-side-header: #3e3e3e;\n  --bg-color: #888888;\n  --bg-list: #3e3e3e;\n  --title-icon-width: 1.5rem;\n  --header-icon-width: 2.2rem;\n  --list-width: 350px;\n  --list-padding: 20px;\n  --header-height: 100px;\n  --reg-font: 'Source Code Pro', monospace;\n  --font-col: whitesmoke;\n  --title-font: 'Press Start 2P', cursive;\n\n  font-family: 'Source Code Pro', monospace;\n  color: whitesmoke;\n}\n\nbody {\n  margin: 0;\n}\n\nh2, h3, h4, h5, h6 {\n  margin: 0px;\n}\n\n.content {\n  width: 100vw;\n  height: 100vh;\n\n}\n\n.content-container {\n  display: grid;\n  grid-template-columns: minmax(300px, 0.25fr) 1fr;\n  height: 100%;\n}\n\n\n/* ------------ SIDEBAR VIEW ------------ */\n.sidebar {\n  background: var(--bg-side-header);\n  border-right: 2px solid white;\n}\n\n.sidebar-title {\n  font-family: var(--title-font);\n  font-size: large;\n}\n\n.sidebar-container {\n  display: grid;\n  gap: 30px;\n  padding: 30px;\n  margin-top: 30px;\n}\n\n.projects-sidebar {\n  display: grid;\n  gap: 20px;\n}\n\n.sb-button-container {\n  display: grid;\n  align-content: center;\n  /* justify-content: center; */\n  width: 100%;\n}\n\n.sb-add-button {\n  font-family: var(--title-font);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--font-col);\n  background: var(--bg-side-header);\n  border: 3px solid var(--font-col);\n  padding: 1.4em 2.4em;\n  border-radius: 16px;\n}\n\n.sb-button:hover {\n  color: var(--bg-side-header);\n  background-color: var(--font-col);\n  border: 3px solid var(--bg-side-header);\n}\n\n/* ------------ PROJECT VIEW ------------ */\n.project-view {\n  width: 100%;\n  background-color: var(--bg-color);\n}\n\n.project-header {\n  display: grid;\n  grid-template-columns: 1fr 200px;\n  align-content: center;\n  border-bottom: 2px solid white;\n  background: var(--bg-side-header);\n  height: var(--header-height);\n  /* width: 100%; */\n}\n\n.header-title {\n  font-family: var(--title-font);\n  font-size: larger;\n  display: grid;\n  align-content: center;\n  padding-left: 2em;\n}\n\n.project-header img {\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n  width: var(--header-icon-width);\n}\n\n.header-icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, var(--header-icon-width));\n  align-content: center;\n  gap: 20px;\n  width: fit-content;\n}\n\n.project-container {\n  display: grid;\n  /* grid-template-columns: minmax(repeat(2, var(--list-width)), repeat(4, (--list-width))); */\n  grid-template-columns: repeat(3, var(--list-width));\n  padding: var(--list-padding);\n}\n\n#empty {\n  font-family: var(--title-font);\n  font-size: larger;\n  grid-template-columns: auto;\n  /* width: fit-content; */\n}\n\n.list-container {\n  display: grid;\n  gap: 10px;\n  /* width: var(--list-width); */\n  background-color: var(--bg-list);\n  padding: 25px 30px;\n  border-radius: 20px;\n  \n  border: 2px solid white;\n}\n\n.title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n\n  /* border: 1px solid blue; */\n}\n\n.icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.title-container img {\n  width: var(--title-icon-width);\n  height: var(--title-icon-width);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.list-title {\n  margin: 0;\n}\n\n.todo-container {\n  display: grid;\n  gap: 10px;\n  /* border: 1px solid green; */\n}\n\n.todo {\n  /* width: 100%; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* border: 1px solid red; */\n}\n\n.todo-name {\n  width: 70%;\n  height: fit-content;\n  /* border: 1px solid blue; */\n}\n\n.todo .icon-container {\n  /* border: 1px solid green; */\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.todo img {\n  width: calc(var(--title-icon-width) * 0.8);\n  height: calc(var(--title-icon-width) * 0.8);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.form-background {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  position: absolute;\n  /* top: 50%; */\n  /* left: 50%; */\n  width: 100%;\n  height: 100%;\n  background: #3e3e3e6e;\n}\n\n.form-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  background-color: #3e3e3e;\n  padding: 100px;\n  border: var(--font-col) solid 2px;\n  border-radius: 20px;\n}\n\n.form-div {\n  display: grid;\n  grid-template-columns: 100px auto;\n  gap: 10px;\n}\n\n#todo-name {\n  width: 80px;\n}\n\n#todo-priority {\n  width: 90px;\n}\n\n.form-button-div {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  gap: 20px;\n  width: 100%;\n  justify-content: center;\n  align-content: center;\n  margin-top: 20px;\n}\n\n.edit-form-btn {\n  padding: 0.4em 1em;\n  border-radius: 0.6em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Code+Pro:wght@300;400;500;600&display=swap');\n\n:root {\n  --min-width: 1310px;\n  --bg-side-header: #3e3e3e;\n  --bg-color: #888888;\n  --bg-list: #3e3e3e;\n  --title-icon-width: 1.5rem;\n  --header-icon-width: 2.2rem;\n  --list-width: 350px;\n  --list-padding: 20px;\n  --header-height: 100px;\n  --reg-font: 'Source Code Pro', monospace;\n  --font-col: whitesmoke;\n  --title-font: 'Press Start 2P', cursive;\n\n  font-family: 'Source Code Pro', monospace;\n  color: whitesmoke;\n}\n\nbody {\n  margin: 0;\n}\n\nh2, h3, h4, h5, h6 {\n  margin: 0px;\n}\n\n.content {\n  width: 100vw;\n  height: 100vh;\n\n}\n\n.content-container {\n  display: grid;\n  grid-template-columns: minmax(300px, 0.25fr) 1fr;\n  height: 100%;\n}\n\n\n/* ------------ SIDEBAR VIEW ------------ */\n.sidebar {\n  background: var(--bg-side-header);\n  border-right: 2px solid white;\n}\n\n.sidebar-title {\n  font-family: var(--title-font);\n  font-size: large;\n}\n\n.sidebar-container {\n  display: grid;\n  gap: 30px;\n  padding: 30px;\n  margin-top: 30px;\n}\n\n.projects-sidebar {\n  display: grid;\n  gap: 20px;\n}\n\n.sb-button-container {\n  display: grid;\n  align-content: center;\n  /* justify-content: center; */\n  width: 100%;\n}\n\n.sb-add-button {\n  font-family: var(--title-font);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--font-col);\n  background: var(--bg-side-header);\n  border: 3px solid var(--font-col);\n  padding: 1.4em 2.4em;\n  border-radius: 16px;\n}\n\n.sb-button:hover {\n  color: var(--bg-side-header);\n  background-color: var(--font-col);\n  border: 3px solid var(--bg-side-header);\n}\n\n/* ------------ PROJECT VIEW ------------ */\n.project-view {\n  width: 100%;\n  background-color: var(--bg-color);\n}\n\n.project-header {\n  display: grid;\n  grid-template-columns: 1fr 200px;\n  align-content: center;\n  border-bottom: 2px solid white;\n  background: var(--bg-side-header);\n  height: var(--header-height);\n  /* width: 100%; */\n}\n\n.header-title {\n  font-family: var(--title-font);\n  font-size: larger;\n  display: grid;\n  align-content: center;\n  padding-left: 2em;\n}\n\n.project-header img {\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n  width: var(--header-icon-width);\n}\n\n.header-icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, var(--header-icon-width));\n  align-content: center;\n  gap: 20px;\n  width: fit-content;\n}\n\n.project-container {\n  display: grid;\n  /* grid-template-columns: minmax(repeat(2, var(--list-width)), repeat(4, (--list-width))); */\n  grid-template-columns: repeat(3, var(--list-width));\n  padding: var(--list-padding);\n}\n\n#empty {\n  font-family: var(--title-font);\n  font-size: larger;\n  grid-template-columns: auto;\n  /* width: fit-content; */\n}\n\n.list-container {\n  display: grid;\n  gap: 10px;\n  /* width: var(--list-width); */\n  background-color: var(--bg-list);\n  padding: 25px 30px;\n  border-radius: 20px;\n  \n  border: 2px solid white;\n}\n\n.title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n\n  /* border: 1px solid blue; */\n}\n\n.icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.title-container img {\n  width: var(--title-icon-width);\n  height: var(--title-icon-width);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.list-title {\n  margin: 0;\n}\n\n.todo-container {\n  display: grid;\n  gap: 10px;\n  /* border: 1px solid green; */\n}\n\n.todo {\n  /* width: 100%; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* border: 1px solid red; */\n}\n\n.todo-name {\n  width: 70%;\n  height: fit-content;\n  /* border: 1px solid blue; */\n}\n\n.todo .icon-container {\n  /* border: 1px solid green; */\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.todo img {\n  width: calc(var(--title-icon-width) * 0.8);\n  height: calc(var(--title-icon-width) * 0.8);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.form-background {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  position: absolute;\n  /* top: 50%; */\n  /* left: 50%; */\n  width: 100%;\n  height: 100%;\n  background: #3e3e3e6e;\n}\n\n.form-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  background-color: #3e3e3e;\n  padding: 100px;\n  border: var(--font-col) solid 2px;\n  border-radius: 20px;\n}\n\n.form-div {\n  display: grid;\n  grid-template-columns: 100px auto;\n  gap: 10px;\n}\n\n#todo-name {\n  width: 80px;\n}\n\n#todo-priority {\n  width: 90px;\n}\n\n.form-button-div {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  gap: 20px;\n  width: 100%;\n  justify-content: center;\n  align-content: center;\n  margin-top: 20px;\n}\n\n.edit-form-btn {\n  padding: 0.4em 1em;\n  border-radius: 0.6em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayEmptyProjArray": () => (/* binding */ displayEmptyProjArray),
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "setUpDOM": () => (/* binding */ setUpDOM),
/* harmony export */   "updateProjView": () => (/* binding */ updateProjView),
/* harmony export */   "updateSidebarList": () => (/* binding */ updateSidebarList)
/* harmony export */ });
/* harmony import */ var _images_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/plus-box-outline.svg */ "./src/images/plus-box-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg");
/* harmony import */ var _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/file-edit-outline.svg */ "./src/images/file-edit-outline.svg");




/*
-------------------------
DOM SETUP
-------------------------
*/
const sidebarTitleElement = "h2";
const headerTitleElement = "h2";
const listTitleElement = "h3";
const todoNameElement = "h5";

// Function to remove all lists from project view in DOM
function emptySidebarList(sidebarProjList) {
  // Remove all children of project node
  while (sidebarProjList.firstChild) {
    sidebarProjList.removeChild(sidebarProjList.lastChild);
  }
}

function updateSidebarList(projArray) {
  // Get container for projects in sidebar
  const sidebarProjList = document.querySelector(".projects-sidebar");

  // Empty sidebar list
  emptySidebarList(sidebarProjList);

  // For each project in array, add name of project to sidebar proj list div
  projArray.forEach((element) => {
    const projItem = document.createElement(listTitleElement);
    projItem.classList.add("sb-proj-item");
    projItem.textContent = element.name;
    sidebarProjList.appendChild(projItem);
  });
}

function setUpHeader(projectHeader) {
  // Add container for title
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("header-title");
  projectHeader.appendChild(titleContainer);
  // Add title to project header
  const headerTitle = document.createElement(headerTitleElement);
  projectHeader.appendChild(headerTitle);
  // headerTitle.classList.add("header-title");
  titleContainer.appendChild(headerTitle);
  // Add icon container to header
  const headerIconContainer = document.createElement("div");
  headerIconContainer.classList.add("header-icon-container");
  projectHeader.appendChild(headerIconContainer);
  // Add icons to container
  const headerAddIcon = new Image();
  headerAddIcon.src = _images_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  headerAddIcon.classList.add("add-icon");
  // headerAddIcon.setAttribute("projId", "proj1");
  headerAddIcon.setAttribute("type", "proj");
  headerIconContainer.appendChild(headerAddIcon);
  const headerEditIcon = new Image();
  headerEditIcon.src = _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
  headerEditIcon.classList.add("edit-icon");
  // headerEditIcon.setAttribute("projId", "proj");
  headerEditIcon.setAttribute("type", "proj");
  headerIconContainer.appendChild(headerEditIcon);
  const headerRemoveIcon = new Image();
  headerRemoveIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
  headerRemoveIcon.classList.add("del-icon");
  headerRemoveIcon.setAttribute("type", "proj");
  headerIconContainer.appendChild(headerRemoveIcon);
}

function setUpDOM(projArray) {
  // Get content div element
  const content = document.querySelector(".content");

  // Create content container
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  // Create sidebar section
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  // Create sidebar container
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar-container");
  sidebar.appendChild(sidebarContainer);
  // Create title for sidebar
  const sidebarTitle = document.createElement(sidebarTitleElement);
  sidebarTitle.classList.add("sidebar-title");
  sidebarTitle.textContent = "Projects";
  sidebarContainer.appendChild(sidebarTitle);
  // Create container for projects in sidebar
  const sidebarProjList = document.createElement("div");
  sidebarProjList.classList.add("projects-sidebar");
  sidebarContainer.appendChild(sidebarProjList);

  // For each project in array, add name of project to sidebar proj list div
  projArray.forEach((element) => {
    const projItem = document.createElement(listTitleElement);
    projItem.classList.add("sb-proj-item");
    projItem.textContent = element.name;
    sidebarProjList.appendChild(projItem);
  });

  // Add button for creating new projects to sidebar
  const addProjContainer = document.createElement("div");
  addProjContainer.classList.add("sb-button-container");
  const addProjButton = document.createElement("button");
  addProjButton.classList.add("sb-add-button");
  addProjButton.textContent = "Add Project";
  addProjContainer.appendChild(addProjButton);
  sidebarContainer.appendChild(addProjContainer);

  // Create project view
  const projectView = document.createElement("div");
  projectView.classList.add("project-view");

  // Create project view header
  const projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");
  setUpHeader(projectHeader);

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
}

/*
-------------------------
DOM UPDATE
-------------------------
*/
// Function to display todo list
const displayList = (list) => {
  // Get project container
  const projectContainer = document.querySelector(".project-container");

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
  addIcon.src = _images_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  addIcon.classList.add("add-icon");
  addIcon.setAttribute("id", `add-${listIdName}`);
  addIcon.setAttribute("type", "list");
  addIcon.setAttribute("listId", listIdName);
  iconContainer.appendChild(addIcon);
  const editIcon = new Image();
  editIcon.src = _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
  editIcon.classList.add("edit-icon");
  editIcon.setAttribute("id", `edit-${listIdName}`);
  editIcon.setAttribute("type", "list");
  editIcon.setAttribute("listId", listIdName);
  iconContainer.appendChild(editIcon);
  const removeIcon = new Image();
  removeIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
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
    todoName.textContent = element.name;
    todo.appendChild(todoName);
    // Todo icons
    const todoIcons = document.createElement("div");
    todoIcons.classList.add("icon-container");
    const todoEdit = new Image();
    todoEdit.src = _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
    todoEdit.classList.add("edit-icon");
    todoEdit.setAttribute("id", `edit-${todoIdName}`);
    todoEdit.setAttribute("type", "todo");
    todoEdit.setAttribute("listId", listIdName);
    todoIcons.appendChild(todoEdit);
    const todoDel = new Image();
    todoDel.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
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
  ___UPDATE PROJECT VIEW___
*/
// Function to remove all lists from project view in DOM
function emptyProjView(list) {
  // Get project node in DOM
  const projNode = document.querySelector(".project-container");
  // Remove all children of project node
  while (projNode.firstChild) {
    projNode.removeChild(projNode.lastChild);
  }
}

// Function to add list to DOM
function addListToDOM(list) {
  // Display list in DOM
  displayList(list);
}

// Function to update project view
function updateProjView(array) {
  // Empty project view
  emptyProjView();
  // Cycle through all elements of project's list array
  array.forEach((element) => {
    // Add element to DOM
    addListToDOM(element);
  });
}

/*
  ___DISPLAY PROJECT___
*/
// Function to remove all lists from project view in DOM
function emptyProjContainer(projectContainer) {
  // Remove all children of project node
  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.lastChild);
  }
}

function displayProject(projObj) {
  // Get the project container element from DOM
  const projectContainer = document.querySelector(".project-container");
  // Empty existing project container
  emptyProjContainer(projectContainer);

  // If project array previously empty then setUpHeader
  if (projectContainer.id === "empty") {
    // Get project header element
    const projectHeader = document.querySelector(".project-header");
    setUpHeader(projectHeader);
  }

  // Get the project ID
  const projectID = projObj.id;
  // Add ID to project container element
  projectContainer.setAttribute("id", projectID);

  // Get the header title element
  const headerTitle = document.querySelector(".header-title");
  // Set text for title to project name
  headerTitle.textContent = projObj.name;

  projObj.listArray.forEach((element) => {
    // console.log(element);
    displayList(element);
  });
}

// Function to empty project header
function emptyHeader(projectHeader) {
  // Remove all children of header node
  while (projectHeader.firstChild) {
    projectHeader.removeChild(projectHeader.lastChild);
  }
}

function displayEmptyProjArray() {
  // Get the project container element from DOM
  const projectContainer = document.querySelector(".project-container");
  // Empty existing project container
  emptyProjContainer(projectContainer);

  // Set empty id for project container
  projectContainer.setAttribute("id", "empty");

  // Set text for empty project array
  projectContainer.textContent = "No projects! Add a project in the sidebar!";

  // Get project header element
  const projectHeader = document.querySelector(".project-header");
  emptyHeader(projectHeader);
}




/***/ }),

/***/ "./src/formManager.js":
/*!****************************!*\
  !*** ./src/formManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateListForm": () => (/* binding */ generateListForm),
/* harmony export */   "generateTodoForm": () => (/* binding */ generateTodoForm)
/* harmony export */ });
/* harmony import */ var _objectLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectLogic */ "./src/objectLogic.js");
/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager */ "./src/domManager.js");



// Define priority options array
const priorityOptionsArray = ["none", "low", "medium", "high"];

// Function for initializing form
function initForm() {
  // Create form background
  const formBackground = document.createElement("div");
  formBackground.classList.add("form-background");
  // Create form container
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  // Append container to background element
  formBackground.appendChild(formContainer);

  // Add form container to document
  const content = document.querySelector(".content-container");
  content.appendChild(formBackground);
}

// Function for adding name input elements
function addNameInput(currentName) {
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for name elements
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("form-div");
  // Add label for name input
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name-input");
  nameLabel.textContent = "Name:";
  // Add input for name and set attributes
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name-input");
  nameInput.setAttribute("name", "name-input");
  // Set input as required
  nameInput.required = true;
  // Set input value to current name
  nameInput.value = currentName;

  // Append both label and input for name to name container
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);
  // Append the name container to form container
  formContainer.appendChild(nameDiv);
}

// Function for adding priority select input elements
function addPriorityInput(currentPriority) {
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for priority elements
  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("form-div");
  // Add label for priority select
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority-input");
  priorityLabel.textContent = "Priority:";
  // Add priority select element
  const prioritySelect = document.createElement("select");
  prioritySelect.name = "priority-input";
  // Loop through options array
  priorityOptionsArray.forEach((element) => {
    // Create option element
    const priorityOption = document.createElement("option");
    // Set option value to the string of each array item
    priorityOption.setAttribute("value", element);
    // Get string for option name
    const optionName = element;
    // Get the first letter of the name
    const firstLetter = optionName.charAt(0);
    // Set the text to name with capital first letter
    priorityOption.innerText = firstLetter.toUpperCase() + optionName.slice(1);
    // Add option element to select element
    prioritySelect.appendChild(priorityOption);
  });
  // Set select value to current priority
  prioritySelect.value = currentPriority;
  // Set ID attribute for select element
  prioritySelect.setAttribute("id", "priority-input");

  // Add the select elements to priority container
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(prioritySelect);
  // Append the priority container to the form container
  formContainer.appendChild(priorityDiv);
}

// Function for adding info input elements
function addInfoInput(currentInfo) {
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for info
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("form-div");
  // Add label for info box
  const infoLabel = document.createElement("label");
  infoLabel.setAttribute("for", "info-input");
  infoLabel.textContent = "Info:";
  // Add info text area element
  const infoInput = document.createElement("textarea");
  infoInput.name = "info-input";
  // Set ID attribute for info text area input element
  infoInput.setAttribute("id", "info-input");
  // Set info text area value to current info
  infoInput.value = currentInfo;

  // Add the info elements to info container
  infoDiv.appendChild(infoLabel);
  infoDiv.appendChild(infoInput);
  // Append the info container to the form container
  formContainer.appendChild(infoDiv);
}

// Function for adding button elements
function addButtons(proj, obj, priorityBool) {
  // Get the form background
  const formBackground = document.querySelector(".form-background");
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for submit and cancel buttons
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("form-button-div");
  // Add input element of type submit
  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.classList.add("edit-form-btn");
  // Add submit button to the button div
  buttonDiv.appendChild(submitBtn);
  // Add a button element for cancelling action
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("edit-form-btn");
  // Set button text
  cancelBtn.textContent = "Cancel";
  // Add cancel button to the button div
  buttonDiv.appendChild(cancelBtn);
  // Add submit container to form container
  formContainer.appendChild(buttonDiv);

  // Add event listener to submit button
  submitBtn.addEventListener("click", () => {
    // Get name input element
    const nameInput = document.getElementById("name-input");

    // Check whether todo boolean is true
    const prioritySelect = priorityBool
      ? document.getElementById("priority-input")
      : null;

    // Get info input element
    const infoInput = document.getElementById("info-input");

    if (nameInput.value !== "") {
      // Change the name of object
      obj.name = nameInput.value;
      // If priority select is present then change the object priority
      if (prioritySelect !== null) {
        // Change the priority of object
        obj.priority = prioritySelect.value;
      }
      // Change the info of the object
      obj.info = infoInput.value;

      // Update project view
      (0,_domManager__WEBPACK_IMPORTED_MODULE_1__.updateProjView)(proj.listArray);

      // Remove form background element from DOM
      formBackground.remove();
    } else {
      // Throw error and cancel submission of form
      alert("no name");
    }
  });

  // Add event listener to cancel button
  cancelBtn.addEventListener("click", () => {
    // Remove form background element from DOM
    formBackground.remove();
  });
}

// Todo edit form
function generateTodoForm(projId, projArray, listId, todoId) {
  // Get the project object from the project array
  const proj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(projId, projArray);
  // Get the list object from the project's list array
  const list = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(listId, proj.listArray);
  // Get the todo object from the list's todo array
  const todo = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(todoId, list.todoArray);

  // Get current name of todo
  const currentName = todo.name;
  // Get current priority of todo
  const currentPriority = todo.priority;
  // Get current info of todo
  const currentInfo = todo.info;

  initForm();

  addNameInput(currentName);

  addPriorityInput(currentPriority);

  addInfoInput(currentInfo);

  addButtons(proj, todo, true);
}

// List edit form
function generateListForm(projId, projArray, listId) {
  // Get the project object from the project array
  const proj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(projId, projArray);
  // Get the list object from the project's list array
  const list = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(listId, proj.listArray);

  // Get current name of list
  const currentName = list.name;
  // Get current info of list
  const currentInfo = list.info;

  initForm();

  addNameInput(currentName);

  addInfoInput(currentInfo);

  addButtons(proj, list, false);
}

// Project edit form




/***/ }),

/***/ "./src/objectLogic.js":
/*!****************************!*\
  !*** ./src/objectLogic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (returnObjectFromArray);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoProto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoProto */ "./src/todoProto.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");



const project = (
  name,
  id,
  info,
  type = "proj",
  arrayName = "listArray",
  obj = _todoList__WEBPACK_IMPORTED_MODULE_1__["default"]
) => {
  const listArray = [];
  const state = {
    ...(0,_todoProto__WEBPACK_IMPORTED_MODULE_0__.todoProto)(name, id, info, type),
    listArray,
  };
  return {
    ...state,
    ...(0,_todoProto__WEBPACK_IMPORTED_MODULE_0__.creator)(state, arrayName, obj, type),
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

"use strict";
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

"use strict";
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
    ...(0,_todoProto__WEBPACK_IMPORTED_MODULE_0__.creator)(state, arrayName, obj, type),
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creator": () => (/* binding */ creator),
/* harmony export */   "getUniqueID": () => (/* binding */ getUniqueID),
/* harmony export */   "remover": () => (/* binding */ remover),
/* harmony export */   "todoProto": () => (/* binding */ todoProto)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);


function getUniqueID(idPrefix) {
  return uniqid__WEBPACK_IMPORTED_MODULE_0___default()(idPrefix);
}

const creator = (state, arrayName, object, type) => ({
  create: (idPrefix) => {
    // Get the type of child to add
    let childType;
    if (type === "list") {
      childType = "todo";
    } else if (type === "proj") {
      childType = "list";
    }
    const id = getUniqueID(idPrefix);
    const objName = `New ${childType}`;
    const info = null;
    // Add a child object to the array
    state[`${arrayName}`].push(object(objName, id, info, childType));
  },
});

const remover = (state, arrayName) => ({
  deleteItem: (id) =>
    state[`${arrayName}`].filter((element) => element.id !== id),
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

"use strict";
module.exports = __webpack_require__.p + "ae589010d8b937c5a909.svg";

/***/ }),

/***/ "./src/images/plus-box-outline.svg":
/*!*****************************************!*\
  !*** ./src/images/plus-box-outline.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "de7aff6cb1c57b33c2db.svg";

/***/ }),

/***/ "./src/images/trash-can-outline.svg":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoProto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoProto */ "./src/todoProto.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManager */ "./src/domManager.js");
/* harmony import */ var _formManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formManager */ "./src/formManager.js");
/* harmony import */ var _objectLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objectLogic */ "./src/objectLogic.js");







const projArray = [];

/* REFACTOR TO MODULE
-------------------------
  TODO/LIST LOGIC
-------------------------
*/
/*
___CREATE PROJ/LIST___
*/
// Function to create new project
const createProj = (name = "New Project", info = undefined) => {
  // Get a unique ID for the project
  const id = (0,_todoProto__WEBPACK_IMPORTED_MODULE_1__.getUniqueID)("proj-");
  // Create a new project object
  const newProj = (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])(name, id, info);
  // Push the new project object to the project array
  projArray.push(newProj);

  // Return the project object
  return newProj;
};

/*
  ___EVENT HANDLERS___ (for event listeners)
*/

/* ADD EVENTS */

// Handle todo add event
function handleTodoAdd(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get project object from array
  const proj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_5__["default"])(projId, projArray);
  // Get list id
  const listId = e.target.closest(".list-container").id;
  // Get list object
  const list = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_5__["default"])(listId, proj.listArray);
  // Create a todo item
  list.create("todo-");
  // Update view of lists in array in DOM
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.updateProjView)(proj.listArray);
}

// Handle list add event
function handleListAdd(e) {
  // Get project id
  const projId = document.querySelector(".project-container").id;
  // Get project object from array
  const proj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_5__["default"])(projId, projArray);
  // Create a list in the project
  proj.create("list-");
  // Get new list object
  const list = proj.listArray[proj.listArray.length - 1];
  // Get ID of new list
  const listId = list.id;
  // Update view of project in array in DOM
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.updateProjView)(proj.listArray);
}

// Handle project add event
function handleProjAdd(e) {
  // Create a new project
  const newProj = createProj();

  // Update sidebar
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.updateSidebarList)(projArray);

  // Display new project
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.displayProject)(newProj);
}

/* DELETE EVENTS */

// Handle todo delete event
function handleTodoDel(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get project object from array
  const proj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_5__["default"])(projId, projArray);
  // Get todo ID
  const todoId = e.target.getAttribute("id");
  // Get list ID
  const listId = e.target.closest(".list-container").id;
  // Filter through array of lists to find matching list object
  const list = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_5__["default"])(listId, proj.listArray);
  // Remove the first 4 characters from targetId string (First 4 characters: "del-")
  const todoObjId = todoId.substring(4);
  // Find index of object in array
  const arrayIndex = list.todoArray.findIndex(
    (element) => element.id === todoObjId
  );
  // Remove the todo object from array in parent list object
  list.todoArray.splice(arrayIndex, 1);
  // Update project view in DOM
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.updateProjView)(proj.listArray);
}

// Handle list delete event
function handleListDel(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get project object from array
  const proj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_5__["default"])(projId, projArray);
  // Get list ID
  const listId = e.target.closest(".list-container").id;
  // Filter through array of lists to find matching list object
  const arrayIndex = proj.listArray.findIndex(
    (element) => element.id === listId
  );
  // Remove the list object from array in parent project object
  proj.listArray.splice(arrayIndex, 1);
  // Update proj view in DOM
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.updateProjView)(proj.listArray);
}

// Handle project deletion event
function handleProjDel(e) {
  // Get project id from project container
  const projId = document.querySelector(".project-container").id;
  // Get project object from array
  const arrayIndex = projArray.findIndex((element) => element.id === projId);
  // Remove the list object from array in parent project object
  projArray.splice(arrayIndex, 1);
  // Display previous project
  if (projArray.length > 0) {
    (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.displayProject)(projArray[arrayIndex - 1]);
  } else {
    (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.displayEmptyProjArray)();
  }
  // Update sidebar list of projects
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.updateSidebarList)(projArray);
}

/* EDIT EVENTS */

// Handle todo edit event
function handleTodoEdit(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get list id
  const listId = e.target.closest(".list-container").id;
  // Get the id of the targeted todo DOM element
  const todoId = e.target.id;
  // Remove the first 4 characters from targetId string (First 5 characters: "edit-")
  const todoObjId = todoId.substring(5);

  (0,_formManager__WEBPACK_IMPORTED_MODULE_4__.generateTodoForm)(projId, projArray, listId, todoObjId);
}

// Handle list edit event
function handleListEdit(e) {
  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get list id
  const listId = e.target.closest(".list-container").id;

  (0,_formManager__WEBPACK_IMPORTED_MODULE_4__.generateListForm)(projId, projArray, listId);
}

// Handle project edit event
function handleProjEdit(e) {
  // Get project id from project container
  const projId = document.querySelector(".project-container").id;

  // // Get project object from array
  // const arrayIndex = projArray.findIndex((element) => element.id === projId);
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

// Event listener functionality for sidebar add project button
addGlobalEventListener("click", ".sb-add-button", (e) => {
  // Call event handler for adding a project
  handleProjAdd(e);
});

// Event listener functionality for add icons
addGlobalEventListener("click", ".add-icon", (e) => {
  // Set variables for the DOM element's type and id attributes
  const targetType = e.target.getAttribute("type");

  // Check if element type is a list
  if (targetType === "list") {
    handleTodoAdd(e);
  } else if (targetType === "proj") {
    handleListAdd(e);
  }
});

// Event listener functionality for edit icons
addGlobalEventListener("click", ".edit-icon", (e) => {
  // Set variables for the DOM element's type and id attributes
  const targetType = e.target.getAttribute("type");

  // Check if element type is a list
  if (targetType === "todo") {
    handleTodoEdit(e);
  } else if (targetType === "list") {
    handleListEdit(e);
  } else if (targetType === "proj") {
    handleProjEdit(e);
  }
});

// Event listener functionality for delete icons
addGlobalEventListener("click", ".del-icon", (e) => {
  // Set variables for the DOM element's type and id attributes
  const targetType = e.target.getAttribute("type");

  // Check if element type is a list
  if (targetType === "todo") {
    handleTodoDel(e);
  } else if (targetType === "list") {
    handleListDel(e);
  } else if (targetType === "proj") {
    handleProjDel(e);
  }
});

/*
-------------------------
  INITIALIZE
-------------------------
*/

// Create a blank project
function createExampleProj() {
  // Create the project
  const myProj = createProj("My first project", "This is my first project");

  // Create a list in the project
  myProj.create("list-");

  // Create a set of todo items in the new list
  for (let i = 0; i < 7; i++) {
    myProj.listArray[0].create("todo-");
  }
}

// Call the function for creating a blank project
createExampleProj();

// Set up the DOM
(0,_domManager__WEBPACK_IMPORTED_MODULE_3__.setUpDOM)(projArray);

// Display the default project
function displayDefaultProject(index = 0) {
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.displayProject)(projArray[index]);
}

// Call function for displaying the default project
displayDefaultProject();

// Get current project id of DOM project container element
const curProjId = document.querySelector(".project-container").id;

// Get object of current project from main project array
const curProjObj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_5__["default"])(curProjId, projArray);

// Get id of first list from current project object
const curListObj = curProjObj.listArray[0];
const curListId = curListObj.id;
// Get id of first todo item in the list object's todo array
const curTodoId = curListObj.todoArray[0].id;

// Call generateTodoForm for testing
// generateTodoForm(curProjId, projArray, curListId, curTodoId);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsK0hBQStILElBQUksSUFBSSxtQkFBbUIsV0FBVyx3QkFBd0Is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QUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwVmdEO0FBQ0o7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QWtCLE9BQU87QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxREFBUTs7QUFFUjtBQUNBO0FBQ0EsRUFBRSwyREFBYztBQUNoQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsd0RBQXFCOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL29iamVjdExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9Qcm90by5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZmFtaWx5PVNvdXJjZStDb2RlK1Bybzp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW1pbi13aWR0aDogMTMxMHB4O1xcbiAgLS1iZy1zaWRlLWhlYWRlcjogIzNlM2UzZTtcXG4gIC0tYmctY29sb3I6ICM4ODg4ODg7XFxuICAtLWJnLWxpc3Q6ICMzZTNlM2U7XFxuICAtLXRpdGxlLWljb24td2lkdGg6IDEuNXJlbTtcXG4gIC0taGVhZGVyLWljb24td2lkdGg6IDIuMnJlbTtcXG4gIC0tbGlzdC13aWR0aDogMzUwcHg7XFxuICAtLWxpc3QtcGFkZGluZzogMjBweDtcXG4gIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAtLXJlZy1mb250OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xcbiAgLS1mb250LWNvbDogd2hpdGVzbW9rZTtcXG4gIC0tdGl0bGUtZm9udDogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzAwcHgsIDAuMjVmcikgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0gU0lERUJBUiBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhci10aXRsZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2ItYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNiLWFkZC1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1mb250LWNvbCk7XFxuICBwYWRkaW5nOiAxLjRlbSAyLjRlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5zYi1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tIFBST0pFQ1QgVklFVyAtLS0tLS0tLS0tLS0gKi9cXG4ucHJvamVjdC12aWV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwMHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIgaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDU0JSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDUlKTtcXG4gIHdpZHRoOiB2YXIoLS1oZWFkZXItaWNvbi13aWR0aCk7XFxufVxcblxcbi5oZWFkZXItaWNvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIHZhcigtLWhlYWRlci1pY29uLXdpZHRoKSk7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgocmVwZWF0KDIsIHZhcigtLWxpc3Qtd2lkdGgpKSwgcmVwZWF0KDQsICgtLWxpc3Qtd2lkdGgpKSk7ICovXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCB2YXIoLS1saXN0LXdpZHRoKSk7XFxuICBwYWRkaW5nOiB2YXIoLS1saXN0LXBhZGRpbmcpO1xcbn1cXG5cXG4jZW1wdHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogd2lkdGg6IHZhcigtLWxpc3Qtd2lkdGgpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlzdCk7XFxuICBwYWRkaW5nOiAyNXB4IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgXFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcblxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLmljb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogdmFyKC0tdGl0bGUtaWNvbi13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLXRpdGxlLWljb24td2lkdGgpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxufVxcblxcbi50b2RvIHtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi50b2RvLW5hbWUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4udG9kbyAuaWNvbi1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRvZG8gaW1nIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLXRpdGxlLWljb24td2lkdGgpICogMC44KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS10aXRsZS1pY29uLXdpZHRoKSAqIDAuOCk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi5mb3JtLWJhY2tncm91bmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvKiB0b3A6IDUwJTsgKi9cXG4gIC8qIGxlZnQ6IDUwJTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzNlM2UzZTZlO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlM2UzZTtcXG4gIHBhZGRpbmc6IDEwMHB4O1xcbiAgYm9yZGVyOiB2YXIoLS1mb250LWNvbCkgc29saWQgMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmZvcm0tZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IGF1dG87XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiN0b2RvLW5hbWUge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbiN0b2RvLXByaW9yaXR5IHtcXG4gIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uZm9ybS1idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZWRpdC1mb3JtLWJ0biB7XFxuICBwYWRkaW5nOiAwLjRlbSAxZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjZlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsdUNBQXVDOztFQUV2Qyx5Q0FBeUM7RUFDekMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFlBQVk7QUFDZDs7O0FBR0EsMkNBQTJDO0FBQzNDO0VBQ0UsaUNBQWlDO0VBQ2pDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FB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bCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZmYW1pbHk9U291cmNlK0NvZGUrUHJvOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tbWluLXdpZHRoOiAxMzEwcHg7XFxuICAtLWJnLXNpZGUtaGVhZGVyOiAjM2UzZTNlO1xcbiAgLS1iZy1jb2xvcjogIzg4ODg4ODtcXG4gIC0tYmctbGlzdDogIzNlM2UzZTtcXG4gIC0tdGl0bGUtaWNvbi13aWR0aDogMS41cmVtO1xcbiAgLS1oZWFkZXItaWNvbi13aWR0aDogMi4ycmVtO1xcbiAgLS1saXN0LXdpZHRoOiAzNTBweDtcXG4gIC0tbGlzdC1wYWRkaW5nOiAyMHB4O1xcbiAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gIC0tcmVnLWZvbnQ6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICAtLWZvbnQtY29sOiB3aGl0ZXNtb2tlO1xcbiAgLS10aXRsZS1mb250OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xcblxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMC4yNWZyKSAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLSBTSURFQkFSIFZJRVcgLS0tLS0tLS0tLS0tICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zYi1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2ItYWRkLWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sKTtcXG4gIHBhZGRpbmc6IDEuNGVtIDIuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLnNiLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2wpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0gUFJPSkVDVCBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5wcm9qZWN0LXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwcHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgd2lkdGg6IHZhcigtLWhlYWRlci1pY29uLXdpZHRoKTtcXG59XFxuXFxuLmhlYWRlci1pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgdmFyKC0taGVhZGVyLWljb24td2lkdGgpKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChyZXBlYXQoMiwgdmFyKC0tbGlzdC13aWR0aCkpLCByZXBlYXQoNCwgKC0tbGlzdC13aWR0aCkpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIHZhcigtLWxpc3Qtd2lkdGgpKTtcXG4gIHBhZGRpbmc6IHZhcigtLWxpc3QtcGFkZGluZyk7XFxufVxcblxcbiNlbXB0eSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICAvKiB3aWR0aDogdmFyKC0tbGlzdC13aWR0aCk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saXN0KTtcXG4gIHBhZGRpbmc6IDI1cHggMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiB2YXIoLS10aXRsZS1pY29uLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tdGl0bGUtaWNvbi13aWR0aCk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG59XFxuXFxuLnRvZG8ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbi50b2RvIC5pY29uLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kbyBpbWcge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tdGl0bGUtaWNvbi13aWR0aCkgKiAwLjgpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpdGxlLWljb24td2lkdGgpICogMC44KTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDU0JSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmZvcm0tYmFja2dyb3VuZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qIHRvcDogNTAlOyAqL1xcbiAgLyogbGVmdDogNTAlOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjM2UzZTNlNmU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzZTNlO1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBib3JkZXI6IHZhcigtLWZvbnQtY29sKSBzb2xpZCAycHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggYXV0bztcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3RvZG8tbmFtZSB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuI3RvZG8tcHJpb3JpdHkge1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5mb3JtLWJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5lZGl0LWZvcm0tYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSBIYWzDoXN6IMOBZMOhbSA8YWRhbUBhaW1mb3JtLmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgbWFjID0gJycsIG9zID0gcmVxdWlyZSgnb3MnKTsgXG4gICAgaWYob3MubmV0d29ya0ludGVyZmFjZXMpIHZhciBuZXR3b3JrSW50ZXJmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgaWYobmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBsb29wOlxuICAgICAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0gIT09IHVuZGVmaW5lZCAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xuICAgIH1cbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsImltcG9ydCBwbHVzSWNvbiBmcm9tIFwiLi9pbWFnZXMvcGx1cy1ib3gtb3V0bGluZS5zdmdcIjtcbmltcG9ydCB0cmFzaENhbkljb24gZnJvbSBcIi4vaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGZpbGVFZGl0SWNvbiBmcm9tIFwiLi9pbWFnZXMvZmlsZS1lZGl0LW91dGxpbmUuc3ZnXCI7XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5ET00gU0VUVVBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5jb25zdCBzaWRlYmFyVGl0bGVFbGVtZW50ID0gXCJoMlwiO1xuY29uc3QgaGVhZGVyVGl0bGVFbGVtZW50ID0gXCJoMlwiO1xuY29uc3QgbGlzdFRpdGxlRWxlbWVudCA9IFwiaDNcIjtcbmNvbnN0IHRvZG9OYW1lRWxlbWVudCA9IFwiaDVcIjtcblxuLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIGFsbCBsaXN0cyBmcm9tIHByb2plY3QgdmlldyBpbiBET01cbmZ1bmN0aW9uIGVtcHR5U2lkZWJhckxpc3Qoc2lkZWJhclByb2pMaXN0KSB7XG4gIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW4gb2YgcHJvamVjdCBub2RlXG4gIHdoaWxlIChzaWRlYmFyUHJvakxpc3QuZmlyc3RDaGlsZCkge1xuICAgIHNpZGViYXJQcm9qTGlzdC5yZW1vdmVDaGlsZChzaWRlYmFyUHJvakxpc3QubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTaWRlYmFyTGlzdChwcm9qQXJyYXkpIHtcbiAgLy8gR2V0IGNvbnRhaW5lciBmb3IgcHJvamVjdHMgaW4gc2lkZWJhclxuICBjb25zdCBzaWRlYmFyUHJvakxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXNpZGViYXJcIik7XG5cbiAgLy8gRW1wdHkgc2lkZWJhciBsaXN0XG4gIGVtcHR5U2lkZWJhckxpc3Qoc2lkZWJhclByb2pMaXN0KTtcblxuICAvLyBGb3IgZWFjaCBwcm9qZWN0IGluIGFycmF5LCBhZGQgbmFtZSBvZiBwcm9qZWN0IHRvIHNpZGViYXIgcHJvaiBsaXN0IGRpdlxuICBwcm9qQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2pJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsaXN0VGl0bGVFbGVtZW50KTtcbiAgICBwcm9qSXRlbS5jbGFzc0xpc3QuYWRkKFwic2ItcHJvai1pdGVtXCIpO1xuICAgIHByb2pJdGVtLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgIHNpZGViYXJQcm9qTGlzdC5hcHBlbmRDaGlsZChwcm9qSXRlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRVcEhlYWRlcihwcm9qZWN0SGVhZGVyKSB7XG4gIC8vIEFkZCBjb250YWluZXIgZm9yIHRpdGxlXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci10aXRsZVwiKTtcbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIC8vIEFkZCB0aXRsZSB0byBwcm9qZWN0IGhlYWRlclxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaGVhZGVyVGl0bGVFbGVtZW50KTtcbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIC8vIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItdGl0bGVcIik7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgLy8gQWRkIGljb24gY29udGFpbmVyIHRvIGhlYWRlclxuICBjb25zdCBoZWFkZXJJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVySWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWljb24tY29udGFpbmVyXCIpO1xuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckljb25Db250YWluZXIpO1xuICAvLyBBZGQgaWNvbnMgdG8gY29udGFpbmVyXG4gIGNvbnN0IGhlYWRlckFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaGVhZGVyQWRkSWNvbi5zcmMgPSBwbHVzSWNvbjtcbiAgaGVhZGVyQWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLWljb25cIik7XG4gIC8vIGhlYWRlckFkZEljb24uc2V0QXR0cmlidXRlKFwicHJvaklkXCIsIFwicHJvajFcIik7XG4gIGhlYWRlckFkZEljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInByb2pcIik7XG4gIGhlYWRlckljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQWRkSWNvbik7XG4gIGNvbnN0IGhlYWRlckVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGhlYWRlckVkaXRJY29uLnNyYyA9IGZpbGVFZGl0SWNvbjtcbiAgaGVhZGVyRWRpdEljb24uY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcbiAgLy8gaGVhZGVyRWRpdEljb24uc2V0QXR0cmlidXRlKFwicHJvaklkXCIsIFwicHJvalwiKTtcbiAgaGVhZGVyRWRpdEljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInByb2pcIik7XG4gIGhlYWRlckljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRWRpdEljb24pO1xuICBjb25zdCBoZWFkZXJSZW1vdmVJY29uID0gbmV3IEltYWdlKCk7XG4gIGhlYWRlclJlbW92ZUljb24uc3JjID0gdHJhc2hDYW5JY29uO1xuICBoZWFkZXJSZW1vdmVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWwtaWNvblwiKTtcbiAgaGVhZGVyUmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicHJvalwiKTtcbiAgaGVhZGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJSZW1vdmVJY29uKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBET00ocHJvakFycmF5KSB7XG4gIC8vIEdldCBjb250ZW50IGRpdiBlbGVtZW50XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWNvbnRhaW5lclwiKTtcblxuICAvLyBDcmVhdGUgc2lkZWJhciBzZWN0aW9uXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gIC8vIENyZWF0ZSBzaWRlYmFyIGNvbnRhaW5lclxuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1jb250YWluZXJcIik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRhaW5lcik7XG4gIC8vIENyZWF0ZSB0aXRsZSBmb3Igc2lkZWJhclxuICBjb25zdCBzaWRlYmFyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNpZGViYXJUaXRsZUVsZW1lbnQpO1xuICBzaWRlYmFyVGl0bGUuY2xhc3NMaXN0LmFkZChcInNpZGViYXItdGl0bGVcIik7XG4gIHNpZGViYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpO1xuICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciBwcm9qZWN0cyBpbiBzaWRlYmFyXG4gIGNvbnN0IHNpZGViYXJQcm9qTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXJQcm9qTGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtc2lkZWJhclwiKTtcbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyUHJvakxpc3QpO1xuXG4gIC8vIEZvciBlYWNoIHByb2plY3QgaW4gYXJyYXksIGFkZCBuYW1lIG9mIHByb2plY3QgdG8gc2lkZWJhciBwcm9qIGxpc3QgZGl2XG4gIHByb2pBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvakl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGxpc3RUaXRsZUVsZW1lbnQpO1xuICAgIHByb2pJdGVtLmNsYXNzTGlzdC5hZGQoXCJzYi1wcm9qLWl0ZW1cIik7XG4gICAgcHJvakl0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgc2lkZWJhclByb2pMaXN0LmFwcGVuZENoaWxkKHByb2pJdGVtKTtcbiAgfSk7XG5cbiAgLy8gQWRkIGJ1dHRvbiBmb3IgY3JlYXRpbmcgbmV3IHByb2plY3RzIHRvIHNpZGViYXJcbiAgY29uc3QgYWRkUHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFByb2pDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNiLWJ1dHRvbi1jb250YWluZXJcIik7XG4gIGNvbnN0IGFkZFByb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzYi1hZGQtYnV0dG9uXCIpO1xuICBhZGRQcm9qQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICBhZGRQcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2pCdXR0b24pO1xuICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2pDb250YWluZXIpO1xuXG4gIC8vIENyZWF0ZSBwcm9qZWN0IHZpZXdcbiAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Vmlldy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC12aWV3XCIpO1xuXG4gIC8vIENyZWF0ZSBwcm9qZWN0IHZpZXcgaGVhZGVyXG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlclwiKTtcbiAgc2V0VXBIZWFkZXIocHJvamVjdEhlYWRlcik7XG5cbiAgLy8gQWRkIHByb2plY3QgaGVhZGVyIHRvIHByb2plY3Qgdmlld1xuICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICAvLyBDcmVhdGUgcHJvamVjdCB2aWV3IG1haW4gc2VjdGlvblxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgLy8gQWRkIHByb2plY3QgY29udGFpbmVyIHRvIHByb2plY3Qgdmlld1xuICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICAvLyBBZGQgZWxlbWVudHMgdG8gZG9jdW1lbnRcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Vmlldyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG59XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5ET00gVVBEQVRFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLy8gRnVuY3Rpb24gdG8gZGlzcGxheSB0b2RvIGxpc3RcbmNvbnN0IGRpc3BsYXlMaXN0ID0gKGxpc3QpID0+IHtcbiAgLy8gR2V0IHByb2plY3QgY29udGFpbmVyXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gIC8vIENyZWF0ZSBuZXcgZWxlbWVudFxuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gQXNzaWduIGNsYXNzIGFuZCBpZCBuYW1lXG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBsaXN0SWROYW1lID0gYCR7bGlzdC5pZH1gO1xuICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGxpc3RJZE5hbWUpO1xuXG4gIC8vIERpc3BsYXkgbmFtZSBhcyB0aXRsZVxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1jb250YWluZXJcIik7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobGlzdFRpdGxlRWxlbWVudCk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0LXRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIC8vIERpc3BsYXkgaWNvbnNcbiAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImljb24tY29udGFpbmVyXCIpO1xuICBjb25zdCBhZGRJY29uID0gbmV3IEltYWdlKCk7XG4gIGFkZEljb24uc3JjID0gcGx1c0ljb247XG4gIGFkZEljb24uY2xhc3NMaXN0LmFkZChcImFkZC1pY29uXCIpO1xuICBhZGRJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBhZGQtJHtsaXN0SWROYW1lfWApO1xuICBhZGRJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJsaXN0XCIpO1xuICBhZGRJY29uLnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWROYW1lKTtcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdEljb24uc3JjID0gZmlsZUVkaXRJY29uO1xuICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1pY29uXCIpO1xuICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZWRpdC0ke2xpc3RJZE5hbWV9YCk7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJsaXN0XCIpO1xuICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJsaXN0SWRcIiwgbGlzdElkTmFtZSk7XG4gIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICBjb25zdCByZW1vdmVJY29uID0gbmV3IEltYWdlKCk7XG4gIHJlbW92ZUljb24uc3JjID0gdHJhc2hDYW5JY29uO1xuICByZW1vdmVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWwtaWNvblwiKTtcbiAgcmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGVsLSR7bGlzdElkTmFtZX1gKTtcbiAgcmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibGlzdFwiKTtcbiAgcmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoXCJsaXN0SWRcIiwgbGlzdElkTmFtZSk7XG4gIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlSWNvbik7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuXG4gIC8vIERpc3BsYXkgbGlzdCBjb250ZW50c1xuICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gIGxpc3QudG9kb0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBUb2RvIGJveFxuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9JZE5hbWUgPSBgJHtlbGVtZW50LmlkfWA7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICB0b2RvLnNldEF0dHJpYnV0ZShcImlkXCIsIHRvZG9JZE5hbWUpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG4gICAgLy8gQ2hlY2tib3hcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNoay0ke3RvZG9JZE5hbWV9YCk7XG4gICAgdG9kby5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgLy8gVG9kbyBuYW1lXG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRvZG9OYW1lRWxlbWVudCk7XG4gICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZChcInRvZG8tbmFtZVwiKTtcbiAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICAvLyBUb2RvIGljb25zXG4gICAgY29uc3QgdG9kb0ljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvSWNvbnMuY2xhc3NMaXN0LmFkZChcImljb24tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRvZG9FZGl0ID0gbmV3IEltYWdlKCk7XG4gICAgdG9kb0VkaXQuc3JjID0gZmlsZUVkaXRJY29uO1xuICAgIHRvZG9FZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWljb25cIik7XG4gICAgdG9kb0VkaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGVkaXQtJHt0b2RvSWROYW1lfWApO1xuICAgIHRvZG9FZGl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0b2RvXCIpO1xuICAgIHRvZG9FZGl0LnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWROYW1lKTtcbiAgICB0b2RvSWNvbnMuYXBwZW5kQ2hpbGQodG9kb0VkaXQpO1xuICAgIGNvbnN0IHRvZG9EZWwgPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2RvRGVsLnNyYyA9IHRyYXNoQ2FuSWNvbjtcbiAgICB0b2RvRGVsLmNsYXNzTGlzdC5hZGQoXCJkZWwtaWNvblwiKTtcbiAgICB0b2RvRGVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWwtJHt0b2RvSWROYW1lfWApO1xuICAgIHRvZG9EZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRvZG9cIik7XG4gICAgdG9kb0RlbC5zZXRBdHRyaWJ1dGUoXCJsaXN0SWRcIiwgbGlzdElkTmFtZSk7XG4gICAgdG9kb0ljb25zLmFwcGVuZENoaWxkKHRvZG9EZWwpO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0ljb25zKTtcbiAgICAvLyBBZGQgdG9kbyB0byBjb250YWluZXJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuICB9KTtcblxuICAvLyBBZGQgbGlzdCBjb250YWluZXIgdG8gRE9NXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG59O1xuXG4vKlxuICBfX19VUERBVEUgUFJPSkVDVCBWSUVXX19fXG4qL1xuLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIGFsbCBsaXN0cyBmcm9tIHByb2plY3QgdmlldyBpbiBET01cbmZ1bmN0aW9uIGVtcHR5UHJvalZpZXcobGlzdCkge1xuICAvLyBHZXQgcHJvamVjdCBub2RlIGluIERPTVxuICBjb25zdCBwcm9qTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW4gb2YgcHJvamVjdCBub2RlXG4gIHdoaWxlIChwcm9qTm9kZS5maXJzdENoaWxkKSB7XG4gICAgcHJvak5vZGUucmVtb3ZlQ2hpbGQocHJvak5vZGUubGFzdENoaWxkKTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBhZGQgbGlzdCB0byBET01cbmZ1bmN0aW9uIGFkZExpc3RUb0RPTShsaXN0KSB7XG4gIC8vIERpc3BsYXkgbGlzdCBpbiBET01cbiAgZGlzcGxheUxpc3QobGlzdCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBwcm9qZWN0IHZpZXdcbmZ1bmN0aW9uIHVwZGF0ZVByb2pWaWV3KGFycmF5KSB7XG4gIC8vIEVtcHR5IHByb2plY3Qgdmlld1xuICBlbXB0eVByb2pWaWV3KCk7XG4gIC8vIEN5Y2xlIHRocm91Z2ggYWxsIGVsZW1lbnRzIG9mIHByb2plY3QncyBsaXN0IGFycmF5XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBBZGQgZWxlbWVudCB0byBET01cbiAgICBhZGRMaXN0VG9ET00oZWxlbWVudCk7XG4gIH0pO1xufVxuXG4vKlxuICBfX19ESVNQTEFZIFBST0pFQ1RfX19cbiovXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYWxsIGxpc3RzIGZyb20gcHJvamVjdCB2aWV3IGluIERPTVxuZnVuY3Rpb24gZW1wdHlQcm9qQ29udGFpbmVyKHByb2plY3RDb250YWluZXIpIHtcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBvZiBwcm9qZWN0IG5vZGVcbiAgd2hpbGUgKHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2pPYmopIHtcbiAgLy8gR2V0IHRoZSBwcm9qZWN0IGNvbnRhaW5lciBlbGVtZW50IGZyb20gRE9NXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICAvLyBFbXB0eSBleGlzdGluZyBwcm9qZWN0IGNvbnRhaW5lclxuICBlbXB0eVByb2pDb250YWluZXIocHJvamVjdENvbnRhaW5lcik7XG5cbiAgLy8gSWYgcHJvamVjdCBhcnJheSBwcmV2aW91c2x5IGVtcHR5IHRoZW4gc2V0VXBIZWFkZXJcbiAgaWYgKHByb2plY3RDb250YWluZXIuaWQgPT09IFwiZW1wdHlcIikge1xuICAgIC8vIEdldCBwcm9qZWN0IGhlYWRlciBlbGVtZW50XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXJcIik7XG4gICAgc2V0VXBIZWFkZXIocHJvamVjdEhlYWRlcik7XG4gIH1cblxuICAvLyBHZXQgdGhlIHByb2plY3QgSURcbiAgY29uc3QgcHJvamVjdElEID0gcHJvak9iai5pZDtcbiAgLy8gQWRkIElEIHRvIHByb2plY3QgY29udGFpbmVyIGVsZW1lbnRcbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0SUQpO1xuXG4gIC8vIEdldCB0aGUgaGVhZGVyIHRpdGxlIGVsZW1lbnRcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci10aXRsZVwiKTtcbiAgLy8gU2V0IHRleHQgZm9yIHRpdGxlIHRvIHByb2plY3QgbmFtZVxuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHByb2pPYmoubmFtZTtcblxuICBwcm9qT2JqLmxpc3RBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgZGlzcGxheUxpc3QoZWxlbWVudCk7XG4gIH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBlbXB0eSBwcm9qZWN0IGhlYWRlclxuZnVuY3Rpb24gZW1wdHlIZWFkZXIocHJvamVjdEhlYWRlcikge1xuICAvLyBSZW1vdmUgYWxsIGNoaWxkcmVuIG9mIGhlYWRlciBub2RlXG4gIHdoaWxlIChwcm9qZWN0SGVhZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0SGVhZGVyLnJlbW92ZUNoaWxkKHByb2plY3RIZWFkZXIubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RW1wdHlQcm9qQXJyYXkoKSB7XG4gIC8vIEdldCB0aGUgcHJvamVjdCBjb250YWluZXIgZWxlbWVudCBmcm9tIERPTVxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgLy8gRW1wdHkgZXhpc3RpbmcgcHJvamVjdCBjb250YWluZXJcbiAgZW1wdHlQcm9qQ29udGFpbmVyKHByb2plY3RDb250YWluZXIpO1xuXG4gIC8vIFNldCBlbXB0eSBpZCBmb3IgcHJvamVjdCBjb250YWluZXJcbiAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtcHR5XCIpO1xuXG4gIC8vIFNldCB0ZXh0IGZvciBlbXB0eSBwcm9qZWN0IGFycmF5XG4gIHByb2plY3RDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk5vIHByb2plY3RzISBBZGQgYSBwcm9qZWN0IGluIHRoZSBzaWRlYmFyIVwiO1xuXG4gIC8vIEdldCBwcm9qZWN0IGhlYWRlciBlbGVtZW50XG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpO1xuICBlbXB0eUhlYWRlcihwcm9qZWN0SGVhZGVyKTtcbn1cblxuZXhwb3J0IHtcbiAgc2V0VXBET00sXG4gIHVwZGF0ZVByb2pWaWV3LFxuICBkaXNwbGF5UHJvamVjdCxcbiAgdXBkYXRlU2lkZWJhckxpc3QsXG4gIGRpc3BsYXlFbXB0eVByb2pBcnJheSxcbn07XG4iLCJpbXBvcnQgcmV0dXJuT2JqZWN0RnJvbUFycmF5IGZyb20gXCIuL29iamVjdExvZ2ljXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9qVmlldyB9IGZyb20gXCIuL2RvbU1hbmFnZXJcIjtcblxuLy8gRGVmaW5lIHByaW9yaXR5IG9wdGlvbnMgYXJyYXlcbmNvbnN0IHByaW9yaXR5T3B0aW9uc0FycmF5ID0gW1wibm9uZVwiLCBcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIl07XG5cbi8vIEZ1bmN0aW9uIGZvciBpbml0aWFsaXppbmcgZm9ybVxuZnVuY3Rpb24gaW5pdEZvcm0oKSB7XG4gIC8vIENyZWF0ZSBmb3JtIGJhY2tncm91bmRcbiAgY29uc3QgZm9ybUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1iYWNrZ3JvdW5kXCIpO1xuICAvLyBDcmVhdGUgZm9ybSBjb250YWluZXJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXG4gIC8vIEFwcGVuZCBjb250YWluZXIgdG8gYmFja2dyb3VuZCBlbGVtZW50XG4gIGZvcm1CYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gIC8vIEFkZCBmb3JtIGNvbnRhaW5lciB0byBkb2N1bWVudFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtQmFja2dyb3VuZCk7XG59XG5cbi8vIEZ1bmN0aW9uIGZvciBhZGRpbmcgbmFtZSBpbnB1dCBlbGVtZW50c1xuZnVuY3Rpb24gYWRkTmFtZUlucHV0KGN1cnJlbnROYW1lKSB7XG4gIC8vIEdldCB0aGUgZm9ybSBjb250YWluZXJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIik7XG5cbiAgLy8gQWRkIGNvbnRhaW5lciBmb3IgbmFtZSBlbGVtZW50c1xuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1kaXZcIik7XG4gIC8vIEFkZCBsYWJlbCBmb3IgbmFtZSBpbnB1dFxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lLWlucHV0XCIpO1xuICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XG4gIC8vIEFkZCBpbnB1dCBmb3IgbmFtZSBhbmQgc2V0IGF0dHJpYnV0ZXNcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWUtaW5wdXRcIik7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZS1pbnB1dFwiKTtcbiAgLy8gU2V0IGlucHV0IGFzIHJlcXVpcmVkXG4gIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIC8vIFNldCBpbnB1dCB2YWx1ZSB0byBjdXJyZW50IG5hbWVcbiAgbmFtZUlucHV0LnZhbHVlID0gY3VycmVudE5hbWU7XG5cbiAgLy8gQXBwZW5kIGJvdGggbGFiZWwgYW5kIGlucHV0IGZvciBuYW1lIHRvIG5hbWUgY29udGFpbmVyXG4gIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAvLyBBcHBlbmQgdGhlIG5hbWUgY29udGFpbmVyIHRvIGZvcm0gY29udGFpbmVyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZURpdik7XG59XG5cbi8vIEZ1bmN0aW9uIGZvciBhZGRpbmcgcHJpb3JpdHkgc2VsZWN0IGlucHV0IGVsZW1lbnRzXG5mdW5jdGlvbiBhZGRQcmlvcml0eUlucHV0KGN1cnJlbnRQcmlvcml0eSkge1xuICAvLyBHZXQgdGhlIGZvcm0gY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIHByaW9yaXR5IGVsZW1lbnRzXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZGl2XCIpO1xuICAvLyBBZGQgbGFiZWwgZm9yIHByaW9yaXR5IHNlbGVjdFxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5LWlucHV0XCIpO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgLy8gQWRkIHByaW9yaXR5IHNlbGVjdCBlbGVtZW50XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlTZWxlY3QubmFtZSA9IFwicHJpb3JpdHktaW5wdXRcIjtcbiAgLy8gTG9vcCB0aHJvdWdoIG9wdGlvbnMgYXJyYXlcbiAgcHJpb3JpdHlPcHRpb25zQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIENyZWF0ZSBvcHRpb24gZWxlbWVudFxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAvLyBTZXQgb3B0aW9uIHZhbHVlIHRvIHRoZSBzdHJpbmcgb2YgZWFjaCBhcnJheSBpdGVtXG4gICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZWxlbWVudCk7XG4gICAgLy8gR2V0IHN0cmluZyBmb3Igb3B0aW9uIG5hbWVcbiAgICBjb25zdCBvcHRpb25OYW1lID0gZWxlbWVudDtcbiAgICAvLyBHZXQgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgbmFtZVxuICAgIGNvbnN0IGZpcnN0TGV0dGVyID0gb3B0aW9uTmFtZS5jaGFyQXQoMCk7XG4gICAgLy8gU2V0IHRoZSB0ZXh0IHRvIG5hbWUgd2l0aCBjYXBpdGFsIGZpcnN0IGxldHRlclxuICAgIHByaW9yaXR5T3B0aW9uLmlubmVyVGV4dCA9IGZpcnN0TGV0dGVyLnRvVXBwZXJDYXNlKCkgKyBvcHRpb25OYW1lLnNsaWNlKDEpO1xuICAgIC8vIEFkZCBvcHRpb24gZWxlbWVudCB0byBzZWxlY3QgZWxlbWVudFxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcbiAgfSk7XG4gIC8vIFNldCBzZWxlY3QgdmFsdWUgdG8gY3VycmVudCBwcmlvcml0eVxuICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IGN1cnJlbnRQcmlvcml0eTtcbiAgLy8gU2V0IElEIGF0dHJpYnV0ZSBmb3Igc2VsZWN0IGVsZW1lbnRcbiAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS1pbnB1dFwiKTtcblxuICAvLyBBZGQgdGhlIHNlbGVjdCBlbGVtZW50cyB0byBwcmlvcml0eSBjb250YWluZXJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgLy8gQXBwZW5kIHRoZSBwcmlvcml0eSBjb250YWluZXIgdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xufVxuXG4vLyBGdW5jdGlvbiBmb3IgYWRkaW5nIGluZm8gaW5wdXQgZWxlbWVudHNcbmZ1bmN0aW9uIGFkZEluZm9JbnB1dChjdXJyZW50SW5mbykge1xuICAvLyBHZXQgdGhlIGZvcm0gY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIGluZm9cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZGl2XCIpO1xuICAvLyBBZGQgbGFiZWwgZm9yIGluZm8gYm94XG4gIGNvbnN0IGluZm9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5mb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImluZm8taW5wdXRcIik7XG4gIGluZm9MYWJlbC50ZXh0Q29udGVudCA9IFwiSW5mbzpcIjtcbiAgLy8gQWRkIGluZm8gdGV4dCBhcmVhIGVsZW1lbnRcbiAgY29uc3QgaW5mb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBpbmZvSW5wdXQubmFtZSA9IFwiaW5mby1pbnB1dFwiO1xuICAvLyBTZXQgSUQgYXR0cmlidXRlIGZvciBpbmZvIHRleHQgYXJlYSBpbnB1dCBlbGVtZW50XG4gIGluZm9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZm8taW5wdXRcIik7XG4gIC8vIFNldCBpbmZvIHRleHQgYXJlYSB2YWx1ZSB0byBjdXJyZW50IGluZm9cbiAgaW5mb0lucHV0LnZhbHVlID0gY3VycmVudEluZm87XG5cbiAgLy8gQWRkIHRoZSBpbmZvIGVsZW1lbnRzIHRvIGluZm8gY29udGFpbmVyXG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoaW5mb0xhYmVsKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvSW5wdXQpO1xuICAvLyBBcHBlbmQgdGhlIGluZm8gY29udGFpbmVyIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9EaXYpO1xufVxuXG4vLyBGdW5jdGlvbiBmb3IgYWRkaW5nIGJ1dHRvbiBlbGVtZW50c1xuZnVuY3Rpb24gYWRkQnV0dG9ucyhwcm9qLCBvYmosIHByaW9yaXR5Qm9vbCkge1xuICAvLyBHZXQgdGhlIGZvcm0gYmFja2dyb3VuZFxuICBjb25zdCBmb3JtQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1iYWNrZ3JvdW5kXCIpO1xuICAvLyBHZXQgdGhlIGZvcm0gY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ1dHRvbi1kaXZcIik7XG4gIC8vIEFkZCBpbnB1dCBlbGVtZW50IG9mIHR5cGUgc3VibWl0XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1mb3JtLWJ0blwiKTtcbiAgLy8gQWRkIHN1Ym1pdCBidXR0b24gdG8gdGhlIGJ1dHRvbiBkaXZcbiAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIC8vIEFkZCBhIGJ1dHRvbiBlbGVtZW50IGZvciBjYW5jZWxsaW5nIGFjdGlvblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtZm9ybS1idG5cIik7XG4gIC8vIFNldCBidXR0b24gdGV4dFxuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAvLyBBZGQgY2FuY2VsIGJ1dHRvbiB0byB0aGUgYnV0dG9uIGRpdlxuICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgLy8gQWRkIHN1Ym1pdCBjb250YWluZXIgdG8gZm9ybSBjb250YWluZXJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBzdWJtaXQgYnV0dG9uXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIEdldCBuYW1lIGlucHV0IGVsZW1lbnRcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWUtaW5wdXRcIik7XG5cbiAgICAvLyBDaGVjayB3aGV0aGVyIHRvZG8gYm9vbGVhbiBpcyB0cnVlXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBwcmlvcml0eUJvb2xcbiAgICAgID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1pbnB1dFwiKVxuICAgICAgOiBudWxsO1xuXG4gICAgLy8gR2V0IGluZm8gaW5wdXQgZWxlbWVudFxuICAgIGNvbnN0IGluZm9JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1pbnB1dFwiKTtcblxuICAgIGlmIChuYW1lSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIC8vIENoYW5nZSB0aGUgbmFtZSBvZiBvYmplY3RcbiAgICAgIG9iai5uYW1lID0gbmFtZUlucHV0LnZhbHVlO1xuICAgICAgLy8gSWYgcHJpb3JpdHkgc2VsZWN0IGlzIHByZXNlbnQgdGhlbiBjaGFuZ2UgdGhlIG9iamVjdCBwcmlvcml0eVxuICAgICAgaWYgKHByaW9yaXR5U2VsZWN0ICE9PSBudWxsKSB7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgcHJpb3JpdHkgb2Ygb2JqZWN0XG4gICAgICAgIG9iai5wcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xuICAgICAgfVxuICAgICAgLy8gQ2hhbmdlIHRoZSBpbmZvIG9mIHRoZSBvYmplY3RcbiAgICAgIG9iai5pbmZvID0gaW5mb0lucHV0LnZhbHVlO1xuXG4gICAgICAvLyBVcGRhdGUgcHJvamVjdCB2aWV3XG4gICAgICB1cGRhdGVQcm9qVmlldyhwcm9qLmxpc3RBcnJheSk7XG5cbiAgICAgIC8vIFJlbW92ZSBmb3JtIGJhY2tncm91bmQgZWxlbWVudCBmcm9tIERPTVxuICAgICAgZm9ybUJhY2tncm91bmQucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRocm93IGVycm9yIGFuZCBjYW5jZWwgc3VibWlzc2lvbiBvZiBmb3JtXG4gICAgICBhbGVydChcIm5vIG5hbWVcIik7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2FuY2VsIGJ1dHRvblxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBSZW1vdmUgZm9ybSBiYWNrZ3JvdW5kIGVsZW1lbnQgZnJvbSBET01cbiAgICBmb3JtQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbi8vIFRvZG8gZWRpdCBmb3JtXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9Gb3JtKHByb2pJZCwgcHJvakFycmF5LCBsaXN0SWQsIHRvZG9JZCkge1xuICAvLyBHZXQgdGhlIHByb2plY3Qgb2JqZWN0IGZyb20gdGhlIHByb2plY3QgYXJyYXlcbiAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gIC8vIEdldCB0aGUgbGlzdCBvYmplY3QgZnJvbSB0aGUgcHJvamVjdCdzIGxpc3QgYXJyYXlcbiAgY29uc3QgbGlzdCA9IHJldHVybk9iamVjdEZyb21BcnJheShsaXN0SWQsIHByb2oubGlzdEFycmF5KTtcbiAgLy8gR2V0IHRoZSB0b2RvIG9iamVjdCBmcm9tIHRoZSBsaXN0J3MgdG9kbyBhcnJheVxuICBjb25zdCB0b2RvID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KHRvZG9JZCwgbGlzdC50b2RvQXJyYXkpO1xuXG4gIC8vIEdldCBjdXJyZW50IG5hbWUgb2YgdG9kb1xuICBjb25zdCBjdXJyZW50TmFtZSA9IHRvZG8ubmFtZTtcbiAgLy8gR2V0IGN1cnJlbnQgcHJpb3JpdHkgb2YgdG9kb1xuICBjb25zdCBjdXJyZW50UHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuICAvLyBHZXQgY3VycmVudCBpbmZvIG9mIHRvZG9cbiAgY29uc3QgY3VycmVudEluZm8gPSB0b2RvLmluZm87XG5cbiAgaW5pdEZvcm0oKTtcblxuICBhZGROYW1lSW5wdXQoY3VycmVudE5hbWUpO1xuXG4gIGFkZFByaW9yaXR5SW5wdXQoY3VycmVudFByaW9yaXR5KTtcblxuICBhZGRJbmZvSW5wdXQoY3VycmVudEluZm8pO1xuXG4gIGFkZEJ1dHRvbnMocHJvaiwgdG9kbywgdHJ1ZSk7XG59XG5cbi8vIExpc3QgZWRpdCBmb3JtXG5mdW5jdGlvbiBnZW5lcmF0ZUxpc3RGb3JtKHByb2pJZCwgcHJvakFycmF5LCBsaXN0SWQpIHtcbiAgLy8gR2V0IHRoZSBwcm9qZWN0IG9iamVjdCBmcm9tIHRoZSBwcm9qZWN0IGFycmF5XG4gIGNvbnN0IHByb2ogPSByZXR1cm5PYmplY3RGcm9tQXJyYXkocHJvaklkLCBwcm9qQXJyYXkpO1xuICAvLyBHZXQgdGhlIGxpc3Qgb2JqZWN0IGZyb20gdGhlIHByb2plY3QncyBsaXN0IGFycmF5XG4gIGNvbnN0IGxpc3QgPSByZXR1cm5PYmplY3RGcm9tQXJyYXkobGlzdElkLCBwcm9qLmxpc3RBcnJheSk7XG5cbiAgLy8gR2V0IGN1cnJlbnQgbmFtZSBvZiBsaXN0XG4gIGNvbnN0IGN1cnJlbnROYW1lID0gbGlzdC5uYW1lO1xuICAvLyBHZXQgY3VycmVudCBpbmZvIG9mIGxpc3RcbiAgY29uc3QgY3VycmVudEluZm8gPSBsaXN0LmluZm87XG5cbiAgaW5pdEZvcm0oKTtcblxuICBhZGROYW1lSW5wdXQoY3VycmVudE5hbWUpO1xuXG4gIGFkZEluZm9JbnB1dChjdXJyZW50SW5mbyk7XG5cbiAgYWRkQnV0dG9ucyhwcm9qLCBsaXN0LCBmYWxzZSk7XG59XG5cbi8vIFByb2plY3QgZWRpdCBmb3JtXG5cbmV4cG9ydCB7IGdlbmVyYXRlVG9kb0Zvcm0sIGdlbmVyYXRlTGlzdEZvcm0gfTtcbiIsIi8vIEdldCBvYmplY3QgZnJvbSBhcnJheVxuZnVuY3Rpb24gcmV0dXJuT2JqZWN0RnJvbUFycmF5KGlkLCBhcnJheSkge1xuICAvLyBGaWx0ZXIgdGhyb3VnaCBhcnJheSBvZiBsaXN0cyB0byBmaW5kIG1hdGNoaW5nIGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBhcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IGlkKTtcbiAgLy8gQ2hlY2sgZm9yIHVuaXF1ZW5lc3NcbiAgaWYgKGZpbHRlcmVkQXJyYXkubGVuZ3RoID4gMSkge1xuICAgIC8vIElmIG1vcmUgdGhhbiBvbmUgbGlzdCBvYmplY3QgZm91bmQgdGhyb3cgZXJyb3JcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTtcbiAgICB0aHJvdyBFcnJvcihcIkVSUk9SISBNb3JlIHRoYW4gb25lIHJlbGF0aXZlIGZvdW5kLlwiKTsgLy8gRXJyb3IgaWYgbW9yZSB0aGF0IG9uZSByZWxhdGl2ZSBvYmplY3QgZm91bmRcbiAgfSBlbHNlIGlmIChmaWx0ZXJlZEFycmF5Lmxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBFcnJvcihcIkVSUk9SISBObyByZWxhdGl2ZSBmb3VuZC5cIik7IC8vIEVycm9yIGlmIG5vIHJlbGF0aXZlIG9iamVjdCBmb3VuZFxuICB9IGVsc2Uge1xuICAgIC8vIERlc3RydWN0dXJlIGFycmF5IG9mIG9iamVjdHNcbiAgICBjb25zdCBbcmVsYXRpdmVdID0gZmlsdGVyZWRBcnJheTtcbiAgICAvLyBSZXR1cm4gbGlzdCBvYmplY3RcbiAgICByZXR1cm4gcmVsYXRpdmU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV0dXJuT2JqZWN0RnJvbUFycmF5O1xuIiwiaW1wb3J0IHsgdG9kb1Byb3RvLCBjcmVhdG9yLCByZW1vdmVyIH0gZnJvbSBcIi4vdG9kb1Byb3RvXCI7XG5pbXBvcnQgdG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcblxuY29uc3QgcHJvamVjdCA9IChcbiAgbmFtZSxcbiAgaWQsXG4gIGluZm8sXG4gIHR5cGUgPSBcInByb2pcIixcbiAgYXJyYXlOYW1lID0gXCJsaXN0QXJyYXlcIixcbiAgb2JqID0gdG9kb0xpc3RcbikgPT4ge1xuICBjb25zdCBsaXN0QXJyYXkgPSBbXTtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgLi4udG9kb1Byb3RvKG5hbWUsIGlkLCBpbmZvLCB0eXBlKSxcbiAgICBsaXN0QXJyYXksXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uY3JlYXRvcihzdGF0ZSwgYXJyYXlOYW1lLCBvYmosIHR5cGUpLFxuICAgIC4uLnJlbW92ZXIoc3RhdGUsIGFycmF5TmFtZSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xuIiwiLyogXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuRmFjdG9yeSBmdW5jdGlvbiB0byByZXR1cm4gYSB0b2RvSXRlbSBvYmplY3Rcbk9BTCAxNS0wMi0yMDIzXG5WZXJzaW9uIDAuMSBnZW5lc2lzXG5cblRoaXMgZnVuY3Rpb24gY2FsbGVkIGJ5IHByb2plY3Qgb3IgdG9kb0xpc3QgY29kZSB0byBjcmVhdGUgYW5kIHJldHVybiBhIHRvZG9JdGVtXG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBcbiovXG5cbmltcG9ydCB7IHRvZG9Qcm90byB9IGZyb20gXCIuL3RvZG9Qcm90b1wiO1xuXG5jb25zdCB0b2RvSXRlbSA9IChcbiAgbmFtZSxcbiAgaWQsXG4gIGluZm8sXG4gIHR5cGUgPSBcInRvZG9cIixcbiAgZHVlRGF0ZSA9IG51bGwsXG4gIHByaW9yaXR5ID0gXCJub25lXCIsXG4gIGNoZWNrbGlzdCA9IFtdLFxuICBzdGF0dXMgPSBcInBlbmRpbmdcIlxuKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIC4uLnRvZG9Qcm90byhuYW1lLCBpZCwgaW5mbywgdHlwZSksXG4gICAgY3JlYXRpb25EYXRlOiBuZXcgRGF0ZSgpLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY2hlY2tsaXN0LFxuICAgIHN0YXR1cyxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtO1xuIiwiLyogXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuRmFjdG9yeSBmdW5jdGlvbiB0byByZXR1cm4gYSB0b2RvTGlzdCBvYmplY3Rcbk9BTCAxNS0wMi0yMDIzXG5WZXJzaW9uIDAuMSBnZW5lc2lzXG5cblRoaXMgZnVuY3Rpb24gY2FsbGVkIGJ5IHByb2plY3QgY29kZSB0byBjcmVhdGUgYW5kIHJldHVybiBhIHRvZG9MaXN0LlxuVGhlIHJldHVybmVkIG9iamVjdCBpbmNsdWRlcyBhbiBhcnJheSBvZiB0b2RvSXRlbXMsIG5hbWUsIGluZm8gYW5kXG5mdW5jdGlvbnMgZm9yIGFkZGluZyBhbmQgcmVtb3ZpbmcgdG9kb0l0ZW1zIGZyb20gYXJyYXkuXG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBcbiovXG5cbmltcG9ydCB7IHRvZG9Qcm90bywgY3JlYXRvciwgcmVtb3ZlciB9IGZyb20gXCIuL3RvZG9Qcm90b1wiO1xuaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuL3RvZG9JdGVtXCI7XG5cbmNvbnN0IHRvZG9MaXN0ID0gKFxuICBuYW1lLFxuICBpZCxcbiAgaW5mbyxcbiAgdHlwZSA9IFwibGlzdFwiLFxuICBhcnJheU5hbWUgPSBcInRvZG9BcnJheVwiLFxuICBvYmogPSB0b2RvSXRlbVxuKSA9PiB7XG4gIGNvbnN0IHRvZG9BcnJheSA9IFtdO1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICAuLi50b2RvUHJvdG8obmFtZSwgaWQsIGluZm8sIHR5cGUpLFxuICAgIHRvZG9BcnJheSxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5jcmVhdG9yKHN0YXRlLCBhcnJheU5hbWUsIG9iaiwgdHlwZSksXG4gICAgLi4ucmVtb3ZlcihzdGF0ZSwgYXJyYXlOYW1lKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9MaXN0O1xuIiwiaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XG5cbmZ1bmN0aW9uIGdldFVuaXF1ZUlEKGlkUHJlZml4KSB7XG4gIHJldHVybiB1bmlxaWQoaWRQcmVmaXgpO1xufVxuXG5jb25zdCBjcmVhdG9yID0gKHN0YXRlLCBhcnJheU5hbWUsIG9iamVjdCwgdHlwZSkgPT4gKHtcbiAgY3JlYXRlOiAoaWRQcmVmaXgpID0+IHtcbiAgICAvLyBHZXQgdGhlIHR5cGUgb2YgY2hpbGQgdG8gYWRkXG4gICAgbGV0IGNoaWxkVHlwZTtcbiAgICBpZiAodHlwZSA9PT0gXCJsaXN0XCIpIHtcbiAgICAgIGNoaWxkVHlwZSA9IFwidG9kb1wiO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJwcm9qXCIpIHtcbiAgICAgIGNoaWxkVHlwZSA9IFwibGlzdFwiO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IGdldFVuaXF1ZUlEKGlkUHJlZml4KTtcbiAgICBjb25zdCBvYmpOYW1lID0gYE5ldyAke2NoaWxkVHlwZX1gO1xuICAgIGNvbnN0IGluZm8gPSBudWxsO1xuICAgIC8vIEFkZCBhIGNoaWxkIG9iamVjdCB0byB0aGUgYXJyYXlcbiAgICBzdGF0ZVtgJHthcnJheU5hbWV9YF0ucHVzaChvYmplY3Qob2JqTmFtZSwgaWQsIGluZm8sIGNoaWxkVHlwZSkpO1xuICB9LFxufSk7XG5cbmNvbnN0IHJlbW92ZXIgPSAoc3RhdGUsIGFycmF5TmFtZSkgPT4gKHtcbiAgZGVsZXRlSXRlbTogKGlkKSA9PlxuICAgIHN0YXRlW2Ake2FycmF5TmFtZX1gXS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgIT09IGlkKSxcbn0pO1xuXG5jb25zdCB0b2RvUHJvdG8gPSAobmFtZSwgaWQsIGluZm8sIHR5cGUpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgbmFtZSxcbiAgICBpZCxcbiAgICBpbmZvLFxuICAgIHR5cGUsXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gIH07XG59O1xuXG5leHBvcnQgeyB0b2RvUHJvdG8sIGNyZWF0b3IsIHJlbW92ZXIsIGdldFVuaXF1ZUlEIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGdldFVuaXF1ZUlEIH0gZnJvbSBcIi4vdG9kb1Byb3RvXCI7XG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQge1xuICBzZXRVcERPTSxcbiAgdXBkYXRlUHJvalZpZXcsXG4gIGRpc3BsYXlQcm9qZWN0LFxuICB1cGRhdGVTaWRlYmFyTGlzdCxcbiAgZGlzcGxheUVtcHR5UHJvakFycmF5LFxufSBmcm9tIFwiLi9kb21NYW5hZ2VyXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRvZG9Gb3JtLCBnZW5lcmF0ZUxpc3RGb3JtIH0gZnJvbSBcIi4vZm9ybU1hbmFnZXJcIjtcbmltcG9ydCByZXR1cm5PYmplY3RGcm9tQXJyYXkgZnJvbSBcIi4vb2JqZWN0TG9naWNcIjtcblxuY29uc3QgcHJvakFycmF5ID0gW107XG5cbi8qIFJFRkFDVE9SIFRPIE1PRFVMRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBUT0RPL0xJU1QgTE9HSUNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4vKlxuX19fQ1JFQVRFIFBST0ovTElTVF9fX1xuKi9cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgcHJvamVjdFxuY29uc3QgY3JlYXRlUHJvaiA9IChuYW1lID0gXCJOZXcgUHJvamVjdFwiLCBpbmZvID0gdW5kZWZpbmVkKSA9PiB7XG4gIC8vIEdldCBhIHVuaXF1ZSBJRCBmb3IgdGhlIHByb2plY3RcbiAgY29uc3QgaWQgPSBnZXRVbmlxdWVJRChcInByb2otXCIpO1xuICAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBvYmplY3RcbiAgY29uc3QgbmV3UHJvaiA9IHByb2plY3QobmFtZSwgaWQsIGluZm8pO1xuICAvLyBQdXNoIHRoZSBuZXcgcHJvamVjdCBvYmplY3QgdG8gdGhlIHByb2plY3QgYXJyYXlcbiAgcHJvakFycmF5LnB1c2gobmV3UHJvaik7XG5cbiAgLy8gUmV0dXJuIHRoZSBwcm9qZWN0IG9iamVjdFxuICByZXR1cm4gbmV3UHJvajtcbn07XG5cbi8qXG4gIF9fX0VWRU5UIEhBTkRMRVJTX19fIChmb3IgZXZlbnQgbGlzdGVuZXJzKVxuKi9cblxuLyogQUREIEVWRU5UUyAqL1xuXG4vLyBIYW5kbGUgdG9kbyBhZGQgZXZlbnRcbmZ1bmN0aW9uIGhhbmRsZVRvZG9BZGQoZSkge1xuICAvLyBHZXQgcHJvamVjdCBpZFxuICBjb25zdCBwcm9qSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBHZXQgcHJvamVjdCBvYmplY3QgZnJvbSBhcnJheVxuICBjb25zdCBwcm9qID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KHByb2pJZCwgcHJvakFycmF5KTtcbiAgLy8gR2V0IGxpc3QgaWRcbiAgY29uc3QgbGlzdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5saXN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGxpc3QgPSByZXR1cm5PYmplY3RGcm9tQXJyYXkobGlzdElkLCBwcm9qLmxpc3RBcnJheSk7XG4gIC8vIENyZWF0ZSBhIHRvZG8gaXRlbVxuICBsaXN0LmNyZWF0ZShcInRvZG8tXCIpO1xuICAvLyBVcGRhdGUgdmlldyBvZiBsaXN0cyBpbiBhcnJheSBpbiBET01cbiAgdXBkYXRlUHJvalZpZXcocHJvai5saXN0QXJyYXkpO1xufVxuXG4vLyBIYW5kbGUgbGlzdCBhZGQgZXZlbnRcbmZ1bmN0aW9uIGhhbmRsZUxpc3RBZGQoZSkge1xuICAvLyBHZXQgcHJvamVjdCBpZFxuICBjb25zdCBwcm9qSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBHZXQgcHJvamVjdCBvYmplY3QgZnJvbSBhcnJheVxuICBjb25zdCBwcm9qID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KHByb2pJZCwgcHJvakFycmF5KTtcbiAgLy8gQ3JlYXRlIGEgbGlzdCBpbiB0aGUgcHJvamVjdFxuICBwcm9qLmNyZWF0ZShcImxpc3QtXCIpO1xuICAvLyBHZXQgbmV3IGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGxpc3QgPSBwcm9qLmxpc3RBcnJheVtwcm9qLmxpc3RBcnJheS5sZW5ndGggLSAxXTtcbiAgLy8gR2V0IElEIG9mIG5ldyBsaXN0XG4gIGNvbnN0IGxpc3RJZCA9IGxpc3QuaWQ7XG4gIC8vIFVwZGF0ZSB2aWV3IG9mIHByb2plY3QgaW4gYXJyYXkgaW4gRE9NXG4gIHVwZGF0ZVByb2pWaWV3KHByb2oubGlzdEFycmF5KTtcbn1cblxuLy8gSGFuZGxlIHByb2plY3QgYWRkIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVQcm9qQWRkKGUpIHtcbiAgLy8gQ3JlYXRlIGEgbmV3IHByb2plY3RcbiAgY29uc3QgbmV3UHJvaiA9IGNyZWF0ZVByb2ooKTtcblxuICAvLyBVcGRhdGUgc2lkZWJhclxuICB1cGRhdGVTaWRlYmFyTGlzdChwcm9qQXJyYXkpO1xuXG4gIC8vIERpc3BsYXkgbmV3IHByb2plY3RcbiAgZGlzcGxheVByb2plY3QobmV3UHJvaik7XG59XG5cbi8qIERFTEVURSBFVkVOVFMgKi9cblxuLy8gSGFuZGxlIHRvZG8gZGVsZXRlIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVUb2RvRGVsKGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWRcbiAgY29uc3QgcHJvaklkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gIC8vIEdldCB0b2RvIElEXG4gIGNvbnN0IHRvZG9JZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAvLyBHZXQgbGlzdCBJRFxuICBjb25zdCBsaXN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmxpc3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBGaWx0ZXIgdGhyb3VnaCBhcnJheSBvZiBsaXN0cyB0byBmaW5kIG1hdGNoaW5nIGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGxpc3QgPSByZXR1cm5PYmplY3RGcm9tQXJyYXkobGlzdElkLCBwcm9qLmxpc3RBcnJheSk7XG4gIC8vIFJlbW92ZSB0aGUgZmlyc3QgNCBjaGFyYWN0ZXJzIGZyb20gdGFyZ2V0SWQgc3RyaW5nIChGaXJzdCA0IGNoYXJhY3RlcnM6IFwiZGVsLVwiKVxuICBjb25zdCB0b2RvT2JqSWQgPSB0b2RvSWQuc3Vic3RyaW5nKDQpO1xuICAvLyBGaW5kIGluZGV4IG9mIG9iamVjdCBpbiBhcnJheVxuICBjb25zdCBhcnJheUluZGV4ID0gbGlzdC50b2RvQXJyYXkuZmluZEluZGV4KFxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSB0b2RvT2JqSWRcbiAgKTtcbiAgLy8gUmVtb3ZlIHRoZSB0b2RvIG9iamVjdCBmcm9tIGFycmF5IGluIHBhcmVudCBsaXN0IG9iamVjdFxuICBsaXN0LnRvZG9BcnJheS5zcGxpY2UoYXJyYXlJbmRleCwgMSk7XG4gIC8vIFVwZGF0ZSBwcm9qZWN0IHZpZXcgaW4gRE9NXG4gIHVwZGF0ZVByb2pWaWV3KHByb2oubGlzdEFycmF5KTtcbn1cblxuLy8gSGFuZGxlIGxpc3QgZGVsZXRlIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVMaXN0RGVsKGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWRcbiAgY29uc3QgcHJvaklkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gIC8vIEdldCBsaXN0IElEXG4gIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEZpbHRlciB0aHJvdWdoIGFycmF5IG9mIGxpc3RzIHRvIGZpbmQgbWF0Y2hpbmcgbGlzdCBvYmplY3RcbiAgY29uc3QgYXJyYXlJbmRleCA9IHByb2oubGlzdEFycmF5LmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gbGlzdElkXG4gICk7XG4gIC8vIFJlbW92ZSB0aGUgbGlzdCBvYmplY3QgZnJvbSBhcnJheSBpbiBwYXJlbnQgcHJvamVjdCBvYmplY3RcbiAgcHJvai5saXN0QXJyYXkuc3BsaWNlKGFycmF5SW5kZXgsIDEpO1xuICAvLyBVcGRhdGUgcHJvaiB2aWV3IGluIERPTVxuICB1cGRhdGVQcm9qVmlldyhwcm9qLmxpc3RBcnJheSk7XG59XG5cbi8vIEhhbmRsZSBwcm9qZWN0IGRlbGV0aW9uIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVQcm9qRGVsKGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWQgZnJvbSBwcm9qZWN0IGNvbnRhaW5lclxuICBjb25zdCBwcm9qSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBHZXQgcHJvamVjdCBvYmplY3QgZnJvbSBhcnJheVxuICBjb25zdCBhcnJheUluZGV4ID0gcHJvakFycmF5LmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gcHJvaklkKTtcbiAgLy8gUmVtb3ZlIHRoZSBsaXN0IG9iamVjdCBmcm9tIGFycmF5IGluIHBhcmVudCBwcm9qZWN0IG9iamVjdFxuICBwcm9qQXJyYXkuc3BsaWNlKGFycmF5SW5kZXgsIDEpO1xuICAvLyBEaXNwbGF5IHByZXZpb3VzIHByb2plY3RcbiAgaWYgKHByb2pBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheVByb2plY3QocHJvakFycmF5W2FycmF5SW5kZXggLSAxXSk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheUVtcHR5UHJvakFycmF5KCk7XG4gIH1cbiAgLy8gVXBkYXRlIHNpZGViYXIgbGlzdCBvZiBwcm9qZWN0c1xuICB1cGRhdGVTaWRlYmFyTGlzdChwcm9qQXJyYXkpO1xufVxuXG4vKiBFRElUIEVWRU5UUyAqL1xuXG4vLyBIYW5kbGUgdG9kbyBlZGl0IGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVUb2RvRWRpdChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkXG4gIGNvbnN0IHByb2pJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBsaXN0IGlkXG4gIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCB0aGUgaWQgb2YgdGhlIHRhcmdldGVkIHRvZG8gRE9NIGVsZW1lbnRcbiAgY29uc3QgdG9kb0lkID0gZS50YXJnZXQuaWQ7XG4gIC8vIFJlbW92ZSB0aGUgZmlyc3QgNCBjaGFyYWN0ZXJzIGZyb20gdGFyZ2V0SWQgc3RyaW5nIChGaXJzdCA1IGNoYXJhY3RlcnM6IFwiZWRpdC1cIilcbiAgY29uc3QgdG9kb09iaklkID0gdG9kb0lkLnN1YnN0cmluZyg1KTtcblxuICBnZW5lcmF0ZVRvZG9Gb3JtKHByb2pJZCwgcHJvakFycmF5LCBsaXN0SWQsIHRvZG9PYmpJZCk7XG59XG5cbi8vIEhhbmRsZSBsaXN0IGVkaXQgZXZlbnRcbmZ1bmN0aW9uIGhhbmRsZUxpc3RFZGl0KGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWRcbiAgY29uc3QgcHJvaklkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IGxpc3QgaWRcbiAgY29uc3QgbGlzdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5saXN0LWNvbnRhaW5lclwiKS5pZDtcblxuICBnZW5lcmF0ZUxpc3RGb3JtKHByb2pJZCwgcHJvakFycmF5LCBsaXN0SWQpO1xufVxuXG4vLyBIYW5kbGUgcHJvamVjdCBlZGl0IGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVQcm9qRWRpdChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkIGZyb20gcHJvamVjdCBjb250YWluZXJcbiAgY29uc3QgcHJvaklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcblxuICAvLyAvLyBHZXQgcHJvamVjdCBvYmplY3QgZnJvbSBhcnJheVxuICAvLyBjb25zdCBhcnJheUluZGV4ID0gcHJvakFycmF5LmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gcHJvaklkKTtcbn1cblxuLypcbiAgX19fRVZFTlQgTElTVEVORVJTX19fXG4qL1xuLy8gR2xvYmFsIGV2ZW50IGxpc3RlbmVyXG5mdW5jdGlvbiBhZGRHbG9iYWxFdmVudExpc3RlbmVyKHR5cGUsIHNlbGVjdG9yLCBjYWxsYmFjaykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSBjYWxsYmFjayhlKTtcbiAgfSk7XG59XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uYWxpdHkgZm9yIHNpZGViYXIgYWRkIHByb2plY3QgYnV0dG9uXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXCIuc2ItYWRkLWJ1dHRvblwiLCAoZSkgPT4ge1xuICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIgZm9yIGFkZGluZyBhIHByb2plY3RcbiAgaGFuZGxlUHJvakFkZChlKTtcbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbmFsaXR5IGZvciBhZGQgaWNvbnNcbmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcIi5hZGQtaWNvblwiLCAoZSkgPT4ge1xuICAvLyBTZXQgdmFyaWFibGVzIGZvciB0aGUgRE9NIGVsZW1lbnQncyB0eXBlIGFuZCBpZCBhdHRyaWJ1dGVzXG4gIGNvbnN0IHRhcmdldFR5cGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgdHlwZSBpcyBhIGxpc3RcbiAgaWYgKHRhcmdldFR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgaGFuZGxlVG9kb0FkZChlKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBcInByb2pcIikge1xuICAgIGhhbmRsZUxpc3RBZGQoZSk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbmFsaXR5IGZvciBlZGl0IGljb25zXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXCIuZWRpdC1pY29uXCIsIChlKSA9PiB7XG4gIC8vIFNldCB2YXJpYWJsZXMgZm9yIHRoZSBET00gZWxlbWVudCdzIHR5cGUgYW5kIGlkIGF0dHJpYnV0ZXNcbiAgY29uc3QgdGFyZ2V0VHlwZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XG5cbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCB0eXBlIGlzIGEgbGlzdFxuICBpZiAodGFyZ2V0VHlwZSA9PT0gXCJ0b2RvXCIpIHtcbiAgICBoYW5kbGVUb2RvRWRpdChlKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBcImxpc3RcIikge1xuICAgIGhhbmRsZUxpc3RFZGl0KGUpO1xuICB9IGVsc2UgaWYgKHRhcmdldFR5cGUgPT09IFwicHJvalwiKSB7XG4gICAgaGFuZGxlUHJvakVkaXQoZSk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbmFsaXR5IGZvciBkZWxldGUgaWNvbnNcbmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcIi5kZWwtaWNvblwiLCAoZSkgPT4ge1xuICAvLyBTZXQgdmFyaWFibGVzIGZvciB0aGUgRE9NIGVsZW1lbnQncyB0eXBlIGFuZCBpZCBhdHRyaWJ1dGVzXG4gIGNvbnN0IHRhcmdldFR5cGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgdHlwZSBpcyBhIGxpc3RcbiAgaWYgKHRhcmdldFR5cGUgPT09IFwidG9kb1wiKSB7XG4gICAgaGFuZGxlVG9kb0RlbChlKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBcImxpc3RcIikge1xuICAgIGhhbmRsZUxpc3REZWwoZSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0VHlwZSA9PT0gXCJwcm9qXCIpIHtcbiAgICBoYW5kbGVQcm9qRGVsKGUpO1xuICB9XG59KTtcblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgSU5JVElBTElaRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLy8gQ3JlYXRlIGEgYmxhbmsgcHJvamVjdFxuZnVuY3Rpb24gY3JlYXRlRXhhbXBsZVByb2ooKSB7XG4gIC8vIENyZWF0ZSB0aGUgcHJvamVjdFxuICBjb25zdCBteVByb2ogPSBjcmVhdGVQcm9qKFwiTXkgZmlyc3QgcHJvamVjdFwiLCBcIlRoaXMgaXMgbXkgZmlyc3QgcHJvamVjdFwiKTtcblxuICAvLyBDcmVhdGUgYSBsaXN0IGluIHRoZSBwcm9qZWN0XG4gIG15UHJvai5jcmVhdGUoXCJsaXN0LVwiKTtcblxuICAvLyBDcmVhdGUgYSBzZXQgb2YgdG9kbyBpdGVtcyBpbiB0aGUgbmV3IGxpc3RcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBteVByb2oubGlzdEFycmF5WzBdLmNyZWF0ZShcInRvZG8tXCIpO1xuICB9XG59XG5cbi8vIENhbGwgdGhlIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIGJsYW5rIHByb2plY3RcbmNyZWF0ZUV4YW1wbGVQcm9qKCk7XG5cbi8vIFNldCB1cCB0aGUgRE9NXG5zZXRVcERPTShwcm9qQXJyYXkpO1xuXG4vLyBEaXNwbGF5IHRoZSBkZWZhdWx0IHByb2plY3RcbmZ1bmN0aW9uIGRpc3BsYXlEZWZhdWx0UHJvamVjdChpbmRleCA9IDApIHtcbiAgZGlzcGxheVByb2plY3QocHJvakFycmF5W2luZGV4XSk7XG59XG5cbi8vIENhbGwgZnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgdGhlIGRlZmF1bHQgcHJvamVjdFxuZGlzcGxheURlZmF1bHRQcm9qZWN0KCk7XG5cbi8vIEdldCBjdXJyZW50IHByb2plY3QgaWQgb2YgRE9NIHByb2plY3QgY29udGFpbmVyIGVsZW1lbnRcbmNvbnN0IGN1clByb2pJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuaWQ7XG5cbi8vIEdldCBvYmplY3Qgb2YgY3VycmVudCBwcm9qZWN0IGZyb20gbWFpbiBwcm9qZWN0IGFycmF5XG5jb25zdCBjdXJQcm9qT2JqID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KGN1clByb2pJZCwgcHJvakFycmF5KTtcblxuLy8gR2V0IGlkIG9mIGZpcnN0IGxpc3QgZnJvbSBjdXJyZW50IHByb2plY3Qgb2JqZWN0XG5jb25zdCBjdXJMaXN0T2JqID0gY3VyUHJvak9iai5saXN0QXJyYXlbMF07XG5jb25zdCBjdXJMaXN0SWQgPSBjdXJMaXN0T2JqLmlkO1xuLy8gR2V0IGlkIG9mIGZpcnN0IHRvZG8gaXRlbSBpbiB0aGUgbGlzdCBvYmplY3QncyB0b2RvIGFycmF5XG5jb25zdCBjdXJUb2RvSWQgPSBjdXJMaXN0T2JqLnRvZG9BcnJheVswXS5pZDtcblxuLy8gQ2FsbCBnZW5lcmF0ZVRvZG9Gb3JtIGZvciB0ZXN0aW5nXG4vLyBnZW5lcmF0ZVRvZG9Gb3JtKGN1clByb2pJZCwgcHJvakFycmF5LCBjdXJMaXN0SWQsIGN1clRvZG9JZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=