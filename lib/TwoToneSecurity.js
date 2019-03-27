"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSecurity =
/*#__PURE__*/
function TwoToneSecurity(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 3.19L5 6.3V12h7v8.93c3.72-1.15 6.47-4.82 7-8.94h-7z"
  }), _react.default.createElement("path", {
    d: "M12 1L3 5v6" + _fragments.rx + "V5zV12H5V6.3l7-3.11v8.8h7c-.53 4.12-3.28 7.79-7 8.94z"
  }));
};

exports.TwoToneSecurity = TwoToneSecurity;