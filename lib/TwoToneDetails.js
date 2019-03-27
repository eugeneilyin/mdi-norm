"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneDetails =
/*#__PURE__*/
function TwoToneDetails(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6.38 6L12 16l5.63-10z"
  }), _react.default.createElement("path", {
    d: "M3 4l9 16 9-16zm3.38 2h11.25L12 16 6.38 6z"
  }));
};

exports.TwoToneDetails = TwoToneDetails;