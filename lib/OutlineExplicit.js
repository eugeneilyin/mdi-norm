"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineExplicit =
/*#__PURE__*/
function OutlineExplicit(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.qi + "m-4-4h-4v-2h4v-2h-4V9h4V7H9v10h6z"
  }));
};

exports.OutlineExplicit = OutlineExplicit;