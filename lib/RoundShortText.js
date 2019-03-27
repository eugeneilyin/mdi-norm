"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundShortText =
/*#__PURE__*/
function RoundShortText(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M5 9h14" + _fragments.dk + "H5" + _fragments.el + "zm0 4h8" + _fragments.dk + "H5" + _fragments.el + "z"
  }));
};

exports.RoundShortText = RoundShortText;