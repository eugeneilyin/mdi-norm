"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineScanner =
/*#__PURE__*/
function OutlineScanner(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bbo + "M19 18H5v-4h14zM6 15h2v2H6zm4 0h8v2h-8z"
  }));
};

exports.OutlineScanner = OutlineScanner;