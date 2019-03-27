"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVolumeUp =
/*#__PURE__*/
function TwoToneVolumeUp(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 13h2.83L10 15.17V8.83L7.83 11H5z"
  }), _react.default.createElement("path", {
    d: "M3 9v6h4l5 5V4L7 9zm7-.17v6.34L7.83 13H5v-2h2.83zm4-.86v8.05c1.48-.73 2.5-2.25 2.5-4.02 0-1.77-1.02-3.29-2.5-4.03zm0-4.74" + _fragments.bkt
  }));
};

exports.TwoToneVolumeUp = TwoToneVolumeUp;