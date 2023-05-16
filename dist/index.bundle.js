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

  // Create form background
  const formBackground = document.createElement("div");
  formBackground.classList.add("form-background");
  // Create form container
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  // Append container to background element
  formBackground.appendChild(formContainer);

  // Add container for name elements
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("form-div");
  // Add label for name input
  const todoNameLabel = document.createElement("label");
  todoNameLabel.setAttribute("for", "todo-name");
  todoNameLabel.textContent = "Name:";
  // Add input for name and set attributes
  const todoNameInput = document.createElement("input");
  todoNameInput.setAttribute("type", "text");
  todoNameInput.setAttribute("id", "todo-name");
  todoNameInput.setAttribute("name", "todo-name");
  // Set input as required
  todoNameInput.required = true;
  // Set input value to current name
  todoNameInput.value = currentName;

  // Append both label and input for name to name container
  nameDiv.appendChild(todoNameLabel);
  nameDiv.appendChild(todoNameInput);
  // Append the name container to form container
  formContainer.appendChild(nameDiv);

  // Add container for priority elements
  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("form-div");
  // Add label for priority select
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "todo-priority");
  priorityLabel.textContent = "Priority:";
  // Add priority select element
  const prioritySelect = document.createElement("select");
  prioritySelect.name = "todo-priority";
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
  prioritySelect.setAttribute("id", "todo-priority");

  // Add the select elements to priority container
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(prioritySelect);
  // Append the priority container to the form container
  formContainer.appendChild(priorityDiv);

  // Add container for info
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("form-div");
  // Add label for info box
  const infoLabel = document.createElement("label");
  infoLabel.setAttribute("for", "todo-info");
  infoLabel.textContent = "Info:";
  // Add info text area element
  const infoTextArea = document.createElement("textarea");
  infoTextArea.name = "todo-info";
  // Set info text area value to current info
  infoTextArea.value = currentInfo;

  // Add the info elements to info container
  infoDiv.appendChild(infoLabel);
  infoDiv.appendChild(infoTextArea);
  // Append the info container to the form container
  formContainer.appendChild(infoDiv);

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
    if (todoNameInput.value !== "") {
      // Change the name of todo object
      todo.name = todoNameInput.value;
      // Change the priority of todo object
      todo.priority = prioritySelect.value;
      // Change the info of the todo object
      todo.info = infoTextArea.value;

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

  // Add form container to document
  const content = document.querySelector(".content-container");
  content.appendChild(formBackground);
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

  // Create form background
  const formBackground = document.createElement("div");
  formBackground.classList.add("form-background");
  // Create form container
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  // Append container to background element
  formBackground.appendChild(formContainer);

  // Add container for name elements
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("form-div");
  // Add label for name input
  const listNameLabel = document.createElement("label");
  listNameLabel.setAttribute("for", "list-name");
  listNameLabel.textContent = "Name:";
  // Add input for name and set attributes
  const listNameInput = document.createElement("input");
  listNameInput.setAttribute("type", "text");
  listNameInput.setAttribute("id", "list-name");
  listNameInput.setAttribute("name", "list-name");
  // Set input as required
  listNameInput.required = true;
  // Set input value to current name
  listNameInput.value = currentName;

  // Append both label and input for name to name container
  nameDiv.appendChild(listNameLabel);
  nameDiv.appendChild(listNameInput);
  // Append the name container to form container
  formContainer.appendChild(nameDiv);

  // Add container for info
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("form-div");
  // Add label for info box
  const infoLabel = document.createElement("label");
  infoLabel.setAttribute("for", "todo-info");
  infoLabel.textContent = "Info:";
  // Add info text area element
  const infoTextArea = document.createElement("textarea");
  infoTextArea.name = "todo-info";
  // Set info text area value to current info
  infoTextArea.value = currentInfo;

  // Add the info elements to info container
  infoDiv.appendChild(infoLabel);
  infoDiv.appendChild(infoTextArea);
  // Append the info container to the form container
  formContainer.appendChild(infoDiv);

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
    if (listNameInput.value !== "") {
      // Change the name of todo object
      list.name = listNameInput.value;
      // Change the info of the todo object
      list.info = infoTextArea.value;

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

  // Add form container to document
  const content = document.querySelector(".content-container");
  content.appendChild(formBackground);
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
  console.log("STILL TO IMPLEMENT");

  // Get project id from project container
  const projId = document.querySelector(".project-container").id;
  // Get project object from array
  const arrayIndex = projArray.findIndex((element) => element.id === projId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsK0hBQStILElBQUksSUFBSSxtQkFBbUIsV0FBVyx3QkFBd0Is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QUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwVmdEO0FBQ0o7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBcUI7QUFDcEM7QUFDQSxlQUFlLHdEQUFxQjtBQUNwQztBQUNBLGVBQWUsd0RBQXFCOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFEQUFROztBQUVSO0FBQ0E7QUFDQSxFQUFFLDJEQUFjO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix3REFBcUI7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdW5pcWlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb2JqZWN0TG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb1Byb3RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZmYW1pbHk9U291cmNlK0NvZGUrUHJvOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWluLXdpZHRoOiAxMzEwcHg7XFxuICAtLWJnLXNpZGUtaGVhZGVyOiAjM2UzZTNlO1xcbiAgLS1iZy1jb2xvcjogIzg4ODg4ODtcXG4gIC0tYmctbGlzdDogIzNlM2UzZTtcXG4gIC0tdGl0bGUtaWNvbi13aWR0aDogMS41cmVtO1xcbiAgLS1oZWFkZXItaWNvbi13aWR0aDogMi4ycmVtO1xcbiAgLS1saXN0LXdpZHRoOiAzNTBweDtcXG4gIC0tbGlzdC1wYWRkaW5nOiAyMHB4O1xcbiAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gIC0tcmVnLWZvbnQ6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICAtLWZvbnQtY29sOiB3aGl0ZXNtb2tlO1xcbiAgLS10aXRsZS1mb250OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xcblxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMC4yNWZyKSAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLSBTSURFQkFSIFZJRVcgLS0tLS0tLS0tLS0tICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zYi1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2ItYWRkLWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sKTtcXG4gIHBhZGRpbmc6IDEuNGVtIDIuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLnNiLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2wpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0gUFJPSkVDVCBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5wcm9qZWN0LXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwcHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgd2lkdGg6IHZhcigtLWhlYWRlci1pY29uLXdpZHRoKTtcXG59XFxuXFxuLmhlYWRlci1pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgdmFyKC0taGVhZGVyLWljb24td2lkdGgpKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChyZXBlYXQoMiwgdmFyKC0tbGlzdC13aWR0aCkpLCByZXBlYXQoNCwgKC0tbGlzdC13aWR0aCkpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIHZhcigtLWxpc3Qtd2lkdGgpKTtcXG4gIHBhZGRpbmc6IHZhcigtLWxpc3QtcGFkZGluZyk7XFxufVxcblxcbiNlbXB0eSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICAvKiB3aWR0aDogdmFyKC0tbGlzdC13aWR0aCk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saXN0KTtcXG4gIHBhZGRpbmc6IDI1cHggMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiB2YXIoLS10aXRsZS1pY29uLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tdGl0bGUtaWNvbi13aWR0aCk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG59XFxuXFxuLnRvZG8ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbi50b2RvIC5pY29uLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kbyBpbWcge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tdGl0bGUtaWNvbi13aWR0aCkgKiAwLjgpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpdGxlLWljb24td2lkdGgpICogMC44KTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDU0JSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmZvcm0tYmFja2dyb3VuZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qIHRvcDogNTAlOyAqL1xcbiAgLyogbGVmdDogNTAlOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjM2UzZTNlNmU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzZTNlO1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBib3JkZXI6IHZhcigtLWZvbnQtY29sKSBzb2xpZCAycHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggYXV0bztcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3RvZG8tbmFtZSB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuI3RvZG8tcHJpb3JpdHkge1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5mb3JtLWJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5lZGl0LWZvcm0tYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0Qix1Q0FBdUM7O0VBRXZDLHlD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QUNiLGlDQUFpQztFQUNqQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmZhbWlseT1Tb3VyY2UrQ29kZStQcm86d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1taW4td2lkdGg6IDEzMTBweDtcXG4gIC0tYmctc2lkZS1oZWFkZXI6ICMzZTNlM2U7XFxuICAtLWJnLWNvbG9yOiAjODg4ODg4O1xcbiAgLS1iZy1saXN0OiAjM2UzZTNlO1xcbiAgLS10aXRsZS1pY29uLXdpZHRoOiAxLjVyZW07XFxuICAtLWhlYWRlci1pY29uLXdpZHRoOiAyLjJyZW07XFxuICAtLWxpc3Qtd2lkdGg6IDM1MHB4O1xcbiAgLS1saXN0LXBhZGRpbmc6IDIwcHg7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgLS1yZWctZm9udDogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcXG4gIC0tZm9udC1jb2w6IHdoaXRlc21va2U7XFxuICAtLXRpdGxlLWZvbnQ6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XFxuXFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwMHB4LCAwLjI1ZnIpIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tIFNJREVCQVIgVklFVyAtLS0tLS0tLS0tLS0gKi9cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLnByb2plY3RzLXNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNiLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zYi1hZGQtYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2wpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZm9udC1jb2wpO1xcbiAgcGFkZGluZzogMS40ZW0gMi40ZW07XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uc2ItYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbCk7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLSBQUk9KRUNUIFZJRVcgLS0tLS0tLS0tLS0tICovXFxuLnByb2plY3QtdmlldyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMDBweDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxuICB3aWR0aDogdmFyKC0taGVhZGVyLWljb24td2lkdGgpO1xcbn1cXG5cXG4uaGVhZGVyLWljb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCB2YXIoLS1oZWFkZXItaWNvbi13aWR0aCkpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KHJlcGVhdCgyLCB2YXIoLS1saXN0LXdpZHRoKSksIHJlcGVhdCg0LCAoLS1saXN0LXdpZHRoKSkpOyAqL1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgdmFyKC0tbGlzdC13aWR0aCkpO1xcbiAgcGFkZGluZzogdmFyKC0tbGlzdC1wYWRkaW5nKTtcXG59XFxuXFxuI2VtcHR5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIC8qIHdpZHRoOiB2YXIoLS1saXN0LXdpZHRoKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpc3QpO1xcbiAgcGFkZGluZzogMjVweCAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIFxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG5cXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbi5pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IHZhcigtLXRpdGxlLWljb24td2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS10aXRsZS1pY29uLXdpZHRoKTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDU0JSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbn1cXG5cXG4udG9kbyB7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4udG9kby1uYW1lIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLnRvZG8gLmljb24tY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvIGltZyB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS10aXRsZS1pY29uLXdpZHRoKSAqIDAuOCk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdGl0bGUtaWNvbi13aWR0aCkgKiAwLjgpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4uZm9ybS1iYWNrZ3JvdW5kIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLyogdG9wOiA1MCU7ICovXFxuICAvKiBsZWZ0OiA1MCU7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMzZTNlM2U2ZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTNlM2U7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIGJvcmRlcjogdmFyKC0tZm9udC1jb2wpIHNvbGlkIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5mb3JtLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jdG9kby1uYW1lIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jdG9kby1wcmlvcml0eSB7XFxuICB3aWR0aDogOTBweDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmVkaXQtZm9ybS1idG4ge1xcbiAgcGFkZGluZzogMC40ZW0gMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42ZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDIxIEhhbMOhc3ogw4Fkw6FtIDxhZGFtQGFpbWZvcm0uY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciBtYWMgPSAnJywgb3MgPSByZXF1aXJlKCdvcycpOyBcbiAgICBpZihvcy5uZXR3b3JrSW50ZXJmYWNlcykgdmFyIG5ldHdvcmtJbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBpZihuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGxvb3A6XG4gICAgICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXSAhPT0gdW5kZWZpbmVkICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWsgbG9vcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG4gICAgfVxufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiaW1wb3J0IHBsdXNJY29uIGZyb20gXCIuL2ltYWdlcy9wbHVzLWJveC1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IHRyYXNoQ2FuSWNvbiBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgZmlsZUVkaXRJY29uIGZyb20gXCIuL2ltYWdlcy9maWxlLWVkaXQtb3V0bGluZS5zdmdcIjtcblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkRPTSBTRVRVUFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmNvbnN0IHNpZGViYXJUaXRsZUVsZW1lbnQgPSBcImgyXCI7XG5jb25zdCBoZWFkZXJUaXRsZUVsZW1lbnQgPSBcImgyXCI7XG5jb25zdCBsaXN0VGl0bGVFbGVtZW50ID0gXCJoM1wiO1xuY29uc3QgdG9kb05hbWVFbGVtZW50ID0gXCJoNVwiO1xuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYWxsIGxpc3RzIGZyb20gcHJvamVjdCB2aWV3IGluIERPTVxuZnVuY3Rpb24gZW1wdHlTaWRlYmFyTGlzdChzaWRlYmFyUHJvakxpc3QpIHtcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBvZiBwcm9qZWN0IG5vZGVcbiAgd2hpbGUgKHNpZGViYXJQcm9qTGlzdC5maXJzdENoaWxkKSB7XG4gICAgc2lkZWJhclByb2pMaXN0LnJlbW92ZUNoaWxkKHNpZGViYXJQcm9qTGlzdC5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNpZGViYXJMaXN0KHByb2pBcnJheSkge1xuICAvLyBHZXQgY29udGFpbmVyIGZvciBwcm9qZWN0cyBpbiBzaWRlYmFyXG4gIGNvbnN0IHNpZGViYXJQcm9qTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtc2lkZWJhclwiKTtcblxuICAvLyBFbXB0eSBzaWRlYmFyIGxpc3RcbiAgZW1wdHlTaWRlYmFyTGlzdChzaWRlYmFyUHJvakxpc3QpO1xuXG4gIC8vIEZvciBlYWNoIHByb2plY3QgaW4gYXJyYXksIGFkZCBuYW1lIG9mIHByb2plY3QgdG8gc2lkZWJhciBwcm9qIGxpc3QgZGl2XG4gIHByb2pBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvakl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGxpc3RUaXRsZUVsZW1lbnQpO1xuICAgIHByb2pJdGVtLmNsYXNzTGlzdC5hZGQoXCJzYi1wcm9qLWl0ZW1cIik7XG4gICAgcHJvakl0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgc2lkZWJhclByb2pMaXN0LmFwcGVuZENoaWxkKHByb2pJdGVtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFVwSGVhZGVyKHByb2plY3RIZWFkZXIpIHtcbiAgLy8gQWRkIGNvbnRhaW5lciBmb3IgdGl0bGVcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRpdGxlXCIpO1xuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgLy8gQWRkIHRpdGxlIHRvIHByb2plY3QgaGVhZGVyXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoZWFkZXJUaXRsZUVsZW1lbnQpO1xuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgLy8gaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlci10aXRsZVwiKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICAvLyBBZGQgaWNvbiBjb250YWluZXIgdG8gaGVhZGVyXG4gIGNvbnN0IGhlYWRlckljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItaWNvbi1jb250YWluZXJcIik7XG4gIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySWNvbkNvbnRhaW5lcik7XG4gIC8vIEFkZCBpY29ucyB0byBjb250YWluZXJcbiAgY29uc3QgaGVhZGVyQWRkSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBoZWFkZXJBZGRJY29uLnNyYyA9IHBsdXNJY29uO1xuICBoZWFkZXJBZGRJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGQtaWNvblwiKTtcbiAgLy8gaGVhZGVyQWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJwcm9qSWRcIiwgXCJwcm9qMVwiKTtcbiAgaGVhZGVyQWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicHJvalwiKTtcbiAgaGVhZGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJBZGRJY29uKTtcbiAgY29uc3QgaGVhZGVyRWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaGVhZGVyRWRpdEljb24uc3JjID0gZmlsZUVkaXRJY29uO1xuICBoZWFkZXJFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1pY29uXCIpO1xuICAvLyBoZWFkZXJFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJwcm9qSWRcIiwgXCJwcm9qXCIpO1xuICBoZWFkZXJFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicHJvalwiKTtcbiAgaGVhZGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJFZGl0SWNvbik7XG4gIGNvbnN0IGhlYWRlclJlbW92ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaGVhZGVyUmVtb3ZlSWNvbi5zcmMgPSB0cmFzaENhbkljb247XG4gIGhlYWRlclJlbW92ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbC1pY29uXCIpO1xuICBoZWFkZXJSZW1vdmVJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJwcm9qXCIpO1xuICBoZWFkZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclJlbW92ZUljb24pO1xufVxuXG5mdW5jdGlvbiBzZXRVcERPTShwcm9qQXJyYXkpIHtcbiAgLy8gR2V0IGNvbnRlbnQgZGl2IGVsZW1lbnRcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFpbmVyXCIpO1xuXG4gIC8vIENyZWF0ZSBzaWRlYmFyIHNlY3Rpb25cbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgLy8gQ3JlYXRlIHNpZGViYXIgY29udGFpbmVyXG4gIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWNvbnRhaW5lclwiKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGFpbmVyKTtcbiAgLy8gQ3JlYXRlIHRpdGxlIGZvciBzaWRlYmFyXG4gIGNvbnN0IHNpZGViYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2lkZWJhclRpdGxlRWxlbWVudCk7XG4gIHNpZGViYXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci10aXRsZVwiKTtcbiAgc2lkZWJhclRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJUaXRsZSk7XG4gIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHByb2plY3RzIGluIHNpZGViYXJcbiAgY29uc3Qgc2lkZWJhclByb2pMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhclByb2pMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1zaWRlYmFyXCIpO1xuICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJQcm9qTGlzdCk7XG5cbiAgLy8gRm9yIGVhY2ggcHJvamVjdCBpbiBhcnJheSwgYWRkIG5hbWUgb2YgcHJvamVjdCB0byBzaWRlYmFyIHByb2ogbGlzdCBkaXZcbiAgcHJvakFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwcm9qSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobGlzdFRpdGxlRWxlbWVudCk7XG4gICAgcHJvakl0ZW0uY2xhc3NMaXN0LmFkZChcInNiLXByb2otaXRlbVwiKTtcbiAgICBwcm9qSXRlbS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICBzaWRlYmFyUHJvakxpc3QuYXBwZW5kQ2hpbGQocHJvakl0ZW0pO1xuICB9KTtcblxuICAvLyBBZGQgYnV0dG9uIGZvciBjcmVhdGluZyBuZXcgcHJvamVjdHMgdG8gc2lkZWJhclxuICBjb25zdCBhZGRQcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkUHJvakNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2ItYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYWRkUHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2pCdXR0b24uY2xhc3NMaXN0LmFkZChcInNiLWFkZC1idXR0b25cIik7XG4gIGFkZFByb2pCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gIGFkZFByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvakJ1dHRvbik7XG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvakNvbnRhaW5lcik7XG5cbiAgLy8gQ3JlYXRlIHByb2plY3Qgdmlld1xuICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RWaWV3LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXZpZXdcIik7XG5cbiAgLy8gQ3JlYXRlIHByb2plY3QgdmlldyBoZWFkZXJcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xuICBzZXRVcEhlYWRlcihwcm9qZWN0SGVhZGVyKTtcblxuICAvLyBBZGQgcHJvamVjdCBoZWFkZXIgdG8gcHJvamVjdCB2aWV3XG4gIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gIC8vIENyZWF0ZSBwcm9qZWN0IHZpZXcgbWFpbiBzZWN0aW9uXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcblxuICAvLyBBZGQgcHJvamVjdCBjb250YWluZXIgdG8gcHJvamVjdCB2aWV3XG4gIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIC8vIEFkZCBlbGVtZW50cyB0byBkb2N1bWVudFxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RWaWV3KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbn1cblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkRPTSBVUERBVEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IHRvZG8gbGlzdFxuY29uc3QgZGlzcGxheUxpc3QgPSAobGlzdCkgPT4ge1xuICAvLyBHZXQgcHJvamVjdCBjb250YWluZXJcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgLy8gQ3JlYXRlIG5ldyBlbGVtZW50XG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyBBc3NpZ24gY2xhc3MgYW5kIGlkIG5hbWVcbiAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC1jb250YWluZXJcIik7XG4gIGNvbnN0IGxpc3RJZE5hbWUgPSBgJHtsaXN0LmlkfWA7XG4gIGxpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgbGlzdElkTmFtZSk7XG5cbiAgLy8gRGlzcGxheSBuYW1lIGFzIHRpdGxlXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRhaW5lclwiKTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsaXN0VGl0bGVFbGVtZW50KTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3QtdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgLy8gRGlzcGxheSBpY29uc1xuICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jb250YWluZXJcIik7XG4gIGNvbnN0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYWRkSWNvbi5zcmMgPSBwbHVzSWNvbjtcbiAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLWljb25cIik7XG4gIGFkZEljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGFkZC0ke2xpc3RJZE5hbWV9YCk7XG4gIGFkZEljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImxpc3RcIik7XG4gIGFkZEljb24uc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEljb24pO1xuICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBlZGl0SWNvbi5zcmMgPSBmaWxlRWRpdEljb247XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWljb25cIik7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0LSR7bGlzdElkTmFtZX1gKTtcbiAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImxpc3RcIik7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWROYW1lKTtcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gIGNvbnN0IHJlbW92ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcmVtb3ZlSWNvbi5zcmMgPSB0cmFzaENhbkljb247XG4gIHJlbW92ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbC1pY29uXCIpO1xuICByZW1vdmVJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWwtJHtsaXN0SWROYW1lfWApO1xuICByZW1vdmVJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJsaXN0XCIpO1xuICByZW1vdmVJY29uLnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWROYW1lKTtcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVJY29uKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG5cbiAgLy8gRGlzcGxheSBsaXN0IGNvbnRlbnRzXG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRhaW5lclwiKTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgbGlzdC50b2RvQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIFRvZG8gYm94XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0lkTmFtZSA9IGAke2VsZW1lbnQuaWR9YDtcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgIHRvZG8uc2V0QXR0cmlidXRlKFwiaWRcIiwgdG9kb0lkTmFtZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAvLyBDaGVja2JveFxuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY2hrLSR7dG9kb0lkTmFtZX1gKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAvLyBUb2RvIG5hbWVcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9kb05hbWVFbGVtZW50KTtcbiAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kby1uYW1lXCIpO1xuICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgIC8vIFRvZG8gaWNvbnNcbiAgICBjb25zdCB0b2RvSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9JY29ucy5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kb0VkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2RvRWRpdC5zcmMgPSBmaWxlRWRpdEljb247XG4gICAgdG9kb0VkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcbiAgICB0b2RvRWRpdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZWRpdC0ke3RvZG9JZE5hbWV9YCk7XG4gICAgdG9kb0VkaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRvZG9cIik7XG4gICAgdG9kb0VkaXQuc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICAgIHRvZG9JY29ucy5hcHBlbmRDaGlsZCh0b2RvRWRpdCk7XG4gICAgY29uc3QgdG9kb0RlbCA9IG5ldyBJbWFnZSgpO1xuICAgIHRvZG9EZWwuc3JjID0gdHJhc2hDYW5JY29uO1xuICAgIHRvZG9EZWwuY2xhc3NMaXN0LmFkZChcImRlbC1pY29uXCIpO1xuICAgIHRvZG9EZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbC0ke3RvZG9JZE5hbWV9YCk7XG4gICAgdG9kb0RlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidG9kb1wiKTtcbiAgICB0b2RvRGVsLnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWROYW1lKTtcbiAgICB0b2RvSWNvbnMuYXBwZW5kQ2hpbGQodG9kb0RlbCk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvSWNvbnMpO1xuICAgIC8vIEFkZCB0b2RvIHRvIGNvbnRhaW5lclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG4gIH0pO1xuXG4gIC8vIEFkZCBsaXN0IGNvbnRhaW5lciB0byBET01cbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbn07XG5cbi8qXG4gIF9fX1VQREFURSBQUk9KRUNUIFZJRVdfX19cbiovXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYWxsIGxpc3RzIGZyb20gcHJvamVjdCB2aWV3IGluIERPTVxuZnVuY3Rpb24gZW1wdHlQcm9qVmlldyhsaXN0KSB7XG4gIC8vIEdldCBwcm9qZWN0IG5vZGUgaW4gRE9NXG4gIGNvbnN0IHByb2pOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBvZiBwcm9qZWN0IG5vZGVcbiAgd2hpbGUgKHByb2pOb2RlLmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qTm9kZS5yZW1vdmVDaGlsZChwcm9qTm9kZS5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBsaXN0IHRvIERPTVxuZnVuY3Rpb24gYWRkTGlzdFRvRE9NKGxpc3QpIHtcbiAgLy8gRGlzcGxheSBsaXN0IGluIERPTVxuICBkaXNwbGF5TGlzdChsaXN0KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHByb2plY3Qgdmlld1xuZnVuY3Rpb24gdXBkYXRlUHJvalZpZXcoYXJyYXkpIHtcbiAgLy8gRW1wdHkgcHJvamVjdCB2aWV3XG4gIGVtcHR5UHJvalZpZXcoKTtcbiAgLy8gQ3ljbGUgdGhyb3VnaCBhbGwgZWxlbWVudHMgb2YgcHJvamVjdCdzIGxpc3QgYXJyYXlcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIEFkZCBlbGVtZW50IHRvIERPTVxuICAgIGFkZExpc3RUb0RPTShlbGVtZW50KTtcbiAgfSk7XG59XG5cbi8qXG4gIF9fX0RJU1BMQVkgUFJPSkVDVF9fX1xuKi9cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBhbGwgbGlzdHMgZnJvbSBwcm9qZWN0IHZpZXcgaW4gRE9NXG5mdW5jdGlvbiBlbXB0eVByb2pDb250YWluZXIocHJvamVjdENvbnRhaW5lcikge1xuICAvLyBSZW1vdmUgYWxsIGNoaWxkcmVuIG9mIHByb2plY3Qgbm9kZVxuICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvak9iaikge1xuICAvLyBHZXQgdGhlIHByb2plY3QgY29udGFpbmVyIGVsZW1lbnQgZnJvbSBET01cbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gIC8vIEVtcHR5IGV4aXN0aW5nIHByb2plY3QgY29udGFpbmVyXG4gIGVtcHR5UHJvakNvbnRhaW5lcihwcm9qZWN0Q29udGFpbmVyKTtcblxuICAvLyBJZiBwcm9qZWN0IGFycmF5IHByZXZpb3VzbHkgZW1wdHkgdGhlbiBzZXRVcEhlYWRlclxuICBpZiAocHJvamVjdENvbnRhaW5lci5pZCA9PT0gXCJlbXB0eVwiKSB7XG4gICAgLy8gR2V0IHByb2plY3QgaGVhZGVyIGVsZW1lbnRcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcbiAgICBzZXRVcEhlYWRlcihwcm9qZWN0SGVhZGVyKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgcHJvamVjdCBJRFxuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qT2JqLmlkO1xuICAvLyBBZGQgSUQgdG8gcHJvamVjdCBjb250YWluZXIgZWxlbWVudFxuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RJRCk7XG5cbiAgLy8gR2V0IHRoZSBoZWFkZXIgdGl0bGUgZWxlbWVudFxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXRpdGxlXCIpO1xuICAvLyBTZXQgdGV4dCBmb3IgdGl0bGUgdG8gcHJvamVjdCBuYW1lXG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gcHJvak9iai5uYW1lO1xuXG4gIHByb2pPYmoubGlzdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICBkaXNwbGF5TGlzdChlbGVtZW50KTtcbiAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGVtcHR5IHByb2plY3QgaGVhZGVyXG5mdW5jdGlvbiBlbXB0eUhlYWRlcihwcm9qZWN0SGVhZGVyKSB7XG4gIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW4gb2YgaGVhZGVyIG5vZGVcbiAgd2hpbGUgKHByb2plY3RIZWFkZXIuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3RIZWFkZXIucmVtb3ZlQ2hpbGQocHJvamVjdEhlYWRlci5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFbXB0eVByb2pBcnJheSgpIHtcbiAgLy8gR2V0IHRoZSBwcm9qZWN0IGNvbnRhaW5lciBlbGVtZW50IGZyb20gRE9NXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICAvLyBFbXB0eSBleGlzdGluZyBwcm9qZWN0IGNvbnRhaW5lclxuICBlbXB0eVByb2pDb250YWluZXIocHJvamVjdENvbnRhaW5lcik7XG5cbiAgLy8gU2V0IGVtcHR5IGlkIGZvciBwcm9qZWN0IGNvbnRhaW5lclxuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1wdHlcIik7XG5cbiAgLy8gU2V0IHRleHQgZm9yIGVtcHR5IHByb2plY3QgYXJyYXlcbiAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiTm8gcHJvamVjdHMhIEFkZCBhIHByb2plY3QgaW4gdGhlIHNpZGViYXIhXCI7XG5cbiAgLy8gR2V0IHByb2plY3QgaGVhZGVyIGVsZW1lbnRcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXJcIik7XG4gIGVtcHR5SGVhZGVyKHByb2plY3RIZWFkZXIpO1xufVxuXG5leHBvcnQge1xuICBzZXRVcERPTSxcbiAgdXBkYXRlUHJvalZpZXcsXG4gIGRpc3BsYXlQcm9qZWN0LFxuICB1cGRhdGVTaWRlYmFyTGlzdCxcbiAgZGlzcGxheUVtcHR5UHJvakFycmF5LFxufTtcbiIsImltcG9ydCByZXR1cm5PYmplY3RGcm9tQXJyYXkgZnJvbSBcIi4vb2JqZWN0TG9naWNcIjtcbmltcG9ydCB7IHVwZGF0ZVByb2pWaWV3IH0gZnJvbSBcIi4vZG9tTWFuYWdlclwiO1xuXG4vLyBEZWZpbmUgcHJpb3JpdHkgb3B0aW9ucyBhcnJheVxuY29uc3QgcHJpb3JpdHlPcHRpb25zQXJyYXkgPSBbXCJub25lXCIsIFwibG93XCIsIFwibWVkaXVtXCIsIFwiaGlnaFwiXTtcblxuLy8gVG9kbyBlZGl0IGZvcm1cbmZ1bmN0aW9uIGdlbmVyYXRlVG9kb0Zvcm0ocHJvaklkLCBwcm9qQXJyYXksIGxpc3RJZCwgdG9kb0lkKSB7XG4gIC8vIEdldCB0aGUgcHJvamVjdCBvYmplY3QgZnJvbSB0aGUgcHJvamVjdCBhcnJheVxuICBjb25zdCBwcm9qID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KHByb2pJZCwgcHJvakFycmF5KTtcbiAgLy8gR2V0IHRoZSBsaXN0IG9iamVjdCBmcm9tIHRoZSBwcm9qZWN0J3MgbGlzdCBhcnJheVxuICBjb25zdCBsaXN0ID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KGxpc3RJZCwgcHJvai5saXN0QXJyYXkpO1xuICAvLyBHZXQgdGhlIHRvZG8gb2JqZWN0IGZyb20gdGhlIGxpc3QncyB0b2RvIGFycmF5XG4gIGNvbnN0IHRvZG8gPSByZXR1cm5PYmplY3RGcm9tQXJyYXkodG9kb0lkLCBsaXN0LnRvZG9BcnJheSk7XG5cbiAgLy8gR2V0IGN1cnJlbnQgbmFtZSBvZiB0b2RvXG4gIGNvbnN0IGN1cnJlbnROYW1lID0gdG9kby5uYW1lO1xuICAvLyBHZXQgY3VycmVudCBwcmlvcml0eSBvZiB0b2RvXG4gIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IHRvZG8ucHJpb3JpdHk7XG4gIC8vIEdldCBjdXJyZW50IGluZm8gb2YgdG9kb1xuICBjb25zdCBjdXJyZW50SW5mbyA9IHRvZG8uaW5mbztcblxuICAvLyBDcmVhdGUgZm9ybSBiYWNrZ3JvdW5kXG4gIGNvbnN0IGZvcm1CYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImZvcm0tYmFja2dyb3VuZFwiKTtcbiAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblxuICAvLyBBcHBlbmQgY29udGFpbmVyIHRvIGJhY2tncm91bmQgZWxlbWVudFxuICBmb3JtQmFja2dyb3VuZC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAvLyBBZGQgY29udGFpbmVyIGZvciBuYW1lIGVsZW1lbnRzXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWRpdlwiKTtcbiAgLy8gQWRkIGxhYmVsIGZvciBuYW1lIGlucHV0XG4gIGNvbnN0IHRvZG9OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRvZG9OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1uYW1lXCIpO1xuICB0b2RvTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAvLyBBZGQgaW5wdXQgZm9yIG5hbWUgYW5kIHNldCBhdHRyaWJ1dGVzXG4gIGNvbnN0IHRvZG9OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvZG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRvZG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLW5hbWVcIik7XG4gIHRvZG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tbmFtZVwiKTtcbiAgLy8gU2V0IGlucHV0IGFzIHJlcXVpcmVkXG4gIHRvZG9OYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAvLyBTZXQgaW5wdXQgdmFsdWUgdG8gY3VycmVudCBuYW1lXG4gIHRvZG9OYW1lSW5wdXQudmFsdWUgPSBjdXJyZW50TmFtZTtcblxuICAvLyBBcHBlbmQgYm90aCBsYWJlbCBhbmQgaW5wdXQgZm9yIG5hbWUgdG8gbmFtZSBjb250YWluZXJcbiAgbmFtZURpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZUxhYmVsKTtcbiAgbmFtZURpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZUlucHV0KTtcbiAgLy8gQXBwZW5kIHRoZSBuYW1lIGNvbnRhaW5lciB0byBmb3JtIGNvbnRhaW5lclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIHByaW9yaXR5IGVsZW1lbnRzXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZGl2XCIpO1xuICAvLyBBZGQgbGFiZWwgZm9yIHByaW9yaXR5IHNlbGVjdFxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tcHJpb3JpdHlcIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAvLyBBZGQgcHJpb3JpdHkgc2VsZWN0IGVsZW1lbnRcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJ0b2RvLXByaW9yaXR5XCI7XG4gIC8vIExvb3AgdGhyb3VnaCBvcHRpb25zIGFycmF5XG4gIHByaW9yaXR5T3B0aW9uc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnRcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgLy8gU2V0IG9wdGlvbiB2YWx1ZSB0byB0aGUgc3RyaW5nIG9mIGVhY2ggYXJyYXkgaXRlbVxuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1lbnQpO1xuICAgIC8vIEdldCBzdHJpbmcgZm9yIG9wdGlvbiBuYW1lXG4gICAgY29uc3Qgb3B0aW9uTmFtZSA9IGVsZW1lbnQ7XG4gICAgLy8gR2V0IHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIG5hbWVcbiAgICBjb25zdCBmaXJzdExldHRlciA9IG9wdGlvbk5hbWUuY2hhckF0KDApO1xuICAgIC8vIFNldCB0aGUgdGV4dCB0byBuYW1lIHdpdGggY2FwaXRhbCBmaXJzdCBsZXR0ZXJcbiAgICBwcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBmaXJzdExldHRlci50b1VwcGVyQ2FzZSgpICsgb3B0aW9uTmFtZS5zbGljZSgxKTtcbiAgICAvLyBBZGQgb3B0aW9uIGVsZW1lbnQgdG8gc2VsZWN0IGVsZW1lbnRcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG4gIH0pO1xuICAvLyBTZXQgc2VsZWN0IHZhbHVlIHRvIGN1cnJlbnQgcHJpb3JpdHlcbiAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBjdXJyZW50UHJpb3JpdHk7XG4gIC8vIFNldCBJRCBhdHRyaWJ1dGUgZm9yIHNlbGVjdCBlbGVtZW50XG4gIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1wcmlvcml0eVwiKTtcblxuICAvLyBBZGQgdGhlIHNlbGVjdCBlbGVtZW50cyB0byBwcmlvcml0eSBjb250YWluZXJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgLy8gQXBwZW5kIHRoZSBwcmlvcml0eSBjb250YWluZXIgdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIGluZm9cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZGl2XCIpO1xuICAvLyBBZGQgbGFiZWwgZm9yIGluZm8gYm94XG4gIGNvbnN0IGluZm9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5mb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8taW5mb1wiKTtcbiAgaW5mb0xhYmVsLnRleHRDb250ZW50ID0gXCJJbmZvOlwiO1xuICAvLyBBZGQgaW5mbyB0ZXh0IGFyZWEgZWxlbWVudFxuICBjb25zdCBpbmZvVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGluZm9UZXh0QXJlYS5uYW1lID0gXCJ0b2RvLWluZm9cIjtcbiAgLy8gU2V0IGluZm8gdGV4dCBhcmVhIHZhbHVlIHRvIGN1cnJlbnQgaW5mb1xuICBpbmZvVGV4dEFyZWEudmFsdWUgPSBjdXJyZW50SW5mbztcblxuICAvLyBBZGQgdGhlIGluZm8gZWxlbWVudHMgdG8gaW5mbyBjb250YWluZXJcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvTGFiZWwpO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9UZXh0QXJlYSk7XG4gIC8vIEFwcGVuZCB0aGUgaW5mbyBjb250YWluZXIgdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgLy8gQWRkIGNvbnRhaW5lciBmb3Igc3VibWl0IGFuZCBjYW5jZWwgYnV0dG9uc1xuICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tYnV0dG9uLWRpdlwiKTtcbiAgLy8gQWRkIGlucHV0IGVsZW1lbnQgb2YgdHlwZSBzdWJtaXRcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWZvcm0tYnRuXCIpO1xuICAvLyBBZGQgc3VibWl0IGJ1dHRvbiB0byB0aGUgYnV0dG9uIGRpdlxuICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgLy8gQWRkIGEgYnV0dG9uIGVsZW1lbnQgZm9yIGNhbmNlbGxpbmcgYWN0aW9uXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1mb3JtLWJ0blwiKTtcbiAgLy8gU2V0IGJ1dHRvbiB0ZXh0XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIC8vIEFkZCBjYW5jZWwgYnV0dG9uIHRvIHRoZSBidXR0b24gZGl2XG4gIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAvLyBBZGQgc3VibWl0IGNvbnRhaW5lciB0byBmb3JtIGNvbnRhaW5lclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHN1Ym1pdCBidXR0b25cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHRvZG9OYW1lSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIC8vIENoYW5nZSB0aGUgbmFtZSBvZiB0b2RvIG9iamVjdFxuICAgICAgdG9kby5uYW1lID0gdG9kb05hbWVJbnB1dC52YWx1ZTtcbiAgICAgIC8vIENoYW5nZSB0aGUgcHJpb3JpdHkgb2YgdG9kbyBvYmplY3RcbiAgICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcbiAgICAgIC8vIENoYW5nZSB0aGUgaW5mbyBvZiB0aGUgdG9kbyBvYmplY3RcbiAgICAgIHRvZG8uaW5mbyA9IGluZm9UZXh0QXJlYS52YWx1ZTtcblxuICAgICAgLy8gVXBkYXRlIHByb2plY3Qgdmlld1xuICAgICAgdXBkYXRlUHJvalZpZXcocHJvai5saXN0QXJyYXkpO1xuXG4gICAgICAvLyBSZW1vdmUgZm9ybSBiYWNrZ3JvdW5kIGVsZW1lbnQgZnJvbSBET01cbiAgICAgIGZvcm1CYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaHJvdyBlcnJvciBhbmQgY2FuY2VsIHN1Ym1pc3Npb24gb2YgZm9ybVxuICAgICAgYWxlcnQoXCJubyBuYW1lXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNhbmNlbCBidXR0b25cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIGZvcm0gYmFja2dyb3VuZCBlbGVtZW50IGZyb20gRE9NXG4gICAgZm9ybUJhY2tncm91bmQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIC8vIEFkZCBmb3JtIGNvbnRhaW5lciB0byBkb2N1bWVudFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtQmFja2dyb3VuZCk7XG59XG5cbi8vIExpc3QgZWRpdCBmb3JtXG5mdW5jdGlvbiBnZW5lcmF0ZUxpc3RGb3JtKHByb2pJZCwgcHJvakFycmF5LCBsaXN0SWQpIHtcbiAgLy8gR2V0IHRoZSBwcm9qZWN0IG9iamVjdCBmcm9tIHRoZSBwcm9qZWN0IGFycmF5XG4gIGNvbnN0IHByb2ogPSByZXR1cm5PYmplY3RGcm9tQXJyYXkocHJvaklkLCBwcm9qQXJyYXkpO1xuICAvLyBHZXQgdGhlIGxpc3Qgb2JqZWN0IGZyb20gdGhlIHByb2plY3QncyBsaXN0IGFycmF5XG4gIGNvbnN0IGxpc3QgPSByZXR1cm5PYmplY3RGcm9tQXJyYXkobGlzdElkLCBwcm9qLmxpc3RBcnJheSk7XG5cbiAgLy8gR2V0IGN1cnJlbnQgbmFtZSBvZiBsaXN0XG4gIGNvbnN0IGN1cnJlbnROYW1lID0gbGlzdC5uYW1lO1xuICAvLyBHZXQgY3VycmVudCBpbmZvIG9mIGxpc3RcbiAgY29uc3QgY3VycmVudEluZm8gPSBsaXN0LmluZm87XG5cbiAgLy8gQ3JlYXRlIGZvcm0gYmFja2dyb3VuZFxuICBjb25zdCBmb3JtQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1CYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJhY2tncm91bmRcIik7XG4gIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgLy8gQXBwZW5kIGNvbnRhaW5lciB0byBiYWNrZ3JvdW5kIGVsZW1lbnRcbiAgZm9ybUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgLy8gQWRkIGNvbnRhaW5lciBmb3IgbmFtZSBlbGVtZW50c1xuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1kaXZcIik7XG4gIC8vIEFkZCBsYWJlbCBmb3IgbmFtZSBpbnB1dFxuICBjb25zdCBsaXN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsaXN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxpc3QtbmFtZVwiKTtcbiAgbGlzdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIjtcbiAgLy8gQWRkIGlucHV0IGZvciBuYW1lIGFuZCBzZXQgYXR0cmlidXRlc1xuICBjb25zdCBsaXN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBsaXN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBsaXN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC1uYW1lXCIpO1xuICBsaXN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsaXN0LW5hbWVcIik7XG4gIC8vIFNldCBpbnB1dCBhcyByZXF1aXJlZFxuICBsaXN0TmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgLy8gU2V0IGlucHV0IHZhbHVlIHRvIGN1cnJlbnQgbmFtZVxuICBsaXN0TmFtZUlucHV0LnZhbHVlID0gY3VycmVudE5hbWU7XG5cbiAgLy8gQXBwZW5kIGJvdGggbGFiZWwgYW5kIGlucHV0IGZvciBuYW1lIHRvIG5hbWUgY29udGFpbmVyXG4gIG5hbWVEaXYuYXBwZW5kQ2hpbGQobGlzdE5hbWVMYWJlbCk7XG4gIG5hbWVEaXYuYXBwZW5kQ2hpbGQobGlzdE5hbWVJbnB1dCk7XG4gIC8vIEFwcGVuZCB0aGUgbmFtZSBjb250YWluZXIgdG8gZm9ybSBjb250YWluZXJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICAvLyBBZGQgY29udGFpbmVyIGZvciBpbmZvXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWRpdlwiKTtcbiAgLy8gQWRkIGxhYmVsIGZvciBpbmZvIGJveFxuICBjb25zdCBpbmZvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGluZm9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvLWluZm9cIik7XG4gIGluZm9MYWJlbC50ZXh0Q29udGVudCA9IFwiSW5mbzpcIjtcbiAgLy8gQWRkIGluZm8gdGV4dCBhcmVhIGVsZW1lbnRcbiAgY29uc3QgaW5mb1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBpbmZvVGV4dEFyZWEubmFtZSA9IFwidG9kby1pbmZvXCI7XG4gIC8vIFNldCBpbmZvIHRleHQgYXJlYSB2YWx1ZSB0byBjdXJyZW50IGluZm9cbiAgaW5mb1RleHRBcmVhLnZhbHVlID0gY3VycmVudEluZm87XG5cbiAgLy8gQWRkIHRoZSBpbmZvIGVsZW1lbnRzIHRvIGluZm8gY29udGFpbmVyXG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoaW5mb0xhYmVsKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvVGV4dEFyZWEpO1xuICAvLyBBcHBlbmQgdGhlIGluZm8gY29udGFpbmVyIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ1dHRvbi1kaXZcIik7XG4gIC8vIEFkZCBpbnB1dCBlbGVtZW50IG9mIHR5cGUgc3VibWl0XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1mb3JtLWJ0blwiKTtcbiAgLy8gQWRkIHN1Ym1pdCBidXR0b24gdG8gdGhlIGJ1dHRvbiBkaXZcbiAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIC8vIEFkZCBhIGJ1dHRvbiBlbGVtZW50IGZvciBjYW5jZWxsaW5nIGFjdGlvblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtZm9ybS1idG5cIik7XG4gIC8vIFNldCBidXR0b24gdGV4dFxuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAvLyBBZGQgY2FuY2VsIGJ1dHRvbiB0byB0aGUgYnV0dG9uIGRpdlxuICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgLy8gQWRkIHN1Ym1pdCBjb250YWluZXIgdG8gZm9ybSBjb250YWluZXJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBzdWJtaXQgYnV0dG9uXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChsaXN0TmFtZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAvLyBDaGFuZ2UgdGhlIG5hbWUgb2YgdG9kbyBvYmplY3RcbiAgICAgIGxpc3QubmFtZSA9IGxpc3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAvLyBDaGFuZ2UgdGhlIGluZm8gb2YgdGhlIHRvZG8gb2JqZWN0XG4gICAgICBsaXN0LmluZm8gPSBpbmZvVGV4dEFyZWEudmFsdWU7XG5cbiAgICAgIC8vIFVwZGF0ZSBwcm9qZWN0IHZpZXdcbiAgICAgIHVwZGF0ZVByb2pWaWV3KHByb2oubGlzdEFycmF5KTtcblxuICAgICAgLy8gUmVtb3ZlIGZvcm0gYmFja2dyb3VuZCBlbGVtZW50IGZyb20gRE9NXG4gICAgICBmb3JtQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhyb3cgZXJyb3IgYW5kIGNhbmNlbCBzdWJtaXNzaW9uIG9mIGZvcm1cbiAgICAgIGFsZXJ0KFwibm8gbmFtZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBjYW5jZWwgYnV0dG9uXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFJlbW92ZSBmb3JtIGJhY2tncm91bmQgZWxlbWVudCBmcm9tIERPTVxuICAgIGZvcm1CYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICB9KTtcblxuICAvLyBBZGQgZm9ybSBjb250YWluZXIgdG8gZG9jdW1lbnRcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUJhY2tncm91bmQpO1xufVxuXG4vLyBQcm9qZWN0IGVkaXQgZm9ybVxuXG5leHBvcnQgeyBnZW5lcmF0ZVRvZG9Gb3JtLCBnZW5lcmF0ZUxpc3RGb3JtIH07XG4iLCIvLyBHZXQgb2JqZWN0IGZyb20gYXJyYXlcbmZ1bmN0aW9uIHJldHVybk9iamVjdEZyb21BcnJheShpZCwgYXJyYXkpIHtcbiAgLy8gRmlsdGVyIHRocm91Z2ggYXJyYXkgb2YgbGlzdHMgdG8gZmluZCBtYXRjaGluZyBsaXN0IG9iamVjdFxuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gYXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBpZCk7XG4gIC8vIENoZWNrIGZvciB1bmlxdWVuZXNzXG4gIGlmIChmaWx0ZXJlZEFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICAvLyBJZiBtb3JlIHRoYW4gb25lIGxpc3Qgb2JqZWN0IGZvdW5kIHRocm93IGVycm9yXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7XG4gICAgdGhyb3cgRXJyb3IoXCJFUlJPUiEgTW9yZSB0aGFuIG9uZSByZWxhdGl2ZSBmb3VuZC5cIik7IC8vIEVycm9yIGlmIG1vcmUgdGhhdCBvbmUgcmVsYXRpdmUgb2JqZWN0IGZvdW5kXG4gIH0gZWxzZSBpZiAoZmlsdGVyZWRBcnJheS5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJFUlJPUiEgTm8gcmVsYXRpdmUgZm91bmQuXCIpOyAvLyBFcnJvciBpZiBubyByZWxhdGl2ZSBvYmplY3QgZm91bmRcbiAgfSBlbHNlIHtcbiAgICAvLyBEZXN0cnVjdHVyZSBhcnJheSBvZiBvYmplY3RzXG4gICAgY29uc3QgW3JlbGF0aXZlXSA9IGZpbHRlcmVkQXJyYXk7XG4gICAgLy8gUmV0dXJuIGxpc3Qgb2JqZWN0XG4gICAgcmV0dXJuIHJlbGF0aXZlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldHVybk9iamVjdEZyb21BcnJheTtcbiIsImltcG9ydCB7IHRvZG9Qcm90bywgY3JlYXRvciwgcmVtb3ZlciB9IGZyb20gXCIuL3RvZG9Qcm90b1wiO1xuaW1wb3J0IHRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IHByb2plY3QgPSAoXG4gIG5hbWUsXG4gIGlkLFxuICBpbmZvLFxuICB0eXBlID0gXCJwcm9qXCIsXG4gIGFycmF5TmFtZSA9IFwibGlzdEFycmF5XCIsXG4gIG9iaiA9IHRvZG9MaXN0XG4pID0+IHtcbiAgY29uc3QgbGlzdEFycmF5ID0gW107XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIC4uLnRvZG9Qcm90byhuYW1lLCBpZCwgaW5mbywgdHlwZSksXG4gICAgbGlzdEFycmF5LFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmNyZWF0b3Ioc3RhdGUsIGFycmF5TmFtZSwgb2JqLCB0eXBlKSxcbiAgICAuLi5yZW1vdmVyKHN0YXRlLCBhcnJheU5hbWUpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsIi8qIFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbkZhY3RvcnkgZnVuY3Rpb24gdG8gcmV0dXJuIGEgdG9kb0l0ZW0gb2JqZWN0XG5PQUwgMTUtMDItMjAyM1xuVmVyc2lvbiAwLjEgZ2VuZXNpc1xuXG5UaGlzIGZ1bmN0aW9uIGNhbGxlZCBieSBwcm9qZWN0IG9yIHRvZG9MaXN0IGNvZGUgdG8gY3JlYXRlIGFuZCByZXR1cm4gYSB0b2RvSXRlbVxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXG4qL1xuXG5pbXBvcnQgeyB0b2RvUHJvdG8gfSBmcm9tIFwiLi90b2RvUHJvdG9cIjtcblxuY29uc3QgdG9kb0l0ZW0gPSAoXG4gIG5hbWUsXG4gIGlkLFxuICBpbmZvLFxuICB0eXBlID0gXCJ0b2RvXCIsXG4gIGR1ZURhdGUgPSBudWxsLFxuICBwcmlvcml0eSA9IFwibm9uZVwiLFxuICBjaGVja2xpc3QgPSBbXSxcbiAgc3RhdHVzID0gXCJwZW5kaW5nXCJcbikgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICAuLi50b2RvUHJvdG8obmFtZSwgaWQsIGluZm8sIHR5cGUpLFxuICAgIGNyZWF0aW9uRGF0ZTogbmV3IERhdGUoKSxcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrbGlzdCxcbiAgICBzdGF0dXMsXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvSXRlbTtcbiIsIi8qIFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbkZhY3RvcnkgZnVuY3Rpb24gdG8gcmV0dXJuIGEgdG9kb0xpc3Qgb2JqZWN0XG5PQUwgMTUtMDItMjAyM1xuVmVyc2lvbiAwLjEgZ2VuZXNpc1xuXG5UaGlzIGZ1bmN0aW9uIGNhbGxlZCBieSBwcm9qZWN0IGNvZGUgdG8gY3JlYXRlIGFuZCByZXR1cm4gYSB0b2RvTGlzdC5cblRoZSByZXR1cm5lZCBvYmplY3QgaW5jbHVkZXMgYW4gYXJyYXkgb2YgdG9kb0l0ZW1zLCBuYW1lLCBpbmZvIGFuZFxuZnVuY3Rpb25zIGZvciBhZGRpbmcgYW5kIHJlbW92aW5nIHRvZG9JdGVtcyBmcm9tIGFycmF5LlxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXG4qL1xuXG5pbXBvcnQgeyB0b2RvUHJvdG8sIGNyZWF0b3IsIHJlbW92ZXIgfSBmcm9tIFwiLi90b2RvUHJvdG9cIjtcbmltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuXG5jb25zdCB0b2RvTGlzdCA9IChcbiAgbmFtZSxcbiAgaWQsXG4gIGluZm8sXG4gIHR5cGUgPSBcImxpc3RcIixcbiAgYXJyYXlOYW1lID0gXCJ0b2RvQXJyYXlcIixcbiAgb2JqID0gdG9kb0l0ZW1cbikgPT4ge1xuICBjb25zdCB0b2RvQXJyYXkgPSBbXTtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgLi4udG9kb1Byb3RvKG5hbWUsIGlkLCBpbmZvLCB0eXBlKSxcbiAgICB0b2RvQXJyYXksXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uY3JlYXRvcihzdGF0ZSwgYXJyYXlOYW1lLCBvYmosIHR5cGUpLFxuICAgIC4uLnJlbW92ZXIoc3RhdGUsIGFycmF5TmFtZSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvTGlzdDtcbiIsImltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuXG5mdW5jdGlvbiBnZXRVbmlxdWVJRChpZFByZWZpeCkge1xuICByZXR1cm4gdW5pcWlkKGlkUHJlZml4KTtcbn1cblxuY29uc3QgY3JlYXRvciA9IChzdGF0ZSwgYXJyYXlOYW1lLCBvYmplY3QsIHR5cGUpID0+ICh7XG4gIGNyZWF0ZTogKGlkUHJlZml4KSA9PiB7XG4gICAgLy8gR2V0IHRoZSB0eXBlIG9mIGNoaWxkIHRvIGFkZFxuICAgIGxldCBjaGlsZFR5cGU7XG4gICAgaWYgKHR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgICBjaGlsZFR5cGUgPSBcInRvZG9cIjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicHJvalwiKSB7XG4gICAgICBjaGlsZFR5cGUgPSBcImxpc3RcIjtcbiAgICB9XG4gICAgY29uc3QgaWQgPSBnZXRVbmlxdWVJRChpZFByZWZpeCk7XG4gICAgY29uc3Qgb2JqTmFtZSA9IGBOZXcgJHtjaGlsZFR5cGV9YDtcbiAgICBjb25zdCBpbmZvID0gbnVsbDtcbiAgICAvLyBBZGQgYSBjaGlsZCBvYmplY3QgdG8gdGhlIGFycmF5XG4gICAgc3RhdGVbYCR7YXJyYXlOYW1lfWBdLnB1c2gob2JqZWN0KG9iak5hbWUsIGlkLCBpbmZvLCBjaGlsZFR5cGUpKTtcbiAgfSxcbn0pO1xuXG5jb25zdCByZW1vdmVyID0gKHN0YXRlLCBhcnJheU5hbWUpID0+ICh7XG4gIGRlbGV0ZUl0ZW06IChpZCkgPT5cbiAgICBzdGF0ZVtgJHthcnJheU5hbWV9YF0uZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmlkICE9PSBpZCksXG59KTtcblxuY29uc3QgdG9kb1Byb3RvID0gKG5hbWUsIGlkLCBpbmZvLCB0eXBlKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIG5hbWUsXG4gICAgaWQsXG4gICAgaW5mbyxcbiAgICB0eXBlLFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgdG9kb1Byb3RvLCBjcmVhdG9yLCByZW1vdmVyLCBnZXRVbmlxdWVJRCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRVbmlxdWVJRCB9IGZyb20gXCIuL3RvZG9Qcm90b1wiO1xuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgc2V0VXBET00sXG4gIHVwZGF0ZVByb2pWaWV3LFxuICBkaXNwbGF5UHJvamVjdCxcbiAgdXBkYXRlU2lkZWJhckxpc3QsXG4gIGRpc3BsYXlFbXB0eVByb2pBcnJheSxcbn0gZnJvbSBcIi4vZG9tTWFuYWdlclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvRm9ybSwgZ2VuZXJhdGVMaXN0Rm9ybSB9IGZyb20gXCIuL2Zvcm1NYW5hZ2VyXCI7XG5pbXBvcnQgcmV0dXJuT2JqZWN0RnJvbUFycmF5IGZyb20gXCIuL29iamVjdExvZ2ljXCI7XG5cbmNvbnN0IHByb2pBcnJheSA9IFtdO1xuXG4vKiBSRUZBQ1RPUiBUTyBNT0RVTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgVE9ETy9MSVNUIExPR0lDXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLypcbl9fX0NSRUFURSBQUk9KL0xJU1RfX19cbiovXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgbmV3IHByb2plY3RcbmNvbnN0IGNyZWF0ZVByb2ogPSAobmFtZSA9IFwiTmV3IFByb2plY3RcIiwgaW5mbyA9IHVuZGVmaW5lZCkgPT4ge1xuICAvLyBHZXQgYSB1bmlxdWUgSUQgZm9yIHRoZSBwcm9qZWN0XG4gIGNvbnN0IGlkID0gZ2V0VW5pcXVlSUQoXCJwcm9qLVwiKTtcbiAgLy8gQ3JlYXRlIGEgbmV3IHByb2plY3Qgb2JqZWN0XG4gIGNvbnN0IG5ld1Byb2ogPSBwcm9qZWN0KG5hbWUsIGlkLCBpbmZvKTtcbiAgLy8gUHVzaCB0aGUgbmV3IHByb2plY3Qgb2JqZWN0IHRvIHRoZSBwcm9qZWN0IGFycmF5XG4gIHByb2pBcnJheS5wdXNoKG5ld1Byb2opO1xuXG4gIC8vIFJldHVybiB0aGUgcHJvamVjdCBvYmplY3RcbiAgcmV0dXJuIG5ld1Byb2o7XG59O1xuXG4vKlxuICBfX19FVkVOVCBIQU5ETEVSU19fXyAoZm9yIGV2ZW50IGxpc3RlbmVycylcbiovXG5cbi8qIEFERCBFVkVOVFMgKi9cblxuLy8gSGFuZGxlIHRvZG8gYWRkIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVUb2RvQWRkKGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWRcbiAgY29uc3QgcHJvaklkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gIC8vIEdldCBsaXN0IGlkXG4gIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBsaXN0IG9iamVjdFxuICBjb25zdCBsaXN0ID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KGxpc3RJZCwgcHJvai5saXN0QXJyYXkpO1xuICAvLyBDcmVhdGUgYSB0b2RvIGl0ZW1cbiAgbGlzdC5jcmVhdGUoXCJ0b2RvLVwiKTtcbiAgLy8gVXBkYXRlIHZpZXcgb2YgbGlzdHMgaW4gYXJyYXkgaW4gRE9NXG4gIHVwZGF0ZVByb2pWaWV3KHByb2oubGlzdEFycmF5KTtcbn1cblxuLy8gSGFuZGxlIGxpc3QgYWRkIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVMaXN0QWRkKGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWRcbiAgY29uc3QgcHJvaklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gIC8vIENyZWF0ZSBhIGxpc3QgaW4gdGhlIHByb2plY3RcbiAgcHJvai5jcmVhdGUoXCJsaXN0LVwiKTtcbiAgLy8gR2V0IG5ldyBsaXN0IG9iamVjdFxuICBjb25zdCBsaXN0ID0gcHJvai5saXN0QXJyYXlbcHJvai5saXN0QXJyYXkubGVuZ3RoIC0gMV07XG4gIC8vIEdldCBJRCBvZiBuZXcgbGlzdFxuICBjb25zdCBsaXN0SWQgPSBsaXN0LmlkO1xuICAvLyBVcGRhdGUgdmlldyBvZiBwcm9qZWN0IGluIGFycmF5IGluIERPTVxuICB1cGRhdGVQcm9qVmlldyhwcm9qLmxpc3RBcnJheSk7XG59XG5cbi8vIEhhbmRsZSBwcm9qZWN0IGFkZCBldmVudFxuZnVuY3Rpb24gaGFuZGxlUHJvakFkZChlKSB7XG4gIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0XG4gIGNvbnN0IG5ld1Byb2ogPSBjcmVhdGVQcm9qKCk7XG5cbiAgLy8gVXBkYXRlIHNpZGViYXJcbiAgdXBkYXRlU2lkZWJhckxpc3QocHJvakFycmF5KTtcblxuICAvLyBEaXNwbGF5IG5ldyBwcm9qZWN0XG4gIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2opO1xufVxuXG4vKiBERUxFVEUgRVZFTlRTICovXG5cbi8vIEhhbmRsZSB0b2RvIGRlbGV0ZSBldmVudFxuZnVuY3Rpb24gaGFuZGxlVG9kb0RlbChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkXG4gIGNvbnN0IHByb2pJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBwcm9qZWN0IG9iamVjdCBmcm9tIGFycmF5XG4gIGNvbnN0IHByb2ogPSByZXR1cm5PYmplY3RGcm9tQXJyYXkocHJvaklkLCBwcm9qQXJyYXkpO1xuICAvLyBHZXQgdG9kbyBJRFxuICBjb25zdCB0b2RvSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgLy8gR2V0IGxpc3QgSURcbiAgY29uc3QgbGlzdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5saXN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gRmlsdGVyIHRocm91Z2ggYXJyYXkgb2YgbGlzdHMgdG8gZmluZCBtYXRjaGluZyBsaXN0IG9iamVjdFxuICBjb25zdCBsaXN0ID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KGxpc3RJZCwgcHJvai5saXN0QXJyYXkpO1xuICAvLyBSZW1vdmUgdGhlIGZpcnN0IDQgY2hhcmFjdGVycyBmcm9tIHRhcmdldElkIHN0cmluZyAoRmlyc3QgNCBjaGFyYWN0ZXJzOiBcImRlbC1cIilcbiAgY29uc3QgdG9kb09iaklkID0gdG9kb0lkLnN1YnN0cmluZyg0KTtcbiAgLy8gRmluZCBpbmRleCBvZiBvYmplY3QgaW4gYXJyYXlcbiAgY29uc3QgYXJyYXlJbmRleCA9IGxpc3QudG9kb0FycmF5LmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gdG9kb09iaklkXG4gICk7XG4gIC8vIFJlbW92ZSB0aGUgdG9kbyBvYmplY3QgZnJvbSBhcnJheSBpbiBwYXJlbnQgbGlzdCBvYmplY3RcbiAgbGlzdC50b2RvQXJyYXkuc3BsaWNlKGFycmF5SW5kZXgsIDEpO1xuICAvLyBVcGRhdGUgcHJvamVjdCB2aWV3IGluIERPTVxuICB1cGRhdGVQcm9qVmlldyhwcm9qLmxpc3RBcnJheSk7XG59XG5cbi8vIEhhbmRsZSBsaXN0IGRlbGV0ZSBldmVudFxuZnVuY3Rpb24gaGFuZGxlTGlzdERlbChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkXG4gIGNvbnN0IHByb2pJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBwcm9qZWN0IG9iamVjdCBmcm9tIGFycmF5XG4gIGNvbnN0IHByb2ogPSByZXR1cm5PYmplY3RGcm9tQXJyYXkocHJvaklkLCBwcm9qQXJyYXkpO1xuICAvLyBHZXQgbGlzdCBJRFxuICBjb25zdCBsaXN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmxpc3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBGaWx0ZXIgdGhyb3VnaCBhcnJheSBvZiBsaXN0cyB0byBmaW5kIG1hdGNoaW5nIGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGFycmF5SW5kZXggPSBwcm9qLmxpc3RBcnJheS5maW5kSW5kZXgoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IGxpc3RJZFxuICApO1xuICAvLyBSZW1vdmUgdGhlIGxpc3Qgb2JqZWN0IGZyb20gYXJyYXkgaW4gcGFyZW50IHByb2plY3Qgb2JqZWN0XG4gIHByb2oubGlzdEFycmF5LnNwbGljZShhcnJheUluZGV4LCAxKTtcbiAgLy8gVXBkYXRlIHByb2ogdmlldyBpbiBET01cbiAgdXBkYXRlUHJvalZpZXcocHJvai5saXN0QXJyYXkpO1xufVxuXG4vLyBIYW5kbGUgcHJvamVjdCBkZWxldGlvbiBldmVudFxuZnVuY3Rpb24gaGFuZGxlUHJvakRlbChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkIGZyb20gcHJvamVjdCBjb250YWluZXJcbiAgY29uc3QgcHJvaklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgYXJyYXlJbmRleCA9IHByb2pBcnJheS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHByb2pJZCk7XG4gIC8vIFJlbW92ZSB0aGUgbGlzdCBvYmplY3QgZnJvbSBhcnJheSBpbiBwYXJlbnQgcHJvamVjdCBvYmplY3RcbiAgcHJvakFycmF5LnNwbGljZShhcnJheUluZGV4LCAxKTtcbiAgLy8gRGlzcGxheSBwcmV2aW91cyBwcm9qZWN0XG4gIGlmIChwcm9qQXJyYXkubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlQcm9qZWN0KHByb2pBcnJheVthcnJheUluZGV4IC0gMV0pO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlFbXB0eVByb2pBcnJheSgpO1xuICB9XG4gIC8vIFVwZGF0ZSBzaWRlYmFyIGxpc3Qgb2YgcHJvamVjdHNcbiAgdXBkYXRlU2lkZWJhckxpc3QocHJvakFycmF5KTtcbn1cblxuLyogRURJVCBFVkVOVFMgKi9cblxuLy8gSGFuZGxlIHRvZG8gZWRpdCBldmVudFxuZnVuY3Rpb24gaGFuZGxlVG9kb0VkaXQoZSkge1xuICAvLyBHZXQgcHJvamVjdCBpZFxuICBjb25zdCBwcm9qSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBHZXQgbGlzdCBpZFxuICBjb25zdCBsaXN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmxpc3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBHZXQgdGhlIGlkIG9mIHRoZSB0YXJnZXRlZCB0b2RvIERPTSBlbGVtZW50XG4gIGNvbnN0IHRvZG9JZCA9IGUudGFyZ2V0LmlkO1xuICAvLyBSZW1vdmUgdGhlIGZpcnN0IDQgY2hhcmFjdGVycyBmcm9tIHRhcmdldElkIHN0cmluZyAoRmlyc3QgNSBjaGFyYWN0ZXJzOiBcImVkaXQtXCIpXG4gIGNvbnN0IHRvZG9PYmpJZCA9IHRvZG9JZC5zdWJzdHJpbmcoNSk7XG5cbiAgZ2VuZXJhdGVUb2RvRm9ybShwcm9qSWQsIHByb2pBcnJheSwgbGlzdElkLCB0b2RvT2JqSWQpO1xufVxuXG4vLyBIYW5kbGUgbGlzdCBlZGl0IGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVMaXN0RWRpdChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkXG4gIGNvbnN0IHByb2pJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBsaXN0IGlkXG4gIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdC1jb250YWluZXJcIikuaWQ7XG5cbiAgZ2VuZXJhdGVMaXN0Rm9ybShwcm9qSWQsIHByb2pBcnJheSwgbGlzdElkKTtcbn1cblxuLy8gSGFuZGxlIHByb2plY3QgZWRpdCBldmVudFxuZnVuY3Rpb24gaGFuZGxlUHJvakVkaXQoZSkge1xuICBjb25zb2xlLmxvZyhcIlNUSUxMIFRPIElNUExFTUVOVFwiKTtcblxuICAvLyBHZXQgcHJvamVjdCBpZCBmcm9tIHByb2plY3QgY29udGFpbmVyXG4gIGNvbnN0IHByb2pJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBwcm9qZWN0IG9iamVjdCBmcm9tIGFycmF5XG4gIGNvbnN0IGFycmF5SW5kZXggPSBwcm9qQXJyYXkuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBwcm9qSWQpO1xufVxuXG4vKlxuICBfX19FVkVOVCBMSVNURU5FUlNfX19cbiovXG4vLyBHbG9iYWwgZXZlbnQgbGlzdGVuZXJcbmZ1bmN0aW9uIGFkZEdsb2JhbEV2ZW50TGlzdGVuZXIodHlwZSwgc2VsZWN0b3IsIGNhbGxiYWNrKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIGNhbGxiYWNrKGUpO1xuICB9KTtcbn1cblxuLy8gRXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25hbGl0eSBmb3Igc2lkZWJhciBhZGQgcHJvamVjdCBidXR0b25cbmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcIi5zYi1hZGQtYnV0dG9uXCIsIChlKSA9PiB7XG4gIC8vIENhbGwgZXZlbnQgaGFuZGxlciBmb3IgYWRkaW5nIGEgcHJvamVjdFxuICBoYW5kbGVQcm9qQWRkKGUpO1xufSk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uYWxpdHkgZm9yIGFkZCBpY29uc1xuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFwiLmFkZC1pY29uXCIsIChlKSA9PiB7XG4gIC8vIFNldCB2YXJpYWJsZXMgZm9yIHRoZSBET00gZWxlbWVudCdzIHR5cGUgYW5kIGlkIGF0dHJpYnV0ZXNcbiAgY29uc3QgdGFyZ2V0VHlwZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XG5cbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCB0eXBlIGlzIGEgbGlzdFxuICBpZiAodGFyZ2V0VHlwZSA9PT0gXCJsaXN0XCIpIHtcbiAgICBoYW5kbGVUb2RvQWRkKGUpO1xuICB9IGVsc2UgaWYgKHRhcmdldFR5cGUgPT09IFwicHJvalwiKSB7XG4gICAgaGFuZGxlTGlzdEFkZChlKTtcbiAgfVxufSk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uYWxpdHkgZm9yIGVkaXQgaWNvbnNcbmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcIi5lZGl0LWljb25cIiwgKGUpID0+IHtcbiAgLy8gU2V0IHZhcmlhYmxlcyBmb3IgdGhlIERPTSBlbGVtZW50J3MgdHlwZSBhbmQgaWQgYXR0cmlidXRlc1xuICBjb25zdCB0YXJnZXRUeXBlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcblxuICAvLyBDaGVjayBpZiBlbGVtZW50IHR5cGUgaXMgYSBsaXN0XG4gIGlmICh0YXJnZXRUeXBlID09PSBcInRvZG9cIikge1xuICAgIGhhbmRsZVRvZG9FZGl0KGUpO1xuICB9IGVsc2UgaWYgKHRhcmdldFR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgaGFuZGxlTGlzdEVkaXQoZSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0VHlwZSA9PT0gXCJwcm9qXCIpIHtcbiAgICBoYW5kbGVQcm9qRWRpdChlKTtcbiAgfVxufSk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uYWxpdHkgZm9yIGRlbGV0ZSBpY29uc1xuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFwiLmRlbC1pY29uXCIsIChlKSA9PiB7XG4gIC8vIFNldCB2YXJpYWJsZXMgZm9yIHRoZSBET00gZWxlbWVudCdzIHR5cGUgYW5kIGlkIGF0dHJpYnV0ZXNcbiAgY29uc3QgdGFyZ2V0VHlwZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XG5cbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCB0eXBlIGlzIGEgbGlzdFxuICBpZiAodGFyZ2V0VHlwZSA9PT0gXCJ0b2RvXCIpIHtcbiAgICBoYW5kbGVUb2RvRGVsKGUpO1xuICB9IGVsc2UgaWYgKHRhcmdldFR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgaGFuZGxlTGlzdERlbChlKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBcInByb2pcIikge1xuICAgIGhhbmRsZVByb2pEZWwoZSk7XG4gIH1cbn0pO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBJTklUSUFMSVpFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4vLyBDcmVhdGUgYSBibGFuayBwcm9qZWN0XG5mdW5jdGlvbiBjcmVhdGVFeGFtcGxlUHJvaigpIHtcbiAgLy8gQ3JlYXRlIHRoZSBwcm9qZWN0XG4gIGNvbnN0IG15UHJvaiA9IGNyZWF0ZVByb2ooXCJNeSBmaXJzdCBwcm9qZWN0XCIsIFwiVGhpcyBpcyBteSBmaXJzdCBwcm9qZWN0XCIpO1xuXG4gIC8vIENyZWF0ZSBhIGxpc3QgaW4gdGhlIHByb2plY3RcbiAgbXlQcm9qLmNyZWF0ZShcImxpc3QtXCIpO1xuXG4gIC8vIENyZWF0ZSBhIHNldCBvZiB0b2RvIGl0ZW1zIGluIHRoZSBuZXcgbGlzdFxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIG15UHJvai5saXN0QXJyYXlbMF0uY3JlYXRlKFwidG9kby1cIik7XG4gIH1cbn1cblxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgYmxhbmsgcHJvamVjdFxuY3JlYXRlRXhhbXBsZVByb2ooKTtcblxuLy8gU2V0IHVwIHRoZSBET01cbnNldFVwRE9NKHByb2pBcnJheSk7XG5cbi8vIERpc3BsYXkgdGhlIGRlZmF1bHQgcHJvamVjdFxuZnVuY3Rpb24gZGlzcGxheURlZmF1bHRQcm9qZWN0KGluZGV4ID0gMCkge1xuICBkaXNwbGF5UHJvamVjdChwcm9qQXJyYXlbaW5kZXhdKTtcbn1cblxuLy8gQ2FsbCBmdW5jdGlvbiBmb3IgZGlzcGxheWluZyB0aGUgZGVmYXVsdCBwcm9qZWN0XG5kaXNwbGF5RGVmYXVsdFByb2plY3QoKTtcblxuLy8gR2V0IGN1cnJlbnQgcHJvamVjdCBpZCBvZiBET00gcHJvamVjdCBjb250YWluZXIgZWxlbWVudFxuY29uc3QgY3VyUHJvaklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcblxuLy8gR2V0IG9iamVjdCBvZiBjdXJyZW50IHByb2plY3QgZnJvbSBtYWluIHByb2plY3QgYXJyYXlcbmNvbnN0IGN1clByb2pPYmogPSByZXR1cm5PYmplY3RGcm9tQXJyYXkoY3VyUHJvaklkLCBwcm9qQXJyYXkpO1xuXG4vLyBHZXQgaWQgb2YgZmlyc3QgbGlzdCBmcm9tIGN1cnJlbnQgcHJvamVjdCBvYmplY3RcbmNvbnN0IGN1ckxpc3RPYmogPSBjdXJQcm9qT2JqLmxpc3RBcnJheVswXTtcbmNvbnN0IGN1ckxpc3RJZCA9IGN1ckxpc3RPYmouaWQ7XG4vLyBHZXQgaWQgb2YgZmlyc3QgdG9kbyBpdGVtIGluIHRoZSBsaXN0IG9iamVjdCdzIHRvZG8gYXJyYXlcbmNvbnN0IGN1clRvZG9JZCA9IGN1ckxpc3RPYmoudG9kb0FycmF5WzBdLmlkO1xuXG4vLyBDYWxsIGdlbmVyYXRlVG9kb0Zvcm0gZm9yIHRlc3Rpbmdcbi8vIGdlbmVyYXRlVG9kb0Zvcm0oY3VyUHJvaklkLCBwcm9qQXJyYXksIGN1ckxpc3RJZCwgY3VyVG9kb0lkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==