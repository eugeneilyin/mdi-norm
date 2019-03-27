"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneChatBubble =
/*#__PURE__*/
function TwoToneChatBubble(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 18l2-2h14V4H4z"
  }), _react.default.createElement("path", {
    d: _fragments.kw + "m0 14H6l-2 2V4h16z"
  }));
};

exports.TwoToneChatBubble = TwoToneChatBubble;