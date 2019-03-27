"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneHdrStrong =
/*#__PURE__*/
function TwoToneHdrStrong(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M17 8" + _fragments.ce
  }), _react.default.createElement("path", {
    d: "M17 6" + _fragments.fw + "m0 10" + _fragments.dd + "M5 16" + _fragments.ck + "S7.21 8 5 8s-4 1.79-4 4 1.79 4 4 4zm0-6" + _fragments.cn + "z"
  }));
};

exports.TwoToneHdrStrong = TwoToneHdrStrong;