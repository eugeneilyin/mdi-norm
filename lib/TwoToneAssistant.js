"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAssistant =
/*#__PURE__*/
function TwoToneAssistant(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9.83 18L12 20.17l1.59-1.59.58-.58H19V4H5v14zm.29-8.88L12 5l1.88 4.12L18 11l-4.12 1.88L12 17l-1.88-4.12L6 11z"
  }), _react.default.createElement("path", {
    d: "M5 20h4l3 3 3-3h4" + _fragments.a + "V4" + _fragments.b + "H5" + _fragments.bd + "zM5 4h14v14" + _fragments.zj + "zm7 13l1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z"
  }));
};

exports.TwoToneAssistant = TwoToneAssistant;