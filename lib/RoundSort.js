"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSort =
/*#__PURE__*/
function RoundSort(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4 18h4" + _fragments.ro + "M3 7" + _fragments.wb + "m1 6h10" + _fragments.ro
  }));
};

exports.RoundSort = RoundSort;