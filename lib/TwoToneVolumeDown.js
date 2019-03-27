"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVolumeDown =
/*#__PURE__*/
function TwoToneVolumeDown(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 13h2.83L12 15.17V8.83L9.83 11H7z"
  }), _react.default.createElement("path", {
    d: _fragments.bfs
  }));
};

exports.TwoToneVolumeDown = TwoToneVolumeDown;