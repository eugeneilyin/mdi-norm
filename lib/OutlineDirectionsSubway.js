"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineDirectionsSubway =
/*#__PURE__*/
function OutlineDirectionsSubway(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 2c-4 0-8 .5-8 4v9.5" + _fragments.ri + "V6" + _fragments.rr + "zm5.66 3H6.43c.61-.52 2.06-1 5.57-1 3.71 0 5.12.46 5.66 1zM11 7v3H6V7zm2 0h5v3h-5zm3.5 10h-9" + _fragments.l + "V12h12v3.5" + _fragments.ot + "z"
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "14.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "15.5",
    cy: "14.5",
    r: "1.5"
  }));
};

exports.OutlineDirectionsSubway = OutlineDirectionsSubway;