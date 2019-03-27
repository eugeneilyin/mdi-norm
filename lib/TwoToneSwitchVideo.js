"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSwitchVideo =
/*#__PURE__*/
function TwoToneSwitchVideo(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 17h12V7H4zm4-8v2h4V9l3 3-3 3v-2H8v2l-3-3 3-3z"
  }), _react.default.createElement("path", {
    d: _fragments.bmx
  }));
};

exports.TwoToneSwitchVideo = TwoToneSwitchVideo;