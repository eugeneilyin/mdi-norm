"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDirectionsRailway =
/*#__PURE__*/
function TwoToneDirectionsRailway(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 15.5" + _fragments.fp + "h9" + _fragments.dl + "V12H6zm6-3" + _fragments.cn + "zM12 3C6 3 6 4.2 6 5h12c0-.8 0-2-6-2z"
  }), _react.default.createElement("path", {
    d: "M20 15.5V5" + _fragments.rr + "s-8 .5-8 4v10.5" + _fragments.ri + "zm-2 0" + _fragments.ot + "h-9" + _fragments.l + "V12h12zm0-5.5H6V7h12zM6 5c0-.8 0-2 6-2s6 1.2 6 2zm6 11.5" + _fragments.dg
  }));
};

exports.TwoToneDirectionsRailway = TwoToneDirectionsRailway;