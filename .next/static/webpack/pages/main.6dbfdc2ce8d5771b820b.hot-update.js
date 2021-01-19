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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {//처음에 게임리스트를 불러오기 위한 라이프사이클. 불러와서 list 에 저장. 
  }, []);

  var test = function test(e, v) {
    if (v.idx) {
      setGame(v.idx);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
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
          lineNumber: 39,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Main, "uDk+JpMonu9ifuJZYGwjB3dl+jM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsImlkeCIsIk1haW4iLCJ1c2VTdGF0ZSIsImdhbWUiLCJzZXRHYW1lIiwibGlzdCIsInNldExpc3QiLCJ1c2VFZmZlY3QiLCJ0ZXN0IiwiZSIsInYiLCJvcHRpb24iLCJ3aWR0aCIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2xCO0FBQUVDLE9BQUssRUFBRSxHQUFUO0FBQWNDLEtBQUcsRUFBRTtBQUFuQixDQURrQixFQUVsQjtBQUFFRCxPQUFLLEVBQUUsV0FBVDtBQUFzQkMsS0FBRyxFQUFFO0FBQTNCLENBRmtCLEVBR2xCO0FBQUVELE9BQUssRUFBRSxLQUFUO0FBQWdCQyxLQUFHLEVBQUU7QUFBckIsQ0FIa0IsRUFJbEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEtBQUcsRUFBRTtBQUF4QixDQUprQixFQUtsQjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxLQUFHLEVBQUU7QUFBcEIsQ0FMa0IsRUFNbEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEtBQUcsRUFBRTtBQUF4QixDQU5rQixFQU9sQjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxLQUFHLEVBQUU7QUFBcEIsQ0FQa0IsRUFRbEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLEtBQUcsRUFBRTtBQUF4QixDQVJrQixDQUFwQjs7QUFXQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLEVBRGY7QUFBQSxNQUNWQyxJQURVO0FBQUEsTUFDSkMsT0FESTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQ0osV0FBRCxDQUZmO0FBQUEsTUFFVk8sSUFGVTtBQUFBLE1BRUpDLE9BRkk7O0FBSWpCQyx5REFBUyxDQUFDLFlBQU0sQ0FDZjtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDckIsUUFBR0EsQ0FBQyxDQUFDVixHQUFMLEVBQVU7QUFDTkksYUFBTyxDQUFDTSxDQUFDLENBQUNWLEdBQUgsQ0FBUDtBQUNIO0FBRUYsR0FMRDs7QUFPQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHFFQUFEO0FBQ0UsUUFBRSxFQUFDLFlBREw7QUFFRSxhQUFPLEVBQUVLLElBRlg7QUFHRSxvQkFBYyxFQUFFLHdCQUFDTSxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDWixLQUFuQjtBQUFBLE9BSGxCO0FBSUUsY0FBUSxFQUFFUyxJQUpaO0FBS0UsV0FBSyxFQUFFO0FBQUVJLGFBQUssRUFBRTtBQUFULE9BTFQ7QUFNRSxpQkFBVyxFQUFFLHFCQUFDQyxNQUFEO0FBQUEsNEJBQ1gscUVBQUMsbUVBQUQsa0NBQWVBLE1BQWY7QUFBdUIsZUFBSyxFQUFDLDJCQUE3QjtBQUFxQyxpQkFBTyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQTtBQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWNELENBNUJEOztHQUFNWixJOztLQUFBQSxJO0FBOEJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjZkYmZkYzJjZThkNTc3MWI4MjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmNvbnN0IHRvcDEwMEZpbG1zID0gW1xyXG4gIHsgdGl0bGU6IFwi66GkXCIsIGlkeDogMjAgfSxcclxuICB7IHRpdGxlOiBcIuumrOq3uCDsmKTruIwg66CI7KCE65OcXCIsIGlkeDogMjAgfSxcclxuICB7IHRpdGxlOiBcImxvbFwiLCBpZHg6IDIwIH0sXHJcbiAgeyB0aXRsZTogXCLtlLztjIzsmKjrnbzsnbg0XCIsIGlkeDogMTkgfSxcclxuICB7IHRpdGxlOiBcIu2UvO2MjFwiLCBpZHg6IDE5IH0sXHJcbiAgeyB0aXRsZTogXCLrqZTsnbTtlIzsiqTthqDrpqxcIiwgaWR4OiAxOCB9LFxyXG4gIHsgdGl0bGU6IFwi642Y7YyMXCIsIGlkeDogMTcgfSxcclxuICB7IHRpdGxlOiBcIuuNmOyghOyVpO2MjOydtO2EsFwiLCBpZHg6IDE3IH0sXHJcbl07XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtnYW1lLCBzZXRHYW1lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUodG9wMTAwRmlsbXMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAvL+yymOydjOyXkCDqsozsnoTrpqzsiqTtirjrpbwg67aI65+s7Jik6riwIOychO2VnCDrnbzsnbTtlITsgqzsnbTtgbQuIOu2iOufrOyZgOyEnCBsaXN0IOyXkCDsoIDsnqUuIFxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IHRlc3QgPSAoZSwgdikgPT4ge1xyXG4gICAgaWYodi5pZHgpIHtcclxuICAgICAgICBzZXRHYW1lKHYuaWR4KTtcclxuICAgIH1cclxuICAgIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgaWQ9XCJnYW1lc2VhcmNoXCJcclxuICAgICAgICBvcHRpb25zPXtsaXN0fVxyXG4gICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udGl0bGV9XHJcbiAgICAgICAgb25DaGFuZ2U9e3Rlc3R9XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwi6rKM7J6EIOywvuq4sFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9