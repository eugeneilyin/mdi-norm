"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var FilledNetworkCell =
/*#__PURE__*/
function FilledNetworkCell(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M2 22h20V2z"
  }), _react.default.createElement("path", {
    d: "M17 7L2 22h15z"
  }));
};

exports.FilledNetworkCell = FilledNetworkCell;