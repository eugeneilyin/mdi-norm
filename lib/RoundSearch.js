"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSearch =
/*#__PURE__*/
function RoundSearch(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.xs + "l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49" + _fragments.io
  }));
};

exports.RoundSearch = RoundSearch;