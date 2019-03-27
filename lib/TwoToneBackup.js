"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBackup =
/*#__PURE__*/
function TwoToneBackup(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.li + "m-5.76.96v3h-2.91v-3H8l4-4 4 4z"
  }), _react.default.createElement("path", {
    d: _fragments.de + "M8 13h2.55v3h2.9v-3H16l-4-4z"
  }));
};

exports.TwoToneBackup = TwoToneBackup;