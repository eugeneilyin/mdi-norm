"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVideogameAsset =
/*#__PURE__*/
function TwoToneVideogameAsset(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 16h18V8H3zm15.5-7" + _fragments.cq + "m-4 3" + _fragments.cq + "M4 11h2V9h2v2h2v2H8v2H6v-2H4z"
  }), _react.default.createElement("path", {
    d: _fragments.wo + "m0 10H3V8h18zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z"
  }), _react.default.createElement("circle", {
    cx: "14.5",
    cy: "13.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "18.5",
    cy: "10.5",
    r: "1.5"
  }));
};

exports.TwoToneVideogameAsset = TwoToneVideogameAsset;