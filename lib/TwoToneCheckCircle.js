"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCheckCircle =
/*#__PURE__*/
function TwoToneCheckCircle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m-2 13" + _fragments.bip
  }), _react.default.createElement("path", {
    d: _fragments.ku + "m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
  }));
};

exports.TwoToneCheckCircle = TwoToneCheckCircle;