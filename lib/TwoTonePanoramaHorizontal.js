"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePanoramaHorizontal =
/*#__PURE__*/
function TwoTonePanoramaHorizontal(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 6.54v10.91c2.6-.77 5.28-1.16 8-1.16s5.4.39 8 1.16V6.54c-2.6.78-5.28 1.17-8 1.16-2.72 0-5.4-.39-8-1.16z"
  }), _react.default.createElement("path", {
    d: _fragments.ps + "M20 17.45" + _fragments.bmi + "z"
  }));
};

exports.TwoTonePanoramaHorizontal = TwoTonePanoramaHorizontal;