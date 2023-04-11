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

  // Add container for submit button
  const submitDiv = document.createElement("div");
  submitDiv.classList.add("form-button-div");
  // Add input element of type submit
  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  // Add submit button to the submit div
  submitDiv.appendChild(submitBtn);
  // Add submit container to form container
  formContainer.appendChild(submitDiv);

  // Add event listener to submit button
  submitBtn.addEventListener("click", () => {
    // Get the project object from the project array
    const proj = (0,_objectLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(projId, projArray);
    console.log(projId);

    console.log(infoTextArea.value);
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
  ___OBJECT LOGIC___
*/
// // Get object from array
// function returnObjectFromArray(id, array) {
//   // Filter through array of lists to find matching list object
//   const filteredArray = array.filter((element) => element.id === id);
//   // Check for uniqueness
//   if (filteredArray.length > 1) {
//     // If more than one list object found throw error
//     console.log(filteredArray);
//     throw Error("ERROR! More than one relative found."); // Error if more that one relative object found
//   } else if (filteredArray.length < 1) {
//     throw Error("ERROR! No relative found."); // Error if no relative object found
//   } else {
//     // Destructure array of objects
//     const [relative] = filteredArray;
//     // Return list object
//     return relative;
//   }
// }

/*
  ___EVENT HANDLERS___ (for event listeners)
*/
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

// Handle project add event
function handleProjAdd(e) {
  // Create a new project
  const newProj = createProj();

  // Update sidebar
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.updateSidebarList)(projArray);

  // Display new project
  (0,_domManager__WEBPACK_IMPORTED_MODULE_3__.displayProject)(newProj);
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
  console.log(`Edit target:`);
  console.log(e.target);
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

// Call generateTodoForm for testing
(0,_formManager__WEBPACK_IMPORTED_MODULE_4__.generateTodoForm)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBYztBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsOERBQWlCOztBQUVuQjtBQUNBLEVBQUUsMkRBQWM7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFjO0FBQ2xCLElBQUk7QUFDSixJQUFJLGtFQUFxQjtBQUN6QjtBQUNBO0FBQ0EsRUFBRSw4REFBaUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscURBQVE7O0FBRVI7QUFDQTtBQUNBLEVBQUUsMkRBQWM7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdW5pcWlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb2JqZWN0TG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb1Byb3RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZmYW1pbHk9U291cmNlK0NvZGUrUHJvOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWluLXdpZHRoOiAxMzEwcHg7XFxuICAtLWJnLXNpZGUtaGVhZGVyOiAjM2UzZTNlO1xcbiAgLS1iZy1jb2xvcjogIzg4ODg4ODtcXG4gIC0tYmctbGlzdDogIzNlM2UzZTtcXG4gIC0tdGl0bGUtaWNvbi13aWR0aDogMS41cmVtO1xcbiAgLS1oZWFkZXItaWNvbi13aWR0aDogMi4ycmVtO1xcbiAgLS1saXN0LXdpZHRoOiAzNTBweDtcXG4gIC0tbGlzdC1wYWRkaW5nOiAyMHB4O1xcbiAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gIC0tcmVnLWZvbnQ6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICAtLWZvbnQtY29sOiB3aGl0ZXNtb2tlO1xcbiAgLS10aXRsZS1mb250OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xcblxcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMC4yNWZyKSAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLSBTSURFQkFSIFZJRVcgLS0tLS0tLS0tLS0tICovXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zYi1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2ItYWRkLWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sKTtcXG4gIHBhZGRpbmc6IDEuNGVtIDIuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLnNiLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2wpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0gUFJPSkVDVCBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5wcm9qZWN0LXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwcHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgd2lkdGg6IHZhcigtLWhlYWRlci1pY29uLXdpZHRoKTtcXG59XFxuXFxuLmhlYWRlci1pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgdmFyKC0taGVhZGVyLWljb24td2lkdGgpKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChyZXBlYXQoMiwgdmFyKC0tbGlzdC13aWR0aCkpLCByZXBlYXQoNCwgKC0tbGlzdC13aWR0aCkpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIHZhcigtLWxpc3Qtd2lkdGgpKTtcXG4gIHBhZGRpbmc6IHZhcigtLWxpc3QtcGFkZGluZyk7XFxufVxcblxcbiNlbXB0eSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICAvKiB3aWR0aDogdmFyKC0tbGlzdC13aWR0aCk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saXN0KTtcXG4gIHBhZGRpbmc6IDI1cHggMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiB2YXIoLS10aXRsZS1pY29uLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tdGl0bGUtaWNvbi13aWR0aCk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG59XFxuXFxuLnRvZG8ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbi50b2RvIC5pY29uLWNvbnRhaW5lciB7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kbyBpbWcge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tdGl0bGUtaWNvbi13aWR0aCkgKiAwLjgpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpdGxlLWljb24td2lkdGgpICogMC44KTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDU0JSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmZvcm0tYmFja2dyb3VuZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qIHRvcDogNTAlOyAqL1xcbiAgLyogbGVmdDogNTAlOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjM2UzZTNlNmU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzZTNlO1xcbiAgcGFkZGluZzogNTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsdUNBQXVDOztFQUV2Qyx5Q0FBeUM7RUFDekMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFlBQVk7QUFDZDs7O0FBR0EsMkNBQTJDO0FBQzNDO0VBQ0UsaUNBQWlDO0VBQ2pDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsdUNBQXVDO0FBQ3pDOztBQUVBLDJDQUEyQztBQUMzQztFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0dBQWdHO0VBQ2hHLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEZBQTRGO0VBQzVGLG1EQUFtRDtFQUNuRCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVzs7O0VBR1gsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsU0FBUztBQUNYOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixnR0FBZ0c7QUFDbEc7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDJDQUEyQztFQUMzQyxnR0FBZ0c7QUFDbEc7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZmFtaWx5PVNvdXJjZStDb2RlK1Bybzp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLW1pbi13aWR0aDogMTMxMHB4O1xcbiAgLS1iZy1zaWRlLWhlYWRlcjogIzNlM2UzZTtcXG4gIC0tYmctY29sb3I6ICM4ODg4ODg7XFxuICAtLWJnLWxpc3Q6ICMzZTNlM2U7XFxuICAtLXRpdGxlLWljb24td2lkdGg6IDEuNXJlbTtcXG4gIC0taGVhZGVyLWljb24td2lkdGg6IDIuMnJlbTtcXG4gIC0tbGlzdC13aWR0aDogMzUwcHg7XFxuICAtLWxpc3QtcGFkZGluZzogMjBweDtcXG4gIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAtLXJlZy1mb250OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xcbiAgLS1mb250LWNvbDogd2hpdGVzbW9rZTtcXG4gIC0tdGl0bGUtZm9udDogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzAwcHgsIDAuMjVmcikgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0gU0lERUJBUiBWSUVXIC0tLS0tLS0tLS0tLSAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhci10aXRsZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUtZm9udCk7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2ItYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNiLWFkZC1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zaWRlLWhlYWRlcik7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1mb250LWNvbCk7XFxuICBwYWRkaW5nOiAxLjRlbSAyLjRlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5zYi1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJnLXNpZGUtaGVhZGVyKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tIFBST0pFQ1QgVklFVyAtLS0tLS0tLS0tLS0gKi9cXG4ucHJvamVjdC12aWV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwMHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2lkZS1oZWFkZXIpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIgaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDU0JSkgaHVlLXJvdGF0ZSg5NGRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDUlKTtcXG4gIHdpZHRoOiB2YXIoLS1oZWFkZXItaWNvbi13aWR0aCk7XFxufVxcblxcbi5oZWFkZXItaWNvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIHZhcigtLWhlYWRlci1pY29uLXdpZHRoKSk7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgocmVwZWF0KDIsIHZhcigtLWxpc3Qtd2lkdGgpKSwgcmVwZWF0KDQsICgtLWxpc3Qtd2lkdGgpKSk7ICovXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCB2YXIoLS1saXN0LXdpZHRoKSk7XFxuICBwYWRkaW5nOiB2YXIoLS1saXN0LXBhZGRpbmcpO1xcbn1cXG5cXG4jZW1wdHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlLWZvbnQpO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogd2lkdGg6IHZhcigtLWxpc3Qtd2lkdGgpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlzdCk7XFxuICBwYWRkaW5nOiAyNXB4IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgXFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcblxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLmljb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogdmFyKC0tdGl0bGUtaWNvbi13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLXRpdGxlLWljb24td2lkdGgpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDk0ZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxufVxcblxcbi50b2RvIHtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi50b2RvLW5hbWUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4udG9kbyAuaWNvbi1jb250YWluZXIge1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRvZG8gaW1nIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLXRpdGxlLWljb24td2lkdGgpICogMC44KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS10aXRsZS1pY29uLXdpZHRoKSAqIDAuOCk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoOTRkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi5mb3JtLWJhY2tncm91bmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvKiB0b3A6IDUwJTsgKi9cXG4gIC8qIGxlZnQ6IDUwJTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzNlM2UzZTZlO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlM2UzZTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDIxIEhhbMOhc3ogw4Fkw6FtIDxhZGFtQGFpbWZvcm0uY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciBtYWMgPSAnJywgb3MgPSByZXF1aXJlKCdvcycpOyBcbiAgICBpZihvcy5uZXR3b3JrSW50ZXJmYWNlcykgdmFyIG5ldHdvcmtJbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBpZihuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGxvb3A6XG4gICAgICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXSAhPT0gdW5kZWZpbmVkICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWsgbG9vcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG4gICAgfVxufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiaW1wb3J0IHBsdXNJY29uIGZyb20gXCIuL2ltYWdlcy9wbHVzLWJveC1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IHRyYXNoQ2FuSWNvbiBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgZmlsZUVkaXRJY29uIGZyb20gXCIuL2ltYWdlcy9maWxlLWVkaXQtb3V0bGluZS5zdmdcIjtcblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkRPTSBTRVRVUFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmNvbnN0IHNpZGViYXJUaXRsZUVsZW1lbnQgPSBcImgyXCI7XG5jb25zdCBoZWFkZXJUaXRsZUVsZW1lbnQgPSBcImgyXCI7XG5jb25zdCBsaXN0VGl0bGVFbGVtZW50ID0gXCJoM1wiO1xuY29uc3QgdG9kb05hbWVFbGVtZW50ID0gXCJoNVwiO1xuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYWxsIGxpc3RzIGZyb20gcHJvamVjdCB2aWV3IGluIERPTVxuZnVuY3Rpb24gZW1wdHlTaWRlYmFyTGlzdChzaWRlYmFyUHJvakxpc3QpIHtcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBvZiBwcm9qZWN0IG5vZGVcbiAgd2hpbGUgKHNpZGViYXJQcm9qTGlzdC5maXJzdENoaWxkKSB7XG4gICAgc2lkZWJhclByb2pMaXN0LnJlbW92ZUNoaWxkKHNpZGViYXJQcm9qTGlzdC5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNpZGViYXJMaXN0KHByb2pBcnJheSkge1xuICAvLyBHZXQgY29udGFpbmVyIGZvciBwcm9qZWN0cyBpbiBzaWRlYmFyXG4gIGNvbnN0IHNpZGViYXJQcm9qTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtc2lkZWJhclwiKTtcblxuICAvLyBFbXB0eSBzaWRlYmFyIGxpc3RcbiAgZW1wdHlTaWRlYmFyTGlzdChzaWRlYmFyUHJvakxpc3QpO1xuXG4gIC8vIEZvciBlYWNoIHByb2plY3QgaW4gYXJyYXksIGFkZCBuYW1lIG9mIHByb2plY3QgdG8gc2lkZWJhciBwcm9qIGxpc3QgZGl2XG4gIHByb2pBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvakl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGxpc3RUaXRsZUVsZW1lbnQpO1xuICAgIHByb2pJdGVtLmNsYXNzTGlzdC5hZGQoXCJzYi1wcm9qLWl0ZW1cIik7XG4gICAgcHJvakl0ZW0udGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgc2lkZWJhclByb2pMaXN0LmFwcGVuZENoaWxkKHByb2pJdGVtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFVwSGVhZGVyKHByb2plY3RIZWFkZXIpIHtcbiAgLy8gQWRkIGNvbnRhaW5lciBmb3IgdGl0bGVcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRpdGxlXCIpO1xuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgLy8gQWRkIHRpdGxlIHRvIHByb2plY3QgaGVhZGVyXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoZWFkZXJUaXRsZUVsZW1lbnQpO1xuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgLy8gaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlci10aXRsZVwiKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICAvLyBBZGQgaWNvbiBjb250YWluZXIgdG8gaGVhZGVyXG4gIGNvbnN0IGhlYWRlckljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItaWNvbi1jb250YWluZXJcIik7XG4gIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySWNvbkNvbnRhaW5lcik7XG4gIC8vIEFkZCBpY29ucyB0byBjb250YWluZXJcbiAgY29uc3QgaGVhZGVyQWRkSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBoZWFkZXJBZGRJY29uLnNyYyA9IHBsdXNJY29uO1xuICBoZWFkZXJBZGRJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGQtaWNvblwiKTtcbiAgLy8gaGVhZGVyQWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJwcm9qSWRcIiwgXCJwcm9qMVwiKTtcbiAgaGVhZGVyQWRkSWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicHJvalwiKTtcbiAgaGVhZGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJBZGRJY29uKTtcbiAgY29uc3QgaGVhZGVyRWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaGVhZGVyRWRpdEljb24uc3JjID0gZmlsZUVkaXRJY29uO1xuICBoZWFkZXJFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1pY29uXCIpO1xuICAvLyBoZWFkZXJFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJwcm9qSWRcIiwgXCJwcm9qXCIpO1xuICBoZWFkZXJFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicHJvalwiKTtcbiAgaGVhZGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJFZGl0SWNvbik7XG4gIGNvbnN0IGhlYWRlclJlbW92ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaGVhZGVyUmVtb3ZlSWNvbi5zcmMgPSB0cmFzaENhbkljb247XG4gIGhlYWRlclJlbW92ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbC1pY29uXCIpO1xuICBoZWFkZXJSZW1vdmVJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJwcm9qXCIpO1xuICBoZWFkZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclJlbW92ZUljb24pO1xufVxuXG5mdW5jdGlvbiBzZXRVcERPTShwcm9qQXJyYXkpIHtcbiAgLy8gR2V0IGNvbnRlbnQgZGl2IGVsZW1lbnRcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFpbmVyXCIpO1xuXG4gIC8vIENyZWF0ZSBzaWRlYmFyIHNlY3Rpb25cbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgLy8gQ3JlYXRlIHNpZGViYXIgY29udGFpbmVyXG4gIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWNvbnRhaW5lclwiKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGFpbmVyKTtcbiAgLy8gQ3JlYXRlIHRpdGxlIGZvciBzaWRlYmFyXG4gIGNvbnN0IHNpZGViYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2lkZWJhclRpdGxlRWxlbWVudCk7XG4gIHNpZGViYXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci10aXRsZVwiKTtcbiAgc2lkZWJhclRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJUaXRsZSk7XG4gIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHByb2plY3RzIGluIHNpZGViYXJcbiAgY29uc3Qgc2lkZWJhclByb2pMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhclByb2pMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1zaWRlYmFyXCIpO1xuICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJQcm9qTGlzdCk7XG5cbiAgLy8gRm9yIGVhY2ggcHJvamVjdCBpbiBhcnJheSwgYWRkIG5hbWUgb2YgcHJvamVjdCB0byBzaWRlYmFyIHByb2ogbGlzdCBkaXZcbiAgcHJvakFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwcm9qSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobGlzdFRpdGxlRWxlbWVudCk7XG4gICAgcHJvakl0ZW0uY2xhc3NMaXN0LmFkZChcInNiLXByb2otaXRlbVwiKTtcbiAgICBwcm9qSXRlbS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICBzaWRlYmFyUHJvakxpc3QuYXBwZW5kQ2hpbGQocHJvakl0ZW0pO1xuICB9KTtcblxuICAvLyBBZGQgYnV0dG9uIGZvciBjcmVhdGluZyBuZXcgcHJvamVjdHMgdG8gc2lkZWJhclxuICBjb25zdCBhZGRQcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkUHJvakNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2ItYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYWRkUHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2pCdXR0b24uY2xhc3NMaXN0LmFkZChcInNiLWFkZC1idXR0b25cIik7XG4gIGFkZFByb2pCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gIGFkZFByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvakJ1dHRvbik7XG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvakNvbnRhaW5lcik7XG5cbiAgLy8gQ3JlYXRlIHByb2plY3Qgdmlld1xuICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RWaWV3LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXZpZXdcIik7XG5cbiAgLy8gQ3JlYXRlIHByb2plY3QgdmlldyBoZWFkZXJcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xuICBzZXRVcEhlYWRlcihwcm9qZWN0SGVhZGVyKTtcblxuICAvLyBBZGQgcHJvamVjdCBoZWFkZXIgdG8gcHJvamVjdCB2aWV3XG4gIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gIC8vIENyZWF0ZSBwcm9qZWN0IHZpZXcgbWFpbiBzZWN0aW9uXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcblxuICAvLyBBZGQgcHJvamVjdCBjb250YWluZXIgdG8gcHJvamVjdCB2aWV3XG4gIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIC8vIEFkZCBlbGVtZW50cyB0byBkb2N1bWVudFxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RWaWV3KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbn1cblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkRPTSBVUERBVEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IHRvZG8gbGlzdFxuY29uc3QgZGlzcGxheUxpc3QgPSAobGlzdCkgPT4ge1xuICAvLyBHZXQgcHJvamVjdCBjb250YWluZXJcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgLy8gQ3JlYXRlIG5ldyBlbGVtZW50XG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyBBc3NpZ24gY2xhc3MgYW5kIGlkIG5hbWVcbiAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC1jb250YWluZXJcIik7XG4gIGNvbnN0IGxpc3RJZE5hbWUgPSBgJHtsaXN0LmlkfWA7XG4gIGxpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgbGlzdElkTmFtZSk7XG5cbiAgLy8gRGlzcGxheSBuYW1lIGFzIHRpdGxlXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRhaW5lclwiKTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsaXN0VGl0bGVFbGVtZW50KTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3QtdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgLy8gRGlzcGxheSBpY29uc1xuICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jb250YWluZXJcIik7XG4gIGNvbnN0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYWRkSWNvbi5zcmMgPSBwbHVzSWNvbjtcbiAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLWljb25cIik7XG4gIGFkZEljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGFkZC0ke2xpc3RJZE5hbWV9YCk7XG4gIGFkZEljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImxpc3RcIik7XG4gIGFkZEljb24uc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEljb24pO1xuICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBlZGl0SWNvbi5zcmMgPSBmaWxlRWRpdEljb247XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWljb25cIik7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0LSR7bGlzdElkTmFtZX1gKTtcbiAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImxpc3RcIik7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWROYW1lKTtcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gIGNvbnN0IHJlbW92ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcmVtb3ZlSWNvbi5zcmMgPSB0cmFzaENhbkljb247XG4gIHJlbW92ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbC1pY29uXCIpO1xuICByZW1vdmVJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWwtJHtsaXN0SWROYW1lfWApO1xuICByZW1vdmVJY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJsaXN0XCIpO1xuICByZW1vdmVJY29uLnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWROYW1lKTtcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVJY29uKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG5cbiAgLy8gRGlzcGxheSBsaXN0IGNvbnRlbnRzXG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRhaW5lclwiKTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgbGlzdC50b2RvQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIFRvZG8gYm94XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0lkTmFtZSA9IGAke2VsZW1lbnQuaWR9YDtcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgIHRvZG8uc2V0QXR0cmlidXRlKFwiaWRcIiwgdG9kb0lkTmFtZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAvLyBDaGVja2JveFxuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY2hrLSR7dG9kb0lkTmFtZX1gKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAvLyBUb2RvIG5hbWVcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9kb05hbWVFbGVtZW50KTtcbiAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kby1uYW1lXCIpO1xuICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgIC8vIFRvZG8gaWNvbnNcbiAgICBjb25zdCB0b2RvSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9JY29ucy5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kb0VkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2RvRWRpdC5zcmMgPSBmaWxlRWRpdEljb247XG4gICAgdG9kb0VkaXQuY2xhc3NMaXN0LmFkZChcImVkaXQtaWNvblwiKTtcbiAgICB0b2RvRWRpdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZWRpdC0ke3RvZG9JZE5hbWV9YCk7XG4gICAgdG9kb0VkaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRvZG9cIik7XG4gICAgdG9kb0VkaXQuc2V0QXR0cmlidXRlKFwibGlzdElkXCIsIGxpc3RJZE5hbWUpO1xuICAgIHRvZG9JY29ucy5hcHBlbmRDaGlsZCh0b2RvRWRpdCk7XG4gICAgY29uc3QgdG9kb0RlbCA9IG5ldyBJbWFnZSgpO1xuICAgIHRvZG9EZWwuc3JjID0gdHJhc2hDYW5JY29uO1xuICAgIHRvZG9EZWwuY2xhc3NMaXN0LmFkZChcImRlbC1pY29uXCIpO1xuICAgIHRvZG9EZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbC0ke3RvZG9JZE5hbWV9YCk7XG4gICAgdG9kb0RlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidG9kb1wiKTtcbiAgICB0b2RvRGVsLnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWROYW1lKTtcbiAgICB0b2RvSWNvbnMuYXBwZW5kQ2hpbGQodG9kb0RlbCk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvSWNvbnMpO1xuICAgIC8vIEFkZCB0b2RvIHRvIGNvbnRhaW5lclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG4gIH0pO1xuXG4gIC8vIEFkZCBsaXN0IGNvbnRhaW5lciB0byBET01cbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbn07XG5cbi8qXG4gIF9fX1VQREFURSBQUk9KRUNUIFZJRVdfX19cbiovXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYWxsIGxpc3RzIGZyb20gcHJvamVjdCB2aWV3IGluIERPTVxuZnVuY3Rpb24gZW1wdHlQcm9qVmlldyhsaXN0KSB7XG4gIC8vIEdldCBwcm9qZWN0IG5vZGUgaW4gRE9NXG4gIGNvbnN0IHByb2pOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBvZiBwcm9qZWN0IG5vZGVcbiAgd2hpbGUgKHByb2pOb2RlLmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qTm9kZS5yZW1vdmVDaGlsZChwcm9qTm9kZS5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBsaXN0IHRvIERPTVxuZnVuY3Rpb24gYWRkTGlzdFRvRE9NKGxpc3QpIHtcbiAgLy8gRGlzcGxheSBsaXN0IGluIERPTVxuICBkaXNwbGF5TGlzdChsaXN0KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHByb2plY3Qgdmlld1xuZnVuY3Rpb24gdXBkYXRlUHJvalZpZXcoYXJyYXkpIHtcbiAgLy8gRW1wdHkgcHJvamVjdCB2aWV3XG4gIGVtcHR5UHJvalZpZXcoKTtcbiAgLy8gQ3ljbGUgdGhyb3VnaCBhbGwgZWxlbWVudHMgb2YgcHJvamVjdCdzIGxpc3QgYXJyYXlcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIC8vIEFkZCBlbGVtZW50IHRvIERPTVxuICAgIGFkZExpc3RUb0RPTShlbGVtZW50KTtcbiAgfSk7XG59XG5cbi8qXG4gIF9fX0RJU1BMQVkgUFJPSkVDVF9fX1xuKi9cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBhbGwgbGlzdHMgZnJvbSBwcm9qZWN0IHZpZXcgaW4gRE9NXG5mdW5jdGlvbiBlbXB0eVByb2pDb250YWluZXIocHJvamVjdENvbnRhaW5lcikge1xuICAvLyBSZW1vdmUgYWxsIGNoaWxkcmVuIG9mIHByb2plY3Qgbm9kZVxuICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvak9iaikge1xuICAvLyBHZXQgdGhlIHByb2plY3QgY29udGFpbmVyIGVsZW1lbnQgZnJvbSBET01cbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gIC8vIEVtcHR5IGV4aXN0aW5nIHByb2plY3QgY29udGFpbmVyXG4gIGVtcHR5UHJvakNvbnRhaW5lcihwcm9qZWN0Q29udGFpbmVyKTtcblxuICAvLyBJZiBwcm9qZWN0IGFycmF5IHByZXZpb3VzbHkgZW1wdHkgdGhlbiBzZXRVcEhlYWRlclxuICBpZiAocHJvamVjdENvbnRhaW5lci5pZCA9PT0gXCJlbXB0eVwiKSB7XG4gICAgLy8gR2V0IHByb2plY3QgaGVhZGVyIGVsZW1lbnRcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlclwiKTtcbiAgICBzZXRVcEhlYWRlcihwcm9qZWN0SGVhZGVyKTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgcHJvamVjdCBJRFxuICBjb25zdCBwcm9qZWN0SUQgPSBwcm9qT2JqLmlkO1xuICAvLyBBZGQgSUQgdG8gcHJvamVjdCBjb250YWluZXIgZWxlbWVudFxuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RJRCk7XG5cbiAgLy8gR2V0IHRoZSBoZWFkZXIgdGl0bGUgZWxlbWVudFxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXRpdGxlXCIpO1xuICAvLyBTZXQgdGV4dCBmb3IgdGl0bGUgdG8gcHJvamVjdCBuYW1lXG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gcHJvak9iai5uYW1lO1xuXG4gIHByb2pPYmoubGlzdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICBkaXNwbGF5TGlzdChlbGVtZW50KTtcbiAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGVtcHR5IHByb2plY3QgaGVhZGVyXG5mdW5jdGlvbiBlbXB0eUhlYWRlcihwcm9qZWN0SGVhZGVyKSB7XG4gIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW4gb2YgaGVhZGVyIG5vZGVcbiAgd2hpbGUgKHByb2plY3RIZWFkZXIuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3RIZWFkZXIucmVtb3ZlQ2hpbGQocHJvamVjdEhlYWRlci5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFbXB0eVByb2pBcnJheSgpIHtcbiAgLy8gR2V0IHRoZSBwcm9qZWN0IGNvbnRhaW5lciBlbGVtZW50IGZyb20gRE9NXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICAvLyBFbXB0eSBleGlzdGluZyBwcm9qZWN0IGNvbnRhaW5lclxuICBlbXB0eVByb2pDb250YWluZXIocHJvamVjdENvbnRhaW5lcik7XG5cbiAgLy8gU2V0IGVtcHR5IGlkIGZvciBwcm9qZWN0IGNvbnRhaW5lclxuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1wdHlcIik7XG5cbiAgLy8gU2V0IHRleHQgZm9yIGVtcHR5IHByb2plY3QgYXJyYXlcbiAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiTm8gcHJvamVjdHMhIEFkZCBhIHByb2plY3QgaW4gdGhlIHNpZGViYXIhXCI7XG5cbiAgLy8gR2V0IHByb2plY3QgaGVhZGVyIGVsZW1lbnRcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXJcIik7XG4gIGVtcHR5SGVhZGVyKHByb2plY3RIZWFkZXIpO1xufVxuXG5leHBvcnQge1xuICBzZXRVcERPTSxcbiAgdXBkYXRlUHJvalZpZXcsXG4gIGRpc3BsYXlQcm9qZWN0LFxuICB1cGRhdGVTaWRlYmFyTGlzdCxcbiAgZGlzcGxheUVtcHR5UHJvakFycmF5LFxufTtcbiIsImltcG9ydCByZXR1cm5PYmplY3RGcm9tQXJyYXkgZnJvbSBcIi4vb2JqZWN0TG9naWNcIjtcblxuLy8gRGVmaW5lIHByaW9yaXR5IG9wdGlvbnMgYXJyYXlcbmNvbnN0IHByaW9yaXR5T3B0aW9uc0FycmF5ID0gW1wibm9uZVwiLCBcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIl07XG5cbi8vIFRvZG8gZWRpdCBmb3JtXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9Gb3JtKHByb2pJZCwgcHJvakFycmF5LCBsaXN0SWQsIHRvZG9JZCkge1xuICAvLyBDcmVhdGUgZm9ybSBiYWNrZ3JvdW5kXG4gIGNvbnN0IGZvcm1CYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImZvcm0tYmFja2dyb3VuZFwiKTtcbiAgLy8gQ3JlYXRlIGZvcm0gY29udGFpbmVyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblxuICAvLyBBcHBlbmQgY29udGFpbmVyIHRvIGJhY2tncm91bmQgZWxlbWVudFxuICBmb3JtQmFja2dyb3VuZC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAvLyBBZGQgY29udGFpbmVyIGZvciBuYW1lIGVsZW1lbnRzXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWRpdlwiKTtcbiAgLy8gQWRkIGxhYmVsIGZvciBuYW1lIGlucHV0XG4gIGNvbnN0IHRvZG9OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRvZG9OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1uYW1lXCIpO1xuICB0b2RvTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAvLyBBZGQgaW5wdXQgZm9yIG5hbWUgYW5kIHNldCBhdHRyaWJ1dGVzXG4gIGNvbnN0IHRvZG9OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvZG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRvZG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLW5hbWVcIik7XG4gIHRvZG9OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tbmFtZVwiKTtcblxuICAvLyBBcHBlbmQgYm90aCBsYWJlbCBhbmQgaW5wdXQgZm9yIG5hbWUgdG8gbmFtZSBjb250YWluZXJcbiAgbmFtZURpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZUxhYmVsKTtcbiAgbmFtZURpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZUlucHV0KTtcbiAgLy8gQXBwZW5kIHRoZSBuYW1lIGNvbnRhaW5lciB0byBmb3JtIGNvbnRhaW5lclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIHByaW9yaXR5IGVsZW1lbnRzXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZGl2XCIpO1xuICAvLyBBZGQgbGFiZWwgZm9yIHByaW9yaXR5IHNlbGVjdFxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tcHJpb3JpdHlcIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAvLyBBZGQgcHJpb3JpdHkgc2VsZWN0IGVsZW1lbnRcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJ0b2RvLXByaW9yaXR5XCI7XG4gIC8vIExvb3AgdGhyb3VnaCBvcHRpb25zIGFycmF5XG4gIHByaW9yaXR5T3B0aW9uc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnRcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgLy8gU2V0IG9wdGlvbiB2YWx1ZSB0byB0aGUgc3RyaW5nIG9mIGVhY2ggYXJyYXkgaXRlbVxuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1lbnQpO1xuICAgIC8vIEdldCBzdHJpbmcgZm9yIG9wdGlvbiBuYW1lXG4gICAgY29uc3Qgb3B0aW9uTmFtZSA9IGVsZW1lbnQ7XG4gICAgLy8gR2V0IHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIG5hbWVcbiAgICBjb25zdCBmaXJzdExldHRlciA9IG9wdGlvbk5hbWUuY2hhckF0KDApO1xuICAgIC8vIFNldCB0aGUgdGV4dCB0byBuYW1lIHdpdGggY2FwaXRhbCBmaXJzdCBsZXR0ZXJcbiAgICBwcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBmaXJzdExldHRlci50b1VwcGVyQ2FzZSgpICsgb3B0aW9uTmFtZS5zbGljZSgxKTtcbiAgICAvLyBBZGQgb3B0aW9uIGVsZW1lbnQgdG8gc2VsZWN0IGVsZW1lbnRcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG4gIH0pO1xuICAvLyBBZGQgdGhlIHNlbGVjdCBlbGVtZW50cyB0byBwcmlvcml0eSBjb250YWluZXJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgLy8gQXBwZW5kIHRoZSBwcmlvcml0eSBjb250YWluZXIgdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIGluZm9cbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZGl2XCIpO1xuICAvLyBBZGQgbGFiZWwgZm9yIGluZm8gYm94XG4gIGNvbnN0IGluZm9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5mb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8taW5mb1wiKTtcbiAgaW5mb0xhYmVsLnRleHRDb250ZW50ID0gXCJJbmZvOlwiO1xuICAvLyBBZGQgaW5mbyB0ZXh0IGFyZWEgZWxlbWVudFxuICBjb25zdCBpbmZvVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGluZm9UZXh0QXJlYS5uYW1lID0gXCJ0b2RvLWluZm9cIjtcbiAgLy8gQWRkIHRoZSBpbmZvIGVsZW1lbnRzIHRvIGluZm8gY29udGFpbmVyXG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQoaW5mb0xhYmVsKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvVGV4dEFyZWEpO1xuICAvLyBBcHBlbmQgdGhlIGluZm8gY29udGFpbmVyIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gIC8vIEFkZCBjb250YWluZXIgZm9yIHN1Ym1pdCBidXR0b25cbiAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VibWl0RGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ1dHRvbi1kaXZcIik7XG4gIC8vIEFkZCBpbnB1dCBlbGVtZW50IG9mIHR5cGUgc3VibWl0XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIC8vIEFkZCBzdWJtaXQgYnV0dG9uIHRvIHRoZSBzdWJtaXQgZGl2XG4gIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAvLyBBZGQgc3VibWl0IGNvbnRhaW5lciB0byBmb3JtIGNvbnRhaW5lclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdERpdik7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHN1Ym1pdCBidXR0b25cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gR2V0IHRoZSBwcm9qZWN0IG9iamVjdCBmcm9tIHRoZSBwcm9qZWN0IGFycmF5XG4gICAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gICAgY29uc29sZS5sb2cocHJvaklkKTtcblxuICAgIGNvbnNvbGUubG9nKGluZm9UZXh0QXJlYS52YWx1ZSk7XG4gIH0pO1xuXG4gIC8vIEFkZCBmb3JtIGNvbnRhaW5lciB0byBkb2N1bWVudFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtQmFja2dyb3VuZCk7XG59XG5cbi8vIExpc3QgZWRpdCBmb3JtXG5mdW5jdGlvbiBnZW5lcmF0ZUxpc3RGb3JtKCkge31cblxuLy8gUHJvamVjdCBlZGl0IGZvcm1cblxuZXhwb3J0IHsgZ2VuZXJhdGVUb2RvRm9ybSwgZ2VuZXJhdGVMaXN0Rm9ybSB9O1xuIiwiLy8gR2V0IG9iamVjdCBmcm9tIGFycmF5XG5mdW5jdGlvbiByZXR1cm5PYmplY3RGcm9tQXJyYXkoaWQsIGFycmF5KSB7XG4gIC8vIEZpbHRlciB0aHJvdWdoIGFycmF5IG9mIGxpc3RzIHRvIGZpbmQgbWF0Y2hpbmcgbGlzdCBvYmplY3RcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gaWQpO1xuICAvLyBDaGVjayBmb3IgdW5pcXVlbmVzc1xuICBpZiAoZmlsdGVyZWRBcnJheS5sZW5ndGggPiAxKSB7XG4gICAgLy8gSWYgbW9yZSB0aGFuIG9uZSBsaXN0IG9iamVjdCBmb3VuZCB0aHJvdyBlcnJvclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpO1xuICAgIHRocm93IEVycm9yKFwiRVJST1IhIE1vcmUgdGhhbiBvbmUgcmVsYXRpdmUgZm91bmQuXCIpOyAvLyBFcnJvciBpZiBtb3JlIHRoYXQgb25lIHJlbGF0aXZlIG9iamVjdCBmb3VuZFxuICB9IGVsc2UgaWYgKGZpbHRlcmVkQXJyYXkubGVuZ3RoIDwgMSkge1xuICAgIHRocm93IEVycm9yKFwiRVJST1IhIE5vIHJlbGF0aXZlIGZvdW5kLlwiKTsgLy8gRXJyb3IgaWYgbm8gcmVsYXRpdmUgb2JqZWN0IGZvdW5kXG4gIH0gZWxzZSB7XG4gICAgLy8gRGVzdHJ1Y3R1cmUgYXJyYXkgb2Ygb2JqZWN0c1xuICAgIGNvbnN0IFtyZWxhdGl2ZV0gPSBmaWx0ZXJlZEFycmF5O1xuICAgIC8vIFJldHVybiBsaXN0IG9iamVjdFxuICAgIHJldHVybiByZWxhdGl2ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXR1cm5PYmplY3RGcm9tQXJyYXk7XG4iLCJpbXBvcnQgeyB0b2RvUHJvdG8sIGNyZWF0b3IsIHJlbW92ZXIgfSBmcm9tIFwiLi90b2RvUHJvdG9cIjtcbmltcG9ydCB0b2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuXG5jb25zdCBwcm9qZWN0ID0gKFxuICBuYW1lLFxuICBpZCxcbiAgaW5mbyxcbiAgdHlwZSA9IFwicHJvalwiLFxuICBhcnJheU5hbWUgPSBcImxpc3RBcnJheVwiLFxuICBvYmogPSB0b2RvTGlzdFxuKSA9PiB7XG4gIGNvbnN0IGxpc3RBcnJheSA9IFtdO1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICAuLi50b2RvUHJvdG8obmFtZSwgaWQsIGluZm8sIHR5cGUpLFxuICAgIGxpc3RBcnJheSxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5jcmVhdG9yKHN0YXRlLCBhcnJheU5hbWUsIG9iaiwgdHlwZSksXG4gICAgLi4ucmVtb3ZlcihzdGF0ZSwgYXJyYXlOYW1lKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XG4iLCIvKiBcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5GYWN0b3J5IGZ1bmN0aW9uIHRvIHJldHVybiBhIHRvZG9JdGVtIG9iamVjdFxuT0FMIDE1LTAyLTIwMjNcblZlcnNpb24gMC4xIGdlbmVzaXNcblxuVGhpcyBmdW5jdGlvbiBjYWxsZWQgYnkgcHJvamVjdCBvciB0b2RvTGlzdCBjb2RlIHRvIGNyZWF0ZSBhbmQgcmV0dXJuIGEgdG9kb0l0ZW1cblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFxuKi9cblxuaW1wb3J0IHsgdG9kb1Byb3RvIH0gZnJvbSBcIi4vdG9kb1Byb3RvXCI7XG5cbmNvbnN0IHRvZG9JdGVtID0gKFxuICBuYW1lLFxuICBpZCxcbiAgaW5mbyxcbiAgdHlwZSA9IFwidG9kb1wiLFxuICBkdWVEYXRlID0gbnVsbCxcbiAgcHJpb3JpdHkgPSBcIm5vbmVcIixcbiAgY2hlY2tsaXN0ID0gW10sXG4gIHN0YXR1cyA9IFwicGVuZGluZ1wiXG4pID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgLi4udG9kb1Byb3RvKG5hbWUsIGlkLCBpbmZvLCB0eXBlKSxcbiAgICBjcmVhdGlvbkRhdGU6IG5ldyBEYXRlKCksXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjaGVja2xpc3QsXG4gICAgc3RhdHVzLFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0l0ZW07XG4iLCIvKiBcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5GYWN0b3J5IGZ1bmN0aW9uIHRvIHJldHVybiBhIHRvZG9MaXN0IG9iamVjdFxuT0FMIDE1LTAyLTIwMjNcblZlcnNpb24gMC4xIGdlbmVzaXNcblxuVGhpcyBmdW5jdGlvbiBjYWxsZWQgYnkgcHJvamVjdCBjb2RlIHRvIGNyZWF0ZSBhbmQgcmV0dXJuIGEgdG9kb0xpc3QuXG5UaGUgcmV0dXJuZWQgb2JqZWN0IGluY2x1ZGVzIGFuIGFycmF5IG9mIHRvZG9JdGVtcywgbmFtZSwgaW5mbyBhbmRcbmZ1bmN0aW9ucyBmb3IgYWRkaW5nIGFuZCByZW1vdmluZyB0b2RvSXRlbXMgZnJvbSBhcnJheS5cblxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFxuKi9cblxuaW1wb3J0IHsgdG9kb1Byb3RvLCBjcmVhdG9yLCByZW1vdmVyIH0gZnJvbSBcIi4vdG9kb1Byb3RvXCI7XG5pbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vdG9kb0l0ZW1cIjtcblxuY29uc3QgdG9kb0xpc3QgPSAoXG4gIG5hbWUsXG4gIGlkLFxuICBpbmZvLFxuICB0eXBlID0gXCJsaXN0XCIsXG4gIGFycmF5TmFtZSA9IFwidG9kb0FycmF5XCIsXG4gIG9iaiA9IHRvZG9JdGVtXG4pID0+IHtcbiAgY29uc3QgdG9kb0FycmF5ID0gW107XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIC4uLnRvZG9Qcm90byhuYW1lLCBpZCwgaW5mbywgdHlwZSksXG4gICAgdG9kb0FycmF5LFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmNyZWF0b3Ioc3RhdGUsIGFycmF5TmFtZSwgb2JqLCB0eXBlKSxcbiAgICAuLi5yZW1vdmVyKHN0YXRlLCBhcnJheU5hbWUpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0xpc3Q7XG4iLCJpbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcblxuZnVuY3Rpb24gZ2V0VW5pcXVlSUQoaWRQcmVmaXgpIHtcbiAgcmV0dXJuIHVuaXFpZChpZFByZWZpeCk7XG59XG5cbmNvbnN0IGNyZWF0b3IgPSAoc3RhdGUsIGFycmF5TmFtZSwgb2JqZWN0LCB0eXBlKSA9PiAoe1xuICBjcmVhdGU6IChpZFByZWZpeCkgPT4ge1xuICAgIC8vIEdldCB0aGUgdHlwZSBvZiBjaGlsZCB0byBhZGRcbiAgICBsZXQgY2hpbGRUeXBlO1xuICAgIGlmICh0eXBlID09PSBcImxpc3RcIikge1xuICAgICAgY2hpbGRUeXBlID0gXCJ0b2RvXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInByb2pcIikge1xuICAgICAgY2hpbGRUeXBlID0gXCJsaXN0XCI7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gZ2V0VW5pcXVlSUQoaWRQcmVmaXgpO1xuICAgIGNvbnN0IG9iak5hbWUgPSBgTmV3ICR7Y2hpbGRUeXBlfWA7XG4gICAgY29uc3QgaW5mbyA9IG51bGw7XG4gICAgLy8gQWRkIGEgY2hpbGQgb2JqZWN0IHRvIHRoZSBhcnJheVxuICAgIHN0YXRlW2Ake2FycmF5TmFtZX1gXS5wdXNoKG9iamVjdChvYmpOYW1lLCBpZCwgaW5mbywgY2hpbGRUeXBlKSk7XG4gIH0sXG59KTtcblxuY29uc3QgcmVtb3ZlciA9IChzdGF0ZSwgYXJyYXlOYW1lKSA9PiAoe1xuICBkZWxldGVJdGVtOiAoaWQpID0+XG4gICAgc3RhdGVbYCR7YXJyYXlOYW1lfWBdLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5pZCAhPT0gaWQpLFxufSk7XG5cbmNvbnN0IHRvZG9Qcm90byA9IChuYW1lLCBpZCwgaW5mbywgdHlwZSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBuYW1lLFxuICAgIGlkLFxuICAgIGluZm8sXG4gICAgdHlwZSxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHRvZG9Qcm90bywgY3JlYXRvciwgcmVtb3ZlciwgZ2V0VW5pcXVlSUQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0VW5pcXVlSUQgfSBmcm9tIFwiLi90b2RvUHJvdG9cIjtcbmltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7XG4gIHNldFVwRE9NLFxuICB1cGRhdGVQcm9qVmlldyxcbiAgZGlzcGxheVByb2plY3QsXG4gIHVwZGF0ZVNpZGViYXJMaXN0LFxuICBkaXNwbGF5RW1wdHlQcm9qQXJyYXksXG59IGZyb20gXCIuL2RvbU1hbmFnZXJcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9kb0Zvcm0gfSBmcm9tIFwiLi9mb3JtTWFuYWdlclwiO1xuaW1wb3J0IHJldHVybk9iamVjdEZyb21BcnJheSBmcm9tIFwiLi9vYmplY3RMb2dpY1wiO1xuXG5jb25zdCBwcm9qQXJyYXkgPSBbXTtcblxuLyogUkVGQUNUT1IgVE8gTU9EVUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFRPRE8vTElTVCBMT0dJQ1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi8qXG5fX19DUkVBVEUgUFJPSi9MSVNUX19fXG4qL1xuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIG5ldyBwcm9qZWN0XG5jb25zdCBjcmVhdGVQcm9qID0gKG5hbWUgPSBcIk5ldyBQcm9qZWN0XCIsIGluZm8gPSB1bmRlZmluZWQpID0+IHtcbiAgLy8gR2V0IGEgdW5pcXVlIElEIGZvciB0aGUgcHJvamVjdFxuICBjb25zdCBpZCA9IGdldFVuaXF1ZUlEKFwicHJvai1cIik7XG4gIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0IG9iamVjdFxuICBjb25zdCBuZXdQcm9qID0gcHJvamVjdChuYW1lLCBpZCwgaW5mbyk7XG4gIC8vIFB1c2ggdGhlIG5ldyBwcm9qZWN0IG9iamVjdCB0byB0aGUgcHJvamVjdCBhcnJheVxuICBwcm9qQXJyYXkucHVzaChuZXdQcm9qKTtcblxuICAvLyBSZXR1cm4gdGhlIHByb2plY3Qgb2JqZWN0XG4gIHJldHVybiBuZXdQcm9qO1xufTtcblxuLypcbiAgX19fT0JKRUNUIExPR0lDX19fXG4qL1xuLy8gLy8gR2V0IG9iamVjdCBmcm9tIGFycmF5XG4vLyBmdW5jdGlvbiByZXR1cm5PYmplY3RGcm9tQXJyYXkoaWQsIGFycmF5KSB7XG4vLyAgIC8vIEZpbHRlciB0aHJvdWdoIGFycmF5IG9mIGxpc3RzIHRvIGZpbmQgbWF0Y2hpbmcgbGlzdCBvYmplY3Rcbi8vICAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gaWQpO1xuLy8gICAvLyBDaGVjayBmb3IgdW5pcXVlbmVzc1xuLy8gICBpZiAoZmlsdGVyZWRBcnJheS5sZW5ndGggPiAxKSB7XG4vLyAgICAgLy8gSWYgbW9yZSB0aGFuIG9uZSBsaXN0IG9iamVjdCBmb3VuZCB0aHJvdyBlcnJvclxuLy8gICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpO1xuLy8gICAgIHRocm93IEVycm9yKFwiRVJST1IhIE1vcmUgdGhhbiBvbmUgcmVsYXRpdmUgZm91bmQuXCIpOyAvLyBFcnJvciBpZiBtb3JlIHRoYXQgb25lIHJlbGF0aXZlIG9iamVjdCBmb3VuZFxuLy8gICB9IGVsc2UgaWYgKGZpbHRlcmVkQXJyYXkubGVuZ3RoIDwgMSkge1xuLy8gICAgIHRocm93IEVycm9yKFwiRVJST1IhIE5vIHJlbGF0aXZlIGZvdW5kLlwiKTsgLy8gRXJyb3IgaWYgbm8gcmVsYXRpdmUgb2JqZWN0IGZvdW5kXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgLy8gRGVzdHJ1Y3R1cmUgYXJyYXkgb2Ygb2JqZWN0c1xuLy8gICAgIGNvbnN0IFtyZWxhdGl2ZV0gPSBmaWx0ZXJlZEFycmF5O1xuLy8gICAgIC8vIFJldHVybiBsaXN0IG9iamVjdFxuLy8gICAgIHJldHVybiByZWxhdGl2ZTtcbi8vICAgfVxuLy8gfVxuXG4vKlxuICBfX19FVkVOVCBIQU5ETEVSU19fXyAoZm9yIGV2ZW50IGxpc3RlbmVycylcbiovXG4vLyBIYW5kbGUgdG9kbyBhZGQgZXZlbnRcbmZ1bmN0aW9uIGhhbmRsZVRvZG9BZGQoZSkge1xuICAvLyBHZXQgcHJvamVjdCBpZFxuICBjb25zdCBwcm9qSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBHZXQgcHJvamVjdCBvYmplY3QgZnJvbSBhcnJheVxuICBjb25zdCBwcm9qID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KHByb2pJZCwgcHJvakFycmF5KTtcbiAgLy8gR2V0IGxpc3QgaWRcbiAgY29uc3QgbGlzdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5saXN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGxpc3QgPSByZXR1cm5PYmplY3RGcm9tQXJyYXkobGlzdElkLCBwcm9qLmxpc3RBcnJheSk7XG4gIC8vIENyZWF0ZSBhIHRvZG8gaXRlbVxuICBsaXN0LmNyZWF0ZShcInRvZG8tXCIpO1xuICAvLyBVcGRhdGUgdmlldyBvZiBsaXN0cyBpbiBhcnJheSBpbiBET01cbiAgdXBkYXRlUHJvalZpZXcocHJvai5saXN0QXJyYXkpO1xufVxuXG4vLyBIYW5kbGUgbGlzdCBhZGQgZXZlbnRcbmZ1bmN0aW9uIGhhbmRsZUxpc3RBZGQoZSkge1xuICAvLyBHZXQgcHJvamVjdCBpZFxuICBjb25zdCBwcm9qSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBHZXQgcHJvamVjdCBvYmplY3QgZnJvbSBhcnJheVxuICBjb25zdCBwcm9qID0gcmV0dXJuT2JqZWN0RnJvbUFycmF5KHByb2pJZCwgcHJvakFycmF5KTtcbiAgLy8gQ3JlYXRlIGEgbGlzdCBpbiB0aGUgcHJvamVjdFxuICBwcm9qLmNyZWF0ZShcImxpc3QtXCIpO1xuICAvLyBHZXQgbmV3IGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGxpc3QgPSBwcm9qLmxpc3RBcnJheVtwcm9qLmxpc3RBcnJheS5sZW5ndGggLSAxXTtcbiAgLy8gR2V0IElEIG9mIG5ldyBsaXN0XG4gIGNvbnN0IGxpc3RJZCA9IGxpc3QuaWQ7XG4gIC8vIFVwZGF0ZSB2aWV3IG9mIHByb2plY3QgaW4gYXJyYXkgaW4gRE9NXG4gIHVwZGF0ZVByb2pWaWV3KHByb2oubGlzdEFycmF5KTtcbn1cblxuLy8gSGFuZGxlIHRvZG8gZGVsZXRlIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVUb2RvRGVsKGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWRcbiAgY29uc3QgcHJvaklkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gIC8vIEdldCB0b2RvIElEXG4gIGNvbnN0IHRvZG9JZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAvLyBHZXQgbGlzdCBJRFxuICBjb25zdCBsaXN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmxpc3QtY29udGFpbmVyXCIpLmlkO1xuICAvLyBGaWx0ZXIgdGhyb3VnaCBhcnJheSBvZiBsaXN0cyB0byBmaW5kIG1hdGNoaW5nIGxpc3Qgb2JqZWN0XG4gIGNvbnN0IGxpc3QgPSByZXR1cm5PYmplY3RGcm9tQXJyYXkobGlzdElkLCBwcm9qLmxpc3RBcnJheSk7XG4gIC8vIFJlbW92ZSB0aGUgZmlyc3QgNCBjaGFyYWN0ZXJzIGZyb20gdGFyZ2V0SWQgc3RyaW5nIChGaXJzdCA0IGNoYXJhY3RlcnM6IFwiZGVsLVwiKVxuICBjb25zdCB0b2RvT2JqSWQgPSB0b2RvSWQuc3Vic3RyaW5nKDQpO1xuICAvLyBGaW5kIGluZGV4IG9mIG9iamVjdCBpbiBhcnJheVxuICBjb25zdCBhcnJheUluZGV4ID0gbGlzdC50b2RvQXJyYXkuZmluZEluZGV4KFxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSB0b2RvT2JqSWRcbiAgKTtcbiAgLy8gUmVtb3ZlIHRoZSB0b2RvIG9iamVjdCBmcm9tIGFycmF5IGluIHBhcmVudCBsaXN0IG9iamVjdFxuICBsaXN0LnRvZG9BcnJheS5zcGxpY2UoYXJyYXlJbmRleCwgMSk7XG4gIC8vIFVwZGF0ZSBwcm9qZWN0IHZpZXcgaW4gRE9NXG4gIHVwZGF0ZVByb2pWaWV3KHByb2oubGlzdEFycmF5KTtcbn1cblxuLy8gSGFuZGxlIGxpc3QgZGVsZXRlIGV2ZW50XG5mdW5jdGlvbiBoYW5kbGVMaXN0RGVsKGUpIHtcbiAgLy8gR2V0IHByb2plY3QgaWRcbiAgY29uc3QgcHJvaklkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgcHJvaiA9IHJldHVybk9iamVjdEZyb21BcnJheShwcm9qSWQsIHByb2pBcnJheSk7XG4gIC8vIEdldCBsaXN0IElEXG4gIGNvbnN0IGxpc3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdC1jb250YWluZXJcIikuaWQ7XG4gIC8vIEZpbHRlciB0aHJvdWdoIGFycmF5IG9mIGxpc3RzIHRvIGZpbmQgbWF0Y2hpbmcgbGlzdCBvYmplY3RcbiAgY29uc3QgYXJyYXlJbmRleCA9IHByb2oubGlzdEFycmF5LmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gbGlzdElkXG4gICk7XG4gIC8vIFJlbW92ZSB0aGUgbGlzdCBvYmplY3QgZnJvbSBhcnJheSBpbiBwYXJlbnQgcHJvamVjdCBvYmplY3RcbiAgcHJvai5saXN0QXJyYXkuc3BsaWNlKGFycmF5SW5kZXgsIDEpO1xuICAvLyBVcGRhdGUgcHJvaiB2aWV3IGluIERPTVxuICB1cGRhdGVQcm9qVmlldyhwcm9qLmxpc3RBcnJheSk7XG59XG5cbi8vIEhhbmRsZSBwcm9qZWN0IGFkZCBldmVudFxuZnVuY3Rpb24gaGFuZGxlUHJvakFkZChlKSB7XG4gIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0XG4gIGNvbnN0IG5ld1Byb2ogPSBjcmVhdGVQcm9qKCk7XG5cbiAgLy8gVXBkYXRlIHNpZGViYXJcbiAgdXBkYXRlU2lkZWJhckxpc3QocHJvakFycmF5KTtcblxuICAvLyBEaXNwbGF5IG5ldyBwcm9qZWN0XG4gIGRpc3BsYXlQcm9qZWN0KG5ld1Byb2opO1xufVxuXG4vLyBIYW5kbGUgcHJvamVjdCBkZWxldGlvbiBldmVudFxuZnVuY3Rpb24gaGFuZGxlUHJvakRlbChlKSB7XG4gIC8vIEdldCBwcm9qZWN0IGlkIGZyb20gcHJvamVjdCBjb250YWluZXJcbiAgY29uc3QgcHJvaklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pZDtcbiAgLy8gR2V0IHByb2plY3Qgb2JqZWN0IGZyb20gYXJyYXlcbiAgY29uc3QgYXJyYXlJbmRleCA9IHByb2pBcnJheS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHByb2pJZCk7XG4gIC8vIFJlbW92ZSB0aGUgbGlzdCBvYmplY3QgZnJvbSBhcnJheSBpbiBwYXJlbnQgcHJvamVjdCBvYmplY3RcbiAgcHJvakFycmF5LnNwbGljZShhcnJheUluZGV4LCAxKTtcbiAgLy8gRGlzcGxheSBwcmV2aW91cyBwcm9qZWN0XG4gIGlmIChwcm9qQXJyYXkubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlQcm9qZWN0KHByb2pBcnJheVthcnJheUluZGV4IC0gMV0pO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlFbXB0eVByb2pBcnJheSgpO1xuICB9XG4gIC8vIFVwZGF0ZSBzaWRlYmFyIGxpc3Qgb2YgcHJvamVjdHNcbiAgdXBkYXRlU2lkZWJhckxpc3QocHJvakFycmF5KTtcbn1cblxuLypcbiAgX19fRVZFTlQgTElTVEVORVJTX19fXG4qL1xuLy8gR2xvYmFsIGV2ZW50IGxpc3RlbmVyXG5mdW5jdGlvbiBhZGRHbG9iYWxFdmVudExpc3RlbmVyKHR5cGUsIHNlbGVjdG9yLCBjYWxsYmFjaykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSBjYWxsYmFjayhlKTtcbiAgfSk7XG59XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uYWxpdHkgZm9yIHNpZGViYXIgYWRkIHByb2plY3QgYnV0dG9uXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXCIuc2ItYWRkLWJ1dHRvblwiLCAoZSkgPT4ge1xuICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIgZm9yIGFkZGluZyBhIHByb2plY3RcbiAgaGFuZGxlUHJvakFkZChlKTtcbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbmFsaXR5IGZvciBhZGQgaWNvbnNcbmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcIi5hZGQtaWNvblwiLCAoZSkgPT4ge1xuICAvLyBTZXQgdmFyaWFibGVzIGZvciB0aGUgRE9NIGVsZW1lbnQncyB0eXBlIGFuZCBpZCBhdHRyaWJ1dGVzXG4gIGNvbnN0IHRhcmdldFR5cGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgdHlwZSBpcyBhIGxpc3RcbiAgaWYgKHRhcmdldFR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgaGFuZGxlVG9kb0FkZChlKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBcInByb2pcIikge1xuICAgIGhhbmRsZUxpc3RBZGQoZSk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbmFsaXR5IGZvciBlZGl0IGljb25zXG5hZGRHbG9iYWxFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgXCIuZWRpdC1pY29uXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFZGl0IHRhcmdldDpgKTtcbiAgY29uc29sZS5sb2coZS50YXJnZXQpO1xufSk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uYWxpdHkgZm9yIGRlbGV0ZSBpY29uc1xuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFwiLmRlbC1pY29uXCIsIChlKSA9PiB7XG4gIC8vIFNldCB2YXJpYWJsZXMgZm9yIHRoZSBET00gZWxlbWVudCdzIHR5cGUgYW5kIGlkIGF0dHJpYnV0ZXNcbiAgY29uc3QgdGFyZ2V0VHlwZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XG5cbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCB0eXBlIGlzIGEgbGlzdFxuICBpZiAodGFyZ2V0VHlwZSA9PT0gXCJ0b2RvXCIpIHtcbiAgICBoYW5kbGVUb2RvRGVsKGUpO1xuICB9IGVsc2UgaWYgKHRhcmdldFR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgaGFuZGxlTGlzdERlbChlKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRUeXBlID09PSBcInByb2pcIikge1xuICAgIGhhbmRsZVByb2pEZWwoZSk7XG4gIH1cbn0pO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBJTklUSUFMSVpFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4vLyBDcmVhdGUgYSBibGFuayBwcm9qZWN0XG5mdW5jdGlvbiBjcmVhdGVFeGFtcGxlUHJvaigpIHtcbiAgLy8gQ3JlYXRlIHRoZSBwcm9qZWN0XG4gIGNvbnN0IG15UHJvaiA9IGNyZWF0ZVByb2ooXCJNeSBmaXJzdCBwcm9qZWN0XCIsIFwiVGhpcyBpcyBteSBmaXJzdCBwcm9qZWN0XCIpO1xuXG4gIC8vIENyZWF0ZSBhIGxpc3QgaW4gdGhlIHByb2plY3RcbiAgbXlQcm9qLmNyZWF0ZShcImxpc3QtXCIpO1xuXG4gIC8vIENyZWF0ZSBhIHNldCBvZiB0b2RvIGl0ZW1zIGluIHRoZSBuZXcgbGlzdFxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIG15UHJvai5saXN0QXJyYXlbMF0uY3JlYXRlKFwidG9kby1cIik7XG4gIH1cbn1cblxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgYmxhbmsgcHJvamVjdFxuY3JlYXRlRXhhbXBsZVByb2ooKTtcblxuLy8gU2V0IHVwIHRoZSBET01cbnNldFVwRE9NKHByb2pBcnJheSk7XG5cbi8vIERpc3BsYXkgdGhlIGRlZmF1bHQgcHJvamVjdFxuZnVuY3Rpb24gZGlzcGxheURlZmF1bHRQcm9qZWN0KGluZGV4ID0gMCkge1xuICBkaXNwbGF5UHJvamVjdChwcm9qQXJyYXlbaW5kZXhdKTtcbn1cblxuLy8gQ2FsbCBmdW5jdGlvbiBmb3IgZGlzcGxheWluZyB0aGUgZGVmYXVsdCBwcm9qZWN0XG5kaXNwbGF5RGVmYXVsdFByb2plY3QoKTtcblxuLy8gQ2FsbCBnZW5lcmF0ZVRvZG9Gb3JtIGZvciB0ZXN0aW5nXG5nZW5lcmF0ZVRvZG9Gb3JtKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=