"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledMouse =
/*#__PURE__*/
function FilledMouse(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15" + _fragments.if_ + "v-4H4zm7-13.93C7.05 1.56 4 4.92 4 9h7z"
  }));
};

exports.FilledMouse = FilledMouse;