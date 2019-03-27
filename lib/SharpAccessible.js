"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpAccessible =
/*#__PURE__*/
function SharpAccessible(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "4",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M19 13v-2c-1.54.02-3.09-.75-4.07-1.83" + _fragments.bfv + "c-.37-.21-.78-.31-1.25-.25C10.73 7.15 10 8.07 10 9.1V17h7v5h2v-7.5h-5v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5" + _fragments.qs
  }));
};

exports.SharpAccessible = SharpAccessible;