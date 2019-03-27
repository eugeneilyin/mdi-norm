"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAspectRatio =
/*#__PURE__*/
function TwoToneAspectRatio(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19.01h18V4.99H3zM14 15h3v-3h2v5h-5zM5 7h5v2H7v3H5z"
  }), _react.default.createElement("path", {
    d: _fragments.cf + _fragments.bja + "M7 9h3V7H5v5h2zm12 3h-2v3h-3v2h5z"
  }));
};

exports.TwoToneAspectRatio = TwoToneAspectRatio;