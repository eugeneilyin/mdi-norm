"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePermScanWifi =
/*#__PURE__*/
function TwoTonePermScanWifi(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 5c-3.26 0-6.2.85-9.08 2.65L12 18.83l9.08-11.16C18.18 5.85 15.25 5 12 5zm1 11h-2v-6h2zm-2-8V6h2v2z"
  }), _react.default.createElement("path", {
    d: _fragments.yd
  }));
};

exports.TwoTonePermScanWifi = TwoTonePermScanWifi;