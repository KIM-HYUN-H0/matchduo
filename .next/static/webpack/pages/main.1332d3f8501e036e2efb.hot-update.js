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
  var test = function test(e, v) {
    console.log(e, v);
  };

  var test2 = function test2(value) {
    console.log(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "game",
      debug: true,
      onChange: test(),
      onInputChange: test2(),
      renderInput: function renderInput(params) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "\uAC8C\uC784 \uCC3E\uAE30",
          margin: "normal"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this);
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsImRlZmF1bHRQcm9wcyIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9wdGlvbiIsImZsYXRQcm9wcyIsIm1hcCIsIk1haW4iLCJ0ZXN0IiwiZSIsInYiLCJjb25zb2xlIiwibG9nIiwidGVzdDIiLCJ2YWx1ZSIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNoQjtBQUFFQyxPQUFLLEVBQUUsR0FBVDtBQUFjQyxLQUFHLEVBQUU7QUFBbkIsQ0FEZ0IsRUFFaEI7QUFBRUQsT0FBSyxFQUFFLFdBQVQ7QUFBc0JDLEtBQUcsRUFBRztBQUE1QixDQUZnQixFQUdoQjtBQUFFRCxPQUFLLEVBQUUsS0FBVDtBQUFnQkMsS0FBRyxFQUFHO0FBQXRCLENBSGdCLEVBSWhCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUc7QUFBekIsQ0FKZ0IsRUFLaEI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsS0FBRyxFQUFHO0FBQXJCLENBTGdCLEVBTWhCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUc7QUFBekIsQ0FOZ0IsRUFPaEI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsS0FBRyxFQUFHO0FBQXJCLENBUGdCLEVBUWhCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUc7QUFBekIsQ0FSZ0IsQ0FBcEI7QUFXQSxJQUFNQyxZQUFZLEdBQUc7QUFDakJDLFNBQU8sRUFBRUosV0FEUTtBQUVqQkssZ0JBQWMsRUFBRSx3QkFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0wsS0FBbkI7QUFBQTtBQUZDLENBQXJCO0FBS0UsSUFBTU0sU0FBUyxHQUFHO0FBQ2hCSCxTQUFPLEVBQUVKLFdBQVcsQ0FBQ1EsR0FBWixDQUFnQixVQUFDRixNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDTCxLQUFuQjtBQUFBLEdBQWhCO0FBRE8sQ0FBbEI7O0FBSUYsSUFBTVEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUVmLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ25CQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBWixFQUFlQyxDQUFmO0FBQ0gsR0FGRDs7QUFHQSxNQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDckJILFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0gsR0FGRDs7QUFHRixzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHFFQUFELGtDQUNNYixZQUROO0FBRUUsUUFBRSxFQUFDLE1BRkw7QUFHRSxXQUFLLE1BSFA7QUFJRSxjQUFRLEVBQUVPLElBQUksRUFKaEI7QUFLRSxtQkFBYSxFQUFFSyxLQUFLLEVBTHRCO0FBTUUsaUJBQVcsRUFBRSxxQkFBQ0UsTUFBRDtBQUFBLDRCQUNYLHFFQUFDLG1FQUFELGtDQUFlQSxNQUFmO0FBQ0EsZUFBSyxFQUFDLDJCQUROO0FBRUEsZ0JBQU0sRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQTtBQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlCRCxDQXpCRDs7S0FBTVIsSTtBQTRCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi4xMzMyZDNmODUwMWUwMzZlMmVmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5cclxuY29uc3QgdG9wMTAwRmlsbXMgPSBbXHJcbiAgICB7IHRpdGxlOiAn66GkJywgaWR4OiAyMCB9LFxyXG4gICAgeyB0aXRsZTogJ+umrOq3uCDsmKTruIwg66CI7KCE65OcJywgaWR4IDogMjAgfSxcclxuICAgIHsgdGl0bGU6ICdsb2wnLCBpZHggOiAyMCB9LFxyXG4gICAgeyB0aXRsZTogJ+2UvO2MjOyYqOudvOyduDQnLCBpZHggOiAxOSB9LFxyXG4gICAgeyB0aXRsZTogJ+2UvO2MjCcsIGlkeCA6IDE5IH0sXHJcbiAgICB7IHRpdGxlOiBcIuuplOydtO2UjOyKpO2GoOumrFwiLCBpZHggOiAxOCB9LFxyXG4gICAgeyB0aXRsZTogJ+uNmO2MjCcsIGlkeCA6IDE3IH0sXHJcbiAgICB7IHRpdGxlOiAn642Y7KCE7JWk7YyM7J207YSwJywgaWR4IDogMTcgfSxcclxuICBdO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgb3B0aW9uczogdG9wMTAwRmlsbXMsXHJcbiAgICBnZXRPcHRpb25MYWJlbDogKG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZsYXRQcm9wcyA9IHtcclxuICAgIG9wdGlvbnM6IHRvcDEwMEZpbG1zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udGl0bGUpLFxyXG4gIH07XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRlc3QgPSAoZSwgdikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUsIHYpXHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXN0MiA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgIHsuLi5kZWZhdWx0UHJvcHN9XHJcbiAgICAgICAgaWQ9XCJnYW1lXCJcclxuICAgICAgICBkZWJ1Z1xyXG4gICAgICAgIG9uQ2hhbmdlPXt0ZXN0KCl9XHJcbiAgICAgICAgb25JbnB1dENoYW5nZT17dGVzdDIoKX1cclxuICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBcclxuICAgICAgICAgIGxhYmVsPVwi6rKM7J6EIOywvuq4sFwiIFxyXG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCIgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=