"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneClass =
/*#__PURE__*/
function TwoToneClass(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M13 13l-3-2.25L7 13V4H6v16h12V4h-5z"
  }), _react.default.createElement("path", {
    d: _fragments.zp
  }));
};

exports.TwoToneClass = TwoToneClass;