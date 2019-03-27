"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlinePrintDisabled =
/*#__PURE__*/
function OutlinePrintDisabled(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bmb + "M8 5h8v3h-5.34l2 2H19" + _fragments.n + "v4l-2 .01V13h-2.34l4 4H22v-6" + _fragments.gb + "h-1V3H6v.36l2 2z"
  }), _react.default.createElement("circle", {
    cx: "18",
    cy: "11.51",
    r: "1"
  }));
};

exports.OutlinePrintDisabled = OutlinePrintDisabled;