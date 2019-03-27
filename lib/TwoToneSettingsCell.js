"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSettingsCell =
/*#__PURE__*/
function TwoToneSettingsCell(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 17h8v1H8zM8 2h8v1H8z"
  }), _react.default.createElement("path", {
    d: _fragments.bdt
  }));
};

exports.TwoToneSettingsCell = TwoToneSettingsCell;