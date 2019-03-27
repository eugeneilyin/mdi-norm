"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePerson =
/*#__PURE__*/
function TwoTonePerson(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 16" + _fragments.bfa
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "8",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M12 14" + _fragments.wm + "m6-6" + _fragments.co
  }));
};

exports.TwoTonePerson = TwoTonePerson;