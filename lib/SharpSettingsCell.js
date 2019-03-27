"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpSettingsCell =
/*#__PURE__*/
function SharpSettingsCell(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M7 24h2v-2H7zm4 0" + _fragments.bim + "M6 0v20h12V0zm10 16H8V4h8z"
  }));
};

exports.SharpSettingsCell = SharpSettingsCell;