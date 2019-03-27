"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpInbox =
/*#__PURE__*/
function SharpInbox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21 3H3.01v18H21zm-2 12" + _fragments.boj + "H5V5h14z"
  }));
};

exports.SharpInbox = SharpInbox;