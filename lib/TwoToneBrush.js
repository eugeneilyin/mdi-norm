"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBrush =
/*#__PURE__*/
function TwoToneBrush(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 17" + _fragments.bu + "c0 .74-.19 1.4-.5 1.95.17.03.33.05.5.05 1.1 0 2-.9 2-2z"
  }), _react.default.createElement("path", {
    d: "M11.75 15l8.96-8.96" + _fragments.fo + "l-1.34-1.34c-.2-.2-.45-.29-.7-.29s-.51.1-.71.29L9 12.25 11.75 15zM6 21c2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2zm0-4" + _fragments.ho + "c0 1.1-.9 2-2 2-.17 0-.33-.02-.5-.05.31-.55.5-1.21.5-1.95z"
  }));
};

exports.TwoToneBrush = TwoToneBrush;