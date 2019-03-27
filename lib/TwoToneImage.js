"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneImage =
/*#__PURE__*/
function TwoToneImage(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.blc + "m4-5.86l2.14 2.58 3-3.87L18 17H6z"
  }), _react.default.createElement("path", {
    d: _fragments.qi + "m-4.86-7.14l-3 3.86L9 13.14 6 17h12z"
  }));
};

exports.TwoToneImage = TwoToneImage;