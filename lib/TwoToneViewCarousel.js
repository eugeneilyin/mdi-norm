"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneViewCarousel =
/*#__PURE__*/
function TwoToneViewCarousel(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M18 6h4v11h-4zM7 19h10V4H7zM9 6h6v11H9zM2 6h4v11H2z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M9 6h6v11H9z"
  }));
};

exports.TwoToneViewCarousel = TwoToneViewCarousel;