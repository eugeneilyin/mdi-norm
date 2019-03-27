"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFilterBAndW =
/*#__PURE__*/
function TwoToneFilterBAndW(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 5h-7v6l7 8zm-7 14v-8l-7 8z"
  }), _react.default.createElement("path", {
    d: "M21 19V5" + _fragments.b + "H5" + _fragments.be + "zm-9 0H5l7-8V5h7v14l-7-8z"
  }));
};

exports.TwoToneFilterBAndW = TwoToneFilterBAndW;