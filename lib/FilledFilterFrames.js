"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledFilterFrames =
/*#__PURE__*/
function FilledFilterFrames(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bar + "M18 8H6v10h12"
  }));
};

exports.FilledFilterFrames = FilledFilterFrames;