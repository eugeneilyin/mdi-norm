"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundTitle =
/*#__PURE__*/
function RoundTitle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M5 5.5C5 6.33 5.67 7 6.5 7h4v10.5" + _fragments.rg + "V7h4" + _fragments.dl + "S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5z"
  }));
};

exports.RoundTitle = RoundTitle;