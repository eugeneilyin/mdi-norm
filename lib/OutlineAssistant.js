"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineAssistant =
/*#__PURE__*/
function OutlineAssistant(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 2H5" + _fragments.bd + "h4l3 3 3-3h4" + _fragments.eh + "m0 16" + _fragments.zj + "V4h14zm-7-1l1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z"
  }));
};

exports.OutlineAssistant = OutlineAssistant;