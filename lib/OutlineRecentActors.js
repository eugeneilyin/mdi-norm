"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineRecentActors =
/*#__PURE__*/
function OutlineRecentActors(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21 5h2v14h-2zm-4 0h2v14h-2zm-3 0H2" + _fragments.bbt + "h12" + _fragments.zi + "zm-1 12H3V7h10z"
  }), _react.default.createElement("circle", {
    cx: "8",
    cy: "9.94",
    r: "1.95"
  }), _react.default.createElement("path", {
    d: "M11.89 15.35c0-1.3-2.59-1.95-3.89-1.95s-3.89.65-3.89 1.95V16h7.78z"
  }));
};

exports.OutlineRecentActors = OutlineRecentActors;