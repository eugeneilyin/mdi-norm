"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneViewCompact =
/*#__PURE__*/
function TwoToneViewCompact(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M11 13h9v4h-9zm-6 0h4v4H5zm0-6h15v4H5z"
  }), _react.default.createElement("path", {
    d: "M3 5v14h19V5zm6 12H5v-4h4zm11 0h-9v-4h9zm0-6H5V7h15z"
  }));
};

exports.TwoToneViewCompact = TwoToneViewCompact;