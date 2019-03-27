"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBattery60 =
/*#__PURE__*/
function FilledBattery60(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bol + _fragments.iv + "V11h10z"
  }), _react.default.createElement("path", {
    d: "M7 11v9.67" + _fragments.by + "V11z"
  }));
};

exports.FilledBattery60 = FilledBattery60;