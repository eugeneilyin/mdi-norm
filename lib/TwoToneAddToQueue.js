"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAddToQueue =
/*#__PURE__*/
function TwoToneAddToQueue(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 17h18V5H3zm5-7h3V7h2v3h3v2h-3v3h-2v-3H8z"
  }), _react.default.createElement("path", {
    d: "M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3z" + _fragments.xw
  }));
};

exports.TwoToneAddToQueue = TwoToneAddToQueue;