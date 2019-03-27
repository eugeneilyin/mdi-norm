"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSystemUpdate =
/*#__PURE__*/
function TwoToneSystemUpdate(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 19h10V5H7zm4-6V8h2v5h3l-4 4-4-4z"
  }), _react.default.createElement("path", {
    d: "M16 13h-3V8h-2v5H8l4 4zm1-11.99" + _fragments.tv
  }));
};

exports.TwoToneSystemUpdate = TwoToneSystemUpdate;