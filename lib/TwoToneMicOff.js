"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMicOff =
/*#__PURE__*/
function TwoToneMicOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 3.7c-.66 0-1.2.54-1.2 1.2v1.51l2.39 2.39.01-3.9c0-.66-.54-1.2-1.2-1.2z"
  }), _react.default.createElement("path", {
    d: _fragments.qh + _fragments.bmy
  }));
};

exports.TwoToneMicOff = TwoToneMicOff;