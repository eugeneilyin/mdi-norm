"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneWebAsset =
/*#__PURE__*/
function TwoToneWebAsset(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 8h14v10H5z"
  }), _react.default.createElement("path", {
    d: _fragments.ut + _fragments.dz + "m0 14H5V8h14z"
  }));
};

exports.TwoToneWebAsset = TwoToneWebAsset;