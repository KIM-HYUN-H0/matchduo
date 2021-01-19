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
    justifyContent: 'center'
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

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      elevation: 0,
      className: classes.acWrapper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "gamesearch",
        options: list,
        getOptionLabel: function getOptionLabel(option) {
          return option.title;
        },
        onChange: test,
        style: {
          width: 300
        },
        renderInput: function renderInput(params) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, params), {}, {
            label: "\uAC8C\uC784 \uCC3E\uAE30",
            variant: "outlined"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJhY1dyYXBwZXIiLCJqdXN0aWZ5Q29udGVudCIsIk1haW4iLCJ1c2VTdGF0ZSIsImdhbWUiLCJzZXRHYW1lIiwibGlzdCIsInNldExpc3QiLCJ1c2VFZmZlY3QiLCJ0ZXN0IiwiZSIsInYiLCJjbGFzc2VzIiwib3B0aW9uIiwid2lkdGgiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxPQUFLLEVBQUUsR0FBVDtBQUFjQyxLQUFHLEVBQUU7QUFBbkIsQ0FEa0IsRUFFbEI7QUFBRUQsT0FBSyxFQUFFLFdBQVQ7QUFBc0JDLEtBQUcsRUFBRTtBQUEzQixDQUZrQixFQUdsQjtBQUFFRCxPQUFLLEVBQUUsS0FBVDtBQUFnQkMsS0FBRyxFQUFFO0FBQXJCLENBSGtCLEVBSWxCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUU7QUFBeEIsQ0FKa0IsRUFLbEI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsS0FBRyxFQUFFO0FBQXBCLENBTGtCLEVBTWxCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUU7QUFBeEIsQ0FOa0IsRUFPbEI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsS0FBRyxFQUFFO0FBQXBCLENBUGtCLEVBUWxCO0FBQUVELE9BQUssRUFBRSxRQUFUO0FBQW1CQyxLQUFHLEVBQUU7QUFBeEIsQ0FSa0IsQ0FBcEI7QUFXQSxJQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNQQyxrQkFBYyxFQUFHO0FBRFY7QUFEZ0IsQ0FBRCxDQUE1Qjs7QUFNQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLEVBRGY7QUFBQSxNQUNWQyxJQURVO0FBQUEsTUFDSkMsT0FESTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQ1IsV0FBRCxDQUZmO0FBQUEsTUFFVlcsSUFGVTtBQUFBLE1BRUpDLE9BRkk7O0FBSWpCQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDckIsUUFBSUEsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZE4sYUFBTyxDQUFDTSxDQUFDLENBQUNkLEdBQUgsQ0FBUDtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxNQUFNZSxPQUFPLEdBQUdkLFNBQVMsRUFBekI7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLCtEQUFEO0FBQU8sZUFBUyxFQUFFLENBQWxCO0FBQXFCLGVBQVMsRUFBRWMsT0FBTyxDQUFDWixTQUF4QztBQUFBLDZCQUNFLHFFQUFDLHFFQUFEO0FBQ0UsVUFBRSxFQUFDLFlBREw7QUFFRSxlQUFPLEVBQUVNLElBRlg7QUFHRSxzQkFBYyxFQUFFLHdCQUFDTyxNQUFEO0FBQUEsaUJBQVlBLE1BQU0sQ0FBQ2pCLEtBQW5CO0FBQUEsU0FIbEI7QUFJRSxnQkFBUSxFQUFFYSxJQUpaO0FBS0UsYUFBSyxFQUFFO0FBQUVLLGVBQUssRUFBRTtBQUFULFNBTFQ7QUFNRSxtQkFBVyxFQUFFLHFCQUFDQyxNQUFEO0FBQUEsOEJBQ1gscUVBQUMsbUVBQUQsa0NBQWVBLE1BQWY7QUFBdUIsaUJBQUssRUFBQywyQkFBN0I7QUFBcUMsbUJBQU8sRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURXO0FBQUE7QUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBZ0JELENBaENEOztHQUFNYixJO1VBY1lKLFM7OztLQWRaSSxJO0FBa0NTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLmZiNjQ3ZWIzOWI0YWU1YjIyZThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcblxyXG5jb25zdCB0b3AxMDBGaWxtcyA9IFtcclxuICB7IHRpdGxlOiBcIuuhpFwiLCBpZHg6IDIwIH0sXHJcbiAgeyB0aXRsZTogXCLrpqzqt7gg7Jik67iMIOugiOyghOuTnFwiLCBpZHg6IDIwIH0sXHJcbiAgeyB0aXRsZTogXCJsb2xcIiwgaWR4OiAyMCB9LFxyXG4gIHsgdGl0bGU6IFwi7ZS87YyM7Jio65287J24NFwiLCBpZHg6IDE5IH0sXHJcbiAgeyB0aXRsZTogXCLtlLztjIxcIiwgaWR4OiAxOSB9LFxyXG4gIHsgdGl0bGU6IFwi66mU7J207ZSM7Iqk7Yag66asXCIsIGlkeDogMTggfSxcclxuICB7IHRpdGxlOiBcIuuNmO2MjFwiLCBpZHg6IDE3IH0sXHJcbiAgeyB0aXRsZTogXCLrjZjsoITslaTtjIzsnbTthLBcIiwgaWR4OiAxNyB9LFxyXG5dO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgYWNXcmFwcGVyOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50IDogJ2NlbnRlcidcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2dhbWUsIHNldEdhbWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSh0b3AxMDBGaWxtcyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL+yymOydjOyXkCDqsozsnoTrpqzsiqTtirjrpbwg67aI65+s7Jik6riwIOychO2VnCDrnbzsnbTtlITsgqzsnbTtgbQuIOu2iOufrOyZgOyEnCBsaXN0IOyXkCDsoIDsnqUuXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB0ZXN0ID0gKGUsIHYpID0+IHtcclxuICAgIGlmICh2ICE9PSBudWxsKSB7XHJcbiAgICAgIHNldEdhbWUodi5pZHgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY1dyYXBwZXJ9PlxyXG4gICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgIGlkPVwiZ2FtZXNlYXJjaFwiXHJcbiAgICAgICAgICBvcHRpb25zPXtsaXN0fVxyXG4gICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi50aXRsZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXN0fVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIuqyjOyehCDssL7quLBcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=