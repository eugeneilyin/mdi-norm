"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneExposure =
/*#__PURE__*/
function TwoToneExposure(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 19V5L5 19zm-4.5-4.5v-2H16v2h2V16h-2v2h-1.5v-2h-2v-1.5z"
  }), _react.default.createElement("path", {
    d: _fragments.dp + _fragments.bcw
  }));
};

exports.TwoToneExposure = TwoToneExposure;