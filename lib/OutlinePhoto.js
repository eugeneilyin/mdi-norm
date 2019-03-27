"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlinePhoto =
/*#__PURE__*/
function OutlinePhoto(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5" + _fragments.do_ + "m-4.86 8.86l-3 3.87L9 13.14 6 17h12z"
  }));
};

exports.OutlinePhoto = OutlinePhoto;