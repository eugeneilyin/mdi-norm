"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledIndeterminateCheckBox =
/*#__PURE__*/
function FilledIndeterminateCheckBox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.dp + "m-2 10H7v-2h10z"
  }));
};

exports.FilledIndeterminateCheckBox = FilledIndeterminateCheckBox;