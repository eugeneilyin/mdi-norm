"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVideocam =
/*#__PURE__*/
function TwoToneVideocam(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 8h10v8H5z"
  }), _react.default.createElement("path", {
    d: "M17 7" + _fragments.g + _fragments.qm + _fragments.f + "v-3.5l4 4v-11l-4 4zm-2 9H5V8h10z"
  }));
};

exports.TwoToneVideocam = TwoToneVideocam;