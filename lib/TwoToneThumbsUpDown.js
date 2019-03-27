"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneThumbsUpDown =
/*#__PURE__*/
function TwoToneThumbsUpDown(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.jb
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M3.93 4.28L2 6.21V12h5.92L10 7.13V7H3.36zM14 16.87V17h6.64l-.57 2.72L22 17.79V12h-5.92z"
  }));
};

exports.TwoToneThumbsUpDown = TwoToneThumbsUpDown;