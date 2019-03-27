"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineZoomIn =
/*#__PURE__*/
function OutlineZoomIn(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.ip + "m.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"
  }));
};

exports.OutlineZoomIn = OutlineZoomIn;