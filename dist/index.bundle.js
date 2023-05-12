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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --min-width: 1310px;\n  --bg-side-header: #3e3e3e;\n  --bg-color: #888888;\n  --bg-list: #3e3e3e;\n  --title-icon-width: 1.5rem;\n  --header-icon-width: 2.2rem;\n  --list-width: 350px;\n  --list-padding: 20px;\n  --header-height: 100px;\n  --reg-font: 'Source Code Pro', monospace;\n  --font-col: whitesmoke;\n  --title-font: 'Press Start 2P', cursive;\n\n  font-family: 'Source Code Pro', monospace;\n  color: whitesmoke;\n}\n\nbody {\n  margin: 0;\n}\n\nh2, h3, h4, h5, h6 {\n  margin: 0px;\n}\n\n.content {\n  width: 100vw;\n  height: 100vh;\n\n}\n\n.content-container {\n  display: grid;\n  grid-template-columns: minmax(300px, 0.25fr) 1fr;\n  height: 100%;\n}\n\n\n/* ------------ SIDEBAR VIEW ------------ */\n.sidebar {\n  background: var(--bg-side-header);\n  border-right: 2px solid white;\n}\n\n.sidebar-title {\n  font-family: var(--title-font);\n  font-size: large;\n}\n\n.sidebar-container {\n  display: grid;\n  gap: 30px;\n  padding: 30px;\n  margin-top: 30px;\n}\n\n.projects-sidebar {\n  display: grid;\n  gap: 20px;\n}\n\n.sb-button-container {\n  display: grid;\n  align-content: center;\n  /* justify-content: center; */\n  width: 100%;\n}\n\n.sb-add-button {\n  font-family: var(--title-font);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--font-col);\n  background: var(--bg-side-header);\n  border: 3px solid var(--font-col);\n  padding: 1.4em 2.4em;\n  border-radius: 16px;\n}\n\n.sb-button:hover {\n  color: var(--bg-side-header);\n  background-color: var(--font-col);\n  border: 3px solid var(--bg-side-header);\n}\n\n/* ------------ PROJECT VIEW ------------ */\n.project-view {\n  width: 100%;\n  background-color: var(--bg-color);\n}\n\n.project-header {\n  display: grid;\n  grid-template-columns: 1fr 200px;\n  align-content: center;\n  border-bottom: 2px solid white;\n  background: var(--bg-side-header);\n  height: var(--header-height);\n  /* width: 100%; */\n}\n\n.header-title {\n  font-family: var(--title-font);\n  font-size: larger;\n  display: grid;\n  align-content: center;\n  padding-left: 2em;\n}\n\n.project-header img {\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n  width: var(--header-icon-width);\n}\n\n.header-icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, var(--header-icon-width));\n  align-content: center;\n  gap: 20px;\n  width: fit-content;\n}\n\n.project-container {\n  display: grid;\n  /* grid-template-columns: minmax(repeat(2, var(--list-width)), repeat(4, (--list-width))); */\n  grid-template-columns: repeat(3, var(--list-width));\n  padding: var(--list-padding);\n}\n\n#empty {\n  font-family: var(--title-font);\n  font-size: larger;\n  grid-template-columns: auto;\n  /* width: fit-content; */\n}\n\n.list-container {\n  display: grid;\n  gap: 10px;\n  /* width: var(--list-width); */\n  background-color: var(--bg-list);\n  padding: 25px 30px;\n  border-radius: 20px;\n  \n  border: 2px solid white;\n}\n\n.title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n\n  /* border: 1px solid blue; */\n}\n\n.icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.title-container img {\n  width: var(--title-icon-width);\n  height: var(--title-icon-width);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.list-title {\n  margin: 0;\n}\n\n.todo-container {\n  display: grid;\n  gap: 10px;\n  /* border: 1px solid green; */\n}\n\n.todo {\n  /* width: 100%; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* border: 1px solid red; */\n}\n\n.todo-name {\n  width: 70%;\n  height: fit-content;\n  /* border: 1px solid blue; */\n}\n\n.todo .icon-container {\n  /* border: 1px solid green; */\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.todo img {\n  width: calc(var(--title-icon-width) * 0.8);\n  height: calc(var(--title-icon-width) * 0.8);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.form-background {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  position: absolute;\n  /* top: 50%; */\n  /* left: 50%; */\n  width: 100%;\n  height: 100%;\n  background: #3e3e3e6e;\n}\n\n.form-container {\n  background-color: #3e3e3e;\n  padding: 50px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,0BAA0B;EAC1B,2BAA2B;EAC3B,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;EACtB,wCAAwC;EACxC,sBAAsB;EACtB,uCAAuC;;EAEvC,yCAAyC;EACzC,iBAAiB;AACnB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;;AAEf;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,YAAY;AACd;;;AAGA,2CAA2C;AAC3C;EACE,iCAAiC;EACjC,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,iCAAiC;EACjC,iCAAiC;EACjC,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;EAC5B,iCAAiC;EACjC,uCAAuC;AACzC;;AAEA,2CAA2C;AAC3C;EACE,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,qBAAqB;EACrB,8BAA8B;EAC9B,iCAAiC;EACjC,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,aAAa;EACb,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,gGAAgG;EAChG,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,0DAA0D;EAC1D,qBAAqB;EACrB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4FAA4F;EAC5F,mDAAmD;EACnD,4BAA4B;AAC9B;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,gCAAgC;EAChC,kBAAkB;EAClB,mBAAmB;;EAEnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;;;EAGX,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,8BAA8B;EAC9B,+BAA+B;EAC/B,gGAAgG;AAClG;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,0CAA0C;EAC1C,2CAA2C;EAC3C,gGAAgG;AAClG;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,WAAW;EACX,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Code+Pro:wght@300;400;500;600&display=swap');\n\n:root {\n  --min-width: 1310px;\n  --bg-side-header: #3e3e3e;\n  --bg-color: #888888;\n  --bg-list: #3e3e3e;\n  --title-icon-width: 1.5rem;\n  --header-icon-width: 2.2rem;\n  --list-width: 350px;\n  --list-padding: 20px;\n  --header-height: 100px;\n  --reg-font: 'Source Code Pro', monospace;\n  --font-col: whitesmoke;\n  --title-font: 'Press Start 2P', cursive;\n\n  font-family: 'Source Code Pro', monospace;\n  color: whitesmoke;\n}\n\nbody {\n  margin: 0;\n}\n\nh2, h3, h4, h5, h6 {\n  margin: 0px;\n}\n\n.content {\n  width: 100vw;\n  height: 100vh;\n\n}\n\n.content-container {\n  display: grid;\n  grid-template-columns: minmax(300px, 0.25fr) 1fr;\n  height: 100%;\n}\n\n\n/* ------------ SIDEBAR VIEW ------------ */\n.sidebar {\n  background: var(--bg-side-header);\n  border-right: 2px solid white;\n}\n\n.sidebar-title {\n  font-family: var(--title-font);\n  font-size: large;\n}\n\n.sidebar-container {\n  display: grid;\n  gap: 30px;\n  padding: 30px;\n  margin-top: 30px;\n}\n\n.projects-sidebar {\n  display: grid;\n  gap: 20px;\n}\n\n.sb-button-container {\n  display: grid;\n  align-content: center;\n  /* justify-content: center; */\n  width: 100%;\n}\n\n.sb-add-button {\n  font-family: var(--title-font);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--font-col);\n  background: var(--bg-side-header);\n  border: 3px solid var(--font-col);\n  padding: 1.4em 2.4em;\n  border-radius: 16px;\n}\n\n.sb-button:hover {\n  color: var(--bg-side-header);\n  background-color: var(--font-col);\n  border: 3px solid var(--bg-side-header);\n}\n\n/* ------------ PROJECT VIEW ------------ */\n.project-view {\n  width: 100%;\n  background-color: var(--bg-color);\n}\n\n.project-header {\n  display: grid;\n  grid-template-columns: 1fr 200px;\n  align-content: center;\n  border-bottom: 2px solid white;\n  background: var(--bg-side-header);\n  height: var(--header-height);\n  /* width: 100%; */\n}\n\n.header-title {\n  font-family: var(--title-font);\n  font-size: larger;\n  display: grid;\n  align-content: center;\n  padding-left: 2em;\n}\n\n.project-header img {\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n  width: var(--header-icon-width);\n}\n\n.header-icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, var(--header-icon-width));\n  align-content: center;\n  gap: 20px;\n  width: fit-content;\n}\n\n.project-container {\n  display: grid;\n  /* grid-template-columns: minmax(repeat(2, var(--list-width)), repeat(4, (--list-width))); */\n  grid-template-columns: repeat(3, var(--list-width));\n  padding: var(--list-padding);\n}\n\n#empty {\n  font-family: var(--title-font);\n  font-size: larger;\n  grid-template-columns: auto;\n  /* width: fit-content; */\n}\n\n.list-container {\n  display: grid;\n  gap: 10px;\n  /* width: var(--list-width); */\n  background-color: var(--bg-list);\n  padding: 25px 30px;\n  border-radius: 20px;\n  \n  border: 2px solid white;\n}\n\n.title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n\n  /* border: 1px solid blue; */\n}\n\n.icon-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.title-container img {\n  width: var(--title-icon-width);\n  height: var(--title-icon-width);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.list-title {\n  margin: 0;\n}\n\n.todo-container {\n  display: grid;\n  gap: 10px;\n  /* border: 1px solid green; */\n}\n\n.todo {\n  /* width: 100%; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* border: 1px solid red; */\n}\n\n.todo-name {\n  width: 70%;\n  height: fit-content;\n  /* border: 1px solid blue; */\n}\n\n.todo .icon-container {\n  /* border: 1px solid green; */\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-content: center;\n  gap: 10px;\n}\n\n.todo img {\n  width: calc(var(--title-icon-width) * 0.8);\n  height: calc(var(--title-icon-width) * 0.8);\n  filter: invert(100%) sepia(0%) saturate(7454%) hue-rotate(94deg) brightness(110%) contrast(105%);\n}\n\n.form-background {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  position: absolute;\n  /* top: 50%; */\n  /* left: 50%; */\n  width: 100%;\n  height: 100%;\n  background: #3e3e3e6e;\n}\n\n.form-container {\n  background-color: #3e3e3e;\n  padding: 50px;\n}"],"sourceRoot":""}]);
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
    // Get the project object from the project array
    const proj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(projId, projArray);
    // Get the list object from the project's list array
    const list = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(listId, proj.listArray);
    // Get the todo object from the list's todo array
    const todo = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(todoId, list.todoArray);

    if (todoNameInput.value !== "") {
      // Change the name of todo object
      todo.name = todoNameInput.value;
      // Change the priority of todo object
      todo.priority = prioritySelect.value;
      // Change the info of the todo object
      todo.info = infoTextArea;

      // Update project view
      (0,_domManager__WEBPACK_IMPORTED_MODULE_1__.updateProjView)(proj.listArray);

      // Remove form background element from DOM
      formBackground.remove();
    } else {
      // Throw error and cancel submission of form
      alert("no name");
    }
  });

  // Add form container to document
  const content = document.querySelector(".content-container");
  content.appendChild(formBackground);
}

// List edit form
function generateListForm() {}

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
  // Get project object from array
  const listId = e.target.closest(".list-container").id;
  // Get the id of the targeted todo DOM element
  const todoId = e.target.id;
  // Remove the first 4 characters from targetId string (First 5 characters: "edit-")
  const todoObjId = todoId.substring(5);

  (0,_formManager__WEBPACK_IMPORTED_MODULE_4__.generateTodoForm)(projId, projArray, listId, todoObjId);
}

// Handle list edit event
function handleListEdit(e) {
  console.log("STILL TO IMPLEMENT");

  // Get project id
  const projId = e.target.closest(".project-container").id;
  // Get project object from array
  const proj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_5__["default"])(projId, projArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0EscURBQVE7O0FBRVI7QUFDQTtBQUNBLEVBQUUsMkRBQWM7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdEQUFxQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9vYmplY3RMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvUHJvdG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmZhbWlseT1Tb3VyY2UrQ29kZStQcm86d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1taW4td2lkdGg6IDEzMTBweDtcXG4gIC0tYmctc2lkZS1oZWFkZXI6ICMzZTNlM2U7XFxuICAtLWJnLWNvbG9yOiAjODg4ODg4O1xcbiAgLS1iZy1saXN0OiAjM2UzZTNlO1xcbiAgLS10aXRsZS1pY29uLXdpZHRoOiAxLjVyZW07XFxuICAtLWhlYWRlci1pY29uLXdpZHRoOiAyLjJyZW07XFxuICAtLWxpc3Qtd2lkdGg6IDM1MHB4O1xcbiAgLS1saXN0LXBhZGRpbmc6IDIwcHg7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgLS1yZWctZm9udDogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcXG4gIC0tZm9udC1jb2w6IHdoaXRlc21va2U7XFxuICAtLXRpdGxlLWZvbnQ6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XFxuXFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwMHB4LCAwLjI1ZnIpIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tIFNJREVCQVIgVklFVyAtLS0tLS0tLS0tLS0gKi9cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLnByb2plY3RzLXNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNiLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zYi1hZGQtYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2wpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZm9udC1jb2wpO1xcbiAgcGFkZGluZzogMS40ZW0gMi40ZW07XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uc2ItYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbCk7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLSBQUk9KRUNUIFZJRVcgLS0tLS0tLS0tLS0tICovXFxuLnByb2plY3QtdmlldyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMDBweDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxuICB3aWR0aDogdmFyKC0taGVhZGVyLWljb24td2lkdGgpO1xcbn1cXG5cXG4uaGVhZGVyLWljb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCB2YXIoLS1oZWFkZXItaWNvbi13aWR0aCkpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KHJlcGVhdCgyLCB2YXIoLS1saXN0LXdpZHRoKSksIHJlcGVhdCg0LCAoLS1saXN0LXdpZHRoKSkpOyAqL1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgdmFyKC0tbGlzdC13aWR0aCkpO1xcbiAgcGFkZGluZzogdmFyKC0tbGlzdC1wYWRkaW5nKTtcXG59XFxuXFxuI2VtcHR5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIC8qIHdpZHRoOiB2YXIoLS1saXN0LXdpZHRoKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpc3QpO1xcbiAgcGFkZGluZzogMjVweCAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIFxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG5cXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbi5pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IHZhcigtLXRpdGxlLWljb24td2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS10aXRsZS1pY29uLXdpZHRoKTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDU0JSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbn1cXG5cXG4udG9kbyB7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4udG9kby1uYW1lIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLnRvZG8gLmljb24tY29udGFpbmVyIHtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvIGltZyB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS10aXRsZS1pY29uLXdpZHRoKSAqIDAuOCk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdGl0bGUtaWNvbi13aWR0aCkgKiAwLjgpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4uZm9ybS1iYWNrZ3JvdW5kIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLyogdG9wOiA1MCU7ICovXFxuICAvKiBsZWZ0OiA1MCU7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMzZTNlM2U2ZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTNlM2U7XFxuICBwYWRkaW5nOiA1MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixzQkFB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aW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZmYW1pbHk9U291cmNlK0NvZGUrUHJvOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tbWluLXdpZHRoOiAxMzEwcHg7XFxuICAtLWJnLXNpZGUtaGVhZGVyOiAjM2UzZTNlO1xcbiAgLS1iZy1jb2xvcjogIzg4ODg4ODtcXG4gIC0tYmctbGlzdDogIzNlM2UzZTtcXG4gIC0tdGl0bGUtaWNvbi13aWR0aDogMS41cmVtO1xcbiAgLS1oZWFkZXItaWNvbi13aWR0aDogMi4ycmVtO1xcbiAgLS1saXN0LXdpZHRoOiAzNTBweDtcXG4gIC0tbGlzdC1wYWRkaW5nOiAyMHB4O1xcbiAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gIC0tcmVnLWZvbnQ6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICAtLWZvbnQtY29sOiB3aGl0ZXNtb2tlO1xcbiAgLS10aXRsZS1mb250OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xcblxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMC4yNWZyKSAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLSBTSURFQkFSIFZJRVcgLS0tLS0tLS0tLS0tICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zYi1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2ItYWRkLWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sKTtcXG4gIHBhZGRpbmc6IDEuNGVtIDIuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLnNiLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2wpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0gUFJPSkVDVCBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5wcm9qZWN0LXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwcHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgd2lkdGg6IHZhcigtLWhlYWRlci1pY29uLXdpZHRoKTtcXG59XFxuXFxuLmhlYWRlci1pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgdmFyKC0taGVhZGVyLWljb24td2lkdGgpKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChyZXBlYXQoMiwgdmFyKC0tbGlzdC13aWR0aCkpLCByZXBlYXQoNCwgKC0tbGlzdC13aWR0aCkpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIHZhcigtLWxpc3Qtd2lkdGgpKTtcXG4gIHBhZGRpbmc6IHZhcigtLWxpc3QtcGFkZGluZyk7XFxufVxcblxcbiNlbXB0eSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICAvKiB3aWR0aDogdmFyKC0tbGlzdC13aWR0aCk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saXN0KTtcXG4gIHBhZGRpbmc6IDI1cHggMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiB2YXIoLS10aXRsZS1pY29uLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tdGl0bGUtaWNvbi13aWR0aCk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG59XFxuXFxuLnRvZG8ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbi50b2RvIC5pY29uLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kbyBpbWcge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tdGl0bGUtaWNvbi13aWR0aCkgKiAwLjgpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpdGxlLWljb24td2lkdGgpICogMC44KTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDU0JSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmZvcm0tYmFja2dyb3VuZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qIHRvcDogNTAlOyAqL1xcbiAgLyogbGVmdDogNTAlOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjM2UzZTNlNmU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzZTNlO1xcbiAgcGFkZGluZzogNTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJpbXBvcnQgcGx1c0ljb24gZnJvbSBcIi4vaW1hZ2VzL3BsdXMtYm94LW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgdHJhc2hDYW5JY29uIGZyb20gXCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5zdmdcIjtcbmltcG9ydCBmaWxlRWRpdEljb24gZnJvbSBcIi4vaW1hZ2VzL2ZpbGUtZWRpdC1vdXRsaW5lLnN2Z1wiO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuRE9NIFNFVFVQXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuY29uc3Qgc2lkZWJhclRpdGxlRWxlbWVudCA9IFwiaDJcIjtcbmNvbnN0IGhlYWRlclRpdGxlRWxlbWVudCA9IFwiaDJcIjtcbmNvbnN0IGxpc3RUaXRsZUVsZW1lbnQgPSBcImgzXCI7XG5jb25zdCB0b2RvTmFtZUVsZW1lbnQgPSBcImg1XCI7XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBhbGwgbGlzdHMgZnJvbSBwcm9qZWN0IHZpZXcgaW4gRE9NXG5mdW5jdGlvbiBlbXB0eVNpZGViYXJMaXN0KHNpZGViYXJQcm9qTGlzdCkge1xuICAvLyBSZW1vdmUgYWxsIGNoaWxkcmVuIG9mIHByb2plY3Qgbm9kZVxuICB3aGlsZSAoc2lkZWJhclByb2pMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICBzaWRlYmFyUHJvakxpc3QucmVtb3ZlQ2hpbGQoc2lkZWJhclByb2pMaXN0Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlU2lkZWJhckxpc3QocHJvakFycmF5KSB7XG4gIC8vIEdldCBjb250YWluZXIgZm9yIHByb2plY3RzIGluIHNpZGViYXJcbiAgY29uc3Qgc2lkZWJhclByb2pMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1zaWRlYmFyXCIpO1xuXG4gIC8vIEVtcHR5IHNpZGViYXIgbGlzdFxuICBlbXB0eVNpZGViYXJMaXN0KHNpZGViYXJQcm9qTGlzdCk7XG5cbiAgLy8gRm9yIGVhY2ggcHJvamVjdCBpbiBhcnJheSwgYWRkIG5hbWUgb2YgcHJvamVjdCB0byBzaWRlYmFyIHByb2ogbGlzdCBkaXZcbiAgcHJvakFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwcm9qSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobGlzdFRpdGxlRWxlbWVudCk7XG4gICAgcHJvakl0ZW0uY2xhc3NMaXN0LmFkZChcInNiLXByb2otaXRlbVwiKTtcbiAgICBwcm9qSXRlbS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICBzaWRlYmFyUHJvakxpc3QuYXBwZW5kQ2hpbGQocHJvakl0ZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0VXBIZWFkZXIocHJvamVjdEhlYWRlcikge1xuICAvLyBBZGQgY29udGFpbmVyIGZvciB0aXRsZVxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItdGl0bGVcIik7XG4gIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAvLyBBZGQgdGl0bGUgdG8gcHJvamVjdCBoZWFkZXJcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGhlYWRlclRpdGxlRWxlbWVudCk7XG4gIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICAvLyBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRpdGxlXCIpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIC8vIEFkZCBpY29uIGNvbnRhaW5lciB0byBoZWFkZXJcbiAgY29uc3QgaGVhZGVySWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1pY29uLWNvbnRhaW5lclwiKTtcbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJY29uQ29udGFpbmVyKTtcbiAgLy8gQWRkIGljb25zIHRvIGNvbnRhaW5lclxuICBjb25zdCBoZWFkZXJBZGRJY29uID0gbmV3IEltYWdlKCk7XG4gIGhlYWRlckFkZEljb24uc3JjID0gcGx1c0ljb247XG4gIGhlYWRlckFkZEljb24uY2xhc3NMaXN0LmFkZChcImFkZC1pY29uXCIpO1xuICAvLyBoZWFkZXJBZGRJY29uLnNldEF0dHJpYnV0ZShcInByb2pJZFwiLCBcInByb2oxXCIpO1xuICBoZWFkZXJBZGRJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJwcm9qXCIpO1xuICBoZWFkZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckFkZEljb24pO1xuICBjb25zdCBoZWFkZXJFZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBoZWFkZXJFZGl0SWNvbi5zcmMgPSBmaWxlRWRpdEljb247XG4gIGhlYWRlckVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWljb25cIik7XG4gIC8vIGhlYWRlckVkaXRJY29uLnNldEF0dHJpYnV0ZShcInByb2pJZFwiLCBcInByb2pcIik7XG4gIGhlYWRlckVkaXRJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJwcm9qXCIpO1xuICBoZWFkZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckVkaXRJY29uKTtcbiAgY29uc3QgaGVhZGVyUmVtb3ZlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBoZWFkZXJSZW1vdmVJY29uLnNyYyA9IHRyYXNoQ2FuSWNvbjtcbiAgaGVhZGVyUmVtb3ZlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsLWljb25cIik7XG4gIGhlYWRlclJlbW92ZUljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInByb2pcIik7XG4gIGhlYWRlckljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUmVtb3ZlSWNvbik7XG59XG5cbmZ1bmN0aW9uIHNldFVwRE9NKHByb2pBcnJheSkge1xuICAvLyBHZXQgY29udGVudCBkaXYgZWxlbWVudFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gIC8vIENyZWF0ZSBjb250ZW50IGNvbnRhaW5lclxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1jb250YWluZXJcIik7XG5cbiAgLy8gQ3JlYXRlIHNpZGViYXIgc2VjdGlvblxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAvLyBDcmVhdGUgc2lkZWJhciBjb250YWluZXJcbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXItY29udGFpbmVyXCIpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJDb250YWluZXIpO1xuICAvLyBDcmVhdGUgdGl0bGUgZm9yIHNpZGViYXJcbiAgY29uc3Qgc2lkZWJhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzaWRlYmFyVGl0bGVFbGVtZW50KTtcbiAgc2lkZWJhclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXRpdGxlXCIpO1xuICBzaWRlYmFyVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhclRpdGxlKTtcbiAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgcHJvamVjdHMgaW4gc2lkZWJhclxuICBjb25zdCBzaWRlYmFyUHJvakxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyUHJvakxpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXNpZGViYXJcIik7XG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhclByb2pMaXN0KTtcblxuICAvLyBGb3IgZWFjaCBwcm9qZWN0IGluIGFycmF5LCBhZGQgbmFtZSBvZiBwcm9qZWN0IHRvIHNpZGViYXIgcHJvaiBsaXN0IGRpdlxuICBwcm9qQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2pJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsaXN0VGl0bGVFbGVtZW50KTtcbiAgICBwcm9qSXRlbS5jbGFzc0xpc3QuYWRkKFwic2ItcHJvai1pdGVtXCIpO1xuICAgIHByb2pJdGVtLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgIHNpZGViYXJQcm9qTGlzdC5hcHBlbmRDaGlsZChwcm9qSXRlbSk7XG4gIH0pO1xuXG4gIC8vIEFkZCBidXR0b24gZm9yIGNyZWF0aW5nIG5ldyBwcm9qZWN0cyB0byBzaWRlYmFyXG4gIGNvbnN0IGFkZFByb2pDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRQcm9qQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzYi1idXR0b24tY29udGFpbmVyXCIpO1xuICBjb25zdCBhZGRQcm9qQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvakJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2ItYWRkLWJ1dHRvblwiKTtcbiAgYWRkUHJvakJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgYWRkUHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qQnV0dG9uKTtcbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qQ29udGFpbmVyKTtcblxuICAvLyBDcmVhdGUgcHJvamVjdCB2aWV3XG4gIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtdmlld1wiKTtcblxuICAvLyBDcmVhdGUgcHJvamVjdCB2aWV3IGhlYWRlclxuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXJcIik7XG4gIHNldFVwSGVhZGVyKHByb2plY3RIZWFkZXIpO1xuXG4gIC8vIEFkZCBwcm9qZWN0IGhlYWRlciB0byBwcm9qZWN0IHZpZXdcbiAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgLy8gQ3JlYXRlIHByb2plY3QgdmlldyBtYWluIHNlY3Rpb25cbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gIC8vIEFkZCBwcm9qZWN0IGNvbnRhaW5lciB0byBwcm9qZWN0IHZpZXdcbiAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgLy8gQWRkIGVsZW1lbnRzIHRvIGRvY3VtZW50XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFZpZXcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xufVxuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuRE9NIFVQREFURVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgdG9kbyBsaXN0XG5jb25zdCBkaXNwbGF5TGlzdCA9IChsaXN0KSA9PiB7XG4gIC8vIEdldCBwcm9qZWN0IGNvbnRhaW5lclxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcblxuICAvLyBDcmVhdGUgbmV3IGVsZW1lbnRcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vIEFzc2lnbiBjbGFzcyBhbmQgaWQgbmFtZVxuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbGlzdElkTmFtZSA9IGAke2xpc3QuaWR9YDtcbiAgbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBsaXN0SWROYW1lKTtcblxuICAvLyBEaXNwbGF5IG5hbWUgYXMgdGl0bGVcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGxpc3RUaXRsZUVsZW1lbnQpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibGlzdC10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAvLyBEaXNwbGF5IGljb25zXG4gIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYWRkSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBhZGRJY29uLnNyYyA9IHBsdXNJY29uO1xuICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGQtaWNvblwiKTtcbiAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgYWRkLSR7bGlzdElkTmFtZX1gKTtcbiAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibGlzdFwiKTtcbiAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJsaXN0SWRcIiwgbGlzdElkTmFtZSk7XG4gIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGVkaXRJY29uLnNyYyA9IGZpbGVFZGl0SWNvbjtcbiAgZWRpdEljb24uY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcbiAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGVkaXQtJHtsaXN0SWROYW1lfWApO1xuICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibGlzdFwiKTtcbiAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgY29uc3QgcmVtb3ZlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICByZW1vdmVJY29uLnNyYyA9IHRyYXNoQ2FuSWNvbjtcbiAgcmVtb3ZlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsLWljb25cIik7XG4gIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbC0ke2xpc3RJZE5hbWV9YCk7XG4gIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImxpc3RcIik7XG4gIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUljb24pO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcblxuICAvLyBEaXNwbGF5IGxpc3QgY29udGVudHNcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICBsaXN0LnRvZG9BcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gVG9kbyBib3hcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvSWROYW1lID0gYCR7ZWxlbWVudC5pZH1gO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgdG9kby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0b2RvSWROYW1lKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgIC8vIENoZWNrYm94XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBjaGstJHt0b2RvSWROYW1lfWApO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIC8vIFRvZG8gbmFtZVxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0b2RvTmFtZUVsZW1lbnQpO1xuICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWVcIik7XG4gICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgLy8gVG9kbyBpY29uc1xuICAgIGNvbnN0IHRvZG9JY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0ljb25zLmNsYXNzTGlzdC5hZGQoXCJpY29uLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0b2RvRWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgIHRvZG9FZGl0LnNyYyA9IGZpbGVFZGl0SWNvbjtcbiAgICB0b2RvRWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1pY29uXCIpO1xuICAgIHRvZG9FZGl0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0LSR7dG9kb0lkTmFtZX1gKTtcbiAgICB0b2RvRWRpdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidG9kb1wiKTtcbiAgICB0b2RvRWRpdC5zZXRBdHRyaWJ1dGUoXCJsaXN0SWRcIiwgbGlzdElkTmFtZSk7XG4gICAgdG9kb0ljb25zLmFwcGVuZENoaWxkKHRvZG9FZGl0KTtcbiAgICBjb25zdCB0b2RvRGVsID0gbmV3IEltYWdlKCk7XG4gICAgdG9kb0RlbC5zcmMgPSB0cmFzaENhbkljb247XG4gICAgdG9kb0RlbC5jbGFzc0xpc3QuYWRkKFwiZGVsLWljb25cIik7XG4gICAgdG9kb0RlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGVsLSR7dG9kb0lkTmFtZX1gKTtcbiAgICB0b2RvRGVsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0b2RvXCIpO1xuICAgIHRvZG9EZWwuc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICAgIHRvZG9JY29ucy5hcHBlbmRDaGlsZCh0b2RvRGVsKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9JY29ucyk7XG4gICAgLy8gQWRkIHRvZG8gdG8gY29udGFpbmVyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgfSk7XG5cbiAgLy8gQWRkIGxpc3QgY29udGFpbmVyIHRvIERPTVxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xufTtcblxuLypcbiAgX19fVVBEQVRFIFBST0pFQ1QgVklFV19fX1xuKi9cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBhbGwgbGlzdHMgZnJvbSBwcm9qZWN0IHZpZXcgaW4gRE9NXG5mdW5jdGlvbiBlbXB0eVByb2pWaWV3KGxpc3QpIHtcbiAgLy8gR2V0IHByb2plY3Qgbm9kZSBpbiBET01cbiAgY29uc3QgcHJvak5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICAvLyBSZW1vdmUgYWxsIGNoaWxkcmVuIG9mIHByb2plY3Qgbm9kZVxuICB3aGlsZSAocHJvak5vZGUuZmlyc3RDaGlsZCkge1xuICAgIHByb2pOb2RlLnJlbW92ZUNoaWxkKHByb2pOb2RlLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gYWRkIGxpc3QgdG8gRE9NXG5mdW5jdGlvbiBhZGRMaXN0VG9ET00obGlzdCkge1xuICAvLyBEaXNwbGF5IGxpc3QgaW4gRE9NXG4gIGRpc3BsYXlMaXN0KGxpc3QpO1xufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgcHJvamVjdCB2aWV3XG5mdW5jdGlvbiB1cGRhdGVQcm9qVmlldyhhcnJheSkge1xuICAvLyBFbXB0eSBwcm9qZWN0IHZpZXdcbiAgZW1wdHlQcm9qVmlldygpO1xuICAvLyBDeWNsZSB0aHJvdWdoIGFsbCBlbGVtZW50cyBvZiBwcm9qZWN0J3MgbGlzdCBhcnJheVxuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gQWRkIGVsZW1lbnQgdG8gRE9NXG4gICAgYWRkTGlzdFRvRE9NKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuLypcbiAgX19fRElTUExBWSBQUk9KRUNUX19fXG4qL1xuLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIGFsbCBsaXN0cyBmcm9tIHByb2plY3QgdmlldyBpbiBET01cbmZ1bmN0aW9uIGVtcHR5UHJvakNvbnRhaW5lcihwcm9qZWN0Q29udGFpbmVyKSB7XG4gIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW4gb2YgcHJvamVjdCBub2RlXG4gIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qT2JqKSB7XG4gIC8vIEdldCB0aGUgcHJvamVjdCBjb250YWluZXIgZWxlbWVudCBmcm9tIERPTVxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgLy8gRW1wdHkgZXhpc3RpbmcgcHJvamVjdCBjb250YWluZXJcbiAgZW1wdHlQcm9qQ29udGFpbmVyKHByb2plY3RDb250YWluZXIpO1xuXG4gIC8vIElmIHByb2plY3QgYXJyYXkgcHJldmlvdXNseSBlbXB0eSB0aGVuIHNldFVwSGVhZGVyXG4gIGlmIChwcm9qZWN0Q29udGFpbmVyLmlkID09PSBcImVtcHR5XCIpIHtcbiAgICAvLyBHZXQgcHJvamVjdCBoZWFkZXIgZWxlbWVudFxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyXCIpO1xuICAgIHNldFVwSGVhZGVyKHByb2plY3RIZWFkZXIpO1xuICB9XG5cbiAgLy8gR2V0IHRoZSBwcm9qZWN0IElEXG4gIGNvbnN0IHByb2plY3RJRCA9IHByb2pPYmouaWQ7XG4gIC8vIEFkZCBJRCB0byBwcm9qZWN0IGNvbnRhaW5lciBlbGVtZW50XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdElEKTtcblxuICAvLyBHZXQgdGhlIGhlYWRlciB0aXRsZSBlbGVtZW50XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItdGl0bGVcIik7XG4gIC8vIFNldCB0ZXh0IGZvciB0aXRsZSB0byBwcm9qZWN0IG5hbWVcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qT2JqLm5hbWU7XG5cbiAgcHJvak9iai5saXN0QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgIGRpc3BsYXlMaXN0KGVsZW1lbnQpO1xuICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZW1wdHkgcHJvamVjdCBoZWFkZXJcbmZ1bmN0aW9uIGVtcHR5SGVhZGVyKHByb2plY3RIZWFkZXIpIHtcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBvZiBoZWFkZXIgbm9kZVxuICB3aGlsZSAocHJvamVjdEhlYWRlci5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdEhlYWRlci5yZW1vdmVDaGlsZChwcm9qZWN0SGVhZGVyLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUVtcHR5UHJvakFycmF5KCkge1xuICAvLyBHZXQgdGhlIHByb2plY3QgY29udGFpbmVyIGVsZW1lbnQgZnJvbSBET01cbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gIC8vIEVtcHR5IGV4aXN0aW5nIHByb2plY3QgY29udGFpbmVyXG4gIGVtcHR5UHJvakNvbnRhaW5lcihwcm9qZWN0Q29udGFpbmVyKTtcblxuICAvLyBTZXQgZW1wdHkgaWQgZm9yIHByb2plY3QgY29udGFpbmVyXG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbXB0eVwiKTtcblxuICAvLyBTZXQgdGV4dCBmb3IgZW1wdHkgcHJvamVjdCBhcnJheVxuICBwcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJObyBwcm9qZWN0cyEgQWRkIGEgcHJvamVjdCBpbiB0aGUgc2lkZWJhciFcIjtcblxuICAvLyBHZXQgcHJvamVjdCBoZWFkZXIgZWxlbWVudFxuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcbiAgZW1wdHlIZWFkZXIocHJvamVjdEhlYWRlcik7XG59XG5cbmV4cG9ydCB7XG4gIHNldFVwRE9NLFxuICB1cGRhdGVQcm9qVmlldyxcbiAgZGlzcGxheVByb2plY3QsXG4gIHVwZGF0ZVNpZGViYXJMaXN0LFxuICBkaXNwbGF5RW1wdHlQcm9qQXJyYXksXG59O1xuIiwiaW1wb3J0IHJldHVybk9iamVjdEZyb21BcnJheSBmcm9tIFwiLi9vYmplY3RMb2dpY1wiO1xuaW1wb3J0IHsgdXBkYXRlUHJvalZpZXcgfSBmcm9tIFwiLi9kb21NYW5hZ2VyXCI7XG5cbi8vIERlZmluZSBwcmlvcml0eSBvcHRpb25zIGFycmF5XG5jb25zdCBwcmlvcml0eU9wdGlvbnNBcnJheSA9IFtcIm5vbmVcIiwgXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJoaWdoXCJdO1xuXG4vLyBUb2RvIGVkaXQgZm9ybVxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvRm9ybShwcm9qSWQsIHByb2pBcnJheSwgbGlzdElkLCB0b2RvSWQpIHtcbiAgLy8gQ3JlYXRlIGZvcm0gYmFja2dyb3VuZFxuICBjb25zdCBmb3JtQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1CYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJhY2tncm91bmRcIik7XG4gIC8vIENyZWF0ZSBmb3JtIGNvbnRhaW5lclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgLy8gQXBwZW5kIGNvbnRhaW5lciB0byBiYWNrZ3JvdW5kIGVsZW1lbnRcbiAgZm9ybUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgLy8gQWRkIGNvbnRhaW5lciBmb3IgbmFtZSBlbGVtZW50c1xuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1kaXZcIik7XG4gIC8vIEFkZCBsYWJlbCBmb3IgbmFtZSBpbnB1dFxuICBjb25zdCB0b2RvTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0b2RvTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tbmFtZVwiKTtcbiAgdG9kb05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIjtcbiAgLy8gQWRkIGlucHV0IGZvciBuYW1lIGFuZCBzZXQgYXR0cmlidXRlc1xuICBjb25zdCB0b2RvTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b2RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0b2RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1uYW1lXCIpO1xuICB0b2RvTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvLW5hbWVcIik7XG4gIC8vIFNldCBpbnB1dCBhcyByZXF1aXJlZFxuICB0b2RvTmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAvLyBBcHBlbmQgYm90aCBsYWJlbCBhbmQgaW5wdXQgZm9yIG5hbWUgdG8gbmFtZSBjb250YWluZXJcbiAgbmFtZURpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZUxhYmVsKTtcbiAgbmFtZURpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZUlucHV0KTtcbiAgLy8gQXBwZW5kIHRoZSBuYW1lIGNvbnRhaW5lciB0byBmb3JtIGNvbnRhaW5lclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIHByaW9yaXR5IGVsZW1lbnRzXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZGl2XCIpO1xuICAvLyBBZGQgbGFiZWwgZm9yIHByaW9yaXR5IHNlbGVjdFxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tcHJpb3JpdHlcIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAvLyBBZGQgcHJpb3JpdHkgc2VsZWN0IGVsZW1lbnRcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJ0b2RvLXByaW9yaXR5XCI7XG4gIC8vIExvb3AgdGhyb3VnaCBvcHRpb25zIGFycmF5XG4gIHByaW9yaXR5T3B0aW9uc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnRcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgLy8gU2V0IG9wdGlvbiB2YWx1ZSB0byB0aGUgc3RyaW5nIG9mIGVhY2ggYXJyYXkgaXRlbVxuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1lbnQpO1xuICAgIC8vIEdldCBzdHJpbmcgZm9yIG9wdGlvbiBuYW1lXG4gICAgY29uc3Qgb3B0aW9uTmFtZSA9IGVsZW1lbnQ7XG4gICAgLy8gR2V0IHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIG5hbWVcbiAgICBjb25zdCBmaXJzdExldHRlciA9IG9wdGlvbk5hbWUuY2hhckF0KDApO1xuICAgIC8vIFNldCB0aGUgdGV4dCB0byBuYW1lIHdpdGggY2FwaXRhbCBmaXJzdCBsZXR0ZXJcbiAgICBwcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBmaXJzdExldHRlci50b1VwcGVyQ2FzZSgpICsgb3B0aW9uTmFtZS5zbGljZSgxKTtcbiAgICAvLyBBZGQgb3B0aW9uIGVsZW1lbnQgdG8gc2VsZWN0IGVsZW1lbnRcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG4gIH0pO1xuICAvLyBBZGQgdGhlIHNlbGVjdCBlbGVtZW50cyB0byBwcmlvcml0eSBjb250YWluZXJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgLy8gQXBwZW5kIHRoZSBwcmlvcml0eSBjb250YWluZXIgdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIGluZm9cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZGl2XCIpO1xuICAvLyBBZGQgbGFiZWwgZm9yIGluZm8gYm94XG4gIGNvbnN0IGluZm9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5mb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8taW5mb1wiKTtcbiAgaW5mb0xhYmVsLnRleHRDb250ZW50ID0gXCJJbmZvOlwiO1xuICAvLyBBZGQgaW5mbyB0ZXh0IGFyZWEgZWxlbWVudFxuICBjb25zdCBpbmZvVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGluZm9UZXh0QXJlYS5uYW1lID0gXCJ0b2RvLWluZm9cIjtcbiAgLy8gQWRkIHRoZSBpbmZvIGVsZW1lbnRzIHRvIGluZm8gY29udGFpbmVyXG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoaW5mb0xhYmVsKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvVGV4dEFyZWEpO1xuICAvLyBBcHBlbmQgdGhlIGluZm8gY29udGFpbmVyIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ1dHRvbi1kaXZcIik7XG4gIC8vIEFkZCBpbnB1dCBlbGVtZW50IG9mIHR5cGUgc3VibWl0XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1mb3JtLWJ0blwiKTtcbiAgLy8gQWRkIHN1Ym1pdCBidXR0b24gdG8gdGhlIGJ1dHRvbiBkaXZcbiAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIC8vIEFkZCBhIGJ1dHRvbiBlbGVtZW50IGZvciBjYW5jZWxsaW5nIGFjdGlvblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtZm9ybS1idG5cIik7XG4gIC8vIFNldCBidXR0b24gdGV4dFxuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAvLyBBZGQgY2FuY2VsIGJ1dHRvbiB0byB0aGUgYnV0dG9uIGRpdlxuICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgLy8gQWRkIHN1Ym1pdCBjb250YWluZXIgdG8gZm9ybSBjb250YWluZXJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBzdWJtaXQgYnV0dG9uXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIEdldCB0aGUgcHJvamVjdCBvYmplY3QgZnJvbSB0aGUgcHJvamVjdCBhcnJheVxuICAgIGNvbnN0IHByb2ogPSByZXR1cm5PYmplY3RGcm9tQXJyYXkocHJvaklkLCBwcm9qQXJyYXkpO1xuICAgIC8vIEdldCB0aGUgbGlzdCBvYmplY3QgZnJvbSB0aGUgcHJvamVjdCdzIGxpc3QgYXJyYXlcbiAgICBjb25zdCBsaXN0ID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KGxpc3RJZCwgcHJvai5saXN0QXJyYXkpO1xuICAgIC8vIEdldCB0aGUgdG9kbyBvYmplY3QgZnJvbSB0aGUgbGlzdCdzIHRvZG8gYXJyYXlcbiAgICBjb25zdCB0b2RvID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KHRvZG9JZCwgbGlzdC50b2RvQXJyYXkpO1xuXG4gICAgaWYgKHRvZG9OYW1lSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIC8vIENoYW5nZSB0aGUgbmFtZSBvZiB0b2RvIG9iamVjdFxuICAgICAgdG9kby5uYW1lID0gdG9kb05hbWVJbnB1dC52YWx1ZTtcbiAgICAgIC8vIENoYW5nZSB0aGUgcHJpb3JpdHkgb2YgdG9kbyBvYmplY3RcbiAgICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcbiAgICAgIC8vIENoYW5nZSB0aGUgaW5mbyBvZiB0aGUgdG9kbyBvYmplY3RcbiAgICAgIHRvZG8uaW5mbyA9IGluZm9UZXh0QXJlYTtcblxuICAgICAgLy8gVXBkYXRlIHByb2plY3Qgdmlld1xuICAgICAgdXBkYXRlUHJvalZpZXcocHJvai5saXN0QXJyYXkpO1xuXG4gICAgICAvLyBSZW1vdmUgZm9ybSBiYWNrZ3JvdW5kIGVsZW1lbnQgZnJvbSBET01cbiAgICAgIGZvcm1CYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaHJvdyBlcnJvciBhbmQgY2FuY2VsIHN1Ym1pc3Npb24gb2YgZm9ybVxuICAgICAgYWxlcnQoXCJubyBuYW1lXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRkIGZvcm0gY29udGFpbmVyIHRvIGRvY3VtZW50XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1CYWNrZ3JvdW5kKTtcbn1cblxuLy8gTGlzdCBlZGl0IGZvcm1cbmZ1bmN0aW9uIGdlbmVyYXRlTGlzdEZvcm0oKSB7fVxuXG4vLyBQcm9qZWN0IGVkaXQgZm9ybVxuXG5leHBvcnQgeyBnZW5lcmF0ZVRvZG9Gb3JtLCBnZW5lcmF0ZUxpc3RGb3JtIH07XG4iLCIvLyBHZXQgb2JqZWN0IGZyb20gYXJyYXlcbmZ1bmN0aW9uIHJldHVybk9iamVjdEZyb21BcnJheShpZCwgYXJyYXkpIHtcbiAgLy8gRmlsdGVyIHRocm91Z2ggYXJyYXkgb2YgbGlzdHMgdG8gZmluZCBtYXRjaGluZyBsaXN0IG9iamVjdFxuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gYXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBpZCk7XG4gIC8vIENoZWNrIGZvciB1bmlxdWVuZXNzXG4gIGlmIChmaWx0ZXJlZEFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICAvLyBJZiBtb3JlIHRoYW4gb25lIGxpc3Qgb2JqZWN0IGZvdW5kIHRocm93IGVycm9yXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7XG4gICAgdGhyb3cgRXJyb3IoXCJFUlJPUiEgTW9yZSB0aGFuIG9uZSByZWxhdGl2ZSBmb3VuZC5cIik7IC8vIEVycm9yIGlmIG1vcmUgdGhhdCBvbmUgcmVsYXRpdmUgb2JqZWN0IGZvdW5kXG4gIH0gZWxzZSBpZiAoZmlsdGVyZWRBcnJheS5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJFUlJPUiEgTm8gcmVsYXRpdmUgZm91bmQuXCIpOyAvLyBFcnJvciBpZiBubyByZWxhdGl2ZSBvYmplY3QgZm91bmRcbiAgfSBlbHNlIHtcbiAgICAvLyBEZXN0cnVjdHVyZSBhcnJheSBvZiBvYmplY3RzXG4gICAgY29uc3QgW3JlbGF0aXZlXSA9IGZpbHRlcmVkQXJyYXk7XG4gICAgLy8gUmV0dXJuIGxpc3Qgb2JqZWN0XG4gICAgcmV0dXJuIHJlbGF0aXZlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldHVybk9iamVjdEZyb21BcnJheTtcbiIsImltcG9ydCB7IHRvZG9Qcm90bywgY3JlYXRvciwgcmVtb3ZlciB9IGZyb20gXCIuL3RvZG9Qcm90b1wiO1xuaW1wb3J0IHRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IHByb2plY3QgPSAoXG4gIG5hbWUsXG4gIGlkLFxuICBpbmZvLFxuICB0eXBlID0gXCJwcm9qXCIsXG4gIGFycmF5TmFtZSA9IFwibGlzdEFycmF5XCIsXG4gIG9iaiA9IHRvZG9MaXN0XG4pID0+IHtcbiAgY29uc3QgbGlzdEFycmF5ID0gW107XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIC4uLnRvZG9Qcm90byhuYW1lLCBpZCwgaW5mbywgdHlwZSksXG4gICAgbGlzdEFycmF5LFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmNyZWF0b3Ioc3RhdGUsIGFycmF5TmFtZSwgb2JqLCB0eXBlKSxcbiAgICAuLi5yZW1vdmVyKHN0YXRlLCBhcnJheU5hbWUpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsIi8qIFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbkZhY3RvcnkgZnVuY3Rpb24gdG8gcmV0dXJuIGEgdG9kb0l0ZW0gb2JqZWN0XG5PQUwgMTUtMDItMjAyM1xuVmVyc2lvbiAwLjEgZ2VuZXNpc1xuXG5UaGlzIGZ1bmN0aW9uIGNhbGxlZCBieSBwcm9qZWN0IG9yIHRvZG9MaXN0IGNvZGUgdG8gY3JlYXRlIGFuZCByZXR1cm4gYSB0b2RvSXRlbVxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXG4qL1xuXG5pbXBvcnQgeyB0b2RvUHJvdG8gfSBmcm9tIFwiLi90b2RvUHJvdG9cIjtcblxuY29uc3QgdG9kb0l0ZW0gPSAoXG4gIG5hbWUsXG4gIGlkLFxuICBpbmZvLFxuICB0eXBlID0gXCJ0b2RvXCIsXG4gIGR1ZURhdGUgPSBudWxsLFxuICBwcmlvcml0eSA9IFwibm9uZVwiLFxuICBjaGVja2xpc3QgPSBbXSxcbiAgc3RhdHVzID0gXCJwZW5kaW5nXCJcbikgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICAuLi50b2RvUHJvdG8obmFtZSwgaWQsIGluZm8sIHR5cGUpLFxuICAgIGNyZWF0aW9uRGF0ZTogbmV3IERhdGUoKSxcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrbGlzdCxcbiAgICBzdGF0dXMsXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvSXRlbTtcbiIsIi8qIFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbkZhY3RvcnkgZnVuY3Rpb24gdG8gcmV0dXJuIGEgdG9kb0xpc3Qgb2JqZWN0XG5PQUwgMTUtMDItMjAyM1xuVmVyc2lvbiAwLjEgZ2VuZXNpc1xuXG5UaGlzIGZ1bmN0aW9uIGNhbGxlZCBieSBwcm9qZWN0IGNvZGUgdG8gY3JlYXRlIGFuZCByZXR1cm4gYSB0b2RvTGlzdC5cblRoZSByZXR1cm5lZCBvYmplY3QgaW5jbHVkZXMgYW4gYXJyYXkgb2YgdG9kb0l0ZW1zLCBuYW1lLCBpbmZvIGFuZFxuZnVuY3Rpb25zIGZvciBhZGRpbmcgYW5kIHJlbW92aW5nIHRvZG9JdGVtcyBmcm9tIGFycmF5LlxuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXG4qL1xuXG5pbXBvcnQgeyB0b2RvUHJvdG8sIGNyZWF0b3IsIHJlbW92ZXIgfSBmcm9tIFwiLi90b2RvUHJvdG9cIjtcbmltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi90b2RvSXRlbVwiO1xuXG5jb25zdCB0b2RvTGlzdCA9IChcbiAgbmFtZSxcbiAgaWQsXG4gIGluZm8sXG4gIHR5cGUgPSBcImxpc3RcIixcbiAgYXJyYXlOYW1lID0gXCJ0b2RvQXJyYXlcIixcbiAgb2JqID0gdG9kb0l0ZW1cbikgPT4ge1xuICBjb25zdCB0b2RvQXJyYXkgPSBbXTtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgLi4udG9kb1Byb3RvKG5hbWUsIGlkLCBpbmZvLCB0eXBlKSxcbiAgICB0b2RvQXJyYXksXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uY3JlYXRvcihzdGF0ZSwgYXJyYXlOYW1lLCBvYmosIHR5cGUpLFxuICAgIC4uLnJlbW92ZXIoc3RhdGUsIGFycmF5TmFtZSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvTGlzdDtcbiIsImltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuXG5mdW5jdGlvbiBnZXRVbmlxdWVJRChpZFByZWZpeCkge1xuICByZXR1cm4gdW5pcWlkKGlkUHJlZml4KTtcbn1cblxuY29uc3QgY3JlYXRvciA9IChzdGF0ZSwgYXJyYXlOYW1lLCBvYmplY3QsIHR5cGUpID0+ICh7XG4gIGNyZWF0ZTogKGlkUHJlZml4KSA9PiB7XG4gICAgLy8gR2V0IHRoZSB0eXBlIG9mIGNoaWxkIHRvIGFkZFxuICAgIGxldCBjaGlsZFR5cGU7XG4gICAgaWYgKHR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgICBjaGlsZFR5cGUgPSBcInRvZG9cIjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicHJvalwiKSB7XG4gICAgICBjaGlsZFR5cGUgPSBcImxpc3RcIjtcbiAgICB9XG4gICAgY29uc3QgaWQgPSBnZXRVbmlxdWVJRChpZFByZWZpeCk7XG4gICAgY29uc3Qgb2JqTmFtZSA9IGBOZXcgJHtjaGlsZFR5cGV9YDtcbiAgICBjb25zdCBpbmZvID0gbnVsbDtcbiAgICAvLyBBZGQgYSBjaGlsZCBvYmplY3QgdG8gdGhlIGFycmF5XG4gICAgc3RhdGVbYCR7YXJyYXlOYW1lfWBdLnB1c2gob2JqZWN0KG9iak5hbWUsIGlkLCBpbmZvLCBjaGlsZFR5cGUpKTtcbiAgfSxcbn0pO1xuXG5jb25zdCByZW1vdmVyID0gKHN0YXRlLCBhcnJheU5hbWUpID0+ICh7XG4gIGRlbGV0ZUl0ZW06IChpZCkgPT5cbiAgICBzdGF0ZVtgJHthcnJheU5hbWV9YF0uZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmlkICE9PSBpZCksXG59KTtcblxuY29uc3QgdG9kb1Byb3RvID0gKG5hbWUsIGlkLCBpbmZvLCB0eXBlKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIG5hbWUsXG4gICAgaWQsXG4gICAgaW5mbyxcbiAgICB0eXBlLFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgdG9kb1Byb3RvLCBjcmVhdG9yLCByZW1vdmVyLCBnZXRVbmlxdWVJRCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRVbmlxdWVJRCB9IGZyb20gXCIuL3RvZG9Qcm90b1wiO1xuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgc2V0VXBET00sXG4gIHVwZGF0ZVByb2pWaWV3LFxuICBkaXNwbGF5UHJvamVjdCxcbiAgdXBkYXRlU2lkZWJhckxpc3QsXG4gIGRpc3BsYXlFbXB0eVByb2pBcnJheSxcbn0gZnJvbSBcIi4vZG9tTWFuYWdlclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2RvRm9ybSB9IGZyb20gXCIuL2Zvcm1NYW5hZ2VyXCI7XG5pbXBvcnQgcmV0dXJuT2JqZWN0RnJvbUFycmF5IGZyb20gXCIuL29iamVjdExvZ2ljXCI7XG5cbmNvbnN0IHByb2pBcnJheSA9IFtdO1xuXG4vKiBSRUZBQ1RPUiBUTyBNT0RVTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgVE9ETy9MSVNUIExPR0lDXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLypcbl9fX0NSRUFURSBQUk9KL0xJU1RfX19cbiovXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgbmV3IHByb2plY3RcbmNvbnN0IGNyZWF0ZVByb2ogPSAobmFtZSA9IFwiTmV3IFByb2plY3RcIiwgaW5mbyA9IHVuZGVmaW5lZCkgPT4ge1xuICAvLyBHZXQgYSB1bmlxdWUgSUQgZm9yIHRoZSBwcm9qZWN0XG4gIGNvbnN0IGlkID0gZ2V0VW5pcXVlSUQoXCJwcm9qLVwiKTtcbiAgLy8gQ3JlYXRlIGEgbmV3IHByb2plY3Qgb2JqZWN0XG4gIGNvbnN0IG5ld1Byb2ogPSBwcm9qZWN0KG5hbWUsIGlkLCBpbmZvKTtcbiAgLy8gUHVzaCB0aGUgbmV3IHByb2plY3Qgb2JqZWN0IHRvIHRoZSBwcm9qZWN0IGFycmF5XG4gIHByb2pBcnJheS5wdXNoKG5ld1Byb2opO1xuXG4gIC8vIFJldHVybiB0aGUgcHJvamVjdCBvYmplY3RcbiAgcmV0dXJuIG5ld1Byb2o7XG59O1xuXG4vKlxuICBfX19FVkVOVCBIQU5ETEVSU19fXyAoZm9yIGV2ZW50IGxpc3RlbmVycylcbiovXG5cbi8qIEFERCBFVkVOVFMgKi9cblxuLy8gSGFuZGxlIHRvZG8gYWRkIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVUb2RvQWRkKGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWRcbiAgY29uc3QgcHJvaklkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gIC8vIEdldCBsaXN0IGlkXG4gIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBsaXN0IG9iamVjdFxuICBjb25zdCBsaXN0ID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KGxpc3RJZCwgcHJvai5saXN0QXJyYXkpO1xuICAvLyBDcmVhdGUgYSB0b2RvIGl0ZW1cbiAgbGlzdC5jcmVhdGUoXCJ0b2RvLVwiKTtcbiAgLy8gVXBkYXRlIHZpZXcgb2YgbGlzdHMgaW4gYXJyYXkgaW4gRE9NXG4gIHVwZGF0ZVByb2pWaWV3KHByb2oubGlzdEFycmF5KTtcbn1cblxuLy8gSGFuZGxlIGxpc3QgYWRkIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVMaXN0QWRkKGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWRcbiAgY29uc3QgcHJvaklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gIC8vIENyZWF0ZSBhIGxpc3QgaW4gdGhlIHByb2plY3RcbiAgcHJvai5jcmVhdGUoXCJsaXN0LVwiKTtcbiAgLy8gR2V0IG5ldyBsaXN0IG9iamVjdFxuICBjb25zdCBsaXN0ID0gcHJvai5saXN0QXJyYXlbcHJvai5saXN0QXJyYXkubGVuZ3RoIC0gMV07XG4gIC8vIEdldCBJRCBvZiBuZXcgbGlzdFxuICBjb25zdCBsaXN0SWQgPSBsaXN0LmlkO1xuICAvLyBVcGRhdGUgdmlldyBvZiBwcm9qZWN0IGluIGFycmF5IGluIERPTVxuICB1cGRhdGVQcm9qVmlldyhwcm9qLmxpc3RBcnJheSk7XG59XG5cbi8vIEhhbmRsZSBwcm9qZWN0IGFkZCBldmVudFxuZnVuY3Rpb24gaGFuZGxlUHJvakFkZChlKSB7XG4gIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0XG4gIGNvbnN0IG5ld1Byb2ogPSBjcmVhdGVQcm9qKCk7XG5cbiAgLy8gVXBkYXRlIHNpZGViYXJcbiAgdXBkYXRlU2lkZWJhckxpc3QocHJvakFycmF5KTtcblxuICAvLyBEaXNwbGF5IG5ldyBwcm9qZWN0XG4gIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2opO1xufVxuXG4vKiBERUxFVEUgRVZFTlRTICovXG5cbi8vIEhhbmRsZSB0b2RvIGRlbGV0ZSBldmVudFxuZnVuY3Rpb24gaGFuZGxlVG9kb0RlbChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkXG4gIGNvbnN0IHByb2pJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBwcm9qZWN0IG9iamVjdCBmcm9tIGFycmF5XG4gIGNvbnN0IHByb2ogPSByZXR1cm5PYmplY3RGcm9tQXJyYXkocHJvaklkLCBwcm9qQXJyYXkpO1xuICAvLyBHZXQgdG9kbyBJRFxuICBjb25zdCB0b2RvSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgLy8gR2V0IGxpc3QgSURcbiAgY29uc3QgbGlzdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5saXN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gRmlsdGVyIHRocm91Z2ggYXJyYXkgb2YgbGlzdHMgdG8gZmluZCBtYXRjaGluZyBsaXN0IG9iamVjdFxuICBjb25zdCBsaXN0ID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KGxpc3RJZCwgcHJvai5saXN0QXJyYXkpO1xuICAvLyBSZW1vdmUgdGhlIGZpcnN0IDQgY2hhcmFjdGVycyBmcm9tIHRhcmdldElkIHN0cmluZyAoRmlyc3QgNCBjaGFyYWN0ZXJzOiBcImRlbC1cIilcbiAgY29uc3QgdG9kb09iaklkID0gdG9kb0lkLnN1YnN0cmluZyg0KTtcbiAgLy8gRmluZCBpbmRleCBvZiBvYmplY3QgaW4gYXJyYXlcbiAgY29uc3QgYXJyYXlJbmRleCA9IGxpc3QudG9kb0FycmF5LmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gdG9kb09iaklkXG4gICk7XG4gIC8vIFJlbW92ZSB0aGUgdG9kbyBvYmplY3QgZnJvbSBhcnJheSBpbiBwYXJlbnQgbGlzdCBvYmplY3RcbiAgbGlzdC50b2RvQXJyYXkuc3BsaWNlKGFycmF5SW5kZXgsIDEpO1xuICAvLyBVcGRhdGUgcHJvamVjdCB2aWV3IGluIERPTVxuICB1cGRhdGVQcm9qVmlldyhwcm9qLmxpc3RBcnJheSk7XG59XG5cbi8vIEhhbmRsZSBsaXN0IGRlbGV0ZSBldmVudFxuZnVuY3Rpb24gaGFuZGxlTGlzdERlbChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkXG4gIGNvbnN0IHByb2pJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBwcm9qZWN0IG9iamVjdCBmcm9tIGFycmF5XG4gIGNvbnN0IHByb2ogPSByZXR1cm5PYmplY3RGcm9tQXJyYXkocHJvaklkLCBwcm9qQXJyYXkpO1xuICAvLyBHZXQgbGlzdCBJRFxuICBjb25zdCBsaXN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmxpc3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBGaWx0ZXIgdGhyb3VnaCBhcnJheSBvZiBsaXN0cyB0byBmaW5kIG1hdGNoaW5nIGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGFycmF5SW5kZXggPSBwcm9qLmxpc3RBcnJheS5maW5kSW5kZXgoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IGxpc3RJZFxuICApO1xuICAvLyBSZW1vdmUgdGhlIGxpc3Qgb2JqZWN0IGZyb20gYXJyYXkgaW4gcGFyZW50IHByb2plY3Qgb2JqZWN0XG4gIHByb2oubGlzdEFycmF5LnNwbGljZShhcnJheUluZGV4LCAxKTtcbiAgLy8gVXBkYXRlIHByb2ogdmlldyBpbiBET01cbiAgdXBkYXRlUHJvalZpZXcocHJvai5saXN0QXJyYXkpO1xufVxuXG4vLyBIYW5kbGUgcHJvamVjdCBkZWxldGlvbiBldmVudFxuZnVuY3Rpb24gaGFuZGxlUHJvakRlbChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkIGZyb20gcHJvamVjdCBjb250YWluZXJcbiAgY29uc3QgcHJvaklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgYXJyYXlJbmRleCA9IHByb2pBcnJheS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHByb2pJZCk7XG4gIC8vIFJlbW92ZSB0aGUgbGlzdCBvYmplY3QgZnJvbSBhcnJheSBpbiBwYXJlbnQgcHJvamVjdCBvYmplY3RcbiAgcHJvakFycmF5LnNwbGljZShhcnJheUluZGV4LCAxKTtcbiAgLy8gRGlzcGxheSBwcmV2aW91cyBwcm9qZWN0XG4gIGlmIChwcm9qQXJyYXkubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlQcm9qZWN0KHByb2pBcnJheVthcnJheUluZGV4IC0gMV0pO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlFbXB0eVByb2pBcnJheSgpO1xuICB9XG4gIC8vIFVwZGF0ZSBzaWRlYmFyIGxpc3Qgb2YgcHJvamVjdHNcbiAgdXBkYXRlU2lkZWJhckxpc3QocHJvakFycmF5KTtcbn1cblxuLyogRURJVCBFVkVOVFMgKi9cblxuLy8gSGFuZGxlIHRvZG8gZWRpdCBldmVudFxuZnVuY3Rpb24gaGFuZGxlVG9kb0VkaXQoZSkge1xuICAvLyBHZXQgcHJvamVjdCBpZFxuICBjb25zdCBwcm9qSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBHZXQgcHJvamVjdCBvYmplY3QgZnJvbSBhcnJheVxuICBjb25zdCBsaXN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmxpc3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBHZXQgdGhlIGlkIG9mIHRoZSB0YXJnZXRlZCB0b2RvIERPTSBlbGVtZW50XG4gIGNvbnN0IHRvZG9JZCA9IGUudGFyZ2V0LmlkO1xuICAvLyBSZW1vdmUgdGhlIGZpcnN0IDQgY2hhcmFjdGVycyBmcm9tIHRhcmdldElkIHN0cmluZyAoRmlyc3QgNSBjaGFyYWN0ZXJzOiBcImVkaXQtXCIpXG4gIGNvbnN0IHRvZG9PYmpJZCA9IHRvZG9JZC5zdWJzdHJpbmcoNSk7XG5cbiAgZ2VuZXJhdGVUb2RvRm9ybShwcm9qSWQsIHByb2pBcnJheSwgbGlzdElkLCB0b2RvT2JqSWQpO1xufVxuXG4vLyBIYW5kbGUgbGlzdCBlZGl0IGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVMaXN0RWRpdChlKSB7XG4gIGNvbnNvbGUubG9nKFwiU1RJTEwgVE8gSU1QTEVNRU5UXCIpO1xuXG4gIC8vIEdldCBwcm9qZWN0IGlkXG4gIGNvbnN0IHByb2pJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEdldCBwcm9qZWN0IG9iamVjdCBmcm9tIGFycmF5XG4gIGNvbnN0IHByb2ogPSByZXR1cm5PYmplY3RGcm9tQXJyYXkocHJvaklkLCBwcm9qQXJyYXkpO1xufVxuXG4vLyBIYW5kbGUgcHJvamVjdCBlZGl0IGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVQcm9qRWRpdChlKSB7XG4gIGNvbnNvbGUubG9nKFwiU1RJTEwgVE8gSU1QTEVNRU5UXCIpO1xuXG4gIC8vIEdldCBwcm9qZWN0IGlkIGZyb20gcHJvamVjdCBjb250YWluZXJcbiAgY29uc3QgcHJvaklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgYXJyYXlJbmRleCA9IHByb2pBcnJheS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHByb2pJZCk7XG59XG5cbi8qXG4gIF9fX0VWRU5UIExJU1RFTkVSU19fX1xuKi9cbi8vIEdsb2JhbCBldmVudCBsaXN0ZW5lclxuZnVuY3Rpb24gYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcih0eXBlLCBzZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkgY2FsbGJhY2soZSk7XG4gIH0pO1xufVxuXG4vLyBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbmFsaXR5IGZvciBzaWRlYmFyIGFkZCBwcm9qZWN0IGJ1dHRvblxuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFwiLnNiLWFkZC1idXR0b25cIiwgKGUpID0+IHtcbiAgLy8gQ2FsbCBldmVudCBoYW5kbGVyIGZvciBhZGRpbmcgYSBwcm9qZWN0XG4gIGhhbmRsZVByb2pBZGQoZSk7XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25hbGl0eSBmb3IgYWRkIGljb25zXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXCIuYWRkLWljb25cIiwgKGUpID0+IHtcbiAgLy8gU2V0IHZhcmlhYmxlcyBmb3IgdGhlIERPTSBlbGVtZW50J3MgdHlwZSBhbmQgaWQgYXR0cmlidXRlc1xuICBjb25zdCB0YXJnZXRUeXBlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcblxuICAvLyBDaGVjayBpZiBlbGVtZW50IHR5cGUgaXMgYSBsaXN0XG4gIGlmICh0YXJnZXRUeXBlID09PSBcImxpc3RcIikge1xuICAgIGhhbmRsZVRvZG9BZGQoZSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0VHlwZSA9PT0gXCJwcm9qXCIpIHtcbiAgICBoYW5kbGVMaXN0QWRkKGUpO1xuICB9XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25hbGl0eSBmb3IgZWRpdCBpY29uc1xuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFwiLmVkaXQtaWNvblwiLCAoZSkgPT4ge1xuICAvLyBTZXQgdmFyaWFibGVzIGZvciB0aGUgRE9NIGVsZW1lbnQncyB0eXBlIGFuZCBpZCBhdHRyaWJ1dGVzXG4gIGNvbnN0IHRhcmdldFR5cGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgdHlwZSBpcyBhIGxpc3RcbiAgaWYgKHRhcmdldFR5cGUgPT09IFwidG9kb1wiKSB7XG4gICAgaGFuZGxlVG9kb0VkaXQoZSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0VHlwZSA9PT0gXCJsaXN0XCIpIHtcbiAgICBoYW5kbGVMaXN0RWRpdChlKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBcInByb2pcIikge1xuICAgIGhhbmRsZVByb2pFZGl0KGUpO1xuICB9XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25hbGl0eSBmb3IgZGVsZXRlIGljb25zXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXCIuZGVsLWljb25cIiwgKGUpID0+IHtcbiAgLy8gU2V0IHZhcmlhYmxlcyBmb3IgdGhlIERPTSBlbGVtZW50J3MgdHlwZSBhbmQgaWQgYXR0cmlidXRlc1xuICBjb25zdCB0YXJnZXRUeXBlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcblxuICAvLyBDaGVjayBpZiBlbGVtZW50IHR5cGUgaXMgYSBsaXN0XG4gIGlmICh0YXJnZXRUeXBlID09PSBcInRvZG9cIikge1xuICAgIGhhbmRsZVRvZG9EZWwoZSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0VHlwZSA9PT0gXCJsaXN0XCIpIHtcbiAgICBoYW5kbGVMaXN0RGVsKGUpO1xuICB9IGVsc2UgaWYgKHRhcmdldFR5cGUgPT09IFwicHJvalwiKSB7XG4gICAgaGFuZGxlUHJvakRlbChlKTtcbiAgfVxufSk7XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIElOSVRJQUxJWkVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbi8vIENyZWF0ZSBhIGJsYW5rIHByb2plY3RcbmZ1bmN0aW9uIGNyZWF0ZUV4YW1wbGVQcm9qKCkge1xuICAvLyBDcmVhdGUgdGhlIHByb2plY3RcbiAgY29uc3QgbXlQcm9qID0gY3JlYXRlUHJvaihcIk15IGZpcnN0IHByb2plY3RcIiwgXCJUaGlzIGlzIG15IGZpcnN0IHByb2plY3RcIik7XG5cbiAgLy8gQ3JlYXRlIGEgbGlzdCBpbiB0aGUgcHJvamVjdFxuICBteVByb2ouY3JlYXRlKFwibGlzdC1cIik7XG5cbiAgLy8gQ3JlYXRlIGEgc2V0IG9mIHRvZG8gaXRlbXMgaW4gdGhlIG5ldyBsaXN0XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgbXlQcm9qLmxpc3RBcnJheVswXS5jcmVhdGUoXCJ0b2RvLVwiKTtcbiAgfVxufVxuXG4vLyBDYWxsIHRoZSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBibGFuayBwcm9qZWN0XG5jcmVhdGVFeGFtcGxlUHJvaigpO1xuXG4vLyBTZXQgdXAgdGhlIERPTVxuc2V0VXBET00ocHJvakFycmF5KTtcblxuLy8gRGlzcGxheSB0aGUgZGVmYXVsdCBwcm9qZWN0XG5mdW5jdGlvbiBkaXNwbGF5RGVmYXVsdFByb2plY3QoaW5kZXggPSAwKSB7XG4gIGRpc3BsYXlQcm9qZWN0KHByb2pBcnJheVtpbmRleF0pO1xufVxuXG4vLyBDYWxsIGZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIHRoZSBkZWZhdWx0IHByb2plY3RcbmRpc3BsYXlEZWZhdWx0UHJvamVjdCgpO1xuXG4vLyBHZXQgY3VycmVudCBwcm9qZWN0IGlkIG9mIERPTSBwcm9qZWN0IGNvbnRhaW5lciBlbGVtZW50XG5jb25zdCBjdXJQcm9qSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpLmlkO1xuXG4vLyBHZXQgb2JqZWN0IG9mIGN1cnJlbnQgcHJvamVjdCBmcm9tIG1haW4gcHJvamVjdCBhcnJheVxuY29uc3QgY3VyUHJvak9iaiA9IHJldHVybk9iamVjdEZyb21BcnJheShjdXJQcm9qSWQsIHByb2pBcnJheSk7XG5cbi8vIEdldCBpZCBvZiBmaXJzdCBsaXN0IGZyb20gY3VycmVudCBwcm9qZWN0IG9iamVjdFxuY29uc3QgY3VyTGlzdE9iaiA9IGN1clByb2pPYmoubGlzdEFycmF5WzBdO1xuY29uc3QgY3VyTGlzdElkID0gY3VyTGlzdE9iai5pZDtcbi8vIEdldCBpZCBvZiBmaXJzdCB0b2RvIGl0ZW0gaW4gdGhlIGxpc3Qgb2JqZWN0J3MgdG9kbyBhcnJheVxuY29uc3QgY3VyVG9kb0lkID0gY3VyTGlzdE9iai50b2RvQXJyYXlbMF0uaWQ7XG5cbi8vIENhbGwgZ2VuZXJhdGVUb2RvRm9ybSBmb3IgdGVzdGluZ1xuLy8gZ2VuZXJhdGVUb2RvRm9ybShjdXJQcm9qSWQsIHByb2pBcnJheSwgY3VyTGlzdElkLCBjdXJUb2RvSWQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9