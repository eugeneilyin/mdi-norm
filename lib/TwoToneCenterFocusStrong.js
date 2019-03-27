"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCenterFocusStrong =
/*#__PURE__*/
function TwoToneCenterFocusStrong(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "12",
    r: "3"
  }), _react.default.createElement("path", {
    d: "M7 12" + _fragments.bin + "m8 0c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3zM3 19" + _fragments.d + "h4v-2H5v-4H3zM3 5v4h2V5h4V3H5" + _fragments.c + "zm18 0" + _fragments.b + "h-4v2h4v4h2zm-2 14h-4v2h4" + _fragments.a + "v-4h-2z"
  }));
};

exports.TwoToneCenterFocusStrong = TwoToneCenterFocusStrong;