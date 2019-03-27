"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneLayers =
/*#__PURE__*/
function TwoToneLayers(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6.26 9L12 13.47 17.74 9 12 4.53z"
  }), _react.default.createElement("path", {
    d: "M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"
  }));
};

exports.TwoToneLayers = TwoToneLayers;