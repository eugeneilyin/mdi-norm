"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineDirectionsBus =
/*#__PURE__*/
function OutlineDirectionsBus(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 2" + _fragments.ij + "V20" + _fragments.j + "h1" + _fragments.f + "v-1h8v1" + _fragments.j + "h1" + _fragments.f + "v-1.78" + _fragments.ik + "V6" + _fragments.rr + "zm5.66 2.99H6.34C6.89 4.46 8.31 4 12 4s5.11.46 5.66.99zm.34 2V10H6V6.99zm-.34 9.74l-.29.27H6.63l-.29-.27C6.21 16.62 6 16.37 6 16v-4h12v4c0 .37-.21.62-.34.73z"
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

exports.OutlineDirectionsBus = OutlineDirectionsBus;