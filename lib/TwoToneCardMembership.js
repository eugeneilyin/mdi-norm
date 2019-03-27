"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCardMembership =
/*#__PURE__*/
function TwoToneCardMembership(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 4h16v6H4zm0 9h16v2H4z"
  }), _react.default.createElement("path", {
    d: _fragments.bbf + "V4h16z"
  }));
};

exports.TwoToneCardMembership = TwoToneCardMembership;