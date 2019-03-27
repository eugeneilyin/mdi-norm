"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFilterNone =
/*#__PURE__*/
function TwoToneFilterNone(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 3h14v14H7z"
  }), _react.default.createElement("path", {
    d: _fragments.bjj + "M21 1" + _fragments.in_
  }));
};

exports.TwoToneFilterNone = TwoToneFilterNone;