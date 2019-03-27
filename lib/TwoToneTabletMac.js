"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTabletMac =
/*#__PURE__*/
function TwoToneTabletMac(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 3h15v16H4z"
  }), _react.default.createElement("path", {
    d: _fragments.bex
  }));
};

exports.TwoToneTabletMac = TwoToneTabletMac;