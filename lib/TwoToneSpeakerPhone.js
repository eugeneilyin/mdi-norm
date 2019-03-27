"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSpeakerPhone =
/*#__PURE__*/
function TwoToneSpeakerPhone(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9 12h6v8H9z"
  }), _react.default.createElement("path", {
    d: _fragments.sv + _fragments.su + "m7.86 2.94" + _fragments.qa
  }));
};

exports.TwoToneSpeakerPhone = TwoToneSpeakerPhone;