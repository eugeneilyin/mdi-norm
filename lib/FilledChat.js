"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledChat =
/*#__PURE__*/
function FilledChat(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.jl + "M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"
  }));
};

exports.FilledChat = FilledChat;