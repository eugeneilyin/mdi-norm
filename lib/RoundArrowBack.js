"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundArrowBack =
/*#__PURE__*/
function RoundArrowBack(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59" + _fragments.dc + "l6.59 6.59" + _fragments.bn + "L7.83 13H19" + _fragments.o + "z"
  }));
};

exports.RoundArrowBack = RoundArrowBack;