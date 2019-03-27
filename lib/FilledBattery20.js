"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBattery20 =
/*#__PURE__*/
function FilledBattery20(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M7 17v3.67" + _fragments.by + "V17z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bol + _fragments.iv + "V17h10z"
  }));
};

exports.FilledBattery20 = FilledBattery20;