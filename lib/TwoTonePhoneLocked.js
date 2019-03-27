"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePhoneLocked =
/*#__PURE__*/
function TwoTonePhoneLocked(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.pt + "m8.66 13.21" + _fragments.oi
  }), _react.default.createElement("path", {
    d: "M20 15.5" + _fragments.w + _fragments.ux + _fragments.kk
  }));
};

exports.TwoTonePhoneLocked = TwoTonePhoneLocked;