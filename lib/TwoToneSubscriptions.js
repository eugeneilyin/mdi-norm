"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSubscriptions =
/*#__PURE__*/
function TwoToneSubscriptions(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 20h16v-8H4zm6-7.27L16 16l-6 3.26z"
  }), _react.default.createElement("path", {
    d: _fragments.bnl
  }));
};

exports.TwoToneSubscriptions = TwoToneSubscriptions;