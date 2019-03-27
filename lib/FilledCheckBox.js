"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledCheckBox =
/*#__PURE__*/
function FilledCheckBox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 3" + _fragments.dx + _fragments.dy + "V5" + _fragments.dz + "m-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
  }));
};

exports.FilledCheckBox = FilledCheckBox;