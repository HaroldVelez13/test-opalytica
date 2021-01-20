module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/molecules/OrderListCreate.jsx":
/*!**************************************************!*\
  !*** ./components/molecules/OrderListCreate.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/src/website/components/molecules/OrderListCreate.jsx\";\n\n\nconst OrderListCreate = ({\n  order\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n    href: \"/orders/create/\",\n    className: \"link\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      body: true,\n      className: \"text-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CardTitle\"], {\n        tag: \"h5\",\n        children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: \"fas fa-plus-circle\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 30\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CardText\"], {\n        children: \"Create new Order\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderListCreate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9PcmRlckxpc3RDcmVhdGUuanN4P2I0MmEiXSwibmFtZXMiOlsiT3JkZXJMaXN0Q3JlYXRlIiwib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUNyQyxzQkFDSTtBQUFHLFFBQUksRUFBQyxpQkFBUjtBQUEwQixhQUFTLEVBQUMsTUFBcEM7QUFBQSwyQkFDQSxxRUFBQywrQ0FBRDtBQUFNLFVBQUksTUFBVjtBQUFXLGVBQVMsRUFBQyxhQUFyQjtBQUFBLDhCQUNFLHFFQUFDLG9EQUFEO0FBQVcsV0FBRyxFQUFDLElBQWY7QUFBQSxxQ0FBcUI7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBVUQsQ0FYRDs7QUFlZUQsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9PcmRlckxpc3RDcmVhdGUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgIENhcmRUaXRsZSwgQ2FyZFRleHQgIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY29uc3QgT3JkZXJMaXN0Q3JlYXRlID0gKHsgb3JkZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj1cIi9vcmRlcnMvY3JlYXRlL1wiIGNsYXNzTmFtZT1cImxpbmtcIj5cbiAgICAgIDxDYXJkIGJvZHkgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGVcIj48L2k+PC9DYXJkVGl0bGU+XG4gICAgICAgIDxDYXJkVGV4dD5cbiAgICAgICAgICBDcmVhdGUgbmV3IE9yZGVyXG4gICAgICAgIDwvQ2FyZFRleHQ+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8L2E+XG4gICk7XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJMaXN0Q3JlYXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecules/OrderListCreate.jsx\n");

/***/ }),

/***/ "./components/molecules/OrderListItem.jsx":
/*!************************************************!*\
  !*** ./components/molecules/OrderListItem.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-number-format */ \"react-number-format\");\n/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/src/website/components/molecules/OrderListItem.jsx\";\n\n\n\nconst OrderListItem = ({\n  order\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    body: true,\n    className: \"pointer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CardTitle\"], {\n      tag: \"h5\",\n      children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Company - \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 30\n      }, undefined), \" \", order.company]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"CardText\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Quantity - \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_number_format__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        value: order.quantity,\n        displayType: \"text\",\n        thousandSeparator: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderListItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9PcmRlckxpc3RJdGVtLmpzeD9mODdlIl0sIm5hbWVzIjpbIk9yZGVyTGlzdEl0ZW0iLCJvcmRlciIsImNvbXBhbnkiLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUNuQyxzQkFFSSxxRUFBQywrQ0FBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsRUFBQyxTQUFyQjtBQUFBLDRCQUNFLHFFQUFDLG9EQUFEO0FBQVcsU0FBRyxFQUFDLElBQWY7QUFBQSxtQ0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXJCLE9BQWtEQSxLQUFLLENBQUNDLE9BQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLG1EQUFEO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFRSxxRUFBQywwREFBRDtBQUNFLGFBQUssRUFBRUQsS0FBSyxDQUFDRSxRQURmO0FBRUUsbUJBQVcsRUFBRSxNQUZmO0FBR0UseUJBQWlCLEVBQUU7QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFjRCxDQWZEOztBQW1CZUgsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9PcmRlckxpc3RJdGVtLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsICBDYXJkVGl0bGUsIENhcmRUZXh0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcblxuY29uc3QgT3JkZXJMaXN0SXRlbSA9ICh7IG9yZGVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBcbiAgICAgIDxDYXJkIGJvZHkgY2xhc3NOYW1lPVwicG9pbnRlclwiPlxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+IDxzdHJvbmc+Q29tcGFueSAtIDwvc3Ryb25nPiB7b3JkZXIuY29tcGFueX08L0NhcmRUaXRsZT5cbiAgICAgICAgPENhcmRUZXh0PlxuICAgICAgICA8c3Ryb25nPlF1YW50aXR5IC0gPC9zdHJvbmc+XG4gICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgdmFsdWU9e29yZGVyLnF1YW50aXR5fVxuICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkVGV4dD5cbiAgICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckxpc3RJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecules/OrderListItem.jsx\n");

/***/ }),

/***/ "./components/organisms/OrderList.jsx":
/*!********************************************!*\
  !*** ./components/organisms/OrderList.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OrderList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _molecules_OrderListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/OrderListItem */ \"./components/molecules/OrderListItem.jsx\");\n/* harmony import */ var _molecules_OrderListCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/OrderListCreate */ \"./components/molecules/OrderListCreate.jsx\");\n\nvar _jsxFileName = \"/src/website/components/organisms/OrderList.jsx\";\n\n\n\nfunction OrderList({\n  orders\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: \"12\",\n      md: \"6\",\n      lg: \"4\",\n      className: \"my-2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_molecules_OrderListCreate__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this), orders.map(order => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: \"12\",\n      md: \"6\",\n      lg: \"4\",\n      className: \"my-2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: `/orders/${order.pk}`,\n        className: \"link\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_molecules_OrderListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          order: order\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }, this)\n    }, order.pk, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, this))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9PcmRlckxpc3QuanN4PzYxZTIiXSwibmFtZXMiOlsiT3JkZXJMaXN0Iiwib3JkZXJzIiwibWFwIiwib3JkZXIiLCJwayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFNBQVQsQ0FBbUI7QUFBRUM7QUFBRixDQUFuQixFQUErQjtBQUM1QyxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNJLHFFQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFDLElBQVI7QUFBYSxRQUFFLEVBQUMsR0FBaEI7QUFBb0IsUUFBRSxFQUFDLEdBQXZCO0FBQTJCLGVBQVMsRUFBQyxNQUFyQztBQUFBLDZCQUNBLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFLR0EsTUFBTSxDQUFDQyxHQUFQLENBQVlDLEtBQUQsaUJBQ1YscUVBQUMsOENBQUQ7QUFBb0IsUUFBRSxFQUFDLElBQXZCO0FBQTRCLFFBQUUsRUFBQyxHQUEvQjtBQUFtQyxRQUFFLEVBQUMsR0FBdEM7QUFBMEMsZUFBUyxFQUFDLE1BQXBEO0FBQUEsNkJBQ0k7QUFBRyxZQUFJLEVBQUcsV0FBVUEsS0FBSyxDQUFDQyxFQUFHLEVBQTdCO0FBQWdDLGlCQUFTLEVBQUMsTUFBMUM7QUFBQSwrQkFDQSxxRUFBQyxnRUFBRDtBQUFlLGVBQUssRUFBRUQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUFVQSxLQUFLLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9PcmRlckxpc3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IE9yZGVyTGlzdEl0ZW0gZnJvbSAnLi4vbW9sZWN1bGVzL09yZGVyTGlzdEl0ZW0nXG5pbXBvcnQgT3JkZXJMaXN0Q3JlYXRlIGZyb20gJy4uL21vbGVjdWxlcy9PcmRlckxpc3RDcmVhdGUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyTGlzdCh7IG9yZGVycyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgICAgPENvbCBzbT0nMTInIG1kPSc2JyBsZz0nNCcgY2xhc3NOYW1lPSdteS0yJz5cbiAgICAgICAgPE9yZGVyTGlzdENyZWF0ZSAvPlxuXG4gICAgICAgIDwvQ29sPlxuICAgICAge29yZGVycy5tYXAoKG9yZGVyKSA9PiAoXG4gICAgICAgIDxDb2wga2V5PXtvcmRlci5wa30gc209JzEyJyBtZD0nNicgbGc9JzQnIGNsYXNzTmFtZT0nbXktMic+XG4gICAgICAgICAgICA8YSBocmVmPXtgL29yZGVycy8ke29yZGVyLnBrfWB9IGNsYXNzTmFtZT1cImxpbmtcIiA+XG4gICAgICAgICAgICA8T3JkZXJMaXN0SXRlbSBvcmRlcj17b3JkZXJ9Lz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Db2w+XG4gICAgICApKX1cbiAgICA8L1Jvdz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/organisms/OrderList.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_organisms_OrderList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/organisms/OrderList */ \"./components/organisms/OrderList.jsx\");\n\nvar _jsxFileName = \"/src/website/pages/index.js\";\n\n\n\nfunction Orders({\n  orders\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Opatlytica - Orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_organisms_OrderList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      orders: orders\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\nOrders.getInitialProps = async ctx => {\n  let url = `${\"http://backend:8000/api/v1\"}/orders/`;\n  const res = await fetch(url);\n  const orders = await res.json();\n  return {\n    orders: orders\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk9yZGVycyIsIm9yZGVycyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInVybCIsInByb2Nlc3MiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCO0FBQUNDO0FBQUQsQ0FBaEIsRUFBMEI7QUFDeEIsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsdUVBQUQ7QUFBVyxZQUFNLEVBQUVBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVERCxNQUFNLENBQUNFLGVBQVAsR0FBeUIsTUFBT0MsR0FBUCxJQUFlO0FBQ3RDLE1BQUlDLEdBQUcsR0FBSSxHQUFFQyw0QkFBb0IsVUFBakM7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFELENBQXZCO0FBQ0EsUUFBTUgsTUFBTSxHQUFHLE1BQU1LLEdBQUcsQ0FBQ0UsSUFBSixFQUFyQjtBQUNBLFNBQU87QUFBRVAsVUFBTSxFQUFDQTtBQUFULEdBQVA7QUFDRCxDQUxEOztBQU9lRCxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE9yZGVyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9PcmRlckxpc3QnO1xuXG5mdW5jdGlvbiBPcmRlcnMoe29yZGVyc30pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T3BhdGx5dGljYSAtIE9yZGVyczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+ICAgXG4gICAgICA8T3JkZXJMaXN0IG9yZGVycz17b3JkZXJzfS8+ICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuT3JkZXJzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgbGV0IHVybCA9IGAke3Byb2Nlc3MuZW52LlVSTF9BUEl9L29yZGVycy9gO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXG4gIGNvbnN0IG9yZGVycyA9IGF3YWl0IHJlcy5qc29uKClcbiAgcmV0dXJuIHsgb3JkZXJzOm9yZGVycyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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