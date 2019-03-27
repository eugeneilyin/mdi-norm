"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledWarning =
/*#__PURE__*/
function FilledWarning(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M1 21h22L12 2 1 21zm12-3" + _fragments.zt + "v-4h2z"
  }));
};

exports.FilledWarning = FilledWarning;