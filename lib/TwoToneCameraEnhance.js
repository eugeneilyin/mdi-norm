"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCameraEnhance =
/*#__PURE__*/
function TwoToneCameraEnhance(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.95 7l-.59-.65L14.12 5H9.88L8.65 6.35l-.6.65H4v12h16V7zM12 18" + _fragments.bv
  }), _react.default.createElement("path", {
    d: _fragments.xm
  }));
};

exports.TwoToneCameraEnhance = TwoToneCameraEnhance;