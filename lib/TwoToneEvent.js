"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneEvent =
/*#__PURE__*/
function TwoToneEvent(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 8h14V6H5z"
  }), _react.default.createElement("path", {
    d: "M19 4" + _fragments.bld + "m-7 5h5v5h-5z"
  }));
};

exports.TwoToneEvent = TwoToneEvent;