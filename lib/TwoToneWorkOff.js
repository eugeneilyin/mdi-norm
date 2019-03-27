"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneWorkOff =
/*#__PURE__*/
function TwoToneWorkOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 8v11h13.74l-11-11zm8.4 0l7.6 7.6V8z"
  }), _react.default.createElement("path", {
    d: _fragments.ym
  }));
};

exports.TwoToneWorkOff = TwoToneWorkOff;