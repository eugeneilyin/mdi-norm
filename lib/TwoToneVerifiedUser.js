"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVerifiedUser =
/*#__PURE__*/
function TwoToneVerifiedUser(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bcg
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 6.3V11c0 4.52 2.98 8.69 7 9.93 4.02-1.23 7-5.41 7-9.93V6.3l-7-3.11zM18 9l-8 8-4-4 1.41-1.41L10 14.17l6.59-6.59z"
  }));
};

exports.TwoToneVerifiedUser = TwoToneVerifiedUser;