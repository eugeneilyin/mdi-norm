"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledIso =
/*#__PURE__*/
function FilledIso(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.dp + _fragments.bmv + "m-2-2v-1.5h-5V17z"
  }));
};

exports.FilledIso = FilledIso;