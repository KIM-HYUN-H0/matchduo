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
        width: 300
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "\uAC8C\uC784 \uCC3E\uAE30",
          variant: "outlined"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsIk1haW4iLCJ1c2VTdGF0ZSIsImdhbWUiLCJzZXRHYW1lIiwibGlzdCIsInNldExpc3QiLCJ0ZXN0IiwiZSIsInYiLCJjb25zb2xlIiwibG9nIiwib3B0aW9uIiwid2lkdGgiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxPQUFLLEVBQUUsR0FBVDtBQUFjQyxLQUFHLEVBQUU7QUFBbkIsQ0FEa0IsRUFFbEI7QUFBRUQsT0FBSyxFQUFFLFdBQVQ7QUFBc0JDLEtBQUcsRUFBRTtBQUEzQixDQUZrQixFQUdsQjtBQUFFRCxPQUFLLEVBQUUsS0FBVDtBQUFnQkMsS0FBRyxFQUFFO0FBQXJCLENBSGtCLEVBSWxCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUU7QUFBeEIsQ0FKa0IsRUFLbEI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsS0FBRyxFQUFFO0FBQXBCLENBTGtCLEVBTWxCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUU7QUFBeEIsQ0FOa0IsRUFPbEI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsS0FBRyxFQUFFO0FBQXBCLENBUGtCLEVBUWxCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUU7QUFBeEIsQ0FSa0IsQ0FBcEI7O0FBV0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxFQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUNKLFdBQUQsQ0FGZjtBQUFBLE1BRVZPLElBRlU7QUFBQSxNQUVKQyxPQUZJOztBQUlqQixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNyQkwsV0FBTyxDQUFDSyxDQUFDLENBQUNULEdBQUgsQ0FBUDtBQUNELEdBRkQ7O0FBR0FVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixJQUFaO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxxRUFBRDtBQUNFLFFBQUUsRUFBQyxnQkFETDtBQUVFLGFBQU8sRUFBRUUsSUFGWDtBQUdFLG9CQUFjLEVBQUUsd0JBQUNPLE1BQUQ7QUFBQSxlQUFZQSxNQUFNLENBQUNiLEtBQW5CO0FBQUEsT0FIbEI7QUFJRSxXQUFLLEVBQUU7QUFBRWMsYUFBSyxFQUFFO0FBQVQsT0FKVDtBQUtFLGlCQUFXLEVBQUUscUJBQUNDLE1BQUQ7QUFBQSw0QkFDWCxxRUFBQyxtRUFBRCxrQ0FBZUEsTUFBZjtBQUF1QixlQUFLLEVBQUMsMkJBQTdCO0FBQXFDLGlCQUFPLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBYUQsQ0F0QkQ7O0dBQU1iLEk7O0tBQUFBLEk7QUF3QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW4uYjBlOGRlZTAwNzE1NzA2M2ZkODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5cclxuY29uc3QgdG9wMTAwRmlsbXMgPSBbXHJcbiAgeyB0aXRsZTogXCLroaRcIiwgaWR4OiAyMCB9LFxyXG4gIHsgdGl0bGU6IFwi66as6re4IOyYpOu4jCDroIjsoITrk5xcIiwgaWR4OiAyMCB9LFxyXG4gIHsgdGl0bGU6IFwibG9sXCIsIGlkeDogMjAgfSxcclxuICB7IHRpdGxlOiBcIu2UvO2MjOyYqOudvOyduDRcIiwgaWR4OiAxOSB9LFxyXG4gIHsgdGl0bGU6IFwi7ZS87YyMXCIsIGlkeDogMTkgfSxcclxuICB7IHRpdGxlOiBcIuuplOydtO2UjOyKpO2GoOumrFwiLCBpZHg6IDE4IH0sXHJcbiAgeyB0aXRsZTogXCLrjZjtjIxcIiwgaWR4OiAxNyB9LFxyXG4gIHsgdGl0bGU6IFwi642Y7KCE7JWk7YyM7J207YSwXCIsIGlkeDogMTcgfSxcclxuXTtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2dhbWUsIHNldEdhbWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSh0b3AxMDBGaWxtcyk7XHJcblxyXG4gIGNvbnN0IHRlc3QgPSAoZSwgdikgPT4ge1xyXG4gICAgc2V0R2FtZSh2LmlkeCk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhnYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICBpZD1cImNvbWJvLWJveC1kZW1vXCJcclxuICAgICAgICBvcHRpb25zPXtsaXN0fVxyXG4gICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udGl0bGV9XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwi6rKM7J6EIOywvuq4sFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9