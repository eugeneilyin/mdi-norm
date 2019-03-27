"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineMarkunreadMailbox =
/*#__PURE__*/
function OutlineMarkunreadMailbox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6" + _fragments.gx + "V8" + _fragments.b + "z"
  }));
};

exports.OutlineMarkunreadMailbox = OutlineMarkunreadMailbox;