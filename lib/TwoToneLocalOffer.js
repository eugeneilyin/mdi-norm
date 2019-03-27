"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLocalOffer =
/*#__PURE__*/
function TwoToneLocalOffer(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bnh
  }), _react.default.createElement("path", {
    d: "M12.41 2.58" + _fragments.ex + "M13 20.01L4 11V4h7v-.01l9 9-7 7.02z"
  }), _react.default.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "1.5"
  }));
};

exports.TwoToneLocalOffer = TwoToneLocalOffer;