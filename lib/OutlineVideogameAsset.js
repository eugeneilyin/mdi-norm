"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineVideogameAsset =
/*#__PURE__*/
function OutlineVideogameAsset(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
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

exports.OutlineVideogameAsset = OutlineVideogameAsset;