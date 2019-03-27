"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledCropSquare =
/*#__PURE__*/
function FilledCropSquare(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M18 4H6" + _fragments.cy + "h12" + _fragments.sq + "zm0 14H6V6h12z"
  }));
};

exports.FilledCropSquare = FilledCropSquare;