module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/orders/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/molecules/OrderListItem.jsx":
/*!************************************************!*\
  !*** ./components/molecules/OrderListItem.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-number-format */ \"react-number-format\");\n/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/src/website/components/molecules/OrderListItem.jsx\";\n\n\n\nconst OrderListItem = ({\n  order\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    body: true,\n    className: \"pointer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CardTitle\"], {\n      tag: \"h5\",\n      children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Company - \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 30\n      }, undefined), \" \", order.company]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CardText\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Quantity - \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_number_format__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        value: order.quantity,\n        displayType: \"text\",\n        thousandSeparator: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderListItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9PcmRlckxpc3RJdGVtLmpzeD9mODdlIl0sIm5hbWVzIjpbIk9yZGVyTGlzdEl0ZW0iLCJvcmRlciIsImNvbXBhbnkiLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUNuQyxzQkFFSSxxRUFBQywrQ0FBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsRUFBQyxTQUFyQjtBQUFBLDRCQUNFLHFFQUFDLG9EQUFEO0FBQVcsU0FBRyxFQUFDLElBQWY7QUFBQSxtQ0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXJCLE9BQWtEQSxLQUFLLENBQUNDLE9BQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLG1EQUFEO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFRSxxRUFBQywwREFBRDtBQUNFLGFBQUssRUFBRUQsS0FBSyxDQUFDRSxRQURmO0FBRUUsbUJBQVcsRUFBRSxNQUZmO0FBR0UseUJBQWlCLEVBQUU7QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFjRCxDQWZEOztBQW1CZUgsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9PcmRlckxpc3RJdGVtLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsICBDYXJkVGl0bGUsIENhcmRUZXh0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcblxuY29uc3QgT3JkZXJMaXN0SXRlbSA9ICh7IG9yZGVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBcbiAgICAgIDxDYXJkIGJvZHkgY2xhc3NOYW1lPVwicG9pbnRlclwiPlxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+IDxzdHJvbmc+Q29tcGFueSAtIDwvc3Ryb25nPiB7b3JkZXIuY29tcGFueX08L0NhcmRUaXRsZT5cbiAgICAgICAgPENhcmRUZXh0PlxuICAgICAgICA8c3Ryb25nPlF1YW50aXR5IC0gPC9zdHJvbmc+XG4gICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgdmFsdWU9e29yZGVyLnF1YW50aXR5fVxuICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkVGV4dD5cbiAgICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckxpc3RJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecules/OrderListItem.jsx\n");

/***/ }),

/***/ "./components/molecules/ProcessListItem.jsx":
/*!**************************************************!*\
  !*** ./components/molecules/ProcessListItem.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/src/website/components/molecules/ProcessListItem.jsx\";\n\n\nconst ProcessListItem = ({\n  process\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    body: true,\n    className: \"pointer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CardTitle\"], {\n      tag: \"h5\",\n      children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Process - \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 30\n      }, undefined), \" \", process.name.replace('_', ' ')]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CardText\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Quantity - \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessListItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9Qcm9jZXNzTGlzdEl0ZW0uanN4PzQ5MWYiXSwibmFtZXMiOlsiUHJvY2Vzc0xpc3RJdGVtIiwicHJvY2VzcyIsIm5hbWUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQ3ZDLHNCQUVJLHFFQUFDLCtDQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxFQUFDLFNBQXJCO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBVyxTQUFHLEVBQUMsSUFBZjtBQUFBLG1DQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBckIsT0FBa0RBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxPQUFiLENBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLENBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLG1EQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBU0QsQ0FWRDs7QUFjZUgsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9Qcm9jZXNzTGlzdEl0ZW0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgIENhcmRUaXRsZSwgQ2FyZFRleHQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jb25zdCBQcm9jZXNzTGlzdEl0ZW0gPSAoeyBwcm9jZXNzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBcbiAgICAgIDxDYXJkIGJvZHkgY2xhc3NOYW1lPVwicG9pbnRlclwiPlxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+IDxzdHJvbmc+UHJvY2VzcyAtIDwvc3Ryb25nPiB7cHJvY2Vzcy5uYW1lLnJlcGxhY2UoJ18nLCcgJyl9PC9DYXJkVGl0bGU+XG4gICAgICAgIDxDYXJkVGV4dD5cbiAgICAgICAgICA8c3Ryb25nPlF1YW50aXR5IC0gPC9zdHJvbmc+ICAgICAgICAgIFxuICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgPC9DYXJkPlxuICApO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NMaXN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/ProcessListItem.jsx\n");

/***/ }),

/***/ "./pages/orders/[id].js":
/*!******************************!*\
  !*** ./pages/orders/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_molecules_OrderListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/molecules/OrderListItem */ \"./components/molecules/OrderListItem.jsx\");\n/* harmony import */ var _components_molecules_ProcessListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/molecules/ProcessListItem */ \"./components/molecules/ProcessListItem.jsx\");\n\nvar _jsxFileName = \"/src/website/pages/orders/[id].js\";\n\n\n\n\n\nfunction OrderDetail({\n  order\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Opatlytica - Order Detail\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n      className: \"row justify-content-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n        sm: \"12\",\n        md: \"4\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: `/`,\n          className: \"link\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_molecules_OrderListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            order: order\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n        sm: \"12\",\n        md: \"6\",\n        className: \"mr-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n          children: order.process.map(proc => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n            xs: \"12\",\n            className: \"my-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_molecules_ProcessListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              process: proc\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 17\n            }, this), \" \"]\n          }, proc.pk, true, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, this))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\nOrderDetail.getInitialProps = async ctx => {\n  let id = ctx.query.id;\n\n  if (id) {\n    let url = `${\"http://backend:8000/api/v1\"}/orders/${id}/`;\n    const res = await fetch(url);\n    const order = await res.json();\n    return {\n      order: order\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vcmRlcnMvLmpzPzM5NmEiXSwibmFtZXMiOlsiT3JkZXJEZXRhaWwiLCJvcmRlciIsInByb2Nlc3MiLCJtYXAiLCJwcm9jIiwicGsiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJpZCIsInF1ZXJ5IiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUM7QUFBRixDQUFyQixFQUFnQztBQUM5QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyw4Q0FBRDtBQUFLLGVBQVMsRUFBQyw2QkFBZjtBQUFBLDhCQUNFLHFFQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDLElBQVI7QUFBYSxVQUFFLEVBQUMsR0FBaEI7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBRyxHQUFWO0FBQWMsbUJBQVMsRUFBQyxNQUF4QjtBQUFBLGlDQUNFLHFFQUFDLDJFQUFEO0FBQWUsaUJBQUssRUFBRUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSxxRUFBQyw4Q0FBRDtBQUFLLFVBQUUsRUFBQyxJQUFSO0FBQWEsVUFBRSxFQUFDLEdBQWhCO0FBQW9CLGlCQUFTLEVBQUMsTUFBOUI7QUFBQSwrQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLG9CQUNHQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsR0FBZCxDQUFtQkMsSUFBRCxpQkFDakIscUVBQUMsOENBQUQ7QUFBSyxjQUFFLEVBQUMsSUFBUjtBQUFhLHFCQUFTLEVBQUMsTUFBdkI7QUFBQSxvQ0FDRSxxRUFBQyw2RUFBRDtBQUFpQixxQkFBTyxFQUFFQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBQ3FDLEdBRHJDO0FBQUEsYUFBbUNBLElBQUksQ0FBQ0MsRUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0FBRURMLFdBQVcsQ0FBQ00sZUFBWixHQUE4QixNQUFPQyxHQUFQLElBQWU7QUFDM0MsTUFBSUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFBbkI7O0FBQ0EsTUFBSUEsRUFBSixFQUFRO0FBQ04sUUFBSUUsR0FBRyxHQUFJLEdBQUVSLDRCQUFvQixXQUFVTSxFQUFHLEdBQTlDO0FBQ0EsVUFBTUcsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUF2QjtBQUNBLFVBQU1ULEtBQUssR0FBRyxNQUFNVSxHQUFHLENBQUNFLElBQUosRUFBcEI7QUFDQSxXQUFPO0FBQUVaLFdBQUssRUFBRUE7QUFBVCxLQUFQO0FBQ0Q7QUFDRixDQVJEOztBQVVlRCwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL29yZGVycy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IE9yZGVyTGlzdEl0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL09yZGVyTGlzdEl0ZW1cIjtcbmltcG9ydCBQcm9jZXNzTGlzdEl0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1Byb2Nlc3NMaXN0SXRlbVwiO1xuXG5mdW5jdGlvbiBPcmRlckRldGFpbCh7IG9yZGVyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5PcGF0bHl0aWNhIC0gT3JkZXIgRGV0YWlsPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiNFwiPlxuICAgICAgICAgIDxhIGhyZWY9e2AvYH0gY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgICAgPE9yZGVyTGlzdEl0ZW0gb3JkZXI9e29yZGVyfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiNlwiIGNsYXNzTmFtZT1cIm1yLTVcIj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAge29yZGVyLnByb2Nlc3MubWFwKChwcm9jKSA9PiAoXG4gICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGNsYXNzTmFtZT1cIm15LTJcIiBrZXk9e3Byb2MucGt9PlxuICAgICAgICAgICAgICAgIDxQcm9jZXNzTGlzdEl0ZW0gcHJvY2Vzcz17cHJvY30gLz57XCIgXCJ9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbk9yZGVyRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgbGV0IGlkID0gY3R4LnF1ZXJ5LmlkO1xuICBpZiAoaWQpIHtcbiAgICBsZXQgdXJsID0gYCR7cHJvY2Vzcy5lbnYuVVJMX0FQSX0vb3JkZXJzLyR7aWR9L2A7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBvcmRlciA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHsgb3JkZXI6IG9yZGVyIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/orders/[id].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-number-format\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1udW1iZXItZm9ybWF0XCI/NDJmYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1udW1iZXItZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-number-format\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ })

/******/ });