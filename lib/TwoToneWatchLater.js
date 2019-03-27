"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneWatchLater =
/*#__PURE__*/
function TwoToneWatchLater(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m4.2 12.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
  }), _react.default.createElement("path", {
    d: _fragments.kf + _fragments.y + "m.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7z"
  }));
};

exports.TwoToneWatchLater = TwoToneWatchLater;