"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineExposure =
/*#__PURE__*/
function OutlineExposure(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.dp + "m-1.41 2L5 17.59V5zM6.41 19L19 6.41V19zM6 7h5v1.5H6zm10 5.5h-1.5v2h-2V16h2v2H16v-2h2v-1.5h-2z"
  }));
};

exports.OutlineExposure = OutlineExposure;