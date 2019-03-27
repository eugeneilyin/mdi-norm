"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCloudCircle =
/*#__PURE__*/
function TwoToneCloudCircle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m4.08 12H8.5C6.57 16 5 14.43 5 12.5c0-1.8 1.36-3.29 3.12-3.48.73-1.4 2.19-2.36 3.88-2.36 2.12 0 3.89 1.51 4.29 3.52 1.52.1 2.71 1.35 2.71 2.89 0 1.62-1.31 2.93-2.92 2.93z"
  }), _react.default.createElement("path", {
    d: _fragments.os
  }));
};

exports.TwoToneCloudCircle = TwoToneCloudCircle;