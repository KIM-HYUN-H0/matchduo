webpackHotUpdate_N_E("pages/main",{

/***/ "./pages/main.tsx":
/*!************************!*\
  !*** ./pages/main.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");




var _jsxFileName = "C:\\Users\\gusgh\\project\\fullstack\\matchduo\\pages\\main.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var top100Films = [{
  title: '롤',
  idx: 20
}, {
  title: '리그 오브 레전드',
  idx: 20
}, {
  title: 'lol',
  idx: 20
}, {
  title: '피파온라인4',
  idx: 19
}, {
  title: '피파',
  idx: 19
}, {
  title: "메이플스토리",
  idx: 18
}, {
  title: '던파',
  idx: 17
}, {
  title: '던전앤파이터',
  idx: 17
}];
var defaultProps = {
  options: top100Films,
  getOptionLabel: function getOptionLabel(option) {
    return option.title;
  }
};
var flatProps = {
  options: top100Films.map(function (option) {
    return option.title;
  })
};

var Main = function Main() {
  var test = function test(e) {
    console.log(e.target);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "game",
      debug: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "\uAC8C\uC784 \uCC3E\uAE30",
          margin: "normal",
          onChange: function onChange(e) {
            return test(e);
          }
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this);
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsImRlZmF1bHRQcm9wcyIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9wdGlvbiIsImZsYXRQcm9wcyIsIm1hcCIsIk1haW4iLCJ0ZXN0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FDaEI7QUFBRUMsT0FBSyxFQUFFLEdBQVQ7QUFBY0MsS0FBRyxFQUFFO0FBQW5CLENBRGdCLEVBRWhCO0FBQUVELE9BQUssRUFBRSxXQUFUO0FBQXNCQyxLQUFHLEVBQUc7QUFBNUIsQ0FGZ0IsRUFHaEI7QUFBRUQsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLEtBQUcsRUFBRztBQUF0QixDQUhnQixFQUloQjtBQUFFRCxPQUFLLEVBQUUsUUFBVDtBQUFtQkMsS0FBRyxFQUFHO0FBQXpCLENBSmdCLEVBS2hCO0FBQUVELE9BQUssRUFBRSxJQUFUO0FBQWVDLEtBQUcsRUFBRztBQUFyQixDQUxnQixFQU1oQjtBQUFFRCxPQUFLLEVBQUUsUUFBVDtBQUFtQkMsS0FBRyxFQUFHO0FBQXpCLENBTmdCLEVBT2hCO0FBQUVELE9BQUssRUFBRSxJQUFUO0FBQWVDLEtBQUcsRUFBRztBQUFyQixDQVBnQixFQVFoQjtBQUFFRCxPQUFLLEVBQUUsUUFBVDtBQUFtQkMsS0FBRyxFQUFHO0FBQXpCLENBUmdCLENBQXBCO0FBV0EsSUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUVKLFdBRFE7QUFFakJLLGdCQUFjLEVBQUUsd0JBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNMLEtBQW5CO0FBQUE7QUFGQyxDQUFyQjtBQUtFLElBQU1NLFNBQVMsR0FBRztBQUNoQkgsU0FBTyxFQUFFSixXQUFXLENBQUNRLEdBQVosQ0FBZ0IsVUFBQ0YsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0wsS0FBbkI7QUFBQSxHQUFoQjtBQURPLENBQWxCOztBQUlGLElBQU1RLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQU87QUFDaEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQWQ7QUFDSCxHQUZEOztBQUdGLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMscUVBQUQsa0NBQ01YLFlBRE47QUFFRSxRQUFFLEVBQUMsTUFGTDtBQUdFLFdBQUssTUFIUDtBQUlFLGlCQUFXLEVBQUUscUJBQUNZLE1BQUQ7QUFBQSw0QkFDWCxxRUFBQyxtRUFBRCxrQ0FBZUEsTUFBZjtBQUNBLGVBQUssRUFBQywyQkFETjtBQUVBLGdCQUFNLEVBQUMsUUFGUDtBQUdBLGtCQUFRLEVBQUUsa0JBQUFKLENBQUM7QUFBQSxtQkFBSUQsSUFBSSxDQUFDQyxDQUFELENBQVI7QUFBQTtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQTtBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWVELENBbkJEOztLQUFNRixJO0FBc0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjAxODA0NDYzMmY1ZDQyYmJmYTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcblxyXG5jb25zdCB0b3AxMDBGaWxtcyA9IFtcclxuICAgIHsgdGl0bGU6ICfroaQnLCBpZHg6IDIwIH0sXHJcbiAgICB7IHRpdGxlOiAn66as6re4IOyYpOu4jCDroIjsoITrk5wnLCBpZHggOiAyMCB9LFxyXG4gICAgeyB0aXRsZTogJ2xvbCcsIGlkeCA6IDIwIH0sXHJcbiAgICB7IHRpdGxlOiAn7ZS87YyM7Jio65287J24NCcsIGlkeCA6IDE5IH0sXHJcbiAgICB7IHRpdGxlOiAn7ZS87YyMJywgaWR4IDogMTkgfSxcclxuICAgIHsgdGl0bGU6IFwi66mU7J207ZSM7Iqk7Yag66asXCIsIGlkeCA6IDE4IH0sXHJcbiAgICB7IHRpdGxlOiAn642Y7YyMJywgaWR4IDogMTcgfSxcclxuICAgIHsgdGl0bGU6ICfrjZjsoITslaTtjIzsnbTthLAnLCBpZHggOiAxNyB9LFxyXG4gIF07XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvcHRpb25zOiB0b3AxMDBGaWxtcyxcclxuICAgIGdldE9wdGlvbkxhYmVsOiAob3B0aW9uKSA9PiBvcHRpb24udGl0bGUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmxhdFByb3BzID0ge1xyXG4gICAgb3B0aW9uczogdG9wMTAwRmlsbXMubWFwKChvcHRpb24pID0+IG9wdGlvbi50aXRsZSksXHJcbiAgfTtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXN0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgIHsuLi5kZWZhdWx0UHJvcHN9XHJcbiAgICAgICAgaWQ9XCJnYW1lXCJcclxuICAgICAgICBkZWJ1Z1xyXG4gICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IFxyXG4gICAgICAgICAgbGFiZWw9XCLqsozsnoQg7LC+6riwXCIgXHJcbiAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIiBcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRlc3QoZSl9Lz5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9