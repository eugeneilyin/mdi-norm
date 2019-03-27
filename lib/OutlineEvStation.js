"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineEvStation =
/*#__PURE__*/
function OutlineEvStation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.ep + "M12 11v8H6V5h6zm6-1" + _fragments.bj + "m-8-4l-4 7.5h2V18l4-7h-2z"
  }));
};

exports.OutlineEvStation = OutlineEvStation;