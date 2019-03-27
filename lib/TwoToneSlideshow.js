"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSlideshow =
/*#__PURE__*/
function TwoToneSlideshow(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.blc + "m5-11l5 4-5 4z"
  }), _react.default.createElement("path", {
    d: _fragments.qi + "M10 8v8l5-4z"
  }));
};

exports.TwoToneSlideshow = TwoToneSlideshow;