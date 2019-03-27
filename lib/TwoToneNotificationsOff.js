"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNotificationsOff =
/*#__PURE__*/
function TwoToneNotificationsOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 17h8v-.24L8.34 9.1C8.12 9.68 8 10.32 8 11zm4-10.5c-.19 0-.37.03-.55.06L16 11.1V11c0-2.48-1.51-4.5-4-4.5z"
  }), _react.default.createElement("path", {
    d: _fragments.ow
  }));
};

exports.TwoToneNotificationsOff = TwoToneNotificationsOff;