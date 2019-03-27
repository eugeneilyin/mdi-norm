"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneModeComment =
/*#__PURE__*/
function TwoToneModeComment(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bgm + "m0 15.17L18.83 16H4V4h16z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 4v12h14.83L20 17.17V4z"
  }));
};

exports.TwoToneModeComment = TwoToneModeComment;