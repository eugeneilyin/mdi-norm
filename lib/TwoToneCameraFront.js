"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCameraFront =
/*#__PURE__*/
function TwoToneCameraFront(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 14h10v2H7z"
  }), _react.default.createElement("path", {
    d: _fragments.xp
  }));
};

exports.TwoToneCameraFront = TwoToneCameraFront;