"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledReply =
/*#__PURE__*/
function FilledReply(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M10 9V5l-7 7 7 7v-4.1" + _fragments.bmp
  }));
};

exports.FilledReply = FilledReply;