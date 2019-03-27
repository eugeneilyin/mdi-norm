"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneEventNote =
/*#__PURE__*/
function TwoToneEventNote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 5h14v2H5z"
  }), _react.default.createElement("path", {
    d: _fragments.sj + "m0-12H5V5h14zM7 11h10v2H7zm0 4h7v2H7z"
  }));
};

exports.TwoToneEventNote = TwoToneEventNote;