"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineSwitchCamera =
/*#__PURE__*/
function OutlineSwitchCamera(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.nb + "M9.88 4h4.24l1.83 2H20v12H4V6h4.05"
  }), _react.default.createElement("path", {
    d: "M15 11H9V8.5L5.5 12 9 15.5V13h6v2.5l3.5-3.5L15 8.5z"
  }));
};

exports.OutlineSwitchCamera = OutlineSwitchCamera;