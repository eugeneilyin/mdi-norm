"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneToday =
/*#__PURE__*/
function TwoToneToday(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 3" + _fragments.yt + "V9h14zm0-12H5V5h14zm-7 4H7v5h5z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 5h14v2H5z"
  }));
};

exports.TwoToneToday = TwoToneToday;