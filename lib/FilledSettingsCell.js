"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledSettingsCell =
/*#__PURE__*/
function FilledSettingsCell(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M7 24h2v-2H7zm4 0" + _fragments.bim + "M16 .01L8 0C6.9 0 6 .9 6 2v16" + _fragments.d + "h8" + _fragments.a + "V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8z"
  }));
};

exports.FilledSettingsCell = FilledSettingsCell;