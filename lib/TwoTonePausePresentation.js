"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePausePresentation =
/*#__PURE__*/
function TwoTonePausePresentation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19h18V5H3zM13 8h2v8h-2zM9 8h2v8H9z"
  }), _react.default.createElement("path", {
    d: _fragments.xh + "M9 8h2v8H9zm4 0h2v8h-2z"
  }));
};

exports.TwoTonePausePresentation = TwoTonePausePresentation;