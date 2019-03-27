"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledInfo =
/*#__PURE__*/
function FilledInfo(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.kt + "m1 15h-2v-6h2zm0-8h-2V7h2z"
  }));
};

exports.FilledInfo = FilledInfo;