"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRadio =
/*#__PURE__*/
function TwoToneRadio(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M20 13H4v7h16zM8 18.98" + _fragments.gh
  }), _react.default.createElement("path", {
    d: "M2 20" + _fragments.cr + "h16" + _fragments.dy + "V8" + _fragments.cw + "H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8zM4 8h16v3h-2V9h-2v2H4zm0 5h16v7H4z"
  }), _react.default.createElement("circle", {
    cx: "8",
    cy: "16.48",
    r: "2.5"
  }));
};

exports.TwoToneRadio = TwoToneRadio;