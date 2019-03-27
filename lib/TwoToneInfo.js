"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneInfo =
/*#__PURE__*/
function TwoToneInfo(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m1 13h-2v-6h2zm0-8h-2V7h2z"
  }), _react.default.createElement("path", {
    d: "M11 7" + _fragments.fs + "m0 4h2v6h-2zm1-9" + _fragments.i + _fragments.y
  }));
};

exports.TwoToneInfo = TwoToneInfo;