"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePhonePaused =
/*#__PURE__*/
function TwoTonePhonePaused(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.pt + "m8.66 13.21" + _fragments.oi
  }), _react.default.createElement("path", {
    d: "M20 15.5" + _fragments.w + "M15 3h2v7h-2zm4 0h2v7h-2z"
  }));
};

exports.TwoTonePhonePaused = TwoTonePhonePaused;