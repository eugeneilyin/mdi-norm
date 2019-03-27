"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpNfc =
/*#__PURE__*/
function SharpNfc(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M22 2H2v20h20zm-2 18H4V4h16zM18 6h-7v4.28" + _fragments.rz + "V8h3v8H8V8h2V6H6v12h12z"
  }));
};

exports.SharpNfc = SharpNfc;