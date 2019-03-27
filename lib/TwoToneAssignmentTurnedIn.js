"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAssignmentTurnedIn =
/*#__PURE__*/
function TwoToneAssignmentTurnedIn(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.blc + "m2.41-7.41L10 14.17l6.59-6.59L18 9l-8 8-4-4 1.41-1.41z"
  }), _react.default.createElement("path", {
    d: "M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6" + _fragments.mv
  }));
};

exports.TwoToneAssignmentTurnedIn = TwoToneAssignmentTurnedIn;