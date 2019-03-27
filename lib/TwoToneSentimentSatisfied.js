"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSentimentSatisfied =
/*#__PURE__*/
function TwoToneSentimentSatisfied(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.te + "m3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.75-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z"
  }), _react.default.createElement("circle", {
    cx: "15.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: "M12 16" + _fragments.biy + "m-.01-14" + _fragments.bb
  }));
};

exports.TwoToneSentimentSatisfied = TwoToneSentimentSatisfied;