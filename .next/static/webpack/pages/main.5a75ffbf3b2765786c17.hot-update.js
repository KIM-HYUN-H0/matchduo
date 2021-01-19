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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);




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

  },
  buttonWrapper: {
    display: 'block',
    textAlign: 'center'
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
    } else {
      setGame(null);
    }
  };

  var join = function join() {
    if (game) {
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/game/".concat(game));
    }
  };

  console.log(game);
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
            lineNumber: 73,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.buttonWrapper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "outlined",
        onClick: join,
        children: "\uBAA8\uC5EC\uB77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 46
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJhY1dyYXBwZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImFjIiwibWFyZ2luIiwiYnV0dG9uV3JhcHBlciIsInRleHRBbGlnbiIsIk1haW4iLCJ1c2VTdGF0ZSIsImdhbWUiLCJzZXRHYW1lIiwibGlzdCIsInNldExpc3QiLCJ1c2VFZmZlY3QiLCJ0ZXN0IiwiZSIsInYiLCJqb2luIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwib3B0aW9uIiwid2lkdGgiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FDbEI7QUFBRUMsT0FBSyxFQUFFLEdBQVQ7QUFBY0MsS0FBRyxFQUFFO0FBQW5CLENBRGtCLEVBRWxCO0FBQUVELE9BQUssRUFBRSxXQUFUO0FBQXNCQyxLQUFHLEVBQUU7QUFBM0IsQ0FGa0IsRUFHbEI7QUFBRUQsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLEtBQUcsRUFBRTtBQUFyQixDQUhrQixFQUlsQjtBQUFFRCxPQUFLLEVBQUUsUUFBVDtBQUFtQkMsS0FBRyxFQUFFO0FBQXhCLENBSmtCLEVBS2xCO0FBQUVELE9BQUssRUFBRSxJQUFUO0FBQWVDLEtBQUcsRUFBRTtBQUFwQixDQUxrQixFQU1sQjtBQUFFRCxPQUFLLEVBQUUsUUFBVDtBQUFtQkMsS0FBRyxFQUFFO0FBQXhCLENBTmtCLEVBT2xCO0FBQUVELE9BQUssRUFBRSxJQUFUO0FBQWVDLEtBQUcsRUFBRTtBQUFwQixDQVBrQixFQVFsQjtBQUFFRCxPQUFLLEVBQUUsUUFBVDtBQUFtQkMsS0FBRyxFQUFFO0FBQXhCLENBUmtCLENBQXBCO0FBV0EsSUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxXQUFTLEVBQUU7QUFDUEMsV0FBTyxFQUFHLE1BREg7QUFFUEMsY0FBVSxFQUFHLFFBRk4sQ0FHVDs7QUFIUyxHQURnQjtBQU0zQkMsSUFBRSxFQUFHO0FBQ0RDLFVBQU0sRUFBRyxNQURSLENBRUg7O0FBRkcsR0FOc0I7QUFVM0JDLGVBQWEsRUFBRztBQUNaSixXQUFPLEVBQUcsT0FERTtBQUVaSyxhQUFTLEVBQUc7QUFGQTtBQVZXLENBQUQsQ0FBNUI7O0FBZ0JBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsRUFEZjtBQUFBLE1BQ1ZDLElBRFU7QUFBQSxNQUNKQyxPQURJOztBQUFBLG1CQUVPRixzREFBUSxDQUFDYixXQUFELENBRmY7QUFBQSxNQUVWZ0IsSUFGVTtBQUFBLE1BRUpDLE9BRkk7O0FBSWpCQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDckIsUUFBSUEsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZE4sYUFBTyxDQUFDTSxDQUFDLENBQUNuQixHQUFILENBQVA7QUFDRCxLQUZELE1BR0s7QUFDRGEsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNIO0FBQ0YsR0FQRDs7QUFTQSxNQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsUUFBR1IsSUFBSCxFQUFTO0FBQ1BTLHdEQUFNLENBQUNDLElBQVAsaUJBQXFCVixJQUFyQjtBQUNEO0FBQ0osR0FKRDs7QUFNQVcsU0FBTyxDQUFDQyxHQUFSLENBQVlaLElBQVo7QUFDQSxNQUFNYSxPQUFPLEdBQUd4QixTQUFTLEVBQXpCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywrREFBRDtBQUFPLGVBQVMsRUFBRSxDQUFsQjtBQUFxQixlQUFTLEVBQUV3QixPQUFPLENBQUN0QixTQUF4QztBQUFBLDZCQUNFLHFFQUFDLHFFQUFEO0FBQ0EsaUJBQVMsRUFBRXNCLE9BQU8sQ0FBQ25CLEVBRG5CO0FBRUUsVUFBRSxFQUFDLFlBRkw7QUFHRSxlQUFPLEVBQUVRLElBSFg7QUFJRSxzQkFBYyxFQUFFLHdCQUFDWSxNQUFEO0FBQUEsaUJBQVlBLE1BQU0sQ0FBQzNCLEtBQW5CO0FBQUEsU0FKbEI7QUFLRSxnQkFBUSxFQUFFa0IsSUFMWjtBQU1FLGFBQUssRUFBRTtBQUFFVSxlQUFLLEVBQUU7QUFBVCxTQU5UO0FBT0UsbUJBQVcsRUFBRSxxQkFBQ0MsTUFBRDtBQUFBLDhCQUNYLHFFQUFDLG1FQUFELGtDQUFlQSxNQUFmO0FBQXVCLGlCQUFLLEVBQUMsMkJBQTdCO0FBQXFDLG1CQUFPLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVztBQUFBO0FBUGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWVFO0FBQUssZUFBUyxFQUFFSCxPQUFPLENBQUNqQixhQUF4QjtBQUFBLDZCQUF1QyxxRUFBQyxnRUFBRDtBQUFRLGVBQU8sRUFBQyxVQUFoQjtBQUEyQixlQUFPLEVBQUVZLElBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBLGtCQURGO0FBb0JELENBOUNEOztHQUFNVixJO1VBd0JZVCxTOzs7S0F4QlpTLEk7QUFnRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW4uNWE3NWZmYmYzYjI3NjU3ODZjMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgdG9wMTAwRmlsbXMgPSBbXHJcbiAgeyB0aXRsZTogXCLroaRcIiwgaWR4OiAyMCB9LFxyXG4gIHsgdGl0bGU6IFwi66as6re4IOyYpOu4jCDroIjsoITrk5xcIiwgaWR4OiAyMCB9LFxyXG4gIHsgdGl0bGU6IFwibG9sXCIsIGlkeDogMjAgfSxcclxuICB7IHRpdGxlOiBcIu2UvO2MjOyYqOudvOyduDRcIiwgaWR4OiAxOSB9LFxyXG4gIHsgdGl0bGU6IFwi7ZS87YyMXCIsIGlkeDogMTkgfSxcclxuICB7IHRpdGxlOiBcIuuplOydtO2UjOyKpO2GoOumrFwiLCBpZHg6IDE4IH0sXHJcbiAgeyB0aXRsZTogXCLrjZjtjIxcIiwgaWR4OiAxNyB9LFxyXG4gIHsgdGl0bGU6IFwi642Y7KCE7JWk7YyM7J207YSwXCIsIGlkeDogMTcgfSxcclxuXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGFjV3JhcHBlcjoge1xyXG4gICAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zIDogJ2NlbnRlcicsXHJcbiAgICAvLyAgIGJvcmRlciA6ICcxcHggc29saWQgZ3JheSdcclxuICB9LFxyXG4gIGFjIDoge1xyXG4gICAgICBtYXJnaW4gOiAnYXV0bycsXHJcbiAgICAvLyAgIHdpZHRoIDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgYnV0dG9uV3JhcHBlciA6IHtcclxuICAgICAgZGlzcGxheSA6ICdibG9jaycsXHJcbiAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2dhbWUsIHNldEdhbWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSh0b3AxMDBGaWxtcyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL+yymOydjOyXkCDqsozsnoTrpqzsiqTtirjrpbwg67aI65+s7Jik6riwIOychO2VnCDrnbzsnbTtlITsgqzsnbTtgbQuIOu2iOufrOyZgOyEnCBsaXN0IOyXkCDsoIDsnqUuXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB0ZXN0ID0gKGUsIHYpID0+IHtcclxuICAgIGlmICh2ICE9PSBudWxsKSB7XHJcbiAgICAgIHNldEdhbWUodi5pZHgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc2V0R2FtZShudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBqb2luID0gKCkgPT4ge1xyXG4gICAgICBpZihnYW1lKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC9nYW1lLyR7Z2FtZX1gKVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhnYW1lKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFwZXIgZWxldmF0aW9uPXswfSBjbGFzc05hbWU9e2NsYXNzZXMuYWNXcmFwcGVyfT5cclxuICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjfVxyXG4gICAgICAgICAgaWQ9XCJnYW1lc2VhcmNoXCJcclxuICAgICAgICAgIG9wdGlvbnM9e2xpc3R9XHJcbiAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Rlc3R9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwi6rKM7J6EIOywvuq4sFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvUGFwZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25XcmFwcGVyfT48QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2pvaW59PuuqqOyXrOudvDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9