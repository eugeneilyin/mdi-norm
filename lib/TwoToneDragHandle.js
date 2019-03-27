"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneDragHandle =
/*#__PURE__*/
function TwoToneDragHandle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4 9h16v2H4zm0 4h16v2H4z"
  }));
};

exports.TwoToneDragHandle = TwoToneDragHandle;