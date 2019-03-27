"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneChromeReaderMode =
/*#__PURE__*/
function TwoToneChromeReaderMode(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 6h8v13H3z"
  }), _react.default.createElement("path", {
    d: "M21 4H3" + _fragments.c + "v13" + _fragments.d + "h18" + _fragments.sq + "zM11 19H3V6h8zm10 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"
  }));
};

exports.TwoToneChromeReaderMode = TwoToneChromeReaderMode;