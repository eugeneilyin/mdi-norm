"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSms =
/*#__PURE__*/
function TwoToneSms(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 17.17L5.17 16H20V4H4zM15 9" + _fragments.bnw + "M7 9h2v2H7z"
  }), _react.default.createElement("path", {
    d: _fragments.kw + _fragments.baa + "M7 9h2v2H7zm8 0" + _fragments.bnw
  }));
};

exports.TwoToneSms = TwoToneSms;