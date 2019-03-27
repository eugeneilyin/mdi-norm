"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTableChart =
/*#__PURE__*/
function TwoToneTableChart(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z"
  }), _react.default.createElement("path", {
    d: "M20 3H5" + _fragments.bd + "h15" + _fragments.br + "M8 19H5v-9h3zm7 0h-5v-9h5zm5 0h-3v-9h3zm0-11H5V5h15z"
  }));
};

exports.TwoToneTableChart = TwoToneTableChart;