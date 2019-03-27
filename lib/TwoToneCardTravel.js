"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCardTravel =
/*#__PURE__*/
function TwoToneCardTravel(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 17h16v2H4zm13-7h-2V8H9v2H7V8H4v6h16V8h-3z"
  }), _react.default.createElement("path", {
    d: _fragments.wp + "V8h3v2h2V8h6v2h2V8h3z"
  }));
};

exports.TwoToneCardTravel = TwoToneCardTravel;