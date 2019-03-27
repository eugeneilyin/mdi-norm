"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundChatBubbleOutline =
/*#__PURE__*/
function RoundChatBubbleOutline(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.kw + "m-1 14H6l-2 2V5" + _fragments.bc + "h14" + _fragments.n + "v10" + _fragments.x + "z"
  }));
};

exports.RoundChatBubbleOutline = RoundChatBubbleOutline;