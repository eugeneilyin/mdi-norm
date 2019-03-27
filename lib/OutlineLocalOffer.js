"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineLocalOffer =
/*#__PURE__*/
function OutlineLocalOffer(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bhk
  }), _react.default.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "1.5"
  }));
};

exports.OutlineLocalOffer = OutlineLocalOffer;