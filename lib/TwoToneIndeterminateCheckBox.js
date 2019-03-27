"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneIndeterminateCheckBox =
/*#__PURE__*/
function TwoToneIndeterminateCheckBox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.blc + "m2-8h10v2H7z"
  }), _react.default.createElement("path", {
    d: _fragments.qi + "M7 11h10v2H7z"
  }));
};

exports.TwoToneIndeterminateCheckBox = TwoToneIndeterminateCheckBox;