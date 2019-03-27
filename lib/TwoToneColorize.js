"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneColorize =
/*#__PURE__*/
function TwoToneColorize(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.896 9.023l-.92-.92L17.67 5.41l.92.92z"
  }), _react.default.createElement("path", {
    d: "M20.71 5.63" + _fragments.bnx + _fragments.rd + _fragments.bci + "m8.98-9.97l-.93-.93 2.69-2.69.92.92-2.68 2.7z"
  }));
};

exports.TwoToneColorize = TwoToneColorize;