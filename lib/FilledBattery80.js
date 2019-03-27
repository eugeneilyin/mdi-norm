"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBattery80 =
/*#__PURE__*/
function FilledBattery80(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bol + _fragments.iv + "V9h10z"
  }), _react.default.createElement("path", {
    d: "M7 9v11.67" + _fragments.by + "V9z"
  }));
};

exports.FilledBattery80 = FilledBattery80;