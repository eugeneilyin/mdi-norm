"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDevicesOther =
/*#__PURE__*/
function TwoToneDevicesOther(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M17 10h4v8h-4z"
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "11",
    cy: "16",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: "M3 6h18V4H3" + _fragments.cy + "h4v-2H3zm19 2" + _fragments.zf + "m-8-6" + _fragments.bmk
  }));
};

exports.TwoToneDevicesOther = TwoToneDevicesOther;