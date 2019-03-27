"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundFormatColorText =
/*#__PURE__*/
function RoundFormatColorText(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".36",
    d: "M2 20h20" + _fragments.bnj + "H2" + _fragments.bo + "s.9-2 2-2z"
  }), _react.default.createElement("path", {
    d: "M10.63 3.93L6.06 15.58c-.27.68.23 1.42.97 1.42.43 0 .82-.27.98-.68L8.87 14h6.25l.87 2.32c.15.41.54.68.98.68.73 0 1.24-.74.97-1.42L13.37 3.93C13.14 3.37 12.6 3 12 3c-.6 0-1.15.37-1.37.93zM9.62 12L12 5.67 14.38 12z"
  }));
};

exports.RoundFormatColorText = RoundFormatColorText;