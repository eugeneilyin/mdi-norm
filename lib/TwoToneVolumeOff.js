"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVolumeOff =
/*#__PURE__*/
function TwoToneVolumeOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7.83 11H5v2h2.83L10 15.17v-3.76l-1.29-1.29z"
  }), _react.default.createElement("path", {
    d: _fragments.qf + "zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41" + _fragments.kx
  }));
};

exports.TwoToneVolumeOff = TwoToneVolumeOff;