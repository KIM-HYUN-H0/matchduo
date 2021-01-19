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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "game",
      debug: true,
      onChange: test(),
      renderInput: function renderInput(params) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "\uAC8C\uC784 \uCC3E\uAE30",
          margin: "normal"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsImRlZmF1bHRQcm9wcyIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9wdGlvbiIsImZsYXRQcm9wcyIsIm1hcCIsIk1haW4iLCJ0ZXN0IiwiZSIsInYiLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2hCO0FBQUVDLE9BQUssRUFBRSxHQUFUO0FBQWNDLEtBQUcsRUFBRTtBQUFuQixDQURnQixFQUVoQjtBQUFFRCxPQUFLLEVBQUUsV0FBVDtBQUFzQkMsS0FBRyxFQUFHO0FBQTVCLENBRmdCLEVBR2hCO0FBQUVELE9BQUssRUFBRSxLQUFUO0FBQWdCQyxLQUFHLEVBQUc7QUFBdEIsQ0FIZ0IsRUFJaEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEtBQUcsRUFBRztBQUF6QixDQUpnQixFQUtoQjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxLQUFHLEVBQUc7QUFBckIsQ0FMZ0IsRUFNaEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEtBQUcsRUFBRztBQUF6QixDQU5nQixFQU9oQjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxLQUFHLEVBQUc7QUFBckIsQ0FQZ0IsRUFRaEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEtBQUcsRUFBRztBQUF6QixDQVJnQixDQUFwQjtBQVdBLElBQU1DLFlBQVksR0FBRztBQUNqQkMsU0FBTyxFQUFFSixXQURRO0FBRWpCSyxnQkFBYyxFQUFFLHdCQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDTCxLQUFuQjtBQUFBO0FBRkMsQ0FBckI7QUFLRSxJQUFNTSxTQUFTLEdBQUc7QUFDaEJILFNBQU8sRUFBRUosV0FBVyxDQUFDUSxHQUFaLENBQWdCLFVBQUNGLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNMLEtBQW5CO0FBQUEsR0FBaEI7QUFETyxDQUFsQjs7QUFJRixJQUFNUSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDbkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaLEVBQWVDLENBQWY7QUFDSCxHQUZEOztBQUdGLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMscUVBQUQsa0NBQ01ULFlBRE47QUFFRSxRQUFFLEVBQUMsTUFGTDtBQUdFLFdBQUssTUFIUDtBQUlFLGNBQVEsRUFBRU8sSUFBSSxFQUpoQjtBQUtFLGlCQUFXLEVBQUUscUJBQUNLLE1BQUQ7QUFBQSw0QkFDWCxxRUFBQyxtRUFBRCxrQ0FBZUEsTUFBZjtBQUNBLGVBQUssRUFBQywyQkFETjtBQUVBLGdCQUFNLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUE7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFnQkQsQ0FwQkQ7O0tBQU1OLEk7QUF1QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW4uOTY2NjQyMTQzYmRlOWJhYjE1YmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuXHJcbmNvbnN0IHRvcDEwMEZpbG1zID0gW1xyXG4gICAgeyB0aXRsZTogJ+uhpCcsIGlkeDogMjAgfSxcclxuICAgIHsgdGl0bGU6ICfrpqzqt7gg7Jik67iMIOugiOyghOuTnCcsIGlkeCA6IDIwIH0sXHJcbiAgICB7IHRpdGxlOiAnbG9sJywgaWR4IDogMjAgfSxcclxuICAgIHsgdGl0bGU6ICftlLztjIzsmKjrnbzsnbg0JywgaWR4IDogMTkgfSxcclxuICAgIHsgdGl0bGU6ICftlLztjIwnLCBpZHggOiAxOSB9LFxyXG4gICAgeyB0aXRsZTogXCLrqZTsnbTtlIzsiqTthqDrpqxcIiwgaWR4IDogMTggfSxcclxuICAgIHsgdGl0bGU6ICfrjZjtjIwnLCBpZHggOiAxNyB9LFxyXG4gICAgeyB0aXRsZTogJ+uNmOyghOyVpO2MjOydtO2EsCcsIGlkeCA6IDE3IH0sXHJcbiAgXTtcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9wdGlvbnM6IHRvcDEwMEZpbG1zLFxyXG4gICAgZ2V0T3B0aW9uTGFiZWw6IChvcHRpb24pID0+IG9wdGlvbi50aXRsZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBmbGF0UHJvcHMgPSB7XHJcbiAgICBvcHRpb25zOiB0b3AxMDBGaWxtcy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlKSxcclxuICB9O1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRlc3QgPSAoZSwgdikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUsIHYpXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICB7Li4uZGVmYXVsdFByb3BzfVxyXG4gICAgICAgIGlkPVwiZ2FtZVwiXHJcbiAgICAgICAgZGVidWdcclxuICAgICAgICBvbkNoYW5nZT17dGVzdCgpfVxyXG4gICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IFxyXG4gICAgICAgICAgbGFiZWw9XCLqsozsnoQg7LC+6riwXCIgXHJcbiAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIiBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==