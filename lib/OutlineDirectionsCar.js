"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineDirectionsCar =
/*#__PURE__*/
function OutlineDirectionsCar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
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

exports.OutlineDirectionsCar = OutlineDirectionsCar;