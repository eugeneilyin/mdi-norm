"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTraffic =
/*#__PURE__*/
function TwoToneTraffic(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9 19h6V5H9zm3-13" + _fragments.cp + "S12.83 9 12 9s-1.5-.67-1.5-1.5S11.17 6 12 6zm0 4.5" + _fragments.cq + "m0 4.5" + _fragments.cp + "S12.83 18 12 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
  }), _react.default.createElement("path", {
    d: "M20 5" + _fragments.mc + "h-3V8.86" + _fragments.mb + "zm-5 14" + _fragments.bcz
  }));
};

exports.TwoToneTraffic = TwoToneTraffic;