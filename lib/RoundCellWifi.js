"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundCellWifi =
/*#__PURE__*/
function RoundCellWifi(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8.41 22H20" + _fragments.a + "V8.39" + _fragments.hp + "L7.7 20.29c-.63.63-.18 1.71.71 1.71z"
  }), _react.default.createElement("path", {
    d: "M7.71 20.29" + _fragments.gy + "H18V9.98zm1.36-9.22" + _fragments.bov + "m-.7-1.77c1.57-1.12 3.7-1.12 5.27 0 .36.26.85.22 1.16-.1.39-.39.35-1.06-.1-1.38-2.2-1.57-5.19-1.57-7.4 0-.45.32-.5.99-.1 1.38.32.32.81.36 1.17.1zm7.84-2.61c.34.28.83.28 1.14-.03l.12-.12c.35-.35.31-.92-.08-1.24-3.67-3.05-9.02-3.07-12.7-.06-.43.35-.47.99-.08 1.37.32.33.84.37 1.19.08 3.01-2.48 7.4-2.48 10.41 0z"
  }));
};

exports.RoundCellWifi = RoundCellWifi;