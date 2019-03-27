"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundBorderColor =
/*#__PURE__*/
function RoundBorderColor(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M17.75 7L14 3.25 4.15 13.1c-.1.1-.15.22-.15.36v3.04" + _fragments.pu + "h3.04" + _fragments.bmu + "zm2.96-2.96" + _fragments.fo + "L18.37.29" + _fragments.cg + "L15 2.25 18.75 6z"
  }), _react.default.createElement("path", {
    opacity: ".36",
    d: "M2 20h20" + _fragments.bnj + "H2" + _fragments.bo + "s.9-2 2-2z"
  }));
};

exports.RoundBorderColor = RoundBorderColor;