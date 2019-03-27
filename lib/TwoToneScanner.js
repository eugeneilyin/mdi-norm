"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneScanner =
/*#__PURE__*/
function TwoToneScanner(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 14v4h14v-4zm3 3H6v-2h2zm10 0h-8v-2h8z"
  }), _react.default.createElement("path", {
    d: _fragments.bbo + "M19 18H5v-4h14zM6 15h2v2H6zm4 0h8v2h-8z"
  }));
};

exports.TwoToneScanner = TwoToneScanner;