"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePauseCircleFilled =
/*#__PURE__*/
function TwoTonePauseCircleFilled(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m-1 12H9V8h2zm4 0h-2V8h2z"
  }), _react.default.createElement("path", {
    d: "M13 8h2v8h-2zM9 8h2v8H9zm3-6" + _fragments.i + _fragments.y
  }));
};

exports.TwoTonePauseCircleFilled = TwoTonePauseCircleFilled;