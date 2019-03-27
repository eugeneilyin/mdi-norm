"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRemoveFromQueue =
/*#__PURE__*/
function TwoToneRemoveFromQueue(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 17h18V5H3zm5-7h8v2H8z"
  }), _react.default.createElement("path", {
    d: _fragments.xw + "M8 10h8v2H8z"
  }));
};

exports.TwoToneRemoveFromQueue = TwoToneRemoveFromQueue;