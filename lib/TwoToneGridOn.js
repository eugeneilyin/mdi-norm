"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneGridOn =
/*#__PURE__*/
function TwoToneGridOn(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M10 10h4v4h-4zm0 6h4v4h-4zM4 4h4v4H4zm0 6h4v4H4zm0 6h4v4H4zM16 4h4v4h-4zm0 6h4v4h-4zm0 6h4v4h-4zM10 4h4v4h-4z"
  }), _react.default.createElement("path", {
    d: _fragments.vr + _fragments.td
  }));
};

exports.TwoToneGridOn = TwoToneGridOn;