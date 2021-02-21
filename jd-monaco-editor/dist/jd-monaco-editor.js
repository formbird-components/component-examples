/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayLikeToArray": () => /* binding */ _arrayLikeToArray,
/* harmony export */   "arrayWithHoles": () => /* binding */ _arrayWithHoles,
/* harmony export */   "defineProperty": () => /* binding */ _defineProperty,
/* harmony export */   "iterableToArrayLimit": () => /* binding */ _iterableToArrayLimit,
/* harmony export */   "nonIterableRest": () => /* binding */ _nonIterableRest,
/* harmony export */   "objectSpread2": () => /* binding */ _objectSpread2,
/* harmony export */   "slicedToArray": () => /* binding */ _slicedToArray,
/* harmony export */   "unsupportedIterableToArray": () => /* binding */ _unsupportedIterableToArray
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/config/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/config/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.21.2/min/vs'
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _loader_index_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _loader_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/index.js */ "./node_modules/@monaco-editor/loader/lib/es/loader/index.js");




/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/loader/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/loader/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var state_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state-local */ "./node_modules/state-local/lib/es/state-local.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.js */ "./node_modules/@monaco-editor/loader/lib/es/config/index.js");
/* harmony import */ var _validators_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/index.js */ "./node_modules/@monaco-editor/loader/lib/es/validators/index.js");
/* harmony import */ var _utils_compose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/compose.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/compose.js");
/* harmony import */ var _utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/deepMerge.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js");
/* harmony import */ var _utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/makeCancelable.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js");








/** the local state of the module */

var _state$create = state_local__WEBPACK_IMPORTED_MODULE_1__.default.create({
  config: _config_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.slicedToArray)(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function config(config) {
  setState(function (state) {
    return {
      config: (0,_utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__.default)(state.config, _validators_index_js__WEBPACK_IMPORTED_MODULE_3__.default.config(config))
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized: isInitialized
    };
  });

  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__.default)(Promise.resolve(window.monaco));
    }

    (0,_utils_compose_js__WEBPACK_IMPORTED_MODULE_4__.default)(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }

  return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__.default)(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/compose.js":
/*!********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/compose.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/curry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/curry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curry);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");


function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)({}, target), source);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/isObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/isObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "CANCELATION_MESSAGE": () => /* binding */ CANCELATION_MESSAGE
/* harmony export */ });
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCancelable);



/***/ }),

/***/ "./node_modules/@monaco-editor/loader/lib/es/validators/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@monaco-editor/loader/lib/es/validators/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "errorHandler": () => /* binding */ errorHandler,
/* harmony export */   "errorMessages": () => /* binding */ errorMessages
/* harmony export */ });
/* harmony import */ var _utils_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/curry.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/curry.js");
/* harmony import */ var _utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isObject.js */ "./node_modules/@monaco-editor/loader/lib/es/utils/isObject.js");



/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler('configIsRequired');
  if (!(0,_utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__.default)(config)) errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = (0,_utils_curry_js__WEBPACK_IMPORTED_MODULE_0__.default)(throwError)(errorMessages);
var validators = {
  config: validateConfig
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validators);



/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ "./node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MonacoContainer/index.js */ "./node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js");
/* harmony import */ var _hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useMount/index.js */ "./node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");
/* harmony import */ var _hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useUpdate/index.js */ "./node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@monaco-editor/react/lib/es/utils/index.js");








function DiffEditor({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,

  /* === */
  originalModelPath,
  modifiedModelPath,
  theme,
  loading,
  options,

  /* === */
  height,
  width,
  className,
  wrapperClassName,

  /* === */
  beforeMount,
  onMount
}) {
  const [isEditorReady, setIsEditorReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const monacoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onMount);
  const beforeMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(beforeMount);
  (0,_hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(() => {
    const cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__.default.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    editorRef.current.getModel().modified.setValue(modified);
  }, [modified], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    const {
      original,
      modified
    } = editorRef.current.getModel();
    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  const setModels = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    beforeMountRef.current(monacoRef.current);
    const originalModel = monacoRef.current.editor.createModel(original, originalLanguage || language, originalModelPath && monacoRef.current.Uri.parse(originalModelPath));
    const modifiedModel = monacoRef.current.editor.createModel(modified, modifiedLanguage || language, modifiedModelPath && monacoRef.current.Uri.parse(modifiedModelPath));
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);
  const createEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options
    });
    setModels();
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [options, theme, setModels]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  const disposeEditor = () => {
    var _models$original, _models$modified;

    const models = editorRef.current.getModel();
    (_models$original = models.original) === null || _models$original === void 0 ? void 0 : _models$original.dispose();
    (_models$modified = models.modified) === null || _models$modified === void 0 ? void 0 : _models$modified.dispose();
    editorRef.current.dispose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__.default, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperClassName: wrapperClassName
  });
}

DiffEditor.propTypes = {
  original: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  modified: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  language: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  originalLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  modifiedLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /* === */
  originalModelPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  modifiedModelPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /* === */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  wrapperClassName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /* === */
  beforeMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
DiffEditor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},

  /* === */
  width: '100%',
  height: '100%',

  /* === */
  beforeMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop,
  onMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiffEditor);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DiffEditor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiffEditor.js */ "./node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js");



var index = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_DiffEditor_js__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/Editor/Editor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/Editor/Editor.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ "./node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MonacoContainer/index.js */ "./node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js");
/* harmony import */ var _hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useMount/index.js */ "./node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");
/* harmony import */ var _hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useUpdate/index.js */ "./node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@monaco-editor/react/lib/es/utils/index.js");
/* harmony import */ var state_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! state-local */ "./node_modules/state-local/lib/es/state-local.js");
/* harmony import */ var _hooks_usePrevious_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/usePrevious/index.js */ "./node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js");










const [getModelMarkersSetter, setModelMarkersSetter] = state_local__WEBPACK_IMPORTED_MODULE_7__.default.create({
  backup: null
});
const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,

  /* === */
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,

  /* === */
  width,
  height,
  className,
  wrapperClassName,

  /* === */
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const monacoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onMount);
  const beforeMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(beforeMount);
  const subscriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value);
  const previousPath = (0,_hooks_usePrevious_index_js__WEBPACK_IMPORTED_MODULE_8__.default)(path);
  (0,_hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(() => {
    const cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__.default.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    const model = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    editorRef.current.revealLine(line);
  }, [line], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    beforeMountRef.current(monacoRef.current);
    const autoCreatedModelPath = path || defaultPath;
    const defaultModel = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      model: defaultModel,
      automaticLayout: true,
      ...options
    }, overrideServices);
    saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
    monacoRef.current.editor.setTheme(theme);

    if (!getModelMarkersSetter().backup) {
      setModelMarkersSetter({
        backup: monacoRef.current.editor.setModelMarkers
      });
    }

    setIsEditorReady(true);
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription

  valueRef.current = value;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;

      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
        const editorValue = editorRef.current.getValue();

        if (valueRef.current !== editorValue) {
          onChange(editorValue, event);
        }
      });
    }
  }, [isEditorReady, onChange]); // onValidate

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady) {
      monacoRef.current.editor.setModelMarkers = function (model, owner, markers) {
        var _getModelMarkersSette;

        (_getModelMarkersSette = getModelMarkersSetter().backup) === null || _getModelMarkersSette === void 0 ? void 0 : _getModelMarkersSette.call(monacoRef.current.editor, model, owner, markers);
        onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
      };
    }
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    var _subscriptionRef$curr2;

    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge;

      (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__.default, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperClassName: wrapperClassName
  });
}

Editor.propTypes = {
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  defaultPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  defaultLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  language: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  path: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /* === */
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  line: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  overrideServices: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  saveViewState: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  keepCurrentModel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /* === */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  wrapperClassName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /* === */
  beforeMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onValidate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
Editor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,

  /* === */
  width: '100%',
  height: '100%',

  /* === */
  beforeMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop,
  onMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop,
  onValidate: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/Editor/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/Editor/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.js */ "./node_modules/@monaco-editor/react/lib/es/Editor/Editor.js");



var index = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Editor_js__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/Loading/Loading.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/Loading/Loading.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading({
  content
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: loadingStyles
  }, content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_Loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loading/Loading.js */ "./node_modules/@monaco-editor/react/lib/es/Loading/Loading.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.js */ "./node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js");





// one of the reasons why we use a separate prop for passing ref instead of using forwardref

function MonacoContainer({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperClassName
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: { ..._styles_js__WEBPACK_IMPORTED_MODULE_3__.default.wrapper,
      width,
      height
    },
    className: wrapperClassName
  }, !isEditorReady && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Loading_Loading_js__WEBPACK_IMPORTED_MODULE_2__.default, {
    content: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: _ref,
    style: { ..._styles_js__WEBPACK_IMPORTED_MODULE_3__.default.fullWidth,
      ...(!isEditorReady && _styles_js__WEBPACK_IMPORTED_MODULE_3__.default.hide)
    },
    className: className
  }));
}

MonacoContainer.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired,
  isEditorReady: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  wrapperClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoContainer);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MonacoContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MonacoContainer.js */ "./node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js");



var MonacoContainer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_MonacoContainer_js__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoContainer);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ "./node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMount_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useMount/index.js */ "./node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");




function useMonaco() {
  const [monaco, setMonaco] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__.default.__getMonacoInstance());
  (0,_useMount_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(() => {
    let cancelable;

    if (!monaco) {
      cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__.default.init();
      cancelable.then(monaco => {
        setMonaco(monaco);
      });
    }

    return () => {
      var _cancelable;

      return (_cancelable = cancelable) === null || _cancelable === void 0 ? void 0 : _cancelable.cancel();
    };
  });
  return monaco;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMonaco);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useMount(effect) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, []);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePrevious);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdate);


/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loader": () => /* reexport safe */ _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "DiffEditor": () => /* reexport safe */ _DiffEditor_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "useMonaco": () => /* reexport safe */ _hooks_useMonaco_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "default": () => /* reexport safe */ _Editor_index_js__WEBPACK_IMPORTED_MODULE_3__.default
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ "./node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var _DiffEditor_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiffEditor/index.js */ "./node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js");
/* harmony import */ var _hooks_useMonaco_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useMonaco/index.js */ "./node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js");
/* harmony import */ var _Editor_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Editor/index.js */ "./node_modules/@monaco-editor/react/lib/es/Editor/index.js");






/***/ }),

/***/ "./node_modules/@monaco-editor/react/lib/es/utils/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@monaco-editor/react/lib/es/utils/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateModel": () => /* binding */ getOrCreateModel,
/* harmony export */   "noop": () => /* binding */ noop
/* harmony export */ });
function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco.editor.getModel(crateModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && crateModelUri(monaco, path));
}

function crateModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}




/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/state-local/lib/es/state-local.js":
/*!********************************************************!*\
  !*** ./node_modules/state-local/lib/es/state-local.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./src/components/JdMonacoEditor.tsx":
/*!*******************************************!*\
  !*** ./src/components/JdMonacoEditor.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_CustomElementWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CustomElementWrapper */ "./src/utils/CustomElementWrapper.tsx");
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monaco-editor/react */ "./node_modules/@monaco-editor/react/lib/es/index.js");



const JdMonacoEditor = ({ document, fieldValue, template, fieldName, formParameters, key, responsiveLayouts, message, componentDefinition }) => {
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (fieldValue) {
            setValue(fieldValue);
        }
        else if (componentDefinition.defaultValue) {
            setValue(componentDefinition.defaultValue);
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.default, { height: "90vh", onChange: () => { }, defaultLanguage: "javascript", defaultValue: "// some comment" }));
};
// register the component as a custom element so it can be shown in formbird
(0,_utils_CustomElementWrapper__WEBPACK_IMPORTED_MODULE_1__.convertToCustomElement)('jd-monaco-editor', JdMonacoEditor);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JdMonacoEditor);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_JdMonacoEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/JdMonacoEditor */ "./src/components/JdMonacoEditor.tsx");



/***/ }),

/***/ "./src/utils/CustomElementWrapper.tsx":
/*!********************************************!*\
  !*** ./src/utils/CustomElementWrapper.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToCustomElement": () => /* binding */ convertToCustomElement
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


const convertToCustomElement = (name, Component) => {
    class FtWrapper extends HTMLElement {
        connectedCallback() {
            let componentProps = {};
            this.mountPoint = document.createElement('div');
            this.appendChild(this.mountPoint);
            if (!this.fieldValue && this.componentDefinition.defaultValue) {
                this.fieldValue = this.componentDefinition.defaultValue;
            }
            if (this.componentDefinition.componentProps) {
                componentProps = {
                    template: this.template,
                    document: this.document
                };
            }
            react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, Object.assign({}, {
                document: this.document,
                fieldValue: this.fieldValue,
                template: this.template,
                fieldName: this.fieldName,
                formParameters: this.formParameters,
                key: this.key,
                responsiveLayout: this.responsiveLayouts,
                message: this.message,
                componentDefinition: this.componentDefinition,
                componentProps
            })), this.mountPoint);
        }
    }
    customElements.define(name, FtWrapper);
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=jd-monaco-editor.js.map