"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneToggleOff =
/*#__PURE__*/
function TwoToneToggleOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M17 8H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h10" + _fragments.ck + "s-1.79-4-4-4zM7 15" + _fragments.ee
  }), _react.default.createElement("path", {
    d: _fragments.jn + "M7 9" + _fragments.fk
  }));
};

exports.TwoToneToggleOff = TwoToneToggleOff;