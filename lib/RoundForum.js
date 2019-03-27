"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundForum =
/*#__PURE__*/
function RoundForum(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M20 6h-1v8" + _fragments.x + "H6v1" + _fragments.d + "h10l4 4V8" + _fragments.b + "zm-3 5V4" + _fragments.b + "H4" + _fragments.c + "v13l4-4h9" + _fragments.a + "z"
  }));
};

exports.RoundForum = RoundForum;