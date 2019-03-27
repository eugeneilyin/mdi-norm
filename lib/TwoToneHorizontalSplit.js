"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneHorizontalSplit =
/*#__PURE__*/
function TwoToneHorizontalSplit(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 15v2H5v-2h14m2-10H3v2h18zm0 4H3v2h18zm0 4H3v6h18z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 15h14v2H5z"
  }));
};

exports.TwoToneHorizontalSplit = TwoToneHorizontalSplit;