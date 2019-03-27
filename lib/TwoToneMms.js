"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMms =
/*#__PURE__*/
function TwoToneMms(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 17.17L5.17 16H20V4H4zM8.5 9.5l2.5 3.01L14.5 8l4.5 6H5z"
  }), _react.default.createElement("path", {
    d: _fragments.kw + _fragments.baa + "m-5.5-8L11 12.51 8.5 9.5 5 14h14z"
  }));
};

exports.TwoToneMms = TwoToneMms;