"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePresentToAll =
/*#__PURE__*/
function TwoTonePresentToAll(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19.02h18V4.98H3zM12 8l4 4h-2v4h-4v-4H8z"
  }), _react.default.createElement("path", {
    d: "M10 16h4v-4h2l-4-4-4 4h2zM21 3H3" + _fragments.jk + "v14" + _fragments.cu + "h18" + _fragments.cv + "V5" + _fragments.cw + "zm0 16.02H3V4.98h18z"
  }));
};

exports.TwoTonePresentToAll = TwoTonePresentToAll;