"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneEnhancedEncryption =
/*#__PURE__*/
function TwoToneEnhancedEncryption(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 20h12V10H6zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8z"
  }), _react.default.createElement("path", {
    d: _fragments.bpf + "m-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z"
  }));
};

exports.TwoToneEnhancedEncryption = TwoToneEnhancedEncryption;