"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledDock =
/*#__PURE__*/
function FilledDock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M8 23h8v-2H8zm8-21.99L8 1" + _fragments.bd + "h8" + _fragments.kb + "M16 15H8V5h8z"
  }));
};

exports.FilledDock = FilledDock;