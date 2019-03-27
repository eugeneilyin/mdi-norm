"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLens =
/*#__PURE__*/
function TwoToneLens(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs
  }), _react.default.createElement("path", {
    d: _fragments.ku
  }));
};

exports.TwoToneLens = TwoToneLens;