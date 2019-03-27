"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneViewDay =
/*#__PURE__*/
function TwoToneViewDay(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 10h15v4H4z"
  }), _react.default.createElement("path", {
    d: "M2 18h19v2H2zM20 8" + _fragments.bab + "V9" + _fragments.g + "zm-1 6H4v-4h15zM2 4h19v2H2z"
  }));
};

exports.TwoToneViewDay = TwoToneViewDay;