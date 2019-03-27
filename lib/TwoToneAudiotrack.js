"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAudiotrack =
/*#__PURE__*/
function TwoToneAudiotrack(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "10",
    cy: "17",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M10 21" + _fragments.ck + "V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-6" + _fragments.cn + "z"
  }));
};

exports.TwoToneAudiotrack = TwoToneAudiotrack;