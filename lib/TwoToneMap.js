"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMap =
/*#__PURE__*/
function TwoToneMap(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 18.31l3-1.16V5.45L5 6.46zm11 .24l3-1.01V5.69l-3 1.17z"
  }), _react.default.createElement("path", {
    d: _fragments.pv + "M8 17.15l-3 1.16V6.46l3-1.01zm6 1.38l-4-1.4V5.47l4 1.4zm5-.99l-3 1.01V6.86l3-1.16z"
  }));
};

exports.TwoToneMap = TwoToneMap;