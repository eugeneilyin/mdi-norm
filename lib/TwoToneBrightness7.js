"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBrightness7 =
/*#__PURE__*/
function TwoToneBrightness7(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bmz
  }), _react.default.createElement("path", {
    d: _fragments.hw
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }));
};

exports.TwoToneBrightness7 = TwoToneBrightness7;