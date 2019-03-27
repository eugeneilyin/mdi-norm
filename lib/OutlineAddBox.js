"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineAddBox =
/*#__PURE__*/
function OutlineAddBox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bkd + "m-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"
  }));
};

exports.OutlineAddBox = OutlineAddBox;