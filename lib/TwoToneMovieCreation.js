"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMovieCreation =
/*#__PURE__*/
function TwoToneMovieCreation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 6.47V18h16v-8H5.76z"
  }), _react.default.createElement("path", {
    d: "M18 4" + _fragments.se + "H8l2 4H7L5 4" + _fragments.gx + "V4zm2 14H4V6.47L5.76 10H20z"
  }));
};

exports.TwoToneMovieCreation = TwoToneMovieCreation;