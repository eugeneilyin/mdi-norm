"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSubtitles =
/*#__PURE__*/
function TwoToneSubtitles(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 18h16V6H4zm14-2" + _fragments.me + "m-8-6h8v2h-8zm-4 0h2v2H6zm0 4h8v2H6z"
  }), _react.default.createElement("path", {
    d: "M20 4" + _fragments.na + "m0 14H4V6h16zM6 10h2v2H6zm0 4h8v2H6zm10 0" + _fragments.fs + "m-6-4h8v2h-8z"
  }));
};

exports.TwoToneSubtitles = TwoToneSubtitles;