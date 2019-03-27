"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCheckBox =
/*#__PURE__*/
function TwoToneCheckBox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.blc + "m2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01z"
  }), _react.default.createElement("path", {
    d: _fragments.qi + "M17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"
  }));
};

exports.TwoToneCheckBox = TwoToneCheckBox;