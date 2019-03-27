"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneViewWeek =
/*#__PURE__*/
function TwoToneViewWeek(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21 4H3" + _fragments.e + "v14" + _fragments.j + "h18" + _fragments.f + "V5" + _fragments.g + "zM8 18H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M10 6h4v12h-4zm6 0h4v12h-4zM4 6h4v12H4z"
  }));
};

exports.TwoToneViewWeek = TwoToneViewWeek;