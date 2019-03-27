"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDock =
/*#__PURE__*/
function TwoToneDock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 5h8v10H8z"
  }), _react.default.createElement("path", {
    d: "M8 21h8v2H8zm8-19.99L8 1" + _fragments.bd + "h8" + _fragments.kb + "M16 15H8V5h8z"
  }));
};

exports.TwoToneDock = TwoToneDock;