"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneImageAspectRatio =
/*#__PURE__*/
function TwoToneImageAspectRatio(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 18h16V6H4zm10-8" + _fragments.gq + "m-4-4" + _fragments.fs + "m-4 0h2v2H6z"
  }), _react.default.createElement("path", {
    d: "M14 10" + _fragments.gq + "m-8-4h2v2H6zm4 0" + _fragments.fs + "m10-6" + _fragments.na + "m0 14H4V6h16z"
  }));
};

exports.TwoToneImageAspectRatio = TwoToneImageAspectRatio;