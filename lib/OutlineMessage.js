"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineMessage =
/*#__PURE__*/
function OutlineMessage(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4 4h16v12H5.17L4 17.17V4m0-2" + _fragments.bm + "L2 22l4-4h14" + _fragments.eh + "m2 10" + _fragments.bkq + "m0-3h12v2H6z"
  }));
};

exports.OutlineMessage = OutlineMessage;