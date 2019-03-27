"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTv =
/*#__PURE__*/
function TwoToneTv(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 5h18v12H3z"
  }), _react.default.createElement("path", {
    d: "M21 3H3" + _fragments.cy + "h5v2h8v-2h5" + _fragments.ke + "L23 5" + _fragments.b + "zm0 14H3V5h18z"
  }));
};

exports.TwoToneTv = TwoToneTv;