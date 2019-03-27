"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDirectionsCar =
/*#__PURE__*/
function TwoToneDirectionsCar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 17h14v-5H5zm11.5-4" + _fragments.cq + "m-9 0" + _fragments.cp + "S8.33 16 7.5 16 6 15.33 6 14.5 6.67 13 7.5 13z"
  }), _react.default.createElement("path", {
    d: _fragments.vk + "h-11" + _fragments.ox + "L3 12" + _fragments.nm + "zM6.85 7h10.29l1.08 3.11H5.77zM19 17H5v-5h14z"
  }), _react.default.createElement("circle", {
    cx: "7.5",
    cy: "14.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "16.5",
    cy: "14.5",
    r: "1.5"
  }));
};

exports.TwoToneDirectionsCar = TwoToneDirectionsCar;