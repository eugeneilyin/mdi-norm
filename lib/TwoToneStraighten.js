"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneStraighten =
/*#__PURE__*/
function TwoToneStraighten(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 12h-2V8h-2v4h-2V8h-2v4H9V8H7v4H5V8H3v8h18V8h-2z"
  }), _react.default.createElement("path", {
    d: _fragments.wo + "m0 10H3" + _fragments.bgn + "v4h2V8h2z"
  }));
};

exports.TwoToneStraighten = TwoToneStraighten;