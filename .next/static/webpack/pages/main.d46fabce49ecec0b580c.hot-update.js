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
    }
  };

  var join = function join() {
    console.log("go to the /game/".concat(game));
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
            lineNumber: 66,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.buttonWrapper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "outlined",
        onClick: join,
        children: "\uBAA8\uC5EC\uB77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 46
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJhY1dyYXBwZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImFjIiwibWFyZ2luIiwiYnV0dG9uV3JhcHBlciIsInRleHRBbGlnbiIsIk1haW4iLCJ1c2VTdGF0ZSIsImdhbWUiLCJzZXRHYW1lIiwibGlzdCIsInNldExpc3QiLCJ1c2VFZmZlY3QiLCJ0ZXN0IiwiZSIsInYiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJvcHRpb24iLCJ3aWR0aCIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2xCO0FBQUVDLE9BQUssRUFBRSxHQUFUO0FBQWNDLEtBQUcsRUFBRTtBQUFuQixDQURrQixFQUVsQjtBQUFFRCxPQUFLLEVBQUUsV0FBVDtBQUFzQkMsS0FBRyxFQUFFO0FBQTNCLENBRmtCLEVBR2xCO0FBQUVELE9BQUssRUFBRSxLQUFUO0FBQWdCQyxLQUFHLEVBQUU7QUFBckIsQ0FIa0IsRUFJbEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEtBQUcsRUFBRTtBQUF4QixDQUprQixFQUtsQjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxLQUFHLEVBQUU7QUFBcEIsQ0FMa0IsRUFNbEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEtBQUcsRUFBRTtBQUF4QixDQU5rQixFQU9sQjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxLQUFHLEVBQUU7QUFBcEIsQ0FQa0IsRUFRbEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEtBQUcsRUFBRTtBQUF4QixDQVJrQixDQUFwQjtBQVdBLElBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsV0FBUyxFQUFFO0FBQ1BDLFdBQU8sRUFBRyxNQURIO0FBRVBDLGNBQVUsRUFBRyxRQUZOLENBR1Q7O0FBSFMsR0FEZ0I7QUFNM0JDLElBQUUsRUFBRztBQUNEQyxVQUFNLEVBQUcsTUFEUixDQUVIOztBQUZHLEdBTnNCO0FBVTNCQyxlQUFhLEVBQUc7QUFDWkosV0FBTyxFQUFHLE9BREU7QUFFWkssYUFBUyxFQUFHO0FBRkE7QUFWVyxDQUFELENBQTVCOztBQWdCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLEVBRGY7QUFBQSxNQUNWQyxJQURVO0FBQUEsTUFDSkMsT0FESTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQ2IsV0FBRCxDQUZmO0FBQUEsTUFFVmdCLElBRlU7QUFBQSxNQUVKQyxPQUZJOztBQUlqQkMseURBQVMsQ0FBQyxZQUFNLENBQ2Q7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3JCLFFBQUlBLENBQUMsS0FBSyxJQUFWLEVBQWdCO0FBQ2ROLGFBQU8sQ0FBQ00sQ0FBQyxDQUFDbkIsR0FBSCxDQUFQO0FBQ0Q7QUFDRixHQUpEOztBQU1BLE1BQU1vQixJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2ZDLFdBQU8sQ0FBQ0MsR0FBUiwyQkFBK0JWLElBQS9CO0FBQ0gsR0FGRDs7QUFJQSxNQUFNVyxPQUFPLEdBQUd0QixTQUFTLEVBQXpCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywrREFBRDtBQUFPLGVBQVMsRUFBRSxDQUFsQjtBQUFxQixlQUFTLEVBQUVzQixPQUFPLENBQUNwQixTQUF4QztBQUFBLDZCQUNFLHFFQUFDLHFFQUFEO0FBQ0EsaUJBQVMsRUFBRW9CLE9BQU8sQ0FBQ2pCLEVBRG5CO0FBRUUsVUFBRSxFQUFDLFlBRkw7QUFHRSxlQUFPLEVBQUVRLElBSFg7QUFJRSxzQkFBYyxFQUFFLHdCQUFDVSxNQUFEO0FBQUEsaUJBQVlBLE1BQU0sQ0FBQ3pCLEtBQW5CO0FBQUEsU0FKbEI7QUFLRSxnQkFBUSxFQUFFa0IsSUFMWjtBQU1FLGFBQUssRUFBRTtBQUFFUSxlQUFLLEVBQUU7QUFBVCxTQU5UO0FBT0UsbUJBQVcsRUFBRSxxQkFBQ0MsTUFBRDtBQUFBLDhCQUNYLHFFQUFDLG1FQUFELGtDQUFlQSxNQUFmO0FBQXVCLGlCQUFLLEVBQUMsMkJBQTdCO0FBQXFDLG1CQUFPLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVztBQUFBO0FBUGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWVFO0FBQUssZUFBUyxFQUFFSCxPQUFPLENBQUNmLGFBQXhCO0FBQUEsNkJBQXVDLHFFQUFDLGdFQUFEO0FBQVEsZUFBTyxFQUFDLFVBQWhCO0FBQTJCLGVBQU8sRUFBRVksSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUEsa0JBREY7QUFvQkQsQ0F4Q0Q7O0dBQU1WLEk7VUFrQllULFM7OztLQWxCWlMsSTtBQTBDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi5kNDZmYWJjZTQ5ZWNlYzBiNTgwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcblxyXG5jb25zdCB0b3AxMDBGaWxtcyA9IFtcclxuICB7IHRpdGxlOiBcIuuhpFwiLCBpZHg6IDIwIH0sXHJcbiAgeyB0aXRsZTogXCLrpqzqt7gg7Jik67iMIOugiOyghOuTnFwiLCBpZHg6IDIwIH0sXHJcbiAgeyB0aXRsZTogXCJsb2xcIiwgaWR4OiAyMCB9LFxyXG4gIHsgdGl0bGU6IFwi7ZS87YyM7Jio65287J24NFwiLCBpZHg6IDE5IH0sXHJcbiAgeyB0aXRsZTogXCLtlLztjIxcIiwgaWR4OiAxOSB9LFxyXG4gIHsgdGl0bGU6IFwi66mU7J207ZSM7Iqk7Yag66asXCIsIGlkeDogMTggfSxcclxuICB7IHRpdGxlOiBcIuuNmO2MjFwiLCBpZHg6IDE3IH0sXHJcbiAgeyB0aXRsZTogXCLrjZjsoITslaTtjIzsnbTthLBcIiwgaWR4OiAxNyB9LFxyXG5dO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgYWNXcmFwcGVyOiB7XHJcbiAgICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgIC8vICAgYm9yZGVyIDogJzFweCBzb2xpZCBncmF5J1xyXG4gIH0sXHJcbiAgYWMgOiB7XHJcbiAgICAgIG1hcmdpbiA6ICdhdXRvJyxcclxuICAgIC8vICAgd2lkdGggOiAnMTAwJScsXHJcbiAgfSxcclxuICBidXR0b25XcmFwcGVyIDoge1xyXG4gICAgICBkaXNwbGF5IDogJ2Jsb2NrJyxcclxuICAgICAgdGV4dEFsaWduIDogJ2NlbnRlcidcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICBjb25zdCBbZ2FtZSwgc2V0R2FtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKHRvcDEwMEZpbG1zKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8v7LKY7J2M7JeQIOqyjOyehOumrOyKpO2KuOulvCDrtojrn6zsmKTquLAg7JyE7ZWcIOudvOydtO2UhOyCrOydtO2BtC4g67aI65+s7JmA7IScIGxpc3Qg7JeQIOyggOyepS5cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRlc3QgPSAoZSwgdikgPT4ge1xyXG4gICAgaWYgKHYgIT09IG51bGwpIHtcclxuICAgICAgc2V0R2FtZSh2LmlkeCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgam9pbiA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYGdvIHRvIHRoZSAvZ2FtZS8ke2dhbWV9YClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY1dyYXBwZXJ9PlxyXG4gICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWN9XHJcbiAgICAgICAgICBpZD1cImdhbWVzZWFyY2hcIlxyXG4gICAgICAgICAgb3B0aW9ucz17bGlzdH1cclxuICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udGl0bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGVzdH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA1MDAgfX1cclxuICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCLqsozsnoQg7LC+6riwXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9QYXBlcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbldyYXBwZXJ9PjxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17am9pbn0+66qo7Jes6528PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=