"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBorderColor =
/*#__PURE__*/
function FilledBorderColor(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M17.75 7L14 3.25l-10 10V17h3.75zm2.96-2.96" + _fragments.fo + "L18.37.29" + _fragments.cg + "L15 2.25 18.75 6z"
  }), _react.default.createElement("path", {
    opacity: ".36",
    d: "M0 20h24v4H0z"
  }));
};

exports.FilledBorderColor = FilledBorderColor;