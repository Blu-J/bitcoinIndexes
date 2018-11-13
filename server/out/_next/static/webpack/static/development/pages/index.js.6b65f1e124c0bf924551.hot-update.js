webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: matchOrder, OrderChart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchOrder", function() { return matchOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderChart", function() { return OrderChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var ts_matches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-matches */ "./node_modules/ts-matches/lib/matches.js");
/* harmony import */ var ts_matches__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_matches__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_with_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-with-hooks */ "./node_modules/react-with-hooks/lib/index.js");
/* harmony import */ var react_with_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_with_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _lib_initApollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/initApollo */ "./lib/initApollo.js");
var _jsxFileName = "/Users/justin/projects/shapeshiftInterview/client/pages/index.tsx";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query Orders($market: String!, $exchanges: [String]!) {\n    orders(exchanges: $exchanges, market: $market) {\n      price\n      amount\n      serverName\n      type\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var matchOrder = ts_matches__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
  price: ts_matches__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  amount: ts_matches__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  type: ts_matches__WEBPACK_IMPORTED_MODULE_4___default.a.some(ts_matches__WEBPACK_IMPORTED_MODULE_4___default.a.literal("bid"), ts_matches__WEBPACK_IMPORTED_MODULE_4___default.a.literal("ask")),
  serverName: ts_matches__WEBPACK_IMPORTED_MODULE_4___default.a.string
});
var Plot = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../Components/plotly */ "./Components/plotly.ts")), {
  ssr: false
});
var QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var Market;

(function (Market) {
  Market["ETH"] = "ETH";
  Market["DOGE"] = "DOGE";
  Market["LTC"] = "LTC";
})(Market || (Market = {}));

var allMarkets = [["Ehtereum", Market.ETH], ["Doge Coin", Market.DOGE], ["Lite Coin", Market.LTC]];
var Exchange;

(function (Exchange) {
  Exchange["poloniex"] = "poloniex";
  Exchange["bittrex"] = "bittrex";
  Exchange["gdax"] = "gdax";
  Exchange["gemini"] = "gemini";
})(Exchange || (Exchange = {}));

var allExchanges = [["Poloniex", Exchange.poloniex], ["Bittrex", Exchange.bittrex], ["GDAX", Exchange.gdax], ["Gemini", Exchange.gemini]];
var defaultState = {
  market: Market.DOGE,
  exchanges: [Exchange.bittrex, Exchange.poloniex]
};

var reducer = function reducer(state, update) {
  return Object(immer__WEBPACK_IMPORTED_MODULE_10__["default"])(state, update);
};

var useQuery = function useQuery(query, variables) {
  var _useState = Object(react_with_hooks__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    loading: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      updateState = _useState2[1];

  Object(react_with_hooks__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(_lib_initApollo__WEBPACK_IMPORTED_MODULE_12__["default"])({}).query({
      query: query,
      variables: variables
    }).then(function (goodValue) {
      updateState({
        loading: false,
        data: goodValue.data
      });
    }, function (badValue) {
      updateState({
        loading: false,
        error: String(badValue)
      });
    });
    return function () {
      return void 0;
    };
  }, [variables]);
  return state;
};

var OrderChart = function OrderChart(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Plot, {
    data: props.orders.reduce(function (acc, order) {
      var index = acc.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            a = _ref2[0];

        return a;
      }).indexOf(order.serverName);

      if (index < 0) {
        return _toConsumableArray(acc).concat([[order.serverName, [order]]]);
      }

      acc[index][1].push(order);
      return acc;
    }, []).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          orders = _ref4[1];

      return {
        x: orders.map(function (x) {
          return x.price;
        }),
        y: orders.map(function (x) {
          return x.amount;
        }),
        name: key,
        type: "bar"
      };
    }),
    layout: {
      title: props.name,
      barmode: "relative",
      yaxis: {
        type: "log",
        title: "Amount"
      },
      xaxis: {
        title: "Price"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (react_with_hooks__WEBPACK_IMPORTED_MODULE_5___default()(function Index() {
  var _useReducer = Object(react_with_hooks__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, defaultState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      update = _useReducer2[1];

  var query = useQuery(QUERY, state);
  var data = query.data || [];
  console.log("Data is ", data);
  var orders = ts_matches__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    orders: ts_matches__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(matchOrder)
  }).unsafeCast(data).orders;
  var asks = orders.filter(function (x) {
    return x.type === "ask";
  });
  var bids = orders.filter(function (x) {
    return x.type === "bid";
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Bitcoin Books"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: state.market,
    onChange: function onChange(event) {
      return update(function (x) {
        x.market = event.target.value;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, allMarkets.map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        name = _ref6[0],
        market = _ref6[1];

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
      key: market,
      value: market,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, name);
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["InputLabel"], {
    htmlFor: "select-multiple-checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Exchanges"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default.a, {
    multiple: true,
    value: state.exchanges,
    onChange: function onChange(element) {
      return update(function (x) {
        x.exchanges = element.target.value;
      });
    },
    input: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Input"], {
      id: "select-multiple-checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }),
    renderValue: function renderValue(selected) {
      return selected.join(", ");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, allExchanges.map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        name = _ref8[0],
        value = _ref8[1];

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
      key: name,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Checkbox"], {
      checked: state.exchanges.indexOf(value) > -1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["ListItemText"], {
      primary: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }));
  })))), query.loading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "Loading...") : query.error ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Error :(", JSON.stringify(query.error, null, 2)) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OrderChart, {
    name: "Asks",
    orders: asks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OrderChart, {
    name: "Asks2",
    orders: asks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Plot, {
    data: bids.reduce(function (acc, order) {
      var index = acc.map(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 1),
            a = _ref10[0];

        return a;
      }).indexOf(order.serverName);

      if (index === -1) {
        return _toConsumableArray(acc).concat([[order.serverName, [order]]]);
      }

      acc[index][1].push(order);
      return acc;
    }, []).map(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2),
          key = _ref12[0],
          orders = _ref12[1];

      return {
        x: orders.map(function (x) {
          return x.price;
        }),
        y: orders.map(function (x) {
          return x.amount;
        }),
        name: key,
        type: "bar"
      };
    }),
    layout: {
      title: "Bids",
      barmode: "relative",
      yaxis: {
        type: "log",
        title: "Amount"
      },
      xaxis: {
        title: "Price"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "Asks Table"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    width: 600,
    height: 500,
    headerHeight: 30,
    rowHeight: 50,
    rowCount: bids.length,
    rowGetter: function rowGetter(_ref13) {
      var index = _ref13.index;
      return bids[index];
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    label: "Rate",
    dataKey: "price",
    width: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    label: "Amount",
    dataKey: "amount",
    width: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    label: "Exchange Name",
    dataKey: "serverName",
    width: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "Bids Table"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    width: 600,
    height: 500,
    headerHeight: 30,
    rowHeight: 50,
    rowCount: asks.length,
    rowGetter: function rowGetter(_ref14) {
      var index = _ref14.index;
      return asks[index];
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    label: "Rate",
    dataKey: "price",
    width: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    label: "Amount",
    dataKey: "amount",
    width: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    label: "Exchange Name",
    dataKey: "serverName",
    width: 300,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }))))));
}));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.6b65f1e124c0bf924551.hot-update.js.map