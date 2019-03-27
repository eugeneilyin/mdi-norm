"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundDock =
/*#__PURE__*/
function RoundDock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M9 23h6" + _fragments.o + "H9" + _fragments.bf + "zm7-21.99L8 1" + _fragments.bd + "h8" + _fragments.kb + "M16 15H8V5h8z"
  }));
};

exports.RoundDock = RoundDock;