"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineTouchApp =
/*#__PURE__*/
function OutlineTouchApp(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.pj + "m-.35 2.85" + _fragments.bgr + _fragments.bco
  }));
};

exports.OutlineTouchApp = OutlineTouchApp;