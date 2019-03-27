"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSave =
/*#__PURE__*/
function TwoToneSave(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 5v14h14V7.83L16.17 5zm7 13" + _fragments.ee + "m3-8H6V6h9z"
  }), _react.default.createElement("path", {
    d: "M17 3" + _fragments.dx + _fragments.a + "V7zm2 16H5V5h11.17L19 7.83zm-7-7" + _fragments.fk + "M6 6h9v4H6z"
  }));
};

exports.TwoToneSave = TwoToneSave;