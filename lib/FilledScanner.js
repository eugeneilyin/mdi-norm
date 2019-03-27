"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledScanner =
/*#__PURE__*/
function FilledScanner(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bbo + "M7 17H5v-2h2zm12 0H9v-2h10z"
  }));
};

exports.FilledScanner = FilledScanner;