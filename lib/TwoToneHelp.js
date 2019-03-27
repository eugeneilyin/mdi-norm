"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneHelp =
/*#__PURE__*/
function TwoToneHelp(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m1 14" + _fragments.me + "m0-3h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2H8" + _fragments.pl + "c0 2.5-3 2.75-3 5z"
  }), _react.default.createElement("path", {
    d: "M11 16" + _fragments.fs + "m1-14" + _fragments.i + _fragments.y + "m0-14" + _fragments.xn
  }));
};

exports.TwoToneHelp = TwoToneHelp;