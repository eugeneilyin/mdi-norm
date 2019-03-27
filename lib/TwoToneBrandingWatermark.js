"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBrandingWatermark =
/*#__PURE__*/
function TwoToneBrandingWatermark(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19h18V5H3zm8-7h9v6h-9z"
  }), _react.default.createElement("path", {
    d: _fragments.xh + "m-10-7h9v6h-9z"
  }));
};

exports.TwoToneBrandingWatermark = TwoToneBrandingWatermark;