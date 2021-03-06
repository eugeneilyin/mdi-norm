"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneQueueMusic =
/*#__PURE__*/
function TwoToneQueueMusic(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "16",
    cy: "17",
    r: "1"
  }), _react.default.createElement("path", {
    d: "M3 10h12v2H3zm0 4h8v2H3zm0-8h12v2H3zm14 8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5zM16 18" + _fragments.bj
  }));
};

exports.TwoToneQueueMusic = TwoToneQueueMusic;