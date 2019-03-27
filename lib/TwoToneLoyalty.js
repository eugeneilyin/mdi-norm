"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLoyalty =
/*#__PURE__*/
function TwoToneLoyalty(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bnh + "m6.5 3.7l.6-.6c.37-.37.89-.6 1.45-.6 1.13 0 2.05.92 2.05 2.05 0 .57-.23 1.08-.6 1.45L13 17.5 9.5 14c-.37-.38-.6-.89-.6-1.45 0-1.13.92-2.05 2.05-2.05.57 0 1.08.23 1.45.61z"
  }), _react.default.createElement("path", {
    d: _fragments.bhk
  }), _react.default.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: _fragments.ws
  }));
};

exports.TwoToneLoyalty = TwoToneLoyalty;