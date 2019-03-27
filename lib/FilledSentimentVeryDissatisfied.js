"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledSentimentVeryDissatisfied =
/*#__PURE__*/
function FilledSentimentVeryDissatisfied(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "15.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: _fragments.ber
  }));
};

exports.FilledSentimentVeryDissatisfied = FilledSentimentVeryDissatisfied;