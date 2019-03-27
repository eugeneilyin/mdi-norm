"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneThumbDown =
/*#__PURE__*/
function TwoToneThumbDown(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 12v2h9l-1.34 5.34L15 15V5H6z"
  }), _react.default.createElement("path", {
    d: _fragments.nj + "m0 12l-4.34 4.34L12 14H3v-2l3-7h9zm4-12h4v12h-4z"
  }));
};

exports.TwoToneThumbDown = TwoToneThumbDown;