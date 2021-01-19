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
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, defaultProps), {}, {
      id: "game",
      debug: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "\uAC8C\uC784 \uCC3E\uAE30",
          margin: "normal"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this);
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsInllYXIiLCJkZWZhdWx0UHJvcHMiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJvcHRpb24iLCJmbGF0UHJvcHMiLCJtYXAiLCJNYWluIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2hCO0FBQUVDLE9BQUssRUFBRSwwQkFBVDtBQUFxQ0MsTUFBSSxFQUFFO0FBQTNDLENBRGdCLEVBRWhCO0FBQUVELE9BQUssRUFBRSxlQUFUO0FBQTBCQyxNQUFJLEVBQUU7QUFBaEMsQ0FGZ0IsRUFHaEI7QUFBRUQsT0FBSyxFQUFFLHdCQUFUO0FBQW1DQyxNQUFJLEVBQUU7QUFBekMsQ0FIZ0IsRUFJaEI7QUFBRUQsT0FBSyxFQUFFLGlCQUFUO0FBQTRCQyxNQUFJLEVBQUU7QUFBbEMsQ0FKZ0IsRUFLaEI7QUFBRUQsT0FBSyxFQUFFLGNBQVQ7QUFBeUJDLE1BQUksRUFBRTtBQUEvQixDQUxnQixFQU1oQjtBQUFFRCxPQUFLLEVBQUUsa0JBQVQ7QUFBNkJDLE1BQUksRUFBRTtBQUFuQyxDQU5nQixFQU9oQjtBQUFFRCxPQUFLLEVBQUUsY0FBVDtBQUF5QkMsTUFBSSxFQUFFO0FBQS9CLENBUGdCLEVBUWhCO0FBQUVELE9BQUssRUFBRSwrQ0FBVDtBQUEwREMsTUFBSSxFQUFFO0FBQWhFLENBUmdCLEVBU2hCO0FBQUVELE9BQUssRUFBRSxnQ0FBVDtBQUEyQ0MsTUFBSSxFQUFFO0FBQWpELENBVGdCLEVBVWhCO0FBQUVELE9BQUssRUFBRSxZQUFUO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FWZ0IsRUFXaEI7QUFBRUQsT0FBSyxFQUFFLG1EQUFUO0FBQThEQyxNQUFJLEVBQUU7QUFBcEUsQ0FYZ0IsRUFZaEI7QUFBRUQsT0FBSyxFQUFFLGdE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O0FBQUEsR0FBaEI7QUFETyxDQUFsQjs7QUFJRixJQUFNUSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMscUVBQUQsa0NBQ01OLFlBRE47QUFFRSxRQUFFLEVBQUMsTUFGTDtBQUdFLFdBQUssTUFIUDtBQUlFLGlCQUFXLEVBQUUscUJBQUNPLE1BQUQ7QUFBQSw0QkFDWCxxRUFBQyxtRUFBRCxrQ0FBZUEsTUFBZjtBQUF1QixlQUFLLEVBQUMsMkJBQTdCO0FBQXFDLGdCQUFNLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBWUQsQ0FiRDs7S0FBTUQsSTtBQWdCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi5lYTZkZDFiYmQ0MjBlYmQwZDRkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5cclxuY29uc3QgdG9wMTAwRmlsbXMgPSBbXHJcbiAgICB7IHRpdGxlOiAnVGhlIFNoYXdzaGFuayBSZWRlbXB0aW9uJywgeWVhcjogMTk5NCB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBHb2RmYXRoZXInLCB5ZWFyOiAxOTcyIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIEdvZGZhdGhlcjogUGFydCBJSScsIHllYXI6IDE5NzQgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgRGFyayBLbmlnaHQnLCB5ZWFyOiAyMDA4IH0sXHJcbiAgICB7IHRpdGxlOiAnMTIgQW5ncnkgTWVuJywgeWVhcjogMTk1NyB9LFxyXG4gICAgeyB0aXRsZTogXCJTY2hpbmRsZXIncyBMaXN0XCIsIHllYXI6IDE5OTMgfSxcclxuICAgIHsgdGl0bGU6ICdQdWxwIEZpY3Rpb24nLCB5ZWFyOiAxOTk0IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJywgeWVhcjogMjAwMyB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBHb29kLCB0aGUgQmFkIGFuZCB0aGUgVWdseScsIHllYXI6IDE5NjYgfSxcclxuICAgIHsgdGl0bGU6ICdGaWdodCBDbHViJywgeWVhcjogMTk5OSB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCB5ZWFyOiAyMDAxIH0sXHJcbiAgICB7IHRpdGxlOiAnU3RhciBXYXJzOiBFcGlzb2RlIFYgLSBUaGUgRW1waXJlIFN0cmlrZXMgQmFjaycsIHllYXI6IDE5ODAgfSxcclxuICAgIHsgdGl0bGU6ICdGb3JyZXN0IEd1bXAnLCB5ZWFyOiAxOTk0IH0sXHJcbiAgICB7IHRpdGxlOiAnSW5jZXB0aW9uJywgeWVhcjogMjAxMCB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIFR3byBUb3dlcnMnLCB5ZWFyOiAyMDAyIH0sXHJcbiAgICB7IHRpdGxlOiBcIk9uZSBGbGV3IE92ZXIgdGhlIEN1Y2tvbydzIE5lc3RcIiwgeWVhcjogMTk3NSB9LFxyXG4gICAgeyB0aXRsZTogJ0dvb2RmZWxsYXMnLCB5ZWFyOiAxOTkwIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIE1hdHJpeCcsIHllYXI6IDE5OTkgfSxcclxuICAgIHsgdGl0bGU6ICdTZXZlbiBTYW11cmFpJywgeWVhcjogMTk1NCB9LFxyXG4gICAgeyB0aXRsZTogJ1N0YXIgV2FyczogRXBpc29kZSBJViAtIEEgTmV3IEhvcGUnLCB5ZWFyOiAxOTc3IH0sXHJcbiAgICB7IHRpdGxlOiAnQ2l0eSBvZiBHb2QnLCB5ZWFyOiAyMDAyIH0sXHJcbiAgICB7IHRpdGxlOiAnU2U3ZW4nLCB5ZWFyOiAxOTk1IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIFNpbGVuY2Ugb2YgdGhlIExhbWJzJywgeWVhcjogMTk5MSB9LFxyXG4gICAgeyB0aXRsZTogXCJJdCdzIGEgV29uZGVyZnVsIExpZmVcIiwgeWVhcjogMTk0NiB9LFxyXG4gICAgeyB0aXRsZTogJ0xpZmUgSXMgQmVhdXRpZnVsJywgeWVhcjogMTk5NyB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBVc3VhbCBTdXNwZWN0cycsIHllYXI6IDE5OTUgfSxcclxuICAgIHsgdGl0bGU6ICdMw6lvbjogVGhlIFByb2Zlc3Npb25hbCcsIHllYXI6IDE5OTQgfSxcclxuICAgIHsgdGl0bGU6ICdTcGlyaXRlZCBBd2F5JywgeWVhcjogMjAwMSB9LFxyXG4gICAgeyB0aXRsZTogJ1NhdmluZyBQcml2YXRlIFJ5YW4nLCB5ZWFyOiAxOTk4IH0sXHJcbiAgICB7IHRpdGxlOiAnT25jZSBVcG9uIGEgVGltZSBpbiB0aGUgV2VzdCcsIHllYXI6IDE5NjggfSxcclxuICAgIHsgdGl0bGU6ICdBbWVyaWNhbiBIaXN0b3J5IFgnLCB5ZWFyOiAxOTk4IH0sXHJcbiAgICB7IHRpdGxlOiAnSW50ZXJzdGVsbGFyJywgeWVhcjogMjAxNCB9LFxyXG4gICAgeyB0aXRsZTogJ0Nhc2FibGFuY2EnLCB5ZWFyOiAxOTQyIH0sXHJcbiAgICB7IHRpdGxlOiAnQ2l0eSBMaWdodHMnLCB5ZWFyOiAxOTMxIH0sXHJcbiAgICB7IHRpdGxlOiAnUHN5Y2hvJywgeWVhcjogMTk2MCB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBHcmVlbiBNaWxlJywgeWVhcjogMTk5OSB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBJbnRvdWNoYWJsZXMnLCB5ZWFyOiAyMDExIH0sXHJcbiAgICB7IHRpdGxlOiAnTW9kZXJuIFRpbWVzJywgeWVhcjogMTkzNiB9LFxyXG4gICAgeyB0aXRsZTogJ1JhaWRlcnMgb2YgdGhlIExvc3QgQXJrJywgeWVhcjogMTk4MSB9LFxyXG4gICAgeyB0aXRsZTogJ1JlYXIgV2luZG93JywgeWVhcjogMTk1NCB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBQaWFuaXN0JywgeWVhcjogMjAwMiB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBEZXBhcnRlZCcsIHllYXI6IDIwMDYgfSxcclxuICAgIHsgdGl0bGU6ICdUZXJtaW5hdG9yIDI6IEp1ZGdtZW50IERheScsIHllYXI6IDE5OTEgfSxcclxuICAgIHsgdGl0bGU6ICdCYWNrIHRvIHRoZSBGdXR1cmUnLCB5ZWFyOiAxOTg1IH0sXHJcbiAgICB7IHRpdGxlOiAnV2hpcGxhc2gnLCB5ZWFyOiAyMDE0IH0sXHJcbiAgICB7IHRpdGxlOiAnR2xhZGlhdG9yJywgeWVhcjogMjAwMCB9LFxyXG4gICAgeyB0aXRsZTogJ01lbWVudG8nLCB5ZWFyOiAyMDAwIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIFByZXN0aWdlJywgeWVhcjogMjAwNiB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBMaW9uIEtpbmcnLCB5ZWFyOiAxOTk0IH0sXHJcbiAgICB7IHRpdGxlOiAnQXBvY2FseXBzZSBOb3cnLCB5ZWFyOiAxOTc5IH0sXHJcbiAgICB7IHRpdGxlOiAnQWxpZW4nLCB5ZWFyOiAxOTc5IH0sXHJcbiAgICB7IHRpdGxlOiAnU3Vuc2V0IEJvdWxldmFyZCcsIHllYXI6IDE5NTAgfSxcclxuICAgIHsgdGl0bGU6ICdEci4gU3RyYW5nZWxvdmUgb3I6IEhvdyBJIExlYXJuZWQgdG8gU3RvcCBXb3JyeWluZyBhbmQgTG92ZSB0aGUgQm9tYicsIHllYXI6IDE5NjQgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgR3JlYXQgRGljdGF0b3InLCB5ZWFyOiAxOTQwIH0sXHJcbiAgICB7IHRpdGxlOiAnQ2luZW1hIFBhcmFkaXNvJywgeWVhcjogMTk4OCB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBMaXZlcyBvZiBPdGhlcnMnLCB5ZWFyOiAyMDA2IH0sXHJcbiAgICB7IHRpdGxlOiAnR3JhdmUgb2YgdGhlIEZpcmVmbGllcycsIHllYXI6IDE5ODggfSxcclxuICAgIHsgdGl0bGU6ICdQYXRocyBvZiBHbG9yeScsIHllYXI6IDE5NTcgfSxcclxuICAgIHsgdGl0bGU6ICdEamFuZ28gVW5jaGFpbmVkJywgeWVhcjogMjAxMiB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBTaGluaW5nJywgeWVhcjogMTk4MCB9LFxyXG4gICAgeyB0aXRsZTogJ1dBTEzCt0UnLCB5ZWFyOiAyMDA4IH0sXHJcbiAgICB7IHRpdGxlOiAnQW1lcmljYW4gQmVhdXR5JywgeWVhcjogMTk5OSB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBEYXJrIEtuaWdodCBSaXNlcycsIHllYXI6IDIwMTIgfSxcclxuICAgIHsgdGl0bGU6ICdQcmluY2VzcyBNb25vbm9rZScsIHllYXI6IDE5OTcgfSxcclxuICAgIHsgdGl0bGU6ICdBbGllbnMnLCB5ZWFyOiAxOTg2IH0sXHJcbiAgICB7IHRpdGxlOiAnT2xkYm95JywgeWVhcjogMjAwMyB9LFxyXG4gICAgeyB0aXRsZTogJ09uY2UgVXBvbiBhIFRpbWUgaW4gQW1lcmljYScsIHllYXI6IDE5ODQgfSxcclxuICAgIHsgdGl0bGU6ICdXaXRuZXNzIGZvciB0aGUgUHJvc2VjdXRpb24nLCB5ZWFyOiAxOTU3IH0sXHJcbiAgICB7IHRpdGxlOiAnRGFzIEJvb3QnLCB5ZWFyOiAxOTgxIH0sXHJcbiAgICB7IHRpdGxlOiAnQ2l0aXplbiBLYW5lJywgeWVhcjogMTk0MSB9LFxyXG4gICAgeyB0aXRsZTogJ05vcnRoIGJ5IE5vcnRod2VzdCcsIHllYXI6IDE5NTkgfSxcclxuICAgIHsgdGl0bGU6ICdWZXJ0aWdvJywgeWVhcjogMTk1OCB9LFxyXG4gICAgeyB0aXRsZTogJ1N0YXIgV2FyczogRXBpc29kZSBWSSAtIFJldHVybiBvZiB0aGUgSmVkaScsIHllYXI6IDE5ODMgfSxcclxuICAgIHsgdGl0bGU6ICdSZXNlcnZvaXIgRG9ncycsIHllYXI6IDE5OTIgfSxcclxuICAgIHsgdGl0bGU6ICdCcmF2ZWhlYXJ0JywgeWVhcjogMTk5NSB9LFxyXG4gICAgeyB0aXRsZTogJ00nLCB5ZWFyOiAxOTMxIH0sXHJcbiAgICB7IHRpdGxlOiAnUmVxdWllbSBmb3IgYSBEcmVhbScsIHllYXI6IDIwMDAgfSxcclxuICAgIHsgdGl0bGU6ICdBbcOpbGllJywgeWVhcjogMjAwMSB9LFxyXG4gICAgeyB0aXRsZTogJ0EgQ2xvY2t3b3JrIE9yYW5nZScsIHllYXI6IDE5NzEgfSxcclxuICAgIHsgdGl0bGU6ICdMaWtlIFN0YXJzIG9uIEVhcnRoJywgeWVhcjogMjAwNyB9LFxyXG4gICAgeyB0aXRsZTogJ1RheGkgRHJpdmVyJywgeWVhcjogMTk3NiB9LFxyXG4gICAgeyB0aXRsZTogJ0xhd3JlbmNlIG9mIEFyYWJpYScsIHllYXI6IDE5NjIgfSxcclxuICAgIHsgdGl0bGU6ICdEb3VibGUgSW5kZW1uaXR5JywgeWVhcjogMTk0NCB9LFxyXG4gICAgeyB0aXRsZTogJ0V0ZXJuYWwgU3Vuc2hpbmUgb2YgdGhlIFNwb3RsZXNzIE1pbmQnLCB5ZWFyOiAyMDA0IH0sXHJcbiAgICB7IHRpdGxlOiAnQW1hZGV1cycsIHllYXI6IDE5ODQgfSxcclxuICAgIHsgdGl0bGU6ICdUbyBLaWxsIGEgTW9ja2luZ2JpcmQnLCB5ZWFyOiAxOTYyIH0sXHJcbiAgICB7IHRpdGxlOiAnVG95IFN0b3J5IDMnLCB5ZWFyOiAyMDEwIH0sXHJcbiAgICB7IHRpdGxlOiAnTG9nYW4nLCB5ZWFyOiAyMDE3IH0sXHJcbiAgICB7IHRpdGxlOiAnRnVsbCBNZXRhbCBKYWNrZXQnLCB5ZWFyOiAxOTg3IH0sXHJcbiAgICB7IHRpdGxlOiAnRGFuZ2FsJywgeWVhcjogMjAxNiB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBTdGluZycsIHllYXI6IDE5NzMgfSxcclxuICAgIHsgdGl0bGU6ICcyMDAxOiBBIFNwYWNlIE9keXNzZXknLCB5ZWFyOiAxOTY4IH0sXHJcbiAgICB7IHRpdGxlOiBcIlNpbmdpbicgaW4gdGhlIFJhaW5cIiwgeWVhcjogMTk1MiB9LFxyXG4gICAgeyB0aXRsZTogJ1RveSBTdG9yeScsIHllYXI6IDE5OTUgfSxcclxuICAgIHsgdGl0bGU6ICdCaWN5Y2xlIFRoaWV2ZXMnLCB5ZWFyOiAxOTQ4IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIEtpZCcsIHllYXI6IDE5MjEgfSxcclxuICAgIHsgdGl0bGU6ICdJbmdsb3VyaW91cyBCYXN0ZXJkcycsIHllYXI6IDIwMDkgfSxcclxuICAgIHsgdGl0bGU6ICdTbmF0Y2gnLCB5ZWFyOiAyMDAwIH0sXHJcbiAgICB7IHRpdGxlOiAnMyBJZGlvdHMnLCB5ZWFyOiAyMDA5IH0sXHJcbiAgICB7IHRpdGxlOiAnTW9udHkgUHl0aG9uIGFuZCB0aGUgSG9seSBHcmFpbCcsIHllYXI6IDE5NzUgfSxcclxuICBdO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgb3B0aW9uczogdG9wMTAwRmlsbXMsXHJcbiAgICBnZXRPcHRpb25MYWJlbDogKG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZsYXRQcm9wcyA9IHtcclxuICAgIG9wdGlvbnM6IHRvcDEwMEZpbG1zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udGl0bGUpLFxyXG4gIH07XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgey4uLmRlZmF1bHRQcm9wc31cclxuICAgICAgICBpZD1cImdhbWVcIlxyXG4gICAgICAgIGRlYnVnXHJcbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgIDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCLqsozsnoQg7LC+6riwXCIgbWFyZ2luPVwibm9ybWFsXCIgLz5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9