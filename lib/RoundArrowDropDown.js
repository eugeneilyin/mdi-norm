"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundArrowDropDown =
/*#__PURE__*/
function RoundArrowDropDown(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M8.71 11.71l2.59 2.59" + _fragments.du + "l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"
  }));
};

exports.RoundArrowDropDown = RoundArrowDropDown;