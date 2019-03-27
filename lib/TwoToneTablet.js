"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTablet =
/*#__PURE__*/
function TwoToneTablet(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 6h14v12H5z"
  }), _react.default.createElement("path", {
    d: "M21 4H3" + _fragments.cy + "h18" + _fragments.ke + "L23 6" + _fragments.b + "zm-2 14H5V6h14z"
  }));
};

exports.TwoToneTablet = TwoToneTablet;