"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePermDeviceInformation =
/*#__PURE__*/
function TwoTonePermDeviceInformation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 20h10v1H7zM7 3h10v1H7z"
  }), _react.default.createElement("path", {
    d: _fragments.bow + "m0-14H7V3h10z"
  }));
};

exports.TwoTonePermDeviceInformation = TwoTonePermDeviceInformation;