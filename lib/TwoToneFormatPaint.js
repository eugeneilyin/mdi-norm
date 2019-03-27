"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFormatPaint =
/*#__PURE__*/
function TwoToneFormatPaint(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 4h10v2H6z"
  }), _react.default.createElement("path", {
    d: "M17 2" + _fragments.bog + "h-3V3" + _fragments.g + "zm-1 4H6V4h10z"
  }));
};

exports.TwoToneFormatPaint = TwoToneFormatPaint;