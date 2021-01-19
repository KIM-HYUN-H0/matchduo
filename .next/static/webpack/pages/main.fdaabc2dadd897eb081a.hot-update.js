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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");




var _jsxFileName = "C:\\Users\\gusgh\\project\\fullstack\\matchduo\\pages\\main.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var top100Films = [{
  title: "롤",
  idx: 20
}, {
  title: "리그 오브 레전드",
  idx: 20
}, {
  title: "lol",
  idx: 20
}, {
  title: "피파온라인4",
  idx: 19
}, {
  title: "피파",
  idx: 19
}, {
  title: "메이플스토리",
  idx: 18
}, {
  title: "던파",
  idx: 17
}, {
  title: "던전앤파이터",
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
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      game = _useState[0],
      setGame = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(top100Films),
      list = _useState2[0],
      setList = _useState2[1];

  var test = function test(e, v) {
    setGame(v.idx);
  };

  console.log(game);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "combo-box-demo",
      options: list,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      style: {
        width: '100%'
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "\uAC8C\uC784 \uCC3E\uAE30",
          variant: "outlined"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 28
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Main, "TInZWBFabJvoD6WJAWP73NWCWxk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsImRlZmF1bHRQcm9wcyIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9wdGlvbiIsImZsYXRQcm9wcyIsIm1hcCIsIk1haW4iLCJ1c2VTdGF0ZSIsImdhbWUiLCJzZXRHYW1lIiwibGlzdCIsInNldExpc3QiLCJ0ZXN0IiwiZSIsInYiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxPQUFLLEVBQUUsR0FBVDtBQUFjQyxLQUFHLEVBQUU7QUFBbkIsQ0FEa0IsRUFFbEI7QUFBRUQsT0FBSyxFQUFFLFdBQVQ7QUFBc0JDLEtBQUcsRUFBRTtBQUEzQixDQUZrQixFQUdsQjtBQUFFRCxPQUFLLEVBQUUsS0FBVDtBQUFnQkMsS0FBRyxFQUFFO0FBQXJCLENBSGtCLEVBSWxCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUU7QUFBeEIsQ0FKa0IsRUFLbEI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsS0FBRyxFQUFFO0FBQXBCLENBTGtCLEVBTWxCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUU7QUFBeEIsQ0FOa0IsRUFPbEI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsS0FBRyxFQUFFO0FBQXBCLENBUGtCLEVBUWxCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUU7QUFBeEIsQ0FSa0IsQ0FBcEI7QUFXQSxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRUosV0FEVTtBQUVuQkssZ0JBQWMsRUFBRSx3QkFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0wsS0FBbkI7QUFBQTtBQUZHLENBQXJCO0FBS0EsSUFBTU0sU0FBUyxHQUFHO0FBQ2hCSCxTQUFPLEVBQUVKLFdBQVcsQ0FBQ1EsR0FBWixDQUFnQixVQUFDRixNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDTCxLQUFuQjtBQUFBLEdBQWhCO0FBRE8sQ0FBbEI7O0FBSUEsSUFBTVEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxFQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUNWLFdBQUQsQ0FGZjtBQUFBLE1BRVZhLElBRlU7QUFBQSxNQUVKQyxPQUZJOztBQUlqQixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNyQkwsV0FBTyxDQUFDSyxDQUFDLENBQUNmLEdBQUgsQ0FBUDtBQUNELEdBRkQ7O0FBR0FnQixTQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMscUVBQUQ7QUFDSixRQUFFLEVBQUMsZ0JBREM7QUFFSixhQUFPLEVBQUVFLElBRkw7QUFHSixvQkFBYyxFQUFFLHdCQUFDUCxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDTCxLQUFuQjtBQUFBLE9BSFo7QUFJSixXQUFLLEVBQUU7QUFBRW1CLGFBQUssRUFBRTtBQUFULE9BSkg7QUFLSixpQkFBVyxFQUFFLHFCQUFDQyxNQUFEO0FBQUEsNEJBQVkscUVBQUMsbUVBQUQsa0NBQWVBLE1BQWY7QUFBdUIsZUFBSyxFQUFDLDJCQUE3QjtBQUFxQyxpQkFBTyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVo7QUFBQTtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVdELENBcEJEOztHQUFNWixJOztLQUFBQSxJO0FBc0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLmZkYWFiYzJkYWRkODk3ZWIwODFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmNvbnN0IHRvcDEwMEZpbG1zID0gW1xyXG4gIHsgdGl0bGU6IFwi66GkXCIsIGlkeDogMjAgfSxcclxuICB7IHRpdGxlOiBcIuumrOq3uCDsmKTruIwg66CI7KCE65OcXCIsIGlkeDogMjAgfSxcclxuICB7IHRpdGxlOiBcImxvbFwiLCBpZHg6IDIwIH0sXHJcbiAgeyB0aXRsZTogXCLtlLztjIzsmKjrnbzsnbg0XCIsIGlkeDogMTkgfSxcclxuICB7IHRpdGxlOiBcIu2UvO2MjFwiLCBpZHg6IDE5IH0sXHJcbiAgeyB0aXRsZTogXCLrqZTsnbTtlIzsiqTthqDrpqxcIiwgaWR4OiAxOCB9LFxyXG4gIHsgdGl0bGU6IFwi642Y7YyMXCIsIGlkeDogMTcgfSxcclxuICB7IHRpdGxlOiBcIuuNmOyghOyVpO2MjOydtO2EsFwiLCBpZHg6IDE3IH0sXHJcbl07XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgb3B0aW9uczogdG9wMTAwRmlsbXMsXHJcbiAgZ2V0T3B0aW9uTGFiZWw6IChvcHRpb24pID0+IG9wdGlvbi50aXRsZSxcclxufTtcclxuXHJcbmNvbnN0IGZsYXRQcm9wcyA9IHtcclxuICBvcHRpb25zOiB0b3AxMDBGaWxtcy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlKSxcclxufTtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2dhbWUsIHNldEdhbWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSh0b3AxMDBGaWxtcyk7XHJcblxyXG4gIGNvbnN0IHRlc3QgPSAoZSwgdikgPT4ge1xyXG4gICAgc2V0R2FtZSh2LmlkeCk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhnYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBdXRvY29tcGxldGVcclxuICBpZD1cImNvbWJvLWJveC1kZW1vXCJcclxuICBvcHRpb25zPXtsaXN0fVxyXG4gIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udGl0bGV9XHJcbiAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwi6rKM7J6EIOywvuq4sFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+fVxyXG4vPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=