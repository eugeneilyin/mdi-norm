"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSettingsRemote =
/*#__PURE__*/
function TwoToneSettingsRemote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M10 21h4V11h-4zm2-9" + _fragments.bk
  }), _react.default.createElement("path", {
    d: "M15 9H9" + _fragments.bbt + "h6" + _fragments.f + "V10" + _fragments.g + "zm-1 12h-4V11h4z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "1"
  }), _react.default.createElement("path", {
    d: _fragments.fh
  }));
};

exports.TwoToneSettingsRemote = TwoToneSettingsRemote;