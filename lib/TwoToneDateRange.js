"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDateRange =
/*#__PURE__*/
function TwoToneDateRange(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 8h14V6H5z"
  }), _react.default.createElement("path", {
    d: "M7 11h2v2H7zm12-7" + _fragments.bld + "m-4 3" + _fragments.bnw
  }));
};

exports.TwoToneDateRange = TwoToneDateRange;