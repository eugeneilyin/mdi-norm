"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpToday =
/*#__PURE__*/
function SharpToday(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21 3h-3" + _fragments.mm + "H3v18h18zm-2 16H5V8h14zM7 10h5v5H7z"
  }));
};

exports.SharpToday = SharpToday;