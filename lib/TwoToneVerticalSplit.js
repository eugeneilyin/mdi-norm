"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneVerticalSplit =
/*#__PURE__*/
function TwoToneVerticalSplit(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15 7h4v10h-4z"
  }), _react.default.createElement("path", {
    d: "M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5zm6 12h-4V7h4z"
  }));
};

exports.TwoToneVerticalSplit = TwoToneVerticalSplit;