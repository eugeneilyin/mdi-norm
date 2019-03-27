"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpGradient =
/*#__PURE__*/
function SharpGradient(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M11 9" + _fragments.fs + "m-2 2h2v2H9zm4 0" + _fragments.fs + "m2-2" + _fragments.fs + "M7 9h2v2H7zm14-6H3v18h18z" + _fragments.bng + "V5h14z"
  }));
};

exports.SharpGradient = SharpGradient;