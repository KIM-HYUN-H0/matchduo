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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");




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
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  acWrapper: {
    display: 'flex',
    alignItems: 'center' //   border : '1px solid gray'

  },
  ac: {
    margin: 'auto' //   width : '100%',

  }
});

var Main = function Main() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      game = _useState[0],
      setGame = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(top100Films),
      list = _useState2[0],
      setList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {//처음에 게임리스트를 불러오기 위한 라이프사이클. 불러와서 list 에 저장.
  }, []);

  var test = function test(e, v) {
    if (v !== null) {
      setGame(v.idx);
    }
  };

  var join = function join() {
    console.log("".concat(game, "\uC5D0 \uC785\uC7A5"));
  };

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      elevation: 0,
      className: classes.acWrapper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.ac,
        id: "gamesearch",
        options: list,
        getOptionLabel: function getOptionLabel(option) {
          return option.title;
        },
        onChange: test,
        style: {
          width: 500
        },
        renderInput: function renderInput(params) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
            label: "\uAC8C\uC784 \uCC3E\uAE30",
            variant: "outlined"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "outlined",
      onClick: join,
      children: "\uBAA8\uC5EC\uB77C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Main, "I2iPPzjq8edhYWHh52Eqy4FVWD8=", false, function () {
  return [useStyles];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJhY1dyYXBwZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImFjIiwibWFyZ2luIiwiTWFpbiIsInVzZVN0YXRlIiwiZ2FtZSIsInNldEdhbWUiLCJsaXN0Iiwic2V0TGlzdCIsInVzZUVmZmVjdCIsInRlc3QiLCJlIiwidiIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIm9wdGlvbiIsIndpZHRoIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FDbEI7QUFBRUMsT0FBSyxFQUFFLEdBQVQ7QUFBY0MsS0FBRyxFQUFFO0FBQW5CLENBRGtCLEVBRWxCO0FBQUVELE9BQUssRUFBRSxXQUFUO0FBQXNCQyxLQUFHLEVBQUU7QUFBM0IsQ0FGa0IsRUFHbEI7QUFBRUQsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLEtBQUcsRUFBRTtBQUFyQixDQUhrQixFQUlsQjtBQUFFRCxPQUFLLEVBQUUsUUFBVDtBQUFtQkMsS0FBRyxFQUFFO0FBQXhCLENBSmtCLEVBS2xCO0FBQUVELE9BQUssRUFBRSxJQUFUO0FBQWVDLEtBQUcsRUFBRTtBQUFwQixDQUxrQixFQU1sQjtBQUFFRCxPQUFLLEVBQUUsUUFBVDtBQUFtQkMsS0FBRyxFQUFFO0FBQXhCLENBTmtCLEVBT2xCO0FBQUVELE9BQUssRUFBRSxJQUFUO0FBQWVDLEtBQUcsRUFBRTtBQUFwQixDQVBrQixFQVFsQjtBQUFFRCxPQUFLLEVBQUUsUUFBVDtBQUFtQkMsS0FBRyxFQUFFO0FBQXhCLENBUmtCLENBQXBCO0FBV0EsSUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxXQUFTLEVBQUU7QUFDUEMsV0FBTyxFQUFHLE1BREg7QUFFUEMsY0FBVSxFQUFHLFFBRk4sQ0FHVDs7QUFIUyxHQURnQjtBQU0zQkMsSUFBRSxFQUFHO0FBQ0RDLFVBQU0sRUFBRyxNQURSLENBRUg7O0FBRkc7QUFOc0IsQ0FBRCxDQUE1Qjs7QUFZQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLEVBRGY7QUFBQSxNQUNWQyxJQURVO0FBQUEsTUFDSkMsT0FESTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQ1gsV0FBRCxDQUZmO0FBQUEsTUFFVmMsSUFGVTtBQUFBLE1BRUpDLE9BRkk7O0FBSWpCQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDckIsUUFBSUEsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZE4sYUFBTyxDQUFDTSxDQUFDLENBQUNqQixHQUFILENBQVA7QUFDRDtBQUNGLEdBSkQ7O0FBTUEsTUFBTWtCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZkMsV0FBTyxDQUFDQyxHQUFSLFdBQWVWLElBQWY7QUFDSCxHQUZEOztBQUlBLE1BQU1XLE9BQU8sR0FBR3BCLFNBQVMsRUFBekI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLCtEQUFEO0FBQU8sZUFBUyxFQUFFLENBQWxCO0FBQXFCLGVBQVMsRUFBRW9CLE9BQU8sQ0FBQ2xCLFNBQXhDO0FBQUEsNkJBQ0UscUVBQUMscUVBQUQ7QUFDQSxpQkFBUyxFQUFFa0IsT0FBTyxDQUFDZixFQURuQjtBQUVFLFVBQUUsRUFBQyxZQUZMO0FBR0UsZUFBTyxFQUFFTSxJQUhYO0FBSUUsc0JBQWMsRUFBRSx3QkFBQ1UsTUFBRDtBQUFBLGlCQUFZQSxNQUFNLENBQUN2QixLQUFuQjtBQUFBLFNBSmxCO0FBS0UsZ0JBQVEsRUFBRWdCLElBTFo7QUFNRSxhQUFLLEVBQUU7QUFBRVEsZUFBSyxFQUFFO0FBQVQsU0FOVDtBQU9FLG1CQUFXLEVBQUUscUJBQUNDLE1BQUQ7QUFBQSw4QkFDWCxxRUFBQyxtRUFBRCxrQ0FBZUEsTUFBZjtBQUF1QixpQkFBSyxFQUFDLDJCQUE3QjtBQUFxQyxtQkFBTyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFc7QUFBQTtBQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFlRSxxRUFBQyxnRUFBRDtBQUFRLGFBQU8sRUFBQyxVQUFoQjtBQUEyQixhQUFPLEVBQUVOLElBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkY7QUFBQSxrQkFERjtBQW1CRCxDQXZDRDs7R0FBTVYsSTtVQWtCWVAsUzs7O0tBbEJaTyxJO0FBeUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjViNjAxOWM1MGQ5ZTNiOWQyMTJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmNvbnN0IHRvcDEwMEZpbG1zID0gW1xyXG4gIHsgdGl0bGU6IFwi66GkXCIsIGlkeDogMjAgfSxcclxuICB7IHRpdGxlOiBcIuumrOq3uCDsmKTruIwg66CI7KCE65OcXCIsIGlkeDogMjAgfSxcclxuICB7IHRpdGxlOiBcImxvbFwiLCBpZHg6IDIwIH0sXHJcbiAgeyB0aXRsZTogXCLtlLztjIzsmKjrnbzsnbg0XCIsIGlkeDogMTkgfSxcclxuICB7IHRpdGxlOiBcIu2UvO2MjFwiLCBpZHg6IDE5IH0sXHJcbiAgeyB0aXRsZTogXCLrqZTsnbTtlIzsiqTthqDrpqxcIiwgaWR4OiAxOCB9LFxyXG4gIHsgdGl0bGU6IFwi642Y7YyMXCIsIGlkeDogMTcgfSxcclxuICB7IHRpdGxlOiBcIuuNmOyghOyVpO2MjOydtO2EsFwiLCBpZHg6IDE3IH0sXHJcbl07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBhY1dyYXBwZXI6IHtcclxuICAgICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtcyA6ICdjZW50ZXInLFxyXG4gICAgLy8gICBib3JkZXIgOiAnMXB4IHNvbGlkIGdyYXknXHJcbiAgfSxcclxuICBhYyA6IHtcclxuICAgICAgbWFyZ2luIDogJ2F1dG8nLFxyXG4gICAgLy8gICB3aWR0aCA6ICcxMDAlJyxcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICBjb25zdCBbZ2FtZSwgc2V0R2FtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKHRvcDEwMEZpbG1zKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8v7LKY7J2M7JeQIOqyjOyehOumrOyKpO2KuOulvCDrtojrn6zsmKTquLAg7JyE7ZWcIOudvOydtO2UhOyCrOydtO2BtC4g67aI65+s7JmA7IScIGxpc3Qg7JeQIOyggOyepS5cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRlc3QgPSAoZSwgdikgPT4ge1xyXG4gICAgaWYgKHYgIT09IG51bGwpIHtcclxuICAgICAgc2V0R2FtZSh2LmlkeCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgam9pbiA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYCR7Z2FtZX3sl5Ag7J6F7J6lYClcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MH0gY2xhc3NOYW1lPXtjbGFzc2VzLmFjV3JhcHBlcn0+XHJcbiAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY31cclxuICAgICAgICAgIGlkPVwiZ2FtZXNlYXJjaFwiXHJcbiAgICAgICAgICBvcHRpb25zPXtsaXN0fVxyXG4gICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi50aXRsZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXN0fVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIuqyjOyehCDssL7quLBcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1BhcGVyPlxyXG5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtqb2lufT7rqqjsl6zrnbw8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9