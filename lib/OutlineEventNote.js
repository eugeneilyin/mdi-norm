"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineEventNote =
/*#__PURE__*/
function OutlineEventNote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.sj + "M5 7V5h14v2zm2 4h10v2H7zm0 4h7v2H7z"
  }));
};

exports.OutlineEventNote = OutlineEventNote;