"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineDepartureBoard =
/*#__PURE__*/
function OutlineDepartureBoard(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "5.5",
    cy: "16.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "12.5",
    cy: "16.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: _fragments.im
  }));
};

exports.OutlineDepartureBoard = OutlineDepartureBoard;