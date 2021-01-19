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
      게임: true,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, params), {}, {
          label: "debug",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi50c3giXSwibmFtZXMiOlsidG9wMTAwRmlsbXMiLCJ0aXRsZSIsInllYXIiLCJkZWZhdWx0UHJvcHMiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJvcHRpb24iLCJmbGF0UHJvcHMiLCJtYXAiLCJNYWluIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2hCO0FBQUVDLE9BQUssRUFBRSwwQkFBVDtBQUFxQ0MsTUFBSSxFQUFFO0FBQTNDLENBRGdCLEVBRWhCO0FBQUVELE9BQUssRUFBRSxlQUFUO0FBQTBCQyxNQUFJLEVBQUU7QUFBaEMsQ0FGZ0IsRUFHaEI7QUFBRUQsT0FBSyxFQUFFLHdCQUFUO0FBQW1DQyxNQUFJLEVBQUU7QUFBekMsQ0FIZ0IsRUFJaEI7QUFBRUQsT0FBSyxFQUFFLGlCQUFUO0FBQTRCQyxNQUFJLEVBQUU7QUFBbEMsQ0FKZ0IsRUFLaEI7QUFBRUQsT0FBSyxFQUFFLGNBQVQ7QUFBeUJDLE1BQUksRUFBRTtBQUEvQixDQUxnQixFQU1oQjtBQUFFRCxPQUFLLEVBQUUsa0JBQVQ7QUFBNkJDLE1BQUksRUFBRTtBQUFuQyxDQU5nQixFQU9oQjtBQUFFRCxPQUFLLEVBQUUsY0FBVDtBQUF5QkMsTUFBSSxFQUFFO0FBQS9CLENBUGdCLEVBUWhCO0FBQUVELE9BQUssRUFBRSwrQ0FBVDtBQUEwREMsTUFBSSxFQUFFO0FBQWhFLENBUmdCLEVBU2hCO0FBQUVELE9BQUssRUFBRSxnQ0FBVDtBQUEyQ0MsTUFBSSxFQUFFO0FBQWpELENBVGdCLEVBVWhCO0FBQUVELE9BQUssRUFBRSxZQUFUO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FWZ0IsRUFXaEI7QUFBRUQsT0FBSyxFQUFFLG1EQUFUO0FBQThEQyxNQUFJLEVBQUU7QUFBcEUsQ0FYZ0IsRUFZaEI7QUFBRUQsT0FBSyxFQUFFLGdE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O0FBQUEsR0FBaEI7QUFETyxDQUFsQjs7QUFJRixJQUFNUSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMscUVBQUQsa0NBQ01OLFlBRE47QUFFRSxRQUFFLEVBQUMsTUFGTDtBQUdFLFFBQUUsTUFISjtBQUlFLGlCQUFXLEVBQUUscUJBQUNPLE1BQUQ7QUFBQSw0QkFDWCxxRUFBQyxtRUFBRCxrQ0FBZUEsTUFBZjtBQUF1QixlQUFLLEVBQUMsT0FBN0I7QUFBcUMsZ0JBQU0sRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUE7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFZRCxDQWJEOztLQUFNRCxJO0FBZ0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjViNDk3NmExYWI4MDFjNDEyNjBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcblxyXG5jb25zdCB0b3AxMDBGaWxtcyA9IFtcclxuICAgIHsgdGl0bGU6ICdUaGUgU2hhd3NoYW5rIFJlZGVtcHRpb24nLCB5ZWFyOiAxOTk0IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIEdvZGZhdGhlcicsIHllYXI6IDE5NzIgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgR29kZmF0aGVyOiBQYXJ0IElJJywgeWVhcjogMTk3NCB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBEYXJrIEtuaWdodCcsIHllYXI6IDIwMDggfSxcclxuICAgIHsgdGl0bGU6ICcxMiBBbmdyeSBNZW4nLCB5ZWFyOiAxOTU3IH0sXHJcbiAgICB7IHRpdGxlOiBcIlNjaGluZGxlcidzIExpc3RcIiwgeWVhcjogMTk5MyB9LFxyXG4gICAgeyB0aXRsZTogJ1B1bHAgRmljdGlvbicsIHllYXI6IDE5OTQgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBSZXR1cm4gb2YgdGhlIEtpbmcnLCB5ZWFyOiAyMDAzIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIEdvb2QsIHRoZSBCYWQgYW5kIHRoZSBVZ2x5JywgeWVhcjogMTk2NiB9LFxyXG4gICAgeyB0aXRsZTogJ0ZpZ2h0IENsdWInLCB5ZWFyOiAxOTk5IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZycsIHllYXI6IDIwMDEgfSxcclxuICAgIHsgdGl0bGU6ICdTdGFyIFdhcnM6IEVwaXNvZGUgViAtIFRoZSBFbXBpcmUgU3RyaWtlcyBCYWNrJywgeWVhcjogMTk4MCB9LFxyXG4gICAgeyB0aXRsZTogJ0ZvcnJlc3QgR3VtcCcsIHllYXI6IDE5OTQgfSxcclxuICAgIHsgdGl0bGU6ICdJbmNlcHRpb24nLCB5ZWFyOiAyMDEwIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgVHdvIFRvd2VycycsIHllYXI6IDIwMDIgfSxcclxuICAgIHsgdGl0bGU6IFwiT25lIEZsZXcgT3ZlciB0aGUgQ3Vja29vJ3MgTmVzdFwiLCB5ZWFyOiAxOTc1IH0sXHJcbiAgICB7IHRpdGxlOiAnR29vZGZlbGxhcycsIHllYXI6IDE5OTAgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgTWF0cml4JywgeWVhcjogMTk5OSB9LFxyXG4gICAgeyB0aXRsZTogJ1NldmVuIFNhbXVyYWknLCB5ZWFyOiAxOTU0IH0sXHJcbiAgICB7IHRpdGxlOiAnU3RhciBXYXJzOiBFcGlzb2RlIElWIC0gQSBOZXcgSG9wZScsIHllYXI6IDE5NzcgfSxcclxuICAgIHsgdGl0bGU6ICdDaXR5IG9mIEdvZCcsIHllYXI6IDIwMDIgfSxcclxuICAgIHsgdGl0bGU6ICdTZTdlbicsIHllYXI6IDE5OTUgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgU2lsZW5jZSBvZiB0aGUgTGFtYnMnLCB5ZWFyOiAxOTkxIH0sXHJcbiAgICB7IHRpdGxlOiBcIkl0J3MgYSBXb25kZXJmdWwgTGlmZVwiLCB5ZWFyOiAxOTQ2IH0sXHJcbiAgICB7IHRpdGxlOiAnTGlmZSBJcyBCZWF1dGlmdWwnLCB5ZWFyOiAxOTk3IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIFVzdWFsIFN1c3BlY3RzJywgeWVhcjogMTk5NSB9LFxyXG4gICAgeyB0aXRsZTogJ0zDqW9uOiBUaGUgUHJvZmVzc2lvbmFsJywgeWVhcjogMTk5NCB9LFxyXG4gICAgeyB0aXRsZTogJ1NwaXJpdGVkIEF3YXknLCB5ZWFyOiAyMDAxIH0sXHJcbiAgICB7IHRpdGxlOiAnU2F2aW5nIFByaXZhdGUgUnlhbicsIHllYXI6IDE5OTggfSxcclxuICAgIHsgdGl0bGU6ICdPbmNlIFVwb24gYSBUaW1lIGluIHRoZSBXZXN0JywgeWVhcjogMTk2OCB9LFxyXG4gICAgeyB0aXRsZTogJ0FtZXJpY2FuIEhpc3RvcnkgWCcsIHllYXI6IDE5OTggfSxcclxuICAgIHsgdGl0bGU6ICdJbnRlcnN0ZWxsYXInLCB5ZWFyOiAyMDE0IH0sXHJcbiAgICB7IHRpdGxlOiAnQ2FzYWJsYW5jYScsIHllYXI6IDE5NDIgfSxcclxuICAgIHsgdGl0bGU6ICdDaXR5IExpZ2h0cycsIHllYXI6IDE5MzEgfSxcclxuICAgIHsgdGl0bGU6ICdQc3ljaG8nLCB5ZWFyOiAxOTYwIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIEdyZWVuIE1pbGUnLCB5ZWFyOiAxOTk5IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIEludG91Y2hhYmxlcycsIHllYXI6IDIwMTEgfSxcclxuICAgIHsgdGl0bGU6ICdNb2Rlcm4gVGltZXMnLCB5ZWFyOiAxOTM2IH0sXHJcbiAgICB7IHRpdGxlOiAnUmFpZGVycyBvZiB0aGUgTG9zdCBBcmsnLCB5ZWFyOiAxOTgxIH0sXHJcbiAgICB7IHRpdGxlOiAnUmVhciBXaW5kb3cnLCB5ZWFyOiAxOTU0IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIFBpYW5pc3QnLCB5ZWFyOiAyMDAyIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIERlcGFydGVkJywgeWVhcjogMjAwNiB9LFxyXG4gICAgeyB0aXRsZTogJ1Rlcm1pbmF0b3IgMjogSnVkZ21lbnQgRGF5JywgeWVhcjogMTk5MSB9LFxyXG4gICAgeyB0aXRsZTogJ0JhY2sgdG8gdGhlIEZ1dHVyZScsIHllYXI6IDE5ODUgfSxcclxuICAgIHsgdGl0bGU6ICdXaGlwbGFzaCcsIHllYXI6IDIwMTQgfSxcclxuICAgIHsgdGl0bGU6ICdHbGFkaWF0b3InLCB5ZWFyOiAyMDAwIH0sXHJcbiAgICB7IHRpdGxlOiAnTWVtZW50bycsIHllYXI6IDIwMDAgfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgUHJlc3RpZ2UnLCB5ZWFyOiAyMDA2IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIExpb24gS2luZycsIHllYXI6IDE5OTQgfSxcclxuICAgIHsgdGl0bGU6ICdBcG9jYWx5cHNlIE5vdycsIHllYXI6IDE5NzkgfSxcclxuICAgIHsgdGl0bGU6ICdBbGllbicsIHllYXI6IDE5NzkgfSxcclxuICAgIHsgdGl0bGU6ICdTdW5zZXQgQm91bGV2YXJkJywgeWVhcjogMTk1MCB9LFxyXG4gICAgeyB0aXRsZTogJ0RyLiBTdHJhbmdlbG92ZSBvcjogSG93IEkgTGVhcm5lZCB0byBTdG9wIFdvcnJ5aW5nIGFuZCBMb3ZlIHRoZSBCb21iJywgeWVhcjogMTk2NCB9LFxyXG4gICAgeyB0aXRsZTogJ1RoZSBHcmVhdCBEaWN0YXRvcicsIHllYXI6IDE5NDAgfSxcclxuICAgIHsgdGl0bGU6ICdDaW5lbWEgUGFyYWRpc28nLCB5ZWFyOiAxOTg4IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIExpdmVzIG9mIE90aGVycycsIHllYXI6IDIwMDYgfSxcclxuICAgIHsgdGl0bGU6ICdHcmF2ZSBvZiB0aGUgRmlyZWZsaWVzJywgeWVhcjogMTk4OCB9LFxyXG4gICAgeyB0aXRsZTogJ1BhdGhzIG9mIEdsb3J5JywgeWVhcjogMTk1NyB9LFxyXG4gICAgeyB0aXRsZTogJ0RqYW5nbyBVbmNoYWluZWQnLCB5ZWFyOiAyMDEyIH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIFNoaW5pbmcnLCB5ZWFyOiAxOTgwIH0sXHJcbiAgICB7IHRpdGxlOiAnV0FMTMK3RScsIHllYXI6IDIwMDggfSxcclxuICAgIHsgdGl0bGU6ICdBbWVyaWNhbiBCZWF1dHknLCB5ZWFyOiAxOTk5IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIERhcmsgS25pZ2h0IFJpc2VzJywgeWVhcjogMjAxMiB9LFxyXG4gICAgeyB0aXRsZTogJ1ByaW5jZXNzIE1vbm9ub2tlJywgeWVhcjogMTk5NyB9LFxyXG4gICAgeyB0aXRsZTogJ0FsaWVucycsIHllYXI6IDE5ODYgfSxcclxuICAgIHsgdGl0bGU6ICdPbGRib3knLCB5ZWFyOiAyMDAzIH0sXHJcbiAgICB7IHRpdGxlOiAnT25jZSBVcG9uIGEgVGltZSBpbiBBbWVyaWNhJywgeWVhcjogMTk4NCB9LFxyXG4gICAgeyB0aXRsZTogJ1dpdG5lc3MgZm9yIHRoZSBQcm9zZWN1dGlvbicsIHllYXI6IDE5NTcgfSxcclxuICAgIHsgdGl0bGU6ICdEYXMgQm9vdCcsIHllYXI6IDE5ODEgfSxcclxuICAgIHsgdGl0bGU6ICdDaXRpemVuIEthbmUnLCB5ZWFyOiAxOTQxIH0sXHJcbiAgICB7IHRpdGxlOiAnTm9ydGggYnkgTm9ydGh3ZXN0JywgeWVhcjogMTk1OSB9LFxyXG4gICAgeyB0aXRsZTogJ1ZlcnRpZ28nLCB5ZWFyOiAxOTU4IH0sXHJcbiAgICB7IHRpdGxlOiAnU3RhciBXYXJzOiBFcGlzb2RlIFZJIC0gUmV0dXJuIG9mIHRoZSBKZWRpJywgeWVhcjogMTk4MyB9LFxyXG4gICAgeyB0aXRsZTogJ1Jlc2Vydm9pciBEb2dzJywgeWVhcjogMTk5MiB9LFxyXG4gICAgeyB0aXRsZTogJ0JyYXZlaGVhcnQnLCB5ZWFyOiAxOTk1IH0sXHJcbiAgICB7IHRpdGxlOiAnTScsIHllYXI6IDE5MzEgfSxcclxuICAgIHsgdGl0bGU6ICdSZXF1aWVtIGZvciBhIERyZWFtJywgeWVhcjogMjAwMCB9LFxyXG4gICAgeyB0aXRsZTogJ0Ftw6lsaWUnLCB5ZWFyOiAyMDAxIH0sXHJcbiAgICB7IHRpdGxlOiAnQSBDbG9ja3dvcmsgT3JhbmdlJywgeWVhcjogMTk3MSB9LFxyXG4gICAgeyB0aXRsZTogJ0xpa2UgU3RhcnMgb24gRWFydGgnLCB5ZWFyOiAyMDA3IH0sXHJcbiAgICB7IHRpdGxlOiAnVGF4aSBEcml2ZXInLCB5ZWFyOiAxOTc2IH0sXHJcbiAgICB7IHRpdGxlOiAnTGF3cmVuY2Ugb2YgQXJhYmlhJywgeWVhcjogMTk2MiB9LFxyXG4gICAgeyB0aXRsZTogJ0RvdWJsZSBJbmRlbW5pdHknLCB5ZWFyOiAxOTQ0IH0sXHJcbiAgICB7IHRpdGxlOiAnRXRlcm5hbCBTdW5zaGluZSBvZiB0aGUgU3BvdGxlc3MgTWluZCcsIHllYXI6IDIwMDQgfSxcclxuICAgIHsgdGl0bGU6ICdBbWFkZXVzJywgeWVhcjogMTk4NCB9LFxyXG4gICAgeyB0aXRsZTogJ1RvIEtpbGwgYSBNb2NraW5nYmlyZCcsIHllYXI6IDE5NjIgfSxcclxuICAgIHsgdGl0bGU6ICdUb3kgU3RvcnkgMycsIHllYXI6IDIwMTAgfSxcclxuICAgIHsgdGl0bGU6ICdMb2dhbicsIHllYXI6IDIwMTcgfSxcclxuICAgIHsgdGl0bGU6ICdGdWxsIE1ldGFsIEphY2tldCcsIHllYXI6IDE5ODcgfSxcclxuICAgIHsgdGl0bGU6ICdEYW5nYWwnLCB5ZWFyOiAyMDE2IH0sXHJcbiAgICB7IHRpdGxlOiAnVGhlIFN0aW5nJywgeWVhcjogMTk3MyB9LFxyXG4gICAgeyB0aXRsZTogJzIwMDE6IEEgU3BhY2UgT2R5c3NleScsIHllYXI6IDE5NjggfSxcclxuICAgIHsgdGl0bGU6IFwiU2luZ2luJyBpbiB0aGUgUmFpblwiLCB5ZWFyOiAxOTUyIH0sXHJcbiAgICB7IHRpdGxlOiAnVG95IFN0b3J5JywgeWVhcjogMTk5NSB9LFxyXG4gICAgeyB0aXRsZTogJ0JpY3ljbGUgVGhpZXZlcycsIHllYXI6IDE5NDggfSxcclxuICAgIHsgdGl0bGU6ICdUaGUgS2lkJywgeWVhcjogMTkyMSB9LFxyXG4gICAgeyB0aXRsZTogJ0luZ2xvdXJpb3VzIEJhc3RlcmRzJywgeWVhcjogMjAwOSB9LFxyXG4gICAgeyB0aXRsZTogJ1NuYXRjaCcsIHllYXI6IDIwMDAgfSxcclxuICAgIHsgdGl0bGU6ICczIElkaW90cycsIHllYXI6IDIwMDkgfSxcclxuICAgIHsgdGl0bGU6ICdNb250eSBQeXRob24gYW5kIHRoZSBIb2x5IEdyYWlsJywgeWVhcjogMTk3NSB9LFxyXG4gIF07XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvcHRpb25zOiB0b3AxMDBGaWxtcyxcclxuICAgIGdldE9wdGlvbkxhYmVsOiAob3B0aW9uKSA9PiBvcHRpb24udGl0bGUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmxhdFByb3BzID0ge1xyXG4gICAgb3B0aW9uczogdG9wMTAwRmlsbXMubWFwKChvcHRpb24pID0+IG9wdGlvbi50aXRsZSksXHJcbiAgfTtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICB7Li4uZGVmYXVsdFByb3BzfVxyXG4gICAgICAgIGlkPVwiZ2FtZVwiXHJcbiAgICAgICAg6rKM7J6EXHJcbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgIDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJkZWJ1Z1wiIG1hcmdpbj1cIm5vcm1hbFwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==