"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVibration =
/*#__PURE__*/
function TwoToneVibration(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 5h8v14H8z"
  }), _react.default.createElement("path", {
    d: "M19 7h2v10h-2zm3 2h2v6h-2zM0 9h2v6H0zm16.5-6" + _fragments.bej + "M3 7h2v10H3z"
  }));
};

exports.TwoToneVibration = TwoToneVibration;