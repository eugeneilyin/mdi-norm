"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSmartphone =
/*#__PURE__*/
function TwoToneSmartphone(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 5h10v14H7z"
  }), _react.default.createElement("path", {
    d: "M17 1.01" + _fragments.tv
  }));
};

exports.TwoToneSmartphone = TwoToneSmartphone;