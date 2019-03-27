"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePageview =
/*#__PURE__*/
function TwoTonePageview(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 18h16V6H4zm7.5-11c2.49 0 4.5 2.01 4.5 4.5 0 .88-.26 1.69-.7 2.39l2.44 2.43-1.42 1.42-2.44-2.44c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7z"
  }), _react.default.createElement("path", {
    d: _fragments.rf
  }));
};

exports.TwoTonePageview = TwoTonePageview;