"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundChildCare =
/*#__PURE__*/
function RoundChildCare(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "14.5",
    cy: "10.5",
    r: "1.25"
  }), _react.default.createElement("circle", {
    cx: "9.5",
    cy: "10.5",
    r: "1.25"
  }), _react.default.createElement("path", {
    d: "M16.1 14H7.9c-.19 0-.32.2-.23.37C8.5 15.94 10.13 17 12 17s3.5-1.06 4.33-2.63c.08-.17-.05-.37-.23-.37zm6.84-2.66" + _fragments.ew
  }));
};

exports.RoundChildCare = RoundChildCare;