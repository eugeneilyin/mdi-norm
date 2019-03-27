"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineDescription =
/*#__PURE__*/
function OutlineDescription(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M8 16h8v2H8zm0-4h8v2H8zm6-10" + _fragments.bmn
  }));
};

exports.OutlineDescription = OutlineDescription;