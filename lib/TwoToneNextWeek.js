"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNextWeek =
/*#__PURE__*/
function TwoToneNextWeek(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 20h16V9H4zm6-8.5l1-1 4 4-4 4-1-1 3-3-3-3z"
  }), _react.default.createElement("path", {
    d: "M11 18.5l4-4-4-4-1 1 3 3-3 3z" + _fragments.od + "m10 15H4V9h16z"
  }));
};

exports.TwoToneNextWeek = TwoToneNextWeek;