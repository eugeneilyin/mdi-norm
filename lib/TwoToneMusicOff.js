"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMusicOff =
/*#__PURE__*/
function TwoToneMusicOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "10",
    cy: "17",
    r: "2"
  }), _react.default.createElement("path", {
    d: _fragments.blu
  }));
};

exports.TwoToneMusicOff = TwoToneMusicOff;