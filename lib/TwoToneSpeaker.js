"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSpeaker =
/*#__PURE__*/
function TwoToneSpeaker(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 4v16h10V4zm5 1" + _fragments.bnj + _fragments.mw + "s.89-2 2-2zm0 14" + _fragments.dd
  }), _react.default.createElement("path", {
    d: _fragments.bdf
  }));
};

exports.TwoToneSpeaker = TwoToneSpeaker;